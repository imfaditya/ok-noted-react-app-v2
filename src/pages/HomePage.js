import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import AddButton from '../components/AddButton';
import Loading from '../components/Loading';
import NoteList from '../components/NoteList';
import SearchBar from '../components/SearchBar';
import ToggleArchiveButton from '../components/ToggleArchiveButton';
import LocaleContext from '../contexts/LocaleContext';
import UserContext from '../contexts/UserContext';
import useSearch from '../hooks/UseSearch';
import { getActiveNotes } from '../utils/network-data';

function HomePage() {
  const [notes, setNotes] = React.useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [keyword, setKeyword] = useSearch(searchParams.get('keyword') || '', setSearchParams);
  const [loading, setLoading] = React.useState(true);
  const {locale, setLocale} = React.useContext(LocaleContext);
  const {user} = React.useContext(UserContext);

  React.useEffect(() => {
    const getData = async () => {
      const { error, data } = await getActiveNotes();
      if(!error) {
        setNotes(data);
        setTimeout(() => {
          setLoading(false);
        }, 500)
      }
    }
    getData();
  }, [])
  
  const filteredNotes = notes.filter((note) => note.title.toLowerCase().includes(keyword.toLowerCase()));

  return (
    <>
      <section className='main-bar'>
        <h3 className='main-bar__title'>{locale === 'en' ? 'Active Notes' : 'Catatan Aktif'}</h3>
        <SearchBar keyword={keyword} keywordChange={setKeyword}/>
        <ToggleArchiveButton location={'/'}/>
        <AddButton/>
      </section>
      {!loading ? <NoteList notes={filteredNotes}/> : <Loading/>}
    </>
  );
}

export default HomePage;
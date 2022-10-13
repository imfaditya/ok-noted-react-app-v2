import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import AddButton from '../components/AddButton';
import NoteList from '../components/NoteList';
import SearchBar from '../components/SearchBar';
import ToggleArchiveButton from '../components/ToggleArchiveButton';
import UserContext from '../contexts/UserContext';
import useSearch from '../hooks/UseSearch';
import { getActiveNotes } from '../utils/network-data';

function HomePage() {
  const [notes, setNotes] = React.useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [keyword, setKeyword] = useSearch(searchParams.get('keyword') || '', setSearchParams);
  const [loading, setLoading] = React.useState(true);
  const {user} = React.useContext(UserContext);

  React.useEffect(() => {
    const getData = async () => {
      const { error, data } = await getActiveNotes();
      if(!error) {
        setNotes(data);
        setLoading(false);
      }
    }
    getData();
  }, [])
  
  const filteredNotes = notes.filter((note) => note.title.toLowerCase().includes(keyword.toLowerCase()));

  return (
    <>
      <section className='main-bar'>
        <h3 className='main-bar__title'>Active Notes</h3>
        <SearchBar keyword={keyword} keywordChange={setKeyword}/>
        <ToggleArchiveButton location={'/'}/>
        <AddButton/>
      </section>
      {!loading ? <NoteList notes={filteredNotes}/> : null}
    </>
  );
}

export default HomePage;
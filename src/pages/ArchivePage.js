import React from 'react';
import { useSearchParams } from 'react-router-dom';
import Loading from '../components/Loading';
import NoteList from '../components/NoteList';
import SearchBar from '../components/SearchBar';
import ToggleArchiveButton from '../components/ToggleArchiveButton';
import LocaleContext from '../contexts/LocaleContext';
import useSearch from '../hooks/UseSearch';
import { getArchivedNotes } from '../utils/network-data';

function ArchivePage() {
  const [notes, setNotes] = React.useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [keyword, setKeyword] = useSearch(searchParams.get('keyword') || '', setSearchParams);
  const [loading, setLoading] = React.useState(true);
  const {locale} = React.useContext(LocaleContext);

  React.useEffect(() => {
    const getData = async () => {
      const { error, data } = await getArchivedNotes();
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
        <h3 className='main-bar__title'>{locale === 'en' ? 'Archive Notes' : 'Arsip Catatan'}</h3>
        <SearchBar keyword={keyword} keywordChange={setKeyword}/>
        <ToggleArchiveButton location={'/archive'}/>
      </section>
      {!loading ? <NoteList notes={filteredNotes}/> : <Loading/>}
    </>
  );
}

export default ArchivePage;
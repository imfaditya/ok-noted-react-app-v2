import React from 'react';
import { useSearchParams } from 'react-router-dom';
import NoteList from '../components/NoteList';
import SearchBar from '../components/SearchBar';
import ToggleArchiveButton from '../components/ToggleArchiveButton';
import useSearch from '../hooks/UseSearch';
import { getArchivedNotes } from '../utils/network-data';

function ArchivePage() {
  const [notes, setNotes] = React.useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [keyword, setKeyword] = useSearch(searchParams.get('keyword') || '', setSearchParams);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const getData = async () => {
      const { error, data } = await getArchivedNotes();
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
        <ToggleArchiveButton location={'/archive'}/>
      </section>
      {!loading ? <NoteList notes={filteredNotes}/> : null}
    </>
  );
}

export default ArchivePage;
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import NoteList from '../components/NoteList';
import SearchBar from '../components/SearchBar';
import useSearch from '../hooks/UseSearch';
import { getArchivedNotes } from '../utils/network-data';

function ArchivePage() {
  const [notes, setNotes] = React.useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [keyword, setKeyword] = useSearch(searchParams.get('keyword') || '', setSearchParams);

  React.useEffect(() => {
    const getData = async () => {
      const { error, data } = await getArchivedNotes();
      !error && setNotes(data);
    }
    getData();
  }, [])

  const filteredNotes = notes.filter((note) => note.title.toLowerCase().includes(keyword.toLowerCase()));

  return (
    <>
      <SearchBar keyword={keyword} keywordChange={setKeyword}/>
      <NoteList notes={filteredNotes}/>
    </>
  )
}

export default ArchivePage;
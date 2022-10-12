import React from 'react';
import { useSearchParams } from 'react-router-dom';
import AddButton from '../components/AddButton';
import NoteList from '../components/NoteList';
import SearchBar from '../components/SearchBar';
import UserContext from '../contexts/UserContext';
import useSearch from '../hooks/UseSearch';
import { getActiveNotes } from '../utils/network-data';

function HomePage() {
  const [notes, setNotes] = React.useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [keyword, setKeyword] = useSearch(searchParams.get('keyword') || '', setSearchParams);
  const {user} = React.useContext(UserContext);

  React.useEffect(() => {
    const getData = async () => {
      const { error, data } = await getActiveNotes();
      !error && setNotes(data);
    }
    getData();
  }, [])
  
  const filteredNotes = notes.filter((note) => note.title.toLowerCase().includes(keyword.toLowerCase()));

  return (
    <>
      <section className='main-bar'>
        <SearchBar keyword={keyword} keywordChange={setKeyword}/>
        <AddButton/>
      </section>
      <NoteList notes={filteredNotes}/>
    </>
  );
}

export default HomePage;
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import NoteList from '../components/NoteList';
import SearchBar from '../components/SearchBar';
import UserContext from '../contexts/UserContext';
import { getActiveNotes } from '../utils/network-data';

function HomePage() {
  const [notes, setNotes] = React.useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [keyword, setKeyword] = React.useState(() => searchParams.get('keyword') || '');
  const {user} = React.useContext(UserContext);

  React.useEffect(() => {
    const getData = async () => {
      const { error, data } = await getActiveNotes();
      !error && setNotes(data);
    }
    getData();
  }, [])
  
  const onKeywordChangeHandler = (keyword) => {
    setKeyword(keyword);
    setSearchParams({keyword});
  }
  
  const filteredNotes = notes.filter((note) => note.title.toLowerCase().includes(keyword.toLowerCase()));

  return (
    <>
      <h3 className='greeting'>Welcome back, {user.name}</h3>
      <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler}/>
      <NoteList notes={filteredNotes}/>
    </>
  );
}

export default HomePage;
import React from 'react';

function SearchBar({keyword, keywordChange}) {
  return (
    <input placeholder='Search...' type='text' className='form__input search' value={keyword} onChange={(event) => keywordChange(event.target.value)}/>
  );
}

export default SearchBar;
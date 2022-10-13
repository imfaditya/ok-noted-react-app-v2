import React from 'react';
import LocaleContext from '../contexts/LocaleContext';

function SearchBar({keyword, keywordChange}) {
  const {locale} = React.useContext(LocaleContext);

  return (
    <input placeholder={locale === 'en' ? 'Search...' : 'Cari...'} type='text' className='form__input search' value={keyword} onChange={(event) => keywordChange(event.target.value)}/>
  );
}

export default SearchBar;
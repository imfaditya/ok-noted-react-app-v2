import React from 'react';
import LocaleContext from '../contexts/LocaleContext';
import PropTypes from 'prop-types';

function SearchBar({keyword, keywordChange}) {
  const {locale} = React.useContext(LocaleContext);

  return (
    <input placeholder={locale === 'en' ? 'Search...' : 'Cari...'} type='text' className='form__input search' value={keyword} onChange={(event) => keywordChange(event.target.value)}/>
  );
}

SearchBar.propTypes = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
}

export default SearchBar;
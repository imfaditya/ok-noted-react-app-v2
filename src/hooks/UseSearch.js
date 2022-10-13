import React from 'react';
import PropTypes from 'prop-types';

function useSearch(defaultValue, setSearchParams) {
  const [value, setValue] = React.useState(defaultValue);
  const onValueChangeHandler = (keyword) =>  {
    setValue(keyword);
    setSearchParams({keyword});
  }; 
  return [value, onValueChangeHandler];
}

useSearch.propTypes = {
  defaultValue: PropTypes.string.isRequired,
  setSearchParams: PropTypes.func,
}

export default useSearch;
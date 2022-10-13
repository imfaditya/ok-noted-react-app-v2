import React from 'react';
import PropTypes from 'prop-types';

function useInput(defaultValue, limitCharacter = null) {
  const [value, setValue] = React.useState(defaultValue);
  const handleValueChange = (event) => {
    if(limitCharacter !== null) {
      if((event.target.value).length <= limitCharacter) {
        setValue(event.target.value);
      }
    } else {
      setValue(event.target.value);
    }
  }
  return [value, handleValueChange];
}

useInput.propTypes = {
  defaultValue: PropTypes.string.isRequired,
  limitCharacter: PropTypes.number,
}

export default useInput;
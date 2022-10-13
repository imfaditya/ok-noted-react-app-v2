import React from 'react';
import PropTypes from 'prop-types';

function UnarchiveNoteButton({id, onUnarchive}) {  
  return (
    <button className='archive-button' onClick={(() => onUnarchive(id))}>Unarchive</button>
  );
}

UnarchiveNoteButton.propTypes = {
  id: PropTypes.string.isRequired,
  onUnarchive: PropTypes.func.isRequired,
}

export default UnarchiveNoteButton;
import React from 'react';
import PropTypes from 'prop-types';

function ArchiveNoteButton({id, onArchive}) {
  return (
    <button className='archive-button' onClick={(() => onArchive(id))}>Archive</button>
  );
}

ArchiveNoteButton.propTypes = {
  id: PropTypes.string.isRequired,
  onArchive: PropTypes.func.isRequired,
}

export default ArchiveNoteButton;
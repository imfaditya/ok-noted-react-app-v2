import React from 'react';

function ArchiveNoteButton({id, onArchive}) {
  
  return (
    <button className='archive-button' onClick={(() => onArchive(id))}>Archive</button>
  );
}

export default ArchiveNoteButton;
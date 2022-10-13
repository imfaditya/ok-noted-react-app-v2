function UnarchiveNoteButton({id, onUnarchive}) {
  
  return (
    <button className='archive-button' onClick={(() => onUnarchive(id))}>Unarchive</button>
  );
}

export default UnarchiveNoteButton;
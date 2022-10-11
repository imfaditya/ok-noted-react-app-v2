import React from 'react';
import NoteItem from './NoteItem';

function NoteList({notes}) {
  if(!notes.length) {
    return <h1>Empty Notes</h1>
  } else {
    return (
      <div className='note-list'>
        {
          notes.map((note) => {
            return <NoteItem key={note.id} {...note}/>
          })
        }
      </div>
    );
  }
}

export default NoteList;
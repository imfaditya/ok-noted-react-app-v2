import React from 'react';
import NoteItem from './NoteItem';
import { BsFileTextFill } from 'react-icons/bs'

function NoteList({notes}) {
  if(!notes.length) {
    return (
      <div className='empty-notes'>
        <BsFileTextFill/>
        <h3>Empty Notes</h3>
      </div>
    );
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
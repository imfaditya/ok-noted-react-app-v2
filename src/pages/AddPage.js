import React from 'react';
import { useNavigate } from 'react-router-dom';
import NewNoteForm from '../components/NewNoteForm';
import { addNote } from '../utils/network-data';

function AddPage() {
  const navigate = useNavigate();

  const addNoteHandler = (note) => {
    addNote(note);
    navigate('/')
  } 

  return (
    <section className='new-note'>
      <h3 className='new-note__title'>Insert New Note</h3>
      <NewNoteForm addNoteHandler={addNoteHandler}/>
    </section>
  );
}

export default AddPage;
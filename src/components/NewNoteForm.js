import React from 'react';
import useInput from '../hooks/UseInput';

function NewNoteForm({addNoteHandler}) {
  const [title, setTitle] = useInput('');
  const [body, setBody] = React.useState('');

  const onBodyChange = (event) => {
    setBody(event.target.innerHTML);
  }

  const addNewNote = (event) => {
    event.preventDefault();
    addNoteHandler({title, body});
  }

  return (
    <form className='form__wrapper' onSubmit={addNewNote}>
      <input className='form__input' type="text" placeholder='Title' value={title} onChange={setTitle}/>
      {/* <input className='form__input' type="text" placeholder='Note...' value={body} onChange={setBody}/> */}
      <div className='form__input input-body' data-placeholder='Notes...' onInput={onBodyChange} contentEditable></div>
      <button className='form__button'>Save</button>
    </form>
  );
}

export default NewNoteForm;
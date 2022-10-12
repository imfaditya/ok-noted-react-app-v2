import React from 'react';
import useInput from '../hooks/UseInput';

function NewNoteForm({addNoteHandler}) {
  const [title, setTitle] = useInput('');
  const [body, setBody] = useInput('');

  return (
    <form className='form__wrapper' onSubmit={(() => addNoteHandler({title, body}))}>
      <input className='form__input' type="text" placeholder='Title' value={title} onChange={setTitle}/>
      <input className='form__input' type="text" placeholder='Note...' value={body} onChange={setBody}/>
      <button className='form__button'>Save</button>
    </form>
  );
}

export default NewNoteForm;
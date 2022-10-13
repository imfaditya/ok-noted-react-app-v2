import React from 'react';
import LocaleContext from '../contexts/LocaleContext';
import useInput from '../hooks/UseInput';
import PropTypes from 'prop-types';
import Swal from 'sweetalert2';

function NewNoteForm({addNoteHandler}) {
  const {locale} = React.useContext(LocaleContext);
  const [title, setTitle] = useInput('', 50);
  const [body, setBody] = React.useState('');

  const onBodyChange = (event) => {
    setBody(event.target.innerHTML);
  }

  const addNewNote = (event) => {
    Swal.fire({
      icon: 'success',
      title: `${locale === 'en' ? 'New Note Added!' : 'Catatan Ditambahkan!'}`,
      showConfirmButton: false,
      timer: 1500
    })
    event.preventDefault();
    addNoteHandler({title, body});
  }

  return (
    <form className='form__wrapper' onSubmit={addNewNote}>
      <input className='form__input' type="text" placeholder={locale === 'en' ? 'Title' : 'Judul'} value={title} onChange={setTitle}/>
      <p className='form__title-count'>{title.length} / 50</p>
      <div className='form__input input-body' data-placeholder={locale === 'en' ? 'Notes...' : 'Catatan...'} onInput={onBodyChange} contentEditable></div>
      <button className='form__button'>{locale === 'en' ? 'Save' : 'Simpan'}</button>
    </form>
  );
}

NewNoteForm.propTypes = {
  addNoteHandler: PropTypes.func.isRequired,
}

export default NewNoteForm;
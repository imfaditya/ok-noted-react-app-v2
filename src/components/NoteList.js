import React from 'react';
import NoteItem from './NoteItem';
import { BsFileTextFill } from 'react-icons/bs'
import LocaleContext from '../contexts/LocaleContext';
import PropTypes from 'prop-types';

function NoteList({notes}) {
  const {locale} = React.useContext(LocaleContext);

  if(!notes.length) {
    return (
      <div className='empty-notes'>
        <BsFileTextFill/>
        <h3>{locale === 'en' ? 'Empty Notes' : 'Catatan Kosong'}</h3>
      </div>
    );
  } else {
    return (
      <section className='note-list'>
        {
          notes.map((note) => {
            return <NoteItem key={note.id} {...note}/>
          })
        }
      </section>
    );
  }
}

NoteList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default NoteList;
import React from 'react';
import PropTypes from 'prop-types';
import Swal from 'sweetalert2';
import LocaleContext from '../contexts/LocaleContext';
import ThemeContext from '../contexts/ThemeContext';

function UnarchiveNoteButton({id, onUnarchive}) { 
  const {locale} = React.useContext(LocaleContext);
  const {theme} = React.useContext(ThemeContext);

  return (
    <button 
      className='archive-button' 
      onClick={(() => {
        Swal.fire({
          icon: 'success',
          background: `${theme === 'dark' ? '#1a1a1a' : '#ffffff'}`,
          color: `${theme === 'dark' ? '#ffffff' : '#121212'}`,
          title: `${locale === 'en' ? 'Success!' : 'Berhasil'}`,
          showConfirmButton: false,
          timer: 1000
        })
        onUnarchive(id)
      })}>
      Unarchive
    </button>
  );
}

UnarchiveNoteButton.propTypes = {
  id: PropTypes.string.isRequired,
  onUnarchive: PropTypes.func.isRequired,
}

export default UnarchiveNoteButton;
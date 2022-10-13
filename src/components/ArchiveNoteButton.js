import React from 'react';
import PropTypes from 'prop-types';
import Swal from 'sweetalert2';
import LocaleContext from '../contexts/LocaleContext';
import ThemeContext from '../contexts/ThemeContext';

function ArchiveNoteButton({id, onArchive}) {
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
        onArchive(id);
      })}>
      Archive
    </button>
  );
}

ArchiveNoteButton.propTypes = {
  id: PropTypes.string.isRequired,
  onArchive: PropTypes.func.isRequired,
}

export default ArchiveNoteButton;
import React from 'react';
import PropTypes from 'prop-types';
import Swal from 'sweetalert2';
import LocaleContext from '../contexts/LocaleContext';
import ThemeContext from '../contexts/ThemeContext';

function DeleteButton({id, onDelete}) {
  const {locale} = React.useContext(LocaleContext);
  const {theme} = React.useContext(ThemeContext);

  return (
    <button 
      className='delete-button' 
      onClick={(() => {
        Swal.fire({
          title: `${locale === 'en' ? 'Delete Note?' : 'Hapus Catatan?'}`,
          icon: 'error',
          background: `${theme === 'dark' ? '#1a1a1a' : '#ffffff'}`,
          color: `${theme === 'dark' ? '#ffffff' : '#121212'}`,
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes'
        }).then((result) => {
          if (result.isConfirmed) {
            onDelete(id);
          }
        })
        
      })}>
      Delete
    </button>
  );
}

DeleteButton.propTypes = {
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
}

export default DeleteButton;
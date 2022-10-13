import React from 'react';
import { useNavigate } from 'react-router-dom';
import LocaleContext from '../contexts/LocaleContext';

function AddButton() {
  const navigate = useNavigate();
  const {locale} = React.useContext(LocaleContext);

  return (
    <button className='add-button' onClick={(() => navigate('/add'))}>{locale === 'en' ? 'Create New Note' : 'Buat Catatan Baru'}</button>
  );
}

export default AddButton;
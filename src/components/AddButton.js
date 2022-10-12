import React from 'react';
import { useNavigate } from 'react-router-dom';

function AddButton() {
  const navigate = useNavigate();

  return (
    <button className='add-button' onClick={(() => navigate('/add'))}>New Note</button>
  );
}

export default AddButton;
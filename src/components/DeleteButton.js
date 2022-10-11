import React from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteNote } from '../utils/network-data';

function DeleteButton({id}) {
  const navigate = useNavigate();

  const onDelete = async () => {
    const { error } = await deleteNote(id);
    !error && navigate('/');
  }

  return (
    <button className='delete-button' onClick={onDelete}>Delete</button>
  );
}

export default DeleteButton;
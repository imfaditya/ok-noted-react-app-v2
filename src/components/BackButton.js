import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BsFillArrowLeftSquareFill } from 'react-icons/bs'

function BackButton({location}) {
  const navigate = useNavigate();

  return (
    <BsFillArrowLeftSquareFill className='back-button' onClick={() => navigate(location)}/>
  );
}

export default BackButton;
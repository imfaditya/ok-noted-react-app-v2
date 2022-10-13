import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BsFillArrowLeftSquareFill } from 'react-icons/bs'
import PropTypes from 'prop-types';

function BackButton({location}) {
  const navigate = useNavigate();

  return (
    <BsFillArrowLeftSquareFill className='back-button' onClick={() => navigate(location)}/>
  );
}

BackButton.propTypes = {
  location: PropTypes.string.isRequired,
}

export default BackButton;
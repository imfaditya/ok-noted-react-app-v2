import React from 'react';
import { BsFillArchiveFill, BsFillHouseFill } from 'react-icons/bs'; 
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

function ToggleArchiveButton({location}) {
  const navigate = useNavigate();
  let onClick = null;

  if(location === '/') {
    onClick = () => {
      navigate('/archive')
    }
  } else {
    onClick = () => {
      navigate('/')
    }
  }

  return (
    <button 
      onClick={(event) => {
        event.preventDefault();
        onClick();
      }} 
      className='toggle-archive-button'>
      {location === '/' ? <BsFillArchiveFill fill='white'/> : <BsFillHouseFill fill='white'/>}
    </button>
  )
}

ToggleArchiveButton.propTypes = {
  location: PropTypes.string.isRequired,
}

export default ToggleArchiveButton;
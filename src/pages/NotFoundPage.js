import React from 'react';
import { BsFillEmojiFrownFill } from 'react-icons/bs'
import BackButton from '../components/BackButton';

function NotFoundPage() {
  return (
    <div className='not-found'>
      <BackButton location={'/'}/>
      <BsFillEmojiFrownFill/>
      <h2>404 Not Found</h2>
  </div>
  );
}

export default NotFoundPage;
import React from 'react';
import logo from '../assets/icons8-note-100.png';
import Navigation from './Navigation';

function TopBar() {
  return (
    <div className='top-bar'>
      <section className='header'>
        <img className='header__logo' src={logo} alt="logo"/>
        <h1 className='header__title'>Ok. Noted</h1>
      </section>
      <Navigation/>
    </div>
  );
}

export default TopBar;
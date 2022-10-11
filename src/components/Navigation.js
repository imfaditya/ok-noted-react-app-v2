import React from 'react';
import logo from '../assets/icons8-note-100.png';
import { BsSunFill, BsFillMoonFill, BsTranslate, BsFillArchiveFill, BsFillDoorClosedFill, BsMoonFill } from 'react-icons/bs';
import UserContext from '../contexts/UserContext';
import { putAccessToken } from '../utils/network-data';
import ThemeContext from '../contexts/ThemeContext';

function Navigation() {
  const {user, setUser} = React.useContext(UserContext);
  const {theme, toggleTheme} = React.useContext(ThemeContext);

  const onLogout = () => {
    setUser(null);
    putAccessToken('');
  }

  return (
    <div className='container-header'>
      <header className='header'>
        <img className='header__logo' src={logo} alt="logo"/>
        <h1 className='header__title'>Ok. Noted</h1>
      </header>
      <nav>
        <ul className='nav-link'>
          <li><button className='nav-link__icon' onClick={toggleTheme}>{theme === 'dark' ? <BsSunFill/> : <BsMoonFill/>}</button></li>
          <li><BsTranslate className='nav-link__icon'/></li>
          {
            user !== null &&
            <>
              <li><BsFillArchiveFill className='nav-link__icon'/></li>
              <li><BsFillDoorClosedFill onClick={onLogout} className='nav-link__icon'/></li>
            </>
          }
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
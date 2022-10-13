import React from 'react';
import { BsSunFill, BsTranslate, BsFillDoorClosedFill, BsMoonFill } from 'react-icons/bs';
import UserContext from '../contexts/UserContext';
import { putAccessToken } from '../utils/network-data';
import ThemeContext from '../contexts/ThemeContext';
import { useNavigate } from 'react-router-dom';
import LocaleContext from '../contexts/LocaleContext';

function Navigation() {
  const {user, setUser} = React.useContext(UserContext);
  const {theme, toggleTheme} = React.useContext(ThemeContext);
  const {toggleLocale} = React.useContext(LocaleContext);
  const navigate = useNavigate();

  const onLogout = () => {
    setUser(null);
    putAccessToken('');
    navigate('/')
  }

  return (
    <nav>
      <ul className='nav-link'>
        <li><button className='nav-link__icon' onClick={toggleTheme}>{theme === 'dark' ? <BsSunFill/> : <BsMoonFill/>}</button></li>
        <li><button className='nav-link__icon' onClick={toggleLocale}><BsTranslate/></button></li>
        {user !== null && <li><BsFillDoorClosedFill onClick={onLogout} className='nav-link__icon'/></li>}
      </ul>
    </nav>
  );
}

export default Navigation;
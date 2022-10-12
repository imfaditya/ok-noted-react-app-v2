import React from 'react';
import { BsSunFill, BsFillMoonFill, BsTranslate, BsFillArchiveFill, BsFillDoorClosedFill, BsMoonFill } from 'react-icons/bs';
import UserContext from '../contexts/UserContext';
import { putAccessToken } from '../utils/network-data';
import ThemeContext from '../contexts/ThemeContext';
import { useNavigate } from 'react-router-dom';

function Navigation() {
  const {user, setUser} = React.useContext(UserContext);
  const {theme, toggleTheme} = React.useContext(ThemeContext);
  const navigate = useNavigate();

  const onLogout = () => {
    setUser(null);
    putAccessToken('');
    navigate('/')
  }

  const toggleArchiveButton = () => {
    navigate('/archive');
  }

  

  return (
    <nav>
      <ul className='nav-link'>
        <li><button className='nav-link__icon' onClick={toggleTheme}>{theme === 'dark' ? <BsSunFill/> : <BsMoonFill/>}</button></li>
        <li><BsTranslate className='nav-link__icon'/></li>
        {
          user !== null &&
          <>
            <li><BsFillArchiveFill onClick={toggleArchiveButton} className='nav-link__icon'/></li>
            <li><BsFillDoorClosedFill onClick={onLogout} className='nav-link__icon'/></li>
          </>
        }
      </ul>
    </nav>
  );
}

export default Navigation;
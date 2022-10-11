import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import ThemeContext from './contexts/ThemeContext';
import UserContext from './contexts/UserContext';
import DetailPage from './pages/DetailPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { getUserLogged } from './utils/network-data';

function NoteApp() {
  const [user, setUser] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [theme, setTheme] = React.useState('dark');

  React.useEffect(() => {
    const checkUser = async () => {
      const {data} = await getUserLogged();
      setUser(data);
      setLoading(false);
    }
    checkUser();
  }, [])

  React.useEffect((prevProps, prevState) => {
    if(prevState !== theme) {
      document.documentElement.setAttribute('data-theme', theme);
    }
  }, [theme])

  const themeContextValue = React.useMemo(() => {
    return {
      theme,
      toggleTheme: () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
      },
    }
  }, [theme])

  const userContextValue = React.useMemo(() => {
    return {
      user,
      setUser,
    }
  }, [user])

  if(loading === true) {
    return null;
  }

  if(user === null) {
    return (
      <ThemeContext.Provider value={themeContextValue}>
        <UserContext.Provider value={userContextValue}>
          <Navigation/>
          <Routes>
            <Route path='/' element={<LoginPage/>}/>
            <Route path='/register' element={<RegisterPage/>}/>
          </Routes>
        </UserContext.Provider>
      </ThemeContext.Provider>
    );
  }

  return (
    <ThemeContext.Provider value={themeContextValue}>
      <UserContext.Provider value={userContextValue}>
        <Navigation/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/detail/:id' element={<DetailPage/>}/>
        </Routes>
      </UserContext.Provider>
    </ThemeContext.Provider>
  );
}

export default NoteApp;
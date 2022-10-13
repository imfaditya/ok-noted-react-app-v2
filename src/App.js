import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ThemeContext from './contexts/ThemeContext';
import UserContext from './contexts/UserContext';
import DetailPage from './pages/DetailPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { getUserLogged } from './utils/network-data';
import TopBar from './components/TopBar';
import ArchivePage from './pages/ArchivePage';
import AddPage from './pages/AddPage';
import NotFoundPage from './pages/NotFoundPage';

function NoteApp() {
  const [user, setUser] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [theme, setTheme] = React.useState(localStorage.getItem('theme') || 'dark');

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
        const newTheme = (theme === 'dark' ? 'light' : 'dark');
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
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
          <header>
            <TopBar/>
          </header>
          <main>
          <Routes>
            <Route path='/*' element={<LoginPage/>}/>
            <Route path='/register' element={<RegisterPage/>}/>
          </Routes>
          </main>
        </UserContext.Provider>
      </ThemeContext.Provider>
    );
  }

  return (
    <ThemeContext.Provider value={themeContextValue}>
      <UserContext.Provider value={userContextValue}>
        <header>
          <TopBar/>
        </header>
        <main>
          <Routes>
            <Route path='/*' element={<NotFoundPage/>}/>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/detail/:id' element={<DetailPage/>}/>
            <Route path='/archive' element={<ArchivePage/>}/>
            <Route path='/add' element={<AddPage/>}/>
          </Routes>
        </main>
      </UserContext.Provider>
    </ThemeContext.Provider>
  );
}

export default NoteApp;
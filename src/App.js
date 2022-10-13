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
import LocaleContext from './contexts/LocaleContext';

function NoteApp() {
  const [user, setUser] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [theme, setTheme] = React.useState(localStorage.getItem('theme') || 'dark');
  const [locale, setLocale] = React.useState(localStorage.getItem('locale') || '');

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

  const localeContextValue = React.useMemo(() => {
    return {
      locale,
      toggleLocale: () => {
        const newLocale = (locale === 'en' ? 'id' : 'en');
        setLocale(newLocale);
        localStorage.setItem('theme', newLocale);
      }
    }
  }, [locale])

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
        <LocaleContext.Provider value={localeContextValue}>
          <header>
            <TopBar/>
          </header>
          <main>
          <Routes>
            <Route path='/*' element={<LoginPage/>}/>
            <Route path='/register' element={<RegisterPage/>}/>
          </Routes>
          </main>
        </LocaleContext.Provider>
        </UserContext.Provider>
      </ThemeContext.Provider>
    );
  }

  return (
    <UserContext.Provider value={userContextValue}>
      <ThemeContext.Provider value={themeContextValue}>
        <LocaleContext.Provider value={localeContextValue}>
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
        </LocaleContext.Provider>
      </ThemeContext.Provider>
    </UserContext.Provider>
  );
}

export default NoteApp;
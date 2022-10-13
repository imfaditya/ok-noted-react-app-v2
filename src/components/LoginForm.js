import React from 'react';
import UserContext from '../contexts/UserContext';
import useInput from '../hooks/UseInput';
import { getUserLogged, login, putAccessToken } from '../utils/network-data';
import { Link } from 'react-router-dom';
import LocaleContext from '../contexts/LocaleContext';

function LoginForm() {
  const [email, setEmail] = useInput('');
  const [password, setPassword] = useInput('');
  const {setUser} = React.useContext(UserContext);
  const {locale} = React.useContext(LocaleContext);

  const onSubmit = async (event) => {
    event.preventDefault();
    const {error, data} = await login({email, password});

    if(!error) {
      putAccessToken(data.accessToken);
      onSuccessLogin();
    }
  }

  const onSuccessLogin = async () => {
    const {data} = await getUserLogged();
    setUser(data);
  }

  return (
    <form className='form' onSubmit={onSubmit}>
      <h2 className='form__title'>{locale === 'en' ? 'Please Log In First' : 'Silahkan Masuk Dahulu'}</h2>
      <input className='form__input' type='email' placeholder='Email' value={email} onChange={setEmail} required/>
      <input className='form__input' type='password' placeholder='Password' value={password} onChange={setPassword} required/>
      <button className='form__button' type='submit'>{locale === 'en' ? 'Log In' : 'Masuk'}</button>
      <Link className='form__navigate' to='/register'>{locale === 'en' ? 'Register' : 'Daftar'}</Link>
    </form>
  );
}

export default LoginForm;
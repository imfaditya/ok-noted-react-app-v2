import React from 'react';
import UserContext from '../contexts/UserContext';
import useInput from '../hooks/UseInput';
import { getUserLogged, login, putAccessToken } from '../utils/network-data';
import { Link } from 'react-router-dom';

function LoginForm() {
  const [email, setEmail] = useInput('');
  const [password, setPassword] = useInput('');
  const {setUser} = React.useContext(UserContext);

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
    <form className='login-form' onSubmit={onSubmit}>
      <h2 className='login-form__title'>Please Log In First</h2>
      <input className='input-form' type='email' placeholder='Email' value={email} onChange={setEmail}/>
      <input className='input-form' type='password' placeholder='Password' value={password} onChange={setPassword}/>
      <button className='button-submit' type='submit'>Log In</button>
      <Link className='login-form__register' to='/register'>Register?</Link>
    </form>
  );
}

export default LoginForm;
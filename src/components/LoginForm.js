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
    <form className='form' onSubmit={onSubmit}>
      <h2 className='form__title'>Please Log In First</h2>
      <input className='form__input' type='email' placeholder='Email' value={email} onChange={setEmail}/>
      <input className='form__input' type='password' placeholder='Password' value={password} onChange={setPassword}/>
      <button className='form__button' type='submit'>Log In</button>
      <Link className='form__navigate' to='/register'>Register</Link>
    </form>
  );
}

export default LoginForm;
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useInput from '../hooks/UseInput';
import { register } from '../utils/network-data';

function RegisterForm() {
  const [name, setName] = useInput('');
  const [email, setEmail] = useInput('');
  const [password, setPassword] = useInput('');
  const [repeatPassword, setRepeatPassword] = useInput('');
  const navigate = useNavigate();

  const onSubmit = async (event) => {
    event.preventDefault();
    if (password === repeatPassword) {
      const { error } = await register({ name, email, password});
      (!error && navigate('/'));
    } else {
      alert('Password and Confirm Password Must Same!');
    }
  }

  return (
    <form className='form' onSubmit={onSubmit}>
      <h2 className='form__title'>Enter Your Data</h2>
      <input type='text' className='form__input' value={name} onChange={setName} placeholder='Name'/>
      <input type='email' className='form__input' value={email} onChange={setEmail} placeholder='Email'/>
      <input type='password' className='form__input' value={password} onChange={setPassword} placeholder='Password'/>
      <input type="password" className='form__input' value={repeatPassword} onChange={setRepeatPassword} placeholder='Confirm Password'/>
      <button className='form__button'>Register</button>
      <Link className='form__navigate' to='/'>Login</Link>
    </form>
  );
}



export default RegisterForm;
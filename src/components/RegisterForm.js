import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LocaleContext from '../contexts/LocaleContext';
import useInput from '../hooks/UseInput';
import { register } from '../utils/network-data';
import Swal from 'sweetalert2';
import ThemeContext from '../contexts/ThemeContext';

function RegisterForm() {
  const [name, setName] = useInput('');
  const [email, setEmail] = useInput('');
  const [password, setPassword] = useInput('');
  const [repeatPassword, setRepeatPassword] = useInput('');
  const {locale} = React.useContext(LocaleContext);
  const {theme} = React.useContext(ThemeContext);
  const navigate = useNavigate();

  const onSubmit = async (event) => {
    event.preventDefault();
    if (password === repeatPassword) {
      const { error } = await register({ name, email, password});
      if(!error) {
        Swal.fire({
          icon: 'success',
          background: `${theme === 'dark' ? '#1a1a1a' : '#ffffff'}`,
          color: `${theme === 'dark' ? '#ffffff' : '#121212'}`,
          text: `${locale === 'en' ? 'Account Successfully Created' : 'Akun Berhasil Dibuat'}`,
          showConfirmButton: false,
          timer: 1000
        })
        navigate('/');
      }
    } else {
      Swal.fire({
        icon: 'error',
        background: `${theme === 'dark' ? '#1a1a1a' : '#ffffff'}`,
        color: `${theme === 'dark' ? '#ffffff' : '#121212'}`,
        text: `${locale === 'en' ? 'Password & Confirm Password Not Same!' : 'Password & Konfirmasi Password Tidak Sesuai!'}`,
        showConfirmButton: false,
        timer: 1000
      })
    }
  }

  return (
    <form className='form' onSubmit={onSubmit}>
      <h2 className='form__title'>{locale === 'en' ? 'Enter Your Data' : 'Masukan Data Anda'}</h2>
      <input type='text' className='form__input' value={name} onChange={setName} placeholder='Name' required/>
      <input type='email' className='form__input' value={email} onChange={setEmail} placeholder='Email' required/>
      <input type='password' className='form__input' value={password} onChange={setPassword} placeholder='Password' required/>
      <input type='password' className='form__input' value={repeatPassword} onChange={setRepeatPassword} placeholder={locale === 'en' ? 'Confirm Password' : 'Konfirmasi Password'} required/>
      <button className='form__button'>{locale === 'en' ? 'Register' : 'Daftar'}</button>
      <Link className='form__navigate' to='/'>Login</Link>
    </form>
  );
}



export default RegisterForm;
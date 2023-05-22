import React, { useRef } from 'react';
import { Link, Navigate } from 'react-router-dom';

function Login({ setSend, loggedIn }) {
  const form = useRef();
  const formSubmit = (e) => {
    e.preventDefault();
    setSend(form.current.elements);
  }

  return (
    <>
      {
        !loggedIn ? (
          <section className='source'>
            <h1 className='title source__title'>Entrar</h1>
            <form className='form source__form' ref={form}>
              <input className='source__input source__text' type='email' placeholder='E-mail' id='mail'></input>
              <input className='source__input source__text' type='password' placeholder='Senha' id='password'></input>
              <button className='source__button source__button__text' onClick={formSubmit}>Entrar</button>
              <Link className='subtitle source__link' to='/signup'>Ainda não é membro? Inscreva-se aqui!</Link>
              <Link className='subtitle source__link' to='/'>Clique</Link>
            </form>
          </section>) : <Navigate to='/' />
      }
    </>
  );
}

export default Login;
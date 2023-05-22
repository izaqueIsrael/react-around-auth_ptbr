import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

function Register({ setSend }) {
  const form = useRef();
  const formSubmit = (e) => {
    e.preventDefault();
    setSend(form.current.elements);
  }
  return (
    <>
      <section className='source'>
        <h1 className='title source__title'>Inscrever-se</h1>
        <form className='form source__form' ref={form}>
          <input className='source__input source__text' placeholder='E-mail' type='email' id='mail'></input>
          <input className='source__input source__text' placeholder='Senha' type='password' id='password'></input>
          <button className='source__button source__button__text' onClick={formSubmit}>Inscrever-se</button>
          <Link className='subtitle source__link' to='/signin'>Já é um membro? Faça o login aqui!</Link>
        </form>
      </section>
    </>
  );
}

export default Register;
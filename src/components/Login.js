import React, { useRef } from 'react';
import { Link, Navigate } from 'react-router-dom';
import Header from './Header';

function Login({ setSend, loggedIn, setEmail }) {
  const form = useRef();
  const formSubmit = (e) => {
    e.preventDefault();
    setSend(form.current.elements);
    setEmail(form.current.elements.mail.value);
    //Por enquanto ficará como useState porque a API atual ñ tem funções para usuários
    //estou utilizando os dados da API antiga para mostrar o usuário, então ele ñ corresponde ao do email
    //o chato é que por enquanto com um f5 o email sumirá do header
    //Não validei os outros inputs por que não sei qual é o layout
  }

  return (
    <>
      <Header linkText='Faça o Login' linkRoute='/signin' place='register' />
      {
        !loggedIn ? (
          <section className='source'>
            <h1 className='title source__title'>Entrar</h1>
            <form className='form source__form' ref={form}>
              <input className='source__input source__text' type='email' placeholder='E-mail' id='mail' autoComplete='email' required></input>
              <input className='source__input source__text' type='password' placeholder='Senha' id='password' autoComplete='current-password' required></input>
              <button className='button source__button source__button__text' onClick={formSubmit}>Entrar</button>
              <Link className='subtitle source__link' to='/signup'>Ainda não é membro? Inscreva-se aqui!</Link>
            </form>
          </section>) : <Navigate to='/' />
      }
    </>
  );
}

export default Login;
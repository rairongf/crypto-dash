import React from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import TextInput from '../components/input';
import { obscurePasswordState, passwordState, usernameState, formErrorState, showErrorState } from './states';

export default function SignInPage() {
  const navigate = useNavigate();
  const username = useRecoilValue(usernameState);
  const password = useRecoilValue(passwordState);
  const error = useRecoilValue(formErrorState);
  const [showError, setShowError] = useRecoilState(showErrorState);

  function onSubmit(e) {
    e.preventDefault()
    if (error) setShowError(true);
    else {
      setShowError(false);
      navigate(`/${username}/dashboard`, { replace: true })
    }
  }

  return (
    <div id='login-page'>
      <div id='login-container'>
        <h1>Bem vindo!</h1>
        <form onSubmit={onSubmit}>
          <TextInput state={usernameState} label='Username' required={true} />
          <br />
          <TextInput title='Pelo menos 8 caracteres' state={passwordState} label='Password' required={true} obscure={obscurePasswordState} />
          <br />
          {showError ? <span id='error-warning'>{error}</span> : null}
          <div className='row'><button id='submit-button' type='submit'>Entrar</button></div>
        </form>
      </div>
    </div>
  );
}
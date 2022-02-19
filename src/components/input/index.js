import React from 'react';
import './style.css';
import { useRecoilState } from "recoil";

export default function TextInput({
  state, label, type, required, obscure, pattern, title, ...props
}) {
  const [textInput, setTextInput] = useRecoilState(state);
  const [isTextObscure, setObscureText] = useRecoilState(obscure ? obscure : state);

  return (
    <>
      <label>{label}</label>
      <div id='input-container'>
        <input type={obscure ? isTextObscure ? 'password' : 'text' : 'text'} required={required} id='input' pattern={pattern} value={textInput} onChange={(e) => setTextInput(e.target.value)}></input>
        {obscure ? <button id='toggle' type='button' onClick={(e) => setObscureText(!isTextObscure)}>{isTextObscure ? 'Mostrar' : 'Esconder'}</button> : null}
      </div>
    </>
  );
}
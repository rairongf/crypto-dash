import React from 'react';
import './App.css';
import {RecoilRoot} from 'recoil';
import SignInPage from './sign-in';

function App() {
  return (
    <RecoilRoot>
      <SignInPage />
    </RecoilRoot>
  );
}

export default App;

import React from 'react';
import './App.css';
import { RecoilRoot } from 'recoil';
import SignInPage from './sign-in';
import { Route, Routes } from 'react-router-dom';
import DashboardPage from './dashboard';

function App() {
  return (
    <RecoilRoot>
      <Routes>
        <Route path='/' element={<SignInPage />}></Route>
        <Route path='/:username/dashboard' element={<DashboardPage />}></Route>
      </Routes>
    </RecoilRoot>
  );
}

export default App;

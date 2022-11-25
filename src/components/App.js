import React from 'react';
import { AuthProvider, useAuthContext } from '../contexts/AuthContext';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Home';
import SigninPage from '../pages/SigninPage';
import SignupPage from '../pages/SignupPage';

function App() {
  return(
    <AuthProvider>
      <Routes>
        <Route path='/' element={<SigninPage/>} />
        <Route path='/register' element={<SignupPage/>} />
        <Route path='/home' element={<Dashboard/>} />
      </Routes>
    </AuthProvider>
  )
}

export default App;

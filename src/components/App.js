import React from 'react';
import { AuthProvider } from '../contexts/AuthContext';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import SigninPage from '../pages/SigninPage';
import SignupPage from '../pages/SignupPage';
import ProtectedRoute from './ProtectedRoute';
import ForgotPasswordPage from '../pages/ForgotPasswordPage';
import Navigation from './Navigation';
import LearnAlphabetPage from '../pages/LearnAlphabetPage';
import BabyNameFinderPage from '../pages/BabyNameFinderPage';

function App() {
  return(
    <AuthProvider>
    <Navigation />
      <Routes>
        <Route path='/' element={<SigninPage/>} />
        <Route path='/register' element={<SignupPage/>} />
        <Route path='/forgot-password' element={<ForgotPasswordPage/>} />
        <Route 
          path='/home' 
          element={
            <ProtectedRoute>
              <Home/>
            </ProtectedRoute>
          }
        />
        <Route 
          path='/baby-name-finder' 
          element={
            <ProtectedRoute>
              <BabyNameFinderPage/>
            </ProtectedRoute>
          }
        />
        <Route 
          path='/learn-alphabet' 
          element={
            <ProtectedRoute>
              <LearnAlphabetPage/>
            </ProtectedRoute>
          }
        />
      </Routes>
    </AuthProvider>
  )
}

export default App;

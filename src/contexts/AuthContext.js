import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, sendPasswordResetEmail} from 'firebase/auth';

const AuthContext = createContext({});

export const useAuthContext = () => {
    return useContext(AuthContext);
}

export const AuthProvider = ( {children} ) => {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)
  
    function signupEmail(email, password, name) {
      return createUserWithEmailAndPassword(auth, email, password, name)
    }
  
    function signinEmail(email, password) {
      return signInWithEmailAndPassword(auth, email, password)
    }
  
    function logoutEmail() {
      return signOut(auth)
    }
  
    function forgetPassword(email) {
      return sendPasswordResetEmail(auth, email)
    }
  
  
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, user => {
        setCurrentUser(user)
        setLoading(false)
      })
  
      return unsubscribe
    }, [])
  
    const value = {
      currentUser,
      signinEmail,
      signupEmail,
      logoutEmail,
      forgetPassword,

    }
  
    return (
      <AuthContext.Provider value={value}>
        {!loading && children}
      </AuthContext.Provider>
    )
}
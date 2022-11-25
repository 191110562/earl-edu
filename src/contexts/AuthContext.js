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
    // const [user, setUser] = useState(null);
    // const [loading, setLoading] = useState(false);
    // const [error, setError] = useState('');

    // useEffect(() => {
    //     setLoading(true)
    //     const unsubscribe = onAuthStateChanged(auth, (response) => {
    //         response ? setUser(response) : setUser(null);
    //         setError('');
    //         setLoading(false);
    //     });
    //     return unsubscribe
    // }, [])

    // const signupEmail = (email, password, name) => {
    //     setLoading(true)
    //     createUserWithEmailAndPassword(auth, email, password)
    //     .then(() =>  {
    //         return updateProfile(auth.currentUser, {
    //             displayName: name,
    //         }) 
    //     })
    //     .then((response) => console.log(response))
    //     .catch(error => setError(error.message))
    //     .finally(() => setLoading(false))
    // }

    // const signinEmail = (email, password) => {
    //     setLoading(true)
    //     signInWithEmailAndPassword(auth, email, password)
    //     .then((response) => console.log(response))
    //     .catch(error => setError(error.code))
    //     .finally(() => setLoading(false))
    // }

    // const logoutEmail = () => {
    //     signOut(auth);
    // }

    // const forgotPassword = (email) => {
    //     return sendPasswordResetEmail(auth, email);
    // }

    // const value = {
    //     user,
    //     loading,
    //     error,
    //     signupEmail,
    //     signinEmail,
    //     logoutEmail,
    //     forgotPassword
    // }

    // return (
    //     <AuthContext.Provider value={value}>
    //         {children}
    //     </AuthContext.Provider>
    // )

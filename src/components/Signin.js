import React, { useRef, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { useAuthContext } from "../contexts/AuthContext";

export default function Signin() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { signinEmail, currentUser } = useAuthContext()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  async function onSubmitHandler(e) {
    e.preventDefault()
    try {
      setError("")
      setLoading(true)
      await signinEmail(emailRef.current.value, passwordRef.current.value)
      navigate('/home')
    } catch {
      setError("Failed to sign in")
    }

    setLoading(false)
  }

  return (
    <div className="tittle-login">
      <h1>Login</h1>
      {currentUser && currentUser.email}
      {error && <p>{error}</p>}
      <div className="formbox">
        <form onSubmit={onSubmitHandler} className="form">
            <div className="textbox">
                <input type="email" required ref={emailRef}/>
                <label>Email</label>
            </div>
            <div className="textbox">
                <input type="password" required ref={passwordRef}/>
                <label>Password</label>
            </div>
            <p id="forgot">
                <Link>Forgot Password?</Link>
            </p>
            <button disabled={loading} type="submit">
                Login
            </button>
            <p className="reg-form">
              Don't have an account?<Link to='/register'> Register</Link>
            </p>
        </form>
      </div>
    </div>
  );
};

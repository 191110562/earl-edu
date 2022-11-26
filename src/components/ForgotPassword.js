import React, { useRef, useState } from "react";
import { Link } from 'react-router-dom';
import { useAuthContext } from "../contexts/AuthContext";

export default function Signin() {
  const emailRef = useRef()
  const { forgetPassword } = useAuthContext()
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  async function onSubmitHandler(e) {
    e.preventDefault()

    try {
    setMessage('')
      setError("")
      setLoading(true)
      await forgetPassword(emailRef.current.value)
      setMessage('Check your inbox mail for further instructions.')
    } catch {
      setError("Failed to reset password")
    }

    setLoading(false)
  }

  return (
    <div className="tittle-login">
      <h1>Password Reset</h1>
      {error && <p>{error}</p>}
      {message && <p>{message}</p>}
      <div className="formbox">
        <form onSubmit={onSubmitHandler} className="form">
            <div className="textbox">
                <input type="email" required ref={emailRef}/>
                <label>Email</label>
            </div>
            <button disabled={loading} type="submit">
                Reset Password
            </button>
            <p className="forgot">
                <Link to='/'>Login</Link>
            </p>
            <p className="reg-form">
              Don't have an account?<Link to='/register'> Register</Link>
            </p>
        </form>
      </div>
    </div>
  );
};

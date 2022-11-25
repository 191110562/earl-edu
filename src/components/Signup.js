import React, { useRef, useState } from "react";
import{  FaLock, FaUser } from 'react-icons/fa';
import { MdAlternateEmail } from 'react-icons/md';
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";

export default function Signup() {
  const emailRef = useRef()
  const nameRef = useRef()
  const passwordRef = useRef()
  const { signupEmail } = useAuthContext()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  async function onSubmitHandler(e) {
    e.preventDefault()
    try {
      setError("")
      setLoading(true)
      await signupEmail(emailRef.current.value, passwordRef.current.value, nameRef.current.value)
      navigate('/')
    } catch {
      setError("Failed to create an account")
    }

    setLoading(false)
  }

  return (
    <div class="tittle-register">
      <h1>Register</h1>
      {error && <p>{error}</p>}
      <h4>Let's Get Started! Please enter your details.</h4>
      <div class="formbox">
        <form onSubmit={onSubmitHandler} class="form">
            <div class="textbox">
                <input type="name" required ref={nameRef}/>
                <label>Name</label>
            </div>
            <div class="textbox">
                <input type="email" required ref={emailRef}/>
                <label>Email</label>
            </div>
            <div class="textbox">
                <input type="password" required ref={passwordRef}/>
                <label>Password</label>
            </div>
            <button type="submit">
                Register
            </button>
            <p class="reg-form">
              Already have an account?<Link to={'/'}> Login</Link>
            </p>
          </form>
        </div>
    </div>
    // <div className="signup-container">
    //   <h2>Sign Up</h2>
    //   {error && <p>{error}</p>}
    //   <form onSubmit={onSubmitHandler} className="signup-input">
    //     <input className="signup-input" placeholder="email@gmail.com" type="email" ref={emailRef} />
    //     <input className="signup-input" placeholder="Name" type="name" ref={nameRef} />
    //     <input className="signup-input" placeholder="minimal 6 characters" type="password" ref={passwordRef} />
    //     <button disabled={loading} type="submit">Sign up</button>
    //     <p>
    //       Already have an account? <Link to='/'>Sign In</Link>
    //     </p>
    //   </form>
    // </div>
  );
};

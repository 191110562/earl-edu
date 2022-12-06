import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";
import Navigation from "./Navigation";

export default function Signup() {
  const emailRef = useRef();
  const nameRef = useRef();
  const passwordRef = useRef();
  const { signupEmail } = useAuthContext();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function onSubmitHandler(e) {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await signupEmail(
        emailRef.current.value,
        passwordRef.current.value,
        nameRef.current.value
      );
      navigate("/");
    } catch {
      setError("Failed to create an account");
    }

    setLoading(false);
  }

  return (
    <div>
      <Navigation />
      <div className="tittle-register">
        <h1>Register</h1>
        {error && <p>{error}</p>}
        <h4>Let's Get Started! Please enter your details.</h4>
        <div className="formbox">
          <form onSubmit={onSubmitHandler} className="form">
            <div className="textbox-register">
              <input type="name" required ref={nameRef} />
              <label>Name</label>
            </div>
            <div className="textbox-register">
              <input type="email" required ref={emailRef} />
              <label>Email</label>
            </div>
            <div className="textbox-register">
              <input type="password" required ref={passwordRef} />
              <label>Password</label>
            </div>
            <button
              disabled={loading}
              type="submit"
              className="button-register"
            >
              Register
            </button>
            <p className="log-form">
              Already have an account?<Link to={"/"}> Login</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

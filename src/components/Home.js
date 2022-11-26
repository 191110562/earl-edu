import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";

export default function Home() {
  const [error, setError] = useState('')
  const { logoutEmail, currentUser } = useAuthContext()
  const navigate = useNavigate()

  async function onLogoutHandler() {
    setError('')

    try {
      await logoutEmail()
      navigate('/')
    } catch {
      setError("Failed to log out")
    }
  }
  return (
    <div>
      <h1>Home </h1>
      {currentUser && currentUser.email}
      {error && <p>Hello{error}</p>}
      <button onClick={onLogoutHandler}>Log out</button>
    </div>
  );
};

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";

export default function Dashboard() {
  const [error, setError] = useState('')
  const { logoutEmail } = useAuthContext()
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
      {error && <p>{error}</p>}
      <h1>Home </h1>
      <button onClick={onLogoutHandler}>Log out</button>
    </div>
  );
};

import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import{ FiLogOut } from 'react-icons/fi';
import { useAuthContext } from "../contexts/AuthContext";

export default function Navigation() {
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
    <nav className='navbar'>
        <ul>
            <h1>EarlEdu</h1>
            <li className='push'><NavLink to='/home'>Home</NavLink></li>
            <li><NavLink to='/community'>Community</NavLink></li>
            <li><NavLink to='/baby-name-finder'>Baby Name Finder</NavLink></li>
            <li><NavLink to='/learn-alphabet'>Learn Alphabet</NavLink></li>
            <p>{currentUser && currentUser.email}</p>
            <li><button onClick={onLogoutHandler}><FiLogOut/></button></li>
        </ul>
    </nav>
  )
}

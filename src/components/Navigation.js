import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import{ FiLogOut } from 'react-icons/fi';
import { useAuthContext } from "../contexts/AuthContext";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

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
    <Navbar bg="transparent" variant="transparent">
        <Container>
          <Navbar.Brand href="/home">EarlEdu</Navbar.Brand>
          <Nav className="ms-auto responsive-font">
            <Nav.Link onClick={(e) => {
              e.preventDefault();
              navigate("/home");
            }}>Home</Nav.Link>
            <Nav.Link onClick={(e) => {
              e.preventDefault();
              navigate("/community");
            }}>Community</Nav.Link>
            <Nav.Link onClick={(e) => {
              e.preventDefault();
              navigate("/baby-name-finder");
            }}>Name Finder</Nav.Link>
            <Nav.Link onClick={(e) => {
              e.preventDefault();
              navigate("/learn-alphabet");
            }}>Learn Alphabet</Nav.Link>
            <p className='p-nav'>{currentUser && currentUser.email}</p>
            <button className='button-trans' onClick={onLogoutHandler}><FiLogOut/></button>
          </Nav>
        </Container>
    </Navbar>
  )
}

import React from 'react'
import { NavLink } from 'react-router-dom';
import{ FiLogOut } from 'react-icons/fi'

export default function Navigation() {
  return (
    <nav className='navbar'>
        <ul>
            <h1>EarlyEdu</h1>
            <li className='push'><NavLink to='/home'>Home</NavLink></li>
            <li><NavLink to='/baby-name-finder'>Baby Name Finder</NavLink></li>
            <li><NavLink to='/learn-alphabet'>Learn Alphabet</NavLink></li>
        </ul>
    </nav>
  )
}

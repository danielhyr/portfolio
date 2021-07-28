import React from 'react'
import './Header.scss'
import { useHistory } from 'react-router-dom' 

function Header() {
  const  history = useHistory()

    return (
        <ul className="nav">
            <li className="nav__list" onClick = {() => history.push('/')}>
                Home
            </li>
            <li className="nav__list" onClick = {() => history.push('/about')}>
                About
            </li>
            <li className="nav__list" onClick = {() => history.push('/portfolio')}>
                Portfolio
            </li>
            <li className="nav__list" onClick = {() => history.push('/contact')}>
                Contact
            </li>
        </ul>
    )
}

export default Header

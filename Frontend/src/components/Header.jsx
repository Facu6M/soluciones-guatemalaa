import React from 'react'
import styles from "../styles/Header.css"
import logo from "../assets/data-analysis-svgrepo-com.svg"

const Header = () => {
  return (
    <header>
      <img className='logo' src={logo}></img>
      <ul className='navlist'>
        <li><a href=''>Home</a></li>
        <li><a href=''>Contacto</a></li>
      </ul>
      </header>
  )
}

export default Header
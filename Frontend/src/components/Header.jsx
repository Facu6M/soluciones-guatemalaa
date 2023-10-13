import React from 'react'
import styles from "../styles/Header.css"
import logo from "../assets/data-analysis-svgrepo-com.svg"
import { useNavigate } from 'react-router-dom'

const Header = () => {

  const navigate = useNavigate();

  return (
    <header>
      <img className='logo' src={logo}></img>
      <ul className='navlist'>
        <li><a onClick={() => navigate("/")}>Home</a></li>
        <li><a onClick={() => navigate("/Visualizacion")}>Visualizacion</a></li>
      </ul>
      </header>
  )
}

export default Header
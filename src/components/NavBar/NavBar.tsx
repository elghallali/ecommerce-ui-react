import React from 'react'
import Logo from '../Logo/Logo'
import './NavBar.css'
import { FaBars, FaEllipsisV, FaUserPlus, FaSearch, FaShoppingCart } from "react-icons/fa";

const NavBar = () => {
  return (
    
    <div className="NavBar">
      <a href="#">
      <Logo />
      </a>
      <div className='container'>
        <div className="option">
        <FaBars />
        </div>
        
        <div className='rightNav'>
          <div className="option">
            <FaEllipsisV />
          </div>
          <div className="option">
            <FaSearch />
          </div>
          <div className="option">
            <FaUserPlus />
          </div>
          <div className="option">
            <FaShoppingCart />
          </div>
        </div>
      </div>
      
      </div>
    
  )
}

export default NavBar
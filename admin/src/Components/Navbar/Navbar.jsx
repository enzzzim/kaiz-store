import React from 'react'
import './Navbar.css'
import navProfile from '../../assets/nav-profile.svg'
import navLogo from '../../assets/nav-logo.svg'

export const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={navLogo} alt="" className='nav-logo'/>
        <img src={navProfile} alt="" className='nav-profile'/>

    </div>
  )
}

export default Navbar   

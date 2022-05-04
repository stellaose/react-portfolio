import React from 'react';
import LogoSt from '../assets/Images/Stella1.png';
import '../Stylesheets/Logo.scss'

const Logo = () => {
  return (
    <>
        <div className='logo-container'>
            <img src={LogoSt} alt="Stella"  className='solid-logo'/>
        </div>
    </>
  )
}

export default Logo
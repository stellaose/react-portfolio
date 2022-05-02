import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../assets/Images/Stella.png';
import SubtitleLogo from '../assets/Images/stella-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faEnvelope, faUser, faEye, faGear } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import '../Stylesheets/SideBar.scss';

const SideBar = () => {
  return (
    <>
        <div className = 'navbar-body'>
            <div className='logo'>
                <Link to = '/'>
                    <img src = {Logo} alt="S-Logo" />
                    <img className = 'sub-img' src = {SubtitleLogo} alt="Stella" />  
                </Link>
              </div>

              <nav>
                <NavLink exact = 'true' activeclassname = 'active' to = '/'>
                  <FontAwesomeIcon icon = {faHouse} color = '#4F5254'/>
                </NavLink>

                <NavLink exact = 'true' activeclassname = 'active' className = 'about' to = '/about'>
                  <FontAwesomeIcon icon = {faUser} color = '#4F5254'/>
                </NavLink>

                <NavLink exact = 'true' activeclassname = 'active' className = 'skills' to = '/skills'>
                  <FontAwesomeIcon icon = {faGear} color = '#4F5254'/>
                </NavLink>

                <NavLink exact = 'true' activeclassname = 'active' className= 'work' to = '/work'>
                  <FontAwesomeIcon icon = {faEye} color = '#4F5254'/>
                </NavLink>

                <NavLink exact = 'true' activeclassname = 'active' className= 'contact' to = '/contact'>
                  <FontAwesomeIcon icon = {faEnvelope } color = '#4F5254'/>
                </NavLink>
              </nav>

              <ul>
                <li>
                  <a target = '_blank'
                   rel='noreferrer'
                   href="https://www.linkedin.com/in/stella-oseyomon-8a2836103">
                      <FontAwesomeIcon icon = {faLinkedin} color = '#4F5254'/>
                  </a>
                </li>

                <li>
                  <a target = '_blank'
                   rel='noreferrer'
                   href="https://github.com/stellaose">
                      <FontAwesomeIcon icon = {faGithub} color = '#4F5254'/>
                  </a>
                </li>

                <li>
                  <a target = '_blank'
                   rel='noreferrer'
                   href="https://twitter.com/stellaose_">
                      <FontAwesomeIcon icon = {faTwitter} color = '#4F5254'/>
                  </a>
                </li>

              </ul>
        </div>
    </>
  )
}

export default SideBar
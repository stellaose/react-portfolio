import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

import Animated from '../Components/Animated';
import Logo from '../assets/Images/Stella.png';
import '../Stylesheets/Landing.scss'

const Landing = () => {
  const [ letterClass, setLetterClass ] = useState('text-animate');
  const nameArray = [ 't', 'e', 'l', 'l', 'a'];
  const jobArray = [ 'w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.'];

 useEffect = (() => {
   return setTimeout(() => {
     setLetterClass('text-animate-hover')
   }, 4000)
 })

  return (
    <>
      <div  className = 'container landing-page'>
        <div className = 'text-zone'>
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br /> 
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img src={Logo} alt=" Stella" />
            <Animated letterClass ={ letterClass} strArray = {nameArray} index = {15}/>
            <br/>
            <Animated letterClass ={ letterClass} strArray = {jobArray} index = {22}/>
          </h1>
          <h2>Software Developer</h2>
          <button className = 'flat'>
            <Link to = '/contact' >
              CONTACT ME
            </Link>
          </button>
        </div>
      </div>
    </>
  )
}

export default Landing
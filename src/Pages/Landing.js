import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

import Animated from '../Components/Animated';
import Loader from 'react-loaders';
import Logo from '../Components/Logo';
import LogoSub from '../assets/Images/Stella.png';
import '../Stylesheets/Landing.scss'

const Landing = () => {
  const [ letterClass, setLetterClass ] = useState('text-animate');
  const nameArray = [ 't', 'e', 'l', 'l', 'a'];
  const jobArray = [ 'w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.'];

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div  className = 'container landing-page'>
        <div className = 'text-zone'>
          <h1 className = 'logo-text'>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br /> 
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img src={LogoSub} alt=" Stella" className='logo-img'/>
            <Animated letterClass ={ letterClass} strArray = {nameArray} index = {15}/>
            <br/>
            <Animated letterClass ={ letterClass} strArray = {jobArray} index = {22}/>
          </h1>
          <h2>FullStack Developer</h2>
          <Link to = '/contact' className = 'flat'>
            CONTACT ME
          </Link>
        </div>
        <Logo />
      </div>
      <Loader type="pacman"  />
    </>
  )
}

export default Landing
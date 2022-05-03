/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react'
import Animated from '../Components/Animated';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact} from '@fortawesome/free-brands-svg-icons';
import '../Stylesheets/About.scss';

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect = (() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  })
  return (
    <>
      <div className='container about'>
          <div className='text-zone'>
            <h1 >
              <Animated 
                  // letterClass= {letterClass} 
                  strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']} 
                  index = {15}/>
            </h1> 
            <p>
                I'm very ambitious front-end developer looking for a role in an established IT company with the opportunity to work with the latest technologies on challenging and diverse projects.
            </p>
            <p>
              I'm quietly confident, naturally curious, and perpetually working on improving my skills one web application at a time.
            </p>
            <p>

            </p>
          </div>

          <div className = 'stage-cube-cont'>
            <div className = 'cubespinner'>
              <div className='face1'>
                <FontAwesomeIcon icon = { faReact} />
              </div>
            </div>
          </div>
      </div>
    </>
  )
}

export default About
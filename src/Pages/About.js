import React, {useState, useEffect} from 'react'
import Animated from '../Components/Animated';
import Loader from 'react-loaders';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faHtml5, faCss3, faNodeJs, faSass, faJs } from '@fortawesome/free-brands-svg-icons';
import '../Stylesheets/About.scss';

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])
  return (
    <>
      <div className='container about'>
          <div className='text-zone'>
            <h1 >
              <Animated 
                  letterClass= {letterClass} 
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
                <FontAwesomeIcon icon = { faReact} color="#5ED4F4" />
              </div>

              <div className='face2'>
                <FontAwesomeIcon icon = { faHtml5} color="#F06529" />
              </div>

              <div className='face3'>
                <FontAwesomeIcon icon = { faCss3} color="#28A4D9" />
              </div>

              <div className='face4'>
                <FontAwesomeIcon icon = { faNodeJs} color = '#578f0d' />
              </div>

              <div className='face5'>
                <FontAwesomeIcon icon = { faSass} color = '#FF7D7D' />
              </div>

              <div className='face6'>
                <FontAwesomeIcon icon = { faJs} color="#EFD81D" />
              </div>
            </div>
          </div>
      </div>
      <Loader type="line-scale" />
    </>
  )
}

export default About
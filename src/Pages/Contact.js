import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom'
import Animated from '../Components/Animated';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useForm } from '@formspree/react';
import Loader from 'react-loaders';
import 'leaflet/dist/leaflet.css';
import '../Stylesheets/Contact.scss';

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const [state, handleSubmit] = useForm("xoqrpbbb");
  if (state.succeeded) {
      return (
        <div className='success'>
          <h2 className='sub'>
            Thanks for reaching out. I'll get in touch soon
          </h2>
          <button onClick={() => navigate(-1)} className = 'btn'>
              goBack
          </button>
        </div> 
      )
  }

  return (
    <>
      <div className='container contact'>
          <div className='text-zone'>
            <h1 >
                <Animated 
                    letterClass= {letterClass} 
                    strArray={['C', 'o', 'n', 't', 'a', ' c', 't', ' ', 'M', 'e']} 
                    index = {15}/>
              </h1> 
              <p>
                I am open to a role in any IT company with the opportunity to work with the latest technologies on challenging and diverse projects.
              </p>

              <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" disabled={state.submitting} className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>

        <div className = 'info-map'>
            Stella Oseyomon
            <br />
            Nigeria
            <br />
            9, Abeokuta Street <br />
            Akoka, Lagos
            <br />
            <br />
            <span>stella.oseyomon@gmail.com</span>
        </div>

        <div className="map-wrap">
          <MapContainer center={[6.53406, 3.39286]} zoom={30}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[6.53406, 3.39286]}>
              <Popup>Stella lives here</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>

      <Loader type='pacman' />
    </>
  )
}

export default Contact
import React from 'react';
import {generateImageSrc} from './DeviceIcon.helper';
import './DeviceIcon.css';

// Creating a pure function and stateless react component
const DeviceIcon = ({type, power, service}) => {
  const src = generateImageSrc(type, power, service);

  return (
    <div className='device-icon'>
      <img src={src} alt={type}/>
    </div>
  )
}

export default DeviceIcon;

import React from 'react';
import DeviceIcon from '../DeviceIcon';
import {devicesOptions} from './DeviceIconList.helper';
import './DeviceIconList.css';

// Creating a pure function and stateless react component
const DeviceIconList = ({devices, changeType, changePower, changeService}) => {
  const deviceListItems = devices.map(({type, power, service}, index) => {
    return (
      <div className='device-icon-container'>
        <DeviceIcon type={type} power={power} service={service}/>

        <p>Power: <input type='checkbox' value={power} onChange={(event) => changePower(event, index)}/></p>
        <p>Service: <input type='checkbox' value={service} onChange={(event) => changeService(event, index)}/></p>

        <p>Type:
          <select value={type} onChange={(event) => changeType(event, index)}>
            {devicesOptions}
          </select>
        </p>
      </div>
    )
  });

  return (
    <ul>{deviceListItems}</ul>
  );
}

export default DeviceIconList;

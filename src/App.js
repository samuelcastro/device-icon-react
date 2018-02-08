import React, { Component } from 'react';
import './App.css';
import DeviceIconList from './DeviceIconList';

import {
  increase, decrease, resetChanges,
  changePower, changeService, defaultDeviceIcon,
  changeType, onUpdateCount
} from './App.helper';

class App extends Component {
  state = {
    count: 1,
    devices: [defaultDeviceIcon]
  }

  render() {
    return (
      <div className="App">
        <button onClick={() => resetChanges(this)}>RESET</button>
        <button onClick={() => increase(this)}>INCREASE</button>
        <button onClick={() => decrease(this)}>DECREASE</button>

        <input type='number' onChange={(event) => onUpdateCount(event, this)} value={this.state.count}/>

        <DeviceIconList
          devices={this.state.devices}
          changePower={changePower(this)}
          changeService={changeService(this)}
          changeType={changeType(this)}/>
      </div>
    );
  }
}

export default App;

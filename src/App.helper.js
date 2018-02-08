// Why did I create this helper?

// As a good practice I'm creating a vanila javascript helper that will
// handle all business logic, this is pretty important to keep projects
// isolated and non-dependent from any framework. For example if at some
// point you decide to use angular, vue.js or whatever you want, you won't
// need to refactor your entire app. (Samuel)

import {curry, update, remove, append, is} from 'ramda';

export const defaultDeviceIcon = {
  type: 'other',
  power: false,
  service: false
}

const changeItem = curry((prop, context, {target: {checked, value}}, index) => {
  const device = {...context.state.devices[index]};

  device[prop] = is(Boolean, checked) ? checked : value;

  const devices = update(index, device, context.state.devices);

  context.setState({devices});
});

export const changePower = curry(changeItem('power'));
export const changeService = curry(changeItem('service'));
export const changeType = curry(changeItem('type'));
export const resetChanges = curry((context) => context.setState({devices: []}));
export const onUpdateCount = curry(({target: {value}}, context) => context.setState({count: value}));

export const increase = curry((context) => {
  let devices = [...context.state.devices];

  for(let i = 0; i < context.state.count; i++) {
    devices = append(defaultDeviceIcon, devices);
  }

  context.setState({devices});
});

export const decrease = curry((context) => {
  let devices = [...context.state.devices];

  devices = remove(0, context.state.count, devices);

  context.setState({devices});
});

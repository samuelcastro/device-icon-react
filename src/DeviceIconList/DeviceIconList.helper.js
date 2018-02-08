// Why did I create this helper?

// As a good practice I'm creating a vanila javascript helper that will
// handle all business logic, this is pretty important to keep projects
// isolated and non-dependent from any framework. For example if at some
// point you decide to use angular, vue.js or whatever you want you won't
// need to refactor your entire app. (Samuel)

import React from 'react';

export const deviceTypes = [
  'accesscontrol',
  'audio',
  'audiosource',
  'camera',
  'climate',
  'controlsystem',
  'gaming',
  'lighting',
  'mobiledevice',
  'monitoring',
  'networkdevice',
  'other',
  'personalcomputer',
  'pool',
  'powerdevice',
  'printer',
  'security',
  'server',
  'shades',
  'telephone',
  'videoconference',
  'videodisplay',
  'videosource'
]

export const devicesOptions = deviceTypes.map(type => <option value={type}>{type}</option>);

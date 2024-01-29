import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';

const Stack = createNativeStackNavigator();

const Screens = () => {
  return (
    <Stack.Navigator initialRouteName={'Home'}>
      <Stack.Screen
        name={'Home'}
        component={HomeScreen}
        initialParams={{data: dataSource}}
      />
      <Stack.Screen
        name={'Details'}
        component={DetailsScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const dataSource = [
  {
    title: 'terminal commands',
    tags: ['bash', 'list'],
    notes:
      'ls: list contents of current directory\npwd: present working directory\nmkdir: make directory\ntouch: create a file\nfind: find a file or directory\ngrep: search within files for a string',
  },
  {
    title: 'nmap',
    tags: ['bash', 'network', 'scan', 'ports'],
    notes: 'list contents of presend directory',
  },
  {
    title: 'react native project',
    tags: ['init', 'bash', 'yarn'],
    notes:
      'npx react-native@0.72.6 init <name> --version 0.72.6\nDisable Hermes in Podfile\nnpx react-native run-ios | npx react-native run-android',
  },
  {
    title: 'react native navigation',
    tags: ['init', 'bash', 'yarn'],
    notes: 'list contents of presend directory',
  },
  {
    title: 'react native checklist',
    tags: ['performance', 'security'],
    notes: 'list contents of presend directory',
  },
];

export default Screens;

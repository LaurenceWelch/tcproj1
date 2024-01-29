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

export default Screens;

const dataSource = [
  {
    title: 'ls',
    tags: ['bash', 'list'],
    notes: 'list contents of current directory\nls <dir>',
  },
  {
    title: 'cd',
    tags: ['bash', 'list'],
    notes: 'change directory\ncd <dir>',
  },
  {
    title: 'mkdir',
    tags: ['bash', 'list'],
    notes: 'make directory\nmkdir <name>',
  },
  {
    title: 'find',
    tags: ['bash', 'list'],
    notes: 'find a file or directory\nfind <dir> -name <name>',
  },
  {
    title: 'grep',
    tags: ['bash', 'list'],
    notes: 'search for a string within a file\ngrep <regex> <dir>',
  },
  {
    title: 'netcat',
    tags: ['bash', 'network', 'scan', 'ports'],
    notes: 'network tool',
  },
  {
    title: 'awk',
    tags: ['bash', 'network', 'scan', 'ports'],
    notes: 'parse and format text',
  },
  {
    title: 'chmod',
    tags: ['bash', 'network', 'scan', 'ports'],
    notes: 'modify permissions\nchmod <octal> <file>',
  },
  {
    title: 'chown',
    tags: ['bash', 'network', 'scan', 'ports'],
    notes: 'change ownership\nchown <user>:<group> <file>',
  },
  {
    title: 'cut',
    tags: ['bash', 'network', 'scan', 'ports'],
    notes: 'format text',
  },
  {
    title: 'dpkg',
    tags: ['bash', 'network', 'scan', 'ports'],
    notes: 'deal with packages\ndpkg -l',
  },
  {
    title: 'du',
    tags: ['bash', 'network', 'scan', 'ports'],
    notes: 'get disk usage',
  },
  {
    title: 'git',
    tags: ['bash', 'network', 'scan', 'ports'],
    notes:
      'for git commands\ngit init\ngit add\ngit commit -m <message>\ngit status\ngit restore\ngit clone <user>@<url>',
  },
  {
    title: 'head/tail',
    tags: ['bash', 'network', 'scan', 'ports'],
    notes: 'print first or last 10 lines\nhead -n <number>',
  },
  {
    title: 'sed',
    tags: ['bash', 'network', 'scan', 'ports'],
    notes: 'format text\nsed -n 5p <file>\nsed -n -e 5p -e 8p <file>',
  },
  {
    title: 'ssh',
    tags: ['bash', 'network', 'scan', 'ports'],
    notes: 'secure shell\nssh -p <port> -i <key> <user>@<ip>',
  },
  {
    title: 'react native project',
    tags: ['init', 'bash', 'yarn'],
    notes:
      'npx react-native@0.72.6 init <name> --version 0.72.6\n\nDisable Hermes in Podfile (for chrome debugging)\n\nnpx react-native run-ios | npx react-native run-android',
  },
  {
    title: 'react native navigation',
    tags: ['init', 'bash', 'yarn'],
    notes: 'provides navigation to a reactnative project',
  },
  {
    title: 'react native checklist',
    tags: ['performance', 'security'],
    notes: '1. check flatlist performance\n2. check ios + android',
  },
];

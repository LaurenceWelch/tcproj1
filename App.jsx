/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  Button,
  TextInput,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Modal,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

function App() {
  return (
    <NavigationContainer>
      <Screens />
    </NavigationContainer>
  );
}

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

const DetailsScreen = ({route}) => {
  const navigation = useNavigation();
  const {title, tags, notes} = route.params.obj;
  return (
    <SafeAreaView>
      <View>
        <Text>{title}</Text>
        <Text>{notes}</Text>
        <Text></Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text>{'< Back'}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const ResultRow = props => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => props.navigator.navigate('Details', {obj: props.obj})}>
        <Text>{props.obj.title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const AddRecord = props => {
  const [title, setTitle] = useState('');
  const [tags, setTags] = useState('');
  const [notes, setNotes] = useState('');
  const styles = {};
  const clearInput = () => {
    console.log('clearing');
    setTitle('');
    setTags('');
    setNotes('');
  };

  return (
    <Modal
      visible={props.visible}
      onDismiss={() => clearInput()}
      animationType={'slide'}>
      <SafeAreaView>
        <View style={styles}>
          <TextInput
            value={title}
            placeholder={'name'}
            onChangeText={val => setTitle(val)}
          />
        </View>
        <View style={styles}>
          <TextInput
            multiline={true}
            value={notes}
            placeholder={'notes'}
            onChangeText={val => setNotes(val)}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity onPress={() => props.close()} style={{margin: 10}}>
            <Text>cancel</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              props.submit({title: title, tags: tags, notes: notes}),
                props.close();
            }}>
            <Text>submit</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </Modal>
  );
};

const HomeScreen = props => {
  console.log('rerender');
  const [data, setData] = useState(props.route.params.data);
  const [showModal, setShowModal] = useState(false);

  const addRecord = newRecord => {
    console.log('worked!', JSON.stringify(newRecord));
    const arr = [newRecord, ...data];
    setData(arr);
  };
  return (
    <View>
      <AddRecord
        submit={newRecord => addRecord(newRecord)}
        visible={showModal}
        close={() => setShowModal(false)}
      />
      <FlatList
        data={data}
        renderItem={({item}) => (
          <ResultRow obj={item} navigator={props.navigation} />
        )}
        keyExtractor={(_, index) => index.toString()}
        //initialNumToRender={}
        //maxToRenderPerBatch={}
      />
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('Details');
        }}>
        <Text>Details</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setShowModal(true)}>
        <Text>Add</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          console.log('adding..');
          const newRecord = {
            title: 'testname' + data.length,
            tags: ['test'],
            notes: 'hello world!',
          };
          const arr = [newRecord, ...data];
          setData(arr);
        }}>
        <Text>blarggggggg</Text>
      </TouchableOpacity>
    </View>
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

export default App;

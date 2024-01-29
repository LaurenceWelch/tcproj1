import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import MyTextInput from './MyTextInput';
import MyHeader from './MyHeader';
import gs from '../styles';

const AddRecord = props => {
  const [title, setTitle] = useState('');
  const [tags, setTags] = useState('');
  const [notes, setNotes] = useState('');

  // clear the modal text inputs
  const clearInput = () => {
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
        <MyHeader>New Note</MyHeader>
        <MyTextInput
          placeholder={'title'}
          val={title}
          multiline={false}
          setVal={val => {
            setTitle(val);
          }}
        />
        <MyTextInput
          placeholder={'notes'}
          val={notes}
          multiline={true}
          setVal={val => setNotes(val)}
        />
        <View style={styles.buttons}>
          <TouchableOpacity onPress={() => props.close()} style={gs.button}>
            <Text style={gs.button}>cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={gs.button}
            onPress={() => {
              props.submit({title: title, tags: tags, notes: notes});
              props.close();
            }}>
            <Text style={gs.button}>submit</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </Modal>
  );
};

export default AddRecord;

const styles = StyleSheet.create({
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  input: {fontSize: 20, margin: 10},
});

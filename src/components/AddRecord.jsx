import React, {useState} from 'react';
import {
  SafeAreaView,
  TextInput,
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
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
        <View style={styles}>
          <TextInput
            style={styles.input}
            value={title}
            placeholder={'name'}
            onChangeText={val => setTitle(val)}
          />
        </View>
        <View>
          <TextInput
            style={styles.input}
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
            <Text style={gs.button}>cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              props.submit({title: title, tags: tags, notes: notes}),
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
  input: {fontSize: 20, margin: 10},
});

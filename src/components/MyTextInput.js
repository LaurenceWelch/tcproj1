import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

const MyTextInput = props => {
  return (
    <View style={styles}>
      <TextInput
        style={styles.input}
        value={props.val}
        placeholder={props.placeholder}
        multiline={props.multiline}
        onChangeText={val => props.setVal(val)}
      />
    </View>
  );
};

export default MyTextInput;

const styles = StyleSheet.create({
  input: {fontSize: 18, margin: 10},
});

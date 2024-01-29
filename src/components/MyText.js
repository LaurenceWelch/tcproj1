import React from 'react';
import {Text, StyleSheet} from 'react-native';

const MyText = props => {
  return <Text style={styles.text}>{props.children}</Text>;
};

export default MyText;

const styles = StyleSheet.create({
  text: {fontSize: 18, margin: 4},
});

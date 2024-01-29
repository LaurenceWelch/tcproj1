import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const MyHeader = props => {
  return (
    <View>
      <Text style={styles.text}>{props.children}</Text>
    </View>
  );
};

export default MyHeader;

const styles = StyleSheet.create({
  text: {fontSize: 22, margin: 10, textAlign: 'center'},
});

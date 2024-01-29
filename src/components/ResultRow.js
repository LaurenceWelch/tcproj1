import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const ResultRow = props => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => props.navigator.navigate('Details', {obj: props.obj})}>
        <Text style={styles.item}>
          <Text style={styles.prefix}>{'> '}</Text>
          {props.obj.title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ResultRow;

const styles = StyleSheet.create({
  prefix: {color: 'green'},
  item: {fontSize: 18, margin: 6},
});

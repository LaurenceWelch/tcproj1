import React from 'react';
import {SafeAreaView, View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import gs from '../../styles';

const DetailsScreen = ({route}) => {
  const navigation = useNavigation();
  const {title, notes} = route.params.obj;
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.header}>{title}</Text>
        <Text style={styles.content}>{notes}</Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={gs.button}>{'< Back'}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default DetailsScreen;

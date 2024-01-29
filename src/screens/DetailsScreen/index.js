import React from 'react';
import {SafeAreaView, View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import MyHeader from '../../components/MyHeader';
import MyText from '../../components/MyText';
import gs from '../../styles';

const centerIt = {textAlign: 'center'};

const DetailsScreen = ({route}) => {
  const navigation = useNavigation();
  const {title, notes} = route.params.obj;
  return (
    <SafeAreaView>
      <View>
        <MyHeader>{title}</MyHeader>
        <MyText style={styles.content}>{notes}</MyText>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={[gs.button, centerIt]}>{'< Back'}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default DetailsScreen;

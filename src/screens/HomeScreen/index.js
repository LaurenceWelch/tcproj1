import React, {useState} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import AddRecord from '../../components/AddRecord';
import ResultRow from '../../components/ResultRow';
import gs from '../../styles';

const HomeScreen = props => {
  const [data, setData] = useState(props.route.params.data);
  const [showModal, setShowModal] = useState(false);

  // function to add a new row
  const addRecord = newRecord => {
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
      <TouchableOpacity onPress={() => setShowModal(true)}>
        <Text style={gs.button}>Add Item</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

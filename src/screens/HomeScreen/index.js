import React, {useState} from 'react';
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
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
    <View style={styles.main}>
      <AddRecord
        submit={newRecord => addRecord(newRecord)}
        visible={showModal}
        close={() => setShowModal(false)}
      />
      <FlatList
        style={styles.list}
        data={data}
        renderItem={({item}) => (
          <ResultRow obj={item} navigator={props.navigation} />
        )}
        keyExtractor={(_, index) => index.toString()}
        initialNumToRender={20}
        maxToRenderPerBatch={20}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.floatingButton}
          onPress={() => setShowModal(true)}>
          <Text style={gs.button}>Add Item</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  main: {flex: 1},
  buttonContainer: {flex: 0.2, justifyContent: 'center'},
  floatingButton: {
    alignSelf: 'center',
    backgroundColor: 'lightblue',
    borderRadius: 6,
  },
  list: {marginBottom: 0, flex: 1},
});

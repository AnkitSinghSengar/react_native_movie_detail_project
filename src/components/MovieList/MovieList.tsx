import {View, FlatList, StyleSheet, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {URL_POPULAR} from '../../constants/ApiUrl';
import Card from '../Common/Card';

const MovieList = () => {
  const [myData, setMyData] = useState([]);
  const [isApiCalled, setApiCalled] = useState(true);

  useEffect(() => {
    setApiCalled(true);
    axios
      .get(`${URL_POPULAR}`)
      .then(res => {
        console.log('res==', res.data.results);

        setMyData(res.data.results);
        setApiCalled(false);
      })
      .catch(error => {
        setApiCalled(false);
        setMyData([]);
        console.error('error-----', error);
      });
  }, []);

  const renderItem = ({item, index}: any) => <Card key={index} item={item} />;

  return !isApiCalled ? (
    <View style={{flex: 1}}>
      <FlatList
        style={{flex: 1, backgroundColor: '#303030'}}
        data={myData}
        numColumns={2}
        renderItem={renderItem}
      />
    </View>
  ) : (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
};

export default MovieList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

import {View, SafeAreaView} from 'react-native';
import React from 'react';
import Header from '../../components/Common/Header';
import MovieList from '../../components/MovieList/MovieList';

const Movie = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <Header />
        <MovieList />
      </View>
    </SafeAreaView>
  );
};

export default Movie;

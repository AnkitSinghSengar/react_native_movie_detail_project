import {View, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import Header from '../../components/Common/Header';
import MovieList from '../../components/MovieList/MovieList';

const Movie = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Header />
        <MovieList />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Movie;

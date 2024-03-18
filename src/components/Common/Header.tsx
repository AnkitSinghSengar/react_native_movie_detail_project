import {View, StyleSheet, Text} from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Latest Movies</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#212121',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  heading: {
    color: 'white',
    fontSize: 25,
  },
});

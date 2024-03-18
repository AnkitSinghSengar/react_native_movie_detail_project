import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';

const CircleContainer = (props: any) => {
  const {logo_path, name} = props.item;

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        alt="No image found"
        source={{uri: `https://image.tmdb.org/t/p/w500/${logo_path}`}}
      />
      <Text>{name}</Text>
    </View>
  );
};
export default CircleContainer;

const styles = StyleSheet.create({
  image: {
    height: 80,
    width: 80,
    borderRadius: 40,
    resizeMode: 'stretch',
  },
  container: {
    margin: 8,
    padding: 8,
    width: 80,
  },
});

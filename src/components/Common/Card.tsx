import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  Dimensions,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {AirbnbRating} from 'react-native-ratings';

const Card = (props: any) => {
  const navigation = useNavigation();

  const {
    id,
    backdrop_path,
    original_title,
    release_date,
    vote_count,
    vote_average,
    ...rest
  }: any = props.item;

  const checkVote_average = parseFloat(vote_average).toFixed(1);

  const [star, setStar] = useState(2);

  useEffect(() => {
    setStar(vote_average);
  }, [vote_average]);

  return (
    <View style={styles.container} key={id}>
      <TouchableWithoutFeedback
        onPress={() => {
          navigation.navigate('DetailsScreen', {id: id, rest: rest});
        }}>
        <View style={styles.grid}>
          <Image
            style={styles.imageContainer}
            source={{uri: `https://image.tmdb.org/t/p/w500${backdrop_path}`}}
          />
          <Text style={styles.title} ellipsizeMode="tail" numberOfLines={1}>
            {original_title}
          </Text>

          <View style={styles.desc}>
            <AirbnbRating
              ratingContainerStyle={{paddingBottom: 45}}
              selectedColor="purple"
              count={9}
              defaultRating={star}
              size={9}
              isDisabled={true}
            />
            <Text style={styles.voting}>({checkVote_average})</Text>
          </View>

          <View style={styles.data}>
            <Text style={styles.release_date}>{release_date}</Text>
            <Text style={styles.voting}>Vote({vote_count})</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Card;

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imageContainer: {
    width: width * 0.42,
    height: height * 0.3,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
  },
  grid: {
    paddingVertical: 12,
    marginHorizontal: 12,
    marginVertical: 12,
  },
  title: {
    color: 'white',
    fontSize: 18,
  },
  release_date: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 12,
  },
  voting: {
    color: 'rgba(255, 255, 255, 0.5)',
    fontSize: 12,
  },
  data: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: -40,
  },
  desc: {
    color: 'rgba(255, 255, 255, 0.5)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: -45,
  },
  star: {
    color: '#F900F8',
  },
});

import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {StarRatingDisplay} from 'react-native-star-rating-widget';
import {URL_MOVIES, API_KEY} from '../../constants/ApiUrl';
import ReadMore from '@fawazahmed/react-native-read-more';
import CircleContainer from '../../components/Common/CircleContainer';

const DetailsScreen = ({route}: any) => {
  const [myData, setMyData] = useState<any>(null);
  const [isApiCalled, setApiCalled] = useState(true);

  const {id} = route.params;

  useEffect(() => {
    console.log('URL_MOVIES====', URL_MOVIES);

    setApiCalled(true);
    axios
      .get(`${URL_MOVIES}/${id}?api_key=${API_KEY}`)
      .then(res => {
        setMyData(res.data);
        setApiCalled(false);
      })
      .catch(error => {
        setApiCalled(false);
        console.error('error-----', error);
      });
  }, []);

  return !isApiCalled ? (
    <ScrollView style={styles.scrollContainer}>
      <Image
        style={styles.poster_path}
        source={{
          uri: `https://image.tmdb.org/t/p/w500${myData.poster_path}`,
        }}
      />

      <View style={styles.container}>
        <View style={styles.parentContainer}>
          <View style={styles.subContainer}>
            <Image
              style={styles.backdrop_path1}
              source={{
                uri: `https://image.tmdb.org/t/p/w500${myData.backdrop_path}`,
              }}
            />
          </View>
          <View>
            <Text style={styles.title}>{myData.original_title}</Text>
            <View style={styles.commonContainer}>
              <View>
                <Text style={styles.ratingContainer}>
                  {parseFloat(myData.vote_average).toFixed(1)}
                </Text>
                <Text style={styles.textContainer}>{`Rating  `}</Text>
              </View>
              <View>
                <StarRatingDisplay
                  color="red"
                  maxStars={9}
                  rating={myData.vote_average}
                  starSize={10}
                  style={{marginTop: 15}}
                />
                <Text style={styles.textContainer}>Grade Now</Text>
              </View>
            </View>

            <View style={styles.commonContainer}>
              <Text style={styles.textContainer}>Popularity: </Text>
              <Text style={styles.textContainer}>{myData.popularity}</Text>
            </View>
            <View style={styles.commonContainer}>
              <Text style={styles.textContainer}>Revenue: </Text>
              <Text style={styles.textContainer}>${myData.revenue}</Text>
            </View>
          </View>
        </View>
      </View>

      <View>
        <Text style={styles.storyContainer}>Story Line:-</Text>
        <ReadMore numberOfLines={3} style={{color: 'white'}}>
          {myData.overview}
        </ReadMore>
      </View>

      <View>
        <Text style={styles.companyContainer}>Companies:-</Text>
        <FlatList
          style={{marginTop: 40}}
          horizontal={true}
          data={myData?.production_companies}
          renderItem={({item, index}) => (
            <CircleContainer item={item} index={index} />
          )}
        />
      </View>
    </ScrollView>
  ) : (
    <View style={styles.activityIndicator}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
};

export default DetailsScreen;

// StyleSheet
const styles = StyleSheet.create({
  scrollContainer: {
    backgroundColor: '#303030',
  },
  poster_path: {
    height: 310,
    resizeMode: 'stretch',
    alignItems: 'center',
    borderBottomRightRadius: 110,
    borderBottomLeftRadius: 110,
  },
  container: {
    margin: 6,
    padding: 6,
    flexDirection: 'row',
  },
  parentContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  subContainer: {
    marginRight: 6,
    padding: 3,
    borderRadius: 10,
  },
  backdrop_path1: {
    height: 180,
    width: 150,
    resizeMode: 'cover',
    position: 'relative',
    bottom: 35,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  title: {
    color: 'white',
    fontSize: 18,
  },
  ratingContainer: {
    fontSize: 18,
    color: 'purple',
    fontWeight: '600',
  },
  textContainer: {
    fontSize: 14,
    color: 'white',
  },
  commonContainer: {
    flexDirection: 'row',
  },
  storyContainer: {
    color: 'white',
    fontSize: 20,
    marginBottom: 8,
  },
  companyContainer: {
    marginBottom: -40,
    marginTop: 40,
    fontSize: 18,
    color: 'white',
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

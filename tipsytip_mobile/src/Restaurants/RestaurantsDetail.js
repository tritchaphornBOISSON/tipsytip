import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const RestaurantsDetail = ({ restaurant }) => {

  if (restaurant.image_url === '') {
    restaurant.image_url = 'https://via.placeholder.com/150'
  }
  return (
    <View style={styles.containerStyle}>
      <Image style={styles.imgStyle} source={{ uri: restaurant.image_url }} />
      <Text style={styles.nameStyle}>{restaurant.name}</Text>
      <Text style={styles.ratingStyle}>
        {restaurant.rating} Stars, {restaurant.review_count} Reviews
      </Text>
    </View>
  );
};

export default RestaurantsDetail;

const styles = StyleSheet.create({
  containerStyle: {
    marginLeft: 12,
  },
  imgStyle: {
    width: 200,
    height: 120,
    borderRadius: 4,
    marginBottom: 5,
  },
  nameStyle: {
    fontWeight: 'bold',
  },
  ratingStyle: {
    color: 'grey',
  },
});

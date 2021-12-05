import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import api from '../api/ApiConfig';
const DetailRestaurant = ({ route }) => {
  const { id } = route.params;
  const [details, setDetails] = useState(null);
  const [errMessage, setErrMessage] = useState('');

  console.log(details);
  const getDetails = async () => {
    try {
      const response = await api.get(`/${id}`);
      setDetails(response.data);
    } catch (err) {
      setErrMessage('Something went wrong');
    }
  };

  useEffect(() => {
    getDetails();
  }, []);

  if (!details) {
    return null;
  }
  return (
    <View style={styles.containerStyle}>
      {errMessage ? <Text>{errMessage}</Text> : null}
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={details.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={styles.imgStyle} source={{ uri: item }} />;
        }}
      />
      <View style={styles.nameContainerStyle}>
        <Text style={styles.nameStyle}>{details.name}</Text>
        {details.is_closed ? (
          <Text style={styles.closedStyle}>Fermé</Text>
        ) : (
          <Text style={styles.openStyle}>Ouvert</Text>
        )}
      </View>
      <Text style={styles.ratingStyle}>
        {details.rating} Stars, {details.review_count} Reviews
      </Text>

      <Text>Tel: {details.display_phone}</Text>
      <Text>
        Adresse: {details.location.display_address[0]},{' '}
        {details.location.display_address[1]}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    marginLeft: 12,
  },
  nameContainerStyle: {
    flexDirection: 'row',
  },
  imgStyle: {
    width: 330,
    height: 200,
    borderRadius: 4,
    marginVertical: 10,
    marginRight: 5,
  },
  nameStyle: {
    fontWeight: 'bold',
    marginRight: 4,
  },
  ratingStyle: {
    color: 'grey',
  },
  openStyle: {
    color: 'green',
  },
  closedStyle: {
    color: 'red',
  },
});
export default DetailRestaurant;

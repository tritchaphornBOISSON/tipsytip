import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Button } from 'react-native';
import SearchBar from '../Restaurants/SearchBar';
import RestaurantList from '../Restaurants/RestaurantList';
import useRestaurants from '../Hook/UseRestaurants';
import { FontAwesome } from '@expo/vector-icons';


function SearchGrid() {
  const [term, setTerm] = useState('');
  const [location, setLocation] = useState('');
  const [searchApi, restaurants, errMessage] = useRestaurants();

  const filterResultsBy = (rating) => {
    return restaurants.filter((restaurant) => {
      return restaurant.rating === rating;
    });
  };

  return (
    <>
      <SearchBar
        placeholder='Restaurant'
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term, location)}
        style={styles.container}
      />

      <SearchBar
        placeholder='ville'
        term={location}
        onTermChange={setLocation}
        onTermSubmit={() => searchApi(term, location)} 
        style={styles.container}
      />
      <Button title='Recherche' onPress={() => searchApi(term, location)} />
      

      

      {errMessage ? <Text>{errMessage}</Text> : null}
      <ScrollView>
        <View style={{flex: 1, flexDirection: 'row'}}>
        <FontAwesome style={styles.iconStyle} name='star' />
        <FontAwesome style={styles.iconStyle} name='star' />
        <FontAwesome style={styles.iconStyle} name='star' />
        <FontAwesome style={styles.iconStyle} name='star' />
        <FontAwesome style={styles.iconStyle} name='star' />
        </View>
        <RestaurantList 
          restaurants={filterResultsBy(5)} 
           />
           <View style={{flex: 1, flexDirection: 'row'}}>
        <FontAwesome style={styles.iconStyle} name='star' />
        <FontAwesome style={styles.iconStyle} name='star' />
        <FontAwesome style={styles.iconStyle} name='star' />
        <FontAwesome style={styles.iconStyle} name='star' />
        <FontAwesome style={styles.iconStyle} name='star-half' />
        </View>
        <RestaurantList 
          restaurants={filterResultsBy(4.5)} 
           />
           <View style={{flex: 1, flexDirection: 'row'}}>
        <FontAwesome style={styles.iconStyle} name='star' />
        <FontAwesome style={styles.iconStyle} name='star' />
        <FontAwesome style={styles.iconStyle} name='star' />
        <FontAwesome style={styles.iconStyle} name='star' />
        </View>
          <RestaurantList 
          restaurants={filterResultsBy(4)} 
          />
          <View style={{flex: 1, flexDirection: 'row'}}>
        <FontAwesome style={styles.iconStyle} name='star' />
        <FontAwesome style={styles.iconStyle} name='star' />
        <FontAwesome style={styles.iconStyle} name='star' />
        <FontAwesome style={styles.iconStyle} name='star-half' />
        </View>
          <RestaurantList
          restaurants={filterResultsBy(3.5)}
        />
        <View style={{flex: 1, flexDirection: 'row'}}>
        <FontAwesome style={styles.iconStyle} name='star' />
        <FontAwesome style={styles.iconStyle} name='star' />
        <FontAwesome style={styles.iconStyle} name='star' />
        </View>
        <RestaurantList
          restaurants={filterResultsBy(3)}
        />
        <View style={{flex: 1, flexDirection: 'row'}}>
        <FontAwesome style={styles.iconStyle} name='star' />
        <FontAwesome style={styles.iconStyle} name='star' />
        <FontAwesome style={styles.iconStyle} name='star-half' />
        </View>
        <RestaurantList
          restaurants={filterResultsBy(2.5)}
          
        />
        <View style={{flex: 1, flexDirection: 'row'}}>
        <FontAwesome style={styles.iconStyle} name='star' />
        <FontAwesome style={styles.iconStyle} name='star' />
        </View>
        <RestaurantList
          restaurants={filterResultsBy(2)}
        />
        <View style={{flex: 1, flexDirection: 'row'}}>
        <FontAwesome style={styles.iconStyle} name='star' />
        <FontAwesome style={styles.iconStyle} name='star-half' />
        </View>
        <RestaurantList
          restaurants={filterResultsBy(1.5)}
        />
        <View style={{flex: 1, flexDirection: 'row'}}>
        <FontAwesome style={styles.iconStyle} name='star' />
        </View>
        <RestaurantList
          restaurants={filterResultsBy(1)}
          
        />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  
    container: {
      backgroundColor: "#63b1aa",
    },
  
  textStyle: {
    marginLeft: 12,
  },
  iconStyle: {
    fontSize: 10,
    color: '#fab345',
    marginHorizontal: 3,
  },
});

export default SearchGrid;

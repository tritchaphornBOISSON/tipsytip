import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';


const SearchBar = ({ term, onTermChange, onTermSubmit, placeholder }) => {
  const searchForRestaurants = () => {};
  return (
    <View style={styles.backgroundStyle}>
      
      <TextInput
        style={styles.inputStyle}
        placeholder={placeholder}
        autoCapitalize='none'
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
      
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#fab345',
    height: 30,
    borderRadius: 5,
    margin: 6,
    flexDirection: 'row',
    
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
  iconStyle: {
    alignSelf: 'center',
    fontSize: 30,
    color: 'black',
    marginHorizontal: 10,
  },
});

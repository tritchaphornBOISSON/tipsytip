import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 35,
    flexDirection:'row',
    justifyContent:'center',
    backgroundColor:"#63b1aa"
  },
  tinyLogo: {
    width: 80,
    height: 80,
    
  },
  logo: {
    width: 66,
    height: 58,
  },
});

const Logo = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={require('../../assets/logo_tipsytip.png')}
      />
      </View>
  );
}

export default Logo;
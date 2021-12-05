import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Logo from './src/components/Logo';
import SearchGrid from './src/Grid/SearchGrid';
import DetailRestaurant from './src/Grid/DetailRestaurant';
import { StyleSheet, Text, View } from 'react-native';

const Stack = createStackNavigator();

function App() {
  return (
   <NavigationContainer>
      <Logo style={styles.logo}/>
      <Stack.Navigator
        screenOptions={{ headerTitleAlign: 'center' }}
        initialRouteName='Search'
        
      >
        <Stack.Screen
          name='Search'
          component={SearchGrid}
          options={{ title: ' ' }}
        />
        <Stack.Screen
          name='Detail'
          component={DetailRestaurant}
          options={{
            title: 'Restaurant Detail',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
   
  );
}


const styles = StyleSheet.create({
  logo: {
    backgroundColor: "#63b1aa",
  },
  container: {
    backgroundColor: "#63b1aa",
  },
});

export default App;

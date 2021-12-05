import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SearchGrid from './src/Grid/SearchGrid';
import DetailRestaurant from './src/Grid/DetailRestaurant';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerTitleAlign: 'center' }}
        initialRouteName='Search'
      >
        <Stack.Screen
          name='Search'
          component={SearchGrid}
          options={{ title: 'Restaurant Search' }}
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

export default App;

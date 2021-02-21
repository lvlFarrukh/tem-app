import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Provider } from 'react-redux';
import configureStore from '../../store/index'
// import pages
import Login from '../pages/Login'
import Register from '../pages/Register'
import Home from '../pages/Home'
import DonerPage from '../pages/DonerPage'

const Stack = createStackNavigator();
const store = configureStore()

function Navigation() {
  return (
    <Provider store = { store }>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name="Login" 
            component={Login} 
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen 
            name="Register" 
            component={Register} 
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen 
            name="Home" 
            component={Home} 
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen 
            name="Doner" 
            component={DonerPage} 
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default Navigation

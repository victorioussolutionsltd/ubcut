import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './screens/Home';
import Settings from './screens/Settings';
import Profile from './screens/Profile';
const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator
      headerMode="none"
      screenOptions={{
        mode: 'modal',
        transparentCard: true,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
};

export default MyStack;

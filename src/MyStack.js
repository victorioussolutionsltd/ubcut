import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './screens/Home';
import PlayerScreen from './screens/PlayerScreen';
import Settings from './screens/Settings';
import Profile from './screens/Profile';
const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="PlayerScreen" component={PlayerScreen} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
};

export default MyStack;

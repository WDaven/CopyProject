import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeMapScreen from '../screens/HomeMap';
import HomeListScreen from '../screens/HomeList';
import {createAppContainer} from 'react-navigation'; 
import FilterScreen from '../screens/FilterScreen';
import DetailScreen from '../screens/DetailScreen';

const HomeStack = createNativeStackNavigator();


function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="HomeMap" component={HomeMapScreen} />
      <HomeStack.Screen name="HomeList" component={HomeListScreen} />
      <HomeStack.Screen name="FilterScreen" component={FilterScreen} />
      <HomeStack.Screen name ="DetailScreen" component={DetailScreen} />

    </HomeStack.Navigator>
  );
}


export default HomeStackScreen;
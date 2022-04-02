import { MaterialCommunityIcons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NativeBaseProvider } from "native-base";
import SettingsScreen from "./screens/Favorites";
import HomeStackScreen from "./Navigation/Routes";
import React from 'react';
const Tab = createBottomTabNavigator();

//Please run in android, React Native Maps is not fully supported for web and I need to work on it some.
//Please run in android, React Native Maps is not fully supported for web and I need to work on it some.
//Please run in android, React Native Maps is not fully supported for web and I need to work on it some.

// highlight color in activetintcolor default is 3880FF
export default function App() {
    return (
      <NativeBaseProvider>
          <NavigationContainer>
              <Tab.Navigator screenOptions={{ headerShown: false, tabBarActiveTintColor: '#3880FF',tabBarStyle:{backgroundColor: `#f5f5f5`} }}>
                  <Tab.Screen
                      name="Search"
                      component={HomeStackScreen}
                      options={{ tabBarIcon: makeIconRender("magnify"), headerShown: false }}
                  />
                  <Tab.Screen
                      name="Favorites"
                      component={SettingsScreen}
                      options={{ tabBarIcon: makeIconRender("heart-outline"), headerShown: false }}
                  />
              </Tab.Navigator>
          </NavigationContainer>
      </NativeBaseProvider>
    );
}
  
function makeIconRender(name) {
    return ({ color, size }) => (
        <MaterialCommunityIcons name={name} color={color} size={size} />
    );
}
  
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeBaseProvider } from "native-base";
import HomeScreen from "./screens/HomeMap";
import SettingsScreen from "./screens/Favorites";
import FilterScreen from "./screens/FilterScreen";
import HomeStackScreen from "./Navigation/Routes";

const Tab = createBottomTabNavigator();

// highlight color in activetintcolor default is 3880FF
export default function App() {
    return (
      <NativeBaseProvider>
          <NavigationContainer>
              <Tab.Navigator screenOptions={{ headerShown: false, tabBarActiveTintColor: '#e91e63', }}>
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
  
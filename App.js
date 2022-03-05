import { MaterialCommunityIcons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/Home";
import SettingsScreen from "./screens/Settings";
import FilterScreen from "./screens/FilterScreen";
import { NativeBaseProvider, Text, Box } from 'native-base';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{ tabBarIcon: makeIconRender("home") }}
            />
            <Tab.Screen
                name="Settings"
                component={SettingsScreen}
                options={{ tabBarIcon: makeIconRender("cog") }}
            />
            <Tab.Screen
                name="FilterScreen"
                component={FilterScreen}
                options={{ tabBarIcon: makeIconRender("cog") }}
            />
        </Tab.Navigator>
    </NavigationContainer>
  );
}

function makeIconRender(name) {
    return ({ color, size }) => (
        <MaterialCommunityIcons name={name} color={color} size={size} />
    );
}

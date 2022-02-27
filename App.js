import { MaterialCommunityIcons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/Home";
import SettingsScreen from "./screens/Settings";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen
                name="Search"
                component={HomeScreen}
                options={{ tabBarIcon: makeIconRender("magnify"), headerShown: false }}
            />
            <Tab.Screen
                name="Favorites"
                component={SettingsScreen}
                options={{ tabBarIcon: makeIconRender("heart-outline"), headerShown: false }}
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

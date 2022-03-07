import { Text, View, Button } from "react-native";
import { StyleSheet, Platform, StatusBar } from "react-native";
import Constants from 'expo-constants';
const statusBarHeight = Constants.statusBarHeight

const HomeMapScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", paddingTop:statusBarHeight }}>
            <Text>HomeMap!</Text>
            <Button
            title="List view"
            onPress={() => navigation.navigate('HomeList')}
            ></Button>
            
            
            <Button
            title="Filter Screen"
            onPress={() => navigation.navigate('FilterScreen')}
            ></Button>

            
        </View>

    );
}


export default HomeMapScreen;
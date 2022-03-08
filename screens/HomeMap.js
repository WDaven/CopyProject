import { Text, View } from "react-native";
import { Button } from "native-base";
import { StyleSheet, Platform, StatusBar } from "react-native";
import Constants from 'expo-constants';
const statusBarHeight = Constants.statusBarHeight
import FilterComponent from "../components/FilterComponent";

const HomeMapScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", paddingTop:statusBarHeight }}>
            <Text>HomeMap!</Text>
            <Button
            onPress={() => navigation.navigate('HomeList')}
            >
                <Text> List view</Text>
                </Button>
            
            
            <FilterComponent> </FilterComponent>

            
        </View>

    );
}


export default HomeMapScreen;
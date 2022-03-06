import { Text, View, Button } from "react-native";

const HomeMapScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
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
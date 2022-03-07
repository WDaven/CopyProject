import { Text, View, ScrollView,Button } from "react-native";
import PreviewPressableTile from "../components/PreviewPressableTile";
import { StyleSheet, Platform, StatusBar } from "react-native";
import Constants from 'expo-constants';
const statusBarHeight = Constants.statusBarHeight

const HomeListScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", paddingTop:statusBarHeight }}>
            <ScrollView>
            <Button
                    title="Map view"
                    onPress={() => navigation.navigate('HomeMap')}
                ></Button>
            <PreviewPressableTile></PreviewPressableTile>
            <PreviewPressableTile></PreviewPressableTile>
            <PreviewPressableTile></PreviewPressableTile>
            <PreviewPressableTile></PreviewPressableTile>
            <PreviewPressableTile></PreviewPressableTile>
            <PreviewPressableTile></PreviewPressableTile>
            <PreviewPressableTile></PreviewPressableTile>
            <PreviewPressableTile></PreviewPressableTile>
            <PreviewPressableTile></PreviewPressableTile>
            <PreviewPressableTile></PreviewPressableTile>
            <PreviewPressableTile></PreviewPressableTile>
            <PreviewPressableTile></PreviewPressableTile>
            </ScrollView>
        </View>
    );
}

export default HomeListScreen;

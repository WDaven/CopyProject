import { Text, View, ScrollView } from "react-native";
import PreviewPressableTile from "../components/PreviewPressableTile";

export default function HomeListScreen() {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", paddingTop:50 }}>
            <ScrollView>
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
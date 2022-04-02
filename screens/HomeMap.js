import { Text, View } from "react-native";
import { Button } from "native-base";
import { StyleSheet, Platform, StatusBar } from "react-native";
import { HStack, VStack, IconButton, Icon, Input } from "native-base";
import Constants from 'expo-constants';
const statusBarHeight = Constants.statusBarHeight
import FilterComponent from "../components/FilterComponent";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import MapComponent from "../components/MapComponent";
import SearchFilter from"../components/SearchFilter";

const HomeMapScreen = ({ navigation }) => {
    return (
        <View>
            <MapComponent></MapComponent>

                <View style={{ position: 'absolute', top: statusBarHeight, width: '100%', alignItems: "center" }}>
                    <SearchFilter onPress={() => navigation.navigate('HomeList')} _pressed = {{bg:'#D3D3D3'}} abtnTxt = "Go to list view">
                    </SearchFilter>  
                 </View>

            

        </View>
    );
}


export default HomeMapScreen;
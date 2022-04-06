import { Image, Text, View, ScrollView, VStack, Input, IconButton, Icon, HStack, Button } from "native-base";
import {ActivityIndicator} from "react-native"
import Constants from 'expo-constants';
const statusBarHeight = Constants.statusBarHeight
import React, { useState, useEffect } from "react";
import SearchFilter from"../components/SearchFilter";
import List from "../components/List";
import { useNavigation, useRoute } from "@react-navigation/native";

function HomeListScreen ()  {
    const [searchPhrase, setSearchPhrase] = useState("");
    const navigation = useNavigation();
    const route = useRoute();
    const { dormData } = route.params;

    return (
        <View style={{ paddingTop:statusBarHeight }} >
            <View>
                <View style={{ width: '100%', alignItems: "center" }} space = {2}>
                    <SearchFilter onPress={() => navigation.navigate('HomeMap')} _pressed = {{bg:'#D3D3D3'}} abtnTxt = "Go to map view"
                        searchPhrase={searchPhrase}
                        setSearchPhrase={setSearchPhrase}
                    >
                    </SearchFilter>
                </View>
                <View style ={{ alignItems:"center" }} height='100%'>
                    {!dormData
                        ? (<ActivityIndicator size="large" />)
                        : (<List searchPhrase={searchPhrase} data={dormData}/>)
                    }
                </View>
            </View>
        </View>
    );
}

export default HomeListScreen;
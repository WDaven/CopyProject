import { Image, Text, View, ScrollView, VStack, Input, IconButton, Icon, HStack, Button } from "native-base";
import {ActivityIndicator} from "react-native"
import Constants from 'expo-constants';
const statusBarHeight = Constants.statusBarHeight
import React, { useState, useEffect } from "react";
import SearchFilter from"../components/SearchFilter";
import List from "../components/List";

const HomeListScreen = ({ navigation }) => {
    const [searchPhrase, setSearchPhrase] = useState("");
    const [dormData, setDormData] = useState([]);
    useEffect(() => {
        const getData = async () => {
          const apiResponse = await fetch(
            "https://us-central1-mas-project-4261.cloudfunctions.net/app/dorms"
          );
          const data = await apiResponse.json();
          setDormData(data);
        };
        getData();
    }, []);
    const myJson = JSON.stringify({dormData})
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
                {/* <Text>{myJson}</Text> */}
                <View style ={{ alignItems:"center" }}>
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
import { Text, View } from "react-native";
import { Button, ScrollView } from "native-base";
import { StyleSheet, Platform, StatusBar, Image } from "react-native";
import { HStack, VStack, IconButton, Icon, Input } from "native-base";
import Constants from 'expo-constants';
const statusBarHeight = Constants.statusBarHeight
import FilterComponent from "../components/FilterComponent";
import React, { useState, useEffect } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import MapComponent from "../components/MapComponent";
import SearchFilter from"../components/SearchFilter";
import { useNavigation, useRoute } from "@react-navigation/native";
import MapPreview from "../components/MapPreview";

function HomeMapScreen ()  {
    const [dormData, setDormData] = useState([]);
    const [searchPhrase, setSearchPhrase] = useState("");
    const navigation = useNavigation();

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
    
    return (
        <View height='100%'>
            <MapComponent dormData={dormData}></MapComponent>
                <View style={{ position: 'absolute', top: statusBarHeight, width: '100%', alignItems: "center" }}>
                    <SearchFilter 
                    onPress={() => navigation.navigate({name: 'HomeList', params: {dormData} }) }
                    _pressed = {{bg:'#D3D3D3'}} abtnTxt = "Go to list view"
                    searchPhrase={searchPhrase}
                    setSearchPhrase={setSearchPhrase}>
                        
                    </SearchFilter>  
                 </View>
                 <View style = {{margin: 0, height: '12%' , bottom: '5%', position: 'absolute',width: '100%', alignItems:'center', justifyContent:'center' }}>
                     <ScrollView horizontal showsHorizontalScrollIndicator = {false} >
                                        {dormData.map((data, index ) => {
                            return (
                                <MapPreview dormName = {data.name} dormImage={<Image source= {{ uri: data.images[0] }} alt="image" borderRadius={15} />} dormRating = {data.avg_rating} 
                                onPress={() => navigation.navigate('DetailScreen', {...data })} dormLocation = {data.location} num_reviews = {data.num_reviews}
                                />
                            )})
                                }


                     </ScrollView>
                 </View>

            

        </View>
    );
}





export default HomeMapScreen;
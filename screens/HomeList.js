import { Text, View, ScrollView } from "react-native";
import { HStack, IconButton, Icon, Input } from "native-base";
import { Button } from "native-base";
import PreviewPressableTile from "../components/PreviewPressableTile";
import Constants from 'expo-constants';
const statusBarHeight = Constants.statusBarHeight
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

//InputRightElement={<FilterComponent></FilterComponent>} />

import FilterComponent from "../components/FilterComponent";
const HomeListScreen = ({ navigation }) => {
    return (
        <View style={{ paddingTop:statusBarHeight }}>
            <ScrollView>
                <HStack px="1" py="3"  alignItems="center" w="100%" maxW="400" space={1}>
                    <Input placeholder="Search dorms" variant="filled" 
                        width="85%" borderRadius="10" py="1" px="2" borderWidth="0" 
                        InputLeftElement={<IconButton icon={<Icon size="sm" as={MaterialCommunityIcons} name="magnify" color='#757575' />}  _pressed = {{bg:'#D3D3D3'}} />} 
                        InputRightElement={<FilterComponent></FilterComponent>} />
                    <IconButton icon={<Icon size="md" as={MaterialCommunityIcons} name="map-legend" color='#757575'/>} onPress={() => navigation.navigate('HomeMap')}_pressed = {{bg:'#D3D3D3'}}/>
                </HStack>
           
            <PreviewPressableTile onPress={() => navigation.navigate('DetailScreen')}/>
            </ScrollView>
        </View>
    );
}










export default HomeListScreen;

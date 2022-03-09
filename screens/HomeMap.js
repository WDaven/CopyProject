import { Text, View } from "react-native";
import { Button } from "native-base";
import { StyleSheet, Platform, StatusBar } from "react-native";
import { HStack, IconButton, Icon, Input } from "native-base";
import Constants from 'expo-constants';
const statusBarHeight = Constants.statusBarHeight
import FilterComponent from "../components/FilterComponent";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const HomeMapScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", paddingTop:statusBarHeight }}>
            <HStack px="1" py="3"  alignItems="center" w="100%" maxW="400" space={5}>
                <Input placeholder="Search" variant="filled" 
                    width="85%" borderRadius="10" py="1" px="2" borderWidth="0" 
                    InputLeftElement={<IconButton icon={<Icon size="sm" as={MaterialCommunityIcons} name="magnify" color='#757575' />} />} 
                    InputRightElement={<FilterComponent></FilterComponent>} />
                    <IconButton icon =
                        {<Icon size="sm" as={MaterialCommunityIcons} name="view-list-outline" color='#757575'  />} 
                        onPress={() => navigation.navigate('HomeList')} _pressed = {{bg:'#D3D3D3'}}/>
            </HStack>

            
        </View>

    );
}


export default HomeMapScreen;
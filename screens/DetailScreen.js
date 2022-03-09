
import React from "react";
import { VStack, HStack, Button, IconButton, Icon, Text, NativeBaseProvider, Center, Box, StatusBar, ScrollView, View } from "native-base";
import Constants from 'expo-constants';
const statusBarHeight = Constants.statusBarHeight
import { MaterialCommunityIcons } from "@expo/vector-icons"; 

function DetailScreen({ navigation : { goBack} }) {
    return (
        <View style={{ flex: 1, paddingTop:statusBarHeight }}>
            <ScrollView>
                    <HStack alignItems="center">
                        <IconButton icon={<Icon size="sm" as={MaterialCommunityIcons} name="arrow-left" color='#757575' onPress={() => goBack()} />} />
                        <Text color="black" fontSize="20" fontWeight="medium">
                                Search
                        </Text>
                    </HStack>
                    <Text>DetailScreen</Text>
            </ScrollView>
        </View>

    );
}

export default DetailScreen;
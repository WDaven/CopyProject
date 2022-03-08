import { Text, View, ScrollView, Modal, VStack, HStack, Center, NativeBaseProvider } from "react-native";
import { Button } from "native-base";
import { Checkbox } from "native-base";
import PreviewPressableTile from "../components/PreviewPressableTile";
import { StyleSheet, Platform, StatusBar } from "react-native";
import Constants from 'expo-constants';
const statusBarHeight = Constants.statusBarHeight
import React from "react";
import { useState } from "react";
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import { Rating, AirbnbRating } from 'react-native-ratings';
import FilterComponent from "../components/FilterComponent";
const HomeListScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", paddingTop:statusBarHeight }}>
            <ScrollView>
            <Button
                    onPress={() => navigation.navigate('HomeMap')}
                >
                    <Text>Map View</Text>
                    </Button>

                <FilterComponent>

                </FilterComponent>

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

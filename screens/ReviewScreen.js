import { View, ScrollView } from "react-native";
import { HStack, IconButton, Icon, Input, Text, Button, Box,NativeBaseProvider, Center, TextArea } from "native-base";
import Constants from 'expo-constants';
const statusBarHeight = Constants.statusBarHeight
import React, {useState} from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ReviewBox from "../components/reviewBox";
import StarRating from 'react-native-star-rating';
import { useNavigation, useRoute } from "@react-navigation/native";

function ReviewScreen({ navigation }) {
    const [userReview, setUserReview] = useState("");
    const [rating, setRating] = useState(0);
    const [pestButton, setpestButton] = useState(false);
    const [loungesButton, setloungesButton] = useState(false);
    const [gymButton, setgymButton] = useState(false);
    const [quietButton, setquietButton] = useState(false);
    const [safeButton, setsafeButton] = useState(false);
    const [showerleaksButton, setShowerleaksButton] = useState(false);
    const [noisyButton, setNoisyButton] = useState(false);
    const [busRoute, setbusRoute] = useState();
    const [gym, setGym] = useState();
    const [bike, setBike] = useState();

    const route = useRoute();
    const { name } = route.params;
    const onSubmit = async () => {
        const document_id = name.toLowerCase().replace(' ', '-');
        const endpoint = "https://us-central1-mas-project-4261.cloudfunctions.net/app/dorms/" + document_id + "/reviews";
        // Temporarily using placeholders for reviewer, title, date
        const data = {
            reviewer: "reviewer",
            rating: rating,
            title: "title",
            text: userReview,
            date: "2022-04-01"
        }
        const response = await fetch(endpoint, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        if (response.status === 200) {
            navigation.goBack();
        }
    };

    return (
        <View style={{paddingTop:statusBarHeight }} >
            <ScrollView>
                <HStack alignItems="center" justifyContent="space-between" >
                    <IconButton
                            icon={<Icon as={MaterialCommunityIcons}
                                        size="sm"
                                        name="arrow-left"
                                        color='#757575'/>}
                            onPress={() => navigation.goBack()}
                            _pressed = {{bg: '#D3D3D3'}}
        
                    />
                    <Text fontSize="lg">
                        Cloudman
                    </Text>                    
                    <Button variant = "ghost" size="md" colorScheme="blue" onPress={onSubmit} >
                        Post
                    </Button>
                </HStack>
                <View style = {{alignItems:"center"}}>
                    <StarRating
                                maxStars={5}
                                rating={rating}
                                starSize={40}
                                emptyStar={require('../star-outline.png')}
                                fullStar={require('../star.png')}
                                iconSet={"MaterialCommunityIcons"}s
                                fullStarColor={"#3880ff"}
                                selectedStar={(rating) => setRating(rating)}/>
                </View>
                <Box alignItems="center">
                    <ReviewBox 
                        userReview = {userReview}
                        setUserReview={setUserReview}
                    >
                    </ReviewBox>
                </Box>
                <View  alignItems="center">
                    <Button size = "md" bg="#f2f2f2" _pressed = {{bg:'#D3D3D3'}} borderColor = "#000000" borderWidth={1}>
                        <HStack>
                            <Icon size="sm" as={MaterialCommunityIcons} name="magnify" color='#3880FF' />
                            <Text>
                                Post a photo!
                            </Text>
                        </HStack>
                    </Button>
                </View>

                <View>
                    <Text>
                        Which of these apply?
                    </Text>
                    <HStack>
                        <Button onPress={() => setpestButton(!pestButton)}  borderColor = "#000000" borderWidth={1} bg = {{}}
                            style={{backgroundColor:pestButton==true? "#3880FF": "#f2f2f2"}}>
                            Pest
                        </Button>
                        <Button onPress={() => setloungesButton(!loungesButton)}  borderColor = "#000000" borderWidth={1} bg = {{}}
                            style={{backgroundColor:loungesButton==true? "#3880FF": "#f2f2f2"}}>
                            Lounges
                        </Button>
                        <Button onPress={() => setgymButton(!gymButton)}  borderColor = "#000000" borderWidth={1} bg = {{}}
                            style={{backgroundColor:gymButton==true? "#3880FF": "#f2f2f2"}}>
                            Gym
                        </Button>
                        <Button onPress={() => setquietButton(!quietButton)}  borderColor = "#000000" borderWidth={1} bg = {{}}
                            style={{backgroundColor:quietButton==true? "#3880FF": "#f2f2f2"}}>
                            Quiet
                        </Button>
                    </HStack>
                    <HStack>
                        <Button onPress={() => setsafeButton(!safeButton)}  borderColor = "#000000" borderWidth={1} bg = {{}}
                            style={{backgroundColor:safeButton==true? "#3880FF": "#f2f2f2"}}>
                            safe
                        </Button>
                        <Button onPress={() => setShowerleaksButton(!showerleaksButton)}  borderColor = "#000000" borderWidth={1} bg = {{}}
                            style={{backgroundColor:showerleaksButton==true? "#3880FF": "#f2f2f2"}}>
                            Shower Leaks
                        </Button>
                        <Button onPress={() => setNoisyButton(!noisyButton)}  borderColor = "#000000" borderWidth={1} bg = {{}}
                            style={{backgroundColor:noisyButton==true? "#3880FF": "#f2f2f2"}}>
                            Noisy
                        </Button>
                    </HStack>
                </View>
                <View>
                    <Text>
                        Features
                    </Text>
                    <HStack>
                        <Text>
                            Bus route
                        </Text>
                            <HStack>
                                <Button  borderColor = "#000000" borderWidth={1} style={{backgroundColor:busRoute==1? "#3880FF": "#f2f2f2"}} onPress={() => setbusRoute(1)}>
                                    <Icon size="sm" as={MaterialCommunityIcons} name="thumb-up-outline" color='#757575' />
                                </Button>
                                <Button  borderColor = "#000000" borderWidth={1} style={{backgroundColor:busRoute==0? "#3880FF": "#f2f2f2"}} onPress={() => setbusRoute(0)}>
                                    <Icon size="sm" as={MaterialCommunityIcons} name="magnify" color='#757575' />
                                </Button>
                                <Button  borderColor = "#000000" borderWidth={1} style={{backgroundColor:busRoute==-1? "#3880FF": "#f2f2f2"}} onPress={() => setbusRoute(-1)}>
                                    <Icon size="sm" as={MaterialCommunityIcons} name="thumb-down-outline" color='#757575' />
                                </Button>
                            </HStack>
                    </HStack>

                    <HStack>
                        <Text>
                            Gym
                        </Text>
                            <HStack>
                                <Button  borderColor = "#000000" borderWidth={1} style={{backgroundColor:gym==1? "#3880FF": "#f2f2f2"}} onPress={() => setGym(1)}>
                                    <Icon size="sm" as={MaterialCommunityIcons} name="thumb-up-outline" color='#757575' />
                                </Button>
                                <Button  borderColor = "#000000" borderWidth={1} style={{backgroundColor:gym==0? "#3880FF": "#f2f2f2"}} onPress={() => setGym(0)}>
                                    <Icon size="sm" as={MaterialCommunityIcons} name="magnify" color='#757575' />
                                </Button>
                                <Button  borderColor = "#000000" borderWidth={1} style={{backgroundColor:gym==-1? "#3880FF": "#f2f2f2"}} onPress={() => setGym(-1)}>
                                    <Icon size="sm" as={MaterialCommunityIcons} name="thumb-down-outline" color='#757575' />
                                </Button>
                            </HStack>
                    </HStack>

                    <HStack>
                        <Text>
                            Bike
                        </Text>
                            <HStack>
                                <Button  borderColor = "#000000" borderWidth={1} style={{backgroundColor:bike==1? "#3880FF": "#f2f2f2"}} onPress={() => setBike(1)}>
                                    <Icon size="sm" as={MaterialCommunityIcons} name="thumb-up-outline" color='#757575' />
                                </Button>
                                <Button  borderColor = "#000000" borderWidth={1} style={{backgroundColor:bike==0? "#3880FF": "#f2f2f2"}} onPress={() => setBike(0)}>
                                    <Icon size="sm" as={MaterialCommunityIcons} name="magnify" color='#757575' />
                                </Button>
                                <Button  borderColor = "#000000" borderWidth={1} style={{backgroundColor:bike==-1? "#3880FF": "#f2f2f2"}} onPress={() => setBike(-1)}>
                                    <Icon size="sm" as={MaterialCommunityIcons} name="thumb-down-outline" color='#757575' />
                                </Button>
                            </HStack>
                    </HStack>
                </View>

                <View>
                    <Button>
                        Post
                    </Button>
                    <Button>
                        Cancel
                    </Button>
                </View>
            </ScrollView>


            
        </View>
    );
}

export default ReviewScreen;
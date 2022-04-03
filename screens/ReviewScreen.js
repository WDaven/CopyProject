import { View, ScrollView } from "react-native";
import { HStack, IconButton, Icon, Input, Text, Button, Box,NativeBaseProvider, Center, TextArea} from "native-base";
import Constants from 'expo-constants';
const statusBarHeight = Constants.statusBarHeight
import React, { useEffect, useState, useRef } from "react";
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
    useEffect(() => {
        navigation.setOptions({ headerTitle: name });
    }, [navigation]);

    return (
        <View >
            <ScrollView>
                <View style = {{alignItems:"center"}} paddingTop={'3%'} >
                    <StarRating
                                maxStars={5}
                                rating={rating}
                                starSize={40}
                                emptyStar={require('../star-outline.png')}
                                fullStar={require('../star.png')}
                                halfStar={"star-half-full"}
                                iconSet={"MaterialCommunityIcons"}s
                                fullStarColor={"#3880ff"}
                                selectedStar={(rating) => setRating(rating)}/>
                </View>
                <Box alignItems="center">
                    <Input placeholder="   Add Title" variant="filled" bg ="#f2f2f2"  borderColor={"#9D9D9D"} borderWidth={2}  marginTop={'5%'}
                    width="72%" borderRadius="20" py="1" px="2"  size = "lg" 
                    >
                    </Input>
                    <View marginTop={'3%'}>
                    <ReviewBox 
                        userReview = {userReview}
                        setUserReview={setUserReview}
                    >
                    </ReviewBox>
                    </View>
                </Box>
                <View  alignItems="center" marginTop={'5%'}>
                    <Button size = "md" bg="#f2f2f2" _pressed = {{bg:'#D3D3D3'}} borderColor = "#9D9D9D" borderWidth={2} borderRadius={20} width ={'70%'}>
                        <HStack>
                            <Icon size="sm" as={MaterialCommunityIcons} name="camera-outline" color='#3880FF'  />
                            <Text>
                                Add photos
                            </Text>
                        </HStack>
                    </Button>
                </View>

                <View paddingLeft={'10%'} marginTop={'8%'} >
                    <Text fontWeight={'bold'} fontSize={'md'}>
                        What is great about living here?
                    </Text>
                    <View marginTop={'5%'}>
                        <HStack space={2}  >
                            <Button onPress={() => setsafeButton(!safeButton)}  borderColor = "#9D9D9D" borderWidth={1} borderwidth ={2} bg={{}} borderRadius={20} minWidth={'20%'} 
                                style={{backgroundColor:safeButton==true? "#C1D8FF": "#f2f2f2"}} _text={{color:safeButton == true?"#3880FF": "#000000" }} >
                                Safe
                            </Button>
                            <Button onPress={() => setloungesButton(!loungesButton)}  borderColor = "#9D9D9D" borderWidth={1} borderwidth ={2} bg={{}} borderRadius={20} minWidth={'20%'}
                                style={{backgroundColor:loungesButton==true? "#C1D8FF": "#f2f2f2"}} _text={{color:loungesButton == true?"#3880FF": "#000000" }} >
                                Lounges
                            </Button>
                            <Button onPress={() => setgymButton(!gymButton)}  borderColor = "#9D9D9D" borderWidth={1} borderwidth ={2} bg={{}}  borderRadius={20} minWidth={'20%'}
                                style={{backgroundColor:gymButton==true? "#C1D8FF": "#f2f2f2"}} _text={{color:gymButton == true?"#3880FF": "#000000" }} >
                                Gym
                            </Button>
                            <Button onPress={() => setquietButton(!quietButton)}  borderColor = "#9D9D9D" borderWidth={1} borderwidth ={2} bg={{}} borderRadius={20} minWidth={'20%'}
                                style={{backgroundColor:quietButton==true? "#C1D8FF": "#f2f2f2"}}  _text={{color:quietButton == true?"#3880FF": "#000000" }} >
                                Quiet
                            </Button>
                        </HStack>
                        <Text marginTop={'5%'} fontWeight={'bold'} fontSize={'md'}>
                            Some things to improve.
                        </Text>
                        <HStack space = {2} marginTop={'5%'}>
                            
                            <Button onPress={() => setpestButton(!pestButton)}  borderColor = "#9D9D9D" borderWidth={1} borderwidth ={2} bg={{}} borderRadius={20} minWidth={'20%'}
                                style={{backgroundColor:pestButton==true? "#C1D8FF": "#f2f2f2"}} _text={{color:pestButton == true?"#3880FF": "#000000" }} >
                                Pest
                            </Button>
                            <Button onPress={() => setShowerleaksButton(!showerleaksButton)}  borderColor = "#9D9D9D" borderWidth={1} borderwidth ={2} bg={{}} borderRadius={20} minWidth={'20%'}
                                style={{backgroundColor:showerleaksButton==true? "#C1D8FF": "#f2f2f2"}} _text={{color:showerleaksButton == true?"#3880FF": "#000000" }} >
                                Shower Leaks
                            </Button>
                            <Button onPress={() => setNoisyButton(!noisyButton)}  borderColor = "#9D9D9D" borderWidth={1} borderwidth ={2} bg={{}} borderRadius={20} minWidth={'20%'}
                                style={{backgroundColor:noisyButton==true? "#C1D8FF": "#f2f2f2"}} _text={{color:noisyButton == true?"#3880FF": "#000000" }} >
                                Noisy
                            </Button>
                        </HStack>
                        </View>
                </View>
                <View paddingLeft={'10%'} marginTop={'8%'} width={'100%'} >
                    <Text fontWeight={'bold'} fontSize={'md'}>
                        Features
                    </Text>
                    <HStack justifyContent="space-between" width={'100%'} alignItems="center" marginTop={'3%'}>
                        <Text fontSize={'md'}>
                            Bus route
                        </Text>
                            <HStack >
                                <Button  borderColor = "#9D9D9D" borderWidth={1} style={{backgroundColor:busRoute==1? "#C1D8FF": "#f2f2f2"}} onPress={() => setbusRoute(1)} width={"25%"} borderLeftRadius={20} borderRadius={0}>
                                    <Icon size="sm" as={MaterialCommunityIcons} name="thumb-up-outline" style={{color:busRoute == 1?"#3880FF": "#000000" }} />
                                </Button>
                                <Button  borderColor = "#9D9D9D" borderWidth={1} style={{backgroundColor:busRoute==0? "#C1D8FF": "#f2f2f2"}} onPress={() => setbusRoute(0)} width={"25%"} borderRadius={0} _text={{color:busRoute == 0?"#3880FF": "#000000" }}>
                                    OK
                                </Button>
                                <Button  borderColor = "#9D9D9D" borderWidth={1} style={{backgroundColor:busRoute==-1? "#C1D8FF": "#f2f2f2"}} onPress={() => setbusRoute(-1)} width={"25%"} borderRadius={0} borderRightRadius={20}>
                                    <Icon size="sm" as={MaterialCommunityIcons} name="thumb-down-outline" style={{color:busRoute == -1?"#3880FF": "#000000" }} />
                                </Button>
                            </HStack>
                    </HStack>

                    <HStack justifyContent="space-between" width={'100%'} alignItems="center" marginTop={'5%'}>
                        <Text fontSize={'md'}>
                            Gym
                        </Text>
                            <HStack >
                                <Button  borderColor = "#9D9D9D" borderWidth={1} style={{backgroundColor:gym==1? "#C1D8FF": "#f2f2f2"}} onPress={() => setGym(1)} width={"25%"} borderLeftRadius={20} borderRadius={0}>
                                    <Icon size="sm" as={MaterialCommunityIcons} name="thumb-up-outline" style={{color:gym == 1?"#3880FF": "#000000" }} />
                                </Button>
                                <Button  borderColor = "#9D9D9D" borderWidth={1} style={{backgroundColor:gym==0? "#C1D8FF": "#f2f2f2"}} onPress={() => setGym(0)} width={"25%"} borderRadius={0} _text={{color:gym == 0?"#3880FF": "#000000" }}>
                                OK
                                </Button>
                                <Button  borderColor = "#9D9D9D" borderWidth={1} style={{backgroundColor:gym==-1? "#C1D8FF": "#f2f2f2"}} onPress={() => setGym(-1)}   width={"25%"} borderRadius={0} borderRightRadius={20}>
                                    <Icon size="sm" as={MaterialCommunityIcons} name="thumb-down-outline" style={{color:gym == -1?"#3880FF": "#000000" }} />
                                </Button>
                            </HStack>
                    </HStack>

                    <HStack justifyContent="space-between" width={'100%'} alignItems="center" marginTop={'5%'}>
                        <Text fontSize={'md'}>
                            Bike
                        </Text>
                            <HStack >
                                <Button  borderColor = "#9D9D9D" borderWidth={1} style={{backgroundColor:bike==1? "#C1D8FF": "#f2f2f2"}} onPress={() => setBike(1)} width={"25%"} borderLeftRadius={20} borderRadius={0}>
                                    <Icon size="sm" as={MaterialCommunityIcons} name="thumb-up-outline" style={{color:bike == 1?"#3880FF": "#000000" }} />
                                </Button>
                                <Button  borderColor = "#9D9D9D" borderWidth={1} style={{backgroundColor:bike==0? "#C1D8FF": "#f2f2f2"}} onPress={() => setBike(0)} width={"25%"} borderRadius={0}  _text={{color:bike == 0?"#3880FF": "#000000" }}>
                                    OK
                                </Button>
                                <Button  borderColor = "#9D9D9D" borderWidth={1} style={{backgroundColor:bike==-1? "#C1D8FF": "#f2f2f2"}} onPress={() => setBike(-1)} width={"25%"} borderRadius={0} borderRightRadius={20}>
                                    <Icon size="sm" as={MaterialCommunityIcons} name="thumb-down-outline" style={{color:bike == -1?"#3880FF": "#000000" }} />
                                </Button>
                            </HStack>
                    </HStack>
                </View>

                <View>
                    <Button alignSelf={'center'} width="70%" bg={"#3880FF"} borderRadius={"20"} shadow={1} marginTop={'3%'}>
                        Post
                    </Button>
                    <Button variant = "ghost" size="lg" alignSelf={'center'}  _text={{color: "#3880FF"}} marginTop={'3%'}>
                       
                        Cancel
                    </Button>
                </View>
            </ScrollView>


            
        </View>
    );
}

export default ReviewScreen;

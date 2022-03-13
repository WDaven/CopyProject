
import React, { useState, useRef } from "react";
import { useWindowDimensions } from 'react-native';
import {
    VStack,
    HStack,
    Button,
    IconButton,
    Icon,
    Text,
    Center,
    Box,
    View,
    ScrollView,
    Image,
    AspectRatio,
    Divider,
    Avatar,
} from "native-base";
import StarRating from 'react-native-star-rating';

import Constants from 'expo-constants';
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons"; 
import Carousel from 'react-native-snap-carousel';

// Refactor later
function DetailScreen({ navigation }) {
    const carouselRef = useRef();
    const { _, width} = useWindowDimensions();
    const [activeIndex, setActiveIndex] = useState(0);
    const [carouselItems, setCarouselItems] = useState([
        {
            uri: "https://housing.gatech.edu/sites/default/files/styles/juicebox_large/public/building/gallery/cld-bldg.jpg?itok=J5ZkPw2r",
        },
        {
            uri: "https://housing.gatech.edu/sites/default/files/building/gallery/cloudmanbedroom2_w_bedrail_1.jpg",
        },
        {
            uri: "https://housing.gatech.edu/sites/default/files/styles/juicebox_large/public/building/gallery/cloudmankitchen001.gif?itok=SQd8siJc",
        },
        {
            uri: "https://housing.gatech.edu/sites/default/files/styles/juicebox_large/public/building/gallery/cloudmanactivityrm001.gif?itok=WQSMTw-H"
        }
    ]);
    const [favorite, setFavorite] = useState(0);
    const renderItem = ({item, index}) => {
        return (
            <Box>
                <AspectRatio w="100%" ratio={16 / 9}>
                    <Image source={{ uri: item.uri }} alt="Image" />
                </AspectRatio>
            </Box>
        );
    }
    return (
        <ScrollView marginTop={Constants.statusBarHeight}>
            <HStack alignItems="center">
                <IconButton
                    icon={<Icon as={MaterialCommunityIcons}
                                size="sm"
                                name="arrow-left"
                                color='#757575'/>}
                    onPress={() => navigation.goBack()}
                    _pressed = {{bg: '#D3D3D3'}}/>
                <Text fontSize="lg">
                    Search
                </Text>
            </HStack>
            <HStack>

                <IconButton
                    zIndex={1}
                    position="absolute"
                    left={0}
                    top={20}
                    icon={<Icon as={MaterialCommunityIcons}
                                size="lg"
                                name="chevron-left"
                                color='white'/>}
                    onPress={() => carouselRef.current.snapToPrev()}/>
                <Carousel
                    layout={"default"}
                    ref={carouselRef}
                    data={carouselItems}
                    sliderWidth={width}
                    itemWidth={width}
                    renderItem={(item) => renderItem(item)}
                    onSnapToItem = {(index) => setActiveIndex(index)}/>

                <IconButton
                    zIndex={1}
                    position="absolute"
                    right={0}
                    top={20}
                    icon={<Icon as={MaterialCommunityIcons}
                                size="lg"
                                name="chevron-right"
                                color='white'/>}
                    onPress={() => carouselRef.current.snapToNext()}/>
            </HStack>
            <HStack paddingLeft={5}>
                <VStack>
                    <Text fontSize="md" color="grey">EAST</Text>
                    <Text fontSize="xl">CLOUDMAN</Text>
                    <HStack>
                        <StarRating
                            disabled={true}
                            maxStars={5}
                            rating={4.5}
                            starSize={15}
                            emptyStar={'star-outline'}
                            fullStar={'star'}
                            halfStar={'star-half-full'}
                            iconSet={'MaterialCommunityIcons'}
                            fullStarColor={'black'}
                        />
                        <Text fontSize="xs" marginLeft={2} color="blue.500">2 reviews</Text>
                    </HStack>
                </VStack>
                <View position={"absolute"} right={5} top={4}>
                    <StarRating
                        maxStars={1}
                        rating={favorite}
                        starSize={40}
                        emptyStar={'heart-outline'}
                        fullStar={'heart'}
                        iconSet={'MaterialCommunityIcons'}
                        fullStarColor={'#3880ff'}
                        selectedStar={() => setFavorite(favorite == 0 ? 1 : 0)}/>
                </View>
            </HStack>
            <Divider my={2}/>
            <HStack space={3} justifyContent="center">
                <Center>
                    <VStack>
                        <Center>
                            <Icon
                                as={MaterialCommunityIcons}
                                size="md"
                                name="door"
                                color='black'/>
                            <Text>2-3 people</Text>
                        </Center>
                    </VStack>
                </Center>
                <Center>
                    <VStack>
                        <Center>
                            <Icon
                                as={MaterialCommunityIcons}
                                size="md"
                                name="shower"
                                color='black'/>
                            <Text>Shared</Text>
                        </Center>
                    </VStack>
                </Center>
            </HStack>
            <Divider my={2}/>
            <Text paddingLeft={5} paddingBottom={2} fontSize="md" bold>Pros</Text>

            <VStack paddingLeft={7}>
                <HStack>
                    <Icon
                        as={Ionicons}
                        size="xs"
                        name="library-outline"
                        color='grey'
                        marginTop={1}/>
                    <Text fontSize="sm" paddingLeft={2} color="grey">Near CULC</Text>
                </HStack>
                <HStack>
                    <Icon
                        as={Ionicons}
                        size="xs"
                        name="american-football-outline"
                        color='grey'
                        marginTop={1}/>
                    <Text fontSize="sm" paddingLeft={2} color="grey">Near Bobby Dodd Stadium</Text>
                </HStack>
            </VStack>

            <Text paddingLeft={5} paddingBottom={2} fontSize="md" bold>Cons</Text>
            <VStack paddingLeft={7}>
                <HStack>
                    <Icon
                        as={Ionicons}
                        size="xs"
                        name="bug-outline"
                        color='grey'
                        marginTop={1}/>
                    <Text fontSize="sm" paddingLeft={2} color="grey">Pests</Text>
                </HStack>
                <HStack>
                    <Icon
                        as={Ionicons}
                        size="xs"
                        name="barbell-outline"
                        color='grey'
                        marginTop={1}/>
                    <Text fontSize="sm" paddingLeft={2} color="grey">Far from CRC</Text>
                </HStack>
            </VStack>

            <Text paddingLeft={5} fontSize="md" bold>Reviews</Text>
            <VStack paddingLeft={5} marginTop={2}>
                <HStack>
                    <Avatar size="xs"></Avatar>
                    <Text marginLeft={2}>CloudResident</Text>
                </HStack>
                <HStack marginTop={1}>
                    <StarRating
                        disabled={true}
                        maxStars={5}
                        rating={4}
                        starSize={15}
                        emptyStar={'star-outline'}
                        fullStar={'star'}
                        halfStar={'star-half-full'}
                        iconSet={'MaterialCommunityIcons'}
                        fullStarColor={'black'}
                    />
                </HStack>
                <VStack>
                    <Text bold>A little noisy</Text>
                    <Text color="grey">March 2021</Text>
                    <Text>It's an okay experience, but noisy</Text>
                </VStack>
            </VStack>
            <VStack paddingLeft={5} marginTop={2}>
                <HStack>
                    <Avatar size="xs"></Avatar>
                    <Text marginLeft={2}>RealGeorgeBurdell</Text>
                </HStack>
                <HStack marginTop={1}>
                    <StarRating
                        disabled={true}
                        maxStars={5}
                        rating={5}
                        starSize={15}
                        emptyStar={'star-outline'}
                        fullStar={'star'}
                        halfStar={'star-half-full'}
                        iconSet={'MaterialCommunityIcons'}
                        fullStarColor={'black'}
                    />
                </HStack>
                <VStack>
                    <Text bold>Amazing</Text>
                    <Text color="grey">January 2021</Text>
                    <Text>10/10 would recommend</Text>
                </VStack>
            </VStack>
            <Box my={2}></Box>
        </ScrollView>
    );
}

export default DetailScreen;
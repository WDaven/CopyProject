import React, { useEffect, useState, useRef } from "react";
import { Pressable } from 'react-native';
import { useNavigation, useRoute } from "@react-navigation/native";
import {
    VStack,
    HStack,
    Icon,
    Text,
    Box,
    View,
    ScrollView,
    Divider,
    Avatar,
} from "native-base";
import moment from "moment";
import StarRating from 'react-native-star-rating';
import PhotoCarousel from "../components/PhotoCarousel";
import { MaterialCommunityIcons } from "@expo/vector-icons"; 
import { DetailIcon, ProsConsIcon } from "../components/Icons";
import { NavigationEvents } from '@react-navigation/native';

function DetailScreen() {
    const carouselRef = useRef();
    const navigation = useNavigation();
    const route = useRoute();

    const { name, location, address, images, avg_rating, num_reviews } = route.params;
    const [reviews, setReviews] = useState([]);
    const [favorite, setFavorite] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0);
    const [carouselItems, setCarouselItems] = useState(images.map(image => { return { uri: image } }));

    const fetchData = async () => {
        const document_id = name.toLowerCase().replace(' ', '-');
        const reviews = await fetch(
            "https://us-central1-mas-project-4261.cloudfunctions.net/app/dorms/" + document_id + "/reviews"
        );
        const reviewsData = await reviews.json();
        setReviews(reviewsData);
    };

    useEffect(() => {
        navigation.setOptions({ headerTitle: name });
        fetchData();
    }, [navigation]);

    return (
        <View>
            <ScrollView>
                <PhotoCarousel
                    carouselRef={carouselRef}
                    carouselItems={carouselItems}
                    setActiveIndex={setActiveIndex}
                />
                <HStack paddingLeft={5}>
                    <VStack>
                        <Text fontSize="md" color="grey" marginTop={1}>{location.toUpperCase()}</Text>
                        <HStack>
                            <Text fontSize="xl">{name.toUpperCase()}</Text>
                            <HStack marginLeft={2} paddingTop={2}>
                                <Icon
                                    as={MaterialCommunityIcons}
                                    size="xs"
                                    color="blue.500"
                                    name="map-marker-outline"/>
                                <Text fontSize="xs" color="blue.500">{address}</Text>
                            </HStack>
                        </HStack>
                        <HStack>
                            <Icon
                                as={MaterialCommunityIcons}
                                size="xs"
                                color="red.500"
                                marginTop={0.5}
                                name="star"/>
                            <Text fontSize="xs" paddingLeft={1} color="red.500">
                                {(Math.round(10 * avg_rating) / 10).toFixed(1)}
                            </Text>
                            <Text fontSize="xs" paddingLeft={1}>({num_reviews})</Text>
                        </HStack>
                    </VStack>
                    <View position={"absolute"} right={5} top={5}>
                        <StarRating
                            maxStars={1}
                            rating={favorite}
                            starSize={40}
                            emptyStar={require('../cards-heart-outline.png')}
                            fullStar={require('../cards-heart.png')}
                            fullStarColor={"#3880ff"}
                            selectedStar={() => setFavorite(favorite == 0 ? 1 : 0)}/>
                    </View>
                </HStack>

                <Divider my={2}/>
                <HStack space={4} justifyContent="center">
                    <DetailIcon name="door" text="2-3 beds"/>
                    <DetailIcon name="shower" text="1 bathroom"/>
                </HStack>
                <Divider my={2}/>

                <Text paddingLeft={5} fontSize="md" bold>Pros</Text>
                <VStack paddingLeft={8}>
                    <ProsConsIcon name="library" text="Near CULC"/>
                    <ProsConsIcon name="football" text="Near Bobby Dodd"/>
                </VStack>
                <Text paddingLeft={5} fontSize="md" bold>Cons</Text>
                <VStack paddingLeft={8}>
                    <ProsConsIcon name="pest" text="Pests"/>
                    <ProsConsIcon name="barbell" text="Far from CRC"/>
                </VStack>

                <Text paddingTop={2} paddingLeft={5} fontSize="md" bold>Reviews</Text>

                {reviews.map((review, index) => 
                    <Review
                        key={index}
                        reviewer={review.reviewer}
                        rating={review.rating}
                        title={review.title}
                        date={moment(review.date).format('MMMM YYYY')}
                        text={review.text}
                    />
                )}

                <VStack>
                    <View paddingLeft={"5%"} paddingTop={"4%"}>
                        <Text bold fontSize={"lg"}>Do you live here?</Text>
                        <Text bold fontSize={"lg"}>Rate & leave a review!</Text>
                        <HStack>
                            <View>
                                <Pressable onPress={() => navigation.navigate('ReviewScreen', {
                                    name: name
                                })}>
                                    <HStack>
                                        {[...Array(5)].map(_ => <Icon as={MaterialCommunityIcons} size="lg" name="star-outline"/>)}
                                    </HStack>
                                </Pressable>
                            </View>
                        </HStack>
                    </View>
                </VStack>

                <Box my={2} />
            </ScrollView>
        </View>
    );
}

function Review(props) {
    const { reviewer, rating, title, date, text } = props;
    return (
        <VStack marginTop={2} paddingLeft={5} paddingRight={5}>
            <HStack>
                <Avatar size="xs"></Avatar>
                <Text marginLeft={2}>{reviewer}</Text>
            </HStack>
            <HStack marginTop={1}>
                <StarRating
                    disabled={true}
                    maxStars={5}
                    rating={rating}
                    starSize={15}
                    emptyStar={require('../star-outline.png')}
                    fullStar={require('../star.png')}
                    halfStar={"star-half-full"}
                    fullStarColor={"black"}
                />
            </HStack>
            <VStack>
                <Text bold>{title}</Text>
                <Text color="grey">{date}</Text>
                <Text>{text}</Text>
            </VStack>
        </VStack>
    );
}

export default DetailScreen;
import React, {useState} from "react";
import {Heading, AspectRatio, Pressable, Text, Box, HStack, Spacer, Flex, Badge, Center, NativeBaseProvider, Image, VStack, View, Icon } from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons"; 
import StarRating from "react-native-star-rating";

export default function MapPreview(props) {
  const [favorite, setFavorite] = useState(0);
  const{onPress, dormName, dormImage, dormRating, dormLocation, num_reviews} = props;
  return ( 
      <Box alignItems="center" paddingLeft={15} paddingRight= {15}>
        <Pressable onPress={onPress}>
          <Box width={280} bg="#FFFFFF" p='2.5' rounded="15" height={"100%"}>
              <HStack>
                <View rounded="20" overflow= "hidden" alignItems={'center'}  justifyContent={'center'}>
                    <AspectRatio w='75' ratio={1/1} >
                    {dormImage}
                    </AspectRatio>
                </View>
                  <VStack alignItems={"flex-start"} paddingLeft={5}>
                  <Text fontWeight={'bold'} fontSize={'lg'}>
                    {dormName}
                  </Text>
                  <HStack alignItems={'center'}  justifyContent={'center'}>
                    <Icon
                      as={MaterialCommunityIcons}
                        size="xs"
                        color={'#DA0000'}
                        name="map-marker-outline"/>
                    <Text color={'#BDBDBD'} fontSize='md'>
                      {dormLocation}
                    </Text>

                  </HStack>
                  <HStack alignItems={'center'}  justifyContent={'center'}>
                    <Icon
                      as={MaterialCommunityIcons}
                        size="xs"
                        color={'#DA0000'}
                        name="star"/>
                      <HStack>
                        <Text color={'#DA0000'} fontSize='lg'>
                          {dormRating} 
                        </Text>
                        <Text color={'#000000'} fontSize='lg' paddingLeft={2}>
                          ({num_reviews})
                        </Text>
                      </HStack>

                  </HStack>
                  </VStack>
                  <View paddingLeft={7}>
                    <StarRating
                              maxStars={1}
                              rating={favorite}
                              starSize={30}
                              emptyStar={"heart-outline"}
                              fullStar={"heart"}
                              iconSet={"MaterialCommunityIcons"}
                              fullStarColor={"#3880ff"}
                              selectedStar={() => setFavorite(favorite == 0 ? 1 : 0)}/>
                    </View>
              </HStack>

          </Box>
        </Pressable>
    </Box>
  );
}

import React from "react";
import {Heading, AspectRatio, Pressable, Text, Box, HStack, Spacer, Flex, Badge, Center, NativeBaseProvider, Image } from "native-base";
import { NavigationEvents } from "react-navigation";
//cloudman dorm image
//https://housing.gatech.edu/sites/default/files/styles/juicebox_medium/public/building/gallery/cld-bldg.jpg?itok=WmoIH4Ag

export default function PreviewPressableTile(props) {
  const{onPress} = props;
  return ( 
      <Box alignItems="center">
        <Pressable onPress={onPress}>
          <Box maxW="96%" borderWidth="1" borderColor="coolGray.300" shadow="3" bg="coolGray.100" p="5" rounded="8">
          <Box>
            <AspectRatio w="100%" ratio={3/1}>
              <Image source={{
              uri: "https://housing.gatech.edu/sites/default/files/styles/juicebox_medium/public/building/gallery/cld-bldg.jpg?itok=WmoIH4Ag"
            }} alt="image" />
            </AspectRatio>
          </Box>
            <HStack alignItems="center">
              <Badge colorScheme="darkGreen.100" _text={{
              color: "white"
            }} variant="solid" rounded="4">
                Cloudman
              </Badge>
              <Spacer />

              <Badge colorScheme ="darkGreen.700" _text={{
              color: "white"
            }} variant="solid" rounded="full">
                4.8
              </Badge>

            </HStack>
          </Box>
        </Pressable>
    </Box>
  );
}

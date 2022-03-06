import React from "react";
import {Heading, AspectRatio, Pressable, Text, Box, HStack, Spacer, Flex, Badge, Center, NativeBaseProvider, Image } from "native-base";
//cloudman dorm image
//https://housing.gatech.edu/sites/default/files/styles/juicebox_medium/public/building/gallery/cld-bldg.jpg?itok=WmoIH4Ag
<Image source= {{uri :'https://housing.gatech.edu/sites/default/files/styles/juicebox_medium/public/building/gallery/cld-bldg.jpg'}}/>

function Example() {
  return <Box alignItems="center">
      <Pressable onPress={() => console.log("I'm Pressed")}>
        <Box maxW="96" borderWidth="1" borderColor="coolGray.300" shadow="3" bg="coolGray.100" p="5" rounded="8" borderHeight="100">
        <Box>
          <AspectRatio w="100%" ratio={25 / 9}>
            <Image source={{
            uri: "https://housing.gatech.edu/sites/default/files/styles/juicebox_medium/public/building/gallery/cld-bldg.jpg?itok=WmoIH4Ag"
          }} alt="image" />
          </AspectRatio>
          <Center bg="darkBlue.700" _dark={{
          bg: "violet.700"
        }} _text={{
          color: "warmGray.50",
          fontWeight: "700",
          fontSize: "xs"
        }} position="absolute" bottom="0" px="3" py="1.5">
            Cloudman
          </Center>
        </Box>
          <HStack alignItems="center">
            <Badge colorScheme="darkBlue" _text={{
            color: "white"
          }} variant="solid" rounded="4">
              Cloudman
            </Badge>

            <Badge colorScheme="lightGreen" _text={{
            color: "white"
          }} variant="solid" rounded="4">
              Bike Storage
            </Badge>
            <Spacer />
            <Text fontSize={10} color="coolGray.800">
              4.8⭐
            </Text>
          </HStack>
        </Box>
      </Pressable>
    </Box>;
}


export default () => {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
          <Example />
      </Center>
    </NativeBaseProvider>
  );
};
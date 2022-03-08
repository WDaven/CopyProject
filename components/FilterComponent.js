import React from "react";
import { Box, Image, Modal, Stack, VStack, HStack, Text, Checkbox, Center, Slider, NativeBaseProvider, View, Slide, Button, Icon} from "native-base";
import { useState } from "react";
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import { Rating, AirbnbRating } from 'react-native-ratings';
import { MaterialCommunityIcons } from "@expo/vector-icons"; 
const Example = () => {
  const [showModal, setShowModal] = useState(false);
  const [locationValues, setLocationValues] = React.useState([]);
  const [roommateValues, setRoommateValues] = React.useState([]);
  const [bathroomValues, setBathroomValues] = React.useState([]);
  const [onChangeValue, setOnChangeValue] = React.useState(70);
  const [budgetValues, setBudgetValues] = React.useState([0, 5000]);
  return <Center>
            <Button
                    onPress={() => setShowModal(true)}>
                <Text> Filters </Text>
                </Button>


      <Modal isOpen={showModal} animationType="slide" onClose={() => setShowModal(false)}>
      <Modal.Content maxWidth="350">
          <Modal.CloseButton />
          <Modal.Header>Filters</Modal.Header>
          <Modal.Body>
          <VStack space={4}>
                
                
                <VStack space = {1}>
                    <VStack space = {0}>
                        <HStack alignItems="center">
                            <Icon as={MaterialCommunityIcons} name="map-marker-outline" color = "grey"/>
                            <Text fontWeight="medium">Location</Text>
                        </HStack>
                        <HStack alignItems="center" justifyContent="space-between">
                            <Text color="blueGray.400">         Select 1 or more</Text>
                        </HStack>
                    </VStack>
                        <HStack alignItems="center" justifyContent="space-between" marginLeft={30}>
                            <Checkbox.Group onChange={setLocationValues} value={locationValues} accessibilityLabel="choose numbers">
                            <Checkbox value="one" my={2}>
                                East
                            </Checkbox>
                                <Checkbox value="two">West</Checkbox>
                            </Checkbox.Group>
                        </HStack>
        
                </VStack>
              
              
              
              
                <HStack alignItems="center" >
                    <Icon as={MaterialCommunityIcons} name="star-outline" color = "grey" size = {8}/>
                    <Text fontWeight="medium">Reviews</Text>
                </HStack>

                <VStack space = {0}>
                    <HStack alignItems="center" justifyContent="space-between">
                    <HStack>
                    <AirbnbRating />
                    <Text color="blueGray.400">& up</Text>
                    </HStack>
                    </HStack>
                </VStack>

                <VStack space = {1}>
                    <VStack space = {0}>
                        <HStack alignItems="center">
                            <Icon as={MaterialCommunityIcons} name="bed-single-outline" color = "grey"/>
                            <Text fontWeight="medium">Beds</Text>
                        </HStack>
                        <HStack alignItems="center" justifyContent="space-between">
                            <Text color="blueGray.400">         Select 1 or more</Text>
                        </HStack>
                    </VStack>
                    
                    <HStack alignItems="center" marginLeft={30}>

                    <Checkbox.Group onChange={setRoommateValues} value={roommateValues} accessibilityLabel="choose numbers">
                        <Checkbox value="one" >
                            1
                        </Checkbox>
                            <Checkbox value="two">2</Checkbox>
                            <Checkbox value="one"> 3 </Checkbox>
                            <Checkbox value="two">4+</Checkbox>
                        </Checkbox.Group>
                    
                    </HStack>
                </VStack>


                <VStack space = {1}>
                    <VStack space = {0}>
                        <HStack alignItems="center">
                            <Icon as={MaterialCommunityIcons} name="shower" color = "grey" size ={6}/>
                            <Text fontWeight="medium"> Bathroom</Text>
                        </HStack>
                        <HStack alignItems="center" justifyContent="space-between">
                            <Text color="blueGray.400">Select 1 or more</Text>
                        </HStack>
                        <HStack alignItems="center" justifyContent="space-between" paddingLeft={30}>
                        <Checkbox.Group onChange={setBathroomValues} value={bathroomValues} accessibilityLabel="choose numbers">
                        <Checkbox value="one" my={2}>
                            Single
                        </Checkbox>
                            <Checkbox value="two">Shared - 1 other person</Checkbox>
                            <Checkbox value="one" my={2}>
                            Shared floor - same gender
                        </Checkbox>
                        </Checkbox.Group>
                        </HStack>
                    </VStack>
                </VStack>

                <VStack space = {1}>
                    <VStack space = {0}>
                        <HStack alignItems="center" justifyContent="space-between">
                            <Text fontWeight="medium">Budget</Text>
                        </HStack>
                        <HStack alignItems="center" justifyContent="space-between">
                            <Text color="blueGray.400">Use slider (price per semester)</Text>
                        </HStack>
                        <HStack  width={1}>

                            <MultiSlider
                            values={[0, 5000]}
                            isMarkersSeparated={true}
                            min={0}
                            max={5000}
                            onValuesChange={(values) => setBudgetValues(values)}
                            step={100}
                            allowOverlap={false}
                            minMarkerOverlapDistance={10}
                                />
                        </HStack>
                            <HStack justifyContent="space-between">
                            <Text bold>Min: {budgetValues[0]}</Text>
                            <Text bold>Max: {budgetValues[1]}</Text>
                            </HStack>
                
                        
                        </VStack>
                </VStack>
            </VStack>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button variant="ghost" colorScheme="blueGray" onPress={() => {
              setShowModal(false);
            }}>
                Cancel
              </Button>
              <Button onPress={() => {
              setShowModal(false);
            }}>
                Apply
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Center>
};

    export default () => {
        return (
          <NativeBaseProvider>
            <View>
                <Example />
            </View>
          </NativeBaseProvider>
        );
    };

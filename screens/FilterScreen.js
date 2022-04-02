import React from "react";
import { Button, Box, Modal, Stack, VStack, HStack, Text, Checkbox, Center, Slider, NativeBaseProvider } from "native-base";
import { useState } from "react";
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import StarRating from "react-native-star-rating";

const Example = () => {
  const [showModal, setShowModal] = useState(false);
  const [locationValues, setLocationValues] = React.useState([]);
  const [roommateValues, setRoommateValues] = React.useState([]);
  const [bathroomValues, setBathroomValues] = React.useState([]);
  const [onChangeValue, setOnChangeValue] = React.useState(70);
  const [favorite, setFavorite] = useState(0);
  const [budgetValues, setBudgetValues] = React.useState([0, 5000]);
  return <Center>
    <Button
                    title="Filters"
                    onPress={() => setShowModal(true)}
                ></Button>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
      <Modal.Content maxWidth="350">
          <Modal.CloseButton />
          <Modal.Header>Filters</Modal.Header>
          <Modal.Body>
          <VStack space={3}>
              <HStack alignItems="center" justifyContent="space-between">
                <Text fontWeight="medium">Location</Text>
              </HStack>
              <HStack alignItems="center" justifyContent="space-between">
                <Text color="blueGray.400">Select 1 or more</Text>
              </HStack>
              <HStack alignItems="center" justifyContent="space-between">
              <Checkbox.Group onChange={setLocationValues} value={locationValues} accessibilityLabel="choose numbers">
              <Checkbox value="one" my={2}>
                East
              </Checkbox>
                <Checkbox value="two">West</Checkbox>
              </Checkbox.Group>
              </HStack>
              <HStack alignItems="center" justifyContent="space-between">
                <Text fontWeight="medium">Reviews</Text>
              </HStack>
              <HStack alignItems="center" justifyContent="space-between">
                <Text color="blueGray.400">Select the minimum stars (if you select 3,
                you'll get 3 and up)</Text>
              
              </HStack>

              <HStack alignItems="center" justifyContent="space-between">
              <StarRating
                                maxStars={5}
                                rating={favorite}
                                starSize={40}
                                emptyStar={"heart-outline"}
                                fullStar={"heart"}
                                iconSet={"MaterialCommunityIcons"}s
                                fullStarColor={"#3880ff"}
                                selectedStar={(rating) => setFavorite(rating)}/>

                

              </HStack>
              <HStack alignItems="center" justifyContent="space-between">
                <Text fontWeight="medium">Beds</Text>
              </HStack>
              <HStack alignItems="center" justifyContent="space-between">
                <Text color="blueGray.400">Select 1 or more</Text>
              </HStack>
              <HStack alignItems="center" justifyContent="space-between">
              <Checkbox.Group onChange={setRoommateValues} value={roommateValues} accessibilityLabel="choose numbers">
              <Checkbox value="one" my={2}>
                1
              </Checkbox>
                <Checkbox value="two">2</Checkbox>
                <Checkbox value="one" my={2}>
                3
              </Checkbox>
                <Checkbox value="two">4+</Checkbox>
              </Checkbox.Group>
              
              </HStack>
              <HStack alignItems="center" justifyContent="space-between">
                <Text fontWeight="medium">Bathroom</Text>
              </HStack>
              <HStack alignItems="center" justifyContent="space-between">
                <Text color="blueGray.400">Select 1 or more</Text>
              </HStack>
              <HStack alignItems="center" justifyContent="space-between">
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
              <HStack alignItems="center" justifyContent="space-between">
                <Text fontWeight="medium">Budget</Text>
              </HStack>
              <HStack alignItems="center" justifyContent="space-between">
                <Text color="blueGray.400">Use slider (price per semester)</Text>
              </HStack>
              <HStack alignItems="center" justifyContent="space-between">

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
                <HStack>
                <Text bold>Min: {budgetValues[0]}</Text>
                </HStack>
                <HStack>
                <Text bold>Max: {budgetValues[1]}</Text>
                </HStack>
              
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
    </Center>;
};

    export default () => {
        return (
          <NativeBaseProvider>
            <Center flex={1} px="3">
                <Example />
            </Center>
          </NativeBaseProvider>
        );
    };

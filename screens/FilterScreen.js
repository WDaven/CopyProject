import React from "react";
import { Button, Modal, VStack, HStack, Text, Radio, Center, NativeBaseProvider } from "native-base";
import { useState } from "react";

const Example = () => {
  const [showModal, setShowModal] = useState(false);
  return <Center>
      <Button onPress={() => setShowModal(true)}>Button</Button>
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
                <Text fontWeight="medium">Reviews</Text>
              </HStack>
              <HStack alignItems="center" justifyContent="space-between">
                <Text color="blueGray.400">Select the minimum stars (if you select 3,
                you'll get 3 and up)</Text>
              </HStack>
              <HStack alignItems="center" justifyContent="space-between">
                <Text fontWeight="medium">Roommates</Text>
              </HStack>
              <HStack alignItems="center" justifyContent="space-between">
                <Text color="blueGray.400">Select 1 or more</Text>
              </HStack>
              <HStack alignItems="center" justifyContent="space-between">
                <Text fontWeight="medium">Bathroom</Text>
              </HStack>
              <HStack alignItems="center" justifyContent="space-between">
                <Text color="blueGray.400">Select 1 or more</Text>
              </HStack>
              <HStack alignItems="center" justifyContent="space-between">
                <Text fontWeight="medium">Budget</Text>
              </HStack>
              <HStack alignItems="center" justifyContent="space-between">
                <Text color="blueGray.400">Use slider (price per semester)</Text>
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

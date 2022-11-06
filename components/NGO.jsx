import {
  Flex,
  Heading,
  Link,
  Container,
  Image,
  Button,
  FormControl,
  Input,
  Center,
} from "@chakra-ui/react";
import React from "react";
import "@google/model-viewer";

export default function NGO() {
  return (
    <Flex h="100%" color="white" align="center" justify="center">
      <Flex direction="column" m="2" w="50%">
        <Flex
          justify="center"
          alignItems="center"
          h="15vh"
          borderBottomRadius="10"
          direction="column"
          w="100%"
        >
          <Center>
            <Flex direction="column">
              <Heading>NGO Profile registrer</Heading>
              <Flex justify="space-around">
                <Link href="#">Home</Link>
                <Link>Edit Profile</Link>
              </Flex>
            </Flex>
          </Center>
        </Flex>

        <Container>
          <Flex
            justify="center"
            alignItems="center"
            h="30vh"
            bgColor="Black"
            borderRadius="10"
            direction="column"
            w="20vh"
            mt="10"
            mb="10"
            ml="10"
          >
            <Image
              src="savePlanet.jpg"
              borderRadius="full"
              boxSize="150px"
              alt="save the Planet"
              p="8px"
            />
            <Button m="3" color="black" bgColor="green">
              Upload Photo
            </Button>
            <Button
              color="white"
              bgColor="black"
              borderColor="white"
              border="1px"
            >
              Delete
            </Button>
          </Flex>
        </Container>
        <Container>
          <Flex
            justify="center"
            alignItems="center"
            h="15vh"
            mb="10"
            bgColor="Black"
            borderRadius="10"
            direction="column"
            w="20vh"
            ml="10"
          >
            <model-viewer
              src="katreena.glb"
              alt="arbol"
              ar
              shadow-intensity="1"
              camera-controls
              touch-action="pan-y"
            />
          </Flex>
        </Container>
      </Flex>

      <Container
        bgColor="black"
        h="100%"
        alignContent="center"
        borderRadius="10px"
      >
        <Image src="savePlanet.jpg" m="5" boxSize="250px" />
        <Heading>Personal Information</Heading>
        <form>
          <FormControl>
            <Input m="1" placeholder="Full name" />
            <Input m="1" placeholder="Last name" />
            <Input m="1" placeholder="e-mail" />
            <Input m="1" placeholder=" Phone Number" />
            <Input m="1" placeholder="Custom URL" />
            <Input m="1" placeholder="eNTER YOUR bio" />
          </FormControl>
        </form>
      </Container>
    </Flex>
  );
}

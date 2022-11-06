import {
  Flex,
  Heading,
  Grid,
  Link,
  Container,
  Image,
  Button,
  FormControl,
  Input,
  Box,
  Center,
} from "@chakra-ui/react";

export default function NGO() {
  return (
    <Flex
      h="100%"
      color="white"
      align="center"
      justify="center"
      bgColor="orange"
    >
      <Flex direction="column" bgColor="blue" m="2" w="50%">
        <Container>
          <Flex
            justify="center"
            alignItems="center"
            h="15vh"
       
            bgColor="green"
            borderBottomRadius="10"
            direction="column"
            w="40vh"
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
        </Container>

        <Container>
          <Flex
            justify="center"
            alignItems="center"
            h="30vh"
            bgColor="Black"
            borderTopRadius="10"
            direction="column"
            w="20vh"
            mt="10" mb="10" ml="10"
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
            borderBottomRadius="10"
            direction="column"
            w="20vh"
            ml="10"
          >
            model viewer
          </Flex>
        </Container>
      </Flex>

      <Container bgColor="black" h="100%" alignContent="center">
        <Image src="savePlanet.jpg" />
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

import {
  Flex,
  Button,
  Text,
  Box,
  Link,
  Spacer,
  Container,
  Heading,
} from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import NGO from "./NGO";
// import '@google/model-viewer';

export default function AuthPage({ metamaskAuth }) {
  return (
    <Box bgGradient="Linear(to-br, #5d2080, #3a154f)">
      <Head>
        <title>Login / K3na/ documentation</title>
      </Head>
      <Flex></Flex>
      <Flex
        // direction="column"
        justifyContent="space-between"
        alignItems="center"
        width="100%"
        height="10vh"
        bgColor="black"
      >
        <Flex color="white" justify="space-between">
          <Link href="" isExternal="false">
            Home
          </Link>
          <Spacer></Spacer>
          <Link>Home</Link>
          <Link>Home</Link>
          <Link>Home</Link>
          <Link>Home</Link>
        </Flex>
        <Text fontSize="5xl" fontWeight="bold" color="white">
          Katreena Lands
        </Text>
        <Button
          color="white"
          bgColor="#05cd3e"
          size="lg"
          mt="6"
          onClick={metamaskAuth}
        >
          Login with Metamask
        </Button>
      </Flex>
      <Flex h="90vh" color="white" textAlign="center">
        <Container>
          <model-viewer
            src="katreena.glb"
            ios-src=""
            alt="A 3D model of an astronaut"
            shadow-intensity="1"
            camera-controls
            auto-rotate
          ></model-viewer>
        </Container>

        <Flex h="100%" align="center" justify="center" direction="column">
          <Container>
            <Heading>Discover the unique digital art of 3D AR NFT's</Heading>
            <Text>
              Digital marketplace for crypto collectibles and Ecological backend
              NFT's, Buy, sell, discover exclusive assets and save the planet.
            </Text>
            <Flex color="black" justify="space-between">
              <Button>Explore</Button>
              <Button>Create</Button>
            </Flex>
          </Container>
        </Flex>
      </Flex>
      <NGO></NGO>
      <Flex h="10vh" bgColor="black" color="white" borderTopRadius="20">
        Footer
      </Flex>
    </Box>
  );
}

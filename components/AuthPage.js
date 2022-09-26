import { Flex, Button, Text} from "@chakra-ui/react";
import Head from "next/head";
import React from "react";

export default function AuthPage({metamaskAuth}) {
    return (
    <>
      <Head>
      <title>Login / K3na</title>
      </Head>
      <Flex 
      direction="column" 
      justifyContent="center" 
      alignItems="center"
      width="100vw"
      height="100vh"
      bgGradient="Linear(to-br, teal.400, purple)"
      >
          <Text 
              fontSize="5xl" 
              fontWeight="bold"
              color="white"
          >Katreena World</Text>
          <Button 
              color="white" 
              bgColor="#05cd3e"
              size="lg"
              mt="6"
              onClick={metamaskAuth}
          >Login with Metamask</Button>
      </Flex>             
  </>
  )}

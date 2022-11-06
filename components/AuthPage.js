import { Flex, Button, Text, Box} from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import Nav from "./menuLanding"
// import '@google/model-viewer';


export default function AuthPage({metamaskAuth}) {
    return (
    <>
      <Head>
      <title>Login / K3na/ documentation

      </title>
      </Head>
      <Nav />
      <div className="navLanding">
        <a href="www.google.com">LINK GOOGLE</a>
      </div>
      <Flex 
      direction="column" 
      justifyContent="center" 
      alignItems="center"
      width="100vw"
      height="100vh"
      bgColor="black"
      >
          <Text 
              fontSize="5xl" 
              fontWeight="bold"
              color="white"
          >Katreena Lands</Text>
          <Button 
              color="white" 
              bgColor="#05cd3e"
              size="lg"
              mt="6"
              onClick={metamaskAuth}
          >Login with Metamask</Button>
      </Flex>  
      <Box>
      {/* <model-viewer
        src="katreena.glb"
         ios-src=""
         poster="https://cdn.glitch.com/36cb8393-65c6-408d-a538-055ada20431b%2Fposter-astronaut.png?v=1599079951717"
        alt="A 3D model of an astronaut"
        shadow-intensity="1"
        camera-controls
        auto-rotate
    ar
  ></model-viewer>     */}
    </Box>           
  </>
  )}

<<<<<<< Updated upstream
import { Flex, Button, Text, Box} from "@chakra-ui/react";
=======
import { Flex, Button, Text, Box, Link, Spacer, Container, Heading,  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,} from "@chakra-ui/react";
>>>>>>> Stashed changes
import Head from "next/head";
import React from "react";
import Nav from "./menuLanding"
//  import ModelView from '@google/model-viewer';
import Script from 'next/script'
import ModelGLB from "../public/faviconKN.png"




export default function AuthPage({metamaskAuth}) {
    return (
    <>
    <Script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js" />
      <Head>
      <title>Login / K3na/ documentation

      </title>
      </Head>
<<<<<<< Updated upstream
      <Nav />
      <div className="navLanding">
        <a href="www.google.com">LINK GOOGLE</a>
      </div>
=======
    
>>>>>>> Stashed changes
      <Flex 
      direction="column" 
      justifyContent="center" 
      alignItems="center"
      width="100vw"
      height="100vh"
      bgColor="black"
      color="white"
      >
<<<<<<< Updated upstream
=======
       
>>>>>>> Stashed changes
          <Text 
              fontSize="5xl" 
              fontWeight="bold"
              color="white"
          >Katreena</Text>
        <Breadcrumb separator=' ' marginLeft="50px"  align-self= "flex-end">
                <BreadcrumbItem isCurrentPage>
                  <BreadcrumbLink href='#'>Home</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                  <BreadcrumbLink href='#'>Metaverse</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem >
                  <BreadcrumbLink href='#'>White Paper</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem >
                  <BreadcrumbLink href='#'>Marketplace</BreadcrumbLink>
                </BreadcrumbItem>
        </Breadcrumb>
        
          
          <Button 
              color="white" 
              bgColor="#05cd3e"
              size="lg"
              mt="6"
              onClick={metamaskAuth}
              marginBottom = "25px"
              marginRight="20px"
              maxWidth="100px"
          >Login</Button>
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
<<<<<<< Updated upstream
    </Box>           
=======
        </Container >
        <model-viewer alt="Neil Armstrong's Spacesuit from the Smithsonian Digitization Programs Office and National Air and Space Museum" src="katree.glb" ar environment-image="shared-assets/environments/moon_1k.hdr" poster="3Dmarket.png" shadow-intensity="1" camera-controls touch-action="pan-y"></model-viewer>
        <Flex h="100%" align="center" justify="center" direction="column" >
          <Container >
        <Heading>Discover the unique digital art of 3D AR NFT's</Heading>
        <Text>Digital marketplace for crypto collectibles and Ecological backend NFT's, Buy, sell, discover exclusive assets and save the planet.</Text>
        <Flex>
        <Button>Explore</Button>
        <Button>Create</Button>
       
        </Flex>
        </Container>
        
        </Flex>
        
     
    </Flex> 
    <Flex h="10vh" bgColor="red" color="white">
      Footer</Flex>          
>>>>>>> Stashed changes
  </>
  )}

import { Flex, Box, Tab, TabList, Tabs, TabPanels, TabPanel } from "@chakra-ui/react";
import Head from "next/head";
import { useMoralis } from "react-moralis";
import Header from "../components/Header";
import Profile from "../components/Profile";
import Balance from "../components/Balance";
import Transactions from "../components/Transactions";
import NFT from "../components/NFT";
import Send from "../components/Send";
import MintNFT from "../components/MintNFT";
import AuthPage from "../components/AuthPage";
import NGO from "../components/NGO";


export default function Home() {
  const{
    isAuthenticated, 
    authenticate, 
    user, 
    logout, 
    isLoggingOut
  } = useMoralis()

  const metamaskAuth = async () => {
    try {
      await authenticate({
        signingMessage: "Sign to login to Katreena World" 
      })
    } catch (e){
      console.log(e)
    }
  }

  if(!isAuthenticated){
    return (
      <AuthPage metamaskAuth={metamaskAuth}/>
    )
  }
  return (
    <>
      <Head>
        <title>katreena</title>
      </Head>
      <Flex 
        direction="column" 
        width="100vw" 
        height="100vh"
      >
        <Header 
          user={user} 
          logout={logout} 
          isLoggingOut={isLoggingOut}
        />
        <Box 
          flex="1" 
          bgGradient="Linear(to-br, #5d2080, #3a154f)" 
          px="44" 
          py="20"
          
        >
          <NGO user={user} ></NGO>
          {/* <Tabs 
            size="lg" 
            colorScheme="purple" 
            color="#05cd3e" 
            borderColor="white"
            align="center" 
            variant="soft-rounded" 
            isFitted="true"
            
          >
            <TabList>
              <Tab fontWeight="bold">Profile</Tab>
              <Tab fontWeight="bold">Balance</Tab>
              <Tab fontWeight="bold">Transactions</Tab>
              <Tab fontWeight="bold">NFTs</Tab>
              <Tab fontWeight="bold">Send Eth</Tab>
              <Tab fontWeight="bold">Mint Nfts</Tab>
            </TabList>
            <TabPanels p='2rem'>
              <TabPanel>
                <Profile user={user}/>
                
              </TabPanel>
              <TabPanel>
                <Balance user={user}/>
              </TabPanel>
              <TabPanel>
                <Transactions user={user}/>
              </TabPanel>
              <TabPanel>
                <NFT user={user}/>
              </TabPanel>
              <TabPanel>
                <Send/>
              </TabPanel>
              <TabPanel>
                <MintNFT user={user}/>
              </TabPanel>
            </TabPanels>
          </Tabs> */}
        </Box>
      </Flex>
    </>
  )
}

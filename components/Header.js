import React from "react";
import { Flex, Center, Text, Button, Image } from "@chakra-ui/react";

export default function Header({ user, logout, isLoggingOut }) {
  // const navigate = useNavigate();
  // const navigateKatreeenaWorlds = () => {
  //     navigate('www.ar-nft.app')
  // };

  return (
    <header>
      <Flex
        px="10"
        py="6"
        justifyContent="space-between"
        bgGradient="Linear(to-br, #000000, #000000)"
        color="white"
      >
        <Center>
          <Image src="faviconKN.png" alt="katrenaLogo" />
          {/* <Text color="white" fontSize="xl" fontWeight="bold">
            Katreena
          </Text> */}
        </Center>
        <Center>
          

          <Button as='a' target='_blank' variant='outline' href='https://ar-nft.app/'>
              Play Katreena Worlds
            </Button>
            
          
        </Center>
        <Center>
          <Text>{user.getUsername()}</Text>
          <Button ml="4" bg="#05cd3e" onClick={logout} disabled={isLoggingOut}>
            Logout
          </Button>
        </Center>
      </Flex>
    </header>
  );
}

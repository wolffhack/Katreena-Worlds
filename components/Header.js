import React from 'react';
import Link from 'next/link';
import { Flex, Center, Text, Button } from "@chakra-ui/react";


export default function Header({user, logout, isLoggingOut}) {

    // const navigate = useNavigate();
    // const navigateKatreeenaWorlds = () => {
    //     navigate('www.ar-nft.app')
    // };


    return(
        <header>
            <Flex px="10" py="6" justifyContent="space-between" bgGradient="Linear(to-br, teal.400, #6200ee)" color="white">
                <Center>
                    <Text color="white" fontSize="xl" fontWeight="bold">Katreena</Text>
                </Center>
                <Center>
                <Link href="https://ar-nft.app/">Play Katreena-Worlds</Link>
                </Center>
                <Center>
                    <Text>{user.getUsername()}</Text>
                    <Button ml="4" bg="#05cd3e" onClick={logout} disabled={isLoggingOut}>Logout</Button>
                </Center>
            </Flex>
        </header>
    )
}
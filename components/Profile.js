import { Button, FormControl, FormLabel, Input, Text } from "@chakra-ui/react";
import { Link } from '@chakra-ui/react'
import { useState } from "react";
import { useMoralis } from "react-moralis";
import CustomContainer from "./CustomContainer";


export default function Profile({user}) {
    const [input, setInput] = useState('')
    const {setUserData, isUserUpdating} = useMoralis()
    
    return(
        <CustomContainer>
            <Text><b>😎&nbsp; Username: {user.getUsername()}</b></Text>
            <Text><b>💰&nbsp; Wallet Address: {user.get('ethAddress')}</b></Text>
            <form onSubmit={e => {
                    e.preventDefault()
                    if(input.trim() !== '') {
                        setUserData({
                            username: input,
                        }).then(() => setInput(''))
                    }
                }}>
                <FormControl mt="6" mb="6">
                    <FormLabel 
                        htmlFor="username">Set a new username
                    </FormLabel>
                    <Input 
                        id="username" 
                        type="text" 
                        placeholder="ex. wolfhack" 
                        value={input} 
                        onChange={e => setInput(e.target.value)}
                    ></Input>
                </FormControl>
                <Button 
                    type="submit" 
                    colorScheme="purple"
                    disabled={isUserUpdating}
                >
                    ✔&nbsp; Change Username
                </Button>

            </form>

        </CustomContainer>
    )
}
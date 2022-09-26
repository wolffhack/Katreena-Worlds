import { FormControl, FormLabel, NumberInputStepper, NumberInputField, NumberInput, Text, NumberIncrementStepper, NumberDecrementStepper, Input, Button, useToast} from "@chakra-ui/react";
import Moralis from "moralis-v1";
import { useState } from "react";
import { useWeb3Transfer } from "react-moralis";
import CustomContainer from "./CustomContainer";

export default function Send() {

    const [amount, setAmount] = useState(0);

    const [receiver, setReceiver] = useState('');

    const handleChange = (value) => setAmount(value);

    const toast = useToast()

    const {fetch, isFetching} = useWeb3Transfer({
        amount: Moralis.Units.ETH(amount),
        receiver: receiver,
        type: 'native'
    })

    // console.log(receiver)

    return(
        <CustomContainer>
            <Text fontSize="xl" fontWeight="bold">Send <b>CRO</b></Text>
            <form onSubmit={async e => {
                e.preventDefault()
                await Moralis.enableWeb3()
                fetch({
                    onSuccess: () => {
                        toast({
                            title: 'CRO successfull sent.',
                            description: 'Fresh CRO are showing up into the receiver wallet',
                            status: 'success',
                            duration: '9000',
                            isClosable: true
                        })
                        setReceiver('')
                    },
                    onError: (error) => {
                        toast({
                            title: 'Error',
                            description: 'Error',
                            status: 'error',
                            duration: '9000',
                            isClosable: true
                            
                        })
                        
                    }
                })
            }}>
                <FormControl mt="4">
                    <FormLabel htmlFor="amount">
                        Amount of CRO:
                    </FormLabel>
                    <NumberInput step={0.1} onChange={handleChange}>
                        <NumberInputField id="amount" value={amount}/>
                        <NumberInputStepper>
                            <NumberIncrementStepper/>
                            <NumberDecrementStepper/>
                        </NumberInputStepper>
                    </NumberInput>
                    <FormLabel mt="4" htmlFor="receiver">Send to:</FormLabel>
                    <Input 
                        id="receiver" 
                        type="text" 
                        placeholder="Receiver Address" 
                        value={receiver} 
                        onChange={e=> setReceiver(e.target.value)}/>
                </FormControl>
                <Button 
                    mt="4" 
                    type="submit" 
                    colorScheme="purple"
                    disabled={isFetching}
                
                >💸&nbsp; Send</Button>

            </form>
        </CustomContainer>
    )
}
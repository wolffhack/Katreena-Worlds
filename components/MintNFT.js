import React, { useState } from "react";
import { Button, FormLabel, Input, Text } from "@chakra-ui/react";
import Moralis from "moralis-v1";
import CustomContainer from "./CustomContainer";
import { contractABI, contractAddress } from "./contract";
import Web3 from "web3";
import { useMoralisFile } from "react-moralis";

const web3 = new Web3(Web3.givenProvider);


export default function MintNFT({user}) {

    const [input, setInput] = useState({
        nftName: '',
        description: ''
    })
    // console.log(input)

    const [inputFile, setInputFile] = useState(null)

    const handleOnChange = (e) => {
        setInput(prevState => ({
            ...prevState,
            [e.target.name] : e.target.value
        }))
    }
    // console.log(inputFile)

    const {saveFile} = useMoralisFile()
    // const {} = useRaribleLazyMint({

    // })

    const minteo = async (e) => {
        e.preventDefault();
        if(inputFile !== null && input.nftName.trim() !== '' && input.description.trim() !== '') {
            await saveFile(input.nftName, inputFile, {
                saveIPFS: true,
                onSuccess: async (file) => {
                    // console.log(file)
                    let metadata = {
                        name: input.nftName,
                        description: input.description,
                        image: '/ipfs/' + file._hash
                    }
                    await saveFile(`metadata ${input.nftName}`, {
                        base64: btoa(JSON.stringify(metadata))
                    }, {
                        saveIPFS: true,
                        onSuccess: async (metadataFile) => {
                            await Moralis.enableWeb3()
                            const metadataurl = metadataFile;

                             //Interact with smart contract
                            const contract = new web3.eth.Contract( contractABI, contractAddress);
                            const response = await contract.methods
                                .mint(metadataurl)
                                .send({ from: user.get("ethAddress")});
            
                            //Get token id
                            const tokenId = response.events.Transfer.returnValues.tokenId;
                            //Display alert
                            alert(
                                `NFT successtully minted. Contract address - ${contractAddress} and Token ID - ${tokenId}`
                            );
                        }
                    })
                },
                onError: (error) => {
                    console.log(error)
                }
            })
        }
    };





    return(
        <CustomContainer>
            <Text fontSize="xl" fontWeight="bold">Crea tu Katreena</Text>
            <form 
            onSubmit={minteo}>
                <FormLabel htmlFor="nftName">Nombre:</FormLabel>
                <Input
                    type= "text"
                    id="nftName"
                    name="nftName"
                    placeholder="ex. k3"
                    value={input.nftName}
                    onChange={ e => handleOnChange(e)}
                />
                <FormLabel htmlFor="description">Descripción:</FormLabel>
                <Input
                    id="description"
                    name="description"
                    type="text"
                    rows={3}
                    placeholder="ex. k3 is a magical tree thatdestroys contamination"
                    value={input.description}
                    onChange={ e => handleOnChange(e)}
                />
                <FormLabel htmlFor="file">Archivo</FormLabel>
                <Input
                    id="file"
                    type="file"
                    onChange={ e => setInputFile(e.target.files[0])}
                />
                
                <Button
                    type="submit"
                >Mint K3</Button>
            </form>

        </CustomContainer>
    )
}
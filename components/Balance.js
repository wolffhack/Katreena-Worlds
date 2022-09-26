import { Text, Divider} from "@chakra-ui/react";
import Moralis from "moralis-v1";
import { useEffect, useState } from "react";
import { useERC20Balances, useMoralisWeb3Api } from "react-moralis";
import CustomContainer from "./CustomContainer";

export default function Balance({user}) {
    const web3Api = useMoralisWeb3Api()

    const {fetchERC20Balances, data} = useERC20Balances()

    const [ethBalance, setEthBalance] = useState(0);

    const fetchNativeBalance = async () => {
        const result = await web3Api.account.getNativeBalance({
            chain: "cronos testnet",
            address: user.get('ethAddress')
        }).catch( e => console.log(e))
        if(result.balance){
            setEthBalance(Moralis.Units.FromWei(result.balance))
        }
    }

    useEffect(() => {
        fetchNativeBalance()
        fetchERC20Balances({
            params: {
                chain: "cronos testnet",
                address: user.get('ethAddress')
            }

        })
    }, [])

    // console.log(data)
    return(
        <CustomContainer>
            <Text mb="6" fontSize="xl" fontWeight="bold">My ERC20 tokens: </Text>
            <Divider/>
            <div>
                {ethBalance && <Text> 💰&nbsp;{ethBalance} <b>CRO</b></Text>}
            </div>
            <Divider/>
            {data && data.map(token =>(
                <div key={token.symbol}>
                    <Text> 💰&nbsp;{Moralis.Units.FromWei(token.balance)} <b>{token.symbol}</b></Text>
                <Divider />
                </div>
            ))}
        </CustomContainer>
    )
}
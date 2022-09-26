import { Text, Link, Divider } from "@chakra-ui/react";
import { useMoralisWeb3Api } from "react-moralis";
import CustomContainer from "./CustomContainer";
import { useState, useEffect } from "react";

export default function Transactions({user}) {

    const Web3Api = useMoralisWeb3Api()

    const BASE_URL = "https://testnet.cronoscan.com/tx/"
    const [transactions, setTransactions] = useState([])

    const fetchTransactions = async () => {
        const data = await Web3Api.account.getTransactions({
            chain: "cronos testnet",
            address: user.get('ethAddress'),
            limit: 5
        })
        if(data) {
            setTransactions(data.result)
        }
    }
    
    useEffect(() => {
        fetchTransactions()
    }, [])

    // console.log(transactions)

    return(
        <CustomContainer>
            <Text fontSize="xl" mb="6" fontWeight="bold" >My last 5 transactions</Text>
            {transactions && transactions.map(transaction => (
                <div key={transaction.hash}>
                    <Link href={`${BASE_URL}${transaction.hash}`} isExternal>⚡&nbsp; {transaction.hash}</Link>
                    <Divider/>

                </div>
            ))}
        </CustomContainer>
    )
}
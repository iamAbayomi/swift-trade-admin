import axios from "axios";
import { type } from "os";
import React, { Props, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getToken } from "../classes/User";
import SingleTransactionCardView from "./SingleTransactionCardview";


let tempTransaction: any[] = []

function  SingleTransactionOverview() {
    const [transactionCount, setTransactionCount] = useState({
        "allTransactions": 0,
        "successfulTransactions": 0,
        "pendingTransactions": 0,
        "failedTransactions": 0
    }
)

    const [token, setToken] = useState("")

    useEffect(() => {
        setStateToken()
      },[])
      
    function setStateToken(){
        setToken(getToken())
        getTransactionsCount()
        console.log("this is the token " + getToken())
    }

    async function getTransactionsCount(){
        console.log("this is the token " + getToken())    
        let token = await getToken()

        axios.get('https://swift-trade-v1.herokuapp.com/api/v1/transaction/count',{
            headers: {
                'Authorization' : `Bearer ${token}`
            }})
            .then(async (res: any) => {
                console.log('This is the user response', res.data.data)  
                let result = await res.data.data
                // setTransactionCount(result)
                // tempTransaction = res.data.data

                console.log(transactionCount)
            })
            .catch((err)=>{
                console.log(err)
            })
    }

    return(
        <div>
            <Link to="/transactions" className="transaction-row display-flex link">
                {// transactionCount.map(item=>
                    //     <SingleTransactionCardView percentage = {item} transactiontext="Total Number of Transactions" />
                    // )
                }
                    <SingleTransactionCardView transactiontext="Total Number of Users" percentage = {transactionCount.successfulTransactions}  />
                    <SingleTransactionCardView transactiontext="Pending Transactions" percentage = {transactionCount.pendingTransactions} />
                    <SingleTransactionCardView transactiontext="Total Number of Transactions" percentage = {transactionCount.allTransactions} />   
            </Link>
        </div>

    )
}


export default SingleTransactionOverview
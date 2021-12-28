/* eslint-disable jsx-a11y/alt-text */
import axios from "axios"
import { useState, useEffect } from "react"
import styled from "styled-components"
import { getToken } from "../classes/User"
import SingleTransactionCardView from "../components/SingleTransactionCardview"
import SingleTransactionOverview from "../components/SingleTransactionsOverview"
import SingleUserTransactionTable from "../components/SingleUserTransactionTable"
import TransactionCards from "../components/TransactionCard"
import TransactionOverview from "../components/TransactionOverview"
import './SingleUser.css'

type props = {
    userProfileImage: string,
    userName: string,
    userEmail: string
}

function SingleUser(){
    const [userProfileImage, setUserProfileImage] = useState("")
    const [transactionCount, setTransactionCount] = useState({
        "allTransactions": 0,
        "successfulTransactions": 0,
        "pendingTransactions": 0,
        "failedTransactions": 0
    })

    useEffect(()=>{
        setProfileImage()
        getSingleUserData()
    }, [])

    function setProfileImage(){
        setUserProfileImage('./vectors/empty-user.png')
    }

    async function getSingleUserData(){
        let token = await getToken()
        let userId = await getUserId()
        axios.get(`https://swift-trade-v1.herokuapp.com/api/v1/transaction/${userId}/user/count`,{
            headers: {'Authorization' : `Bearer ${token}`}} )
        .then((res: any)=>{
                console.log('This is the data', res)
                setTransactionCount(res.data.data)
            })
            .catch((err) => {
                // console.log(err.response.data.message)
                console.log(err)
            })
    }

    function getUserId(){
        let userId = window.location.pathname.replace('/users/singleuser/', '')
        return userId
    }

    return(
        <div>
            <div> 
                {/* <p>Back to List</p> */}
            </div>
            <UserProfileContainer >
                <img src={userProfileImage} className="userprofile"/>
                <p>Ramon Ridwan</p>
                <p>Ramonridwan@protonmail.com</p>
                <button>Inactive</button> <button>Block User</button>
            </UserProfileContainer>
            
            <SingleTransactionContainer className="transaction-row display-flex link">
                <SingleTransactionCardView transactiontext="Total Number of Users" percentage = {transactionCount.successfulTransactions}  />
                <SingleTransactionCardView transactiontext="Pending Transactions" percentage = {transactionCount.pendingTransactions} />
                <SingleTransactionCardView transactiontext="Total Number of Transactions" percentage = {transactionCount.allTransactions} />
            </SingleTransactionContainer>

            <TransactionContainer>
                <SingleUserTransactionTable />
            </TransactionContainer>
        </div>
    )
}

export default SingleUser

const UserProfileContainer = styled.div `
    max-width: 250px;
    margin: auto;
`
const SingleTransactionContainer = styled.div `
    max-width: 800px;
    margin: auto;
`

const TransactionContainer = styled.div `
    max-width: 1000px;
    margin: auto;
`
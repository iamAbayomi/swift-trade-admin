/* eslint-disable jsx-a11y/alt-text */
import axios from "axios"
import { useState, useEffect } from "react"
import styled from "styled-components"
import { getToken } from "../classes/User"
import { getUserProfile } from "../classes/Utilities"
import Chips from "../components/Chips"
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
    const [userProfile, setUserProfile] = useState<any>({})
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
                }).catch((err) => { console.log(err)})
            
            getTheUserProfile(token, userId)
    }

    function getUserId(){
        let userId = window.location.pathname.replace('/users/singleuser/', '')
        return userId
    }

    async function getTheUserProfile(token: any, userId: any){
        axios.get(`https://swift-trade-v1.herokuapp.com/api/v1/user/${userId}/info`,
            {headers: {'Authorization' : `Bearer ${token}`}} )
            .then((res: any)=> {
                console.log('This is the data', res)
                    setUserProfile(res.data.data)
                }).catch((err) => { console.log(err)})

        console.log("This is the user profile",  userProfile)
        console.log("This is the user ", getUserProfile(token, userId))
    }

    return(
        <div>
            <div> 
                {/* <p>Back to List</p> */}
            </div>
            <UserProfileContainer >
                {
                    userProfile != null ? 
                    <div>
                        <img src={userProfile.profile_picture!=null ? userProfile.profile_picture : '/vectors/empty-user.png'} className="userprofile profile-settings-image"/>
                        <p className="userprofile-name">{userProfile.first_name+ " " + userProfile.last_name} </p>
                        <p className="userprofile-email">{userProfile.email}</p>
                    </div>
                    :
                     <div/>
                }
                { userProfile.is_suspended != undefined ?
                    <StatusBlock className="display-flex">
                        <Chips userId={null} chipsText={userProfile.is_suspended.toString()} backgroundColor="" /> 
                        <BlockButton className="chips">
                            <BlockButtonContents>Block User </BlockButtonContents>
                        </BlockButton>
                    </StatusBlock>
                    : <div/>
                }
                
            </UserProfileContainer>
            {/* This is responsible for displaying the transaction count */}
            <SingleTransactionContainer className="transaction-row display-flex link">
                <SingleTransactionCardView transactiontext="Total Number of Users" percentage = {transactionCount.successfulTransactions}  />
                <SingleTransactionCardView transactiontext="Pending Transactions" percentage = {transactionCount.pendingTransactions} />
                <SingleTransactionCardView transactiontext="Total Number of Transactions" percentage = {transactionCount.allTransactions} />
            </SingleTransactionContainer>
            <TransactionContainer>
                {/* This getUserId sends the user id to the singleUser transaction table and displays it */}
                <SingleUserTransactionTable userId={getUserId()} />
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

const StatusBlock = styled.div `
    max-width: 260px;
`

const BlockButton = styled.div `
    color: white;
    background: #010066;
`

const BlockButtonContents = styled.p`
    margin: 5px 5px 5px 15px;
`
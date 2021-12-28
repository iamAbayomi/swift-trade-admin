/* eslint-disable jsx-a11y/alt-text */
import axios from "axios"
import { useState, useEffect } from "react"
import styled from "styled-components"
import { getToken } from "../classes/User"
import { getUserProfile } from "../classes/Utilities"
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
        getTheUserProfile()
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
    }

    function getUserId(){
        let userId = window.location.pathname.replace('/users/singleuser/', '')
        return userId
    }

    async function getTheUserProfile(){
        let token = await getToken()
        let userId = await getUserId()
        //let userProfileData = await getUserProfile(token, userId)
        getUserProfile(token, userId)
            .then((data: any) => {
                console.log('This is the data ')
                setUserProfile(data[0])
            })
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
                        <img src={userProfile.profile_picture} className="userprofile profile-settings-image"/>
                        <p className="userprofile-name">{userProfile.first_name+ " " + userProfile.last_name} </p>
                        <p className="userprofile-email">{userProfile.email}</p>
                    </div>
                    :
                     <div>
                         {/* <img src={userProfileImage} className="userprofile"/>
                        <p>Ramon Ridwan</p>
                        <p>Ramonridwan@protonmail.com</p> */}
                     </div>

                }
                {/* <Chips userId={""} chipsText={}  /> <button>Block User</button> */}
            </UserProfileContainer>
            
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
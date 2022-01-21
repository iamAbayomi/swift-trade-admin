/* eslint-disable jsx-a11y/alt-text */
import axios from "axios"
import { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
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


function SingleUser(){
    const history = useHistory()
    const [userProfile, setUserProfile] = useState<any>({})
    const [userProfileImage, setUserProfileImage] = useState("")
    const [transactionCount, setTransactionCount] = useState({
        "allTransactions": 0,
        "successfulTransactions": 0,
        "pendingTransactions": 0,
        "failedTransactions": 0
    })
    const [userState, setUserState] = useState("")

    useEffect(()=>{
        setProfileImage()
        getSingleUserData()
    }, [])

    function setProfileImage(){
        setUserProfileImage('./vectors/empty-user.png')
    }

    function getUserId(){
        let userId = window.location.pathname.replace('/users/singleuser/', '')
        return userId
    }
    // This function gets the user transaction counts.
    async function getSingleUserData(){
        let token = await getToken()
        let userId = await getUserId()
        axios.get(`https://swift-trade-v1.herokuapp.com/api/v1/transaction/${userId}/user/count`,{
            headers: {'Authorization' : `Bearer ${token}`}} )
            .then((res: any)=>{setTransactionCount(res.data.data)  
                console.log(" single transaction count ", res )
            }
            )
            .catch((err) => { console.log(err)})
            getTheUserProfile(token, userId)
    }
    //This gets the user profile since we need the user profile name, image and status
    async function getTheUserProfile(token: any, userId: any){
        axios.get(`https://swift-trade-v1.herokuapp.com/api/v1/user/${userId}/info`,
            {headers: {'Authorization' : `Bearer ${token}`}} )
            .then((res: any)=> {setUserProfile(res.data.data)
                
            }).catch((err) => { console.log(err)})
            
    }
    //Check the user status 
    function checkIfTheUserIsSuspended(){
        return userProfile.is_suspended ? true : false
    }
    //The
    async function toggleTheUserStatus(){
        let token = await getToken()
        let userId = await getUserId()
        axios.post(`https://swift-trade-v1.herokuapp.com/api/v1/user/${userId}/suspend`,
            {suspend: !checkIfTheUserIsSuspended()},
            {headers: {'Authorization' : `Bearer ${token}`}})
        .then((res: any)=> {
            console.log('this is the status data', res)
            setUserProfile(res.data.data)
            history.go(0)
        })
        .catch((err) => { console.log(err)})
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
                        <BlockButton className="chips pointer">
                            <BlockButtonContents onClick={toggleTheUserStatus} > { checkIfTheUserIsSuspended() ? "UnBlock User" : "Block User"} </BlockButtonContents>
                        </BlockButton>
                    </StatusBlock>
                    : <div/>
                }
                
            </UserProfileContainer>
            {/* This is responsible for displaying the transaction count */}
            <SingleTransactionContainer className="transaction-row display-flex link">
                <SingleTransactionCardView transactiontext="Successful Transactions" percentage = {transactionCount.successfulTransactions}  />
                <SingleTransactionCardView transactiontext="Pending Transactions" percentage = {transactionCount.pendingTransactions} />
                <SingleTransactionCardView transactiontext="Failed Transactions" percentage = {transactionCount.failedTransactions} />
                
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
    max-width: 280px;
`

const BlockButton = styled.div `
    width: 280px;
    color: white;
    background: #010066;
    margin: 0px 10px 0px 20px;
` 
const BlockButtonContents = styled.p`
    margin: 5px 5px 5px 15px;
`
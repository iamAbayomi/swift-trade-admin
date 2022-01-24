/* eslint-disable jsx-a11y/alt-text */
import axios from "axios"
import { useState, useEffect } from "react"
import { Link, useHistory } from "react-router-dom"
import styled from "styled-components"
import { getToken } from "../classes/User"
import { getUserProfile } from "../classes/Utilities"
import BankAccount from "../components/BankAccount"
import Chips from "../components/Chips"
import SingleTransactionCardView from "../components/SingleTransactionCardview"
import SingleTransactionOverview from "../components/SingleTransactionsOverview"
import SingleUserTransactionTable from "../components/SingleUserTransactionTable"
import TransactionCards from "../components/TransactionCard"
import TransactionOverview from "../components/TransactionOverview"
import { useAppDispatch, useAppSelector } from "../redux/hooks"
import { fetchUserBankAccount, getAllBankAccount, selectAllBankAccount } from "../redux/reducers/BankAccountsSlice"
import { store } from "../redux/store"
import './SingleUser.css'


function SingleUser(){
    const history = useHistory()
    const dispatch = useAppDispatch()
    const [userProfile, setUserProfile] = useState<any>({
        first_name: "",
        last_name: ""
    })
    const [userProfileImage, setUserProfileImage] = useState("")
    const [transactionCount, setTransactionCount] = useState({
        "allTransactions": 0,
        "successfulTransactions": 0,
        "pendingTransactions": 0,
        "failedTransactions": 0
    })
    const [userState, setUserState] = useState("")

    const bankAccount = useAppSelector(getAllBankAccount)

    useEffect(()=>{
        setProfileImage()
        getSingleUserData()
        getUserBankAccounts()
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
    function getUserBankAccounts(){
        dispatch(fetchUserBankAccount(getUserId()))
        console.log(" The user store", store.getState())
        
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
            // history.go(0)
        })
        .catch((err) => { console.log(err)})
    }


    console.log("Bank account in single user component store ", bankAccount)


    return(
        <div>
            <div> 
            <Link to="/users" className="no-text">
                      <div className="display-flex" style={{float:"left"}}>
                          <img className="left-arrow" src="/vectors/left-arrow.svg" />
                          <p>Back to List</p>
                      </div>
                </Link>
            </div>
            <UserProfileContainer className="clear" >
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
            
            <BankAccountSection className="bank-account-contianer" >
                {   
                  bankAccount != undefined ?  bankAccount.map((item: any) => {
                            return <BankAccount bankDetails={item} />
                    }) : <p>User has not added any bank accounts</p>
                }
                
                
             </BankAccountSection>

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
    //clear:both;
`
const SingleTransactionContainer = styled.div `
    max-width: 800px;
    margin: auto;
`

const BankAccountSection = styled.div`
    display:flex;
    justify-content: space-between;
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
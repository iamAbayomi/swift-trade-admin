/* eslint-disable jsx-a11y/alt-text */
import { useState, useEffect } from "react"
import styled from "styled-components"
import SingleTransactionOverview from "../components/SingleTransactionsOverview"
import TransactionCards from "../components/TransactionCard"
import TransactionOverview from "../components/TransactionOverview"

type props = {
    userProfileImage: string,
    userName: string,
    userEmail: string
}

function SingleUser(){
    const [useProfileImage, setUserProfileImage] = useState("")

    useEffect(()=>{
        setProfileImage()
    })

    function setProfileImage(){
        setUserProfileImage('./vectors/empty-user.png')
    }

    return(
        <div>
            <UserProfileContainer>
                <img src={useProfileImage}/>
                <p>Ramon Ridwan</p>
                <p>Ramonridwan@protonmail.com</p>
                <button>Inactive</button> <button>Block User</button>
            </UserProfileContainer>
            <SingleTransactionContainer>
                    <SingleTransactionOverview/>
            </SingleTransactionContainer>
            <TransactionContainer>
                <TransactionOverview />
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
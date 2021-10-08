/* eslint-disable no-octal */
import axios from "axios"
import { useState } from "react"
import styled from "styled-components"
import CustomizeButton from "../Buttons/CustomizeButton"
import InputField from "../InputField"
import ModalHeading from "../ModalHeading"
import Subtitle from "../typography/Subtitle"

function UpdateBankAccount(){

    const[account_number, setAccountNumber] = useState("")
    const[account_name, setAccountName] = useState("")
    const[bank_name, setBankName] = useState("")
    const[bank_code,setBankCode] = useState("044")

    function handleAccountNumberChange(event: { target: { value: string } }){
        setAccountName(event.target.value)
    }
    
    function handleAccountNameChange(event: { target: { value: string } }){
        setAccountNumber(event.target.value)
    }

    function handleBankNameChange(event: { target: { value: string } }){
        setBankName(event.target.value)
    }
    
    function updateBankAccount(){
        axios.post('https://swift-trade-v1.herokuapp.com/api/v1/bank-accounts/create', 
            {
                bank: bank_name,
                bank_code: bank_code,
                account_name: account_name,
                account_number: account_number
            }).then((res) => {
                console.log('This is the response', res)
            }).catch((err)=>{
            console.log(err)
        })

    }

    function getAllNigerianBank(){
        axios.post('https://swift-trade-v1.herokuapp.com/api/v1/bank-accounts/list', 
            ).then((res) => {
                console.log('This is the response', res)
            }).catch((err)=>{
            console.log(err)
        })

    }
    
    return(
        <ClassContainer className="">
            <ModalHeading
                text="Update Bank Account"
            />
            <Subtitle 
                text="Please note that you can only add a
                 new bank account that has been linked to
                  the BVN you added earlier."
            />
            <AccountSection>
                <div>
                    <p>Account Number</p>
                    <InputField 
                        type={"name"} 
                        placeholder={"004xxx457"}                
                        value= {account_number}
                        onChange ={handleAccountNumberChange}
                    />
                </div>
                <div>
                    <p>Account Name</p>
                    <InputField 
                        type={"name"} 
                        placeholder={"Ramon Ridwan"}                
                        value= {account_name}
                        onChange ={handleAccountNameChange}
                    />
                </div>
                <div>
                    <p>Bank Name</p>
                    <InputField 
                        type={"name"} 
                        placeholder={"Guaranty First Bank"}                
                        value= {bank_name}
                        onChange = {handleBankNameChange}
                    />
                </div>
            </AccountSection>

            <CustomizeButton
                width={"134px"} 
                height={"44px"} 
                color={"white"} 
                backgroundColor={"#010066"} 
                buttonText={"Update"}    
                onClick = {updateBankAccount}
            />

            
        </ClassContainer>
    )
}

export default UpdateBankAccount

const ClassContainer = styled.div `
    // width: 500px;
    // height: 200px;
    padding:  0px 20px 9px 20px;
    box-sizing: border-box;

`

const AccountSection = styled.p`
    display: block;
    width: 300px;
    margin: 40px auto 20px;
`

import styled from "styled-components"
import BlueButton from "../Buttons/BlueButton"
import Button from "../Buttons/Button"
import ModalHeading from "../ModalHeading"
import './Cards.css'

function CompleteTransaction(){
    return(
        <ClassContainer className="">
            <ModalHeading 
                text="Complete your transaction"
            />            
            <AccountInformation className="account-information">
                <div className="display-flex">
                    <p>Account Name:</p>
                    <p>Swift Trade NG</p>
                </div>
                <div className="display-flex">
                    <p>Account Number:</p>
                    <p>1003466790</p>
                </div>
                <div className="display-flex">
                    <p>Bank</p>
                    <p>First Bank PLC</p>
                </div>
            </AccountInformation>
            <BlueButton buttonText="MAKE PAYMENT" />
        </ClassContainer>
    )
}

export default CompleteTransaction


const ClassContainer = styled.div `
    width: 500px;
    height: 300px;
`

const AccountInformation = styled.div `
    width: 300px;
    margin: 0px 0px 60px 0px;
`
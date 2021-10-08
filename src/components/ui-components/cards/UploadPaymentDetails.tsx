import styled from "styled-components"
import CustomizeButton from "../Buttons/CustomizeButton"
import ModalHeading from "../ModalHeading"

/* eslint-disable jsx-a11y/alt-text */
function UploadPaymentDetails(){
    return(
        <div>
            <ModalHeading 
                text="Complete your transaction"
            />            
            <SubtitlteText>Upload Payment Details</SubtitlteText>
            <img src="/vectors/dragdrop.svg"/>
            <CustomizeButton
                width="109px"
                height="48px"
                color="white"
                backgroundColor="#010066"
                buttonText="Done"
            />  

            
        </div>

    )

}

export default UploadPaymentDetails


const SubtitlteText = styled.p`
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: center;
    color: #010066;
`
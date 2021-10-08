import styled from "styled-components"
import BlueButton from "../Buttons/BlueButton"
import Button from "../Buttons/Button"
import CustomizeButton from "../Buttons/CustomizeButton"

function TransactionCompleted(){
    return(
        <ClassContainer className="">
            <TransactionSection>
                <TransactionImage src="/vectors/makeitrain.svg" alt="makeitrain" />
            </TransactionSection>
            <SubtitlteText>Your Transaction will be completed once your payment has been confirmed</SubtitlteText>
            <CustomizeButton
                width="199px"
                height="40px"
                color="white"
                backgroundColor="#010066"
                buttonText="Go Back to Dashboard"
            />        
    </ClassContainer>
    )
}

export default TransactionCompleted



const ClassContainer = styled.div `
    width: 400px;
    height: 300px;
`


const TransactionImage = styled.img `
    width: 110px
    
`


const TransactionSection = styled.div `
    width: 110px;
    margin: 40px auto 10px;
`

const SubtitlteText = styled.p`
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: center;
    color: #010066;
    width: 300px;
    margin: 30px auto 65px;
`
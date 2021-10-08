import styled from "styled-components"
import ModalHeading from "../ModalHeading"

function AccountSetup(){
    return(
        <ClassContainer className="">
            <ModalHeading
                text="Update Bank Account"
            />
        </ClassContainer>
    )
}

export default AccountSetup

const ClassContainer = styled.div `
    width: 500px;
    height: 300px;
`

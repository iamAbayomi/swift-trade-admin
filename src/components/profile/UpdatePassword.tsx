import axios from "axios"
import { ChangeEvent, useRef, useState } from "react"
import SimpleReactValidator from "simple-react-validator"
import styled from "styled-components"
import { getToken } from "../../classes/User"
import LoadingButton from "../ui-components/Buttons/LoadingButton"


function UpdatePassword(){
    const [oldPassword, setOldPassword] = useState("")
    const [newPassword, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const simpleValidator = useRef(new SimpleReactValidator())

    const [responseStatus, setResponseStatus] = useState(0)
    const [responseMessage, setResponseMessage] = useState("")
    const [loadingState, setloadingState] =  useState(false)
    const [showResponseMessage, setShowResponseMessage] = useState(false)



    function handleOldPasswordChanged(event: ChangeEvent<HTMLInputElement>){
        setOldPassword(event.target.value)
    }

    function handlePassowrdChanged(event: ChangeEvent<HTMLInputElement>){
        setPassword(event.target.value)
    }

    function handleConfirmPassword(event: ChangeEvent<HTMLInputElement>){
        setConfirmPassword(event.target.value)
    }




function toggleLoadingStateTrue(){
        setloadingState(true)
    }

    function toggleLoadingStateFalse(){
        setloadingState(false)
    }

    function toggleShowResponseMessageTrue(){
        setShowResponseMessage(true)
    }


    function toggleShowResponseMessageFalse(){
        setShowResponseMessage(false)
    }

    function setResponseParameters(status: any, message: any){
        setResponseStatus(status)
        setResponseMessage(message)
        toggleLoadingStateFalse()
        toggleShowResponseMessageFalse()
    }


    function validateParameters(){
        if(simpleValidator.current.allValid()){
            updatePassword()
        }else{
            // toggleLoadingStateTrue()
            toggleShowResponseMessageTrue()
            simpleValidator.current.showMessages()
        }
    }

    async function updatePassword(){
        console.log("I am about to update the password")
        toggleLoadingStateTrue()
        toggleShowResponseMessageTrue()
        let  token =  await getToken()
        axios.patch('https://swift-trade-v1.herokuapp.com/api/v1/user/update/password' , {
            old_password: oldPassword,
            new_password: newPassword,
            confirm_password: confirmPassword
        },{headers: {  'Authorization' : `Bearer ${token}`}})
        .then((res: any) => {
            console.log('This is the response', res)    
            setResponseParameters(res.status, res.message)
        })
        .catch((err)=>{
            console.log(err)
            setResponseParameters(4, err.response.data.message)
        })

    }
    return(
        <div className="card-white">
            <p className="purple-header-typography">Reset Password</p>
            <div className="reset-password-section">
                <div className="old-password">
                    <p>Old Password</p>
                    <EditField 
                        type="password" 
                        className="edit-field" 
                        placeholder="Enter your old password"
                        value = {oldPassword}
                        onChange = {handleOldPasswordChanged}
                        onBlur={()=> simpleValidator.current.showMessageFor('Old Password')}
                        />
                    {simpleValidator.current.message('Old password', oldPassword, 'required', {className: 'error-message'})}
                </div>


                <div className="new-password">
                    <p>New Password</p>
                    <EditField 
                        type="password" 
                        className="edit-field" 
                        placeholder="New password"
                        value = {newPassword}
                        onChange = {handlePassowrdChanged}
                        onBlur={()=> simpleValidator.current.showMessageFor('New Password')}
                        />
                    {simpleValidator.current.message('New password', newPassword, 'required', {className: 'error-message'})}
                </div>

                <div className="confirm-password">
                    <p>Confirm Password</p>
                    <EditField 
                        type="password" 
                        className="edit-field" 
                        placeholder="Confirm password"
                        value = {confirmPassword}
                        onChange = {handleConfirmPassword}
                        onBlur={()=> simpleValidator.current.showMessageFor('Confirm Password')}
                        />
                    {simpleValidator.current.message('Confirm password', confirmPassword, 'required', {className: 'error-message'})}
                </div>
                
                <LoadingButton 
                    responseStatus={responseStatus} 
                    responseMessage={responseMessage} 
                    loadingState={loadingState} 
                    showResponseMessage={showResponseMessage} 
                    validateParameters={validateParameters}  
                />    
            </div>
        </div>
    )
}


export default UpdatePassword


const EditField = styled.input `
    width: 300px;
    height: 58px;
    display: block;
    padding-left: 30px;
    margin-top: 10px;
    margin-bottom: 20px ;
    border-color:#c7d3e6;
    border-radius: 4px;
    border-style: solid;
`
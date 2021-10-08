import axios from "axios"
import { ChangeEvent, useState } from "react"
import styled from "styled-components"


function UpdatePassword(){
    const [oldPasword, setOldPassword] = useState("")
    const [newPasword, setPassword] = useState("")
    const [confirmPasword, setConfirmPassword] = useState("")

    function handleOldPasswordChanged(event: ChangeEvent<HTMLInputElement>){
        setOldPassword(event.target.value)
    }

    function handlePassowrdChanged(event: ChangeEvent<HTMLInputElement>){
        setPassword(event.target.value)
    }

    function handleConfirmPassword(event: ChangeEvent<HTMLInputElement>){
        setConfirmPassword(event.target.value)
    }

    function updatePassword(){
        console.log("I am about to update the password")
        axios.patch('https://swift-trade-v1.herokuapp.com/api/v1/user/update/password', {
            old_password: oldPasword,
            new_password: newPasword,
            confirmPasword: confirmPasword
        })
        .then((res) => {
            console.log('This is the response', res)    
        })
        .catch((err)=>{
            console.log(err)
        })

    }

    return(
        <div className="card-white margin-top">
            <p className="purple-header-typography">Reset Password</p>
            <div className="reset-password-section">
                <div className="old-password">
                    <p>Old Password</p>
                    <EditField 
                        type="password" 
                        className="edit-field" 
                        placeholder="Enter your old password"
                        value = {oldPasword}
                        onChange = {handleOldPasswordChanged}
                        />
                </div>

                <div className="new-password">
                    <p>New Password</p>
                    <EditField 
                        type="password" 
                        className="edit-field" 
                        placeholder="New password"
                        value = {newPasword}
                        onChange = {handlePassowrdChanged}
                        />
                </div>

                <div className="confirm-password">
                    <p>Confirm Password</p>
                    <EditField 
                        type="password" 
                        className="edit-field" 
                        placeholder="Confirm password"
                        value = {confirmPasword}
                        onChange = {handleConfirmPassword}
                        />
                </div>
                <button 
                    className="blue-button" 
                    onClick={updatePassword}
                    >
                        Save Changes
                    </button>
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
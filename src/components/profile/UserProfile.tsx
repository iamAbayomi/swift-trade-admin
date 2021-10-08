import axios from "axios"
import { ChangeEvent, useEffect, useState } from "react"
import styled from "styled-components"

/* eslint-disable jsx-a11y/alt-text */
function UserProfile(){
    const [first_name, setFirstName] = useState("")
    const [last_name, setLastName] = useState("")

    useEffect(() => {
        
    })

    function onFirstNameChange(event: ChangeEvent<HTMLInputElement>){
        setFirstName(event.target.value)
    }

    function onLastNameChanged(event: ChangeEvent<HTMLInputElement>){
        setLastName(event.target.value)
    }

    function updateUser(){
        axios.patch('https://swift-trade-v1.herokuapp.com/api/v1/user/update', {
            first_name: first_name,
	        last_name: last_name
        })
        .then((res) => {
            console.log('This is the response', res)    
        })
        .catch((err)=>{
            console.log(err)
        })
        console.log('i am here')
    }

    return(
        <div>
            <div className="profile-settings-section">
                <div className="profile-picture-section">
                    <img className="profile-settings-image" src="/vectors/profile-picture.svg" />
                    <p className="picture-text">The uploaded image must be 500px wide and 500px long</p>
                </div>

                <div className="profile-information-section ">
                    
                    <div className="display-flex">
                        <div className="firstname">
                            <p>First Name</p>
                            <EditField 
                                type="name" 
                                className="edit-field" 
                                placeholder="Ramon"
                                value={first_name} 
                                onChange={onFirstNameChange}  
                                 />
                        </div>
                        <div className="lastname">
                            <p>Last Name</p>
                            <EditField 
                                type="name" 
                                className="edit-field" 
                                placeholder="Ridwan" 
                                value={last_name}  
                                onChange={onLastNameChanged}   
                                />
                        </div>
                    </div>

                    <div className="display-flex">
                        <div className="email">
                            <p>Email</p>
                            <EditField type="email" className="edit-field" placeholder="Ramoneidwan@gmail.com" />
                        </div>
                        <div className="phone">
                            <p>Phone</p>
                            <EditField type="name" className="edit-field" placeholder="+234 813344969221" />
                        </div>
                    </div>
                </div>
                <button 
                    className="blue-button" 
                    onClick = {updateUser}
                    >
                        Save Changes
                </button>
            </div>
        </div>
    )
}

export default UserProfile




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
import axios from "axios"
import { ChangeEvent, useEffect, useState } from "react"
import styled from "styled-components"
import { getToken, getTokenWithMethod } from "../../classes/User"

/* eslint-disable jsx-a11y/alt-text */
function UserProfile(){
    const [first_name, setFirstName] = useState("")
    const [last_name, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")

    const [token, setToken] = useState("")

    const sampleData =
    {
        "status": "success",
        "message": "User info fetched successfully",
        "data": {
            "id": "ff680045-7583-49db-aa22-a6b538a9458c",
            "first_name": "Dam",
            "last_name": "Mane",
            "email": "dammane@gmail.com",
            "phone": "+2348159774432",
            "profile_picture": null,
            "role": "user",
            "email_verified_at": null,
            "created_at": "2021-10-26T02:56:56.753Z",
            "updated_at": "2021-10-26T02:56:56.753Z"
        }
    }
    useEffect(() => {
        getUser()
    }, [])

    function onFirstNameChange(event: ChangeEvent<HTMLInputElement>){
        setFirstName(event.target.value)
    }

    function onLastNameChanged(event: ChangeEvent<HTMLInputElement>){
        setLastName(event.target.value)
    }

    function onLastEmailChanged(event: ChangeEvent<HTMLInputElement>){
        setEmail(event.target.value)
    }

    function onLastPhoneEmailChanged(event: ChangeEvent<HTMLInputElement>){
        setPhone(event.target.value)
    }

    function setUserData(userData: any){
        console.log(userData)
        setFirstName(userData.data.first_name)
        setLastName(userData.data.last_name)
        setEmail(userData.data.email)
        setPhone(userData.data.phone)
    }

    function getUser(){
//         setToken(getTokenWithMethod(makeUserRequest))
        makeUserRequest()
        console.log('This is the token' +  token)
    }


    async function makeUserRequest(){
         let  token =  await getToken()
        axios.get('https://swift-trade-v1.herokuapp.com/api/v1/user',{
            headers: {
                'Authorization' : `Bearer ${token}`
            }})
            .then((res: any) => {
                console.log('This is the user response', res.data)  
                setUserData(res.data)
            })
            .catch((err)=>{
                console.log('This is the token' +  token)
                console.log(err)
            })
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
                    <img className="profile-settings-image" src="/vectors/empty-user.png" />
                    <p className="picture-text">The uploaded image must be 500px wide and 500px long</p>
                </div>

                <div className="profile-information-section ">
                    
                    <div className="display-flex row-section">
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

                    <div className="display-flex row-section">
                        <div className="email">
                            <p>Email</p>
                            <EditField 
                                type="email" 
                                className="edit-field" 
                                placeholder="Ramoneidwan@gmail.com" 
                                value={email}
                                onChange={onLastEmailChanged}
                            />
                        </div>
                        <div className="phone">
                            <p>Phone</p>
                            <EditField 
                                type="name" 
                                className="edit-field" 
                                placeholder="+234 813344969221" 
                                value={phone}
                                onChange={onLastPhoneEmailChanged}
                            />
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
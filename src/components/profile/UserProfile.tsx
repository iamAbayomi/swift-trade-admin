import axios from "axios"
import { profile } from "console"
import { useRef } from "react"
import { ChangeEvent, useEffect, useState } from "react"
import Loader from "react-loader-spinner"
import SimpleReactValidator from "simple-react-validator"
import styled from "styled-components"
import { getToken, getTokenWithMethod } from "../../classes/User"
import LoadingButton from "../ui-components/Buttons/LoadingButton"
import ResponseMessage from "../ui-components/typography/ResponseMessage"


/* eslint-disable jsx-a11y/alt-text */
function UserProfile(){
    const [first_name, setFirstName] = useState("")
    const [last_name, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [profile_picture, setProfilePicture] = useState("")

    const simpleValidator = useRef(new SimpleReactValidator())
    const [token, setToken] = useState("")
    
    const [responseStatus, setResponseStatus] = useState(0)
    const [responseMessage, setResponseMessage] = useState("")
    const [loadingState, setloadingState] =  useState(false)
    const [showResponseMessage, setShowResponseMessage] = useState(false)


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
        toggleShowResponseMessageTrue()
    }

    function onLastNameChanged(event: ChangeEvent<HTMLInputElement>){
        setLastName(event.target.value)
        toggleShowResponseMessageTrue()
    }

    function onLastEmailChanged(event: ChangeEvent<HTMLInputElement>){
        setEmail(event.target.value)
        toggleShowResponseMessageTrue()
    }

    function onLastPhoneEmailChanged(event: ChangeEvent<HTMLInputElement>){
        setPhone(event.target.value)
        toggleShowResponseMessageTrue()
    }

    function setUserData(userData: any){
        console.log(userData)
        setFirstName(userData.data.first_name)
        setLastName(userData.data.last_name)
        setEmail(userData.data.email)
        setPhone(userData.data.phone)
        setProfilePicture(userData.data.profile_picture)
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

    function setResponseParameters(status : any, message :any){
        setResponseStatus(status)
        setResponseMessage(message)
        toggleLoadingStateFalse()
        toggleShowResponseMessageFalse()
    }

    function onProfileImageSelected(event: ChangeEvent<HTMLInputElement>){
        let fileObj
        if (event.target.files !==null){fileObj = event!!.target!!.files[0]
            //setProfilePicture(fileObj)
        }
        //const objectURL = URL.createObjectURL(fileObj)
        console.log(fileObj)
        postImagetoCloundinary(fileObj)
        //console.log(objectURL)
    }

    function postImagetoCloundinary(fileProp: any){
        console.log(fileProp)
        // Adding the formdata to upload image to cloudinary
        const formData = new FormData()
        formData.append('file', fileProp)
        // replace this with your upload preset name
        formData.append('upload_preset', 'qwerty12');
        const options = {
            method: 'POST',
            body: formData,
        };

        // replace cloudname with your Cloudinary cloud_name
        return fetch('https://api.Cloudinary.com/v1_1/appdot/image/upload', options)
        .then(res => res.json())
        .then(res => 
            {
                console.log(res)
                setProfilePicture(res.secure_url)
            })
        .catch(err => console.log(err));
    }

    function getUser(){
//         setToken(getTokenWithMethod(makeUserRequest))
        makeUserRequest()
        console.log('This is the token' +  token)
    }


    async function makeUserRequest(){
         let  token =  await getToken()
         setToken(token)
        axios.get('https://swift-trade-v1.herokuapp.com/api/v1/user',{
            headers: {'Authorization' : `Bearer ${token}`}})
            .then((res: any) => {
                console.log('This is the user response', res.data)  
                setUserData(res.data)
            })
            .catch((err)=>{
                console.log('This is the token' +  token)
                console.log(err)
            })
    }

    function validateInput(){
        if(simpleValidator.current.allValid()){
            updateUser()
        }
        else{
            simpleValidator.current.showMessages()  
        }
    }

    function updateUser(){
        toggleLoadingStateTrue()
        toggleShowResponseMessageTrue()
        axios.patch('https://swift-trade-v1.herokuapp.com/api/v1/user/update', {
            first_name: first_name,
	        last_name: last_name,
            email : email,
            phone: phone,
            profile_picture: profile_picture
        },{headers: {'Authorization' : `Bearer ${token}`}})
        .then((res : any) => {
            console.log('This is the response', res)    
            setResponseParameters(res.status, res.data.message)
        })
        .catch((err)=>{
            console.log(err.response.data.message)
            setResponseParameters(4, err.response.data.message)
        })
        console.log('i am here')
    }

    return(
        <div>
            <div className="profile-settings-section">
                <div className="profile-picture-section">
                  <label htmlFor="file-input" className="">
                    <img className="profile-settings-image pointer" width={150} src={ profile_picture.length > 0 ? profile_picture : "/vectors/empty-user.png"} />                   
                    </label>
                  <input onChange={onProfileImageSelected} accept="image/*" className="file-input pointer" type="file" id="file-input" />
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
                                onBlur={()=> simpleValidator.current.showMessageFor('name')}
                            />
                            {simpleValidator.current.message('name', first_name , 'required', {className: 'error-message'})}
                            
                        </div>
                        <div className="lastname second-edit-field">
                            <p>Last Name</p>
                            <EditField 
                                type="name" 
                                className="edit-field" 
                                placeholder="Ridwan" 
                                value={last_name}  
                                onChange={onLastNameChanged}  
                                onBlur={()=> simpleValidator.current.showMessageFor('name')}
                            />
                            {simpleValidator.current.message('name', last_name , 'required', {className: 'error-message'})}
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
                                onBlur={()=> simpleValidator.current.showMessageFor('email')}
                            />
                            {simpleValidator.current.message('email', email, 'required', {className: 'error-message'})}
                        </div>
                        <div className="phone second-edit-field">
                            <p>Phone</p>
                            <EditField 
                                type="phone" 
                                className="edit-field" 
                                placeholder="+234 813344969221" 
                                value={phone}
                                onChange={onLastPhoneEmailChanged}
                                onBlur={()=> simpleValidator.current.showMessageFor('phone')}
                            />
                            {simpleValidator.current.message('phone', phone, 'required', {className: 'error-message'})}
                        </div>
                    </div>
                </div>

                <LoadingButton 
                    responseStatus={responseStatus} 
                    responseMessage={responseMessage} 
                    loadingState={loadingState} 
                    showResponseMessage={showResponseMessage} 
                    validateParameters={validateInput}  
                />
                


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

const LoaderContainer = styled.p`
    max-width: 50px;
    margin: auto;
`
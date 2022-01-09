import axios from "axios"
import { ChangeEvent, useRef, useState } from "react"
import SimpleReactValidator from "simple-react-validator"
import BlueButton from "../../components/ui-components/Buttons/BlueButton"
import CustomizeButton from "../../components/ui-components/Buttons/CustomizeButton"
import LoadingButton from "../../components/ui-components/Buttons/LoadingButton"
import './Login.css'

function Login(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const simpleValidator = useRef(new SimpleReactValidator())
    
    const [responseStatus, setResponseStatus] = useState(0)
    const [responseMessage, setResponseMessage] = useState("")
    const [loadingState, setloadingState] =  useState(false)
    const [showResponseMessage, setShowResponseMessage] = useState(false)


    function handleEmailChanged(event: ChangeEvent<HTMLInputElement>){
        setEmail(event.target.value)
    }
    
    function handlePasswordChanged(event: ChangeEvent<HTMLInputElement>){
        setPassword(event.target.value)
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
            loginToAdminDashboard()
        }else{
            // toggleLoadingStateTrue()
            toggleShowResponseMessageTrue()
            simpleValidator.current.showMessages()
        }
    }

    function loginToAdminDashboard(){
        toggleLoadingStateTrue()
        axios.post('https://swift-trade-v1.herokuapp.com/api/v1/auth/login', {
            email: email,
            password: password
        })
        .then((res: any) => {
            console.log('This is the data', res)
            window.location.href = `https://swift-admin-dashboard.netlify.app/token/${res.data.data}`
            getUserData(res.data.data)
            setResponseParameters(res.status ,res.data.message)  
        })
        .catch((err)=>{
            console.log(err)
            setResponseParameters("err", err.message)
        })
    }

    function getUserData(token: any){
        axios.get('https://swift-trade-v1.herokuapp.com/api/v1/user',{
        headers: {
            'Authorization' : `Bearer ${token}`
        }})
        .then((res: any) => {
            console.log('This is the user response', res)  
            checkIfUserIsAdmin(res.data.data.role) ?
            window.location.href = `https://swift-admin-dashboard.netlify.app/token/${token}`
            :   setResponseParameters( 4, 
                "You are not an Admin. We would redirect you to the user page")

        })
        .catch((err)=>{
            console.log(err)
        })
    }

    function checkIfUserIsAdmin(role: any){
        return role == "admin" ? true : false
    }



    return(
        <div>
            <div className="header-section ">
                <img className="logo-in-login" src="logo.svg" />  
            </div>
            <div className="body-section">
                <div className="login-section">
                    <p>Admin Login</p>
                    <input 
                        className="login-button login-edit-field" 
                        name="name"
                        placeholder="Email Address"
                        onChange={handleEmailChanged}
                        onBlur={()=> simpleValidator.current.showMessageFor('email')}
                        />
                    {simpleValidator.current.message('email', email, 'required', {className: 'error-message'})}

                    <input 
                        className="login-button login-edit-field" 
                        name="password"
                        placeholder="Password"
                        onChange={handlePasswordChanged}
                        onBlur={()=> simpleValidator.current.showMessageFor('password')}
                        />
                    {simpleValidator.current.message('password', password, 'required', {className: 'error-message'})}
                    
                    <LoadingButton 
                        responseStatus={responseStatus} 
                        responseMessage={responseMessage} 
                        loadingState={loadingState} 
                        showResponseMessage={showResponseMessage} 
                        validateParameters={validateParameters}  
                    />    
                </div>
                <div className="icon-section">
                    <img className="value-proposition-icon" src="./vectors/vp-vector.svg" />
                </div>
            </div>
        </div>
    )
}

export default Login
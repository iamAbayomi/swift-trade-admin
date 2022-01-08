import BlueButton from "../../components/ui-components/Buttons/BlueButton"
import CustomizeButton from "../../components/ui-components/Buttons/CustomizeButton"
import './Login.css'

function Login(){
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
                        />
                    <input 
                        className="login-button login-edit-field" 
                        name="name"
                        placeholder="Password"
                        />
                    
                    <CustomizeButton 
                        width={"320px"} 
                        height={"50px"} 
                        color={"white"} 
                        backgroundColor={"#010066"} 
                        buttonText={"Login"} 
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
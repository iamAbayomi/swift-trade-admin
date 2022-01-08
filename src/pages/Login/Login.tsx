import BlueButton from "../../components/ui-components/Buttons/BlueButton"

function Login(){
    return(
        <div>
            <div className="header-section">
                <img className="logo" src="logo.svg" />  
            </div>
            <div className="login-section">
                <input 
                    className="login-button" 
                    name="name"
                    placeholder="Email Address"
                    />
                <input 
                    className="login-button" 
                    name="name"
                    placeholder="Password"
                    />
                <BlueButton buttonText={"Login"} />
            </div>
            <div className="icon-section">
            <img className="value-proposition-icon" src="./vectors/vp-vector.svg" />
            </div>
        </div>
    )
}

export default Login
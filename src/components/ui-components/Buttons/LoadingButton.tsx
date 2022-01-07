import { useEffect, useState } from "react"
import Loader from "react-loader-spinner"
import styled from "styled-components"
import ResponseMessage from "../typography/ResponseMessage"

type props = {
    responseStatus: number,
    responseMessage: string,
    loadingState: boolean,
    showResponseMessage: boolean,
    validateParameters: () =>  void,
    buttonText?: string
}
/**
 * You need to set the user responseStatus, the responseMessage
 * the loadingState, responseMessage
 * 
 */
const LoadingButton: React.FC<props> = (props) => {
    const [responseStatus, setResponseStatus] = useState(0)
    const [responseMessage, setResponseMessage] = useState("")
    const [loadingState, setLoadingState] = useState(false)
    const [showResponseMessage, setShowResponseMessage] = useState(false)

    function setState(){
        setResponseStatus(props.responseStatus)
        setResponseMessage(props.responseMessage)
        setLoadingState(props.loadingState)
        setShowResponseMessage(props.showResponseMessage)
    }

    useEffect(() => {
        setState()
    })

    return(
        <div>
            {
                showResponseMessage  == false ?  
                <div>
                    {responseStatus === 200 ? <ResponseMessage text={responseMessage} color={"green"}  /> :
                        <ResponseMessage text={responseMessage} color={"red"}/>}
                </div>: <div/>
            }
            { 
                loadingState == true ? 
                <LoaderContainer>
                    <Loader
                        type="Oval"
                        color="green"
                        height={40}
                        width={40}                                 
                        // visible={this.state.showSpinner}
                    // timeout={3000} //3 secs
                    />
                </LoaderContainer> :  
                <button 
                    className="blue-button center-button pointer" 
                    style={{marginTop: "40px" }}
                    onClick={props.validateParameters}
                    >
                    {
                        props.buttonText != undefined ? props.buttonText
                        : <p> Proceed </p>
                    }
                    
                </button>
            }
        </div>
    )
}

export default LoadingButton

const LoaderContainer = styled.p`
    max-width: 50px;
    margin: auto;
`
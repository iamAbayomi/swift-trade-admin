/* eslint-disable jsx-a11y/alt-text */
import React, { ChangeEvent } from "react";
import './Overview.css'
import '../components/Profile.css'
import './AddCards.css'
import styled from 'styled-components'
import { getToken } from "../classes/User";
import axios from "axios";
import LoadingButton from "../components/ui-components/Buttons/LoadingButton";
import { Link } from "react-router-dom";

export default class AddCoins extends React.Component{

    state ={
        coin_id: '',
        coin_name: '',
        coin_rate: '',
        image: '/vectors/profile-display-container.svg',
        coin_function: '',
        responseStatus: 0,
        responseMessage: "",
        loadingState: false,
        showResponseMessage: false
    }

    componentDidMount(){
        this.getCoinParameters()
    }

    getCoinParameters(){
        const urlParams = new URLSearchParams(window.location.search)
        if(urlParams.get("coin_id")){
            this.setState({ coin_id: urlParams.get("coin_id")})
            this.setState({ image: urlParams.get("coin_image")})
            this.setState({ coin_name: urlParams.get("coin_name")})
            this.setState({ coin_rate: urlParams.get("coin_rate")})
            this.setState({ coin_function: "Update Coin"  })   
        }
        else{
            this.setState({ coin_function: "Add Coin"  })
        }
    }

    toggleLoadingStateTrue(){
        this.setState({ loadingState : true })
    }

    toggleLoadingStateFalse(){
        this.setState({ loadingState : false })
    }

    toggleShowResponseMessageTrue(){
        this.setState({ showResponseMessage : true })
    }

    toggleShowResponseMessageFalse(){
        this.setState({ showResponseMessage : false })
    }

    validateParameters(){
        this.toggleShowResponseMessageTrue()
        
        if(this.state.coin_name.length == 0 ){
            this.setResponseParameters(4, "Please enter the coin name")
        }
        else if(this.state.image == '/vectors/profile-display-container.svg'){
            this.setResponseParameters(4, "Please change the coin image")
        }
        else if(this.state.coin_rate.length == 0 ){
            this.setResponseParameters(4, "Please enter the coin rate")
        }
        else if(this.state.coin_function == "Update Coin"){
            this.updateCoins()
        }
        else{
            this.addCoins()
        }
    }
    

    setResponseParameters(status: any, message: any){
        this.setState({responseStatus: status})
        this.setState({ responseMessage : message })
        this.toggleLoadingStateFalse()
        this.toggleShowResponseMessageFalse()
        console.log("in response status", message)
        console.log("toggle loading state", this.state.loadingState, " toggle responseMessage ",  this.state.showResponseMessage)
    }

    onCoinNameChanged(event: ChangeEvent<HTMLInputElement>){
        this.setState({ coin_name: event.target.value})
        this.toggleShowResponseMessageTrue()
    }
    
    onCoinRateChange(event: ChangeEvent<HTMLInputElement>){
        this.setState({ coin_rate: event.target.value})
        this.toggleShowResponseMessageTrue()
    }
    
    onCoinImageSelected(event: ChangeEvent<HTMLInputElement>){
        // this.setState({ image: event.target.value})
        let fileObj
        if (event.target.files !==null){fileObj = event!!.target!!.files[0]}
        this.setState({ image: fileObj})
        //const objectURL = URL.createObjectURL(fileObj)
        console.log(fileObj)
        this.postImagetoCloundinary(fileObj)
        //console.log(objectURL)
        this.toggleShowResponseMessageTrue()
    }


    postImagetoCloundinary(fileProp: any){
        console.log(fileProp)
        // Adding the formdata to upload image to cloudinary
        const formData = new FormData();
        formData.append('file', fileProp);
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
                this.setState({ image: res.secure_url})
            })
        .catch(err => console.log(err));
    }

    async addCoins(){
        this.toggleLoadingStateTrue()
        this.toggleShowResponseMessageTrue()
        let token = await getToken()
        axios.post('https://swift-trade-v1.herokuapp.com/api/v1/coins/create', {
            name: this.state.coin_name,
            rate: this.state.coin_rate,
            image: this.state.image
        }, {headers: { 'Authorization' : `Bearer ${token}`}}
        )
        .then((res: any) => {
            console.log('This is the data', res.data)
            this.setResponseParameters(res.status, res.data.message)
            this.clearInputs()
        })
        .catch((err)=>{
            console.log(err)
            console.log(err.response.data.message)
            this.setResponseParameters(4, err.response.data.message)
        })
    }

    async updateCoins(){
        this.toggleLoadingStateTrue()
        this.toggleShowResponseMessageTrue()
        let token = await getToken()
        axios.patch(`https://swift-trade-v1.herokuapp.com/api/v1/coins/${this.state.coin_id}/update`, {
            name: this.state.coin_name,
            rate: this.state.coin_rate,
            image: this.state.image
        }, {headers: { 'Authorization' : `Bearer ${token}`}}
        )
        .then((res: any) => {
            console.log('This is the data', res.data)
            this.setResponseParameters(res.status, res.data.message)
        })
        .catch((err)=>{
            console.log(err)
            console.log(err.response.data.message)
            this.setResponseParameters(4, err.response.data.message)
        })
    }

    async deleteCoins(){
        this.toggleLoadingStateTrue()
        this.toggleShowResponseMessageTrue()
        let token = await getToken()
        axios.delete('https://swift-trade-v1.herokuapp.com/api/v1/coins/delete',{ 
            headers: { 'Authorization' : `Bearer ${token}`},
            data : {coinId :this.state.coin_id }}
        ) .then((res: any) => {
            console.log('This is the data', res.data)
            this.setResponseParameters(res.status, res.data.message)
            this.clearInputs()
        })
        .catch((err)=>{
            console.log(err)
            console.log(err.response.data.message)
            this.setResponseParameters(4, err.response.data.message)
        })
    }

    clearInputs(){
        this.setState({ image: "/vectors/profile-display-container.svg"})
            this.setState({ coin_name: " " })
            this.setState({ coin_rate: " "})
    }

    render(){
        return(
            <div className="container">
                <div className="contents">
                    <CardTitle className="display-flex">
                        <p className="dashboard-title">Coins</p>
                        <div className="display-flex">
                            <div className="search-bar">
                                <div className="search-content">
                                    <div className="search-logo-and-highlight">
                                    <img className="search-logo" src="/vectors/search-icon.svg"/>
                                    <input className="search-highlight" 
                                    placeholder="Search Cards"
                                    />
                                    </div>
                                </div>
                            </div>
                            <Link to="/addcards" className="link">
                                <AddButton style={{ margin: "10px auto 0px auto" }} className="button" >
                                    <img className="card-logo" src="/vectors/card-logo.svg" />
                                    <p className="addcard-text" >Add Cards</p>
                                </AddButton>
                            </Link>
                        </div>
                    </CardTitle>
                    <CardWhite className="card-white">
                    <p className="text-options pointer" onClick={this.deleteCoins.bind(this)} > { this.state.coin_name.length > 0 ? "Delete Coin" : ""}</p>
                        <div className="profile-display-container">
                            <label htmlFor="file-input" className="">
                            <img className="coin-image" src={this.state.image}/>
                            </label>
                                <input onChange={this.onCoinImageSelected.bind(this)} accept="image/*" className="file-input" type="file" id="file-input" />
                        </div>
                        <div className="add-card-section">
                            <div className="card-name">
                                <p>Coin Name</p>
                                <EditField 
                                    type="name" 
                                    className="edit-field" 
                                    placeholder="Google Play E-code card"
                                    value={this.state.coin_name}
                                    onChange={this.onCoinNameChanged.bind(this)}
                                    />
                            </div>

                            <div className="card-type">
                                <p>Card Rate</p>
                                <EditField 
                                    type="name" 
                                    className="edit-field" 
                                    placeholder="Card Rate"
                                    value={this.state.coin_rate}
                                    onChange={this.onCoinRateChange.bind(this)}
                                    />
                            </div>

                            
                            <LoadingButton 
                                responseStatus={this.state.responseStatus} 
                                responseMessage={this.state.responseMessage} 
                                loadingState={this.state.loadingState} 
                                showResponseMessage={this.state.showResponseMessage} 
                                validateParameters={this.validateParameters.bind(this)}
                                buttonText={this.state.coin_function}
                            />
                            
                        </div>
                    </CardWhite>
                </div> 
            </div>
        )
    }
}



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


const CardWhite = styled.div `
    padding: 20px 0px 20px 0px;
    box-sizing: border-box;

`


const CardTitle = styled.div `
    margin: 40px 0px 30px 0px;
`


const AddButton = styled.div `
    display: flex;
`
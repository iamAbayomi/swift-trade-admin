/* eslint-disable jsx-a11y/alt-text */
import React, { ChangeEvent } from "react";
import './Overview.css'
import '../components/Profile.css'
import './AddCards.css'
import styled from 'styled-components'
import axios from "axios";
import { getToken } from "../classes/User";
import LoadingButton from "../components/ui-components/Buttons/LoadingButton";

export default class AddCards extends React.Component{

    state ={
        card_name: '',
        card_rate: '',
        card_currency: '',
        image: '/vectors/profile-display-container.svg',
        responseStatus: 0,
        responseMessage: "",
        loadingState: false,
        showResponseMessage: false
    }

    //ComponentDidMount to get Cards property when the page builds.
    componentDidMount(){

    }

    getAddCards(){
        let token = window.location.pathname.replace('/addcards', '')

    }

    toggleLoadingStateTrue(){
        console.log("toggle loading state", this.state.loadingState, " toggle responseMessage ",  this.state.showResponseMessage)
        this.setState({ loadingState : true })
        console.log("toggle loading state", this.state.loadingState, " toggle responseMessage ",  this.state.showResponseMessage)
    }

    toggleLoadingStateFalse(){
        console.log("toggle loading state", this.state.loadingState, " toggle responseMessage ",  this.state.showResponseMessage)
        this.setState({ loadingState : false })
        console.log("toggle loading state", this.state.loadingState, " toggle responseMessage ",  this.state.showResponseMessage)
    }

    toggleShowResponseMessageTrue(){
        console.log("toggle loading state", this.state.loadingState, " toggle responseMessage ",  this.state.showResponseMessage)
        this.setState({ showResponseMessage : true })
        console.log("toggle loading state", this.state.loadingState, " toggle responseMessage ",  this.state.showResponseMessage)
    }



    toggleShowResponseMessageFalse(){
        console.log("toggle loading state", this.state.loadingState, " toggle responseMessage ",  this.state.showResponseMessage)
        this.setState({ showResponseMessage : false })
        console.log("toggle loading state", this.state.loadingState, " toggle responseMessage ",  this.state.showResponseMessage)
    }


    onCardNameChange(event: ChangeEvent<HTMLInputElement>){
        this.setState({
            card_name: event.target.value
        })
    }
    
    onCardRateChange(event: ChangeEvent<HTMLInputElement>){
        this.setState({
            card_rate: event.target.value
        })
    }

    onCardCurrencyChange(event: ChangeEvent<HTMLInputElement>){
        this.setState({
            card_currency: event.target.value  
        })
    }

    onProfileImageSelected(event: ChangeEvent<HTMLInputElement>){
        // this.setState({ image: event.target.value})
        let fileObj
        if (event.target.files !==null){fileObj = event!!.target!!.files[0]}
        this.setState({ image: fileObj})
        //const objectURL = URL.createObjectURL(fileObj)
        console.log(fileObj)
        this.postImagetoCloundinary(fileObj)
        //console.log(objectURL)
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


    validateParameters(){
        // this.toggleLoadingState()
        this.toggleShowResponseMessageTrue()
        
        if(this.state.card_name.length == 0 ){
            this.setResponseParameters(4, "Please enter the card name")
        }
        else if(this.state.image == '/vectors/profile-display-container.svg'){
            this.setResponseParameters(4, "Please change the card image")
        }
        else if(this.state.card_rate.length == 0 ){
            this.setResponseParameters(4, "Please enter the card rate")
        }
        else if(this.state.card_currency.length == 0 ){
            this.setResponseParameters(4, "Please enter the card currency")
        }
        else{
            this.addCard()
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


    async addCard(){
        this.toggleLoadingStateTrue()
        this.toggleShowResponseMessageFalse()
        console.log("I am here")
        let token = await getToken()
        axios.post('https://swift-trade-v1.herokuapp.com/api/v1/cards/create', {
            name: this.state.card_name,
            rate: this.state.card_rate,
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
    

    async updateCard(){
        let token = await getToken()
        axios.patch('https://swift-trade-v1.herokuapp.com/api/v1/cards/update', {
            cardId: 1,
            name: this.state.card_name,
            rate: this.state.card_rate,
            image: this.state.image
        }, {headers: { 'Authorization' : `Bearer ${token}`}}
        )
        .then((res) => {
            console.log('This is the data', res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    
    render(){
        return(
            <div className="container">
                <div className="contents">
                    <CardTitle className="display-flex">
                        <p className="dashboard-title">Cards</p>
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
                            <AddButton style={{ margin: "10px auto 0px auto" }} className="blue-button display-flex" >
                                <img className="card-logo" src="/vectors/card-logo.svg" />
                                <p className="addcard-text" >Add Coin</p>
                            </AddButton>
                        </div>
                    </CardTitle>
                    <CardWhite className="card-white">
                        <div className="profile-display-container">
                            <label htmlFor="file-input" className="">
                                {/* <img className=""  src="/vectors/profile-display-container.svg"/> */}
                                <img className="coin-image" src={this.state.image}/>
                            </label>
                            <input onChange={this.onProfileImageSelected.bind(this)} accept="image/*" className="file-input" type="file" id ="file-input" />
                        </div>
                        <div className="add-card-section">
                            <div className="card-name">
                                <p>Card Name</p>
                                <EditField   
                                    type="text" 
                                    className="edit-field" 
                                    placeholder="Google Play E-code card"
                                    value={this.state.card_name}
                                    onChange={this.onCardNameChange.bind(this)}
                                    />
                            </div>

                            <div className="card-type">
                                <p>Card Rate</p>
                                <EditField 
                                    type="number" 
                                    className="edit-field" 
                                    placeholder="Card Rate"
                                    value={this.state.card_rate}
                                    onChange={this.onCardRateChange.bind(this)}
                                    />
                            </div>

                            <div className="card-currency">
                                <p>Card Currency</p>
                                <EditField 
                                    type="name" 
                                    className="edit-field" 
                                    placeholder="US Dollars (USD)"
                                    value={this.state.card_currency}
                                    onChange={this.onCardCurrencyChange.bind(this)}
                                    />
                            </div>
                            <LoadingButton 
                                responseStatus={this.state.responseStatus} 
                                responseMessage={this.state.responseMessage} 
                                loadingState={this.state.loadingState} 
                                showResponseMessage={this.state.showResponseMessage} 
                                validateParameters={this.validateParameters.bind(this)}
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
    background: #FFFFFF;
    /* swift gray light */

    border: 1px solid #BDBDBD;
    box-sizing: border-box;
    border-radius: 10px;
`


const CardWhite = styled.div `
    padding: 20px 0px 20px 0px;
    box-sizing: border-box;

`


const CardTitle = styled.div `
    margin: 40px 0px 30px 0px;
`


const AddButton = styled.div `
    width: 184px;
    display: flex;
`
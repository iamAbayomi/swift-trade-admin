/* eslint-disable jsx-a11y/alt-text */
import React, { ChangeEvent } from "react";
import './Overview.css'
import '../components/Profile.css'
import './AddCards.css'
import styled from 'styled-components'
import axios from "axios";
import { getToken } from "../classes/User";

export default class AddCards extends React.Component{

    state ={
        card_name: '',
        card_type: '',
        card_currency: '',
        image: ''
    }

    onCardNameChange(event: ChangeEvent<HTMLInputElement>){
        this.setState({
            card_name: event.target.value
        })
    }
    
    onCardTypeChange(event: ChangeEvent<HTMLInputElement>){
        this.setState({
            card_type: event.target.value
        })
    }

    onCardCurrencyChange(event: ChangeEvent<HTMLInputElement>){
        this.setState({
            card_currency: event.target.value  
        })
    }

    async addCard(){
        let token = await getToken()
        axios.post('https://swift-trade-v1.herokuapp.com/api/v1/cards/create', {
            name: this.state.card_name,
            rate: this.state.card_type,
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

    async updateCard(){
        let token = await getToken()
        axios.patch('https://swift-trade-v1.herokuapp.com/api/v1/cards/update', {
            cardId: 1,
            name: this.state.card_name,
            rate: this.state.card_type,
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
                            <img className="" src="/vectors/profile-display-container.svg"/>
                        </div>
                        <div className="add-card-section">
                            <div className="card-name">
                                <p>Card Name</p>
                                <EditField 
                                    type="name" 
                                    className="edit-field" 
                                    placeholder="Google Play E-code card"
                                    value={this.state.card_name}
                                    onChange={this.onCardNameChange.bind(this)}
                                    />
                            </div>

                            <div className="card-type">
                                <p>Card Type</p>
                                <EditField 
                                    type="name" 
                                    className="edit-field" 
                                    placeholder="USA iTunes E-Code card"
                                    value={this.state.card_type}
                                    onChange={this.onCardTypeChange.bind(this)}
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
                            <button 
                                style={{ margin: "60px auto 60px auto" }}
                                 className="blue-button"
                                 onClick = {this.addCard.bind(this)}
                                 >
                                     Add Card
                            </button>
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
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import './Overview.css'
import '../components/Profile.css'
import './AddCards.css'
import styled from 'styled-components'
import SingleCardsView from "../components/SingleCardsView";
import axios from "axios";
import { Link } from "react-router-dom";


export default class Cards extends React.Component {

    deleteCard(){
        axios.delete('https://swift-trade-v1.herokuapp.com/api/v1/cards/delete')
        .then((res)=>{
                console.log('This is the data', res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }
    
    render(){
        return(
            <div className="container">
                <div className="contents">
                    <CardTitle className="card-title">
                        <p className="dashboard-title">Cards</p>
                        <div className="display-flex card-title">
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
                            <Link to="/addcoins" className="link">
                                <AddButton  className="button " >
                                    <img className="card-logo" src="/vectors/card-logo.svg" />
                                    <p className="addcard-text" >Add Coin</p>
                                </AddButton>
                            </Link>
                        </div>
                    </CardTitle>
                    <SingleCardsView showCardsTitle ={false} />
                </div>
            </div>
        )
    }

}



const CardWhite = styled.div `
    padding: 20px 0px 20px 0px;
    box-sizing: border-box;

`


const CardTitle = styled.div `
    margin: 40px 0px 20px 0px;
`


const AddButton = styled.div `
    display: flex;
`
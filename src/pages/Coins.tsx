/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import './Overview.css'
import '../components/Profile.css'
import './AddCards.css'
import styled from 'styled-components'
import SingleCoinView from "../components/SingleCoinView";

export default class Coins extends React.Component {
    
    
    render(){
        return(
            <div className="container">
                <div className="contents">
                    <CardTitle className="card-title">
                        <p className="dashboard-title">Coins</p>
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
                            <AddButton  className="button">
                                <img className="card-logo" src="/vectors/card-logo.svg" />
                                <p className="addcard-text" >Add Cards</p>
                            </AddButton>
                        </div>
                    </CardTitle>
                    <SingleCoinView />
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
    margin: 40px 0px 30px 0px;
`


const AddButton = styled.div `
    width: 184px;
    display: flex;
`
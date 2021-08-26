/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import './Overview.css'
import '../components/Profile.css'
import './AddCards.css'
import styled from 'styled-components'

export default class AddCards extends React.Component{
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
                            <button style={{ margin: "10px auto 0px auto" }} className="blue-button" >Add Card</button>
                        </div>
                    </CardTitle>
                    <CardWhite className="card-white">
                        <div className="profile-display-container">
                            <img className="" src="/vectors/profile-display-container.svg"/>
                        </div>
                        <div className="add-card-section">
                            <div className="card-name">
                                <p>Card Name</p>
                                <EditField type="name" className="edit-field" placeholder="Google Play E-code card"/>
                            </div>

                            <div className="card-type">
                                <p>Card Type</p>
                                <EditField type="name" className="edit-field" placeholder="USA iTunes E-Code card"/>
                            </div>

                            <div className="card-currency">
                                <p>Card Currency</p>
                                <EditField type="name" className="edit-field" placeholder="US Dollars (USD)"/>
                            </div>
                            <button style={{ margin: "60px auto 60px auto" }} className="blue-button" >Add Card</button>
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
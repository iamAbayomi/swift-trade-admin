/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import './Overview.css'
import styled from 'styled-components'

export default class AddCards extends React.Component{
    render(){
        return(
            <div className="container">
                <div className="contents">
                    <p>Cards</p>
                    <div className="card-white">
                        <div className="profile-display-container">
                            <img className="" src="/vectors/profile-display-container.svg"/>
                        </div>
                        <div className="reset-password-section">
                            <div className="old-password">
                                <p>Old Password</p>
                                <EditField type="password" className="edit-field" placeholder="Enter your old password"/>
                            </div>

                            <div className="new-password">
                                <p>New Password</p>
                                <EditField type="password" className="edit-field" placeholder="New password"/>
                            </div>

                            <div className="confirm-password">
                                <p>Confirm Password</p>
                                <EditField type="password" className="edit-field" placeholder="Confirm password"/>
                            </div>
                            <button className="blue-button" >Save Changes</button>
                        </div>
                    </div>
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
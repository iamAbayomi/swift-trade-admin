/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import styled from 'styled-components'
import SettingsHeader from './SettingsHeader'
import './Profile.css'

export default class Profile extends React.Component{
    render(){
        return(
            <div>
                <SettingsSection className=""> 
    
                    <div className="settings-section card-white" >
                        <div className="profile-settings-section">
                            <div className="profile-picture-section">
                                <img className="profile-settings-image" src="/vectors/profile-picture.svg" />
                                <p className="picture-text">The uploaded image must be 500px wide and 500px long</p>
                            </div>

                            <div className="profile-information-section ">
                                
                                <div className="display-flex">
                                    <div className="firstname">
                                        <p>First Name</p>
                                        <EditField type="name" className="edit-field" placeholder="Ramon" />
                                    </div>
                                    <div className="lastname">
                                        <p>Last Name</p>
                                        <EditField type="name" className="edit-field" placeholder="Ridwan" />
                                    </div>
                                </div>

                                <div className="display-flex">
                                    <div className="email">
                                        <p>Email</p>
                                        <EditField type="email" className="edit-field" placeholder="Ramoneidwan@gmail.com" />
                                    </div>
                                    <div className="phone">
                                        <p>Phone</p>
                                        <EditField type="name" className="edit-field" placeholder="+234 813344969221" />
                                    </div>
                                </div>
                            </div>
                            <button className="blue-button">Save Changes</button>
                        </div>
                    </div>

                    <div className="card-white margin-top">
                        <p className="purple-header-typography">Reset Password</p>
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

                    <div className="delete-account-section card-white">
                            <p className="purple-header-typography" >Delete the account</p>
                            <p> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.  </p>
                            <button className="blue-button" >Delete Account</button>
                    </div>                    
                </SettingsSection>

            </div>
        )
    }
}


const SettingsSection = styled.div `
    margin: 0px auto 0px;
`


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
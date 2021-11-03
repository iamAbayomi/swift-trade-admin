/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import styled from 'styled-components'
import SettingsHeader from './SettingsHeader'
import './Profile.css'
import UserProfile from './profile/UserProfile'
import UpdatePassword from './profile/UpdatePassword'

export default class Profile extends React.Component{
    render(){
        return(
            <div>
                <SettingsSection className=""> 
                    <div className="settings-section card-white" >
                        <UserProfile />
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
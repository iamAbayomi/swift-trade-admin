import React from 'react'
import styled from 'styled-components'
import './BankAccount.css'

export default class Notification extends React.Component{

    render(){
        return(
            <NotificationSection className="full-page-view">
                <div className="card-white">
                <div className="notification-section">
                    <div className="display-flex">
                        <p>Notification Type</p> 
                        <p>Push Notfication</p>
                        <p>Email Alert</p>
                        </div>

                        <div className="display-flex" >
                            <p>Approve Funds </p> 
                            <label className="switch">
                                <input type="checkbox" checked/>
                                <span className="slider round"></span>
                            </label>
                            <label className="switch">
                                <input type="checkbox" checked/>
                                <span className="slider round"></span>
                            </label>

                        </div>
                        
                        <div className="display-flex" >
                            <p>Buy/Sell</p> 
                            <label className="switch">
                                <input type="checkbox" checked/>
                                <span className="slider round"></span>
                            </label>
                            <label className="switch">
                                <input type="checkbox" checked/>
                                <span className="slider round"></span>
                            </label>

                        </div>
                    </div>  
                    

                </div>
        </NotificationSection>
        )
    }
}


const NotificationSection = styled.div `

`
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import './NotificationCard.css'

export default class NotificationCard extends React.Component{
    render(){
        return(
            <div className="notifications-card display-flex">
                <img className="round-icon" src="./vectors/round-icon.svg" />
                <div className="amount-information-row">
                    <p className="notifications">Notifications</p>
                    <p className="notifications-info">Olabisi Olabiwonu just placed a transaction. 
                    Kindly view transaction window to approve order.</p>
                    <button className="white-button">View More</button>
                </div>
                <div className="notifications-img">
                    <img className="notifications-logo" src="/vectors/notifications-logo.svg" />
                </div>
                <div className="cancel-sign">
                    <img src="/vectors/cross-sign.svg" />
                </div>
            </div>
        )
    }

}
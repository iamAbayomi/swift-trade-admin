/* eslint-disable jsx-a11y/alt-text */
import React from "react";


export default class NotificationCard extends React.Component{
    render(){
        return(
            <div className="wallet-card display-flex">
                <div className="amount-information-row">
                    <p className="amount">Notifications</p>
                    <p className="amount-info">Olabisi Olabiwonu just placed a transaction. 
                    Kindly view transaction window to approve order.</p>
                </div>
                <div className="">
                <img src="/vectors/notifications-logo.svg" />
                </div>
                <div className="">
                    <img src="/vectors/cross-sign.svg" />
                </div>
            </div>
        )
    }

}
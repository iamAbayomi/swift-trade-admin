/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import './BankAccount.css'

export default class BankAccount extends React.Component{

    render(){
        return(
            <div className="section card-white">
                    
                    <p> Bank Account </p>
                    
                    <div className="bank-account-section">
                        <p className="edit">Edit</p>
                            <div className="display-flex">
                                <img src="/vectors/gtbank.svg" />
                                <div>
                                    <p>GUARANTY TRUST BANK</p>
                                    <p>004 XXXX 475</p>
                                    <p>Ramon Ridwan</p>
                                </div>
                            </div>
                    </div>
                    <button className="blue-button">Add Account</button> 
            </div>
        )
    }
}
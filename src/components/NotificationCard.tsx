/* eslint-disable jsx-a11y/alt-text */
import React from "react";


export default class WalletBalanceCard extends React.Component{
    render(){
        return(
            <div className="wallet-card">
                <div className="wallet-balance-row display-flex">
                    <p className="wallet-balance">Wallet Balance</p>
                    <div className="withdraw-info">
                        <p>Withdraw</p>
                    </div>
                </div>
                <div className="amount-information-row">
                    <p className="amount">0.00</p>
                    <p className="amount-info">Please note this the current balance amount left on ya’ wallet.</p>
                </div>
            </div>
        )
    }

}
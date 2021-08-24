/* eslint-disable jsx-a11y/alt-text */
import React from "react";

type MyProps= {
    showWalletAddress : string
}

export default class WalletBalanceCard extends React.Component<MyProps>{
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
                {this.props.showWalletAddress === 'yes' ?
                    <div className="wallet-information-row">
                        <p className="wallet-info">wallet address</p>
                        <div className="display-flex">
                            <p className="wallet-address">hgggee6389909900000jwnnnnnsbbbhhd/RAxxxxxxx</p>
                            <img className="copy-icon" src="/vectors/copy-icon.svg"  />
                        </div>
                    </div>
                 : <div/> }
            </div>
        )
    }

}
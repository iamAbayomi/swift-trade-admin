/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { Link } from 'react-router-dom'

export default class EmptyStateTrasanctionCards extends React.Component{
    render(){
        return(
            <div className="transaction-board card-white">
                    <p className="transaction-text">Transactions</p>
                    <div className="">
                    <div className="transaction-image-section">
                        <img className="empty-transaction-image" src="/vectors/transac-empty-state.svg" />
                    </div>
                    
                        <p className="no-transactions-text">No Trasanction</p>
                        <div className="">
                        <Link to="/transactions" className="link">
                            <p className="no-transactions-subtitle" >Your transaction will appear here. <span className="purple-underline-text">Start a transaction</span></p>
                        </Link>
                        {/* <p className="underline"> Start a transaction</p> */}
                        </div>
                        <div className="transaction-head-table transaction-ids display-flex">
                            <p>Date</p>
                            <p>Transaction ID</p>
                            <p>Type</p>
                            <p>Value</p>
                            <p>Status</p>
                        </div>
                    
                    </div>
            </div>
        )
    }
}
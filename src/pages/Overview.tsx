/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import CollectionofCards from '../components/CollectionofCards'
import ConversionRate from '../components/ConversionRate'
import EmptyStateTrasanctionCards from '../components/EmptyStateTransactionCard'
import SingleTransactionCardView from '../components/SingleTransactionCardview'
import TransactionCards from '../components/TransactionCard'
import NotificatonCard from '../components/NotificationCard'

import WalletBalanceCard from '../components/WalletBalanceCard'
import './Overview.css'

export default class Overview extends React.Component{

    state={
        isEmpty : ''
    }

    render(){
        return(
            <div className="container">
              <div className="contents" >
                    <p className="username-intro">HELLO, RAMON RIDWAN</p>
                    <p className="dashboard-title">Overview</p>
                    <Link to="/transactions" className="transaction-row display-flex link">
                        
                        <SingleTransactionCardView percentage = {10} transactiontext="Total Number of Transactions" />
                        <SingleTransactionCardView percentage = {6} transactiontext="Pending Transactions" />
                        <SingleTransactionCardView percentage = {4} transactiontext="Paid Transactions" />
                    </Link>

                    <ConversionRate />
                    
                    <div className="wallet-row display-flex">
                        <Link to="/wallet" className="link">
                            <NotificatonCard />
                        </Link>
                        
                    </div>
                    <Link to="/trade/coin" className="link">
                            <CollectionofCards />
                        </Link>

                    <Link to="/transactions" className="link">

                        {this.state.isEmpty === 'yes' ?

                        <EmptyStateTrasanctionCards />
                        : <TransactionCards/>

                        }
                    </Link> 
                  
              </div>

            </div>
        )
    }

}



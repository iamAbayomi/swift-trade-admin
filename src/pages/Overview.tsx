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
import SingleCoinView from  '../components/SingleCoinView'

import WalletBalanceCard from '../components/WalletBalanceCard'
import './Overview.css'
import SingleCardsView from '../components/SingleCardsView'
import UserTableView from '../components/UserTableView'
import PaymentsTransactionCard from '../components/PaymentsTransactionCard'

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
                        <Link to="/settings" className="link">
                            <NotificatonCard />
                        </Link>
                        
                    </div>
                    <Link to="/cards" className="link">
                            <SingleCardsView />
                    </Link>

                    <Link to="/users" className="link">
                            <UserTableView />
                    </Link> 

                    <Link to="/coin" className="link">
                            <SingleCoinView />
                    </Link>
                    <Link to="/payments" className="link">
                             <PaymentsTransactionCard />
                    </Link> 
                    <Link to="/transactions" className="link">
                             <TransactionCards/>
                    </Link> 
                  
              </div>

            </div>
        )
    }

}



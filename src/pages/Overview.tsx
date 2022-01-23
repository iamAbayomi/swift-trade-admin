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
import SingleTransactionOverview from '../components/SingleTransactionsOverview'
import TransactionOverview from '../components/TransactionOverview'

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
                    
                    <SingleTransactionOverview />

                    <ConversionRate />
                    
                    <div className="wallet-row display-flex">
                        <Link to="/settings/notification" className="link">
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
                            <SingleCoinView coinImages={null} />
                    </Link>
                    <Link to="/payments" className="link">
                             <PaymentsTransactionCard />
                    </Link> 
                    <Link to="/transactions" className="link">
                             <TransactionOverview />
                    </Link> 
                  
              </div>

            </div>
        )
    }

}



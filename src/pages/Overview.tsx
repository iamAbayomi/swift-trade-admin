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
import { useAppSelector } from '../redux/hooks'
import { showCurrentUsers } from '../redux/reducers/UsersSlice'

function Overview() {
    
        const currentUser : any = useAppSelector(showCurrentUsers)
    return(
        <div className="container">
            <div className="contents" >
                {/* <DashboardHeaderText text={'Hello, RAMON RIDWAN'}/> */}
                <p className="username-intro">
                {`Hello, ${currentUser.first_name} ${currentUser.last_name} `}</p>
                    <p className="dashboard-title">Overview</p>
                    
                    <SingleTransactionOverview />

                    <ConversionRate />
                    
                    <div className="wallet-row display-flex">
                        <Link to="/settings/notification" className="link">
                            <NotificatonCard />
                        </Link>
                        
                    </div>
                    <Link to="/cards" className="link">
                            <SingleCardsView showCardsTitle={true} />
                    </Link>

                    <Link to="/users" className="link">
                            <UserTableView showUserTitle={true} />
                    </Link> 

                    <Link to="/coin" className="link">
                            <SingleCoinView coinTitle={true}  />
                    </Link>
                    
                    <Link to="/transactions" className="link">
                             <TransactionOverview />
                    </Link> 
                  
              </div>

            </div>
        )

}


export default Overview
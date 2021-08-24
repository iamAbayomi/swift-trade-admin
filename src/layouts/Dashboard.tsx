/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import './Dashboard.css'

import Overview from '../pages/Overview'
import Users from  '../pages/Users'
import Cards from  '../pages/Cards'
import Coins from '../pages/Coins'
import Payments from '../pages/Payments'
import Transactions from '../pages/Transactions'
import Settings from '../pages/Settings'
import Logout from '../pages/Logput'


import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    // BrowserRouter
  } from 'react-router-dom';


import styled from 'styled-components'

export default class Dashboard extends React.Component{


render(){
    return(
      <Router>
        <div className="container">
            <div className="header-bar">
                <img className="logo" src="logo.svg" />
                <div className="header-tool">
                    <div className="search-bar">
                        <div className="search-content">
                            <div className="search-logo-and-highlight">
                            <img className="search-logo" src="/vectors/search-icon.svg"/>
                            <input className="search-highlight" 
                            placeholder="Search e.g card"
                            />
                            </div>
                        </div>
                    </div>
                    <div className="profile-section">
                        <img className="profile-image" src="/vectors/profile-image.svg" />
                        <p className="username">
                            Ramon
                        </p>
                    </div>
                    <img className="notifications-icon" src="/vectors/notifications.svg" />
                </div>
            </div>
            <div className="content">
                <div className="side-menu">
                    <div className="menu-items-content">
                        <NavLink to="/overview" className="menu-item" activeClassName="selected">
                            <img className="menu-icon" src="/vectors/overview.svg" alt="" />
                            <p className="menu-title">
                                Overview
                            </p>
                        </NavLink>

                        <NavLink to="/users" className="menu-item" activeClassName="selected">
                            <img className="menu-icon" src="/vectors/trade.svg" alt="" />
                            <p className="menu-title">
                                Users
                            </p>
                        </NavLink>

                        <NavLink to="/cards" className="menu-item "activeClassName="selected">
                            <img className="menu-icon" src="/vectors/wallet.svg" alt="" />
                            <p className="menu-title">
                                Cards
                            </p>
                        </NavLink>

                        <NavLink to="/coins" className="menu-item " activeClassName="selected">
                            <img className="menu-icon" src="/vectors/transactions.svg" alt="" />
                            <p className="menu-title">
                                Coins
                            </p>
                        </NavLink>

                        <NavLink  to="/payments" className="menu-item " activeClassName="selected">
                          <img className="menu-icon" src="/vectors/settings.svg" alt="" />
                            <p className="menu-title">
                                Payments
                            </p>
                        </NavLink>

                        <NavLink to="/transactions" className="menu-item " activeClassName="selected">
                            <img className="menu-icon" src="/vectors/logout.svg" alt="" />
                            <p className="menu-title">
                                Transactions
                            </p>
                        </NavLink>

                        <NavLink to="/settings" className="menu-item " activeClassName="selected">
                            <img className="menu-icon" src="/vectors/logout.svg" alt="" />
                            <p className="menu-title">
                                Settings
                            </p>
                        </NavLink>

                        <NavLink to="/logout" className="menu-item " activeClassName="selected">
                            <img className="menu-icon" src="/vectors/logout.svg" alt="" />
                            <p className="menu-title">
                                Logout.
                            </p>
                        </NavLink>
                    </div>
                </div>
                <div className="main-section">
                    <Switch>
                        <Route exact path ="/" component={Overview} />
                        <Route path ="/overview" component={Overview} />
                        <Route path="/users"  component={Users} />
                        <Route exact path="/trade"  component={Coin} />
                        <Route path="/trade/coin/buy"  component={Sell} />
                        <Route path="/trade/coin"  component={Coin} />
                        <Route path="/test/page" component={TestPage} />
                        {/* <Route exact path="/pendingwallet" component={} />
                        <Route exact path="/approvedwallet" component={} />
                        <Route exact path ="/pendingtransfer" component={PendingTransfer} />
                        <Route exact path="/approved" component={} />
                        <Route exact path ="/makepayment" component={} />
                        <Route exact path ="/makepayment3" component={} />
                        <Route exact path ="/makepayment4" component={} /> */}
                        {/* <Route exact path="/pendingcards1" component={SellCards} />
                        <Route exact path="/pendingcards2" component={SellCards} /> */}
                        {/* <Route exact path="/trade/cards"  component={Cards} />
                        <Route exact path="/trade/cards2" component={SellCards} />
                        <Route exact path="/wallet/emptystate" component={WalletEmptyState} />
                        <Route exact path="/wallet" component={Wallet} />
                        <Route exact path="/transactions" component={Transactions} /> */}
                        {/* <Route exact path="/settings/profile" component={Settings} /> */}
                        {/* <Route exact path="/settings/:slug" component={Settings} /> */}
                        {/* <Route exact path="/settings" component={Settings} /> */}
                        {/* <Route path="/settings" component={Settings} /> */}
                        {/* <Route exact path="/settings/bankaccount" component={BankAccount} /> */}
                        {/* <Route exact path="/settings/profile" component={Profile} />
                        <Route exact path="/settings/bankaccount" component={BankAccount} />
                        <Route exact path="/settings/notification" component={Notification} />
                        <Route exact path="/settings/activity" component={ActivityLog} /> */}

                    </Switch>
                    <ImgButton src="/vectors/message-button.svg" />
                </div>
            </div>
        </div>
        </Router>
    )
}

}


const ImgButton = styled.img `
    position: fixed;
    bottom: 50px;
    right: 30px;
`
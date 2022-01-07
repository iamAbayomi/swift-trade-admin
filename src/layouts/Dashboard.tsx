/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import './Breakpoint.css'
import './Dashboard.css'

import Overview from '../pages/Overview'
import Users from  '../pages/Users'
import Cards from  '../pages/Cards'
import Coins from '../pages/Coins'
import Payments from '../pages/Payments'
import Transactions from '../pages/Transactions'
import Settings from '../pages/Settings'
import Logout from '../pages/Logout'


import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    // BrowserRouter
  } from 'react-router-dom';


import styled from 'styled-components'
import AddCards from '../pages/AddCards'
import AddCoins from '../pages/AddCoins'
import ModalFormWithCards from '../components/ModalFormWithCards'
import Form from '../pages/Form'
import { getUser, getUserData, removeUserData } from '../classes/User'
import SingleUser from '../pages/SingleUser'

/*
    The entry point of the application. The componentDidMount is 
    called after the web page is rendered.
    
    The flow of the application starts by getting the user's path, then
    checking if it starts with token, redirecting it to the homepage if the 
    token is present and storing the user data received in cookies on 
    logining to the application, then redirecting if it is not.
*/


export default class Dashboard extends React.Component{
    // Properties of the Dashboard saved in the user state
    state ={
        isActive: false,
        user: {
            id: '',
            first_name: '',
            last_name: '',
            profile_image: ''
        },
        temptoken: ''
    }

    componentDidMount(){
        // Get the name of the path from the web page and the user data
        this.getPathName()
    }

    
    getPathName(){
        // get the path name to check for the token
        let pathname = window.location.pathname
        // if the pathname starts with the token
        if(pathname.startsWith('/token/')){
            // redirect the user to the homepage
            let token = window.location.pathname.replace('/token/','')
            /*
                This getUserData method is in the user class
                and it gets the data from the user api request
                and it saves the data in the cookies
            */ 
            getUserData(this.state.user, token)
        }else{
             // This checks if the user is authenticated and 
            // redirects the user to the homepage
            this.isUserAuthenticated()
        }
    }


    // this toggles the user side dashboard state
    showDashboard(){
        this.setState({ isActive : !this.state.isActive })
    }

    // this checks if the user is authenticated
    async isUserAuthenticated(){
        // aysnchronous method to get user data stored in cookies
        let tempUser = await getUser()
        // this stores the temporary state of the user in the 
        // state of the application
        this.setState({user: tempUser})
        // checks if the users state is stored in the application.
        if(this.state.user){
            console.log('it is safe to access this page')
            console.log(this.state.user)
        }else{
            // redirects the user to the homepage
            window.location.href ="https://swift-homepage.netlify.app/"
        }
    }
    
    // Log the user out of the application.
    logOut(){
        removeUserData('token', 'userData')
        // Redirect the user to the home page
        window.location.href = "/"
    }

    render(){
        return(
        <Router>
            <div className="container">
                <div className="header-bar">
                    <img className="menu-toggle" id="toggle-menu" 
                            src="/vectors/menu.svg"
                            onClick={this.showDashboard.bind(this)}
                        />
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
                        <div className="profile-section" style={{display : 'flex'}}>
                            <img className="profile-image" src="/vectors/profile-image.svg" />
                            <p className="username">
                                Ramon Ridwan
                            </p>
                        </div>
                        <img className="notifications-icon" src="/vectors/notifications.svg" />
                    </div>
                </div>
                <div className="content">
                    <div className={`side-menu ${this.state.isActive ? "is-open" : "" }`}>
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
                        <div className= "dashboard-contents">
                            <Switch>
                                <Route exact path ="/" component={Overview} />
                                <Route path ="/overview" component={Overview} />
                                <Route path="/users/singleuser" component={SingleUser} />
                                <Route path="/users"  component={Users} />
                                <Route exact path="/cards"  component={Cards} />
                                <Route path="/coins"  component={Coins} />
                                <Route path="/payments"  component={Payments} />
                                <Route path="/transactions" component={Transactions} />
                                <Route path="/settings" component={Settings} />
                                <Route path="/logout" component={Logout} />
                                <Route path="/addcards/:tokenId/:tokenImage" component={AddCards} />
                                <Route path="/addcards" component={AddCards} />
                                <Route path="/addcoins" component={AddCoins} />
                                <Route path="/form" component={Form} />
                                <Route path="/modalform" component={ModalFormWithCards} />
                                <Route exact path ="/token/:token" component={Overview} />
                                

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
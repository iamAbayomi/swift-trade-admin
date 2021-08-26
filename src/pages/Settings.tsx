/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Profile from '../components/Profile'
import Notification from '../components/Notification'
import ActivityLog from '../components/Activitylog'
import './Settings.css'
import './Overview.css'
import { NavLink, Route, Switch } from 'react-router-dom'

import { createBrowserHistory } from 'history'


const history = createBrowserHistory() 

export default class Settings extends React.Component{
    
    state={
        params: ''
    }
    componentDidMount(){
        console.log(this.props)
        // history.go('/settings/profile')
    }
    render(){
        return(
            <div className="container">
                <div className="contents">
                <p className="dashboard-title" >Settings</p>
                <div className="settings-section card-white" >
                    <div className="header-nav display-flex">
                            {/* <NavLink to="setting/profile" activeClassName="settings-link"><p>Profile</p></NavLink>
                            <NavLink to="settings/bankaccount" activeClassName="settings-link" ><p>Bank Account</p></NavLink>
                            <NavLink to="settings/notification" activeClassName="settings-link"><p>Notification</p></NavLink>
                            <NavLink to="settings/activity"  activeClassName="settings-link"><p>Activity Log</p></NavLink> */}
                            <NavLink to="/settings/profile" activeClassName="settings-link"><p>Profile</p></NavLink>
                            <NavLink to="/settings/notification" activeClassName="settings-link"><p>Notification</p></NavLink>
                            <NavLink to="/settings/activity"  activeClassName="settings-link"><p>Activity Log</p></NavLink>
                    </div>
                    {/* <div className="divider" /> */}
            </div>
                <div className="settings-section"> 
                <Switch>  
                        <Route  path="/settings/profile" component={Profile}/>
                        <Route path="/settings/notification" component={Notification}/>
                        <Route path="/settings/activity" component={ActivityLog}/>
                        
                </Switch> 
                </div>
            </div>
        </div>
        )
    }
}

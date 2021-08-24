import React from "react";
import { NavLink } from "react-router-dom";


export default class SettingsHeader extends React.Component{
    

    render(){
        return(
            <div className="settings-section card-white" >
                    <div className="header-nav display-flex">
                            {/* <NavLink to="setting/profile" activeClassName="settings-link"><p>Profile</p></NavLink>
                            <NavLink to="settings/bankaccount" activeClassName="settings-link" ><p>Bank Account</p></NavLink>
                            <NavLink to="settings/notification" activeClassName="settings-link"><p>Notification</p></NavLink>
                            <NavLink to="settings/activity"  activeClassName="settings-link"><p>Activity Log</p></NavLink> */}
                            <NavLink to="setting/" activeClassName="settings-link"><p>Profile</p></NavLink>
                            <NavLink to="settings/bankaccount" activeClassName="settings-link" ><p>Bank Account</p></NavLink>
                            <NavLink to="settings/notification" activeClassName="settings-link"><p>Notification</p></NavLink>
                            <NavLink to="settings/activity"  activeClassName="settings-link"><p>Activity Log</p></NavLink>
                    </div>
                    {/* <div className="divider" /> */}
            </div>
        )
    }
}
import axios from 'axios'
import React, { ChangeEvent } from 'react'
import styled from 'styled-components'
import { getToken } from '../classes/User'
import './BankAccount.css'

export default class Notification extends React.Component{
    
    state = {
        approve_fund_push_notification: false,
        approve_fund_email_notification: false,
        buy_sell_push_notification: false,
        buy_sell_email_notification: false,
    }

    componentDidMount(){
        this.getNotificationSetting()    
    }

    async getNotificationSetting(){
        let token = await getToken()
        axios.get('https://swift-trade-v1.herokuapp.com/api/v1/notification-settings',
             {headers:{'Authorization' : `Bearer ${token}`  }})
            .then((res: any) => {
                console.log('This is the response', res)   
                this.setNotification(res) 
            })
            .catch((err)=>{
                console.log(err)
            })
    }

    setNotification(res: any){
        this.setState({approve_fund_push_notification: res.data.data.approve_fund_push_notification})
        this.setState({ approve_fund_email_notification : res.data.data.approve_fund_email_notification})
        this.setState({ buy_sell_push_notification : res.data.data.buy_sell_push_notification})
        this.setState({ buy_sell_email_notification : res.data.data.buy_sell_email_notification})
    }

    async updateNotificationSetting(){
        let token = await getToken()
        axios.patch('https://swift-trade-v1.herokuapp.com/api/v1/notification-settings/update', {
            approve_fund_push_notification: this.state.approve_fund_push_notification,
            approve_fund_email_notification:  this.state.approve_fund_email_notification,
            buy_sell_push_notification: this.state.buy_sell_push_notification,
            buy_sell_email_notification: this.state.buy_sell_email_notification
        }, {headers: {'Authorization' : `Bearer ${token}`}})
        .then((res) => {
            console.log('This is the response', res)    
        })
        .catch((err)=>{
            console.log(err)
        })
    }


    approve_fund_push_notification(event: ChangeEvent<HTMLInputElement>){
        this.setState({approve_fund_push_notification: !this.state.approve_fund_push_notification})
        console.log(this.state.approve_fund_push_notification)
        console.log(event.target.value)
        this.updateNotificationSetting()
    }
    approve_fund_email_notification(event: ChangeEvent<HTMLInputElement>){
        this.setState({ approve_fund_email_notification : !this.state.approve_fund_email_notification})
        this.updateNotificationSetting()
    }
    buy_sell_push_notification(event: ChangeEvent<HTMLInputElement>){
        this.setState({ buy_sell_push_notification : !this.state.buy_sell_push_notification})
        this.updateNotificationSetting()
    }
    
    buy_sell_email_notification(event: ChangeEvent<HTMLInputElement>){
        this.setState({ buy_sell_email_notification : !this.state.buy_sell_email_notification})
        this.updateNotificationSetting()
    }


    render(){
        return(
            <NotificationSection className="full-page-view">
                <div className="card-white">
                <div className="notification-section">
                    <div className="display-flex">
                        <p>Notification Type</p> 
                        <p>Push Notfication</p>
                        <p>Email Alert</p>
                        </div>

                        <div className="display-flex" >
                            <p>Approve Funds </p> 
                            <label className="switch">
                                <input 
                                    type="checkbox" 
                                    value="true"
                                    onChange={this.approve_fund_push_notification.bind(this)} 
                                    checked={this.state.approve_fund_push_notification}/>
                                <span className="slider round"></span>
                            </label>
                            <label className="switch">
                                <input 
                                    type="checkbox" 
                                    onChange={this.approve_fund_email_notification.bind(this)} 
                                    value="true"
                                    checked={this.state.approve_fund_email_notification}/>
                                <span className="slider round"></span>
                            </label>

                        </div>
                        
                        <div className="display-flex" >
                            <p>Buy/Sell</p> 
                            <label className="switch slider-space">
                                <input 
                                    type="checkbox" 
                                    value="true"
                                    onChange={this.buy_sell_push_notification.bind(this)} 
                                    checked={this.state.buy_sell_push_notification}/>
                                <span className="slider round"></span>
                            </label>
                            <label className="switch">
                                <input 
                                    type="checkbox" 
                                    value="true"
                                    onChange={this.buy_sell_email_notification.bind(this)} 
                                    checked={this.state.buy_sell_email_notification}/>
                                <span className="slider round"></span>
                            </label>

                        </div>
                    </div>  
                    

                </div>
        </NotificationSection>
        )
    }
}


const NotificationSection = styled.div `

`
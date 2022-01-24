/* eslint-disable jsx-a11y/alt-text */
import axios from 'axios'
import React from 'react'
import { getToken } from '../classes/User'
import './BankAccount.css'
import SettingsHeader from './SettingsHeader'
import UpdateBankAccount from './ui-components/cards/UpdateBankAccount'


export default class BankAccount extends React.Component{

    state = {
        showModal : false,
        bankDetails: [{
            "id": 55,
            "userId": "aa8dd1c8-d23c-4aa3-9fe1-4996481a04d3",
            "bank": "Access Bank",
            "bank_code": "044",
            "account_name": "John Doe",
            "account_number": 246830291,
            "created_at": "2021-10-28T23:52:15.020Z",
            "updated_at": "2021-10-28T23:52:15.020Z",
            "deleted_at": null
        }],
        bankStatus: 0
    }

    componentDidMount(){
        this.getUserDetails()
    }

    async getUserDetails(){
        let token = await getToken()
        axios.get('https://swift-trade-v1.herokuapp.com/api/v1/bank-accounts/', {
            headers: {'Authorization' : `Bearer ${token}`}})
            .then((res: any) => {
                console.log('This is the response', res)
                this.setState({
                    bankDetails: res.data.data,
                    bankStatus: res.status
                })
                console.log('This is the response', res.data.data)
            })
            .catch((err)=>{console.log(err)})
    }

    UpdateBankAccount(){
        this.setState({
            showModal: !this.state.showModal            
        })
    }

    deleteUserBank(){
        axios.get('https://swift-trade-v1.herokuapp.com/api/v1/bank-accounts/delete')
            .then((res) => {
                  console.log('This is the response', res)  
            })
            .catch((err)=>{

            })
    }

    render(){
        return(
            <div className="section ">
                    <div className="bank-account-section">
                            <div className="bank-display">
                                <img className="bank-image" src="/vectors/gtbank.svg" />
                                <div className="bank-details">
                                    {/* <p>GUARANTY TRUST BANK</p>
                                    <p>004 XXXX 475</p> */}
                                    {
                                        this.state.bankStatus === 200 ? <div>
                                        <p>{this.state.bankDetails[0].bank}</p>
                                        <p>{this.state.bankDetails[0].account_number}</p>
                                        <p>{this.state.bankDetails[0].account_name}</p>
                                    </div> : <div> <p>Add your bank account below</p> </div>

                                    }
                                    
                                </div>
                            </div>
                    </div>
            </div>
        )
    }
}
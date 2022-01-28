/* eslint-disable jsx-a11y/alt-text */
import axios from 'axios'
import React from 'react'
import { getToken } from '../classes/User'
import './BankAccount.css'

import SettingsHeader from './SettingsHeader'
import UpdateBankAccount from './ui-components/cards/UpdateBankAccount'

type props = {
    bankDetails  : {
        "id": 55,
        "userId": "aa8dd1c8-d23c-4aa3-9fe1-4996481a04d3",
        "bank": "Access Bank",
        "bank_code": "044",
        "account_name": "John Doe",
        "account_number": 246830291,
        "created_at": "2021-10-28T23:52:15.020Z",
        "updated_at": "2021-10-28T23:52:15.020Z",
        "deleted_at": null
    
    }
}


const BankAccount: React.FC<props> = (props) => {
        
        return(
            <div className="section card-white">
                    <div className="bank-account-section">
                            <div className="bank-display">
                                <img className="bank-image" src="/vectors/bank.svg" />
                                <div className="bank-details">
                                    {/* <p>GUARANTY TRUST BANK</p>
                                    <p>004 XXXX 475</p> */}
                                    {
                                        props.bankDetails ? <div>
                                        <p>{props.bankDetails.bank}</p>
                                        <p>{props.bankDetails.account_number}</p>
                                        <p>{props.bankDetails.account_name}</p>
                                    </div> : <div> <p>Add your bank account below</p> </div>

                                    }
                                    
                                </div>
                            </div>
                    </div>
            </div>
        )
    }


export default BankAccount
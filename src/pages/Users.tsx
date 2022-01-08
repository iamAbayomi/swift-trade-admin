/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import TransactionCards from '../components/TransactionCard'
import './Overview.css'
import '../layouts/Transaction.css'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import UserTableView from '../components/UserTableView'
import axios from 'axios'
import { getToken } from '../classes/User'

type typeState = {
    transactionRow: any
}

export default class Users extends React.Component<typeState>{
    
    

    render(){
        return(
            <div>
                <div className="container">
                  <div className="contents">
                  <TradeSpace>
                    <div className="display-flex">
                        <p className="dashboard-title" >Users</p>
                        <Link to="/trade"  className="no-text">
                            
                        </Link>
                    </div>   
                    <UserTableView />
                    </TradeSpace>
                    </div>
                    
                </div>
                
            </div>
        )
    }
}



const TradeSpace = styled.div `
    margin-top: 60px;
`
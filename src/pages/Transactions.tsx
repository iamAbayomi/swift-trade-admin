/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import './Overview.css'
import '../layouts/Transaction.css'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'
import TransactionOverview from '../components/TransactionOverview'

export default class Transactions extends React.Component{
    
    

    render(){
        return(
            <div>
                <div className="container">
                  <div className="contents">
                  <TradeSpace>
                    <div className="display-flex">
                    <p className="dashboard-title" >Transactions</p>
                    <Link to="/trade"  className="no-text">
                    </Link>
                    </div>   
                        <TransactionOverview />
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
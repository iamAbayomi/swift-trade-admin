/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import TransactionCards from '../components/TransactionCard'
import './Overview.css'
import '../layouts/Transaction.css'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import PaymentsTransactionCard from '../components/PaymentsTransactionCard'

export default class Payments extends React.Component{
    render(){
        return(
            <div>
                <div className="container">
                  <div className="contents">
                  <TradeSpace>
                    <div className="display-flex">
                    <p className="dashboard-title" >Payments</p>
                    <Link to="/trade"  className="no-text">
                        {/* <button className="green-button display-flex">
                            <img className="add-icon" src="/vectors/add-icon.svg" />
                            <p>Place New</p>
                        </button> */}
                    </Link>
                    </div>   
                        <PaymentsTransactionCard/>
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
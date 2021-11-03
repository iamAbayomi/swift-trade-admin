/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import TransactionCards from '../components/TransactionCard'
import './Overview.css'
import '../layouts/Transaction.css'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'
import TransactionOverview from '../components/TransactionOverview'

export default class Transactions extends React.Component{
    
    state = {
        transaction: {}
    }

    componentDidMount(){
        this.getTransactions()
    }
    
    getTransactions(){
        axios.get('https://swift-trade-v1.herokuapp.com/api/v1/transaction')
        .then((res) => {
            console.log('This is the response', res)    
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    render(){
        return(
            <div>
                <div className="container">
                  <div className="contents">
                  <TradeSpace>
                    <div className="display-flex">
                    <p className="dashboard-title" >Transactions</p>
                    <Link to="/trade"  className="no-text">
                        {/* <button className="green-button display-flex">
                            <img className="add-icon" src="/vectors/add-icon.svg" />
                            <p>Place New</p>
                        </button> */}
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
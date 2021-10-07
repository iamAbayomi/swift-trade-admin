/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import TransactionCards from '../components/TransactionCard'
import './Overview.css'
import '../layouts/Transaction.css'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import UserTableView from '../components/UserTableView'
import axios from 'axios'

export default class Users extends React.Component{
    componentDidMount(){
        axios.patch('https://swift-trade-v1.herokuapp.com/api/v1/role/update',{
            role: "admin",
            userID:"da96b92a-0bb2-4586-bddd-60a400a94b38"

        }).then((res)=>{
                console.log('This is the data', res.data)
            })
            .catch((err) => {
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
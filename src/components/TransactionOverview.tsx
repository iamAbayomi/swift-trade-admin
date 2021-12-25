import axios from "axios";
import React from "react";
import { getToken } from "../classes/User";
import EmptyStateTrasanctionCards from "./EmptyStateTransactionCard";
import TransactionCards from "./TransactionCard";


export default class TransactionOverview extends React.Component{
    state={
        transaction: false,
        token: '',
        response: 0
    }
    
    componentDidMount(){
        this.getTransactions()
        this.setTokenState()
    }
    
    setTokenState(){
        this.setState({
            token: getToken()
        })
    }

    async getTransactions(){
        console.log("this is the token " + getToken())    
        let token = await getToken()
        axios.get('https://swift-trade-v1.herokuapp.com/api/v1/transaction',{
            headers: {
                'Authorization' : `Bearer ${token}`
            }})
            .then((res: any) => {
                console.log('This is the user response', res)  
                this.setState({transaction: res.data})
                this.setState({response: res.status})
            })
            .catch((err)=>{
                console.log(err)
            })
    }

    render(){
        return(
            <div> 
                {
                    this.state.response === 200 ?<TransactionCards transaction={null} transactionRow={null} token="" data="" /> 
                    : <EmptyStateTrasanctionCards />
                }
                
                
            </div>
        )
    }
}
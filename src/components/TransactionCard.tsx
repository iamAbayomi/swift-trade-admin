/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import MUIDataTable from  "mui-datatables";
import styled from  'styled-components'
import Chips from './Chips';
import axios from 'axios';
import { getToken } from '../classes/User';
import moment from 'moment';

type typeState = {
    transaction: any,
    token: '',
    data: '',
    transactionRow: any
}

export default class TransactionCards extends React.Component<typeState>{
    
    state :  typeState={
        transaction: [],
        token: '',
        data: '',
        transactionRow: []
    }
    
    componentDidMount(){
        this.getTransactions()
        this.setTokenState()
    }
    
    setTokenState(){
        this.setState({token: getToken()})
    }

    
    setTransactionsData(transactionData: any){
        // Adding the a single user transaction data to the temporary data.
        transactionData.map((item : any)=>(
            data.push([this.formatDate(item.created_at), item.reference, item.type,"$ " + item.amount, <Chips userId={item.id} chipsText={item.status} backgroundColor="rgba(93, 248, 136, 1)" />])
        ))
        this.setState({ transactionRow: data })
        console.log(data)
    }

    formatDate(unformattedData : any){
        // let date = new Date(unformattedData)
        let formattedDate = moment(unformattedData).format('DD-MM-YYYY')
        console.log(formattedDate)
        return formattedDate
    }

    async getTransactions(){
        // console.log("this is the token " + getToken())    
        let token = await getToken()
        axios.get('https://swift-trade-v1.herokuapp.com/api/v1/transaction',{
            headers: {
                'Authorization' : `Bearer ${token}`
            }})
            .then((res: any) => {
                console.log('This is the user response', res)  
                this.setState({transaction: res.data.data})
                this.setTransactionsData(res.data.data)
            })
            .catch((err)=>{
                console.log(err)
            })
    }

    render(){
        return(
            <div className="margin-top">
                <div className="transaction-board card-white margin-top">
                        <p className="transaction-text">Transactions</p>
                        {/* <div className="transaction-head-table transaction-ids display-flex">
                            <p>Date</p>
                            <p>Transaction ID</p>
                            <p>Type</p>
                            <p>Value</p>
                            <p>Status</p>
                        </div> */}      
                        <MUIDataTable 
                            title={""}             
                            data={this.state.transactionRow}
                            // data={data}
                            columns={columns}
                            options = {options}
                            />
                        <Button className="blue-button" >View More </Button>
                </div>
            </div>
        )
    }
}


const columns = ["Date", "Transaction", "Type", "Value", "Status"]

const data: any[][] = [
    // ["14/01/2019", "12345678", "Bitcoin", "$100", <Chips chipsText="Completed" backgroundColor="rgba(93, 248, 136, 1)" />],
    // ["14/01/2019", "12345678", "Amazon", "$100", <Chips chipsText="Failed" backgroundColor="rgba(255, 73, 73, 1)" />],
    // ["14/01/2019", "12345678", "Bitcoin", "$100", <Chips chipsText="In Progress" backgroundColor="#010066" />],
    // ["14/01/2019", "12345678", "Etherum", "$100", <Chips chipsText="Completed" backgroundColor="rgba(93, 248, 136, 1)" />]
]


const Button = styled.button `
    margin: 40px auto 10px auto;
`



const options = {
    elevation: 0
}


function formattedDate(formattedDate: string) {
    throw new Error('Function not implemented.');
}


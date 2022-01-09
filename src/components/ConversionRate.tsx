/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
// import Transactions from '../pages/Transactions';
import styled from 'styled-components'
import MUIDataTable from  "mui-datatables";
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import {createTheme} from '@material-ui/core/styles'
import { getToken } from '../classes/User';
import axios from 'axios';
import { muiTableOptionType } from '../classes/Utilities';

const data: (string[] | object[] | number[])[]= []

export default class ConversionRate extends React.Component {

    getMuiTheme = () => createTheme({
        overrides:{
            MuiTableCell: {
                root :{
                    borderBottom: "none"
                }
            },
            MuiPaper :{
                root:{
                    width: "100%"   
                }
            }
        }
    })

    state = {
        coin: "",
        card: "",
        conversionRateData: []
    }

    componentDidMount(){
        this.getCards()
    }

    async getCards(){
        let token = await getToken()
        axios.get('https://swift-trade-v1.herokuapp.com/api/v1/cards', {
             headers: {'Authorization' : `Bearer ${token}`
            }}).then((res: any) => {
                this.setState( { card: res.data.data})
                this.getCoins( this.state.card)
                console.log('this is the response of the cards', res)
            })
            .catch((err)=>{console.log(err)})
    }
    
    async getCoins( card : any){
        let token = await getToken()
        axios.get('https://swift-trade-v1.herokuapp.com/api/v1/coins',{
            headers:{'Authorization' : `Bearer ${token}`}})
            .then((res: any) => {
                this.setState({coin: res.data.data})
                this.setConverstionRate(card , this.state.coin)
                console.log('This is the response', res)
            })
            .catch((err)=>{console.log(err)})
        
    }

    setConverstionRate(card: any, coin: any){
        card.map((item: any) => {
            data.push([item.name," " ,item.rate])
        })

        coin.map((item: any) => {
            data.push([item.name, " " , item.rate])
        })

        this.setState({conversionRateData : data})
    }




    
    render(){
        return(
                <div className="conversion-board card-white">
                    <div className="">
                        <div className="display-flex"> 
                            <p style={{ fontSize: "14px"} } className="conversion-title">Conversion Rate to Naira</p>
                            <TransactionOptions className="transaction-options" src="/vectors/options-menu.svg" />
                        </div>
                        <ClearFix>
                            <div className="display-flex-withoutspace">    
                                <MuiThemeProvider theme={this.getMuiTheme()}>
                                    <MUIDataTable
                                        title={""}    
                                        data={this.state.conversionRateData}
                                        columns={columns}
                                        options = {options}
                                    />
                                </MuiThemeProvider>
                                <img className="forward-button" src="./vectors/forward-button.svg" />
                            </div>
                        </ClearFix>
                    </div>
                </div>
            )
    }
}

// const columns = ["iTunes Card", "", "Amazon Card", "" ,"Bitcoin", ""]

const columns = ["Card", " " ,"Rate"]

// const data = [
//     ["USA Physical",   "N400.00", "USA Physical",   "N400.00", "Bitcoin BTC",  " N400.00"],
//     ["USA E-Code Card",   "N400.00", "USA E-Code Card",   "N400.00", "Bitcoin BTC",   "N400.00"],
//     ["UK Physical Card",    "N400.00", "UK Physical Card",   "N400.00", "Bitcoin BTC",   "N400.00"],
//     ["UK E-Code Card",   "N400.00", "UK E-Code Card",   "N400.00", "Bitcoin BTC",   "N400.00"]
// ]

const options : muiTableOptionType = {
    elevation: 0,
    rowsPerPage: 5,
    responsive: 'standard'
}

const TransactionOptions = styled.img `
    margin: 10px 0px 20px 10px;

`


const ClearFix = styled.div `
    clear:both;
`



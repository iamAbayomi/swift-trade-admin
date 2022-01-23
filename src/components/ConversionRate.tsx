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
import { useAppSelector } from '../redux/hooks';
import { selectAllCards } from '../redux/reducers/CardsSlice';
import { selectAllCoins } from '../redux/reducers/CoinsSlice';

const data: (string[] | object[] | number[])[]= []

function ConversionRate() {
    const card = useAppSelector(selectAllCards)
    const coin = useAppSelector(selectAllCoins)
    console.log("This is the card response ", card)

    setConverstionRate(card, coin)
    function setConverstionRate(card: any, coin: any){
        card.map((item: any) => {
            data.push([item.name," " ,item.rate])
        })

        coin.map((item: any) => {
            data.push([item.name, " " , item.rate])
        })
   
    }

        return(
                <div className="conversion-board card-white">
                    <div className="">
                        <div className="display-flex"> 
                            <p style={{ fontSize: "14px"} } className="conversion-title">Conversion Rate to Naira</p>
                            <TransactionOptions className="transaction-options" src="/vectors/options-menu.svg" />
                        </div>
                        <ClearFix>
                            <div className="display-flex-withoutspace">    
                                
                                    <MUIDataTable
                                        title={""}    
                                        data={data}
                                        columns={columns}
                                        options = {options}
                                    />
                                
                                <img className="forward-button" src="./vectors/forward-button.svg" />
                            </div>
                        </ClearFix>
                    </div>
                </div>
            )
    }


export default ConversionRate

const columns = ["Card", " " ,"Rate"]

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



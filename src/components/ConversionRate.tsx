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

let data: (string[] | object[] | number[])[]= []

function ConversionRate () {

    const card = useAppSelector(selectAllCards)
    const coin = useAppSelector(selectAllCoins)

    console.log('Array of cards ', card)

    const getMuiTheme = () => createTheme({
        overrides:{
            MuiTableCell: { root :{ borderBottom: "none"}},
            MuiPaper :{
                root:{
                    width: "100%"   
                }
            }
        }
    })

    data = setConverstionRate(card, coin)
    function setConverstionRate(card: any, coin: any){
        const tempData : any[][] = []
        card.map((item: any) => {
            tempData.push([item.name," " ,item.rate])
        })

        coin.map((item: any) => {
            tempData.push([item.name, " " , item.rate])
        })
        return tempData
    }

        return(
                <div className="conversion-board card-white">
                    <div className="">
                        <div className="display-flex"> 
                            <p style={{ fontSize: "14px"} } className="conversion-title">Conversion Rate to Naira</p>
                            {/* <TransactionOptions className="transaction-options" src="/vectors/options-menu.svg" /> */}
                        </div>
                        <ClearFix>
                            <div className="display-flex-withoutspace">    
                                <MuiThemeProvider theme={getMuiTheme()}>
                                    <MUIDataTable
                                        title={""}    
                                        data={data}
                                        columns={columns}
                                        options = {options}
                                    />
                                </MuiThemeProvider>
                                {/* <img className="forward-button" src="./vectors/forward-button.svg" /> */}
                            </div>
                        </ClearFix>
                    </div>
                </div>
            )
}

export default ConversionRate

// const columns = ["iTunes Card", "", "Amazon Card", "" ,"Bitcoin", ""]

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




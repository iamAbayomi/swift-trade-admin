/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
// import Transactions from '../pages/Transactions';
import styled from 'styled-components'
import MUIDataTable from  "mui-datatables";

export default class ConversionRate extends React.Component {
    render(){
        return(
                <div className="conversion-board card-white">
                    <div className="">
                        <div className="display-flex"> 
                            <p className="conversion-title">Conversion Rate to Naira</p>
                            <TransactionOptions className="transaction-options" src="/vectors/options-menu.svg" />
                        </div>
                        <ClearFix>
                            <MUIDataTable
                                title={"Conversation Rate"}    
                                data={data}
                                columns={columns}
                            />
                        </ClearFix>
                    </div>
                </div>
            )
    }
}

const columns = ["iTunes Card", "Amazon Card", "Bitcoin"]

const data = [
    ["USA Physical   N400.00", "USA Physical   N400.00", "Bitcoin BTC    N400.00"],
    ["USA E-Code Card   N400.00", "USA E-Code Card   N400.00", "Bitcoin BTC   N400.00"],
    ["UK Physical Card    N400.00", "UK Physical Card   N400.00", "Bitcoin BTC   N400.00"],
    ["UK E-Code Card   N400.00", "UK E-Code Card   N400.00", "Bitcoin BTC   N400.00"]

]

const TransactionOptions = styled.img `
    margin: 10px 0px 20px 10px;

`


const ClearFix = styled.div `
    clear:both;
`


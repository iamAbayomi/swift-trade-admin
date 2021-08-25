/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import MUIDataTable from  "mui-datatables";
import styled from  'styled-components'

export default class UserTableView extends React.Component{
    render(){
        return(
            <div className="margin-top">
                <div className="transaction-board card-white margin-top">
                        <p className="transaction-text">Users</p>
                        {/* <div className="transaction-head-table transaction-ids display-flex">
                            <p>Date</p>
                            <p>Transaction ID</p>
                            <p>Type</p>
                            <p>Value</p>
                            <p>Status</p>
                        </div> */}      
                        <MUIDataTable 
                            title={""}             
                            data={data}
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

const data = [
    ["14/01/2019", "12345678", "Bitcoin", "$100", "Completed"],
    ["14/01/2019", "12345678", "Amazon", "$100", "Failed"],
    ["14/01/2019", "12345678", "Bitcoin", "$100", "In Progress"],
    ["14/01/2019", "12345678", "Etherum", "$100", "Completed"]
]

const options = {
    elevation: 0
}


const Button = styled.button `
    margin: 40px auto 10px auto;
`
import axios from "axios";
import MUIDataTable from "mui-datatables";
import React, { useEffect, useState } from "react";
import { formatDate, muiTableOptionType } from "../classes/Utilities";
import Chips from "./Chips";
import MenuOptions from "./MenuOptions/MenuOptions";


import { useDispatch, useSelector } from "react-redux";
import { getAllTransactions, fetchAllTransactions, selectAllTransactions } from "../redux/reducers/TransactionsSlice";
import { useAppSelector } from "../redux/hooks";

// Column header for the MUIDataTables
const columns = ["Transaction ID", "Role", "Products", "Amounts", "Status", "Action"]

// Options for MUIDataTables
const options: muiTableOptionType = {
    elevation: 0,
    rowsPerPage: 100,
    responsive: 'standard'
}



/**
 * This class displays the transaction for all users in 
 * the application
 */
function AllUsersTransactionTable(){
    const dispatch = useDispatch()
    const allTransaction : any =  useSelector<any[]>(selectAllTransactions)
    const transactionState : any = useAppSelector(getAllTransactions)
    
    const dataTables = allTransaction.map((item: any) => {
         return [item.reference , formatDate(item.created_at), item.description, "# " + item.amount,
         <Chips userId={item.id} chipsText={item.status} backgroundColor="rgba(93, 248, 136, 1)" />, <MenuOptions />]
    })
    
    
    console.log('This is the transactions', transactionState)
 
    return(
        <div className="margin-top">
            <div className="transaction-board card-white margin-top">
                    {/* <p className="transaction-text">Transactions</p> */}
                    <MUIDataTable 
                        title={""}             
                        data={dataTables}
                        // data={data}
                        columns={columns}
                        options = {options}
                        />
                    
            </div>
        </div>
    )
}


export default AllUsersTransactionTable
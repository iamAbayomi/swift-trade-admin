import axios from "axios";
import MUIDataTable from "mui-datatables";
import React, { useEffect, useState } from "react";
import { formatDate, muiTableOptionType } from "../classes/Utilities";
import Chips from "./Chips";
import MenuOptions from "./MenuOptions/MenuOptions";

import { useAppSelector, useAppDispatch } from '../redux/hooks'
import { useDispatch, useSelector } from "react-redux";
import { getAllTransactions, getAllTransactionsFromAPI } from "../reducers/TransactionsSlice";


/**
 * This class displays the transaction for all users in 
 * the application
 */
function AllUsersTransactionTable(){
    const dispatch = useDispatch()
    const transaction : any =  useSelector<any[]>(getAllTransactions)
    
    const [transactionRow, setTransactionRow] = useState<string[][]>([])
    

    useEffect(() => {
        getAllUserTransaction()
        dispatch(getAllTransactionsFromAPI())
    })

    function setTransactionRowData(transactionRowData: any){
        transactionRowData.map((item: any) => {
            data.push( [item.reference , formatDate(item.created_at), item.description, "# " + item.amount,
             <Chips userId={item.id} chipsText={item.status} backgroundColor="rgba(93, 248, 136, 1)" />, <MenuOptions />])})
        setTransactionRow(data)
    }


    async function getAllUserTransaction(){
        console.log('This is the value in the user state', transaction)

        axios.get('https://swift-trade-v1.herokuapp.com/api/v1/transaction/all')
            .then((res: any) => {
                    console.log('All the users transactions' , res)
                    setTransactionRowData(res.data.data)
            })
            .catch((err) => {

            })
    }
 

    return(
        <div className="margin-top">
            <div className="transaction-board card-white margin-top">
                    <p className="transaction-text">Transactions</p>
                    <MUIDataTable 
                        title={""}             
                        data={transactionRow}
                        // data={data}
                        columns={columns}
                        options = {options}
                        />
                    
            </div>
        </div>
    )
}


const columns = ["Transaction ID", "Role", "Products", "Amounts", "Status", "Action"]

const data : any[][] = []

const options: muiTableOptionType = {
    elevation: 0,
    rowsPerPage: 100,
    responsive: 'standard'
}


export default AllUsersTransactionTable
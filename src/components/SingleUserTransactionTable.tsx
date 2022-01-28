import axios from "axios";
import MUIDataTable from "mui-datatables";
import React, { Props, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { formatAmount, formatDate, muiTableOptionType } from "../classes/Utilities";
import { useAppSelector } from "../redux/hooks";
import { fetchAnyUserTransaction, getUserTransaction, selectAllTransactions, updateTransactionStatus } from "../redux/reducers/TransactionsSlice";
import Chips from "./Chips";
import MenuOptions from "./MenuOptions/MenuOptions";
import ThreeDotOptions from "./MenuOptions/ThreeDotOptions";

type props = {
    userId: any
}

const SingleUserTransactionTable: React.FC<props> = (props) => {
    const dispatch = useDispatch()
    const allTransaction : any =  useAppSelector(getUserTransaction)
    let dataTables: any[][] = []
    const optionsContent = ["Approve", "Decline"]

    useEffect(()=>{
        
    })


    async function changeTransactionStatus( transaction_id: any, item:any ){
        const params = { transactionId: transaction_id, data: {"status": "successful"} } 
        if(item == "Decline"){
            params.data.status = "cancelled"
        }
         await dispatch(updateTransactionStatus( params ))
        console.log("I am here", dataTables)
    }


    dataTables = allTransaction.map((item: any) => {
        return [item.reference , formatDate(item.created_at), item.description,  formatAmount(item.amount),
        <Chips key={item.id} userId={item.id} chipsText={item.status} backgroundColor="rgba(93, 248, 136, 1)" />, 
        <ThreeDotOptions key={item.id} optionsContent={optionsContent} optionsMethod={changeTransactionStatus} transactionId={item.id} />
        ]
    })



    return(
        <div className="margin-top">
            <div className="transaction-board card-white margin-top">
                    <p className="transaction-text">Transactions</p>
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


const columns = ["Transaction ID", "Role", "Products", "Amounts", "Status", "Action"]

const data : any[][] = []

const options : muiTableOptionType = {
    elevation: 0,
    rowsPerPage: 10s,
    responsive: "standard"
}

export default SingleUserTransactionTable


import axios from "axios";
import MUIDataTable from "mui-datatables";
import React, { useEffect, useState } from "react";
import { formatAmount, formatDate, muiTableOptionType } from "../classes/Utilities";
import Chips from "./Chips";
import MenuOptions from "./MenuOptions/MenuOptions";


import { useDispatch, useSelector } from "react-redux";
import { getAllTransactions, 
        fetchAllTransactions, 
        selectAllTransactions, 
        updateTransactionStatus, 
        addFormattedTransactions, 
        getFormattedTransactions
     } from "../redux/reducers/TransactionsSlice";
import { useAppSelector } from "../redux/hooks";
import ThreeDotOptions from "./MenuOptions/ThreeDotOptions";
import { useHistory } from "react-router";


/**
 * This class displays the transaction for all users in 
 * the application
 */
function AllUsersTransactionTable(){
    const dispatch = useDispatch()
    const allTransaction : any =  useAppSelector(selectAllTransactions)
    const transactionState : any = useAppSelector(getAllTransactions)
    const formattedTransactions : any = useAppSelector(getFormattedTransactions)
    const [reload, setReload] = useState("")
    const [transactionArray, setTransactionArray] = useState<any[]>([])
    
    const optionsContent = ["Approve", "Decline"]
    let dataTables: any[][] = []
    let decider = false    

    const history = useHistory()

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
       
        
    
    console.log('This is the transactions', allTransaction)
    console.log('This is the transactions', transactionState)
    console.log('This is the transactions', dataTables)
 
    return(
        <div className="margin-top">
            <div className="transaction-board card-white margin-top">
                    {/* <p className="transaction-text">{ JSON.stringify(allTransaction)}</p> */}
                    <MUIDataTable 
                        title={""}             
                        data={decider ? transactionArray :dataTables}
                        //data={transactionArray}
                        columns={columns}
                        options = {options}
                        />
                    
            </div>
        </div>
    )
}

// Column header for the MUIDataTables
const columns = ["Transaction ID", "Role", "Products", "Amounts", "Status", "Action"]

// Options for MUIDataTables
const options: muiTableOptionType = {
    elevation: 0,
    rowsPerPage: 10,
    responsive: 'standard'
}

export default AllUsersTransactionTable
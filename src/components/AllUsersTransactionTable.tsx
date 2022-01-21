import axios from "axios";
import MUIDataTable from "mui-datatables";
import React, { useEffect, useState } from "react";
import { formatDate, muiTableOptionType } from "../classes/Utilities";
import Chips from "./Chips";
import MenuOptions from "./MenuOptions/MenuOptions";


import { useDispatch, useSelector } from "react-redux";
import { getAllTransactions, fetchAllTransactions, selectAllTransactions, updateTransactionStatus } from "../redux/reducers/TransactionsSlice";
import { useAppSelector } from "../redux/hooks";
import ThreeDotOptions from "./MenuOptions/ThreeDotOptions";


/**
 * This class displays the transaction for all users in 
 * the application
 */
function AllUsersTransactionTable(){
    const dispatch = useDispatch()
    const allTransaction : any =  useAppSelector(selectAllTransactions)
    const transactionState : any = useAppSelector(getAllTransactions)
    const [reload, setReload] = useState("")
    const [transactionArray, setTransactionArray] = useState<any[]>([])
    
    const optionsContent = ["Approve", "Decline"]
    
    

    async function changeTransactionStatus( transaction_id: any, item:any ){
        const params = { transactionId: transaction_id, data: {"status": "successful"} } 
        if(item == "Decline"){
            params.data.status = "cancelled"
        }
        await dispatch(updateTransactionStatus( params ))
        //dispatch(fetchAllTransactions())
        await setReload("we reloaded the component")
        
        console.log("I am here", reload)
    }
    
    
    
    const dataTables = setTransactionTableData()

    function setTransactionTableData(){
      return  allTransaction.map((item: any) => {
            return [item.reference , formatDate(item.created_at), item.description, "# " + item.amount,
            <Chips key={item.id} userId={item.id} chipsText={item.status} backgroundColor="rgba(93, 248, 136, 1)" />, 
            <ThreeDotOptions key={item.id} optionsContent={optionsContent} optionsMethod={changeTransactionStatus} transactionId={item.id} />]
       })
    }
    setState()
    
    function setState(){
        setTransactionArray(dataTables)
    }
    
    console.log('This is the transactions', allTransaction)
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

// Column header for the MUIDataTables
const columns = ["Transaction ID", "Role", "Products", "Amounts", "Status", "Action"]

// Options for MUIDataTables
const options: muiTableOptionType = {
    elevation: 0,
    rowsPerPage: 100,
    responsive: 'standard'
}

export default AllUsersTransactionTable
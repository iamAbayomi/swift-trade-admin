import axios from "axios";
import MUIDataTable from "mui-datatables";
import React, { useEffect, useState } from "react";
import { formatDate, muiTableOptionType } from "../classes/Utilities";
import Chips from "./Chips";
import MenuOptions from "./MenuOptions/MenuOptions";


import { useDispatch, useSelector } from "react-redux";
import { getAllTransactions, fetchAllTransactions, selectAllTransactions, updateTransactionStatus, addFormattedTransactions, getFormattedTransactions } from "../redux/reducers/TransactionsSlice";
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
        // await dispatch(addFormattedTransactions(dataTables))
        decider = true
        // dataTables = []
        // await setTransactionArray(state => ({
 
        // }))
        history.go(0)
        console.log("I am here", dataTables)
    }
    
    // useEffect(()=>{
    //     setTransactionTableData()
    // }, [])
    


    
     dataTables = allTransaction.map((item: any) => {
            return [item.reference , formatDate(item.created_at), item.description, "# " + item.amount,
            <Chips key={item.id} userId={item.id} chipsText={item.status} backgroundColor="rgba(93, 248, 136, 1)" />, 
            <ThreeDotOptions key={item.id} optionsContent={optionsContent} optionsMethod={changeTransactionStatus} transactionId={item.id} />
        ]
    })
       
     
    

    function setTransactionTableData(){
        allTransaction.map((item: any) => {
            dataTables.push([item.reference , formatDate(item.created_at), item.description, "# " + item.amount,
            <Chips key={item.id} userId={item.id} chipsText={item.status} backgroundColor="rgba(93, 248, 136, 1)" />, 
            <ThreeDotOptions key={item.id} optionsContent={optionsContent} optionsMethod={changeTransactionStatus} transactionId={item.id} />])
       })
       dispatch(addFormattedTransactions(dataTables))
       console.log("DAtaTables")
    }
    
    console.log('This is the transactions', allTransaction)
    console.log('This is the transactions', transactionState)
    console.log('This is the transactions', dataTables)
 
    return(
        <div className="margin-top">
            <div className="transaction-board card-white margin-top">
                    {/* <p className="transaction-text">Transactions</p> */}
                    <MUIDataTable 
                        title={""}             
                        data={decider ? transactionArray :dataTables}
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
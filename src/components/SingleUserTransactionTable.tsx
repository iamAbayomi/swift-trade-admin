import axios from "axios";
import MUIDataTable from "mui-datatables";
import React, { useEffect, useState } from "react";
import { formatDate } from "../classes/Utilities";
import Chips from "./Chips";
import MenuOptions from "./MenuOptions";

function SingleUserTransactionTable(){

    const [transactionRow, setTransactionRow] = useState("0")

    useEffect(() => {
        getAllUserTransaction()
    }, [])

    function setTransactionRowData(transactionRowData: any){
        const columns = ["Transaction ID", "Date", "Products", "Amounts", "Status", "Action"]
        transactionRowData.map((item: any) => {
            data.push( item.reference , [formatDate(item.created_at), item.description, "# " + item.amount, <Chips userId={item.status} chipsText={item.status} backgroundColor="rgba(93, 248, 136, 1)" />, <MenuOptions />])
        })
    }


    async function getAllUserTransaction(){
        axios.get('https://swift-trade-v1.herokuapp.com/api/v1/transaction/all')
            .then((res: any) => {
                    console.log('All the users transactions' , res)
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
                        data={data}
                        // data={data}
                        columns={columns}
                        options = {options}
                        />
                    
            </div>
        </div>
    )
}


const columns = ["Transaction ID", "Role", "Products", "Amounts", "Status", "Action"]

const data : any= []

const options = {
    elevation: 0
}

export default SingleUserTransactionTable
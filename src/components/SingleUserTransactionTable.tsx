import axios from "axios";
import MUIDataTable from "mui-datatables";
import React, { Props, useEffect, useState } from "react";
import { formatDate, muiTableOptionType } from "../classes/Utilities";
import Chips from "./Chips";
import MenuOptions from "./MenuOptions";

type props = {
    userId: any
}

const SingleUserTransactionTable: React.FC<props> = (props) => {

    const [transactionRow, setTransactionRow] = useState<string[][]>([])

    useEffect(() => {
        getASingleUserTransactionTable()
    }, [])

    /** This funcion sets the data that goes into the transaction row */
    function setTransactionRowData(transactionRowData: any){
        transactionRowData.map((item: any) => {
            data.push( [item.reference , formatDate(item.created_at), item.description, "# " + item.amount, <Chips userId={item.id} chipsText={item.status} backgroundColor="rgba(93, 248, 136, 1)" />, <MenuOptions />])
        })
        setTransactionRow(data)
    }


    /** This method aims to get a single user transactions */
    async function getASingleUserTransactionTable(){
        console.log('This is the user id',props.userId )
        
        axios.get(`https://swift-trade-v1.herokuapp.com/api/v1/transaction/${props.userId}/user`)
            .then((res: any) => {
                    console.log('All the users transactions' , res)
                    setTransactionRowData(res.data.data)
            }).catch((err) => { })
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

const options : muiTableOptionType = {
    elevation: 0,
    responsive: "standard"
}

export default SingleUserTransactionTable
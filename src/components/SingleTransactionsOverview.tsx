import axios from "axios";
import { type } from "os";
import React, { Props, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getToken } from "../classes/User";
import { useAppSelector } from "../redux/hooks";
import { getTransactionsOverview } from "../redux/reducers/TransactionsSlice";
import { selectAllUsers } from "../redux/reducers/UsersSlice";
import SingleTransactionCardView from "./SingleTransactionCardview";

function  SingleTransactionOverview() {
    const allUsers : any = useSelector<any[]>(selectAllUsers)
    const transactionCount : any  = useAppSelector(getTransactionsOverview)
    return(
        <div>
            <Link to="/transactions" className="transaction-row display-flex link">
                    <SingleTransactionCardView transactiontext="Total Number of Users" percentage = {allUsers.length}  />
                    <SingleTransactionCardView transactiontext="Pending Transactions" percentage = {transactionCount.pendingTransactions} />
                    <SingleTransactionCardView transactiontext="Total Number of Transactions" percentage = {transactionCount.allTransactions} />   
            </Link>
        </div>

    )
    
}

export default SingleTransactionOverview
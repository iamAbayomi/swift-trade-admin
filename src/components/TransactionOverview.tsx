import { useSelector } from "react-redux";
import { selectAllTransactions } from "../reducers/TransactionsSlice";
import AllUsersTransactionTable from "./AllUsersTransactionTable";
import EmptyStateTrasanctionCards from "./EmptyStateTransactionCard";


// This decides based on the redux state to show an empty transactions 
// or transactions data.
function TransactionOverview(){
    const allTransaction : any = useSelector<any[]>(selectAllTransactions)
        return(
            <div> 
                {
                    allTransaction ? <AllUsersTransactionTable/> : <EmptyStateTrasanctionCards />
                }
            </div>
        )
    
}

export default TransactionOverview
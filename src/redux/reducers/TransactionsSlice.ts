import{
    createSlice,
    createSelector,
    createAsyncThunk,
    createEntityAdapter
} from '@reduxjs/toolkit'
import customAxios from '../../classes/CustomAxios'
import { getToken, getTokenByRedux,baseUrl } from '../../classes/User'
import { useCustomAxios } from '../../classes/Utilities'
import Chips from '../../components/Chips'
import MenuOptions from '../../components/MenuOptions/MenuOptions'

// Define a type for the slice
interface TransactionState {
    id: any,
    contents: any
}

// Creating users adapter that provides many methods for transactions
const transactionAdapter = createEntityAdapter<TransactionState> ({
    selectId: transaction => transaction.id
})

// InitialState for reducers
const initialState = transactionAdapter.getInitialState({
    status: 'idle'
})

export const fetchTransactionsCount = createAsyncThunk('transaction/fetchTransactionsCount',async()=>{
    const {response, error} = await useCustomAxios('GET', 'transaction/count')
    return response.data.data
})

export const fetchCurrentUserTransactions = createAsyncThunk('transaction/fetchCurrentUserTransactions',async()=>{
    const {response, error} = await useCustomAxios('GET', 'transaction')
    return response.data.data
})

export const updateTransactionStatus = createAsyncThunk('transaction/updateTransactionsStatus',async(transactionId: any)=>{
    const {response, error} = await useCustomAxios('UPDATE', `transaction/${transactionId}/status`)
    return response.data.data
})

export const fetchAnyUserTransaction = createAsyncThunk('transaction/fetchAnyUserTransaction',async(transactionId: any)=>{
    const {response, error} = await useCustomAxios('GET', `transaction/${transactionId}/user`)
    return response.data.data
})

export const fetchAnyUserTransactionCount =  createAsyncThunk('transaction/fetchAnyUserTransactionCount',async(transactionId: any)=>{
    const {response, error} = await useCustomAxios('GET', `transaction/${transactionId}/user/count`)
    return response.data.data
})

// Added thunk to get All transactions from API
export const fetchAllTransactions = createAsyncThunk('users/getAllTransactionsFromAPI', async() => {
    const {response, error} = await  useCustomAxios('GET', 'transaction/all')
    return response.data.data
})



// Created slice for transactions reducers and action.
const transactionSlice = createSlice({
    name: 'Transaction',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchAllTransactions.fulfilled, transactionAdapter.addMany )
    }
})

export const {
    selectAll : selectAllTransactions,
    selectById: selectTrasactionsById
}  = transactionAdapter.getSelectors((state: any) => state.transactions)

// Method to get all transactions state
export const getAllTransactions = (state: any) => {
    return state
}



export default transactionSlice.reducer

export {}


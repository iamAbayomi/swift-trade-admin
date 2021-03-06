import{
    createSlice,
    createSelector,
    createAsyncThunk,
    createEntityAdapter
} from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
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
   formattedTransactions: [],
   transactionOverview: {
       "pendingTransactions": 0,
       "allTransactions": 0
   },
   anyUserTransaction: [],
   anyUserTransactionCount: {
    "allTransactions": 0,
    "successfulTransactions": 0,
    "pendingTransactions": 0,
    "failedTransactions": 0
   }
})

export const fetchTransactionsCount = createAsyncThunk('transaction/fetchTransactionsCount',async()=>{
    const {response, error} = await useCustomAxios('GET', 'transaction/count')
    return response.data.data
})

export const fetchCurrentUserTransactions = createAsyncThunk('transaction/fetchCurrentUserTransactions',async()=>{
    const {response, error} = await useCustomAxios('GET', 'transaction')
    return response.data.data
})

export const updateTransactionStatus = createAsyncThunk('transaction/updateTransactionsStatus',
    async(params: any)=>{
        // console.log("in the update transactions", params.transactionId , params.data, "dad")
        const {response, error} = await useCustomAxios('PATCH', `transaction/${params.transactionId}/status`, params.data)
        console.log("update transactions", response, error)
        return response.data.data
})

export const fetchAnyUserTransaction = createAsyncThunk('transaction/fetchAnyUserTransaction',async(userId: any)=>{
    const {response, error} = await useCustomAxios('GET', `transaction/${userId}/user`)
    return response.data.data
})

export const fetchAnyUserTransactionCount =  createAsyncThunk('transaction/fetchAnyUserTransactionCount',async(userId: any)=>{
    const {response, error} = await useCustomAxios('GET', `transaction/${userId}/user/count`)
    return response.data.data
})

// Added thunk to get All transactions from API
export const fetchAllTransactions = createAsyncThunk('users/getAllTransactionsFromAPI', async() => {
    const {response, error} = await  useCustomAxios('GET', 'transaction/all?page=1&limit=200')
    return response.data.data
})



// Created slice for transactions reducers and action.
const transactionSlice = createSlice({
    name: 'Transaction',
    initialState,
    reducers: {
        addFormattedTransactions(state, action){
            state.formattedTransactions = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchAllTransactions.fulfilled, transactionAdapter.addMany )
        .addCase(updateTransactionStatus.fulfilled, (state , action )=>{
           state.entities[action.payload.id] = action.payload
           state.entities = Object.create(state.entities)
           state.formattedTransactions = Object.create(state.entities)
        })
        .addCase(fetchTransactionsCount.fulfilled,(state, action ) => {
            state.transactionOverview = action.payload
        })
        .addCase(fetchAnyUserTransaction.fulfilled, (state, action) =>{
            state.anyUserTransaction = action.payload
        })
        .addCase(fetchAnyUserTransactionCount.fulfilled, (state, action) => {
            state.anyUserTransactionCount = action.payload
        })
        
    }
})

export const {
    addFormattedTransactions
} = transactionSlice.actions

export const {
    selectAll : selectAllTransactions,
    selectById: selectTrasactionsById
}  = transactionAdapter.getSelectors((state: any) => state.transactions)

// Method to get all transactions state
export const getAllTransactions = (state: any) => {
    return state
}

export const getFormattedTransactions = (state: any) => {
    return state.transactions.formattedTransactions
}

export const getTransactionsOverview =(state: any)=>{
    return state.transactions.transactionOverview
}

export const getUserTransaction = (state: any) => {
    return state.transactions.anyUserTransaction
}

export const getAnyUserTransactionCount = (state: any) => {
    return state.transactions.anyUserTransactionCount
}

export default transactionSlice.reducer

export {}


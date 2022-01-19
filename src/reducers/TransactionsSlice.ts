import{
    createSlice,
    createSelector,
    createAsyncThunk,
    createEntityAdapter
} from '@reduxjs/toolkit'
import customAxios from '../classes/CustomAxios'
import { getToken, getTokenByRedux,baseUrl } from '../classes/User'
import { useCustomAxios } from '../classes/Utilities'

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

// Added thunk to get All transactions from API
export const getAllTransactionsFromAPI = createAsyncThunk('users/getAllTransactionsFromAPI', async() => {
    const {response, error} = await  useCustomAxios('GET', 'transaction/all')
    console.log('From the transaction slice ' , response , error)
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
        .addCase(getAllTransactionsFromAPI.fulfilled, transactionAdapter.addMany )
    }
})

export const getAllTransactions = (state: any) => {
    return state
}

export default transactionSlice.reducer

export {}


import{
    createSlice,
    createSelector,
    createAsyncThunk,
    createEntityAdapter
} from '@reduxjs/toolkit'
import customAxios from '../classes/CustomAxios'
import { getToken, getTokenByRedux,baseUrl } from '../classes/User'

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

export const getAllTransactions = createAsyncThunk('users/getAllTransactions', async() => {
    const token = getTokenByRedux()

    const {response, error} = await customAxios({
        method: 'GET', url: baseUrl + 'transaction/all',
        headers: {'Authorization': `Bearer ${token}`}})

    console.log('From the transaction slice ' , response , token, error)
    
    return response.data.data
})


const transactionSlice = createSlice({
    name: 'Transaction',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
        .addCase(getAllTransactions.fulfilled, transactionAdapter.addMany )
    }
})

export const showTransactions = (state: any) => {
    return state
}

export default transactionSlice.reducer

export {}


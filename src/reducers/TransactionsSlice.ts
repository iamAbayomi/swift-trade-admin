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

//


export {}
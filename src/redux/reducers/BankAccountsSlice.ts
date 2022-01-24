import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { useCustomAxios } from "../../classes/Utilities";


interface BankAccountState {
    id: any
}

const bankaccountAdapter = createEntityAdapter<BankAccountState>({
    selectId: bankaccount => bankaccount.id
})
const initialState = bankaccountAdapter.getInitialState()


export const fetchUserBankAccount = createAsyncThunk('bankAccount/fetchBankAccount',
    async(user_id: any)=>{
        const {response, error} = await useCustomAxios('GET', `bank-accounts/user/${user_id}`)
        console.log("This is the user bank account  store ", response, ' and the user id ', user_id)
        return response.data.data
})


// Created slice to get user bank account reducers and action
const bankaccountSlice = createSlice({
    name: 'bankaccounts',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchUserBankAccount.fulfilled, (state, action) => {
            state.entities = action.payload
            action.payload.map((item: any) => (
                state.ids = item.id
            ))
            console.log("state.entities ", state.entities, " action payload ", action.payload ," store ", )
        } )
    }
})


export const {
    selectAll : selectAllBankAccount
}   = bankaccountAdapter.getSelectors((state : any) => state.bankaccounts )

export const getAllBankAccount = (state: any) => {
    return state.bankaccounts.entities
}

export default bankaccountSlice.reducer
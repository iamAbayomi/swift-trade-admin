import{
    createSlice,
    createSelector,
    createAsyncThunk,
    createEntityAdapter
}  from '@reduxjs/toolkit'
import { useCustomAxios } from '../../classes/Utilities'

// Define a type for the card
interface CardState {
    id: any,
    contents: any
}

const cardAdapter = createEntityAdapter()

const initialState = cardAdapter.getInitialState()


// 
export const fetchCard = createAsyncThunk('cards/fetchCard', async()=>{
    const {response, error } = await useCustomAxios('GET','cards')
    return response.data.data
})
//
export const createCard = createAsyncThunk('cards/createCard',async(body)=>{
    const {response, error} = await useCustomAxios('POST', 'cards/create', body)
    return response.data.data
})
//
export const updateCard = createAsyncThunk('cards/updateCard',async(body)=>{
    const {response, error} = await useCustomAxios('UPDATE', 'cards/update', body)
    return response.data.data
})
export const deleteCard = createAsyncThunk('cards/delete',async(body)=>{
    const {response, error} = await useCustomAxios('DELETE', 'cards/delete', body)
    return response.data.data
})


// Created slice for card reducers and action.
const cardSlice = createSlice({
    name: 'Card',
    initialState,
    reducers: {

    },
    extraReducers:(builder) => {
        builder
        .addCase(fetchCard.fulfilled, cardAdapter.addMany )
    }
})

export default cardSlice.reducer

export const {
    selectAll: selectAllCards
} = cardAdapter.getSelectors((state: any) => state.cards)
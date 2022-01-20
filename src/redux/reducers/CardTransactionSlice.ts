import { createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";
import { useCustomAxios } from "../../classes/Utilities";

const cardTradeAdapter = createEntityAdapter()

const initialState = cardTradeAdapter.getInitialState()

//
export const createCard = createAsyncThunk('cards/createCard',async(body)=>{
    const {response, error} = await useCustomAxios('POST', 'trade/card', body)
    return response.data.data
})

export const fetchSingleCard = createAsyncThunk('cards/fetchCard', async(cardId)=>{
    const {response, error } = await useCustomAxios('GET',`trade/${cardId}/card`)
    return response.data.data
})


export const fetchAllCard = createAsyncThunk('cards/fetchCard', async()=>{
    const {response, error } = await useCustomAxios('GET','trade/card')
    return response.data.data
})


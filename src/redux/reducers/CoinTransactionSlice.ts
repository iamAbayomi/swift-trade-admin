import { createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";
import { useCustomAxios } from "../../classes/Utilities";

const coinTradeAdapter = createEntityAdapter()

const initialState = coinTradeAdapter.getInitialState()

//
export const createCoin = createAsyncThunk('coins/createCoin',async(body)=>{
    const {response, error} = await useCustomAxios('POST', 'trade/coin', body)
    return response.data.data
})

export const fetchSingleCoin = createAsyncThunk('coins/fetchCoin', async(coinId)=>{
    const {response, error } = await useCustomAxios('GET',`trade/${coinId}/coin`)
    return response.data.data
})


export const fetchAllCoin = createAsyncThunk('coins/fetchCoin', async()=>{
    const {response, error } = await useCustomAxios('GET','trade/coin')
    return response.data.data
})


import{
    createSlice,
    createSelector,
    createAsyncThunk,
    createEntityAdapter
}  from '@reduxjs/toolkit'

import { useCustomAxios } from '../../classes/Utilities'

const coinAdapter = createEntityAdapter()

const initialState = coinAdapter.getInitialState()

// 
export const fetchCoin = createAsyncThunk('coins/fetchCoin', async()=>{
    const {response, error } = await useCustomAxios('GET','coins')
    return response.data.data
})
//
export const createCoin = createAsyncThunk('coins/createCoin',async(body)=>{
    const {response, error} = await useCustomAxios('POST', 'coins/create', body)
    return response.data.data
})
//
export const updateCoin = createAsyncThunk('coins/updateCoin',async(userId, body)=>{
    const {response, error} = await useCustomAxios('UPDATE', `coins/${userId}/update`, body)
    return response.data.data
})
export const deleteCoin = createAsyncThunk('coins/delete',async(body)=>{
    const {response, error} = await useCustomAxios('DELETE', 'coins/delete', body)
    return response.data.data
})

const coinsSlice = createSlice({
    name: 'coins',
    initialState,
    reducers: {

    },
    extraReducers: (builder) =>{
        builder
            .addCase(fetchCoin.fulfilled,coinAdapter.addOne )
    }
})
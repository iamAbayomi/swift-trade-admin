import{
    createSlice,
    createSelector,
    createAsyncThunk,
    createEntityAdapter
} from '@reduxjs/toolkit'
import { useAxios } from '../classes/CustomAxios'
import { baseUrl } from '../classes/Utilities'

// Creating users adapter that provides many methods for the users
const usersAdapter = createEntityAdapter()

// InitialState for reducers
const initialState = usersAdapter.getInitialState()

// Get all the users with the AsyncThunk 
export const fetchUsers = (token: any) => {createAsyncThunk('users/fetchUsers', async () => {
    console.log('In the user slice ' )
    const response = await useAxios({
        method: 'GET',
        url: baseUrl + 'user',
        headers: {
            'Authorization' : `Bearer ${token}`
        }
    })
    console.log('From the user slice ' + response)
    return response
})
}

// Slice for reducers
const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        
    }
})



import{
    createSlice,
    createSelector,
    createAsyncThunk,
    createEntityAdapter
} from '@reduxjs/toolkit'
import useAxios  from '../classes/CustomAxios'
import { getToken } from '../classes/User'
import { baseUrl } from '../classes/Utilities'

// Creating users adapter that provides many methods for the users
const usersAdapter = createEntityAdapter()

// InitialState for reducers
const initialState = usersAdapter.getInitialState()

// Get all the users with the AsyncThunk 
export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    console.log('In the user slice ' )
    const token = await getToken()
    const response = await useAxios({
        method: 'GET',
        url: baseUrl + 'user',
        headers: {
            'Authorization' : `Bearer ${token}`
        }
    })
    console.log('From the user slice ' + response.response)
    return response
})


// export const fetchUsers = createAsyncThunk('users/fetchUsers', async() => {
//     console.log('I am here')
// })

// Slice for reducers
const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        
    }
})


export default usersSlice.reducer
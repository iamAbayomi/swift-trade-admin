import{
    createSlice,
    createSelector,
    createAsyncThunk,
    createEntityAdapter
} from '@reduxjs/toolkit'
import useAxios  from '../classes/CustomAxios'
import { getToken, getTokenByRedux } from '../classes/User'
import { baseUrl } from '../classes/Utilities'

// Creating users adapter that provides many methods for the users
const usersAdapter = createEntityAdapter()

// InitialState for reducers
const initialState = usersAdapter.getInitialState({
    status: 'idle'
})

// Get all the users with the AsyncThunk 
export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    console.log('In the user slice ' )
    const token = await getTokenByRedux()
    const {response, loading, error} = await useAxios({
        method: 'GET',
        url: baseUrl + 'user',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    console.log('From the user slice ' , response , token)
    console.log(response , token)
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
        
    },
    extraReducers: (builder) =>{
        builder
            .addCase(fetchUsers.pending, (state, action) => {
                state.status = 'loading'
            } )
            .addCase(fetchUsers.fulfilled, (state, action)=> {
                usersAdapter.setAll(state, action.payload)
                state.status = 'idle'
            })
            
    },
})


export default usersSlice.reducer
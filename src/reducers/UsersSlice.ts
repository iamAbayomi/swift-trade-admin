import{
    createSlice,
    createSelector,
    createAsyncThunk,
    createEntityAdapter
} from '@reduxjs/toolkit'
import customAxios from '../classes/CustomAxios'
import useAxios  from '../classes/CustomAxiosHook'
import { getToken, getTokenByRedux } from '../classes/User'
import { baseUrl } from '../classes/Utilities'
import type { RootState } from '../redux/store'

// Define a type for the slice state
interface UserState {
    id: any
    contents: any
}

// Creating users adapter that provides many methods for the users
const usersAdapter = createEntityAdapter<UserState>({
    selectId: user => user.id
})

// InitialState for reducers
const initialState = usersAdapter.getInitialState({
    status: 'idle'
})

// Get all the users with the AsyncThunk 
export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const token = await getToken()
    const {response, error} = await customAxios({
        method: 'GET', url: baseUrl + 'user',
        headers: {'Authorization': `Bearer ${token}`}})
    //console.log('From the user slice ' , response , token, error)
    
    return response.data.data
})


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
            })
            .addCase(fetchUsers.fulfilled, usersAdapter.addOne )
            
    },
})


export const showUsers = (state: any ) => {
    return state.users
}

export const showCurrentUsers = (state: any ) => {
    let user = state.users
    return user.entities[user.ids[0]]
}



export default usersSlice.reducer
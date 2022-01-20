import{
    createSlice,
    createSelector,
    createAsyncThunk,
    createEntityAdapter
} from '@reduxjs/toolkit'
import customAxios from '../../classes/CustomAxios'
import { getToken, getTokenByRedux } from '../../classes/User'
import { baseUrl, useCustomAxios } from '../../classes/Utilities'


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

// Get the current signed in user with the AsyncThunk 
export const fetchCurrentUser = createAsyncThunk('users/fetchCurrentUser', async () => {
    const {response, error} = await useCustomAxios('GET','user')
    return response.data.data
})

// Update the current user's profile 
export const udpateUserProfile = createAsyncThunk('users/updateUserProfile', async(body)=>{
    const {response, error} = await useCustomAxios('PATCH', 'user/update')
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
            .addCase(fetchCurrentUser.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchCurrentUser.fulfilled, usersAdapter.addOne )
            
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

//console.log('This is showing the current user from the user slice ', response )
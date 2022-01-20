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
    currentUser: {}
})

// Get the current signed in user with the AsyncThunk 
export const fetchCurrentUser = createAsyncThunk('users/fetchCurrentUser', async () => {
    // use the Custom Axios to get the user data from the utilities module.
    const {response, error} = await useCustomAxios('GET','user')
    return response.data.data
})

// Update the current user's profile 
export const udpateUserProfile = createAsyncThunk('users/updateUserProfile', async(body)=>{
    const {response, error} = await useCustomAxios('PATCH', 'user/update', body)
    return response.data.data
})

export const updateUserPassword = createAsyncThunk('user/updateUserPassword',async()=>{
    const {response, error} = await useCustomAxios('PATCH', 'user/update/password')
    return response.data.data
})


export const updateUserRole = createAsyncThunk('user/fetchUserRole',async()=>{
    const {response, error} = await useCustomAxios('GET', 'role')
    return response.data.data
})

export const fetchAllUser = createAsyncThunk('user/fetchAllUsers',async()=>{
    const {response, error} = await useCustomAxios('GET', 'user/users/fetch/?limit=100')
    return response.data.data
})

export const suspendUser = createAsyncThunk('user/',async(userId)=>{
    const {response, error} = await useCustomAxios('POST', `user/${userId}/suspend`)
    return response.data.data
})

export const fetchAnyUserProfile = createAsyncThunk('user/fetchAnyUserProfile',async(userId)=>{
    const {response, error} = await useCustomAxios('GET', `user/${userId}/info`)
    return response.data.data
})

export const forgotPassword = createAsyncThunk('user/',async()=>{
    const {response, error} = await useCustomAxios('', '')
    return response.data.data
})
export const resetPassword = createAsyncThunk('user/',async()=>{
    const {response, error} = await useCustomAxios('', '')
    return response.data.data
})

export const dummyMethod = createAsyncThunk('user/',async()=>{
    const {response, error} = await useCustomAxios('', '')
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
                
            })
            .addCase(fetchCurrentUser.fulfilled, usersAdapter.addOne )
            .addCase(udpateUserProfile.fulfilled, usersAdapter.addOne)
            
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
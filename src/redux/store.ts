import { configureStore } from "@reduxjs/toolkit"
import usersSlice from '../reducers/UsersSlice'

const store = configureStore({
    reducer: {
        // Define a top level reducer
        users: usersSlice
    }
})

export default store
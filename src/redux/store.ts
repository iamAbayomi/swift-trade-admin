import { configureStore } from "@reduxjs/toolkit"
import usersReducer from './reducers/UsersSlice'
import transactionsReducer from './reducers/TransactionsSlice'

export const store = configureStore({
    reducer: {
        users: usersReducer,
        transactions: transactionsReducer
    }
})


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentState, users: UsersState}
export type AppDispatch = typeof store.dispatch
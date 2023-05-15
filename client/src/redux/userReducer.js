import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: null,
    loading: false,
    error: false
}

export const userSlice = createSlice({
    name: 'user',
    initialState,

    reducers: {
        loginStart: (state) => {
            state.loading = true;
        },
        loginSuccess: (state, action) => {
            state.loading = false;
            state.currentUser = action.payload;
        },
        loginFail: (state, ) => {
            state.currentUser = null;
            state.error = true;
        },
        logout: (state) => {
            return initialState
        },
    }
})

export const {loginStart, loginSuccess, loginFail, logout} = userSlice.actions

export default userSlice.reducer

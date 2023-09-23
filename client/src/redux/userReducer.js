import { createSlice } from '@reduxjs/toolkit'


export const userSlice = createSlice({
    name: 'user',
    initialState: {
        currentUser: null,
        loading: false,
        error: false
    },

    reducers: {
        loginStart: (state) => {
            state.loading = true;
            state.error = false;
        },
        loginSuccess: (state, action) => {
            state.loading = false;
            state.currentUser = action.payload;
        },
        loginFail: (state ) => {
            state.currentUser = null;
            state.error = true;
        },
        logout: (state) => {
            state.currentUser = null;
            state.loading = false;
            state.error = false;
        },
    }
})

export const { loginStart, loginSuccess, loginFail, logout } = userSlice.actions

export default userSlice.reducer

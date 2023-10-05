import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        currentUser: null,
        loading: false,
        error: false
    },
    reducers: {
        loginStart: (state)=>{
            state.loading = true;
            state.currentUser = false;
            state.error = false
        },
        loginSuccess: (state, action)=>{
            state.loading = false;
            state.currentUser = action.payload;
            state.error = false
        },
        loginFailure: (state)=>{
            state.loading = false;
            state.error = true
            state.currentUser = false;
        },
        logout: (state) => {
            state.currentUser = null;
            state.error = false;
            state.loading = false
        }
    }
})

export const { loginStart, loginSuccess, loginFailure, logout } = userSlice.actions;
export default userSlice.reducer

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: null,
    loading: false,
    error: false,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    
    reducers: {
        loginStart: (state)=>{
            state.loading = true;
            state.currentUser = null;
            state.error = false
        },
        loginSuccess: (state, action)=>{
            state.loading = false;
            state.currentUser = action.payload;
            state.error = false
        },
        loginFail: (state)=>{
            state.loading = false;
            state.error = true
            state.currentUser = null;
        },
        logout: (state) => {
            state.currentUser = null;
            state.error = false;
            state.loading = false
        }
    }
})

export const { loginStart, loginSuccess, loginFail, logout } = userSlice.actions;
export default userSlice.reducer

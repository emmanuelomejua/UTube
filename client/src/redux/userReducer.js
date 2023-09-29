import { createSlice } from "@reduxjs/toolkit";
import { login } from "./apiCall";

const userSlice = createSlice({
    name: 'user',
    initialState: {
      currentUser: null,
      loading: false,
      error: false,
    },
    reducers: {
        logout:(state)=>{
            state.currentUser = null;
            state.loading = false;
            state.error = false
        }
    },
    extraReducers: (builder) => {
      builder
        .addCase(login.pending, (state) => {
          state.loading = true;
          state.currentUser = null;
          state.error = false;
        })
        .addCase(login.fulfilled, (state, action) => {
          state.loading = false;
          state.currentUser = action.payload;
          state.error = false;
        })
        .addCase(login.rejected, (state) => {
          state.loading = false;
          state.error = true;
          state.currentUser = null;
        });
    },
  });
  export const {logout} = userSlice.actions
  export default userSlice.reducer;
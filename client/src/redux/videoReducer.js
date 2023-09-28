import { createSlice } from "@reduxjs/toolkit"

 const videoSlice = createSlice({
    name: 'video',

    initialState:{
        videos: null,
        error: false,
        loading: false
    },
    
    reducers: {
        fetchVideoStart: (state)=>{
            state.loading = true;
            state.videos = null;
            state.error = false
        },
        fetchVideoSuccess: (state, action)=>{
            state.loading = false;
            state.videos = action.payload;
            state.error = false
        },
        fetchVideoFail: (state)=>{
            state.loading = false;
            state.error = true
            state.videos = null;
        },
    }
})

export const { fetchVideoStart, fetchVideoSuccess, fetchVideoFail } = videoSlice.actions

export default videoSlice.reducer

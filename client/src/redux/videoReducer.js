import { createSlice } from "@reduxjs/toolkit"


const initailState = {
    video: {},
    error: false,
    loading: false
}

 const videoSlice = createSlice({
    name: 'video',
    initailState,
    
    reducers: {
        // fetchVideoStart: (state)=>{
        //     state.loading = true;
        //     state.currentUse = false;
        //     state.error = false
        // },
        // fetchVideoSuccess: (state, action)=>{
        //     state.loading = false;
        //     state.currentUse = action.payload;
        //     state.error = false
        // },
        // fetchVideoFail: (state)=>{
        //     state.loading = false;
        //     state.error = true
        //     state.currentUse = false;
        // },
    }
})

// export const { fetchVideoStart, fetchVideoSuccess, fetchVideoFail } = videoSlice.actions

export default videoSlice.reducer

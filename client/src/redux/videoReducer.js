import { createSlice } from "@reduxjs/toolkit"


const initailState = {
    video: {},
    error: false,
    loading: false
}

 const videoReducer = createSlice({
    name: 'video',
    initailState,
    
    reducers: {

    }
})

export default videoReducer.actions

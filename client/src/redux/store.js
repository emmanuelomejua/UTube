import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "./userReducer";
import videoReducer from "./videoReducer";
// import {  persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// const persistConfig = {
//     key: 'root',
//     version: 1,
//     storage,
// }

const rootReducer = combineReducers({user:userReducer, video: videoReducer})

// const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: rootReducer
    // middleware: (getDefaultMiddleware) => 
    //     getDefaultMiddleware({
    //         serializableCheck: {
    //             ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    //         },
    //     })
    
})

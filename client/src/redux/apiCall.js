import axios from "axios";
import { createAsyncThunk} from '@reduxjs/toolkit'
import { url } from "../utils/apiRoute";
import {logout} from './userReducer'

export const login = createAsyncThunk(
    'user/login',
    async (user, { dispatch }) => {
      try {
        const res = await axios.post(url + 'auth/login', user);
        return res.data; 
      } catch (error) {
        throw error; 
      }
    }
  );

export const Logout = (dispatch, user) => {
    dispatch(logout())
}

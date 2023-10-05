import axios from "axios";
import { loginFailure, loginStart, loginSuccess, logout } from "./userReducer";
import { url } from "../utils/apiRoute";

export const login = async (dispatch, user) => {

    dispatch(loginStart());
    try {
        const res = await axios.post(url + 'auth/login', user)
        dispatch(loginSuccess(res.data));
    } catch (error) {
        dispatch(loginFailure())
    }
}

export const Logout = async (dispatch, user) => {
    dispatch(logout())
}
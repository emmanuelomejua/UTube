import axios from "axios";
import { loginFail, loginStart, loginSuccess, logout } from "./userReducer";
import { url } from "../utils/apiRoute";

export const login = async (dispatch, user) => {
    dispatch(loginStart())

    try {
        const res = await axios.post(url + 'auth/login', user)
        dispatch(loginSuccess(res.data)) && window.location.replace('/')
    } catch (error) {
        dispatch(loginFail()) && window.location.reload('/login')
    }
}


export const Logout = async (dispatch, user) => {
    dispatch(logout())
}

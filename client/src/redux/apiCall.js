import axios from "axios";
import { loginFail, loginStart, loginSuccess, logout } from "./userReducer";
import { url } from "../utils/apiRoute";

export const login = async (dispatch, user) => {
    dispatch(loginStart())

    try {
        const res = await axios.post(url + 'auth/login', user)
        dispatch(loginSuccess(res.data))
    } catch (error) {
        dispatch(loginFail)
    }
}


export const logoutUser = (dispatch) => {
    dispatch(logout())
}

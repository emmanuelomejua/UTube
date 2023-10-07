export const ACTION_TYPES = {
    LOGIN_START: 'LOGIN_START',
    LOGIN_FAIL: 'LOGIN_FAIL',
    LOGIN_SUCCESS:'LOGIN_SUCCESS',
    LOGOUT: 'LOGOUT'
}



export const loginStart = (userCredentails) => ({
    type: ACTION_TYPES.LOGIN_START
})

export const loginSuccess = (user) => ({
    type: ACTION_TYPES.LOGIN_SUCCESS,
    payload: user
})

export const loginFailure = (error) => ({
    type: ACTION_TYPES.LOGIN_FAIL,
    payload: error
})

export const logout = () => ({
    type: ACTION_TYPES.LOGOUT
})
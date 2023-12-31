

export const loginStart = (userCredentails) => ({
    type: 'LOGIN_START'
})

export const loginSuccess = (user) => ({
    type: 'LOGIN_SUCCESS',
    payload: user
})

export const loginFailure = (error) => ({
    type: 'LOGIN_FAIL',
    payload: error
})

export const logout = () => ({
    type: 'LOGOUT'
})
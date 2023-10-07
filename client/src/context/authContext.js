import { createContext, useEffect, useReducer } from "react"
import authReducer from "./aurhReducer"

const INITIAL_STATE = {
    user: null,
    loading: false,
    error: false
}

export const AuthContext = createContext(INITIAL_STATE)

export const AuthContextProvider = ({children}) => {

    const [state, dispatch] =  useReducer(authReducer, INITIAL_STATE);

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(state.user))
    }, [state.user])

    return(
        <AuthContext.Provider value={{
            user: state.user,
            loading: state.loading,
            error: state.error,
            dispatch,
        }}>
            {children}
        </AuthContext.Provider>
    )
}

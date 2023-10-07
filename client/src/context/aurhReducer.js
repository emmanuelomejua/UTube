import { ACTION_TYPES } from './authActions'


const authReducer = (state, action) => {
    switch(action.type){
        case ACTION_TYPES.LOGIN_START:
            return{
                user: null,
                error: false,
                loading: false
            };
        case ACTION_TYPES.LOGIN_SUCCESS:
            return{
                user: action.payload,
                error: false,
                loading: false
            };
        case ACTION_TYPES.LOGIN_FAIL:
            return{
                ...state,
                user: null,
                error: true
            };
        case ACTION_TYPES.LOGOUT:
            return{
                user: null,
                error: false,
                loading: false
            }
        default:
            return null
    }
}

export default authReducer;

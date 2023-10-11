
const authReducer = (state, action) => {
    switch(action.type){
        case 'LOGIN_START':
            return{
                user: null,
                error: false,
                loading: false
            };
        case 'LOGIN_SUCCESS':
            return{
                user: action.payload,
                error: false,
                loading: false
            };
        case 'LOGIN_FAIL':
            return{
                ...state,
                user: null,
                error: true
            };
        case 'LOGOUT':
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

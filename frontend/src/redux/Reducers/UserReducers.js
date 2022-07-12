import {USER_LOGIN_FAILURE, USER_LOGIN_REQUEST, USER_LOGIN_SUCESS, USER_LOGOUT , } from '../Constants/UserConstants'


export const userLoginReducer = (state  = {product : {reviews : []}} , action) => {
    switch (action.type){
        case USER_LOGIN_REQUEST:
            return {...state , loading : true}
        case USER_LOGIN_SUCESS :
            return {loading : false, userInfo : action.payload}

        case USER_LOGIN_FAILURE : 
            return {loading : false, error : action.payload}

        case USER_LOGOUT:
            return 
        default: return state 
    }
}
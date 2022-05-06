import {LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT} from './actionTypes';

export const loginSuccess = () =>{
    return{
        type:LOGIN_SUCCESS,
        payload:true,
    }
}

export const loginFailure = () =>{
    return{
        type:LOGIN_FAILURE,
        payload:false,
    }
}

export const logout = () =>{
    return{
        type:LOGOUT,
    }
}
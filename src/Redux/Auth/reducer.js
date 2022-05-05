
import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from "./actionTypes";

const initState={
    isAuth:false,
}

const AuthReducer =(state=initState, {type,payload})=>{
    switch(type){
        case LOGIN_SUCCESS:{
            return {
              ...state,
              isAuth:payload,
            }
        }
        case LOGIN_FAILURE:{
            return {
              ...state,
              isAuth:payload,
            };
        }
        case LOGOUT:{
            return{
                ...state,
                isAuth:false,
            }
        }
        default: return state;
    }
}

export default AuthReducer;
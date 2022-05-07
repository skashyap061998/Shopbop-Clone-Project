import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from "./actionTypes";
import { loadFromLocal, saveToLocal, removeFromLocal } from "../../Utils/LocalStorage";

const initState={
    isAuth:loadFromLocal('isAuth') || false,
    token:loadFromLocal('token') || '',
    userDetails: loadFromLocal('curUser') || {}
}

const AuthReducer =(state=initState, {type, payload})=> {
    switch(type){
        case LOGIN_SUCCESS:{
            const {token, email, password} = payload;
            saveToLocal('isAuth', true);
            saveToLocal('token', token);
            saveToLocal('curUser', {email, password});
            return {
              ...state,
              isAuth: true,
              token:token,
              userDetails:{email, password}
            }
        }
        case LOGIN_FAILURE:{
            return {
              ...state,
              isAuth:payload,
            };
        }
        case LOGOUT:{
            removeFromLocal('isAuth');
            removeFromLocal('token');
            removeFromLocal('curUser');
            return{
                ...state,
                isAuth:false,
                token:'',
                userDetails:{}
            }
        }
        default: return state;
    }
}

export default AuthReducer;
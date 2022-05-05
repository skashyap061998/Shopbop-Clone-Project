import {legacy_createStore as createStore, combineReducers} from 'redux';
import AuthReducer from './Redux/Auth/reducer';
import ProdReducer from './Redux/Products/reducer';

const rootReducer = combineReducers({
    auth:AuthReducer,
    prod:ProdReducer,
});

const store = createStore(rootReducer);

export default store;
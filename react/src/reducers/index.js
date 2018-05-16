import { combineReducers } from 'redux';
import loginOrLogout from './loginOrLogout'
import openSignUp from './openSignUp'

const rootReducer = combineReducers({
    user: loginOrLogout,
    openSignUp
});

export default rootReducer;
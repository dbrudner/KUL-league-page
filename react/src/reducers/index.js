import { combineReducers } from 'redux';
import loginOrLogout from './loginOrLogout'

const rootReducer = combineReducers({
    user: loginOrLogout,
});

export default rootReducer;
import { combineReducers } from 'redux';
import loginOrLogout from './login-or-logout'
import siteContext from './site-context'

const rootReducer = combineReducers({
    user: loginOrLogout,
    siteContext
});

export default rootReducer;
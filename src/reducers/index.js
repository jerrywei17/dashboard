import { combineReducers } from 'redux';

import { reducer as login } from '../container/Login';

const rootReducer = combineReducers({
    login
});

export default rootReducer;

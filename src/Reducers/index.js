import { combineReducers } from 'redux';

import { userReducer } from './userReducer';
import { browseReducer } from './browseReducer';
import { appReducer } from './appReducer';

export const rootReducer = combineReducers({
    user: userReducer,
    browse: browseReducer,
    app: appReducer
})


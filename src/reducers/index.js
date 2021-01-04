import { combineReducers } from 'redux';

import { userReducer } from './userReducer';
import { browseReducer } from './browseReducer';
import { appReducer } from './appReducer';
import { projectReducer } from './projectReducer';

export const rootReducer = combineReducers({
    user: userReducer,
    browse: browseReducer,
    project: projectReducer,
    app: appReducer
})


import { combineReducers } from 'redux';

import { userReducer } from './userReducer';
import { browseReducer } from './browseReducer';
import { appReducer } from './appReducer';
import { projectReducer } from './projectReducer';
import { profileReducer } from './profileReducer';

export const rootReducer = combineReducers({
    profile: profileReducer,
    user: userReducer,
    browse: browseReducer,
    project: projectReducer,
    app: appReducer
})


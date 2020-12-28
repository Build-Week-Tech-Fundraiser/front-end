import { combineReducers } from 'redux';

import { loginReducer } from './loginReducer';
import { projectReducer } from './projectReducer';
import { appReducer } from './appReducer';

export const rootReducer = combineReducers({
    login: loginReducer,
    project: projectReducer,
    app: appReducer
})


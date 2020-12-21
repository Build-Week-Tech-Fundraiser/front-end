import { combineReducers } from 'redux';

import { loginReducer } from './loginReducer';
import { projectReducer } from './projectReducer';

export const rootReducer = combineReducers({
    login: loginReducer,
    project: projectReducer
})


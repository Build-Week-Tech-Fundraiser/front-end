import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAIL, SET_CREDENTIALS } from '../actions/index';

const initialState = {
    credentials: null,
    isLoading: false,
    message: localStorage.getItem('token') ? 'Logged in' : 'Not logged in',
    token: null
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case(LOGIN_START):
            return ({
                ...state,
                isLoading: true,
                message: 'Logging in'
            })
        case(LOGIN_SUCCESS):
            return ({
                ...state,
                isLoading: false,
                message: action.payload.message,
                token: action.payload.token
            })
        case(LOGIN_FAIL):
            return ({
                ...state,
                isLoading: false,
                message: action.payload,
            })
        case(SET_CREDENTIALS):
            return ({
                ...state,
                credentials: action.payload
            })
        default:
            return state;
    }
}
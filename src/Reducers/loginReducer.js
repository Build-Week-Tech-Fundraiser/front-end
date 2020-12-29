import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAIL } from '../actions/index';

const initialState = {
    isLoading: false,
    message: 'Not logged in',
    token: null
};

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case(LOGIN_START):
            return ({
                ...state,
                isLoading: true
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
                message: action.payload.message,
                token: action.payload.token
            })
        default:
            return state;
    }
}
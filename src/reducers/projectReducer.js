import { 
    PROJECT_FETCH_START, 
    PROJECT_FETCH_SUCCESS, 
    PROJECT_FETCH_FAIL,
    CHECK_FUNDERS,
    SET_IS_HOST } from '../actions/index';

const initialState = {
    isHost: false,
    isFunder: false,
    isLoading: false,
    message: '',
    title: '',
    description: '',
    host: {},
    funders: []
}

export const projectReducer = (state = initialState, action) => {
    switch (action.type) {
        case (PROJECT_FETCH_START):
            return ({
                ...state,
                isLoading: true
            })
        case (PROJECT_FETCH_SUCCESS):
            return ({
                ...state,
                isLoading: false,
                message: '',
                title: action.payload.title,
                description: action.payload.description,
                host: action.payload.host,
                funders: action.payload.funders,
            })
        case (PROJECT_FETCH_FAIL):
            return ({
                ...state,
                isLoading: false,
                message: action.payload
            })
        case (CHECK_FUNDERS):
            return ({
                ...state,
                isFunder: action.payload.filter(funder => 
                    funder.username === localStorage.getItem('username')).length === 1 ? true : false
            })
        case (SET_IS_HOST):
            return ({
                ...state,
                isHost: action.payload
            })
        default:
            return state
    }
}
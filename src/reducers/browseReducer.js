import { BROWSE_FETCH_START, BROWSE_FETCH_SUCCESS, BROWSE_FETCH_FAIL } from '../actions/index';

const initialState = {
    isLoading: false,
    projectList: [],
    message: ''
};

export const browseReducer = (state = initialState, action) => {
    switch (action.type) {
        case(BROWSE_FETCH_START):
            return ({
                ...state,
                isLoading: true
            })
        case(BROWSE_FETCH_SUCCESS):
            return ({
                ...state,
                isLoading: false,
                projectList: action.payload
            })
        case(BROWSE_FETCH_FAIL):
            return ({
                ...state,
                isLoading: false,
                message: action.payload
            })
        default:
            return state;
    }
}
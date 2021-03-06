import { BROWSE_FETCH_START, BROWSE_FETCH_SUCCESS, BROWSE_FETCH_FAIL, UPDATE_PROJECT, ADD_PROJECT } from '../actions/index';

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
                projectList: action.payload.reverse()
            })
        case(BROWSE_FETCH_FAIL):
            return ({
                ...state,
                isLoading: false,
                message: action.payload
            })
        case(UPDATE_PROJECT):
            return ({
                ...state,
                projectList: state.projectList.map(project => {
                    if(project.id === action.payload.id) 
                        return action.payload;
                    else
                        return project
                })
            })
        case(ADD_PROJECT):
            return ({
                ...state,
                projectList: [
                    action.payload,
                    ...state.projectList
                ]
            })
        default:
            return state;
    }
}
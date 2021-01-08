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
                projectList: action.payload.reverse()
            })
        case(BROWSE_FETCH_FAIL):
            return ({
                ...state,
                isLoading: false,
                message: action.payload
            })
        case('UPDATE_PROJECT'):
            return ({
                ...state,
                projectList: state.projectList.map(project => {
                    if(project.id === action.payload.id) 
                        return action.payload;
                    else
                        return project
                })
            })
<<<<<<< HEAD
=======
        case(ADD_PROJECT):
            return ({
                ...state,
                projectList: [
                    action.payload,
                    ...state.projectList
                ]
            })
>>>>>>> 04bb44c... added project form functionality. also reversed order of projectList to show most recent at the top
        default:
            return state;
    }
}
import { 
    PROFILE_FETCH_START, 
    PROFILE_FETCH_SUCCESS, 
    PROFILE_FETCH_FAIL
} from '../actions/index';

const initialState = {
    isLoading: false,
    isGuest: false,
    message: '',
    credentials: {},
    userProjects: [],
}

export const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case (PROFILE_FETCH_START):
            return ({
                ...state,
                isLoading: true
            })
        case (PROFILE_FETCH_SUCCESS):
            return ({
                ...state,
                isLoading: false,
                credentials: action.payload.credentials,
                userProjects: action.payload.userProjects
            })
        case (PROFILE_FETCH_FAIL):
            return ({
                ...state,
                isLoading: false,
                message: action.payload,
                credentials: {},
                userProjects: []
            })
        default:
            return state;
    }
}
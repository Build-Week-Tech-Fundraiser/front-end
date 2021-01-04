import { PROJECT_FETCH_START, PROJECT_FETCH_SUCCESS, PROJECT_FETCH_FAIL} from '../actions/index';

const initialState = {
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
        default:
            return state
    }
}
import { TOGGLE_NEW_PROJECT } from '../actions/index';

const initialState = {
    creatingNewProject: false
};

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case (TOGGLE_NEW_PROJECT):
            return ({
                ...state,
                creatingNewProject: !state.creatingNewProject
            })
        default: 
            return state;
    }
}
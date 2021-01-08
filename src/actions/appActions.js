import { TOGGLE_NEW_PROJECT } from './index';

export const toggleCreatingNewProject = () => dispatch => {
    dispatch({type: TOGGLE_NEW_PROJECT})
}
import { axiosWithAuth } from '../utils/axiosWithAuth';

import { BROWSE_FETCH_START, BROWSE_FETCH_SUCCESS, BROWSE_FETCH_FAIL, UPDATE_PROJECT } from './index'
export const fetchAllProjects = () => dispatch => {
    dispatch({type: BROWSE_FETCH_START})

    axiosWithAuth()
        .get(`/projects`)
        .then(res => dispatch({type: BROWSE_FETCH_SUCCESS, payload: res.data}))
        .catch(err => dispatch({type: BROWSE_FETCH_FAIL, payload: err.response.data.message}));
}

export const updateProject = project => dispatch => {
     dispatch({type: UPDATE_PROJECT, payload: project});
}
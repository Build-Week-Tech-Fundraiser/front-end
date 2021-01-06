import { axiosWithAuth } from '../utils/axiosWithAuth';

import { 
    PROJECT_FETCH_START, 
    PROJECT_FETCH_SUCCESS, 
    PROJECT_FETCH_FAIL, 
    CHECK_FUNDERS,
    SET_IS_HOST } from '../actions/index';
import { getUserProjects } from '../utils/getUserProjects';

export const fetchProject = projectId => dispatch => {
    dispatch({type: PROJECT_FETCH_START});
    axiosWithAuth()
        .get(`/projects/${projectId}`)
        .then(res => {
            dispatch({type: PROJECT_FETCH_SUCCESS, payload: res.data})
            dispatch({type: CHECK_FUNDERS, payload: res.data.funders})
        })
        .catch(err => dispatch({type: PROJECT_FETCH_FAIL, payload: err.response.data}));
} 

export const fundProject = projectId => dispatch => {
    // this is an asynchronous, anonymous, arrow function that automatically calls itself. 
    (async () => {
        try {
            // We only have access to the username but we need the id that goes along with it 
            // so a GET request is made to /users/:username
            const userRes = await axiosWithAuth().get(`/users/${localStorage.getItem('username')}`);
            // We only need the id so userId is declared for clarity
            const userId = userRes.data.id;
            // This makes the post request 
            const projectRes = await axiosWithAuth().post(`/projects/${projectId}/fund/${userId}`);
            // The PROJECT_FETCH_SUCCESS action type can be used to update the state in the store
            dispatch({type: PROJECT_FETCH_SUCCESS, payload: projectRes.data})
            // update status of whether or not user is a funder
            dispatch({type: CHECK_FUNDERS, payload: projectRes.data.funders})
        } catch (err) {
            dispatch({type: PROJECT_FETCH_FAIL, payload: err.response.data.message})
        }
    })()
}

export const defundProject = projectId => dispatch => {
    (async () => {
        try {
            const userRes = await axiosWithAuth().get(`/users/${localStorage.getItem('username')}`);
            const userId = userRes.data.id;
            const projectRes = await axiosWithAuth().delete(`/projects/${projectId}/fund/${userId}`);
            dispatch({type: PROJECT_FETCH_SUCCESS, payload: projectRes.data})
            dispatch({type: CHECK_FUNDERS, payload: projectRes.data.funders})
        } catch (err) {
            dispatch({type: PROJECT_FETCH_FAIL, payload: err.response.data.message})
        }
    })()
}
import { axiosWithAuth } from '../utils/axiosWithAuth';

import { PROJECT_FETCH_START, PROJECT_FETCH_SUCCESS, PROJECT_FETCH_FAIL} from '../actions/index';

export const fetchProject = projectId => dispatch => {
    dispatch({type: PROJECT_FETCH_START});
    axiosWithAuth()
        .get(`/projects/${projectId}`)
        .then(res => dispatch({type: PROJECT_FETCH_SUCCESS, payload: res.data}))
        .catch(err => dispatch({type: PROJECT_FETCH_FAIL, payload: err.response.data}));
} 

export const fundProject = projectId => dispatch => {
    // dispatch({type: PROJECT_FETCH_START})
    (async () => {
        try {
            const userRes = await axiosWithAuth().get(`/users/${localStorage.getItem('username')}`);
            const userId = userRes.data.id;
            const projectRes = await axiosWithAuth().post(`/projects/${projectId}/fund/${userId}`);
            dispatch({type: PROJECT_FETCH_SUCCESS, payload: projectRes.data})
            console.log(projectRes.data);
        } catch (err) {
            dispatch({type: PROJECT_FETCH_FAIL, payload: err.response.data.message})
        }
    })()
}
import axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth';

export const fetchProject = projectId => dispatch => {
    // dispatch({type: "PROJECT_START_FETCH"});
    axiosWithAuth()
        .get(`/projects/${projectId}`)
        .then(res => console.log(res))
        .catch(err => console.error(err));
} 
import {
    PROFILE_FETCH_START,
    PROFILE_FETCH_SUCCESS,
    PROFILE_FETCH_FAIL,
} from './index';

import { getUserCredentials } from '../utils/getUserCredentials';
import { getUserProjects } from '../utils/getUserProjects';

export const fetchProfile = username => dispatch => {
    dispatch({type: PROFILE_FETCH_START});
    (async () => {
        try {
            const creds = await getUserCredentials(username);
            // const userProjectsRes = await axiosWithAuth().get(`projects/users/${creds.id}`);
            const userProjects = await getUserProjects(username);
            const payload = {credentials: creds, userProjects: userProjects};
            dispatch({type: PROFILE_FETCH_SUCCESS, payload: payload});
        } catch(err) {
            dispatch({type: PROFILE_FETCH_FAIL, payload: `${err.response.status} ${err.response.statusText}`})
        }
    })()
}
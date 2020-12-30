import { axiosWithAuth } from '../utils/axiosWithAuth';

import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAIL, SET_CREDENTIALS } from './index';

export const setCredentials = credentials => {
    return {type: SET_CREDENTIALS, payload: credentials};
}

export const fetchUserInfo = username => dispatch => {
    axiosWithAuth()
        .get(`/users/${username}`)
        .then(res => {
            dispatch(setCredentials(res.data));
        })
        .catch(err => console.error(err));
}

export const fetchToken = credentials => dispatch => {
    let type = credentials.firstname ? 'register' : 'login';
    dispatch({type: LOGIN_START});
    
    axiosWithAuth()
        .post(`/users/${type}`, credentials)
        .then(res => {
            fetchUserInfo(credentials.username);
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('username', credentials.username)
            dispatch({type: LOGIN_SUCCESS, payload: res.data})
            window.location.href = '/';
        })
        .catch(err => {
            dispatch({type: LOGIN_FAIL, payload: err.response.data})
        });
}

import { axiosWithAuth } from '../utils/axiosWithAuth';

import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAIL } from './index';

export const fetchToken = credentials => dispatch => {
    let type = credentials.firstname ? 'register' : 'login';
    dispatch({type: LOGIN_START});
    
    axiosWithAuth()
        .post(`/users/${type}`, credentials)
        .then(res => {
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('username', credentials.username);
            dispatch({type: LOGIN_SUCCESS, payload: res.data});
            window.location.href = '/';
        })
        .catch(err => {
            dispatch({type: LOGIN_FAIL, payload: err.response.data})
        });
}
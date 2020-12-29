import axios from 'axios';

import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAIL } from './index';

export const fetchToken = credentials => dispatch => {
    let type = credentials.firstname ? 'register' : 'login';
    console.log(credentials);
    dispatch({type: LOGIN_START});
    
    axios
        .post(`https://tech-funder.herokuapp.com/api/users/${type}`, credentials)
        .then(res => dispatch({type: LOGIN_SUCCESS, payload: res.data}))
        .catch(err => dispatch({type: LOGIN_FAIL, payload: err.response.data}));
}
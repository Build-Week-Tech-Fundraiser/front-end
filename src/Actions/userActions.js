import axios from 'axios';

import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAIL } from './index';

export const fetchToken = credentials => dispatch => {
    console.log(credentials);
    dispatch({type: LOGIN_START});
    
    axios
        .get('https://tech-funder.herokuapp.com/api/projects/')
        .then(res => console.log(res))
        .catch(err => console.error(err.response));
}
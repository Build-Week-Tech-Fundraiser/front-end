/* 
    All actions types should be declared as a const variable  
    and the variable name in UPPERCASE to represent a global 
    constant.

    These constants will primarily be used for action creators
    and their respected reducers. 
*/

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
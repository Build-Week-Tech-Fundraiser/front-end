import React from 'react';
import { connect } from 'react-redux';
import { fetchToken } from '../actions/userActions';

import Login from '../components/Login';
import Register from '../components/Register';

class Authentication extends React.Component {

    render() {
        return (
            <div>
                <Login />
                <Register />
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state.user);
    return state.user;
}

export default connect(mapStateToProps, { fetchToken })(Authentication)
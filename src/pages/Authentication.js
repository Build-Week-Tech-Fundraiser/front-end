import React from 'react';
import { connect } from 'react-redux';

import Login from '../components/Login';
import Register from '../components/Register';
import { AuthContainer } from '../components/styles/AuthenticationStyles';

class Authentication extends React.Component {

    render() {
        return (
            <AuthContainer>
                <Login />
                <Register />
            </AuthContainer>
        )
    }
}

const mapStateToProps = state => {
    return state.user;
}

export default connect(mapStateToProps, { })(Authentication)
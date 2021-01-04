import React from 'react';
import { connect } from 'react-redux';

import { fetchToken } from '../actions/userActions';
import { FormContainer } from './styles/AuthenticationStyles';
import { Button } from './styles/ButtonStyles';

class Login extends React.Component {

    state = {
        credentials: {
            username: '',
            password: ''
        }
    }

    handleChange = e => {
        this.setState({
            ...this.state,
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.fetchToken(this.state.credentials);
        this.setState({
            ...this.state,
            credentials: {
                username: '',
                password: '',
                firstname: '',
                lastname: ''
            }
        })
    }

    render() {
        return (
            <FormContainer>
                <form onSubmit={this.handleSubmit}>
                    <div className='input-container'>
                        <label>username: </label>
                        <input 
                            value={this.state.credentials.username}
                            onChange={this.handleChange}
                            type='text' 
                            name='username' 
                        />

                    </div>
                    <div className='input-container'>
                        <label>password: </label>
                        <input 
                            value={this.state.credentials.password}
                            onChange={this.handleChange}
                            type='password' 
                            name='password'
                        />
                    </div>
                    <Button>login</Button>
                </form>
            </FormContainer>
        )
    }
}

export default connect(null, { fetchToken })(Login)
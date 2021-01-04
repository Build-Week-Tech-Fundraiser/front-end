import React from 'react';
import { connect } from 'react-redux';

import { fetchToken } from '../actions/userActions';
import { FormContainer } from './styles/AuthenticationStyles';
import { Button } from './styles/ButtonStyles';


class Register extends React.Component {

    state = {
        credentials: {
            username: '',
            password: '',
            firstname: '',
            lastname: ''
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
                    <div className='input-container'>
                        <label>first name: </label>                    
                        <input 
                            value={this.state.credentials.firstname}
                            onChange={this.handleChange}
                            type='text' 
                            name='firstname'
                        />
                    </div>
                    <div className='input-container'>
                        <label>last name: </label>                    
                        <input 
                            value={this.state.credentials.lastname}
                            onChange={this.handleChange}
                            type='text' 
                            name='lastname'
                        />
                    </div>
                    <Button>register</Button>
                </form>
            </FormContainer>
        )
    }
}

export default connect(null, { fetchToken })(Register)
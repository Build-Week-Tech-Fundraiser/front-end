import React from 'react';
import { connect } from 'react-redux';
import { fetchToken, setCredentials } from '../actions/userActions';

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
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>username: </label>
                    <input 
                        value={this.state.credentials.username}
                        onChange={this.handleChange}
                        type='text' 
                        name='username'
                    />
                    <label>password: </label>
                    <input 
                        value={this.state.credentials.password}
                        onChange={this.handleChange}
                        type='password' 
                        name='password'
                    />
                    <label>first name: </label>                    
                    <input 
                        value={this.state.credentials.firstname}
                        onChange={this.handleChange}
                        type='text' 
                        name='firstname'
                    />
                    <label>last name: </label>                    
                    <input 
                        value={this.state.credentials.lastname}
                        onChange={this.handleChange}
                        type='text' 
                        name='lastname'
                    />
                    <button>register</button>
                </form>
            </div>
        )
    }
}

export default connect(null, { fetchToken, setCredentials })(Register)
import React from 'react';
import { connect } from 'react-redux';
import { fetchToken, setCredentials } from '../actions/userActions';

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
                    <button>login</button>
                </form>
            </div>
        )
    }
}

export default connect(null, { fetchToken, setCredentials })(Login)
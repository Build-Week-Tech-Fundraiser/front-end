import React from 'react';
import { connect } from 'react-redux';
import { fetchToken } from '../actions/userActions';

class LoginRegister extends React.Component {

    state = {
        loginCreds: {
            username: '',
            password: ''
        },
        registerCreds: {
            username: '',
            password: '',
            firstname: '',
            lastname: ''
        }  
    }

    handleLoginChange = e => {
        this.setState({
            ...this.state,
            loginCreds: {
                ...this.state.loginCreds,
                [e.target.name]: e.target.value
            }
        })
    }

    handleRegisterChange = e => {
        this.setState({
            ...this.state,
            registerCreds: {
                ...this.state.registerCreds,
                [e.target.name]: e.target.value
            }
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.fetchToken(this.state.loginCreds);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>username: </label>
                    <input 
                        value={this.state.loginCreds.username}
                        onChange={this.handleLoginChange}
                        type='text' 
                        name='username' 
                    />
                    <label>password: </label>
                    <input 
                        value={this.state.loginCreds.password}
                        onChange={this.handleLoginChange}
                        type='password' 
                        name='password'
                    />
                    <button>login</button>
                </form>
                <form onSubmit={this.handleSubmit}>
                    <label>username: </label>
                    <input 
                        value={this.state.registerCreds.username}
                        onChange={this.handleRegisterChange}
                        type='text' 
                        name='username'
                    />
                    <label>password: </label>
                    <input 
                        value={this.state.registerCreds.password}
                        onChange={this.handleRegisterChange}
                        type='password' 
                        name='password'
                    />
                    <label>first name: </label>                    
                    <input 
                        value={this.state.registerCreds.firstname}
                        onChange={this.handleRegisterChange}
                        type='text' 
                        name='firstname'
                    />
                    <label>last name: </label>                    
                    <input 
                        value={this.state.registerCreds.lastname}
                        onChange={this.handleRegisterChange}
                        type='text' 
                        name='lastname'
                    />
                    <button>register</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state.login);
    return state.login;
}

export default connect(mapStateToProps, { fetchToken })(LoginRegister)
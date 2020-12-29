import React from 'react';

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
                [e.target.name]: e.target.value
            }
        })
    }
    handleRegisterChange = e => {
        this.setState({
            ...this.state,
            registerCreds: {
                [e.target.name]: e.target.value
            }
        })
    }

    render() {
        return (
            <div>
                <form>
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
                <form>
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

export default LoginRegister
import React from 'react';

import { Button } from '../components/styles/ButtonStyles';

class Home extends React.Component {

    handleLogin = e => {
        if(e.target.value === 'login')
            window.location.href = '/login';
        else {
            localStorage.removeItem('token');
            localStorage.removeItem('username');
            window.location.href = '/login';        
        }

    }

    render() {
        return (
            <div>
                Home page
                <Button onClick={this.handleLogin} name='/login' className='login'>{localStorage.getItem('token') ? 'logout' : 'login'}</Button>
            </div>
        )
    }
}

export default Home
import React from 'react';

import { NavContainer } from './styles/NavigationStyles';
import { Button } from './styles/ButtonStyles';

class Navigation extends React.Component {

    handleClick = e => {
        e.preventDefault();
        if (e.target.textContent === 'logout') {
            localStorage.removeItem('token');
            localStorage.removeItem('username');
        }
        window.location.href = e.target.name;
    }

    render() {
        return (
            <NavContainer>
                <nav>
                    <ul>
                        <li>
                            <Button onClick={this.handleClick} name='/'>browse</Button>
                        </li>
                        <li>
                            <Button onClick={this.handleClick} name='/home'>home</Button>
                        </li>
                        <li>
                            <Button onClick={this.handleClick} name='/login'>{localStorage.getItem('token') ? 'logout' : 'login'}</Button>
                        </li>
                    </ul>
                </nav>
            </NavContainer>
        )
    }
}

export default Navigation
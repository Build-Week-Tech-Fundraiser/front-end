import React from 'react';

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
            <div>
                <nav>
                    <ul>
                        <li>
                            <button onClick={this.handleClick} name='/'>browse</button>
                        </li>
                        <li>
                            <button onClick={this.handleClick} name='/login'>{localStorage.getItem('token') ? 'logout' : 'login'}</button>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Navigation
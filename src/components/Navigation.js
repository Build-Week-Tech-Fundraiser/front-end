import React from 'react';

import { NavContainer } from './styles/NavigationStyles';

import NewProjectButton from './NewProjectButton';
import HomeButton from './HomeButton';
import UserButton from './UserButton';

class Navigation extends React.Component {

    constructor(props) {
        super();
        this.iconSize = '35px';
    }

    redirect = path => {
        window.location.href = path;
    }

    render() {
        return (
            <NavContainer>
                <nav>
                    <ul>
                        <li>
                            <HomeButton onClick={() => this.redirect('/')} stroke='#ffffff' size={this.iconSize}/>
                        </li>
                        <li>
                            <NewProjectButton size={this.iconSize} stroke='#ffffff'/>
                        </li>
                        <li>
                            <UserButton onClick={() => this.redirect('/home')} stroke='#ffffff' size={this.iconSize}/>
                        </li>
                    </ul>
                </nav>
            </NavContainer>
        )
    }
}

export default Navigation
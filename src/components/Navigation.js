import React from 'react';
import { connect } from 'react-redux';


import { toggleCreatingNewProject } from '../actions/appActions'; 

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

    handleNewProject = e => {
        this.props.toggleCreatingNewProject();
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
                            <NewProjectButton onClick={this.handleNewProject} size={this.iconSize} stroke='#ffffff'/>
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

export default connect(null, { toggleCreatingNewProject })(Navigation)
import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import { Button } from '../components/styles/ButtonStyles';
import { fetchProfile } from '../actions/profileActions';
import ProjectList from '../components/ProjectList';

class Profile extends React.Component {

    constructor(props) {
        super(props);
        this.username = this.props.match.params.username;
    }

    componentDidMount() {
        this.props.fetchProfile(this.username);
    }

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
                <h2 className='fullname'>{this.props.credentials.firstname} {this.props.credentials.lastname}</h2>
                <p className='username'>@{this.props.credentials.username}</p>
                {this.props.userProjects.length >= 1 && <ProjectList projectList={this.props.userProjects}/>}
                {this.props.message && <p>{this.props.message}</p>}
                <Button onClick={this.handleLogin} name='/login' className='login'>{localStorage.getItem('token') ? 'logout' : 'login'}</Button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state.profile);
    return state.profile;
}

export default connect(mapStateToProps, { fetchProfile })(withRouter(Profile))
import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { fetchAllProjects } from '../actions/browseActions';
import ProjectList from '../components/ProjectList';
 
class Browse extends React.Component {

    componentDidMount() {
        this.props.fetchAllProjects()
    }

    render() {
        return (
            <div>
                <BrowseBody>
                    {localStorage.getItem('token') ? 
                        <ProjectList projectList={this.props.projectList}/> 
                        :
                        <p>login to view projects</p>}
                </BrowseBody>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return state.browse
}
export default connect(mapStateToProps, { fetchAllProjects })(Browse)

//styles

//styles

const BrowseBody = styled.div`
    display: flex;
    justify-content: center;
    background: #444;
    min-height: 100vh;
`;

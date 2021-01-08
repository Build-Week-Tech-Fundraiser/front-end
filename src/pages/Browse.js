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
                        <ProjectList/> 
                        :
                        <p>login to view projects</p>}
                </BrowseBody>
            </div>
        )
    }
}

export default connect(null, { fetchAllProjects })(Browse)

//styles

const MiniHeader = styled.header`
    width: 100%;
    text-align: center;
    padding: 10px;
    background-color: black;
    color: #fff;
    font-size: 1.2rem;
` 

const BrowseBody = styled.div`
    display: flex;
    justify-content: center;
    background: #444;
    min-height: 100vh;
`;

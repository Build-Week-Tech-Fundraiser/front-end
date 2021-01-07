import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { fetchAllProjects } from '../actions/browseActions';
import ProjectList from '../components/ProjectList';

import styled from 'styled-components'

class Browse extends React.Component {

    componentDidMount() {
        this.props.fetchAllProjects()
    }

    render() {
        return (
            <div>
                <MiniHeader>
                    <h2>Recent Projects</h2>
                </MiniHeader>

                <ProjectListContainer>
                    <ProjectList/>
                </ProjectListContainer>
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

const ProjectListContainer = styled.div`
    display: flex;
    justify-content: center;
`;

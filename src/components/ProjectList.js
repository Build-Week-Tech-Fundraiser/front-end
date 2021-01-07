import React from 'react';
import { connect } from 'react-redux';

import ProjectCard from './ProjectCard';

import styled from 'styled-components'

class ProjectList extends React.Component {

    render() {
        return(
            <ProjectListContainer>
                {localStorage.getItem('token') && this.props.projectList.map(project => 
                    <ProjectCard project={project} key={project.id} id={project.id}/>)}
            </ProjectListContainer>
        )
    }
}

const mapStateToProps = state => {
    return state.browse
}

export default connect(mapStateToProps)(ProjectList)

const ProjectListContainer = styled.div`
    width: 100%;
    background-color: #444;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
` 
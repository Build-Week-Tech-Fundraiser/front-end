import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import ProjectCard from './ProjectCard';

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


export default ProjectList

//styles

//styles

const ProjectListContainer = styled.div`
    width: 80%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
` 

// const ProjectCardContainer = styled.div`
//     width: 80%;
//     display: flex;
//     flex-flow: column nowrap;
//     align-items: center;
// `;

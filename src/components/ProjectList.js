import React from 'react';
import { connect } from 'react-redux';

import ProjectCard from './ProjectCard';

class ProjectList extends React.Component {

    render() {
        return(
            <div>
                {localStorage.getItem('token') && this.props.projectList.map(project => 
                    <ProjectCard project={project} key={project.id} id={project.id}/>)}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return state.browse
}

export default connect(mapStateToProps)(ProjectList)
import React from 'react';

class ProjectCard extends React.Component {
    
    handleClick = e => {
        window.location.href = `/project/${this.props.id}`;
    }

    render() {
        return (
            <div onClick={this.handleClick}>
                <h3>{this.props.project.title}</h3>
                <p>{this.props.project.description}</p>
                <br/>
            </div>
        )
    }
}

export default ProjectCard
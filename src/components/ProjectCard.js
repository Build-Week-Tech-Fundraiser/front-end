import React from 'react';


import styled from 'styled-components'

class ProjectCard extends React.Component {
    
    handleClick = e => {
        window.location.href = `/project/${this.props.id}`;
    }

    

    render() {
        return (
            <SimpleCard onClick={this.handleClick}>
                <h3>{this.props.project.title}</h3>
                <p>{this.props.project.description}</p>
                <br/>
                {
                    console.log(this.props.project)
                }
            </SimpleCard>
        )
    }
}

export default ProjectCard



const SimpleCard = styled.div`
    width: 200px;
    height: 150px;
    background-color: black;
    border: 1px solid white;
    color: #fff;
    padding: 10px;
    margin: 10px;
    transition: all 500ms ease-out;

    &:hover{
        box-shadow: 5px 10px 30px rgba(255,215,0,1);
    }
` 
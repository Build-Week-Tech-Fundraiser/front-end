import React from 'react';
import styled from 'styled-components';


import styled from 'styled-components'

class ProjectCard extends React.Component {
    
    handleClick = e => {
        window.location.href = `/project/${this.props.id}`;
    }

    

    render() {
        console.log(this.props.project)
        return (
            // <SimpleCard onClick={this.handleClick}>
            //     <h3>{this.props.project.title}</h3>
            //     <p>{this.props.project.description}</p>
            //     <br/>
            //     {
            //         console.log(this.props.project)
            //     }
            // </SimpleCard>
            <ProjectCardStyle onClick={this.handleClick}>
                <div className='card-header'>
                    <h3>{this.props.project.title}</h3>
                    <span className='username'>@{this.props.project.host.username}</span>
                </div>
                <div className='card-body-container'>
                    <img src={`https://picsum.photos/id/${this.props.id}/400`} alt='random'/>
                    <p>{this.props.project.description}</p>
                </div>
            </ProjectCardStyle>
        )
    }
}

export default ProjectCard

//styles

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

const ProjectCardStyle = styled.div`
    width: 100%;
    margin-bottom: 5px;

    .card-header {
        display: flex;
        flex-direction: column;
        align-items: baseline;
        padding: 0 5px;
        h3 {
            font-size: 1.5rem;
        }
    
        .username {
            width: auto%;
            font-size: 1rem;
            font-style: italic;
            color: gray;
            padding-bottom: 5px;
    
            /* border: thin black solid; */
            &:hover {
                color: lightblue; 
            }
        }


        border-bottom: thin black solid;
    }

    border: thin black solid;
`;

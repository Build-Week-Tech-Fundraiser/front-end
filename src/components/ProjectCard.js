import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import { updateProject } from '../actions/browseActions';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { getUserId } from '../utils/getUserId';
import { deleteProject } from '../utils/deleteProject';
import FundButton from '../components/FundButton';
import DeleteProjectButton from '../components/DeleteProjectButton';

class ProjectCard extends React.Component {
    
    state = {
        isFunding: false,
        isHost: false
    }

    componentDidMount() {
        this.props.project.funders.forEach(funder => 
            funder.username === localStorage.getItem('username') ? 
            this.setState({
                ...this.state,
                isFunding: true
            }) : null)
        if(this.props.project.host.username === localStorage.getItem('username')) 
            this.setState({
                ...this.state,
                isHost: true
            });
    }

    handleClick = e => {
        window.location.href = `/project/${this.props.id}`;
    }

    handleToggleFund = e => {
        (async () => {
            try {
                const userId = await getUserId(localStorage.getItem('username'));
                let projectRes;
                if (this.state.isFunding) {
                    projectRes =  await axiosWithAuth()
                        .delete(`/projects/${this.props.project.id}/fund/${userId}`);
                }
                else {
                    projectRes = await axiosWithAuth()
                        .post(`/projects/${this.props.project.id}/fund/${userId}`);
                }
                this.props.updateProject(projectRes.data);
                this.setState({
                    ...this.state,
                    isFunding: !this.state.isFunding
                })
            } catch (err) {
                console.log(err.response)
            }
        })()
    }

    handleDeleteProject = e => {
        (async () => {
            await deleteProject(this.props.project.id);
            window.location.href = this.props.match.url;
        })()
    }

    render() {
        console.log(this.state);
        return (
            <ProjectCardStyle>
                <div className='card-header'>
                    <h3 onClick={this.handleClick}>{this.props.project.title}</h3>
                    <span className='username'>@{this.props.project.host.username}</span>
                </div>
                <div className='card-body-container'>
                    <img onClick={this.handleClick} 
                        src={`https://picsum.photos/600?random=${this.props.id}`} alt='random'/>
                    <div className='card-body'>
                        <p>
                            {this.props.project.funders.length} funders: 
                            {this.props.project.funders.map(funder => 
                                <span className='username' key={funder.id}>@{funder.username} </span>
                            )}
                        </p>
                        <p className='description'>{this.props.project.description}</p>
                        <span className='action-buttons'>
                            {this.state.isHost && <DeleteProjectButton delete={this.handleDeleteProject} size='35px'/>}
                            <FundButton  
                                toggle={this.handleToggleFund}
                                size='35px' 
                                checked={this.state.isFunding}
                            />
                        </span>
                    </div>
                </div>
            </ProjectCardStyle>
        )
    }
}

export default connect(null, { updateProject })(withRouter(ProjectCard))

//styles

// const SimpleCard = styled.div`
//     width: 200px;
//     height: 150px;
//     background-color: black;
//     border: 1px solid white;
//     color: #fff;
//     padding: 10px;
//     margin: 10px;
//     transition: all 500ms ease-out;

//     &:hover{
//         box-shadow: 5px 10px 30px rgba(255,215,0,1);
//     }
// ` 

const ProjectCardStyle = styled.div`
    width: 100%;
    margin-bottom: 10px;

    .card-header {
        display: flex;
        flex-direction: column;
        align-items: baseline;
        padding: 0 5px;
        border-bottom: thin black solid;
        background: #7a7a7a;
        color: #ffffff;
        h3 {
            font-size: 1.4rem;

            &:hover {
                color: burlywood;
            }
        }
    
    }
    
    .username {
        width: auto;
        font-size: 1rem;
        font-style: italic;
        color: #000000;
        padding-bottom: 5px;

        &:hover {
            color: lightblue; 
        }
    }

    .card-body-container {
        display: flex;
        background: #dbdbdb;

        img {
            width: 50%;
        }

        .card-body {
            width: 100%;
            display: flex;
            flex-flow: column nowrap;
            justify-content: space-between;
            margin: 5px;
            .description {
                height: 70%;
                font-size: 1.1rem;
            }

            .action-buttons {
                display: flex;
                justify-content: space-between;
            }
        }
    }
`;

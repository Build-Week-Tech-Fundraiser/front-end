import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { getUserId } from '../utils/getUserId';
import { postNewProject } from '../actions/projectActions';
import { toggleCreatingNewProject } from '../actions/appActions';
import { Button } from './styles/ButtonStyles';

class ProjectForm extends React.Component {

    state = {
        message: '',
        inputText: {
            title: '',
            description: '',
        }
    }

    handleChange = e => {
        this.setState({
            ...this.state,
            message: '',
            inputText: {
                ...this.state.inputText,
                [e.target.name]: e.target.value
            }
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        if(this.state.inputText.title && this.state.inputText.title)
            (async () => {
                const username = localStorage.getItem('username');
                const userId = await getUserId(username);
                this.props.postNewProject({...this.state.inputText, host: userId});
                this.props.toggleCreatingNewProject();
            })() 
        else
            this.setState({
                ...this.state,
                message: 'Title and description required'
            })
    }

    render() {
        return (
            <ProjectFormContainer className='project-form-container'>
                <h3>New Project</h3>
                {this.state.message && <p className='message'>{this.state.message}</p>}
                <form onSubmit={this.handleSubmit}>
                    <input 
                        onChange={this.handleChange}
                        value={this.state.inputText.title} 
                        type='text' 
                        name='title'
                        className='title'
                        placeholder='title'
                    />
                    <textarea 
                        onChange={this.handleChange}
                        value={this.state.inputText.description} 
                        name='description'
                        className='description'
                        placeholder='description'
                        rows='16' cols='32'
                    />
                    <Button className='submit-button'>create project</Button>
                </form>
            </ProjectFormContainer>
        )
    }
}

export default connect(null, { postNewProject, toggleCreatingNewProject })(ProjectForm)

//styles

const ProjectFormContainer = styled.div`
    width: 33vw;
    height: 70vh;
    /* backdrop-filter: blur(40px); */
    background: #2e2e2e;
    position: fixed;
    left: 33vw;
    top: 20vh;
    h3 {
        margin: 10px;
        color: #ffffff;
        text-align: center;
        font-size: 2rem;
    }
    .message {
        text-align: center;
        color: red;
        margin-bottom: 5px;
    }
    form {
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        .title {
            font-size: 1.5rem;
            margin-top: 10px;
            margin-bottom: 20px;
        }
        .description {
            font-size: 1.2rem;
        }
        .submit-button {
            margin: 20px;
        }
    }
`;
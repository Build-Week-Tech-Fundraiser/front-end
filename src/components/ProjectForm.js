import React from 'react';

import { getUserId } from '../utils/getUserId';
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
        (async () => {
            const username = localStorage.getItem('username')
            const userId = await getUserId(username);
            console.log({...this.state.inputText, host: userId})
            // postNewProject({...this.state.inputText, host: userId})
        })() 
    }

    render() {
        return (
            <div>
                {this.state.message && <p>{this.state.message}</p>}
                <form onSubmit={this.handleSubmit}>
                    <label>title: </label>
                    <input 
                        onChange={this.handleChange}
                        value={this.state.inputText.title} 
                        type='text' 
                        name='title'
                    />
                    <label>description: </label>
                    <textarea 
                        onChange={this.handleChange}
                        value={this.state.inputText.description} 
                        name='description'
                        rows='1' cols='32'
                    />
                    <Button>create project</Button>
                </form>
            </div>
        )
    }
}

export default ProjectForm
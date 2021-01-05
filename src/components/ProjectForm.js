import React from 'react';
import { connect } from 'react-redux';

import { getUserId } from '../utils/getUserId';
import { postNewProject } from '../actions/projectActions';
import { Button } from './styles/ButtonStyles';

class ProjectForm extends React.Component {

    state = {
        inputText: {
            title: '',
            description: '',
        }
    }

    handleChange = e => {
        this.setState({
            ...this.state,
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
            this.props.postNewProject({...this.state.inputText, host: userId})
        })() 
    }

    render() {
        return (
            <div>
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

export default connect(null, { postNewProject })(ProjectForm)
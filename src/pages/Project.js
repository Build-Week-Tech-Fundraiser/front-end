import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import { fetchProject } from '../actions/projectActions';

class Project extends React.Component {

    constructor(props) {
        super(props);
        this.id = this.props.match.params.id;
    }

    componentDidMount() {
        this.props.fetchProject(this.id);
    }

    render() {
        return (
            <div>
                {this.props.message && <p>{this.props.message}</p>}
                <h2>{this.props.title}</h2>
                <p>{this.props.description}</p>
                
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state.project);
    return state.project;
}

export default connect(mapStateToProps, { fetchProject })(withRouter(Project))
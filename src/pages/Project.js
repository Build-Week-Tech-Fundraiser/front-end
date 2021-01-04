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
        // make api call to /projects/:id
        this.props.fetchProject(this.id);
    }

    render() {
        return (
            <div>
                Display individual project when clicked on from browse page
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state.project);
    return state.project;
}

export default connect(mapStateToProps, { fetchProject })(withRouter(Project))
import React from 'react';
import { connect } from 'react-redux';

import { fetchAllProjects } from '../actions/browseActions';
import ProjectList from '../components/ProjectList';

class Browse extends React.Component {

    componentDidMount() {
        this.props.fetchAllProjects()
    }

    render() {
        return (
            <div>
                <h2>browse recent projects</h2>
                <ProjectList/>
            </div>
        )
    }
}

export default connect(null, { fetchAllProjects })(Browse)
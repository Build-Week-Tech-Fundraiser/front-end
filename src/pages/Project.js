import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';


class Project extends React.Component {

    constructor(props) {
        super(props);
        this.id = this.props.match.params.id;
    }

    componentDidMount() {
        // make api call to /projects/:id
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
    console.log(state);
    return state;
}

export default connect(mapStateToProps)(withRouter(Project))
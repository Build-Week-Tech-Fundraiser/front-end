import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import { fetchProject, fundProject, defundProject } from '../actions/projectActions';
import { Button } from '../components/styles/ButtonStyles';

class Project extends React.Component {

    constructor(props) {
        super(props);
        this.id = this.props.match.params.id;
    }

    componentDidMount() {
        this.props.fetchProject(this.id);
    }

    handleFund = e => {
        // Any payment system would have to happen somewhere here. 
        this.props.fundProject(this.id);
    }

    handleDefund = e => {
        this.props.defundProject(this.id)
    }

    render() {
        return (
            <div>
                {this.props.message && <p>{this.props.message}</p>}
                <h2>{this.props.title}</h2>
                <p>{this.props.description}</p>
                <div>
                    <ul>
                        {this.props.funders.map(funder => 
                            <li key={funder.id}>
                                <br/>
                                <p>{funder.firstname} {funder.lastname}</p>
                                <p>{funder.username}</p>
                            </li>
                        )}
                    </ul>
                    {!this.props.isFunder ? 
                        (
                            <Button onClick={this.handleFund}>become a funder</Button>
                        ):(
                            <Button onClick={this.handleDefund}>cancel funder status</Button>
                        )}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return state.project;
}

export default connect(mapStateToProps, { fetchProject, fundProject, defundProject })(withRouter(Project))
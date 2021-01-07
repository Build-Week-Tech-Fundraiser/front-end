import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import { 
    fetchProject, 
    fundProject, 
    defundProject,
    setIsHost } from '../actions/projectActions';
import { Button } from '../components/styles/ButtonStyles';

import styled from 'styled-components'

class Project extends React.Component {

    constructor(props) {
        super(props);
        this.id = this.props.match.params.id;
    }

    componentDidMount() {
        this.props.fetchProject(this.id);
        this.props.setIsHost(parseInt(this.id));
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
            <MainCard>
                {this.props.message && <p>{this.props.message}</p>}
                <MainInnerCard>
                    <header>
                        <h2>{this.props.title}</h2>
                        <p>{this.props.description}</p>
                    </header>
                    <CardContents>
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
                    </CardContents>
                </MainInnerCard>
            </MainCard>
        )
    }
}

const mapStateToProps = state => {
    return state.project;
}

export default connect(mapStateToProps, { fetchProject, fundProject, defundProject })(withRouter(Project))


const MainCard = styled.div`
    background-color: #444;
    color: #fff;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
` 
const MainInnerCard = styled.div`
    background-color: darkgray;
    border: 3px solid orange;
    width: 800px;
    height: 500px;
    position: relative;

    header{
        width: 97.5%;
        padding: 10px;
        background-color: black;
    }

` 

const CardContents = styled.div`
    width: 100%;
    padding: 10px;

    button{
        position: absolute;
        bottom: 1px;
        right: 1px;
        padding: 10px 12px;
        text-transform: uppercase;
        &:hover{
            background-color: yellow;
        }
    }
`

import React from 'react';
import { connect } from 'react-redux';

class NewProjectButton extends React.Component {

    render() {
        return (
            <div>
                {
                    this.props.creating ? 
                    <svg onClick={this.props.onClick} fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 32 32" width={this.props.size} height={this.props.size}>
                        <path fill="none" stroke={this.props.stroke} strokeMiterlimit="10" strokeWidth="2" strokeLinecap="round" d="M16 4A12 12 0 1 0 16 28 12 12 0 1 0 16 4zM11.5 11.5L20.5 20.5M20.5 11.5L11.5 20.5"/>
                    </svg>
                    : 
                    <svg onClick={this.props.onClick} fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width={this.props.size} height={this.props.size}>
                        <circle cx="24" cy="24" r="18.5" fill="none" stroke={this.props.stroke} strokeMiterlimit="10" strokeWidth="3"/>
                        <line x1="24" x2="24" y1="15.5" y2="32.5" fill="none" stroke={this.props.stroke} strokeLinecap="round" strokeMiterlimit="10" strokeWidth="3"/>
                        <line x1="15.5" x2="32.5" y1="24" y2="24" fill="none" stroke={this.props.stroke} strokeLinecap="round" strokeMiterlimit="10" strokeWidth="3"/>
                    </svg>

                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        creating: state.app.creatingNewProject
    }
}

export default connect(mapStateToProps)(NewProjectButton)

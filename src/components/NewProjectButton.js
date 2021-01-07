import React from 'react';

class NewProjectButton extends React.Component {

    render() {
        return (
            <svg onClick={this.props.onClick} fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width={this.props.size} height={this.props.size}>
                <circle cx="24" cy="24" r="18.5" fill="none" stroke={this.props.stroke} strokeMiterlimit="10" strokeWidth="3"/>
                <line x1="24" x2="24" y1="15.5" y2="32.5" fill="none" stroke={this.props.stroke} strokeLinecap="round" strokeMiterlimit="10" strokeWidth="3"/>
                <line x1="15.5" x2="32.5" y1="24" y2="24" fill="none" stroke={this.props.stroke} strokeLinecap="round" strokeMiterlimit="10" strokeWidth="3"/>
            </svg>
        )
    }
}

export default NewProjectButton
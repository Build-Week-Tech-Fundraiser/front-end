import React from 'react';

class UserButton extends React.Component {

    render() {
        return (
            <svg onClick={this.props.onClick} fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 32 32" width={this.props.size} height={this.props.size}>
                <path fill="none" stroke={this.props.stroke} strokeMiterlimit="10" strokeWidth="2" d="M16 5A6 6 0 1 0 16 17 6 6 0 1 0 16 5zM7 26c0-5 4-9 9-9s9 4 9 9"/>
            </svg>
        )
    }
}

export default UserButton
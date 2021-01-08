import React from 'react';

class DeleteProjectButton extends React.Component {

    render() {
        return (
            <svg onClick={this.props.delete} fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 32 32" width={this.props.size} height={this.props.size}>
                <path fill="none" stroke="#000000" strokeMiterlimit="10" strokeWidth="2" d="M23 27H11c-1.1 0-2-.9-2-2V8h16v17C25 26.1 24.1 27 23 27zM27 8L7 8M14 8V6c0-.6.4-1 1-1h4c.6 0 1 .4 1 1v2M17 23L17 12M21 23L21 12M13 23L13 12"/>
            </svg>
        )
    }
}

export default DeleteProjectButton
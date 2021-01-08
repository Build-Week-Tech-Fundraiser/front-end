import React from 'react';

class FundButton extends React.Component {

    render() {
        return (
            <div onClick={this.props.toggle} style={{width: this.props.size, height: this.props.size, borderRadius: '50%'}}>
                {this.props.checked ?
                    <svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width={this.props.size} height={this.props.size}>
                        <circle cx="24" cy="24" r="18.5" fill="#02f20a" stroke="#000000" strokeMiterlimit="10" strokeWidth="3"/>
                        <polyline fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="3" points="16.5,24.5 21.5,29.5 31.5,19.5"/>
                    </svg>
                    :
                    <svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width={this.props.size} height={this.props.size}>
                        <circle cx="24" cy="24" r="18.5" fill='none' stroke="#000000" strokeMiterlimit="10" strokeWidth="3"/>
                    </svg>
                }
            </div>
        )
    }
}

export default FundButton
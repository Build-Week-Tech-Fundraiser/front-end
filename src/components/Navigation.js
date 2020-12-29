import React from 'react';
import { Link } from 'react-router-dom';

class Navigation extends React.Component {

    render() {
        return (
            <div>
                <ul>
                    <li>
                        <Link to='/browse'>browse</Link>
                    </li>
                    <li>
                        <Link to='/login'>logout</Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Navigation
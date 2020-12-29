import React from 'react';
import { Link } from 'react-router-dom';

class Browse extends React.Component {

    render() {
        return (
            <div>
                Page to browse through <Link to='/project'>projects</Link>
            </div>
        )
    }
}

export default Browse
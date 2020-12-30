import React from 'react';

import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';

import Navigation from './components/Navigation';
import Browse from './pages/Browse';
import Authentication from './pages/Authentication';
import Project from './pages/Project';
import Home from './pages/Home';

class App extends React.Component {

  componentDidMount() {  
    if (localStorage.getItem('token')) {
      console.log('token in localStorage')
    }
  }

  render() {
    return (
      <Router>
        <div>
          <Navigation/>
          <Switch>
            <Route exact path='/' component={Browse}/>
            <Route path='/login' component={Authentication}/>
            <Route path='/project' component={Project}/>
            <PrivateRoute path='/home' component={Home} />
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => { 
  return {
    userCredentials: state.user.credentials
  };
}

export default connect(mapStateToProps, { /* action creators */})(App);

import React from 'react';

import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';

import Navigation from './components/Navigation';
import Browse from './pages/Browse';
import Authentication from './pages/Authentication';
import Project from './pages/Project';
import Home from './pages/Home';

//temp
import ProjectForm from './components/ProjectForm';

class App extends React.Component {

  render() {
    return (
      <Router>
        <div>
          <Navigation/>
          <ProjectForm />
          <Switch>
            <Route exact path='/' component={Browse}/>
            <Route path='/login' component={Authentication}/>
            <Route path='/project/:id' component={Project}/>
            <PrivateRoute path='/home' component={Home} />
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => { 
  console.log(state);
  return {
    userCredentials: state.user.credentials
  };
}

export default connect(mapStateToProps, { })(App);

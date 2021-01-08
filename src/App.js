import React from 'react';

import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';

import Navigation from './components/Navigation';
import ProjectForm from './components/ProjectForm';
import Browse from './pages/Browse';
import Authentication from './pages/Authentication';
import Project from './pages/Project';
import Profile from './pages/Profile';

class App extends React.Component {

  handleClick = e => {
    console.log(e)
  }

  render() {
    return (
      <Router>
        <div onClick={this.handleClick}>
          <Navigation/>
          {this.props.creating && <ProjectForm/>}
          <Switch>
            <Route exact path='/' component={Browse}/>
            <Route path='/login' component={Authentication}/>
            <Route path='/project/:id' component={Project}/>
            <PrivateRoute path='/profile/:username' component={Profile} />
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => { 
  console.log(state.app);
  return {
    creating: state.app.creatingNewProject
  }
}

export default connect(mapStateToProps)(App);

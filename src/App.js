import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import Browse from './pages/Browse';
import LoginRegister from './pages/LoginRegister';
import Project from './pages/Project';

function App() {
  return (
    <Router>
      <div>
        <Navigation/>
        <Switch>
          <Route path='/browse' component={Browse}/>
          <Route path='/login' component={LoginRegister}/>
          <Route path='/project' component={Project}/>
        </Switch>
      </div>
    </Router>
  );
}

const mapStateToProps = state => { 
  return state;
}

export default connect(mapStateToProps, { /* action creators */})(App);

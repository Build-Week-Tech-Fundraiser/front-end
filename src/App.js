import './App.css';

import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import Browse from './pages/Browse';
import Authentication from './pages/Authentication';
import Project from './pages/Project';

function App() {
  return (
    <Router>
      <div>
        <Navigation/>
        <Switch>
          <Route path='/browse' component={Browse}/>
          <Route path='/login' component={Authentication}/>
          <Route path='/project' component={Project}/>
          {/* maybe have a '/profile' or '/home' to show "my project" and "my fundings" */}
        </Switch>
      </div>
    </Router>
  );
}

const mapStateToProps = state => { 
  return state;
}

export default connect(mapStateToProps, { /* action creators */})(App);

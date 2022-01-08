import React from 'react'
import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Overview from './pages/Overview';
import Login from './pages/Login';
import Dashboard from './layouts/Dashboard';


function App() {
  return (
    <Router>
      <div className="App">
        <div>

        </div>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route path="/" component={Dashboard} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

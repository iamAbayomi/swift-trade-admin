import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Login from './pages/Login/Login';
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

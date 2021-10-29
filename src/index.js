import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Profile from './components/profile/Profile';



ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch >
        <Route path = "/"  exact component={App}/>
        <Route path ='/profile/:profileId' component={Profile}/>
      </Switch>
    </Router>
    
  </React.StrictMode>,
  document.getElementById('root')
);


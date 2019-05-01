import React, { Component } from "react";
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";
import Login from '../containers/login/Login';
import Signup from '../containers/login/Signup';
import PruebaLog from '../containers/login/PruebaLog';

import Principal from './Principal';

//function App() {
class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
    <Router>
      <div>
        <Route path="/" exact component={Principal} />  
        <Route path="/Login" exact component={Login} />
        <Route path="/SignUp" exact component={Signup} />
        <Route path="/PruebaLog" exact component={PruebaLog} />
      </div>
    </Router>
    )
  };
};

export default App;
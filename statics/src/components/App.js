import React, { Component } from "react";
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";
import Login from '../containers/Login';
import Signup from '../containers/Signup';
import Principal from './Principal';

//function App() {
class App extends Component {
  constructor(props) {
    super(props);
    console.log("App");
  }

  render() {
    return(
    <Router>
      <div>
        <Route path="/" exact component={Principal} />  
        <Route path="/Login" exact component={Login} />
        <Route path="/SignUp" exact component={Signup} />
      </div>
    </Router>
    )
  };
};

export default App;
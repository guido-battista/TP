import React, { Component } from "react";
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";
import Login from './Login';
import Signup from './Signup';
import Principal from './Principal';

function App() {
  return (
    <Router>
      <div>
        <Route path="/" exact component={Principal} />  
        <Route path="/Login" component={Login} />
        <Route path="/SignUp" component={Signup} />
        <Route path="/LoginOk" component={LoginOk} />
      </div>
    </Router>
  );
}

class LoginOk extends Component {
  render() {
    console.log("Se renderiza el Login OK");
    return (
      <div>
        <h1>Login OK!!!!</h1>
      </div>
    );
  }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);


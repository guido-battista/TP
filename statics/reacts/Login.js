import React, { Component } from "react";

class Login extends Component {
    state = { redirectToReferrer: false };
  
    login = () => {
      //fakeAuth.authenticate(() => {
      // this.setState({ redirectToReferrer: true });
      //});
    };
  
    render() {
      let { from } = this.props.location.state || { from: { pathname: "/" } };
      let { redirectToReferrer } = this.state;
  
      if (redirectToReferrer) return <Redirect to={from} />;
  
      return (
        <div>
          <form class="center">
                <h2>Sign In</h2>
                <label for="usr">Usuario</label>
                <input type="text" class="form-control" id="usr"/>
                <br/>
                <label for="pwd">Password</label>
                <input type="password" class="form-control" id="pwd"/>
                <br/>
                <button onClick={this.login} class="btn btn-primary">Login</button>
                <br/>
            </form>
        </div>
      );
    }
  }
  
  export default Login;
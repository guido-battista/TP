import React, { Component } from "react";

import {Link} from "react-router-dom";

class Principal extends Component {

    render() {
      return (
        <div>
          <ul>
            <li>
            <Link to="/Login">Sign In</Link>
            </li>
            <li>
            <Link to="/SignUp">Sign Up</Link>
            </li>
        </ul>
        </div>
      );
    }
  }
  
  export default Principal;
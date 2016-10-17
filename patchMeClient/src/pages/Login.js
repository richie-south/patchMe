'use strict';


import React, { Component } from 'react';
import FacebookLogin from '../lib/facebook-login/app';
import co from 'co';

class Login extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <section className="hero is-success is-fullheight">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title">
              PatchMe
            </h1>
            <h2 className="subtitle">
              <FacebookLogin
                callback={this.props.callback}
              />
            </h2>
          </div>
        </div>
      </section>
    );
  }
}

export default Login;

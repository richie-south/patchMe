'use strict';

import React, { Component } from 'react';
import FacebookLogin from '../lib/facebook-login/app';
import { getBearerToken, getUser, createUser } from '../utils/user';
import { hashHistory } from 'react-router';
import co from 'co';

class Login extends Component {
  constructor(props){
    super(props);
  }

  fbLoginCallback(oauthCode) {
    co(function* () {
        const bearerToken = yield getBearerToken(oauthCode);
        let [userObject, status] = yield createUser(bearerToken);

        if(status === 409) {
          userObject = yield getUser(bearerToken);
        }

        // TODO: set time on object and check if valid!
        this.props.saveBearerToken(bearerToken);
        this.props.saveUserObject(userObject);

      }.bind(this))
      .catch(e => {
        console.log('error', e);
        // TODO: server error message
      });
  }

  render() {

    if(this.props.userObject !== null && this.props.bearerToken !== null){
      hashHistory.push('/overview');
    }
    
    return (
      <section className="hero is-success is-fullheight">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title">
              PatchMe
            </h1>
            <h2 className="subtitle">
              <FacebookLogin
                callback={this.fbLoginCallback.bind(this)}
              />
            </h2>
          </div>
        </div>
      </section>
    );
  }
}

export default Login;

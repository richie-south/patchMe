
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {getBearerToken, getUser, createUser} from './utils/user';
import {getFromLocalstorage, saveToLocalstorage} from './utils/localstorage';
import LoginPage from './pages/Login';
import UserOverview from './pages/UserOverview';
import co from 'co';
const userObjectKey = 'userObject';
const bearerTokenKey = 'bearerToken';

class App extends Component {
  constructor(props){
    super(props);

    const userObject = JSON.parse(getFromLocalstorage(userObjectKey));
    const bearerToken = getFromLocalstorage(bearerTokenKey);
    console.log(userObject);
    this.state = {
      userObject: userObject ? userObject : null,
      bearerToken: bearerToken ? bearerToken : null
    };
  }

  fbLoginCallback(oauthCode){
    co(function*(){
      const bearerToken = yield getBearerToken(oauthCode);
      let [userObject, status] = yield createUser(bearerToken);

      if(status === 409){
        userObject = yield getUser(bearerToken);
      }

      // TODO: set time on object and check if valid!
      saveToLocalstorage(userObjectKey, JSON.stringify(userObject));
      saveToLocalstorage(bearerTokenKey, bearerToken);
      this.setState({ bearerToken });
      this.setState({ userObject });

    }.bind(this))
    .catch(e => {
      console.log('error', e);
      // TODO: server error message
    });
  }

  renderLoginPage(){
    return (<LoginPage callback={this.fbLoginCallback.bind(this)}></LoginPage>);
  }

  renderUserPage(){
    return (<UserOverview userObject={this.state.userObject} bearerToken={this.state.bearerToken}></UserOverview>);
  }

  render() {
    // TODO: compare time
    if(this.state.userObject !== null && this.state.bearerToken !== null){
      return this.renderUserPage();
    }
    return this.renderLoginPage();
  }
}

export default App;

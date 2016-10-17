
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import FacebookLogin from 'react-facebook-login';
import FacebookLogin from './lib/facebook-login/app';
import {getBearerToken, getUser, createUser} from './utils/user';
import co from 'co';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      userObject: null,
      bearerToken: null
    };

  }

  fbLoginCallback(oauthCode){
    co(function*(){
      const bearerToken = yield getBearerToken(oauthCode);
      let [userObject, status] = yield createUser(bearerToken);

      if(status === 409){
        userObject = yield getUser(bearerToken);
      }

      this.setState({ bearerToken });
      this.setState({ userObject });
      console.log(userObject);
    }.bind(this))
    .catch(e => {
      console.log('error', e);
      // TODO: server error message
    });

    console.log(oauthCode);
  }
  // "dist/facebook-login.js"
  render() {
    return (
      <div className="App">
        <FacebookLogin
          callback={this.fbLoginCallback.bind(this)}
        />
      </div>
    );
  }
}

export default App;

/*
<FacebookLogin
  appId="701349320027819"
  autoLoad={true}
  fields="name,email,picture"
  onClick={this.fbLoginClick.bind(this)}
  callback={this.fbLoginCallback.bind(this)} />
 */

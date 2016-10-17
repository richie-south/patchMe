'use strict';

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FacebookLogin from 'react-facebook-login';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      origin: 'http://localhost:3000'
    };
  }

  fbLoginClick(e){
    console.log(e);
  }

  fbLoginCallback(response, ...args){
    console.log(response);
    console.log(args);
  }
  // "dist/facebook-login.js"
  render() {
    return (
      <div className="App">
        <FacebookLogin
          appId="701349320027819"
          autoLoad={true}
          fields="name,email,picture"
          onClick={this.fbLoginClick.bind(this)}
          callback={this.fbLoginCallback.bind(this)} />
      </div>
    );
  }
}

export default App;

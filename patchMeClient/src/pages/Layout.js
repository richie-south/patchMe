'use strict';
import React, { Component } from 'react';
import { Link } from 'react-router';

import { getFromLocalstorage, saveToLocalstorage} from '../utils/localstorage';

const userObjectKey = 'userObject';
const bearerTokenKey = 'bearerToken';

export default class Layout extends Component {
  constructor(props) {
    super(props);
    //const userObject = null;
    //const bearerToken = null;
    const userObject = JSON.parse(getFromLocalstorage(userObjectKey));
    const bearerToken = getFromLocalstorage(bearerTokenKey);

    this.state = {
      userObject: userObject ? userObject : null,
      bearerToken: bearerToken ? bearerToken : null
    };
  }

  saveBearerToken(bearerToken){
    saveToLocalstorage(bearerTokenKey, bearerToken);
    this.setState({bearerToken});
  }

  saveUserObject(userObject){
    saveToLocalstorage(userObjectKey, JSON.stringify(userObject));
    this.setState({userObject});
  }

  render() {
    const props = {
      saveBearerToken: this.saveBearerToken.bind(this),
      saveUserObject: this.saveUserObject.bind(this),

      userObject: this.state.userObject,
      bearerToken: this.state.bearerToken
    };

    return (<div>{ React.cloneElement(this.props.children, props) }</div>);
  }
}

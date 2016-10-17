

import React, { Component } from 'react';
//import styles from '../styles/facebook.scss';
//import objectToParams from './objectToParams';
// scope=public_profile,email

class FacebookLogin extends Component {
  constructor(props){
    super(props);
  }

  click(){
    let isMobile = false;

    try {
      isMobile = ((window.navigator && window.navigator.standalone) || navigator.userAgent.match('CriOS') || navigator.userAgent.match(/mobile/i));
    } catch (e) {
      // swallow
    }

    const params = {
      scope: 'public_profile,email',
      redirectUri: window.location.href,
      clientId: '701349320027819'
    };

    if(isMobile){
      // TODO: fix mobile
      window.location.href = `https://www.facebook.com/dialog/oauth?client_id=${params.clientId}&scope=${params.scope}&redirect_uri=${params.redirectUri}`;
    }else{
      const facebookWindow = window.open(`https://www.facebook.com/dialog/oauth?client_id=${params.clientId}&scope=${params.scope}&redirect_uri=${params.redirectUri}`, 'facebook oauth','status=1,resizable=1,width=350,height=250,top=0,left=0');
      facebookWindow.onload = (event) => {
        const url = event.srcElement.URL;
        const params = url.split('code=');
        const code = params[1].split('#')[0];
        this.props.callback(code);
        facebookWindow.close();
      };
    }
  }

  render() {
    return (
      <button className="button is-info"
        onClick={this.click.bind(this)}
      >
        Login with Facebook
      </button>
    );
  }
}


export default FacebookLogin;

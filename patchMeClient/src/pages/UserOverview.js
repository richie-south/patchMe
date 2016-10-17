'use strict';
import React, { Component } from 'react';
import co from 'co';
import FormsList from '../components/FormsList';

class UserOverview extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <section className="hero is-success is-small">
          <div className="hero-head">
            <header className="nav">
              <div className="container">
                <div className="nav-left">
                  <a className="nav-item">
                    PatchMe
                  </a>
                </div>
                <div className="nav-center nav-menu">
                  <a href="#forms" className="nav-item">
                    Forms
                  </a>
                  <a href="#receipts" className="nav-item">
                    Receipts
                  </a>
                </div>

                <span className="nav-toggle">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
                <div className="nav-right nav-menu">
                  <a className="nav-item">
                    Settings
                  </a>
                  <a className="nav-item">
                    Logout
                  </a>
                </div>
              </div>
            </header>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <FormsList bearerToken={this.props.bearerToken}></FormsList>
          </div>
        </section>
      </div>
    );
  }
}

export default UserOverview;

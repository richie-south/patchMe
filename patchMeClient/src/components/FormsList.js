'use strict';
import React, { Component } from 'react';
import co from 'co';
import '../index.css';

class FormsList extends Component {
  constructor(props){
    super(props);
  }


  // TODO: make this function
  renderFormBoxes(){

    const formBoxes = [];
    for (var i = 0; i < 3; i++) {
      formBoxes.push(
        (<div key={i} className="column is-3">
          {this.getFormBox()}
        </div>));
    }
    return formBoxes;
  }

  // TODO: render only one of Edit and responses
  getFormBox(){
    return (
      <div className="card formSize">
        <div className="card-image">
          <figure className="image is-1by1">
            <img src="http://placehold.it/164x164" alt="" />
          </figure>
        </div>
        <div className="card-content formContent">
          <div className="media formMedia">
            <div className="media-content">
              <p className="title is-5">John Smith</p>
            </div>
          </div>

          <div className="content">
            <small>11:09 PM - 1 Jan 2016</small>
          </div>
        </div>
        <footer className="card-footer">
          <a className="card-footer-item">Edit</a>
          <a className="card-footer-item">Responses</a>
        </footer>
      </div>
    );
  }


  render() {
    return (
      <div>
        <h1 id="forms" className="title">Forms</h1>
        <div className="tabs">
        <ul>
          <li><a className="button is-small is-success">
            <span className="icon newFormIcon">
              <i className="fa fa-plus-circle" aria-hidden="true"></i>
            </span>
            <span>Create new</span>
          </a></li>
        </ul>
      </div>

        <div className="columns is-multiline">
          {this.renderFormBoxes()}
        </div>
      </div>
    );
  }
}

export default FormsList;

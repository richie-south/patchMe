'use strict';
import React, { Component } from 'react';

export class InputHeaderTitle extends Component {
  constructor(props){
    super(props);
  }

  handleChange(event){
    this.props.update(event.target.value);
  }

  removeOldFocus(){
    this.props.removeOldFocus();
  }

  render() {
    return (
      <input className="input is-large formTitle" type="text" placeholder="Untitled form"
        onFocus={this.removeOldFocus.bind(this)}
        onChange={this.handleChange.bind(this)}/>
    );
  }
}

export class InputHeaderDescription extends Component {
  constructor(props){
    super(props);
  }

  handleChange(event){
    this.props.update(event.target.value);
  }

  removeOldFocus(){
    this.props.removeOldFocus();
  }

  render() {
    return (
      <textarea className="textarea formDescription" placeholder="From description"
        onFocus={this.removeOldFocus.bind(this)}
        onChange={this.handleChange.bind(this)}></textarea>
    );
  }
}


/**
 * Singleline input
 */
export class InputShortText extends Component {
  constructor(props){
    super(props);
  }

  onFocus(event){
    this.props.onFocus();
  }

  handleChange(id, event){
    this.props.update(id, event.target.value);
  }

  render() {
    return (
      <div className="content has-text-centered">
        <p>
          <input className="input is-medium formInput"  type="text" placeholder="Question"
            onFocus={this.onFocus.bind(this)}
            onChange={this.handleChange.bind(this, this.props.fcId)}/>
        </p>
        <p>
          <input className="input formInput" type="text" placeholder="Short-answer-text" disabled/>
        </p>
      </div>
    );
  }
}

/**
 * Multiline input
 */
export class InputLongText extends Component {
  constructor(props){
    super(props);
  }

  onFocus(event){
    this.props.onFocus();
  }

  handleChange(id, event){
    this.props.update(id, event.target.value);
  }

  render() {
    return (
      <div className="content has-text-centered">
        <p>
          <input className="input is-medium formInput" type="text" placeholder="Question"
            onFocus={this.onFocus.bind(this)}
            onChange={this.handleChange.bind(this, this.props.fcId)}/>
        </p>
        <p>
          <textarea className="textarea formDescription" placeholder="Long-answer-text" disabled></textarea>
        </p>
      </div>
    );
  }
}

// TODO: email, input number

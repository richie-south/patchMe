'use strict';
import React, { PropTypes, Component } from 'react';

export const InputHeader = () => (
  <div className="notification formControl">
    <article className="media">
      <div className="media-left">
      </div>
      <div className="media-content">
        <div className="content has-text-centered">
          <p>
            <input className="input is-large formTitle" type="text" placeholder="Untitled form" />
          </p>
          <p>
            <textarea className="textarea formDescription" placeholder="From description"></textarea>
          </p>
        </div>
      </div>
      <div className="media-right">
      </div>
    </article>
  </div>
);

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

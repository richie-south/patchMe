'use strict';
import React, { Component } from 'react';
import { InputHeaderTitle, InputHeaderDescription } from './InputOptions';

export class FormControl extends Component {
  constructor(props){
    super(props);
  }

  onFocus(event){
    this.props.setElementFocus(this._formControl);
  }

  handleChange(id, event){
    this.props.update(id, event.target.value);
  }

  render() {
    const Element = this.props.Element;
    return (
      <div className="notification formControl"
        ref={(c) => { this._formControl = c; }}
        id={this.props.fcId}>
        <article className="media">
          <div className="media-left">
            <p onClick={this.props.moveUp.bind(null, this.props.fcId)}><a><i className="fa fa-arrow-up" aria-hidden="true"></i></a></p>
            <p onClick={this.props.moveDown.bind(null, this.props.fcId)}><a><i className="fa fa-arrow-down" aria-hidden="true"></i></a></p>
          </div>
          <div className="media-content">
            { React.cloneElement(<Element/>, {
                update: this.props.update,
                onFocus: this.onFocus.bind(this),
                fcId: this.props.fcId
              })}
          </div>
          <div className="media-right">
            <button onClick={this.props.remove.bind(null, this.props.fcId)} className="delete"></button>
          </div>
        </article>
      </div>
    );
  }
}

export default FormControl;

export class InputHeader extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="notification formControl">
        <article className="media">
          <div className="media-left">
          </div>
          <div className="media-content">
            <div className="content has-text-centered">
              <p>
                <InputHeaderTitle
                  removeOldFocus={this.props.removeOldFocus}
                  update={this.props.updateTitle} />
              </p>
              <p>
                <InputHeaderDescription
                  removeOldFocus={this.props.removeOldFocus}
                  update={this.props.updateDescription} />
              </p>
            </div>
          </div>
          <div className="media-right">
          </div>
        </article>
      </div>
    );
  }
}

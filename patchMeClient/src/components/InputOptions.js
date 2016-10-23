'use strict';
import React, { Component } from 'react';
import {getFormDescriptionValues, isFormDescriptionValid, getFormDescriptionValuesNoMin} from '../utils/inputValidation';
import validator from 'validator';

class Wrap extends Component {
  constructor(props){
    super(props);
    this.state = {
      isValid: true,
      message: '',
      errorClass: ''
    };
  }

  handleChange(id, event){
    const value = event.target.value;
    this.setState(getFormDescriptionValues(value));
    if(isFormDescriptionValid(value)){
      this.props.update(id, validator.escape(value));
    }
  }
}


/**
 * Title name
 */
export class InputHeaderTitle extends Component {
  constructor(props){
    super(props);
    this.state = {
      isValid: true,
      message: '',
      errorClass: ''
    };
  }

  handleChange(event){
    const value = event.target.value;
    this.setState(getFormDescriptionValues(value));
    if(isFormDescriptionValid(value)){
      this.props.update(validator.escape(value));
    }
  }

  removeOldFocus(){
    this.props.removeOldFocus();
  }

  render() {
    const classes = 'input is-large formTitle ' + this.state.errorClass;
    return (
      <p>
        <input className={classes} type="text" placeholder="Untitled form"
          onFocus={this.removeOldFocus.bind(this)}
          onChange={this.handleChange.bind(this)}/>
        {(() => {
          if(!this.state.isValid){
            return (<span className="help is-danger">{this.state.message}</span>);
          }
        })()}
      </p>
    );
  }
}
/**
 * Title description
 */
export class InputHeaderDescription extends Component {
  constructor(props){
    super(props);
    this.state = {
      isValid: true,
      message: '',
      errorClass: ''
    };
  }

  handleChange(event){
    const value = event.target.value;
    this.setState(getFormDescriptionValuesNoMin(value));
    if(isFormDescriptionValid(value)){
      this.props.update(validator.escape(value));
    }
  }

  removeOldFocus(){
    this.props.removeOldFocus();
  }

  render() {
    const classes = 'textarea formDescription ' + this.state.errorClass;
    return (
      <p>
        <textarea className={classes} placeholder="From description"
          onFocus={this.removeOldFocus.bind(this)}
          onChange={this.handleChange.bind(this)}></textarea>
        {(() => {
          if(!this.state.isValid){
            return (<span className="help is-danger">{this.state.message}</span>);
          }
        })()}
      </p>

    );
  }
}

/**
 * Singleline input
 */
export class InputShortText extends Wrap {
  constructor(props){
    super(props);
  }

  onFocus(event){
    this.props.onFocus();
  }

  render() {
    const classes = 'input is-medium formInput ' + this.state.errorClass;
    return (
      <div className="content has-text-centered">
        <p>
          <input className={classes}  type="text" placeholder="Question"
            onFocus={this.onFocus.bind(this)}
            onChange={super.handleChange.bind(this, this.props.fcId)}/>
            {(() => {
              if(!this.state.isValid){
                return (<span className="help is-danger">{this.state.message}</span>);
              }
            })()}
        </p>
        <p>
          <input className="input formInput" type="text" placeholder="Answer-text" disabled/>
        </p>
      </div>
    );
  }
}

/**
 * Email input
 */
export class InputEmail extends Wrap {
 constructor(props){
   super(props);
 }

 onFocus(event){
   this.props.onFocus();
 }

 render() {
   const classes = 'input is-medium formInput ' + this.state.errorClass;
   return (
     <div className="content has-text-centered">
       <p>
         <input className={classes}  type="text" placeholder="Email question..."
           onFocus={this.onFocus.bind(this)}
           onChange={super.handleChange.bind(this, this.props.fcId)}/>
           {(() => {
             if(!this.state.isValid){
               return (<span className="help is-danger">{this.state.message}</span>);
             }
           })()}
       </p>
       <p>
         <input className="input formInput" type="text" placeholder="Email-answer" disabled/>
       </p>
     </div>
   );
 }
}

/**
 * Nunber input
 */
export class InputNumber extends Wrap {
 constructor(props){
   super(props);
 }

 onFocus(event){
   this.props.onFocus();
 }

 render() {
   const classes = 'input is-medium formInput ' + this.state.errorClass;
   return (
     <div className="content has-text-centered">
       <p>
         <input className={classes}  type="text" placeholder="Question"
           onFocus={this.onFocus.bind(this)}
           onChange={super.handleChange.bind(this, this.props.fcId)}/>
           {(() => {
             if(!this.state.isValid){
               return (<span className="help is-danger">{this.state.message}</span>);
             }
           })()}
       </p>
       <p>
         <input className="input formInput" type="number" placeholder="Answer-numbers" disabled/>
       </p>
     </div>
   );
 }
}

/**
 * Multiline input
 */
export class InputLongText extends Wrap {
  constructor(props){
    super(props);
  }

  onFocus(event){
    this.props.onFocus();
  }

  render() {
    const classes = 'input is-medium formInput ' + this.state.errorClass;
    return (
      <div className="content has-text-centered">
        <p>
          <input className={classes} type="text" placeholder="Question"
            onFocus={this.onFocus.bind(this)}
            onChange={super.handleChange.bind(this, this.props.fcId)}/>
            {(() => {
              if(!this.state.isValid){
                return (<span className="help is-danger">{this.state.message}</span>);
              }
            })()}
        </p>
        <p>
          <textarea className="textarea formDescription" placeholder="Long-answer-text" disabled></textarea>
        </p>
      </div>
    );
  }
}

'use strict';

import React, { Component } from 'react';
import FormControl from './FormControl';
import { InputShortText, InputLongText, InputEmail, InputNumber } from './InputOptions';

class InputOptionsList extends Component {
  constructor(props){
    super(props);

    this.InputOptions = {
      shortText: {
        description: '',
        type: 'text_line'
      },

      longText: {
        description: '',
        type: 'text_block'
      },

      email: {
        description: '',
        type: 'email'
      },

      number: {
        description: '',
        type: 'number'
      }

    };
  }

  itemPress(element, shell){
    this.props.onItemPress(element, shell);
  }

  render() {
    if(!this.props.display){
      return (<div></div>);
    }

    return (
      <table className="table displayTableAnimation">
        <tbody>
          <tr onClick={this.itemPress.bind(this, InputShortText, this.InputOptions.shortText)}>

            <td>Short answer</td>
          </tr>
          <tr onClick={this.itemPress.bind(this, InputLongText, this.InputOptions.longText)}>

            <td>Paragraf</td>
          </tr>
          <tr onClick={this.itemPress.bind(this, InputEmail, this.InputOptions.email)}>

            <td>Email (validates email)</td>
          </tr>
          <tr onClick={this.itemPress.bind(this, InputNumber, this.InputOptions.number)}>
            
            <td>Number (Only numbers)</td>
          </tr>
        </tbody>
      </table>

    );
  }
}

export default InputOptionsList;


/*
<table className="table displayTableAnimation">
  <tbody>
    <tr onClick={this.itemPress.bind(this, InputShortText, this.InputOptions.shortText)}>
      <td className="is-icon">
        <a>
          <i className="fa fa-align-left"></i>
        </a>
      </td>
      <td>Short answer</td>
    </tr>
    <tr onClick={this.itemPress.bind(this, InputLongText, this.InputOptions.longText)}>
      <td className="is-icon">
        <a>
          <i className="fa fa-align-left"></i>
        </a>
      </td>
      <td>Paragraf</td>
    </tr>
    <tr onClick={this.itemPress.bind(this, InputEmail, this.InputOptions.email)}>
      <td className="is-icon">
        <a>
          <i className="fa fa-envelope"></i>
        </a>
      </td>
      <td>Email (validates email)</td>
    </tr>
    <tr onClick={this.itemPress.bind(this, InputNumber, this.InputOptions.number)}>
      <td className="is-icon">
        <a>
          <i className="fa fa-minus"></i>
        </a>
      </td>
      <td>Number (Only numbers)</td>
    </tr>
  </tbody>
</table>
 */

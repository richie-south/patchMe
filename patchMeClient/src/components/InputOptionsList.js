'use strict';

import React, { Component } from 'react';
import FormControl from './FormControl';
import { InputShortText, InputLongText } from './InputOptions';

class InputOptionsList extends Component {
  constructor(props){
    super(props);
  }

  itemPress(item){
    this.props.onItemPress(item);
  }

  render() {
    if(!this.props.display){
      return (<div></div>);
    }

    return (

      <table className="table">
        <tbody>
          <tr onClick={this.itemPress.bind(this)}>
            <td className="is-icon">
              <a>
                <i className="fa fa-align-left"></i>
              </a>
            </td>
            <td>Short answer</td>
          </tr>
          <tr onClick={this.itemPress.bind(this)}>
            <td className="is-icon">
              <a>
                <i className="fa fa-align-left"></i>
              </a>
            </td>
            <td>Paragraf</td>
          </tr>
        </tbody>
      </table>

    );
  }
}

export default InputOptionsList;

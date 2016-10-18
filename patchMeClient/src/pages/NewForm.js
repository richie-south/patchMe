'use strict';
import React, { Component } from 'react';
import co from 'co';
import InputOptionsList from '../components/InputOptionsList';

import FormControl from '../components/FormControl';
import { InputShortText, InputLongText } from '../components/InputOptions';

class NewForm extends Component {
  constructor(props){
    super(props);

    this.state = {
      displayList: false,
      elements: []
    };
  }

  displayFormOptions(){
    if(this.state.displayList){
      return this.setState({ displayList: false });
    }
    this.setState({ displayList: true });
  }

  addItem(){

  }

  render() {
    return (
      <div>
        <section className=" is-small is-bold">
          <div className="hero-body">
            <div className="container has-text-centered">
              <h1 className="title">
                <input className="input is-large formTitle" type="text" placeholder="Untitled form" />

              </h1>
              <h2 className="subtitle">
                <textarea className="textarea formDescription" placeholder="From description"></textarea>
              </h2>
            </div>
          </div>
        </section>
        <div className="container has-text-centered">
          <FormControl Element={InputLongText}/>

          <nav className="level addFormOptionLevel">
            <p className="level-item has-text-centered">
              <button onClick={this.displayFormOptions.bind(this)} className="button is-success addFormControlButton" >
                <span className="icon">
                  <i className="fa fa-plus-circle" aria-hidden="true"></i>
                </span>
              </button>
            </p>
            <br />

          </nav>
          <InputOptionsList onItemPress={this.addItem.bind(this)} display={this.state.displayList} />
        </div>
      </div>
    );
  }
}

export default NewForm;

'use strict';
import React, { Component } from 'react';
import InputOptionsList from '../components/InputOptionsList';
import update from 'react-addons-update';
import FormControl from '../components/FormControl';
import FormHeader from '../components/FormHeader';
import { getUniqId } from '../utils/id';
import { getPositionOfElementInArray, moveElementForwardInArray, moveElementBackwardsInArray } from '../utils/arrayHelper';
import { InputHeader, InputShortText, InputLongText } from '../components/InputOptions';

class NewForm extends Component {
  constructor(props){
    super(props);

    this.state = {
      displayList: false,
      elements: [],
      focusElement: null
    };
  }

  toggleDisplayFormOptions(){
    this.removeElementFocus();
    return this.state.displayList ?
      this.setState({ displayList: false }) :
      this.setState({ displayList: true });
  }

  setElementFocus(e){
    this.removeElementFocus();
    e.style.boxShadow = '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)';
    e.style.marginTop = '8px';
    e.style.marginBottom = '8px';
    this.setState({focusElement: e});
  }

  removeElementFocus(){
    if(this.state.focusElement){
      this.state.focusElement.style.boxShadow = '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)';
      this.state.focusElement.style.marginTop = 'initial';
      this.state.focusElement.style.marginBottom = 'initial';
    }
  }

  updateData(id, value){
    const element = getPositionOfElementInArray(this.state.elements, id);
    this.setState({
      elements: update(this.state.elements, {[element._pos]: {description: {$set: value}}})
    });
  }

  getUniqFormControlId(){
    return getUniqId(this.state.elements.map(e => e.id));
  }

  removeItem(id){
    const element = getPositionOfElementInArray(this.state.elements, id);
    this.setState({
      elements: update(this.state.elements, {$splice: [[element._pos, 1]]})
    });
  }

  moveElementUp(id){
    const element = getPositionOfElementInArray(this.state.elements, id);
    const elements = moveElementForwardInArray(this.state.elements, element);
    this.setState({elements: elements});
  }

  moveElementDown(id){
    const element = getPositionOfElementInArray(this.state.elements, id);
    const elements = moveElementBackwardsInArray(this.state.elements, element);
    this.setState({elements: elements});
  }

  addItem(element, shell){
    this.toggleDisplayFormOptions();
    const id = this.getUniqFormControlId();

    let props = JSON.parse(JSON.stringify(shell));
    props.id = id;
    props.element = React.cloneElement(<FormControl/>, {
      fcId: id,
      update: this.updateData.bind(this),
      remove: this.removeItem.bind(this),
      moveUp: this.moveElementUp.bind(this),
      moveDown: this.moveElementDown.bind(this),
      setElementFocus: this.setElementFocus.bind(this),
      Element: element
    });

    this.setState({elements: update(this.state.elements, { $push: [props] })});
  }

  render() {
    return (
      <div>
        <FormHeader />
        <div className="container has-text-centered formContentWrap">

          <InputHeader/>
          {(() => {
            if(this.state.elements.length !== 0){
              return (this.state.elements
                .map((e, i ) => {
                  return React.cloneElement(e.element, { key: e.id });
              }));
            }
          })()}
          <nav className="level addFormOptionLevel">
            <p className="level-item has-text-centered">
              <button onClick={this.toggleDisplayFormOptions.bind(this)} className="button is-success addFormControlButton" >
                <span className="icon">
                  <i className="fa fa-plus-circle" aria-hidden="true"></i>
                </span>
              </button>
            </p>
          </nav>
          <InputOptionsList onItemPress={this.addItem.bind(this)} display={this.state.displayList} />
        </div>
      </div>
    );
  }
}

export default NewForm;

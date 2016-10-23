'use strict';
import React, { Component } from 'react';
import InputOptionsList from '../components/InputOptionsList';
import update from 'react-addons-update';
import FormControl, { InputHeader } from '../components/FormControl';
import FormHeader from '../components/FormHeader';
import { getUniqId } from '../utils/id';
import { getPositionOfElementInArray, moveElementForwardInArray, moveElementBackwardsInArray } from '../utils/arrayHelper';
import { InputShortText, InputLongText } from '../components/InputOptions';

class NewForm extends Component {
  constructor(props){
    super(props);

    this.state = {
      displayList: false,
      headerInputs: {
        element: null,
        titleValue: '',
        descriptionValue: ''
      },

      elements: [],
      focusElement: null
    };
  }

  /**
   * [get data from header inputs]
   * @param  {[string]} prop [property in state object]
   * @param  {[string]} value [value form input]
   */
  onHeaderInputData(prop, value){
    const newState = update(this.state, { headerInputs: { [prop]: {$set: value} } });
    this.setState(newState);
  }


  componentDidMount(){
    const id = this.getUniqFormControlId();
    const headerInputs = React.cloneElement(<InputHeader/>  , {
      removeOldFocus: this.removeElementFocus.bind(this),
      updateDescription: this.onHeaderInputData.bind(this, 'descriptionValue'),
      updateTitle: this.onHeaderInputData.bind(this, 'titleValue')
    });
    const newState = update(this.state, {
      headerInputs: { element: {$set: headerInputs} }
    });
    this.setState(newState);
  }

  /**
   * [toggle display inputOptionsList]
   */
  toggleDisplayFormOptions(){
    this.removeElementFocus();
    this.setState({ displayList: !this.state.displayList });
  }

  /**
   * [sets focus of element]
   * @param  {[node]} a [DOM node]
   */
  setElementFocus(e){
    this.removeElementFocus();
    e.style.boxShadow = '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)';
    e.style.marginTop = '8px';
    e.style.marginBottom = '8px';
    this.setState({focusElement: e});
  }

  /**
   * [removes focus of prev element]
   */
  removeElementFocus(){
    if(this.state.focusElement){
      this.state.focusElement.style.boxShadow = '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)';
      this.state.focusElement.style.marginTop = 'initial';
      this.state.focusElement.style.marginBottom = 'initial';
    }
  }

  /**
   * [gets data form inputs and updates element state]
   * @param  {[string]} id [id of element]
   * @param  {[string]} value [value form input]
   */
  onInputData(id, value){
    const element = getPositionOfElementInArray(this.state.elements, id);
    this.setState({
      elements: update(this.state.elements, {[element._pos]: {description: {$set: value}}})
    });
  }

  /**
   * [gets uniq id not used by other elements]
   * @return {[string]}   [uniq id]
   */
  getUniqFormControlId(){
    return getUniqId(this.state.elements.map(e => e.id));
  }

  /**
   * [removes element form state elements]
   * @param  {[string]} id [id of element]
   */
  removeItem(id){
    const element = getPositionOfElementInArray(this.state.elements, id);
    this.setState({
      elements: update(this.state.elements, {$splice: [[element._pos, 1]]})
    });
  }

  /**
   * [moves element forwards in array and set new element state]
   * @param  {[string]} id [id of element]
   */
  moveElementUp(id){
    const element = getPositionOfElementInArray(this.state.elements, id);
    const elements = moveElementForwardInArray(this.state.elements, element);
    this.setState({elements: elements});
  }

  /**
   * [moves element backwards in array and sets new elements state]
   * @param  {[string]} id [id of element]
   */
  moveElementDown(id){
    const element = getPositionOfElementInArray(this.state.elements, id);
    const elements = moveElementBackwardsInArray(this.state.elements, element);
    this.setState({elements: elements});
  }

  /**
   * [adds new element to sate elements array]
   * @param  {[react component]} element [type of input]
   * @param  {[object]} shell [object with type property]
   */
  addItem(element, shell){
    this.toggleDisplayFormOptions();
    const id = this.getUniqFormControlId();

    let props = JSON.parse(JSON.stringify(shell));
    props.id = id;
    props.element = React.cloneElement(<FormControl/>, {
      fcId: id,
      update: this.onInputData.bind(this),
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
          {(() => {
            if(this.state.headerInputs.element !== null){
              return React.cloneElement(this.state.headerInputs.element);
            }
          })()}

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

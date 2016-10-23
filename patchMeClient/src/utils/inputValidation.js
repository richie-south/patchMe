'use strict';

import validator from 'validator';

export const getFormDescriptionValues = (value) => {
  if(!validator.isLength(value, {min:0, max: 100})){
    return { isValid: false, message: 'To long text', errorClass: 'is-danger'};

  }else if(!validator.isLength(value, {min:1})){
    return { isValid: false, message: 'To short text', errorClass: 'is-danger'};
  }
  return { isValid: true, message: '', errorClass: ''};
};

export const getFormDescriptionValuesNoMin = (value) => {

  return !validator.isLength(value, {min:0, max: 100}) ?
    { isValid: false, message: 'To long text', errorClass: 'is-danger'} :
    { isValid: true, message: '', errorClass: ''};
};

export const isFormDescriptionValid = (value) => validator.isLength(value, {min:1, max: 100});

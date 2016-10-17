'use strict';

export const getFromLocalstorage = (key) => {
  return localStorage.getItem(key);
};

export const saveToLocalstorage = (key, value) => {
  localStorage.setItem(key, value);
};

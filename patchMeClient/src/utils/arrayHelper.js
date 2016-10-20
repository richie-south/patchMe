'use strict';

export const getPositionOfElementInArray = (array, id) => {
  return array.map((a, i) => {
    a._pos = i;
    return a;
  })
  .filter(a => a.id === id)[0];
};

export const moveElementForwardInArray = (array, element) => {
  const elements = array.slice();
  elements.splice(element._pos, 1);
  elements.splice(
    element._pos-1 <= 0 ? 0 : element._pos-1,
    0, element);

  return elements;
};

export const moveElementBackwardsInArray = (array, element) => {
  const elements = array.slice();
  elements.splice(element._pos, 1);
  elements.splice(
    element._pos+1,
    0,
    element);
  return elements;
};

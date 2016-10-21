'use strict';

/**
 * [gets array position of element in array]
 * @param  {[type]} array [description]
 * @param  {[type]} id    [description]
 * @return {[type]}       [description]
 */
export const getPositionOfElementInArray = (array, id) => {
  return array.map((a, i) => {
    a._pos = i;
    return a;
  })
  .filter(a => a.id === id)[0];
};

/**
 * [switches place of element one step forward in array]
 * @param  {[Array]} array    [array of elements]
 * @param  {[object]} element [object to move forward]
 * @return {[Array]}          [array of elements now switched]
 */
export const moveElementForwardInArray = (array, element) => {
  const elements = array.slice();
  elements.splice(element._pos, 1);
  elements.splice(
    element._pos-1 <= 0 ? 0 : element._pos-1,
    0, element);

  return elements;
};

/**
 * [switches place of element one step back in array]
 * @param  {[Array]} array   [array of elements]
 * @param  {[object]} element [object to move back]
 * @return {[Array]}         [array of elements now switched]
 */
export const moveElementBackwardsInArray = (array, element) => {
  const elements = array.slice();
  elements.splice(element._pos, 1);
  elements.splice(
    element._pos+1,
    0,
    element);
  return elements;
};

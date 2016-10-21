'use strict';

/**
 * [generates random string of x caracters]
 * @param  {[number]} length [length of string to generate]
 * @return {[string]}        [random string]
 */
export const generateRandomString = (length) => {
    let result = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
        result += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return result;
};

/**
 * [gets id not present in array]
 * @param  {[array]} usedIds [array of id's]
 * @return {[string]}        [uniq id]
 */
export const getUniqId = (usedIds) => {
  let id = '';
  let used = true;
  while(used){
    id = generateRandomString(20);
    used = usedIds
      .filter(_id => _id === id).length > 0;
  }
  return id;
};

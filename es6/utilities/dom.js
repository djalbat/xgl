'use strict';

function domElementFromSelector(selector) {
  const domElement = (typeof selector === 'string') ?
                       document.querySelectorAll(selector)[0] :  ///
                         selector;  ///

  return domElement;
}

module.exports = {
  domElementFromSelector: domElementFromSelector
};

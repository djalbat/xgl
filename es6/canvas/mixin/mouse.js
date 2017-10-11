'use strict';

const MouseCoordinates = require('../../mouseCoordinates');

let horizontalOffset = 512, ///
    verticalOffset = 320; ///

function mouseCoordinatesFromEvent(event) {
  const domElementBoundingClientRect = this.domElement.getBoundingClientRect(),
        x = +(event.clientX - domElementBoundingClientRect.left - horizontalOffset),  ///
        y = -(event.clientY - domElementBoundingClientRect.top - verticalOffset), ///
        mouseCoordinates = new MouseCoordinates(x, y);

  return mouseCoordinates;
}

module.exports = {
  mouseCoordinatesFromEvent: mouseCoordinatesFromEvent
};

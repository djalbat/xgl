'use strict';

const MouseCoordinates = require('../../camera/mouseCoordinates');

function mouseCoordinatesFromEvent(event) {
  const domElementBoundingClientRect = this.domElement.getBoundingClientRect(),
        x = +(event.clientX - domElementBoundingClientRect.left),
        y = -(event.clientY - domElementBoundingClientRect.top),
        mouseCoordinates = new MouseCoordinates(x, y);

  return mouseCoordinates;
}

module.exports = {
  mouseCoordinatesFromEvent: mouseCoordinatesFromEvent
};

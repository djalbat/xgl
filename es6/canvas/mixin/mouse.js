'use strict';

function mouseCoordinatesFromEvent(event) {
  const domElementBoundingClientRect = this.domElement.getBoundingClientRect(),
        mouseCoordinates = [
          +(event.clientX - domElementBoundingClientRect.left), 
          -(event.clientY - domElementBoundingClientRect.top) 
        ];

  return mouseCoordinates;
}

module.exports = {
  mouseCoordinatesFromEvent: mouseCoordinatesFromEvent
};

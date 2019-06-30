'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var KeyEvents = require('./keyEvents'),
    MouseEvents = require('./mouseEvents'),
    vectorMaths = require('../maths/vector');

var zero2 = vectorMaths.zero2,
    subtract2 = vectorMaths.subtract2;

var UserInput = function () {
  function UserInput(handlers, keyEvents, mouseEvents, mouseCoordinates, previousMouseCoordinates) {
    _classCallCheck(this, UserInput);

    this.handlers = handlers;
    this.keyEvents = keyEvents;
    this.mouseEvents = mouseEvents;
    this.mouseCoordinates = mouseCoordinates;
    this.previousMouseCoordinates = previousMouseCoordinates;
  }

  _createClass(UserInput, [{
    key: 'mouseMoveHandler',
    value: function mouseMoveHandler(mouseCoordinates, mouseDown, canvas) {
      this.previousMouseCoordinates = this.mouseCoordinates; ///

      this.mouseCoordinates = mouseCoordinates;

      if (this.previousMouseCoordinates === null) {
        return;
      }

      if (mouseDown) {
        var mouseWheelDelta = 0,
            ///
        shiftKeyDown = this.keyEvents.isShiftKeyDown(),
            relativeMouseCoordinates = subtract2(this.mouseCoordinates, this.previousMouseCoordinates);

        this.handlers.forEach(function (handler) {
          return handler(relativeMouseCoordinates, mouseWheelDelta, shiftKeyDown);
        });
      }
    }
  }, {
    key: 'mouseWheelHandler',
    value: function mouseWheelHandler(mouseWheelDelta, canvas) {
      var shiftKeyDown = this.keyEvents.isShiftKeyDown(),
          relativeMouseCoordinates = zero2();

      this.handlers.forEach(function (handler) {
        return handler(relativeMouseCoordinates, mouseWheelDelta, shiftKeyDown);
      });
    }
  }, {
    key: 'addUserInputHandler',
    value: function addUserInputHandler(userInputHandler) {
      var handler = userInputHandler; ///

      this.handlers.push(handler);
    }
  }, {
    key: 'initialise',
    value: function initialise(canvas) {
      var mouseMoveHandler = this.mouseMoveHandler.bind(this),
          mouseWheelHandler = this.mouseWheelHandler.bind(this);

      this.mouseEvents.addMouseMoveHandler(mouseMoveHandler);

      this.mouseEvents.addMouseWheelHandler(mouseWheelHandler);
    }
  }], [{
    key: 'fromNothing',
    value: function fromNothing(canvas) {
      var handlers = [],
          keyEvents = KeyEvents.fromNothing(canvas),
          mouseEvents = MouseEvents.fromNothing(canvas),
          mouseCoordinates = null,
          ///
      previousMouseCoordinates = null,
          ///
      userInput = new UserInput(handlers, keyEvents, mouseEvents, mouseCoordinates, previousMouseCoordinates);

      userInput.initialise(canvas);

      return userInput;
    }
  }]);

  return UserInput;
}();

module.exports = UserInput;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9taXNjZWxsYW5lb3VzL3VzZXJJbnB1dC5qcyJdLCJuYW1lcyI6WyJLZXlFdmVudHMiLCJyZXF1aXJlIiwiTW91c2VFdmVudHMiLCJ2ZWN0b3JNYXRocyIsInplcm8yIiwic3VidHJhY3QyIiwiVXNlcklucHV0IiwiaGFuZGxlcnMiLCJrZXlFdmVudHMiLCJtb3VzZUV2ZW50cyIsIm1vdXNlQ29vcmRpbmF0ZXMiLCJwcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMiLCJtb3VzZURvd24iLCJjYW52YXMiLCJtb3VzZVdoZWVsRGVsdGEiLCJzaGlmdEtleURvd24iLCJpc1NoaWZ0S2V5RG93biIsInJlbGF0aXZlTW91c2VDb29yZGluYXRlcyIsImZvckVhY2giLCJoYW5kbGVyIiwidXNlcklucHV0SGFuZGxlciIsInB1c2giLCJtb3VzZU1vdmVIYW5kbGVyIiwiYmluZCIsIm1vdXNlV2hlZWxIYW5kbGVyIiwiYWRkTW91c2VNb3ZlSGFuZGxlciIsImFkZE1vdXNlV2hlZWxIYW5kbGVyIiwiZnJvbU5vdGhpbmciLCJ1c2VySW5wdXQiLCJpbml0aWFsaXNlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFlBQVlDLFFBQVEsYUFBUixDQUFsQjtBQUFBLElBQ01DLGNBQWNELFFBQVEsZUFBUixDQURwQjtBQUFBLElBRU1FLGNBQWNGLFFBQVEsaUJBQVIsQ0FGcEI7O0lBSVFHLEssR0FBcUJELFcsQ0FBckJDLEs7SUFBT0MsUyxHQUFjRixXLENBQWRFLFM7O0lBRVRDLFM7QUFDSixxQkFBWUMsUUFBWixFQUFzQkMsU0FBdEIsRUFBaUNDLFdBQWpDLEVBQThDQyxnQkFBOUMsRUFBZ0VDLHdCQUFoRSxFQUEwRjtBQUFBOztBQUN4RixTQUFLSixRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLFNBQUtDLFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0EsU0FBS0MsV0FBTCxHQUFtQkEsV0FBbkI7QUFDQSxTQUFLQyxnQkFBTCxHQUF3QkEsZ0JBQXhCO0FBQ0EsU0FBS0Msd0JBQUwsR0FBZ0NBLHdCQUFoQztBQUNEOzs7O3FDQUVnQkQsZ0IsRUFBa0JFLFMsRUFBV0MsTSxFQUFRO0FBQ3BELFdBQUtGLHdCQUFMLEdBQWdDLEtBQUtELGdCQUFyQyxDQURvRCxDQUNJOztBQUV4RCxXQUFLQSxnQkFBTCxHQUF3QkEsZ0JBQXhCOztBQUVBLFVBQUksS0FBS0Msd0JBQUwsS0FBa0MsSUFBdEMsRUFBNEM7QUFDMUM7QUFDRDs7QUFFRCxVQUFJQyxTQUFKLEVBQWU7QUFDYixZQUFNRSxrQkFBa0IsQ0FBeEI7QUFBQSxZQUE0QjtBQUN0QkMsdUJBQWUsS0FBS1AsU0FBTCxDQUFlUSxjQUFmLEVBRHJCO0FBQUEsWUFFTUMsMkJBQTJCWixVQUFVLEtBQUtLLGdCQUFmLEVBQWlDLEtBQUtDLHdCQUF0QyxDQUZqQzs7QUFJQSxhQUFLSixRQUFMLENBQWNXLE9BQWQsQ0FBc0IsVUFBQ0MsT0FBRDtBQUFBLGlCQUFhQSxRQUFRRix3QkFBUixFQUFrQ0gsZUFBbEMsRUFBbURDLFlBQW5ELENBQWI7QUFBQSxTQUF0QjtBQUNEO0FBQ0Y7OztzQ0FFaUJELGUsRUFBaUJELE0sRUFBUTtBQUN6QyxVQUFNRSxlQUFlLEtBQUtQLFNBQUwsQ0FBZVEsY0FBZixFQUFyQjtBQUFBLFVBQ01DLDJCQUEyQmIsT0FEakM7O0FBR0EsV0FBS0csUUFBTCxDQUFjVyxPQUFkLENBQXNCLFVBQUNDLE9BQUQ7QUFBQSxlQUFhQSxRQUFRRix3QkFBUixFQUFrQ0gsZUFBbEMsRUFBbURDLFlBQW5ELENBQWI7QUFBQSxPQUF0QjtBQUNEOzs7d0NBRW1CSyxnQixFQUFrQjtBQUNwQyxVQUFNRCxVQUFVQyxnQkFBaEIsQ0FEb0MsQ0FDRjs7QUFFbEMsV0FBS2IsUUFBTCxDQUFjYyxJQUFkLENBQW1CRixPQUFuQjtBQUNEOzs7K0JBRVVOLE0sRUFBUTtBQUNqQixVQUFNUyxtQkFBbUIsS0FBS0EsZ0JBQUwsQ0FBc0JDLElBQXRCLENBQTJCLElBQTNCLENBQXpCO0FBQUEsVUFDTUMsb0JBQW9CLEtBQUtBLGlCQUFMLENBQXVCRCxJQUF2QixDQUE0QixJQUE1QixDQUQxQjs7QUFHQSxXQUFLZCxXQUFMLENBQWlCZ0IsbUJBQWpCLENBQXFDSCxnQkFBckM7O0FBRUEsV0FBS2IsV0FBTCxDQUFpQmlCLG9CQUFqQixDQUFzQ0YsaUJBQXRDO0FBQ0Q7OztnQ0FFa0JYLE0sRUFBUTtBQUN6QixVQUFNTixXQUFXLEVBQWpCO0FBQUEsVUFDTUMsWUFBWVIsVUFBVTJCLFdBQVYsQ0FBc0JkLE1BQXRCLENBRGxCO0FBQUEsVUFFTUosY0FBY1AsWUFBWXlCLFdBQVosQ0FBd0JkLE1BQXhCLENBRnBCO0FBQUEsVUFHTUgsbUJBQW1CLElBSHpCO0FBQUEsVUFHZ0M7QUFDMUJDLGlDQUEyQixJQUpqQztBQUFBLFVBSXdDO0FBQ2xDaUIsa0JBQVksSUFBSXRCLFNBQUosQ0FBY0MsUUFBZCxFQUF3QkMsU0FBeEIsRUFBbUNDLFdBQW5DLEVBQWdEQyxnQkFBaEQsRUFBa0VDLHdCQUFsRSxDQUxsQjs7QUFPQWlCLGdCQUFVQyxVQUFWLENBQXFCaEIsTUFBckI7O0FBRUEsYUFBT2UsU0FBUDtBQUNEOzs7Ozs7QUFHSEUsT0FBT0MsT0FBUCxHQUFpQnpCLFNBQWpCIiwiZmlsZSI6InVzZXJJbnB1dC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgS2V5RXZlbnRzID0gcmVxdWlyZSgnLi9rZXlFdmVudHMnKSxcbiAgICAgIE1vdXNlRXZlbnRzID0gcmVxdWlyZSgnLi9tb3VzZUV2ZW50cycpLFxuICAgICAgdmVjdG9yTWF0aHMgPSByZXF1aXJlKCcuLi9tYXRocy92ZWN0b3InKTtcblxuY29uc3QgeyB6ZXJvMiwgc3VidHJhY3QyIH0gPSB2ZWN0b3JNYXRocztcblxuY2xhc3MgVXNlcklucHV0IHtcbiAgY29uc3RydWN0b3IoaGFuZGxlcnMsIGtleUV2ZW50cywgbW91c2VFdmVudHMsIG1vdXNlQ29vcmRpbmF0ZXMsIHByZXZpb3VzTW91c2VDb29yZGluYXRlcykge1xuICAgIHRoaXMuaGFuZGxlcnMgPSBoYW5kbGVycztcbiAgICB0aGlzLmtleUV2ZW50cyA9IGtleUV2ZW50cztcbiAgICB0aGlzLm1vdXNlRXZlbnRzID0gbW91c2VFdmVudHM7XG4gICAgdGhpcy5tb3VzZUNvb3JkaW5hdGVzID0gbW91c2VDb29yZGluYXRlcztcbiAgICB0aGlzLnByZXZpb3VzTW91c2VDb29yZGluYXRlcyA9IHByZXZpb3VzTW91c2VDb29yZGluYXRlcztcbiAgfVxuXG4gIG1vdXNlTW92ZUhhbmRsZXIobW91c2VDb29yZGluYXRlcywgbW91c2VEb3duLCBjYW52YXMpIHtcbiAgICB0aGlzLnByZXZpb3VzTW91c2VDb29yZGluYXRlcyA9IHRoaXMubW91c2VDb29yZGluYXRlczsgIC8vL1xuXG4gICAgdGhpcy5tb3VzZUNvb3JkaW5hdGVzID0gbW91c2VDb29yZGluYXRlcztcblxuICAgIGlmICh0aGlzLnByZXZpb3VzTW91c2VDb29yZGluYXRlcyA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChtb3VzZURvd24pIHtcbiAgICAgIGNvbnN0IG1vdXNlV2hlZWxEZWx0YSA9IDAsICAvLy9cbiAgICAgICAgICAgIHNoaWZ0S2V5RG93biA9IHRoaXMua2V5RXZlbnRzLmlzU2hpZnRLZXlEb3duKCksXG4gICAgICAgICAgICByZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMgPSBzdWJ0cmFjdDIodGhpcy5tb3VzZUNvb3JkaW5hdGVzLCB0aGlzLnByZXZpb3VzTW91c2VDb29yZGluYXRlcyk7XG5cbiAgICAgIHRoaXMuaGFuZGxlcnMuZm9yRWFjaCgoaGFuZGxlcikgPT4gaGFuZGxlcihyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlV2hlZWxEZWx0YSwgc2hpZnRLZXlEb3duKSk7XG4gICAgfVxuICB9XG5cbiAgbW91c2VXaGVlbEhhbmRsZXIobW91c2VXaGVlbERlbHRhLCBjYW52YXMpIHtcbiAgICBjb25zdCBzaGlmdEtleURvd24gPSB0aGlzLmtleUV2ZW50cy5pc1NoaWZ0S2V5RG93bigpLFxuICAgICAgICAgIHJlbGF0aXZlTW91c2VDb29yZGluYXRlcyA9IHplcm8yKCk7XG5cbiAgICB0aGlzLmhhbmRsZXJzLmZvckVhY2goKGhhbmRsZXIpID0+IGhhbmRsZXIocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCBtb3VzZVdoZWVsRGVsdGEsIHNoaWZ0S2V5RG93bikpO1xuICB9XG5cbiAgYWRkVXNlcklucHV0SGFuZGxlcih1c2VySW5wdXRIYW5kbGVyKSB7XG4gICAgY29uc3QgaGFuZGxlciA9IHVzZXJJbnB1dEhhbmRsZXI7IC8vL1xuXG4gICAgdGhpcy5oYW5kbGVycy5wdXNoKGhhbmRsZXIpO1xuICB9XG5cbiAgaW5pdGlhbGlzZShjYW52YXMpIHtcbiAgICBjb25zdCBtb3VzZU1vdmVIYW5kbGVyID0gdGhpcy5tb3VzZU1vdmVIYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICAgICAgbW91c2VXaGVlbEhhbmRsZXIgPSB0aGlzLm1vdXNlV2hlZWxIYW5kbGVyLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLm1vdXNlRXZlbnRzLmFkZE1vdXNlTW92ZUhhbmRsZXIobW91c2VNb3ZlSGFuZGxlcik7XG5cbiAgICB0aGlzLm1vdXNlRXZlbnRzLmFkZE1vdXNlV2hlZWxIYW5kbGVyKG1vdXNlV2hlZWxIYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZyhjYW52YXMpIHtcbiAgICBjb25zdCBoYW5kbGVycyA9IFtdLFxuICAgICAgICAgIGtleUV2ZW50cyA9IEtleUV2ZW50cy5mcm9tTm90aGluZyhjYW52YXMpLFxuICAgICAgICAgIG1vdXNlRXZlbnRzID0gTW91c2VFdmVudHMuZnJvbU5vdGhpbmcoY2FudmFzKSxcbiAgICAgICAgICBtb3VzZUNvb3JkaW5hdGVzID0gbnVsbCwgIC8vL1xuICAgICAgICAgIHByZXZpb3VzTW91c2VDb29yZGluYXRlcyA9IG51bGwsICAvLy9cbiAgICAgICAgICB1c2VySW5wdXQgPSBuZXcgVXNlcklucHV0KGhhbmRsZXJzLCBrZXlFdmVudHMsIG1vdXNlRXZlbnRzLCBtb3VzZUNvb3JkaW5hdGVzLCBwcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMpO1xuXG4gICAgdXNlcklucHV0LmluaXRpYWxpc2UoY2FudmFzKTtcblxuICAgIHJldHVybiB1c2VySW5wdXQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBVc2VySW5wdXQ7XG4iXX0=
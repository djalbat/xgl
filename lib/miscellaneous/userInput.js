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

      this.keyEvents.initialise(canvas);

      this.mouseEvents.initialise(canvas);

      this.mouseEvents.addMouseMoveHandler(mouseMoveHandler);

      this.mouseEvents.addMouseWheelHandler(mouseWheelHandler);
    }
  }], [{
    key: 'fromNothing',
    value: function fromNothing() {
      var handlers = [],
          keyEvents = KeyEvents.fromNothing(),
          mouseEvents = MouseEvents.fromNothing(),
          mouseCoordinates = null,
          ///
      previousMouseCoordinates = null,
          ///
      userInput = new UserInput(handlers, keyEvents, mouseEvents, mouseCoordinates, previousMouseCoordinates);

      return userInput;
    }
  }]);

  return UserInput;
}();

module.exports = UserInput;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9taXNjZWxsYW5lb3VzL3VzZXJJbnB1dC5qcyJdLCJuYW1lcyI6WyJLZXlFdmVudHMiLCJyZXF1aXJlIiwiTW91c2VFdmVudHMiLCJ2ZWN0b3JNYXRocyIsInplcm8yIiwic3VidHJhY3QyIiwiVXNlcklucHV0IiwiaGFuZGxlcnMiLCJrZXlFdmVudHMiLCJtb3VzZUV2ZW50cyIsIm1vdXNlQ29vcmRpbmF0ZXMiLCJwcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMiLCJtb3VzZURvd24iLCJjYW52YXMiLCJtb3VzZVdoZWVsRGVsdGEiLCJzaGlmdEtleURvd24iLCJpc1NoaWZ0S2V5RG93biIsInJlbGF0aXZlTW91c2VDb29yZGluYXRlcyIsImZvckVhY2giLCJoYW5kbGVyIiwidXNlcklucHV0SGFuZGxlciIsInB1c2giLCJtb3VzZU1vdmVIYW5kbGVyIiwiYmluZCIsIm1vdXNlV2hlZWxIYW5kbGVyIiwiaW5pdGlhbGlzZSIsImFkZE1vdXNlTW92ZUhhbmRsZXIiLCJhZGRNb3VzZVdoZWVsSGFuZGxlciIsImZyb21Ob3RoaW5nIiwidXNlcklucHV0IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFlBQVlDLFFBQVEsYUFBUixDQUFsQjtBQUFBLElBQ01DLGNBQWNELFFBQVEsZUFBUixDQURwQjtBQUFBLElBRU1FLGNBQWNGLFFBQVEsaUJBQVIsQ0FGcEI7O0lBSVFHLEssR0FBcUJELFcsQ0FBckJDLEs7SUFBT0MsUyxHQUFjRixXLENBQWRFLFM7O0lBRVRDLFM7QUFDSixxQkFBWUMsUUFBWixFQUFzQkMsU0FBdEIsRUFBaUNDLFdBQWpDLEVBQThDQyxnQkFBOUMsRUFBZ0VDLHdCQUFoRSxFQUEwRjtBQUFBOztBQUN4RixTQUFLSixRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLFNBQUtDLFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0EsU0FBS0MsV0FBTCxHQUFtQkEsV0FBbkI7QUFDQSxTQUFLQyxnQkFBTCxHQUF3QkEsZ0JBQXhCO0FBQ0EsU0FBS0Msd0JBQUwsR0FBZ0NBLHdCQUFoQztBQUNEOzs7O3FDQUVnQkQsZ0IsRUFBa0JFLFMsRUFBV0MsTSxFQUFRO0FBQ3BELFdBQUtGLHdCQUFMLEdBQWdDLEtBQUtELGdCQUFyQyxDQURvRCxDQUNJOztBQUV4RCxXQUFLQSxnQkFBTCxHQUF3QkEsZ0JBQXhCOztBQUVBLFVBQUksS0FBS0Msd0JBQUwsS0FBa0MsSUFBdEMsRUFBNEM7QUFDMUM7QUFDRDs7QUFFRCxVQUFJQyxTQUFKLEVBQWU7QUFDYixZQUFNRSxrQkFBa0IsQ0FBeEI7QUFBQSxZQUE0QjtBQUN0QkMsdUJBQWUsS0FBS1AsU0FBTCxDQUFlUSxjQUFmLEVBRHJCO0FBQUEsWUFFTUMsMkJBQTJCWixVQUFVLEtBQUtLLGdCQUFmLEVBQWlDLEtBQUtDLHdCQUF0QyxDQUZqQzs7QUFJQSxhQUFLSixRQUFMLENBQWNXLE9BQWQsQ0FBc0IsVUFBQ0MsT0FBRDtBQUFBLGlCQUFhQSxRQUFRRix3QkFBUixFQUFrQ0gsZUFBbEMsRUFBbURDLFlBQW5ELENBQWI7QUFBQSxTQUF0QjtBQUNEO0FBQ0Y7OztzQ0FFaUJELGUsRUFBaUJELE0sRUFBUTtBQUN6QyxVQUFNRSxlQUFlLEtBQUtQLFNBQUwsQ0FBZVEsY0FBZixFQUFyQjtBQUFBLFVBQ01DLDJCQUEyQmIsT0FEakM7O0FBR0EsV0FBS0csUUFBTCxDQUFjVyxPQUFkLENBQXNCLFVBQUNDLE9BQUQ7QUFBQSxlQUFhQSxRQUFRRix3QkFBUixFQUFrQ0gsZUFBbEMsRUFBbURDLFlBQW5ELENBQWI7QUFBQSxPQUF0QjtBQUNEOzs7d0NBRW1CSyxnQixFQUFrQjtBQUNwQyxVQUFNRCxVQUFVQyxnQkFBaEIsQ0FEb0MsQ0FDRjs7QUFFbEMsV0FBS2IsUUFBTCxDQUFjYyxJQUFkLENBQW1CRixPQUFuQjtBQUNEOzs7K0JBRVVOLE0sRUFBUTtBQUNqQixVQUFNUyxtQkFBbUIsS0FBS0EsZ0JBQUwsQ0FBc0JDLElBQXRCLENBQTJCLElBQTNCLENBQXpCO0FBQUEsVUFDTUMsb0JBQW9CLEtBQUtBLGlCQUFMLENBQXVCRCxJQUF2QixDQUE0QixJQUE1QixDQUQxQjs7QUFHQSxXQUFLZixTQUFMLENBQWVpQixVQUFmLENBQTBCWixNQUExQjs7QUFFQSxXQUFLSixXQUFMLENBQWlCZ0IsVUFBakIsQ0FBNEJaLE1BQTVCOztBQUVBLFdBQUtKLFdBQUwsQ0FBaUJpQixtQkFBakIsQ0FBcUNKLGdCQUFyQzs7QUFFQSxXQUFLYixXQUFMLENBQWlCa0Isb0JBQWpCLENBQXNDSCxpQkFBdEM7QUFDRDs7O2tDQUVvQjtBQUNuQixVQUFNakIsV0FBVyxFQUFqQjtBQUFBLFVBQ01DLFlBQVlSLFVBQVU0QixXQUFWLEVBRGxCO0FBQUEsVUFFTW5CLGNBQWNQLFlBQVkwQixXQUFaLEVBRnBCO0FBQUEsVUFHTWxCLG1CQUFtQixJQUh6QjtBQUFBLFVBR2dDO0FBQzFCQyxpQ0FBMkIsSUFKakM7QUFBQSxVQUl3QztBQUNsQ2tCLGtCQUFZLElBQUl2QixTQUFKLENBQWNDLFFBQWQsRUFBd0JDLFNBQXhCLEVBQW1DQyxXQUFuQyxFQUFnREMsZ0JBQWhELEVBQWtFQyx3QkFBbEUsQ0FMbEI7O0FBT0EsYUFBT2tCLFNBQVA7QUFDRDs7Ozs7O0FBR0hDLE9BQU9DLE9BQVAsR0FBaUJ6QixTQUFqQiIsImZpbGUiOiJ1c2VySW5wdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEtleUV2ZW50cyA9IHJlcXVpcmUoJy4va2V5RXZlbnRzJyksXG4gICAgICBNb3VzZUV2ZW50cyA9IHJlcXVpcmUoJy4vbW91c2VFdmVudHMnKSxcbiAgICAgIHZlY3Rvck1hdGhzID0gcmVxdWlyZSgnLi4vbWF0aHMvdmVjdG9yJyk7XG5cbmNvbnN0IHsgemVybzIsIHN1YnRyYWN0MiB9ID0gdmVjdG9yTWF0aHM7XG5cbmNsYXNzIFVzZXJJbnB1dCB7XG4gIGNvbnN0cnVjdG9yKGhhbmRsZXJzLCBrZXlFdmVudHMsIG1vdXNlRXZlbnRzLCBtb3VzZUNvb3JkaW5hdGVzLCBwcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMpIHtcbiAgICB0aGlzLmhhbmRsZXJzID0gaGFuZGxlcnM7XG4gICAgdGhpcy5rZXlFdmVudHMgPSBrZXlFdmVudHM7XG4gICAgdGhpcy5tb3VzZUV2ZW50cyA9IG1vdXNlRXZlbnRzO1xuICAgIHRoaXMubW91c2VDb29yZGluYXRlcyA9IG1vdXNlQ29vcmRpbmF0ZXM7XG4gICAgdGhpcy5wcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMgPSBwcmV2aW91c01vdXNlQ29vcmRpbmF0ZXM7XG4gIH1cblxuICBtb3VzZU1vdmVIYW5kbGVyKG1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlRG93biwgY2FudmFzKSB7XG4gICAgdGhpcy5wcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMgPSB0aGlzLm1vdXNlQ29vcmRpbmF0ZXM7ICAvLy9cblxuICAgIHRoaXMubW91c2VDb29yZGluYXRlcyA9IG1vdXNlQ29vcmRpbmF0ZXM7XG5cbiAgICBpZiAodGhpcy5wcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAobW91c2VEb3duKSB7XG4gICAgICBjb25zdCBtb3VzZVdoZWVsRGVsdGEgPSAwLCAgLy8vXG4gICAgICAgICAgICBzaGlmdEtleURvd24gPSB0aGlzLmtleUV2ZW50cy5pc1NoaWZ0S2V5RG93bigpLFxuICAgICAgICAgICAgcmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzID0gc3VidHJhY3QyKHRoaXMubW91c2VDb29yZGluYXRlcywgdGhpcy5wcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMpO1xuXG4gICAgICB0aGlzLmhhbmRsZXJzLmZvckVhY2goKGhhbmRsZXIpID0+IGhhbmRsZXIocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCBtb3VzZVdoZWVsRGVsdGEsIHNoaWZ0S2V5RG93bikpO1xuICAgIH1cbiAgfVxuXG4gIG1vdXNlV2hlZWxIYW5kbGVyKG1vdXNlV2hlZWxEZWx0YSwgY2FudmFzKSB7XG4gICAgY29uc3Qgc2hpZnRLZXlEb3duID0gdGhpcy5rZXlFdmVudHMuaXNTaGlmdEtleURvd24oKSxcbiAgICAgICAgICByZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMgPSB6ZXJvMigpO1xuXG4gICAgdGhpcy5oYW5kbGVycy5mb3JFYWNoKChoYW5kbGVyKSA9PiBoYW5kbGVyKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgbW91c2VXaGVlbERlbHRhLCBzaGlmdEtleURvd24pKTtcbiAgfVxuXG4gIGFkZFVzZXJJbnB1dEhhbmRsZXIodXNlcklucHV0SGFuZGxlcikge1xuICAgIGNvbnN0IGhhbmRsZXIgPSB1c2VySW5wdXRIYW5kbGVyOyAvLy9cblxuICAgIHRoaXMuaGFuZGxlcnMucHVzaChoYW5kbGVyKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoY2FudmFzKSB7XG4gICAgY29uc3QgbW91c2VNb3ZlSGFuZGxlciA9IHRoaXMubW91c2VNb3ZlSGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIG1vdXNlV2hlZWxIYW5kbGVyID0gdGhpcy5tb3VzZVdoZWVsSGFuZGxlci5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5rZXlFdmVudHMuaW5pdGlhbGlzZShjYW52YXMpO1xuXG4gICAgdGhpcy5tb3VzZUV2ZW50cy5pbml0aWFsaXNlKGNhbnZhcyk7XG5cbiAgICB0aGlzLm1vdXNlRXZlbnRzLmFkZE1vdXNlTW92ZUhhbmRsZXIobW91c2VNb3ZlSGFuZGxlcik7XG5cbiAgICB0aGlzLm1vdXNlRXZlbnRzLmFkZE1vdXNlV2hlZWxIYW5kbGVyKG1vdXNlV2hlZWxIYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBoYW5kbGVycyA9IFtdLFxuICAgICAgICAgIGtleUV2ZW50cyA9IEtleUV2ZW50cy5mcm9tTm90aGluZygpLFxuICAgICAgICAgIG1vdXNlRXZlbnRzID0gTW91c2VFdmVudHMuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBtb3VzZUNvb3JkaW5hdGVzID0gbnVsbCwgIC8vL1xuICAgICAgICAgIHByZXZpb3VzTW91c2VDb29yZGluYXRlcyA9IG51bGwsICAvLy9cbiAgICAgICAgICB1c2VySW5wdXQgPSBuZXcgVXNlcklucHV0KGhhbmRsZXJzLCBrZXlFdmVudHMsIG1vdXNlRXZlbnRzLCBtb3VzZUNvb3JkaW5hdGVzLCBwcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMpO1xuXG4gICAgcmV0dXJuIHVzZXJJbnB1dDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFVzZXJJbnB1dDtcbiJdfQ==
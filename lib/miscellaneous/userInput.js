"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _keyEvents = _interopRequireDefault(require("./keyEvents"));

var _mouseEvents = _interopRequireDefault(require("./mouseEvents"));

var _vector = require("../maths/vector");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var UserInput = /*#__PURE__*/function () {
  function UserInput(handlers, keyEvents, mouseEvents, mouseCoordinates, previousMouseCoordinates) {
    _classCallCheck(this, UserInput);

    this.handlers = handlers;
    this.keyEvents = keyEvents;
    this.mouseEvents = mouseEvents;
    this.mouseCoordinates = mouseCoordinates;
    this.previousMouseCoordinates = previousMouseCoordinates;
  }

  _createClass(UserInput, [{
    key: "mouseMoveHandler",
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
            relativeMouseCoordinates = (0, _vector.subtract2)(this.mouseCoordinates, this.previousMouseCoordinates);
        this.handlers.forEach(function (handler) {
          return handler(relativeMouseCoordinates, mouseWheelDelta, shiftKeyDown);
        });
      }
    }
  }, {
    key: "mouseWheelHandler",
    value: function mouseWheelHandler(mouseWheelDelta, canvas) {
      var shiftKeyDown = this.keyEvents.isShiftKeyDown(),
          relativeMouseCoordinates = (0, _vector.zero2)();
      this.handlers.forEach(function (handler) {
        return handler(relativeMouseCoordinates, mouseWheelDelta, shiftKeyDown);
      });
    }
  }, {
    key: "addUserInputHandler",
    value: function addUserInputHandler(userInputHandler) {
      var handler = userInputHandler; ///

      this.handlers.push(handler);
    }
  }, {
    key: "initialise",
    value: function initialise(canvas) {
      var mouseMoveHandler = this.mouseMoveHandler.bind(this),
          mouseWheelHandler = this.mouseWheelHandler.bind(this);
      this.keyEvents.initialise(canvas);
      this.mouseEvents.initialise(canvas);
      this.mouseEvents.addMouseMoveHandler(mouseMoveHandler);
      this.mouseEvents.addMouseWheelHandler(mouseWheelHandler);
    }
  }], [{
    key: "fromNothing",
    value: function fromNothing() {
      var handlers = [],
          keyEvents = _keyEvents["default"].fromNothing(),
          mouseEvents = _mouseEvents["default"].fromNothing(),
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

exports["default"] = UserInput;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXJJbnB1dC5qcyJdLCJuYW1lcyI6WyJVc2VySW5wdXQiLCJoYW5kbGVycyIsImtleUV2ZW50cyIsIm1vdXNlRXZlbnRzIiwibW91c2VDb29yZGluYXRlcyIsInByZXZpb3VzTW91c2VDb29yZGluYXRlcyIsIm1vdXNlRG93biIsImNhbnZhcyIsIm1vdXNlV2hlZWxEZWx0YSIsInNoaWZ0S2V5RG93biIsImlzU2hpZnRLZXlEb3duIiwicmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzIiwiZm9yRWFjaCIsImhhbmRsZXIiLCJ1c2VySW5wdXRIYW5kbGVyIiwicHVzaCIsIm1vdXNlTW92ZUhhbmRsZXIiLCJiaW5kIiwibW91c2VXaGVlbEhhbmRsZXIiLCJpbml0aWFsaXNlIiwiYWRkTW91c2VNb3ZlSGFuZGxlciIsImFkZE1vdXNlV2hlZWxIYW5kbGVyIiwiS2V5RXZlbnRzIiwiZnJvbU5vdGhpbmciLCJNb3VzZUV2ZW50cyIsInVzZXJJbnB1dCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7OztJQUVxQkEsUztBQUNuQixxQkFBWUMsUUFBWixFQUFzQkMsU0FBdEIsRUFBaUNDLFdBQWpDLEVBQThDQyxnQkFBOUMsRUFBZ0VDLHdCQUFoRSxFQUEwRjtBQUFBOztBQUN4RixTQUFLSixRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLFNBQUtDLFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0EsU0FBS0MsV0FBTCxHQUFtQkEsV0FBbkI7QUFDQSxTQUFLQyxnQkFBTCxHQUF3QkEsZ0JBQXhCO0FBQ0EsU0FBS0Msd0JBQUwsR0FBZ0NBLHdCQUFoQztBQUNEOzs7O3FDQUVnQkQsZ0IsRUFBa0JFLFMsRUFBV0MsTSxFQUFRO0FBQ3BELFdBQUtGLHdCQUFMLEdBQWdDLEtBQUtELGdCQUFyQyxDQURvRCxDQUNJOztBQUV4RCxXQUFLQSxnQkFBTCxHQUF3QkEsZ0JBQXhCOztBQUVBLFVBQUksS0FBS0Msd0JBQUwsS0FBa0MsSUFBdEMsRUFBNEM7QUFDMUM7QUFDRDs7QUFFRCxVQUFJQyxTQUFKLEVBQWU7QUFDYixZQUFNRSxlQUFlLEdBQUcsQ0FBeEI7QUFBQSxZQUE0QjtBQUN0QkMsUUFBQUEsWUFBWSxHQUFHLEtBQUtQLFNBQUwsQ0FBZVEsY0FBZixFQURyQjtBQUFBLFlBRU1DLHdCQUF3QixHQUFHLHVCQUFVLEtBQUtQLGdCQUFmLEVBQWlDLEtBQUtDLHdCQUF0QyxDQUZqQztBQUlBLGFBQUtKLFFBQUwsQ0FBY1csT0FBZCxDQUFzQixVQUFDQyxPQUFEO0FBQUEsaUJBQWFBLE9BQU8sQ0FBQ0Ysd0JBQUQsRUFBMkJILGVBQTNCLEVBQTRDQyxZQUE1QyxDQUFwQjtBQUFBLFNBQXRCO0FBQ0Q7QUFDRjs7O3NDQUVpQkQsZSxFQUFpQkQsTSxFQUFRO0FBQ3pDLFVBQU1FLFlBQVksR0FBRyxLQUFLUCxTQUFMLENBQWVRLGNBQWYsRUFBckI7QUFBQSxVQUNNQyx3QkFBd0IsR0FBRyxvQkFEakM7QUFHQSxXQUFLVixRQUFMLENBQWNXLE9BQWQsQ0FBc0IsVUFBQ0MsT0FBRDtBQUFBLGVBQWFBLE9BQU8sQ0FBQ0Ysd0JBQUQsRUFBMkJILGVBQTNCLEVBQTRDQyxZQUE1QyxDQUFwQjtBQUFBLE9BQXRCO0FBQ0Q7Ozt3Q0FFbUJLLGdCLEVBQWtCO0FBQ3BDLFVBQU1ELE9BQU8sR0FBR0MsZ0JBQWhCLENBRG9DLENBQ0Y7O0FBRWxDLFdBQUtiLFFBQUwsQ0FBY2MsSUFBZCxDQUFtQkYsT0FBbkI7QUFDRDs7OytCQUVVTixNLEVBQVE7QUFDakIsVUFBTVMsZ0JBQWdCLEdBQUcsS0FBS0EsZ0JBQUwsQ0FBc0JDLElBQXRCLENBQTJCLElBQTNCLENBQXpCO0FBQUEsVUFDTUMsaUJBQWlCLEdBQUcsS0FBS0EsaUJBQUwsQ0FBdUJELElBQXZCLENBQTRCLElBQTVCLENBRDFCO0FBR0EsV0FBS2YsU0FBTCxDQUFlaUIsVUFBZixDQUEwQlosTUFBMUI7QUFFQSxXQUFLSixXQUFMLENBQWlCZ0IsVUFBakIsQ0FBNEJaLE1BQTVCO0FBRUEsV0FBS0osV0FBTCxDQUFpQmlCLG1CQUFqQixDQUFxQ0osZ0JBQXJDO0FBRUEsV0FBS2IsV0FBTCxDQUFpQmtCLG9CQUFqQixDQUFzQ0gsaUJBQXRDO0FBQ0Q7OztrQ0FFb0I7QUFDbkIsVUFBTWpCLFFBQVEsR0FBRyxFQUFqQjtBQUFBLFVBQ01DLFNBQVMsR0FBR29CLHNCQUFVQyxXQUFWLEVBRGxCO0FBQUEsVUFFTXBCLFdBQVcsR0FBR3FCLHdCQUFZRCxXQUFaLEVBRnBCO0FBQUEsVUFHTW5CLGdCQUFnQixHQUFHLElBSHpCO0FBQUEsVUFHZ0M7QUFDMUJDLE1BQUFBLHdCQUF3QixHQUFHLElBSmpDO0FBQUEsVUFJd0M7QUFDbENvQixNQUFBQSxTQUFTLEdBQUcsSUFBSXpCLFNBQUosQ0FBY0MsUUFBZCxFQUF3QkMsU0FBeEIsRUFBbUNDLFdBQW5DLEVBQWdEQyxnQkFBaEQsRUFBa0VDLHdCQUFsRSxDQUxsQjs7QUFPQSxhQUFPb0IsU0FBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBLZXlFdmVudHMgZnJvbSBcIi4va2V5RXZlbnRzXCI7XG5pbXBvcnQgTW91c2VFdmVudHMgZnJvbSBcIi4vbW91c2VFdmVudHNcIjtcblxuaW1wb3J0IHsgemVybzIsIHN1YnRyYWN0MiB9IGZyb20gXCIuLi9tYXRocy92ZWN0b3JcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlcklucHV0IHtcbiAgY29uc3RydWN0b3IoaGFuZGxlcnMsIGtleUV2ZW50cywgbW91c2VFdmVudHMsIG1vdXNlQ29vcmRpbmF0ZXMsIHByZXZpb3VzTW91c2VDb29yZGluYXRlcykge1xuICAgIHRoaXMuaGFuZGxlcnMgPSBoYW5kbGVycztcbiAgICB0aGlzLmtleUV2ZW50cyA9IGtleUV2ZW50cztcbiAgICB0aGlzLm1vdXNlRXZlbnRzID0gbW91c2VFdmVudHM7XG4gICAgdGhpcy5tb3VzZUNvb3JkaW5hdGVzID0gbW91c2VDb29yZGluYXRlcztcbiAgICB0aGlzLnByZXZpb3VzTW91c2VDb29yZGluYXRlcyA9IHByZXZpb3VzTW91c2VDb29yZGluYXRlcztcbiAgfVxuXG4gIG1vdXNlTW92ZUhhbmRsZXIobW91c2VDb29yZGluYXRlcywgbW91c2VEb3duLCBjYW52YXMpIHtcbiAgICB0aGlzLnByZXZpb3VzTW91c2VDb29yZGluYXRlcyA9IHRoaXMubW91c2VDb29yZGluYXRlczsgIC8vL1xuXG4gICAgdGhpcy5tb3VzZUNvb3JkaW5hdGVzID0gbW91c2VDb29yZGluYXRlcztcblxuICAgIGlmICh0aGlzLnByZXZpb3VzTW91c2VDb29yZGluYXRlcyA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChtb3VzZURvd24pIHtcbiAgICAgIGNvbnN0IG1vdXNlV2hlZWxEZWx0YSA9IDAsICAvLy9cbiAgICAgICAgICAgIHNoaWZ0S2V5RG93biA9IHRoaXMua2V5RXZlbnRzLmlzU2hpZnRLZXlEb3duKCksXG4gICAgICAgICAgICByZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMgPSBzdWJ0cmFjdDIodGhpcy5tb3VzZUNvb3JkaW5hdGVzLCB0aGlzLnByZXZpb3VzTW91c2VDb29yZGluYXRlcyk7XG5cbiAgICAgIHRoaXMuaGFuZGxlcnMuZm9yRWFjaCgoaGFuZGxlcikgPT4gaGFuZGxlcihyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlV2hlZWxEZWx0YSwgc2hpZnRLZXlEb3duKSk7XG4gICAgfVxuICB9XG5cbiAgbW91c2VXaGVlbEhhbmRsZXIobW91c2VXaGVlbERlbHRhLCBjYW52YXMpIHtcbiAgICBjb25zdCBzaGlmdEtleURvd24gPSB0aGlzLmtleUV2ZW50cy5pc1NoaWZ0S2V5RG93bigpLFxuICAgICAgICAgIHJlbGF0aXZlTW91c2VDb29yZGluYXRlcyA9IHplcm8yKCk7XG5cbiAgICB0aGlzLmhhbmRsZXJzLmZvckVhY2goKGhhbmRsZXIpID0+IGhhbmRsZXIocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCBtb3VzZVdoZWVsRGVsdGEsIHNoaWZ0S2V5RG93bikpO1xuICB9XG5cbiAgYWRkVXNlcklucHV0SGFuZGxlcih1c2VySW5wdXRIYW5kbGVyKSB7XG4gICAgY29uc3QgaGFuZGxlciA9IHVzZXJJbnB1dEhhbmRsZXI7IC8vL1xuXG4gICAgdGhpcy5oYW5kbGVycy5wdXNoKGhhbmRsZXIpO1xuICB9XG5cbiAgaW5pdGlhbGlzZShjYW52YXMpIHtcbiAgICBjb25zdCBtb3VzZU1vdmVIYW5kbGVyID0gdGhpcy5tb3VzZU1vdmVIYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICAgICAgbW91c2VXaGVlbEhhbmRsZXIgPSB0aGlzLm1vdXNlV2hlZWxIYW5kbGVyLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLmtleUV2ZW50cy5pbml0aWFsaXNlKGNhbnZhcyk7XG5cbiAgICB0aGlzLm1vdXNlRXZlbnRzLmluaXRpYWxpc2UoY2FudmFzKTtcblxuICAgIHRoaXMubW91c2VFdmVudHMuYWRkTW91c2VNb3ZlSGFuZGxlcihtb3VzZU1vdmVIYW5kbGVyKTtcblxuICAgIHRoaXMubW91c2VFdmVudHMuYWRkTW91c2VXaGVlbEhhbmRsZXIobW91c2VXaGVlbEhhbmRsZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IGhhbmRsZXJzID0gW10sXG4gICAgICAgICAga2V5RXZlbnRzID0gS2V5RXZlbnRzLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgbW91c2VFdmVudHMgPSBNb3VzZUV2ZW50cy5mcm9tTm90aGluZygpLFxuICAgICAgICAgIG1vdXNlQ29vcmRpbmF0ZXMgPSBudWxsLCAgLy8vXG4gICAgICAgICAgcHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzID0gbnVsbCwgIC8vL1xuICAgICAgICAgIHVzZXJJbnB1dCA9IG5ldyBVc2VySW5wdXQoaGFuZGxlcnMsIGtleUV2ZW50cywgbW91c2VFdmVudHMsIG1vdXNlQ29vcmRpbmF0ZXMsIHByZXZpb3VzTW91c2VDb29yZGluYXRlcyk7XG5cbiAgICByZXR1cm4gdXNlcklucHV0O1xuICB9XG59XG4iXX0=
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var KeyEvents = require('./keyEvents'),
    MouseEvents = require('./mouseEvents'),
    vectorMaths = require('../maths/vector');

var zero2 = vectorMaths.zero2,
    subtract2 = vectorMaths.subtract2;

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
            relativeMouseCoordinates = subtract2(this.mouseCoordinates, this.previousMouseCoordinates);
        this.handlers.forEach(function (handler) {
          return handler(relativeMouseCoordinates, mouseWheelDelta, shiftKeyDown);
        });
      }
    }
  }, {
    key: "mouseWheelHandler",
    value: function mouseWheelHandler(mouseWheelDelta, canvas) {
      var shiftKeyDown = this.keyEvents.isShiftKeyDown(),
          relativeMouseCoordinates = zero2();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXJJbnB1dC5qcyJdLCJuYW1lcyI6WyJLZXlFdmVudHMiLCJyZXF1aXJlIiwiTW91c2VFdmVudHMiLCJ2ZWN0b3JNYXRocyIsInplcm8yIiwic3VidHJhY3QyIiwiVXNlcklucHV0IiwiaGFuZGxlcnMiLCJrZXlFdmVudHMiLCJtb3VzZUV2ZW50cyIsIm1vdXNlQ29vcmRpbmF0ZXMiLCJwcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMiLCJtb3VzZURvd24iLCJjYW52YXMiLCJtb3VzZVdoZWVsRGVsdGEiLCJzaGlmdEtleURvd24iLCJpc1NoaWZ0S2V5RG93biIsInJlbGF0aXZlTW91c2VDb29yZGluYXRlcyIsImZvckVhY2giLCJoYW5kbGVyIiwidXNlcklucHV0SGFuZGxlciIsInB1c2giLCJtb3VzZU1vdmVIYW5kbGVyIiwiYmluZCIsIm1vdXNlV2hlZWxIYW5kbGVyIiwiaW5pdGlhbGlzZSIsImFkZE1vdXNlTW92ZUhhbmRsZXIiLCJhZGRNb3VzZVdoZWVsSGFuZGxlciIsImZyb21Ob3RoaW5nIiwidXNlcklucHV0IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBUyxHQUFHQyxPQUFPLENBQUMsYUFBRCxDQUF6QjtBQUFBLElBQ01DLFdBQVcsR0FBR0QsT0FBTyxDQUFDLGVBQUQsQ0FEM0I7QUFBQSxJQUVNRSxXQUFXLEdBQUdGLE9BQU8sQ0FBQyxpQkFBRCxDQUYzQjs7SUFJUUcsSyxHQUFxQkQsVyxDQUFyQkMsSztJQUFPQyxTLEdBQWNGLFcsQ0FBZEUsUzs7SUFFVEMsUztBQUNKLHFCQUFZQyxRQUFaLEVBQXNCQyxTQUF0QixFQUFpQ0MsV0FBakMsRUFBOENDLGdCQUE5QyxFQUFnRUMsd0JBQWhFLEVBQTBGO0FBQUE7O0FBQ3hGLFNBQUtKLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsU0FBS0MsU0FBTCxHQUFpQkEsU0FBakI7QUFDQSxTQUFLQyxXQUFMLEdBQW1CQSxXQUFuQjtBQUNBLFNBQUtDLGdCQUFMLEdBQXdCQSxnQkFBeEI7QUFDQSxTQUFLQyx3QkFBTCxHQUFnQ0Esd0JBQWhDO0FBQ0Q7Ozs7cUNBRWdCRCxnQixFQUFrQkUsUyxFQUFXQyxNLEVBQVE7QUFDcEQsV0FBS0Ysd0JBQUwsR0FBZ0MsS0FBS0QsZ0JBQXJDLENBRG9ELENBQ0k7O0FBRXhELFdBQUtBLGdCQUFMLEdBQXdCQSxnQkFBeEI7O0FBRUEsVUFBSSxLQUFLQyx3QkFBTCxLQUFrQyxJQUF0QyxFQUE0QztBQUMxQztBQUNEOztBQUVELFVBQUlDLFNBQUosRUFBZTtBQUNiLFlBQU1FLGVBQWUsR0FBRyxDQUF4QjtBQUFBLFlBQTRCO0FBQ3RCQyxRQUFBQSxZQUFZLEdBQUcsS0FBS1AsU0FBTCxDQUFlUSxjQUFmLEVBRHJCO0FBQUEsWUFFTUMsd0JBQXdCLEdBQUdaLFNBQVMsQ0FBQyxLQUFLSyxnQkFBTixFQUF3QixLQUFLQyx3QkFBN0IsQ0FGMUM7QUFJQSxhQUFLSixRQUFMLENBQWNXLE9BQWQsQ0FBc0IsVUFBQ0MsT0FBRDtBQUFBLGlCQUFhQSxPQUFPLENBQUNGLHdCQUFELEVBQTJCSCxlQUEzQixFQUE0Q0MsWUFBNUMsQ0FBcEI7QUFBQSxTQUF0QjtBQUNEO0FBQ0Y7OztzQ0FFaUJELGUsRUFBaUJELE0sRUFBUTtBQUN6QyxVQUFNRSxZQUFZLEdBQUcsS0FBS1AsU0FBTCxDQUFlUSxjQUFmLEVBQXJCO0FBQUEsVUFDTUMsd0JBQXdCLEdBQUdiLEtBQUssRUFEdEM7QUFHQSxXQUFLRyxRQUFMLENBQWNXLE9BQWQsQ0FBc0IsVUFBQ0MsT0FBRDtBQUFBLGVBQWFBLE9BQU8sQ0FBQ0Ysd0JBQUQsRUFBMkJILGVBQTNCLEVBQTRDQyxZQUE1QyxDQUFwQjtBQUFBLE9BQXRCO0FBQ0Q7Ozt3Q0FFbUJLLGdCLEVBQWtCO0FBQ3BDLFVBQU1ELE9BQU8sR0FBR0MsZ0JBQWhCLENBRG9DLENBQ0Y7O0FBRWxDLFdBQUtiLFFBQUwsQ0FBY2MsSUFBZCxDQUFtQkYsT0FBbkI7QUFDRDs7OytCQUVVTixNLEVBQVE7QUFDakIsVUFBTVMsZ0JBQWdCLEdBQUcsS0FBS0EsZ0JBQUwsQ0FBc0JDLElBQXRCLENBQTJCLElBQTNCLENBQXpCO0FBQUEsVUFDTUMsaUJBQWlCLEdBQUcsS0FBS0EsaUJBQUwsQ0FBdUJELElBQXZCLENBQTRCLElBQTVCLENBRDFCO0FBR0EsV0FBS2YsU0FBTCxDQUFlaUIsVUFBZixDQUEwQlosTUFBMUI7QUFFQSxXQUFLSixXQUFMLENBQWlCZ0IsVUFBakIsQ0FBNEJaLE1BQTVCO0FBRUEsV0FBS0osV0FBTCxDQUFpQmlCLG1CQUFqQixDQUFxQ0osZ0JBQXJDO0FBRUEsV0FBS2IsV0FBTCxDQUFpQmtCLG9CQUFqQixDQUFzQ0gsaUJBQXRDO0FBQ0Q7OztrQ0FFb0I7QUFDbkIsVUFBTWpCLFFBQVEsR0FBRyxFQUFqQjtBQUFBLFVBQ01DLFNBQVMsR0FBR1IsU0FBUyxDQUFDNEIsV0FBVixFQURsQjtBQUFBLFVBRU1uQixXQUFXLEdBQUdQLFdBQVcsQ0FBQzBCLFdBQVosRUFGcEI7QUFBQSxVQUdNbEIsZ0JBQWdCLEdBQUcsSUFIekI7QUFBQSxVQUdnQztBQUMxQkMsTUFBQUEsd0JBQXdCLEdBQUcsSUFKakM7QUFBQSxVQUl3QztBQUNsQ2tCLE1BQUFBLFNBQVMsR0FBRyxJQUFJdkIsU0FBSixDQUFjQyxRQUFkLEVBQXdCQyxTQUF4QixFQUFtQ0MsV0FBbkMsRUFBZ0RDLGdCQUFoRCxFQUFrRUMsd0JBQWxFLENBTGxCO0FBT0EsYUFBT2tCLFNBQVA7QUFDRDs7Ozs7O0FBR0hDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQnpCLFNBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBLZXlFdmVudHMgPSByZXF1aXJlKCcuL2tleUV2ZW50cycpLFxuICAgICAgTW91c2VFdmVudHMgPSByZXF1aXJlKCcuL21vdXNlRXZlbnRzJyksXG4gICAgICB2ZWN0b3JNYXRocyA9IHJlcXVpcmUoJy4uL21hdGhzL3ZlY3RvcicpO1xuXG5jb25zdCB7IHplcm8yLCBzdWJ0cmFjdDIgfSA9IHZlY3Rvck1hdGhzO1xuXG5jbGFzcyBVc2VySW5wdXQge1xuICBjb25zdHJ1Y3RvcihoYW5kbGVycywga2V5RXZlbnRzLCBtb3VzZUV2ZW50cywgbW91c2VDb29yZGluYXRlcywgcHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzKSB7XG4gICAgdGhpcy5oYW5kbGVycyA9IGhhbmRsZXJzO1xuICAgIHRoaXMua2V5RXZlbnRzID0ga2V5RXZlbnRzO1xuICAgIHRoaXMubW91c2VFdmVudHMgPSBtb3VzZUV2ZW50cztcbiAgICB0aGlzLm1vdXNlQ29vcmRpbmF0ZXMgPSBtb3VzZUNvb3JkaW5hdGVzO1xuICAgIHRoaXMucHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzID0gcHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzO1xuICB9XG5cbiAgbW91c2VNb3ZlSGFuZGxlcihtb3VzZUNvb3JkaW5hdGVzLCBtb3VzZURvd24sIGNhbnZhcykge1xuICAgIHRoaXMucHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzID0gdGhpcy5tb3VzZUNvb3JkaW5hdGVzOyAgLy8vXG5cbiAgICB0aGlzLm1vdXNlQ29vcmRpbmF0ZXMgPSBtb3VzZUNvb3JkaW5hdGVzO1xuXG4gICAgaWYgKHRoaXMucHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKG1vdXNlRG93bikge1xuICAgICAgY29uc3QgbW91c2VXaGVlbERlbHRhID0gMCwgIC8vL1xuICAgICAgICAgICAgc2hpZnRLZXlEb3duID0gdGhpcy5rZXlFdmVudHMuaXNTaGlmdEtleURvd24oKSxcbiAgICAgICAgICAgIHJlbGF0aXZlTW91c2VDb29yZGluYXRlcyA9IHN1YnRyYWN0Mih0aGlzLm1vdXNlQ29vcmRpbmF0ZXMsIHRoaXMucHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzKTtcblxuICAgICAgdGhpcy5oYW5kbGVycy5mb3JFYWNoKChoYW5kbGVyKSA9PiBoYW5kbGVyKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgbW91c2VXaGVlbERlbHRhLCBzaGlmdEtleURvd24pKTtcbiAgICB9XG4gIH1cblxuICBtb3VzZVdoZWVsSGFuZGxlcihtb3VzZVdoZWVsRGVsdGEsIGNhbnZhcykge1xuICAgIGNvbnN0IHNoaWZ0S2V5RG93biA9IHRoaXMua2V5RXZlbnRzLmlzU2hpZnRLZXlEb3duKCksXG4gICAgICAgICAgcmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzID0gemVybzIoKTtcblxuICAgIHRoaXMuaGFuZGxlcnMuZm9yRWFjaCgoaGFuZGxlcikgPT4gaGFuZGxlcihyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlV2hlZWxEZWx0YSwgc2hpZnRLZXlEb3duKSk7XG4gIH1cblxuICBhZGRVc2VySW5wdXRIYW5kbGVyKHVzZXJJbnB1dEhhbmRsZXIpIHtcbiAgICBjb25zdCBoYW5kbGVyID0gdXNlcklucHV0SGFuZGxlcjsgLy8vXG5cbiAgICB0aGlzLmhhbmRsZXJzLnB1c2goaGFuZGxlcik7XG4gIH1cblxuICBpbml0aWFsaXNlKGNhbnZhcykge1xuICAgIGNvbnN0IG1vdXNlTW92ZUhhbmRsZXIgPSB0aGlzLm1vdXNlTW92ZUhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICBtb3VzZVdoZWVsSGFuZGxlciA9IHRoaXMubW91c2VXaGVlbEhhbmRsZXIuYmluZCh0aGlzKTtcblxuICAgIHRoaXMua2V5RXZlbnRzLmluaXRpYWxpc2UoY2FudmFzKTtcblxuICAgIHRoaXMubW91c2VFdmVudHMuaW5pdGlhbGlzZShjYW52YXMpO1xuXG4gICAgdGhpcy5tb3VzZUV2ZW50cy5hZGRNb3VzZU1vdmVIYW5kbGVyKG1vdXNlTW92ZUhhbmRsZXIpO1xuXG4gICAgdGhpcy5tb3VzZUV2ZW50cy5hZGRNb3VzZVdoZWVsSGFuZGxlcihtb3VzZVdoZWVsSGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgaGFuZGxlcnMgPSBbXSxcbiAgICAgICAgICBrZXlFdmVudHMgPSBLZXlFdmVudHMuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBtb3VzZUV2ZW50cyA9IE1vdXNlRXZlbnRzLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgbW91c2VDb29yZGluYXRlcyA9IG51bGwsICAvLy9cbiAgICAgICAgICBwcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMgPSBudWxsLCAgLy8vXG4gICAgICAgICAgdXNlcklucHV0ID0gbmV3IFVzZXJJbnB1dChoYW5kbGVycywga2V5RXZlbnRzLCBtb3VzZUV2ZW50cywgbW91c2VDb29yZGluYXRlcywgcHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzKTtcblxuICAgIHJldHVybiB1c2VySW5wdXQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBVc2VySW5wdXQ7XG4iXX0=
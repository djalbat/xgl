"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var KeyEvents = require("./keyEvents"),
    MouseEvents = require("./mouseEvents"),
    vectorMaths = require("../maths/vector");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXJJbnB1dC5qcyJdLCJuYW1lcyI6WyJLZXlFdmVudHMiLCJyZXF1aXJlIiwiTW91c2VFdmVudHMiLCJ2ZWN0b3JNYXRocyIsInplcm8yIiwic3VidHJhY3QyIiwiVXNlcklucHV0IiwiaGFuZGxlcnMiLCJrZXlFdmVudHMiLCJtb3VzZUV2ZW50cyIsIm1vdXNlQ29vcmRpbmF0ZXMiLCJwcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMiLCJtb3VzZURvd24iLCJjYW52YXMiLCJtb3VzZVdoZWVsRGVsdGEiLCJzaGlmdEtleURvd24iLCJpc1NoaWZ0S2V5RG93biIsInJlbGF0aXZlTW91c2VDb29yZGluYXRlcyIsImZvckVhY2giLCJoYW5kbGVyIiwidXNlcklucHV0SGFuZGxlciIsInB1c2giLCJtb3VzZU1vdmVIYW5kbGVyIiwiYmluZCIsIm1vdXNlV2hlZWxIYW5kbGVyIiwiaW5pdGlhbGlzZSIsImFkZE1vdXNlTW92ZUhhbmRsZXIiLCJhZGRNb3VzZVdoZWVsSGFuZGxlciIsImZyb21Ob3RoaW5nIiwidXNlcklucHV0IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBUyxHQUFHQyxPQUFPLENBQUMsYUFBRCxDQUF6QjtBQUFBLElBQ01DLFdBQVcsR0FBR0QsT0FBTyxDQUFDLGVBQUQsQ0FEM0I7QUFBQSxJQUVNRSxXQUFXLEdBQUdGLE9BQU8sQ0FBQyxpQkFBRCxDQUYzQjs7SUFJUUcsSyxHQUFxQkQsVyxDQUFyQkMsSztJQUFPQyxTLEdBQWNGLFcsQ0FBZEUsUzs7SUFFVEMsUztBQUNKLHFCQUFZQyxRQUFaLEVBQXNCQyxTQUF0QixFQUFpQ0MsV0FBakMsRUFBOENDLGdCQUE5QyxFQUFnRUMsd0JBQWhFLEVBQTBGO0FBQUE7O0FBQ3hGLFNBQUtKLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsU0FBS0MsU0FBTCxHQUFpQkEsU0FBakI7QUFDQSxTQUFLQyxXQUFMLEdBQW1CQSxXQUFuQjtBQUNBLFNBQUtDLGdCQUFMLEdBQXdCQSxnQkFBeEI7QUFDQSxTQUFLQyx3QkFBTCxHQUFnQ0Esd0JBQWhDO0FBQ0Q7Ozs7cUNBRWdCRCxnQixFQUFrQkUsUyxFQUFXQyxNLEVBQVE7QUFDcEQsV0FBS0Ysd0JBQUwsR0FBZ0MsS0FBS0QsZ0JBQXJDLENBRG9ELENBQ0k7O0FBRXhELFdBQUtBLGdCQUFMLEdBQXdCQSxnQkFBeEI7O0FBRUEsVUFBSSxLQUFLQyx3QkFBTCxLQUFrQyxJQUF0QyxFQUE0QztBQUMxQztBQUNEOztBQUVELFVBQUlDLFNBQUosRUFBZTtBQUNiLFlBQU1FLGVBQWUsR0FBRyxDQUF4QjtBQUFBLFlBQTRCO0FBQ3RCQyxRQUFBQSxZQUFZLEdBQUcsS0FBS1AsU0FBTCxDQUFlUSxjQUFmLEVBRHJCO0FBQUEsWUFFTUMsd0JBQXdCLEdBQUdaLFNBQVMsQ0FBQyxLQUFLSyxnQkFBTixFQUF3QixLQUFLQyx3QkFBN0IsQ0FGMUM7QUFJQSxhQUFLSixRQUFMLENBQWNXLE9BQWQsQ0FBc0IsVUFBQ0MsT0FBRDtBQUFBLGlCQUFhQSxPQUFPLENBQUNGLHdCQUFELEVBQTJCSCxlQUEzQixFQUE0Q0MsWUFBNUMsQ0FBcEI7QUFBQSxTQUF0QjtBQUNEO0FBQ0Y7OztzQ0FFaUJELGUsRUFBaUJELE0sRUFBUTtBQUN6QyxVQUFNRSxZQUFZLEdBQUcsS0FBS1AsU0FBTCxDQUFlUSxjQUFmLEVBQXJCO0FBQUEsVUFDTUMsd0JBQXdCLEdBQUdiLEtBQUssRUFEdEM7QUFHQSxXQUFLRyxRQUFMLENBQWNXLE9BQWQsQ0FBc0IsVUFBQ0MsT0FBRDtBQUFBLGVBQWFBLE9BQU8sQ0FBQ0Ysd0JBQUQsRUFBMkJILGVBQTNCLEVBQTRDQyxZQUE1QyxDQUFwQjtBQUFBLE9BQXRCO0FBQ0Q7Ozt3Q0FFbUJLLGdCLEVBQWtCO0FBQ3BDLFVBQU1ELE9BQU8sR0FBR0MsZ0JBQWhCLENBRG9DLENBQ0Y7O0FBRWxDLFdBQUtiLFFBQUwsQ0FBY2MsSUFBZCxDQUFtQkYsT0FBbkI7QUFDRDs7OytCQUVVTixNLEVBQVE7QUFDakIsVUFBTVMsZ0JBQWdCLEdBQUcsS0FBS0EsZ0JBQUwsQ0FBc0JDLElBQXRCLENBQTJCLElBQTNCLENBQXpCO0FBQUEsVUFDTUMsaUJBQWlCLEdBQUcsS0FBS0EsaUJBQUwsQ0FBdUJELElBQXZCLENBQTRCLElBQTVCLENBRDFCO0FBR0EsV0FBS2YsU0FBTCxDQUFlaUIsVUFBZixDQUEwQlosTUFBMUI7QUFFQSxXQUFLSixXQUFMLENBQWlCZ0IsVUFBakIsQ0FBNEJaLE1BQTVCO0FBRUEsV0FBS0osV0FBTCxDQUFpQmlCLG1CQUFqQixDQUFxQ0osZ0JBQXJDO0FBRUEsV0FBS2IsV0FBTCxDQUFpQmtCLG9CQUFqQixDQUFzQ0gsaUJBQXRDO0FBQ0Q7OztrQ0FFb0I7QUFDbkIsVUFBTWpCLFFBQVEsR0FBRyxFQUFqQjtBQUFBLFVBQ01DLFNBQVMsR0FBR1IsU0FBUyxDQUFDNEIsV0FBVixFQURsQjtBQUFBLFVBRU1uQixXQUFXLEdBQUdQLFdBQVcsQ0FBQzBCLFdBQVosRUFGcEI7QUFBQSxVQUdNbEIsZ0JBQWdCLEdBQUcsSUFIekI7QUFBQSxVQUdnQztBQUMxQkMsTUFBQUEsd0JBQXdCLEdBQUcsSUFKakM7QUFBQSxVQUl3QztBQUNsQ2tCLE1BQUFBLFNBQVMsR0FBRyxJQUFJdkIsU0FBSixDQUFjQyxRQUFkLEVBQXdCQyxTQUF4QixFQUFtQ0MsV0FBbkMsRUFBZ0RDLGdCQUFoRCxFQUFrRUMsd0JBQWxFLENBTGxCO0FBT0EsYUFBT2tCLFNBQVA7QUFDRDs7Ozs7O0FBR0hDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQnpCLFNBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IEtleUV2ZW50cyA9IHJlcXVpcmUoXCIuL2tleUV2ZW50c1wiKSxcbiAgICAgIE1vdXNlRXZlbnRzID0gcmVxdWlyZShcIi4vbW91c2VFdmVudHNcIiksXG4gICAgICB2ZWN0b3JNYXRocyA9IHJlcXVpcmUoXCIuLi9tYXRocy92ZWN0b3JcIik7XG5cbmNvbnN0IHsgemVybzIsIHN1YnRyYWN0MiB9ID0gdmVjdG9yTWF0aHM7XG5cbmNsYXNzIFVzZXJJbnB1dCB7XG4gIGNvbnN0cnVjdG9yKGhhbmRsZXJzLCBrZXlFdmVudHMsIG1vdXNlRXZlbnRzLCBtb3VzZUNvb3JkaW5hdGVzLCBwcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMpIHtcbiAgICB0aGlzLmhhbmRsZXJzID0gaGFuZGxlcnM7XG4gICAgdGhpcy5rZXlFdmVudHMgPSBrZXlFdmVudHM7XG4gICAgdGhpcy5tb3VzZUV2ZW50cyA9IG1vdXNlRXZlbnRzO1xuICAgIHRoaXMubW91c2VDb29yZGluYXRlcyA9IG1vdXNlQ29vcmRpbmF0ZXM7XG4gICAgdGhpcy5wcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMgPSBwcmV2aW91c01vdXNlQ29vcmRpbmF0ZXM7XG4gIH1cblxuICBtb3VzZU1vdmVIYW5kbGVyKG1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlRG93biwgY2FudmFzKSB7XG4gICAgdGhpcy5wcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMgPSB0aGlzLm1vdXNlQ29vcmRpbmF0ZXM7ICAvLy9cblxuICAgIHRoaXMubW91c2VDb29yZGluYXRlcyA9IG1vdXNlQ29vcmRpbmF0ZXM7XG5cbiAgICBpZiAodGhpcy5wcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAobW91c2VEb3duKSB7XG4gICAgICBjb25zdCBtb3VzZVdoZWVsRGVsdGEgPSAwLCAgLy8vXG4gICAgICAgICAgICBzaGlmdEtleURvd24gPSB0aGlzLmtleUV2ZW50cy5pc1NoaWZ0S2V5RG93bigpLFxuICAgICAgICAgICAgcmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzID0gc3VidHJhY3QyKHRoaXMubW91c2VDb29yZGluYXRlcywgdGhpcy5wcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMpO1xuXG4gICAgICB0aGlzLmhhbmRsZXJzLmZvckVhY2goKGhhbmRsZXIpID0+IGhhbmRsZXIocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCBtb3VzZVdoZWVsRGVsdGEsIHNoaWZ0S2V5RG93bikpO1xuICAgIH1cbiAgfVxuXG4gIG1vdXNlV2hlZWxIYW5kbGVyKG1vdXNlV2hlZWxEZWx0YSwgY2FudmFzKSB7XG4gICAgY29uc3Qgc2hpZnRLZXlEb3duID0gdGhpcy5rZXlFdmVudHMuaXNTaGlmdEtleURvd24oKSxcbiAgICAgICAgICByZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMgPSB6ZXJvMigpO1xuXG4gICAgdGhpcy5oYW5kbGVycy5mb3JFYWNoKChoYW5kbGVyKSA9PiBoYW5kbGVyKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgbW91c2VXaGVlbERlbHRhLCBzaGlmdEtleURvd24pKTtcbiAgfVxuXG4gIGFkZFVzZXJJbnB1dEhhbmRsZXIodXNlcklucHV0SGFuZGxlcikge1xuICAgIGNvbnN0IGhhbmRsZXIgPSB1c2VySW5wdXRIYW5kbGVyOyAvLy9cblxuICAgIHRoaXMuaGFuZGxlcnMucHVzaChoYW5kbGVyKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoY2FudmFzKSB7XG4gICAgY29uc3QgbW91c2VNb3ZlSGFuZGxlciA9IHRoaXMubW91c2VNb3ZlSGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIG1vdXNlV2hlZWxIYW5kbGVyID0gdGhpcy5tb3VzZVdoZWVsSGFuZGxlci5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5rZXlFdmVudHMuaW5pdGlhbGlzZShjYW52YXMpO1xuXG4gICAgdGhpcy5tb3VzZUV2ZW50cy5pbml0aWFsaXNlKGNhbnZhcyk7XG5cbiAgICB0aGlzLm1vdXNlRXZlbnRzLmFkZE1vdXNlTW92ZUhhbmRsZXIobW91c2VNb3ZlSGFuZGxlcik7XG5cbiAgICB0aGlzLm1vdXNlRXZlbnRzLmFkZE1vdXNlV2hlZWxIYW5kbGVyKG1vdXNlV2hlZWxIYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBoYW5kbGVycyA9IFtdLFxuICAgICAgICAgIGtleUV2ZW50cyA9IEtleUV2ZW50cy5mcm9tTm90aGluZygpLFxuICAgICAgICAgIG1vdXNlRXZlbnRzID0gTW91c2VFdmVudHMuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBtb3VzZUNvb3JkaW5hdGVzID0gbnVsbCwgIC8vL1xuICAgICAgICAgIHByZXZpb3VzTW91c2VDb29yZGluYXRlcyA9IG51bGwsICAvLy9cbiAgICAgICAgICB1c2VySW5wdXQgPSBuZXcgVXNlcklucHV0KGhhbmRsZXJzLCBrZXlFdmVudHMsIG1vdXNlRXZlbnRzLCBtb3VzZUNvb3JkaW5hdGVzLCBwcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMpO1xuXG4gICAgcmV0dXJuIHVzZXJJbnB1dDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFVzZXJJbnB1dDtcbiJdfQ==
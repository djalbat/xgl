"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var constants = require("../constants");

var SHIFT_KEY_CODE = constants.SHIFT_KEY_CODE;

var KeyEvents = /*#__PURE__*/function () {
  function KeyEvents(handlers, shiftKeyDown) {
    _classCallCheck(this, KeyEvents);

    this.handlers = handlers;
    this.shiftKeyDown = shiftKeyDown;
  }

  _createClass(KeyEvents, [{
    key: "isShiftKeyDown",
    value: function isShiftKeyDown() {
      return this.shiftKeyDown;
    }
  }, {
    key: "keyUpEventListener",
    value: function keyUpEventListener(event) {
      var _this = this;

      var keyCode = event.keyCode;

      if (keyCode === SHIFT_KEY_CODE) {
        this.shiftKeyDown = false;
        this.handlers.forEach(function (handler) {
          return handler(_this.shiftKeyDown);
        });
      }
    }
  }, {
    key: "keyDownEventListener",
    value: function keyDownEventListener(event) {
      var _this2 = this;

      var keyCode = event.keyCode;

      if (keyCode === SHIFT_KEY_CODE) {
        this.shiftKeyDown = true;
        this.handlers.forEach(function (handler) {
          return handler(_this2.shiftKeyDown);
        });
      }
    }
  }, {
    key: "addShiftKeyHandler",
    value: function addShiftKeyHandler(shiftKeyHandler) {
      var handler = shiftKeyHandler; ///

      this.handlers.push(handler);
    }
  }, {
    key: "initialise",
    value: function initialise(canvas) {
      var documentDOMElement = document.documentElement,
          ///
      keyUpEventListener = this.keyUpEventListener.bind(this),
          keyDownEventListener = this.keyDownEventListener.bind(this);
      documentDOMElement.addEventListener("keyup", keyUpEventListener);
      documentDOMElement.addEventListener("keydown", keyDownEventListener);
    }
  }], [{
    key: "fromNothing",
    value: function fromNothing() {
      var handlers = [],
          shiftKeyDown = false,
          ///
      keyEvents = new KeyEvents(handlers, shiftKeyDown);
      return keyEvents;
    }
  }]);

  return KeyEvents;
}();

module.exports = KeyEvents;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImtleUV2ZW50cy5qcyJdLCJuYW1lcyI6WyJjb25zdGFudHMiLCJyZXF1aXJlIiwiU0hJRlRfS0VZX0NPREUiLCJLZXlFdmVudHMiLCJoYW5kbGVycyIsInNoaWZ0S2V5RG93biIsImV2ZW50Iiwia2V5Q29kZSIsImZvckVhY2giLCJoYW5kbGVyIiwic2hpZnRLZXlIYW5kbGVyIiwicHVzaCIsImNhbnZhcyIsImRvY3VtZW50RE9NRWxlbWVudCIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50Iiwia2V5VXBFdmVudExpc3RlbmVyIiwiYmluZCIsImtleURvd25FdmVudExpc3RlbmVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsImtleUV2ZW50cyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQUVBLElBQU1BLFNBQVMsR0FBR0MsT0FBTyxDQUFDLGNBQUQsQ0FBekI7O0lBRVFDLGMsR0FBbUJGLFMsQ0FBbkJFLGM7O0lBRUZDLFM7QUFDSixxQkFBWUMsUUFBWixFQUFzQkMsWUFBdEIsRUFBb0M7QUFBQTs7QUFDbEMsU0FBS0QsUUFBTCxHQUFnQkEsUUFBaEI7QUFDQSxTQUFLQyxZQUFMLEdBQW9CQSxZQUFwQjtBQUNEOzs7O3FDQUVnQjtBQUNmLGFBQU8sS0FBS0EsWUFBWjtBQUNEOzs7dUNBRWtCQyxLLEVBQU87QUFBQTs7QUFBQSxVQUNoQkMsT0FEZ0IsR0FDSkQsS0FESSxDQUNoQkMsT0FEZ0I7O0FBR3hCLFVBQUlBLE9BQU8sS0FBS0wsY0FBaEIsRUFBZ0M7QUFDOUIsYUFBS0csWUFBTCxHQUFvQixLQUFwQjtBQUVBLGFBQUtELFFBQUwsQ0FBY0ksT0FBZCxDQUFzQixVQUFDQyxPQUFEO0FBQUEsaUJBQWFBLE9BQU8sQ0FBQyxLQUFJLENBQUNKLFlBQU4sQ0FBcEI7QUFBQSxTQUF0QjtBQUNEO0FBQ0Y7Ozt5Q0FFb0JDLEssRUFBTztBQUFBOztBQUFBLFVBQ2xCQyxPQURrQixHQUNORCxLQURNLENBQ2xCQyxPQURrQjs7QUFHMUIsVUFBSUEsT0FBTyxLQUFLTCxjQUFoQixFQUFnQztBQUM5QixhQUFLRyxZQUFMLEdBQW9CLElBQXBCO0FBRUEsYUFBS0QsUUFBTCxDQUFjSSxPQUFkLENBQXNCLFVBQUNDLE9BQUQ7QUFBQSxpQkFBYUEsT0FBTyxDQUFDLE1BQUksQ0FBQ0osWUFBTixDQUFwQjtBQUFBLFNBQXRCO0FBQ0Q7QUFDRjs7O3VDQUVrQkssZSxFQUFpQjtBQUNsQyxVQUFNRCxPQUFPLEdBQUdDLGVBQWhCLENBRGtDLENBQ0E7O0FBRWxDLFdBQUtOLFFBQUwsQ0FBY08sSUFBZCxDQUFtQkYsT0FBbkI7QUFDRDs7OytCQUVVRyxNLEVBQVE7QUFDakIsVUFBTUMsa0JBQWtCLEdBQUdDLFFBQVEsQ0FBQ0MsZUFBcEM7QUFBQSxVQUFzRDtBQUNoREMsTUFBQUEsa0JBQWtCLEdBQUcsS0FBS0Esa0JBQUwsQ0FBd0JDLElBQXhCLENBQTZCLElBQTdCLENBRDNCO0FBQUEsVUFFTUMsb0JBQW9CLEdBQUcsS0FBS0Esb0JBQUwsQ0FBMEJELElBQTFCLENBQStCLElBQS9CLENBRjdCO0FBSUFKLE1BQUFBLGtCQUFrQixDQUFDTSxnQkFBbkIsQ0FBb0MsT0FBcEMsRUFBNkNILGtCQUE3QztBQUVBSCxNQUFBQSxrQkFBa0IsQ0FBQ00sZ0JBQW5CLENBQW9DLFNBQXBDLEVBQStDRCxvQkFBL0M7QUFDRDs7O2tDQUVvQjtBQUNuQixVQUFNZCxRQUFRLEdBQUcsRUFBakI7QUFBQSxVQUNNQyxZQUFZLEdBQUcsS0FEckI7QUFBQSxVQUM2QjtBQUN2QmUsTUFBQUEsU0FBUyxHQUFHLElBQUlqQixTQUFKLENBQWNDLFFBQWQsRUFBd0JDLFlBQXhCLENBRmxCO0FBSUEsYUFBT2UsU0FBUDtBQUNEOzs7Ozs7QUFHSEMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCbkIsU0FBakIiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgY29uc3RhbnRzID0gcmVxdWlyZShcIi4uL2NvbnN0YW50c1wiKTtcblxuY29uc3QgeyBTSElGVF9LRVlfQ09ERSB9ID0gY29uc3RhbnRzO1xuXG5jbGFzcyBLZXlFdmVudHMge1xuICBjb25zdHJ1Y3RvcihoYW5kbGVycywgc2hpZnRLZXlEb3duKSB7XG4gICAgdGhpcy5oYW5kbGVycyA9IGhhbmRsZXJzO1xuICAgIHRoaXMuc2hpZnRLZXlEb3duID0gc2hpZnRLZXlEb3duO1xuICB9XG5cbiAgaXNTaGlmdEtleURvd24oKSB7XG4gICAgcmV0dXJuIHRoaXMuc2hpZnRLZXlEb3duO1xuICB9XG5cbiAga2V5VXBFdmVudExpc3RlbmVyKGV2ZW50KSB7XG4gICAgY29uc3QgeyBrZXlDb2RlIH0gPSBldmVudDtcblxuICAgIGlmIChrZXlDb2RlID09PSBTSElGVF9LRVlfQ09ERSkge1xuICAgICAgdGhpcy5zaGlmdEtleURvd24gPSBmYWxzZTtcblxuICAgICAgdGhpcy5oYW5kbGVycy5mb3JFYWNoKChoYW5kbGVyKSA9PiBoYW5kbGVyKHRoaXMuc2hpZnRLZXlEb3duKSk7XG4gICAgfVxuICB9XG5cbiAga2V5RG93bkV2ZW50TGlzdGVuZXIoZXZlbnQpIHtcbiAgICBjb25zdCB7IGtleUNvZGUgfSA9IGV2ZW50O1xuXG4gICAgaWYgKGtleUNvZGUgPT09IFNISUZUX0tFWV9DT0RFKSB7XG4gICAgICB0aGlzLnNoaWZ0S2V5RG93biA9IHRydWU7XG5cbiAgICAgIHRoaXMuaGFuZGxlcnMuZm9yRWFjaCgoaGFuZGxlcikgPT4gaGFuZGxlcih0aGlzLnNoaWZ0S2V5RG93bikpO1xuICAgIH1cbiAgfVxuXG4gIGFkZFNoaWZ0S2V5SGFuZGxlcihzaGlmdEtleUhhbmRsZXIpIHtcbiAgICBjb25zdCBoYW5kbGVyID0gc2hpZnRLZXlIYW5kbGVyOyAgLy8vXG5cbiAgICB0aGlzLmhhbmRsZXJzLnB1c2goaGFuZGxlcik7XG4gIH1cblxuICBpbml0aWFsaXNlKGNhbnZhcykge1xuICAgIGNvbnN0IGRvY3VtZW50RE9NRWxlbWVudCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgIC8vL1xuICAgICAgICAgIGtleVVwRXZlbnRMaXN0ZW5lciA9IHRoaXMua2V5VXBFdmVudExpc3RlbmVyLmJpbmQodGhpcyksXG4gICAgICAgICAga2V5RG93bkV2ZW50TGlzdGVuZXIgPSB0aGlzLmtleURvd25FdmVudExpc3RlbmVyLmJpbmQodGhpcyk7XG5cbiAgICBkb2N1bWVudERPTUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGtleVVwRXZlbnRMaXN0ZW5lcik7XG5cbiAgICBkb2N1bWVudERPTUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwga2V5RG93bkV2ZW50TGlzdGVuZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IGhhbmRsZXJzID0gW10sXG4gICAgICAgICAgc2hpZnRLZXlEb3duID0gZmFsc2UsICAvLy9cbiAgICAgICAgICBrZXlFdmVudHMgPSBuZXcgS2V5RXZlbnRzKGhhbmRsZXJzLCBzaGlmdEtleURvd24pO1xuXG4gICAgcmV0dXJuIGtleUV2ZW50cztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEtleUV2ZW50cztcbiJdfQ==
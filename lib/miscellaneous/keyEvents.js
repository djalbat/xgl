"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _constants = require("../constants");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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

      if (keyCode === _constants.SHIFT_KEY_CODE) {
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

      if (keyCode === _constants.SHIFT_KEY_CODE) {
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

exports["default"] = KeyEvents;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImtleUV2ZW50cy5qcyJdLCJuYW1lcyI6WyJLZXlFdmVudHMiLCJoYW5kbGVycyIsInNoaWZ0S2V5RG93biIsImV2ZW50Iiwia2V5Q29kZSIsIlNISUZUX0tFWV9DT0RFIiwiZm9yRWFjaCIsImhhbmRsZXIiLCJzaGlmdEtleUhhbmRsZXIiLCJwdXNoIiwiY2FudmFzIiwiZG9jdW1lbnRET01FbGVtZW50IiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJrZXlVcEV2ZW50TGlzdGVuZXIiLCJiaW5kIiwia2V5RG93bkV2ZW50TGlzdGVuZXIiLCJhZGRFdmVudExpc3RlbmVyIiwia2V5RXZlbnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOzs7Ozs7OztJQUVxQkEsUztBQUNuQixxQkFBWUMsUUFBWixFQUFzQkMsWUFBdEIsRUFBb0M7QUFBQTs7QUFDbEMsU0FBS0QsUUFBTCxHQUFnQkEsUUFBaEI7QUFDQSxTQUFLQyxZQUFMLEdBQW9CQSxZQUFwQjtBQUNEOzs7O3FDQUVnQjtBQUNmLGFBQU8sS0FBS0EsWUFBWjtBQUNEOzs7dUNBRWtCQyxLLEVBQU87QUFBQTs7QUFBQSxVQUNoQkMsT0FEZ0IsR0FDSkQsS0FESSxDQUNoQkMsT0FEZ0I7O0FBR3hCLFVBQUlBLE9BQU8sS0FBS0MseUJBQWhCLEVBQWdDO0FBQzlCLGFBQUtILFlBQUwsR0FBb0IsS0FBcEI7QUFFQSxhQUFLRCxRQUFMLENBQWNLLE9BQWQsQ0FBc0IsVUFBQ0MsT0FBRDtBQUFBLGlCQUFhQSxPQUFPLENBQUMsS0FBSSxDQUFDTCxZQUFOLENBQXBCO0FBQUEsU0FBdEI7QUFDRDtBQUNGOzs7eUNBRW9CQyxLLEVBQU87QUFBQTs7QUFBQSxVQUNsQkMsT0FEa0IsR0FDTkQsS0FETSxDQUNsQkMsT0FEa0I7O0FBRzFCLFVBQUlBLE9BQU8sS0FBS0MseUJBQWhCLEVBQWdDO0FBQzlCLGFBQUtILFlBQUwsR0FBb0IsSUFBcEI7QUFFQSxhQUFLRCxRQUFMLENBQWNLLE9BQWQsQ0FBc0IsVUFBQ0MsT0FBRDtBQUFBLGlCQUFhQSxPQUFPLENBQUMsTUFBSSxDQUFDTCxZQUFOLENBQXBCO0FBQUEsU0FBdEI7QUFDRDtBQUNGOzs7dUNBRWtCTSxlLEVBQWlCO0FBQ2xDLFVBQU1ELE9BQU8sR0FBR0MsZUFBaEIsQ0FEa0MsQ0FDQTs7QUFFbEMsV0FBS1AsUUFBTCxDQUFjUSxJQUFkLENBQW1CRixPQUFuQjtBQUNEOzs7K0JBRVVHLE0sRUFBUTtBQUNqQixVQUFNQyxrQkFBa0IsR0FBR0MsUUFBUSxDQUFDQyxlQUFwQztBQUFBLFVBQXNEO0FBQ2hEQyxNQUFBQSxrQkFBa0IsR0FBRyxLQUFLQSxrQkFBTCxDQUF3QkMsSUFBeEIsQ0FBNkIsSUFBN0IsQ0FEM0I7QUFBQSxVQUVNQyxvQkFBb0IsR0FBRyxLQUFLQSxvQkFBTCxDQUEwQkQsSUFBMUIsQ0FBK0IsSUFBL0IsQ0FGN0I7QUFJQUosTUFBQUEsa0JBQWtCLENBQUNNLGdCQUFuQixDQUFvQyxPQUFwQyxFQUE2Q0gsa0JBQTdDO0FBRUFILE1BQUFBLGtCQUFrQixDQUFDTSxnQkFBbkIsQ0FBb0MsU0FBcEMsRUFBK0NELG9CQUEvQztBQUNEOzs7a0NBRW9CO0FBQ25CLFVBQU1mLFFBQVEsR0FBRyxFQUFqQjtBQUFBLFVBQ01DLFlBQVksR0FBRyxLQURyQjtBQUFBLFVBQzZCO0FBQ3ZCZ0IsTUFBQUEsU0FBUyxHQUFHLElBQUlsQixTQUFKLENBQWNDLFFBQWQsRUFBd0JDLFlBQXhCLENBRmxCO0FBSUEsYUFBT2dCLFNBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBTSElGVF9LRVlfQ09ERSB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgS2V5RXZlbnRzIHtcbiAgY29uc3RydWN0b3IoaGFuZGxlcnMsIHNoaWZ0S2V5RG93bikge1xuICAgIHRoaXMuaGFuZGxlcnMgPSBoYW5kbGVycztcbiAgICB0aGlzLnNoaWZ0S2V5RG93biA9IHNoaWZ0S2V5RG93bjtcbiAgfVxuXG4gIGlzU2hpZnRLZXlEb3duKCkge1xuICAgIHJldHVybiB0aGlzLnNoaWZ0S2V5RG93bjtcbiAgfVxuXG4gIGtleVVwRXZlbnRMaXN0ZW5lcihldmVudCkge1xuICAgIGNvbnN0IHsga2V5Q29kZSB9ID0gZXZlbnQ7XG5cbiAgICBpZiAoa2V5Q29kZSA9PT0gU0hJRlRfS0VZX0NPREUpIHtcbiAgICAgIHRoaXMuc2hpZnRLZXlEb3duID0gZmFsc2U7XG5cbiAgICAgIHRoaXMuaGFuZGxlcnMuZm9yRWFjaCgoaGFuZGxlcikgPT4gaGFuZGxlcih0aGlzLnNoaWZ0S2V5RG93bikpO1xuICAgIH1cbiAgfVxuXG4gIGtleURvd25FdmVudExpc3RlbmVyKGV2ZW50KSB7XG4gICAgY29uc3QgeyBrZXlDb2RlIH0gPSBldmVudDtcblxuICAgIGlmIChrZXlDb2RlID09PSBTSElGVF9LRVlfQ09ERSkge1xuICAgICAgdGhpcy5zaGlmdEtleURvd24gPSB0cnVlO1xuXG4gICAgICB0aGlzLmhhbmRsZXJzLmZvckVhY2goKGhhbmRsZXIpID0+IGhhbmRsZXIodGhpcy5zaGlmdEtleURvd24pKTtcbiAgICB9XG4gIH1cblxuICBhZGRTaGlmdEtleUhhbmRsZXIoc2hpZnRLZXlIYW5kbGVyKSB7XG4gICAgY29uc3QgaGFuZGxlciA9IHNoaWZ0S2V5SGFuZGxlcjsgIC8vL1xuXG4gICAgdGhpcy5oYW5kbGVycy5wdXNoKGhhbmRsZXIpO1xuICB9XG5cbiAgaW5pdGlhbGlzZShjYW52YXMpIHtcbiAgICBjb25zdCBkb2N1bWVudERPTUVsZW1lbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsICAvLy9cbiAgICAgICAgICBrZXlVcEV2ZW50TGlzdGVuZXIgPSB0aGlzLmtleVVwRXZlbnRMaXN0ZW5lci5iaW5kKHRoaXMpLFxuICAgICAgICAgIGtleURvd25FdmVudExpc3RlbmVyID0gdGhpcy5rZXlEb3duRXZlbnRMaXN0ZW5lci5iaW5kKHRoaXMpO1xuXG4gICAgZG9jdW1lbnRET01FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBrZXlVcEV2ZW50TGlzdGVuZXIpO1xuXG4gICAgZG9jdW1lbnRET01FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGtleURvd25FdmVudExpc3RlbmVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBoYW5kbGVycyA9IFtdLFxuICAgICAgICAgIHNoaWZ0S2V5RG93biA9IGZhbHNlLCAgLy8vXG4gICAgICAgICAga2V5RXZlbnRzID0gbmV3IEtleUV2ZW50cyhoYW5kbGVycywgc2hpZnRLZXlEb3duKTtcblxuICAgIHJldHVybiBrZXlFdmVudHM7XG4gIH1cbn1cbiJdfQ==
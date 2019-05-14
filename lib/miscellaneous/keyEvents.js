'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var constants = require('../constants');

var CTRL_KEY_CODE = constants.CTRL_KEY_CODE,
    SHIFT_KEY_CODE = constants.SHIFT_KEY_CODE;

var KeyEvents = function () {
  function KeyEvents(handlersMap, ctrlKeyDown, shiftKeyDown) {
    _classCallCheck(this, KeyEvents);

    this.handlersMap = handlersMap;
    this.ctrlKeyDown = ctrlKeyDown;
    this.shiftKeyDown = shiftKeyDown;
  }

  _createClass(KeyEvents, [{
    key: 'isCtrlKeyDown',
    value: function isCtrlKeyDown() {
      return this.ctrlKeyDown;
    }
  }, {
    key: 'isShiftKeyDown',
    value: function isShiftKeyDown() {
      return this.shiftKeyDown;
    }
  }, {
    key: 'keyUpEventListener',
    value: function keyUpEventListener(event) {
      var keyCode = event.keyCode;

      switch (keyCode) {
        case CTRL_KEY_CODE:
          this.ctrlKeyUpEventListener();
          break;

        case SHIFT_KEY_CODE:
          this.shiftKeyUpEventListener();
          break;
      }
    }
  }, {
    key: 'keyDownEventListener',
    value: function keyDownEventListener(event) {
      var keyCode = event.keyCode;

      switch (keyCode) {
        case CTRL_KEY_CODE:
          this.ctrlKeyDownEventListener();
          break;

        case SHIFT_KEY_CODE:
          this.shiftKeyDownEventListener();
          break;
      }
    }
  }, {
    key: 'ctrlKeyUpEventListener',
    value: function ctrlKeyUpEventListener() {
      var _this = this;

      this.ctrlKeyDown = false;

      var ctrlKeyHandlers = this.handlersMap[CTRL_KEY_CODE];

      ctrlKeyHandlers.forEach(function (ctrlKeyHandler) {
        return ctrlKeyHandler(_this.ctrlKeyDown);
      });
    }
  }, {
    key: 'shiftKeyUpEventListener',
    value: function shiftKeyUpEventListener() {
      var _this2 = this;

      this.shiftKeyDown = false;

      var shiftKeyHandlers = this.handlersMap[SHIFT_KEY_CODE];

      shiftKeyHandlers.forEach(function (shiftKeyHandler) {
        return shiftKeyHandler(_this2.shiftKeyDown);
      });
    }
  }, {
    key: 'ctrlKeyDownEventListener',
    value: function ctrlKeyDownEventListener() {
      var _this3 = this;

      this.ctrlKeyDown = true;

      var ctrlKeyHandlers = this.handlersMap[CTRL_KEY_CODE];

      ctrlKeyHandlers.forEach(function (ctrlKeyHandler) {
        return ctrlKeyHandler(_this3.ctrlKeyDown);
      });
    }
  }, {
    key: 'shiftKeyDownEventListener',
    value: function shiftKeyDownEventListener() {
      var _this4 = this;

      this.shiftKeyDown = true;

      var shiftKeyHandlers = this.handlersMap[SHIFT_KEY_CODE];

      shiftKeyHandlers.forEach(function (shiftKeyHandler) {
        return shiftKeyHandler(_this4.shiftKeyDown);
      });
    }
  }, {
    key: 'addCtrlKeyHandler',
    value: function addCtrlKeyHandler(ctrlKeyHandler) {
      var ctrlKeyHandlers = this.handlersMap[CTRL_KEY_CODE];

      ctrlKeyHandlers.push(ctrlKeyHandler);
    }
  }, {
    key: 'addShiftKeyHandler',
    value: function addShiftKeyHandler(shiftKeyHandler) {
      var shiftKeyHandlers = this.handlersMap[SHIFT_KEY_CODE];

      shiftKeyHandlers.push(shiftKeyHandler);
    }
  }], [{
    key: 'fromNothing',
    value: function fromNothing(canvas) {
      var handlersMap = {};

      handlersMap[CTRL_KEY_CODE] = [];
      handlersMap[SHIFT_KEY_CODE] = [];

      var ctrlKeyDown = false,
          ///
      shiftKeyDown = false,
          ///
      keyEvents = new KeyEvents(handlersMap, ctrlKeyDown, shiftKeyDown),
          keyUpEventListener = keyEvents.keyUpEventListener.bind(keyEvents),
          keyDownEventListener = keyEvents.keyDownEventListener.bind(keyEvents),
          documentDOMElement = document.documentElement; ///

      documentDOMElement.addEventListener('keyup', keyUpEventListener);
      documentDOMElement.addEventListener('keydown', keyDownEventListener);

      return keyEvents;
    }
  }]);

  return KeyEvents;
}();

module.exports = KeyEvents;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9taXNjZWxsYW5lb3VzL2tleUV2ZW50cy5qcyJdLCJuYW1lcyI6WyJjb25zdGFudHMiLCJyZXF1aXJlIiwiQ1RSTF9LRVlfQ09ERSIsIlNISUZUX0tFWV9DT0RFIiwiS2V5RXZlbnRzIiwiaGFuZGxlcnNNYXAiLCJjdHJsS2V5RG93biIsInNoaWZ0S2V5RG93biIsImV2ZW50Iiwia2V5Q29kZSIsImN0cmxLZXlVcEV2ZW50TGlzdGVuZXIiLCJzaGlmdEtleVVwRXZlbnRMaXN0ZW5lciIsImN0cmxLZXlEb3duRXZlbnRMaXN0ZW5lciIsInNoaWZ0S2V5RG93bkV2ZW50TGlzdGVuZXIiLCJjdHJsS2V5SGFuZGxlcnMiLCJmb3JFYWNoIiwiY3RybEtleUhhbmRsZXIiLCJzaGlmdEtleUhhbmRsZXJzIiwic2hpZnRLZXlIYW5kbGVyIiwicHVzaCIsImNhbnZhcyIsImtleUV2ZW50cyIsImtleVVwRXZlbnRMaXN0ZW5lciIsImJpbmQiLCJrZXlEb3duRXZlbnRMaXN0ZW5lciIsImRvY3VtZW50RE9NRWxlbWVudCIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxZQUFZQyxRQUFRLGNBQVIsQ0FBbEI7O0lBRVFDLGEsR0FBa0NGLFMsQ0FBbENFLGE7SUFBZUMsYyxHQUFtQkgsUyxDQUFuQkcsYzs7SUFFakJDLFM7QUFDSixxQkFBWUMsV0FBWixFQUF5QkMsV0FBekIsRUFBc0NDLFlBQXRDLEVBQW9EO0FBQUE7O0FBQ2xELFNBQUtGLFdBQUwsR0FBbUJBLFdBQW5CO0FBQ0EsU0FBS0MsV0FBTCxHQUFtQkEsV0FBbkI7QUFDQSxTQUFLQyxZQUFMLEdBQW9CQSxZQUFwQjtBQUNEOzs7O29DQUVlO0FBQ2QsYUFBTyxLQUFLRCxXQUFaO0FBQ0Q7OztxQ0FFZ0I7QUFDZixhQUFPLEtBQUtDLFlBQVo7QUFDRDs7O3VDQUVr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ZSI6ImtleUV2ZW50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgY29uc3RhbnRzID0gcmVxdWlyZSgnLi4vY29uc3RhbnRzJyk7XG5cbmNvbnN0IHsgQ1RSTF9LRVlfQ09ERSwgU0hJRlRfS0VZX0NPREUgfSA9IGNvbnN0YW50cztcblxuY2xhc3MgS2V5RXZlbnRzIHtcbiAgY29uc3RydWN0b3IoaGFuZGxlcnNNYXAsIGN0cmxLZXlEb3duLCBzaGlmdEtleURvd24pIHtcbiAgICB0aGlzLmhhbmRsZXJzTWFwID0gaGFuZGxlcnNNYXA7XG4gICAgdGhpcy5jdHJsS2V5RG93biA9IGN0cmxLZXlEb3duO1xuICAgIHRoaXMuc2hpZnRLZXlEb3duID0gc2hpZnRLZXlEb3duO1xuICB9XG5cbiAgaXNDdHJsS2V5RG93bigpIHtcbiAgICByZXR1cm4gdGhpcy5jdHJsS2V5RG93bjtcbiAgfVxuXG4gIGlzU2hpZnRLZXlEb3duKCkge1xuICAgIHJldHVybiB0aGlzLnNoaWZ0S2V5RG93bjtcbiAgfVxuXG4gIGtleVVwRXZlbnRMaXN0ZW5lcihldmVudCkge1xuICAgIGNvbnN0IGtleUNvZGUgPSBldmVudC5rZXlDb2RlO1xuXG4gICAgc3dpdGNoIChrZXlDb2RlKSB7XG4gICAgICBjYXNlIENUUkxfS0VZX0NPREUgOlxuICAgICAgICB0aGlzLmN0cmxLZXlVcEV2ZW50TGlzdGVuZXIoKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgU0hJRlRfS0VZX0NPREUgOlxuICAgICAgICB0aGlzLnNoaWZ0S2V5VXBFdmVudExpc3RlbmVyKCk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGtleURvd25FdmVudExpc3RlbmVyKGV2ZW50KSB7XG4gICAgY29uc3Qga2V5Q29kZSA9IGV2ZW50LmtleUNvZGU7XG5cbiAgICBzd2l0Y2ggKGtleUNvZGUpIHtcbiAgICAgIGNhc2UgQ1RSTF9LRVlfQ09ERSA6XG4gICAgICAgIHRoaXMuY3RybEtleURvd25FdmVudExpc3RlbmVyKCk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFNISUZUX0tFWV9DT0RFIDpcbiAgICAgICAgdGhpcy5zaGlmdEtleURvd25FdmVudExpc3RlbmVyKCk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICBcbiAgY3RybEtleVVwRXZlbnRMaXN0ZW5lcigpIHtcbiAgICB0aGlzLmN0cmxLZXlEb3duID0gZmFsc2U7XG5cbiAgICBjb25zdCBjdHJsS2V5SGFuZGxlcnMgPSB0aGlzLmhhbmRsZXJzTWFwW0NUUkxfS0VZX0NPREVdO1xuXG4gICAgY3RybEtleUhhbmRsZXJzLmZvckVhY2goKGN0cmxLZXlIYW5kbGVyKSA9PiBjdHJsS2V5SGFuZGxlcih0aGlzLmN0cmxLZXlEb3duKSk7XG4gIH1cblxuICBzaGlmdEtleVVwRXZlbnRMaXN0ZW5lcigpIHtcbiAgICB0aGlzLnNoaWZ0S2V5RG93biA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc2hpZnRLZXlIYW5kbGVycyA9IHRoaXMuaGFuZGxlcnNNYXBbU0hJRlRfS0VZX0NPREVdO1xuXG4gICAgc2hpZnRLZXlIYW5kbGVycy5mb3JFYWNoKChzaGlmdEtleUhhbmRsZXIpID0+IHNoaWZ0S2V5SGFuZGxlcih0aGlzLnNoaWZ0S2V5RG93bikpO1xuICB9XG5cbiAgY3RybEtleURvd25FdmVudExpc3RlbmVyKCkge1xuICAgIHRoaXMuY3RybEtleURvd24gPSB0cnVlO1xuXG4gICAgY29uc3QgY3RybEtleUhhbmRsZXJzID0gdGhpcy5oYW5kbGVyc01hcFtDVFJMX0tFWV9DT0RFXTtcblxuICAgIGN0cmxLZXlIYW5kbGVycy5mb3JFYWNoKChjdHJsS2V5SGFuZGxlcikgPT4gY3RybEtleUhhbmRsZXIodGhpcy5jdHJsS2V5RG93bikpO1xuICB9XG5cbiAgc2hpZnRLZXlEb3duRXZlbnRMaXN0ZW5lcigpIHtcbiAgICB0aGlzLnNoaWZ0S2V5RG93biA9IHRydWU7XG5cbiAgICBjb25zdCBzaGlmdEtleUhhbmRsZXJzID0gdGhpcy5oYW5kbGVyc01hcFtTSElGVF9LRVlfQ09ERV07XG5cbiAgICBzaGlmdEtleUhhbmRsZXJzLmZvckVhY2goKHNoaWZ0S2V5SGFuZGxlcikgPT4gc2hpZnRLZXlIYW5kbGVyKHRoaXMuc2hpZnRLZXlEb3duKSk7XG4gIH1cblxuICBhZGRDdHJsS2V5SGFuZGxlcihjdHJsS2V5SGFuZGxlcikge1xuICAgIGNvbnN0IGN0cmxLZXlIYW5kbGVycyA9IHRoaXMuaGFuZGxlcnNNYXBbIENUUkxfS0VZX0NPREUgXTtcblxuICAgIGN0cmxLZXlIYW5kbGVycy5wdXNoKGN0cmxLZXlIYW5kbGVyKTtcbiAgfVxuXG4gIGFkZFNoaWZ0S2V5SGFuZGxlcihzaGlmdEtleUhhbmRsZXIpIHtcbiAgICBjb25zdCBzaGlmdEtleUhhbmRsZXJzID0gdGhpcy5oYW5kbGVyc01hcFsgU0hJRlRfS0VZX0NPREUgXTtcblxuICAgIHNoaWZ0S2V5SGFuZGxlcnMucHVzaChzaGlmdEtleUhhbmRsZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKGNhbnZhcykge1xuICAgIGNvbnN0IGhhbmRsZXJzTWFwID0ge307XG4gICAgXG4gICAgaGFuZGxlcnNNYXBbIENUUkxfS0VZX0NPREUgXSA9IFtdO1xuICAgIGhhbmRsZXJzTWFwWyBTSElGVF9LRVlfQ09ERSBdID0gW107XG5cbiAgICBjb25zdCBjdHJsS2V5RG93biA9IGZhbHNlLCAgLy8vXG4gICAgICAgICAgc2hpZnRLZXlEb3duID0gZmFsc2UsICAvLy9cbiAgICAgICAgICBrZXlFdmVudHMgPSBuZXcgS2V5RXZlbnRzKGhhbmRsZXJzTWFwLCBjdHJsS2V5RG93biwgc2hpZnRLZXlEb3duKSxcbiAgICAgICAgICBrZXlVcEV2ZW50TGlzdGVuZXIgPSBrZXlFdmVudHMua2V5VXBFdmVudExpc3RlbmVyLmJpbmQoa2V5RXZlbnRzKSxcbiAgICAgICAgICBrZXlEb3duRXZlbnRMaXN0ZW5lciA9IGtleUV2ZW50cy5rZXlEb3duRXZlbnRMaXN0ZW5lci5iaW5kKGtleUV2ZW50cyksXG4gICAgICAgICAgZG9jdW1lbnRET01FbGVtZW50ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50OyAgLy8vXG5cbiAgICBkb2N1bWVudERPTUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBrZXlVcEV2ZW50TGlzdGVuZXIpO1xuICAgIGRvY3VtZW50RE9NRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywga2V5RG93bkV2ZW50TGlzdGVuZXIpO1xuXG4gICAgcmV0dXJuIGtleUV2ZW50cztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEtleUV2ZW50cztcbiJdfQ==
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var constants = require('../constants');

var CTRL_KEY_CODE = constants.CTRL_KEY_CODE,
    SHIFT_KEY_CODE = constants.SHIFT_KEY_CODE;

var KeyEvents = function () {
  function KeyEvents(handlers) {
    _classCallCheck(this, KeyEvents);

    this.handlers = handlers;
  }

  _createClass(KeyEvents, [{
    key: 'onCtrlKeyUp',
    value: function onCtrlKeyUp() {
      var keyDown = false,
          ctrlKeyHandlers = this.handlers[CTRL_KEY_CODE];

      ctrlKeyHandlers.forEach(function (ctrlKeyHandler) {
        ctrlKeyHandler(keyDown);
      });
    }
  }, {
    key: 'onShiftKeyUp',
    value: function onShiftKeyUp() {
      var keyDown = false,
          shiftKeyHandlers = this.handlers[SHIFT_KEY_CODE];

      shiftKeyHandlers.forEach(function (shiftKeyHandler) {
        shiftKeyHandler(keyDown);
      });
    }
  }, {
    key: 'onCtrlKeyDown',
    value: function onCtrlKeyDown() {
      var keyDown = true,
          ctrlKeyHandlers = this.handlers[CTRL_KEY_CODE];

      ctrlKeyHandlers.forEach(function (ctrlKeyHandler) {
        ctrlKeyHandler(keyDown);
      });
    }
  }, {
    key: 'onShiftKeyDown',
    value: function onShiftKeyDown() {
      var keyDown = true,
          shiftKeyHandlers = this.handlers[SHIFT_KEY_CODE];

      shiftKeyHandlers.forEach(function (shiftKeyHandler) {
        shiftKeyHandler(keyDown);
      });
    }
  }, {
    key: 'addCtrlKeyHandler',
    value: function addCtrlKeyHandler(ctrlKeyHandler) {
      var ctrlKeyHandlers = this.handlers[CTRL_KEY_CODE];

      ctrlKeyHandlers.push(ctrlKeyHandler);
    }
  }, {
    key: 'addShiftKeyHandler',
    value: function addShiftKeyHandler(shiftKeyHandler) {
      var shiftKeyHandlers = this.handlers[SHIFT_KEY_CODE];

      shiftKeyHandlers.push(shiftKeyHandler);
    }
  }], [{
    key: 'fromNothing',
    value: function fromNothing() {
      var handlers = {},
          keyEvents = new KeyEvents(handlers);

      handlers[CTRL_KEY_CODE] = [];
      handlers[SHIFT_KEY_CODE] = [];

      return keyEvents;
    }
  }]);

  return KeyEvents;
}();

var keyEvents = KeyEvents.fromNothing();

module.exports = keyEvents;

var documentDOMElement = document.documentElement;

documentDOMElement.onkeyup = function (event) {
  var keyCode = event.keyCode;

  if (false) {} else if (keyCode === CTRL_KEY_CODE) {
    keyEvents.onCtrlKeyUp();
  } else if (keyCode === SHIFT_KEY_CODE) {
    keyEvents.onShiftKeyUp();
  }
};

documentDOMElement.onkeydown = function (event) {
  var keyCode = event.keyCode;

  if (false) {} else if (keyCode === CTRL_KEY_CODE) {
    keyEvents.onCtrlKeyDown();
  } else if (keyCode === SHIFT_KEY_CODE) {
    keyEvents.onShiftKeyDown();
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jYW1lcmEva2V5RXZlbnRzLmpzIl0sIm5hbWVzIjpbImNvbnN0YW50cyIsInJlcXVpcmUiLCJDVFJMX0tFWV9DT0RFIiwiU0hJRlRfS0VZX0NPREUiLCJLZXlFdmVudHMiLCJoYW5kbGVycyIsImtleURvd24iLCJjdHJsS2V5SGFuZGxlcnMiLCJmb3JFYWNoIiwiY3RybEtleUhhbmRsZXIiLCJzaGlmdEtleUhhbmRsZXJzIiwic2hpZnRLZXlIYW5kbGVyIiwicHVzaCIsImtleUV2ZW50cyIsImZyb21Ob3RoaW5nIiwibW9kdWxlIiwiZXhwb3J0cyIsImRvY3VtZW50RE9NRWxlbWVudCIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50Iiwib25rZXl1cCIsImV2ZW50Iiwia2V5Q29kZSIsIm9uQ3RybEtleVVwIiwib25TaGlmdEtleVVwIiwib25rZXlkb3duIiwib25DdHJsS2V5RG93biIsIm9uU2hpZnRLZXlEb3duIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsWUFBWUMsUUFBUSxjQUFSLENBQWxCOztJQUVRQyxhLEdBQWtDRixTLENBQWxDRSxhO0lBQWVDLGMsR0FBbUJILFMsQ0FBbkJHLGM7O0lBRWpCQyxTO0FBQ0oscUJBQVlDLFFBQVosRUFBc0I7QUFBQTs7QUFDcEIsU0FBS0EsUUFBTCxHQUFnQkEsUUFBaEI7QUFDRDs7OztrQ0FFYTtBQUNaLFVBQU1DLFVBQVUsS0FBaEI7QUFBQSxVQUNNQyxrQkFBa0IsS0FBS0YsUUFBTCxDQUFjSCxhQUFkLENBRHhCOztBQUdBSyxzQkFBZ0JDLE9BQWhCLENBQXdCLFVBQVNDLGNBQVQsRUFBeUI7QUFDL0NBLHVCQUFlSCxPQUFmO0FBQ0QsT0FGRDtBQUdEOzs7bUNBRWM7QUFDYixVQUFNQSxVQUFVLEtBQWhCO0FBQUEsVUFDTUksbUJBQW1CLEtBQUtMLFFBQUwsQ0FBY0YsY0FBZCxDQUR6Qjs7QUFHQU8sdUJBQWlCRixPQUFqQixDQUF5QixVQUFTRyxlQUFULEVBQTBCO0FBQ2pEQSx3QkFBZ0JMLE9BQWhCO0FBQ0QsT0FGRDtBQUdEOzs7b0NBRWU7QUFDZCxVQUFNQSxVQUFVLElBQWhCO0FBQUEsVUFDTUMsa0JBQWtCLEtBQUtGLFFBQUwsQ0FBY0gsYUFBZCxDQUR4Qjs7QUFHQUssc0JBQWdCQyxPQUFoQixDQUF3QixVQUFTQyxjQUFULEVBQXlCO0FBQy9DQSx1QkFBZUgsT0FBZjtBQUNELE9BRkQ7QUFHRDs7O3FDQUVnQjtBQUNmLFVBQU1BLFVBQVUsSUFBaEI7QUFBQSxVQUNNSSxtQkFBbUIsS0FBS0wsUUFBTCxDQUFjRixjQUFkLENBRHpCOztBQUdBTyx1QkFBaUJGLE9BQWpCLENBQXlCLFVBQVNHLGVBQVQsRUFBMEI7QUFDakRBLHdCQUFnQkwsT0FBaEI7QUFDRCxPQUZEO0FBR0Q7OztzQ0FFaUJHLGMsRUFBZ0I7QUFDaEMsVUFBTUYsa0JBQWtCLEtBQUtGLFFBQUwsQ0FBY0gsYUFBZCxDQUF4Qjs7QUFFQUssc0JBQWdCSyxJQUFoQixDQUFxQkgsY0FBckI7QUFDRDs7O3VDQUVrQkUsZSxFQUFpQjtBQUNsQyxVQUFNRCxtQkFBbUIsS0FBS0wsUUFBTCxDQUFjRixjQUFkLENBQXpCOztBQUVBTyx1QkFBaUJFLElBQWpCLENBQXNCRCxlQUF0QjtBQUNEOzs7a0NBRW9CO0FBQ25CLFVBQU1OLFdBQVcsRUFBakI7QUFBQSxVQUNNUSxZQUFZLElBQUlULFNBQUosQ0FBY0MsUUFBZCxDQURsQjs7QUFHQUEsZUFBU0gsYUFBVCxJQUEwQixFQUExQjtBQUNBRyxlQUFTRixjQUFULElBQTJCLEVBQTNCOztBQUVBLGFBQU9VLFNBQVA7QUFDRDs7Ozs7O0FBR0gsSUFBTUEsWUFBWVQsVUFBVVUsV0FBVixFQUFsQjs7QUFFQUMsT0FBT0MsT0FBUCxHQUFpQkgsU0FBakI7O0FBRUEsSUFBTUkscUJBQXFCQyxTQUFTQyxlQUFwQzs7QUFFQUYsbUJBQW1CRyxPQUFuQixHQUE2QixVQUFTQyxLQUFULEVBQWdCO0FBQzNDLE1BQU1DLFVBQVVELE1BQU1DLE9BQXRCOztBQUVBLE1BQUksS0FBSixFQUFXLENBRVYsQ0FGRCxNQUVPLElBQUlBLFlBQVlwQixhQUFoQixFQUErQjtBQUNwQ1csY0FBVVUsV0FBVjtBQUNELEdBRk0sTUFFQSxJQUFJRCxZQUFZbkIsY0FBaEIsRUFBZ0M7QUFDckNVLGNBQVVXLFlBQVY7QUFDRDtBQUNGLENBVkQ7O0FBWUFQLG1CQUFtQlEsU0FBbkIsR0FBK0IsVUFBU0osS0FBVCxFQUFnQjtBQUM3QyxNQUFNQyxVQUFVRCxNQUFNQyxPQUF0Qjs7QUFFQSxNQUFJLEtBQUosRUFBVyxDQUVWLENBRkQsTUFFTyxJQUFJQSxZQUFZcEIsYUFBaEIsRUFBK0I7QUFDcENXLGNBQVVhLGFBQVY7QUFDRCxHQUZNLE1BRUEsSUFBSUosWUFBWW5CLGNBQWhCLEVBQWdDO0FBQ3JDVSxjQUFVYyxjQUFWO0FBQ0Q7QUFDRixDQVZEIiwiZmlsZSI6ImtleUV2ZW50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgY29uc3RhbnRzID0gcmVxdWlyZSgnLi4vY29uc3RhbnRzJyk7XG5cbmNvbnN0IHsgQ1RSTF9LRVlfQ09ERSwgU0hJRlRfS0VZX0NPREUgfSA9IGNvbnN0YW50cztcblxuY2xhc3MgS2V5RXZlbnRzIHtcbiAgY29uc3RydWN0b3IoaGFuZGxlcnMpIHtcbiAgICB0aGlzLmhhbmRsZXJzID0gaGFuZGxlcnM7XG4gIH1cbiAgXG4gIG9uQ3RybEtleVVwKCkge1xuICAgIGNvbnN0IGtleURvd24gPSBmYWxzZSxcbiAgICAgICAgICBjdHJsS2V5SGFuZGxlcnMgPSB0aGlzLmhhbmRsZXJzW0NUUkxfS0VZX0NPREVdO1xuXG4gICAgY3RybEtleUhhbmRsZXJzLmZvckVhY2goZnVuY3Rpb24oY3RybEtleUhhbmRsZXIpIHtcbiAgICAgIGN0cmxLZXlIYW5kbGVyKGtleURvd24pO1xuICAgIH0pO1xuICB9XG5cbiAgb25TaGlmdEtleVVwKCkge1xuICAgIGNvbnN0IGtleURvd24gPSBmYWxzZSxcbiAgICAgICAgICBzaGlmdEtleUhhbmRsZXJzID0gdGhpcy5oYW5kbGVyc1tTSElGVF9LRVlfQ09ERV07XG5cbiAgICBzaGlmdEtleUhhbmRsZXJzLmZvckVhY2goZnVuY3Rpb24oc2hpZnRLZXlIYW5kbGVyKSB7XG4gICAgICBzaGlmdEtleUhhbmRsZXIoa2V5RG93bik7XG4gICAgfSk7XG4gIH1cblxuICBvbkN0cmxLZXlEb3duKCkge1xuICAgIGNvbnN0IGtleURvd24gPSB0cnVlLFxuICAgICAgICAgIGN0cmxLZXlIYW5kbGVycyA9IHRoaXMuaGFuZGxlcnNbQ1RSTF9LRVlfQ09ERV07XG5cbiAgICBjdHJsS2V5SGFuZGxlcnMuZm9yRWFjaChmdW5jdGlvbihjdHJsS2V5SGFuZGxlcikge1xuICAgICAgY3RybEtleUhhbmRsZXIoa2V5RG93bik7XG4gICAgfSk7XG4gIH1cblxuICBvblNoaWZ0S2V5RG93bigpIHtcbiAgICBjb25zdCBrZXlEb3duID0gdHJ1ZSxcbiAgICAgICAgICBzaGlmdEtleUhhbmRsZXJzID0gdGhpcy5oYW5kbGVyc1tTSElGVF9LRVlfQ09ERV07XG5cbiAgICBzaGlmdEtleUhhbmRsZXJzLmZvckVhY2goZnVuY3Rpb24oc2hpZnRLZXlIYW5kbGVyKSB7XG4gICAgICBzaGlmdEtleUhhbmRsZXIoa2V5RG93bik7XG4gICAgfSk7XG4gIH1cblxuICBhZGRDdHJsS2V5SGFuZGxlcihjdHJsS2V5SGFuZGxlcikge1xuICAgIGNvbnN0IGN0cmxLZXlIYW5kbGVycyA9IHRoaXMuaGFuZGxlcnNbQ1RSTF9LRVlfQ09ERV07XG5cbiAgICBjdHJsS2V5SGFuZGxlcnMucHVzaChjdHJsS2V5SGFuZGxlcik7XG4gIH1cblxuICBhZGRTaGlmdEtleUhhbmRsZXIoc2hpZnRLZXlIYW5kbGVyKSB7XG4gICAgY29uc3Qgc2hpZnRLZXlIYW5kbGVycyA9IHRoaXMuaGFuZGxlcnNbU0hJRlRfS0VZX0NPREVdO1xuXG4gICAgc2hpZnRLZXlIYW5kbGVycy5wdXNoKHNoaWZ0S2V5SGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgaGFuZGxlcnMgPSB7fSxcbiAgICAgICAgICBrZXlFdmVudHMgPSBuZXcgS2V5RXZlbnRzKGhhbmRsZXJzKTtcbiAgICBcbiAgICBoYW5kbGVyc1tDVFJMX0tFWV9DT0RFXSA9IFtdO1xuICAgIGhhbmRsZXJzW1NISUZUX0tFWV9DT0RFXSA9IFtdO1xuXG4gICAgcmV0dXJuIGtleUV2ZW50cztcbiAgfVxufVxuXG5jb25zdCBrZXlFdmVudHMgPSBLZXlFdmVudHMuZnJvbU5vdGhpbmcoKTtcblxubW9kdWxlLmV4cG9ydHMgPSBrZXlFdmVudHM7XG5cbmNvbnN0IGRvY3VtZW50RE9NRWxlbWVudCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblxuZG9jdW1lbnRET01FbGVtZW50Lm9ua2V5dXAgPSBmdW5jdGlvbihldmVudCkge1xuICBjb25zdCBrZXlDb2RlID0gZXZlbnQua2V5Q29kZTtcblxuICBpZiAoZmFsc2UpIHtcblxuICB9IGVsc2UgaWYgKGtleUNvZGUgPT09IENUUkxfS0VZX0NPREUpIHtcbiAgICBrZXlFdmVudHMub25DdHJsS2V5VXAoKTtcbiAgfSBlbHNlIGlmIChrZXlDb2RlID09PSBTSElGVF9LRVlfQ09ERSkge1xuICAgIGtleUV2ZW50cy5vblNoaWZ0S2V5VXAoKTtcbiAgfVxufTtcblxuZG9jdW1lbnRET01FbGVtZW50Lm9ua2V5ZG93biA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gIGNvbnN0IGtleUNvZGUgPSBldmVudC5rZXlDb2RlO1xuXG4gIGlmIChmYWxzZSkge1xuXG4gIH0gZWxzZSBpZiAoa2V5Q29kZSA9PT0gQ1RSTF9LRVlfQ09ERSkge1xuICAgIGtleUV2ZW50cy5vbkN0cmxLZXlEb3duKCk7XG4gIH0gZWxzZSBpZiAoa2V5Q29kZSA9PT0gU0hJRlRfS0VZX0NPREUpIHtcbiAgICBrZXlFdmVudHMub25TaGlmdEtleURvd24oKTtcbiAgfVxufTtcbiJdfQ==
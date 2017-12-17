'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var constants = require('../../constants');

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
      var ctrlKeyDown = false,
          ctrlKeyHandlers = this.handlers[CTRL_KEY_CODE];

      ctrlKeyHandlers.forEach(function (ctrlKeyHandler) {
        ctrlKeyHandler(ctrlKeyDown);
      });
    }
  }, {
    key: 'onShiftKeyUp',
    value: function onShiftKeyUp() {
      var shiftKeyDown = false,
          shiftKeyHandlers = this.handlers[SHIFT_KEY_CODE];

      shiftKeyHandlers.forEach(function (shiftKeyHandler) {
        shiftKeyHandler(shiftKeyDown);
      });
    }
  }, {
    key: 'onCtrlKeyDown',
    value: function onCtrlKeyDown() {
      var ctrlKeyDown = true,
          ctrlKeyHandlers = this.handlers[CTRL_KEY_CODE];

      ctrlKeyHandlers.forEach(function (ctrlKeyHandler) {
        ctrlKeyHandler(ctrlKeyDown);
      });
    }
  }, {
    key: 'onShiftKeyDown',
    value: function onShiftKeyDown() {
      var shiftKeyDown = true,
          shiftKeyHandlers = this.handlers[SHIFT_KEY_CODE];

      shiftKeyHandlers.forEach(function (shiftKeyHandler) {
        shiftKeyHandler(shiftKeyDown);
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

var keyEvents = KeyEvents.fromNothing(),
    documentDOMElement = document.documentElement;

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

module.exports = keyEvents;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9lbGVtZW50L2NhbWVyYS9rZXlFdmVudHMuanMiXSwibmFtZXMiOlsiY29uc3RhbnRzIiwicmVxdWlyZSIsIkNUUkxfS0VZX0NPREUiLCJTSElGVF9LRVlfQ09ERSIsIktleUV2ZW50cyIsImhhbmRsZXJzIiwiY3RybEtleURvd24iLCJjdHJsS2V5SGFuZGxlcnMiLCJmb3JFYWNoIiwiY3RybEtleUhhbmRsZXIiLCJzaGlmdEtleURvd24iLCJzaGlmdEtleUhhbmRsZXJzIiwic2hpZnRLZXlIYW5kbGVyIiwicHVzaCIsImtleUV2ZW50cyIsImZyb21Ob3RoaW5nIiwiZG9jdW1lbnRET01FbGVtZW50IiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJvbmtleXVwIiwiZXZlbnQiLCJrZXlDb2RlIiwib25DdHJsS2V5VXAiLCJvblNoaWZ0S2V5VXAiLCJvbmtleWRvd24iLCJvbkN0cmxLZXlEb3duIiwib25TaGlmdEtleURvd24iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsWUFBWUMsUUFBUSxpQkFBUixDQUFsQjs7SUFFUUMsYSxHQUFrQ0YsUyxDQUFsQ0UsYTtJQUFlQyxjLEdBQW1CSCxTLENBQW5CRyxjOztJQUVqQkMsUztBQUNKLHFCQUFZQyxRQUFaLEVBQXNCO0FBQUE7O0FBQ3BCLFNBQUtBLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0Q7Ozs7a0NBRWE7QUFDWixVQUFNQyxjQUFjLEtBQXBCO0FBQUEsVUFDTUMsa0JBQWtCLEtBQUtGLFFBQUwsQ0FBY0gsYUFBZCxDQUR4Qjs7QUFHQUssc0JBQWdCQyxPQUFoQixDQUF3QixVQUFTQyxjQUFULEVBQXlCO0FBQy9DQSx1QkFBZUgsV0FBZjtBQUNELE9BRkQ7QUFHRDs7O21DQUVjO0FBQ2IsVUFBTUksZUFBZSxLQUFyQjtBQUFBLFVBQ01DLG1CQUFtQixLQUFLTixRQUFMLENBQWNGLGNBQWQsQ0FEekI7O0FBR0FRLHVCQUFpQkgsT0FBakIsQ0FBeUIsVUFBU0ksZUFBVCxFQUEwQjtBQUNqREEsd0JBQWdCRixZQUFoQjtBQUNELE9BRkQ7QUFHRDs7O29DQUVlO0FBQ2QsVUFBTUosY0FBYyxJQUFwQjtBQUFBLFVBQ01DLGtCQUFrQixLQUFLRixRQUFMLENBQWNILGFBQWQsQ0FEeEI7O0FBR0FLLHNCQUFnQkMsT0FBaEIsQ0FBd0IsVUFBU0MsY0FBVCxFQUF5QjtBQUMvQ0EsdUJBQWVILFdBQWY7QUFDRCxPQUZEO0FBR0Q7OztxQ0FFZ0I7QUFDZixVQUFNSSxlQUFlLElBQXJCO0FBQUEsVUFDTUMsbUJBQW1CLEtBQUtOLFFBQUwsQ0FBY0YsY0FBZCxDQUR6Qjs7QUFHQVEsdUJBQWlCSCxPQUFqQixDQUF5QixVQUFTSSxlQUFULEVBQTBCO0FBQ2pEQSx3QkFBZ0JGLFlBQWhCO0FBQ0QsT0FGRDtBQUdEOzs7c0NBRWlCRCxjLEVBQWdCO0FBQ2hDLFVBQU1GLGtCQUFrQixLQUFLRixRQUFMLENBQWNILGFBQWQsQ0FBeEI7O0FBRUFLLHNCQUFnQk0sSUFBaEIsQ0FBcUJKLGNBQXJCO0FBQ0Q7Ozt1Q0FFa0JHLGUsRUFBaUI7QUFDbEMsVUFBTUQsbUJBQW1CLEtBQUtOLFFBQUwsQ0FBY0YsY0FBZCxDQUF6Qjs7QUFFQVEsdUJBQWlCRSxJQUFqQixDQUFzQkQsZUFBdEI7QUFDRDs7O2tDQUVvQjtBQUNuQixVQUFNUCxXQUFXLEVBQWpCO0FBQUEsVUFDTVMsWUFBWSxJQUFJVixTQUFKLENBQWNDLFFBQWQsQ0FEbEI7O0FBR0FBLGVBQVNILGFBQVQsSUFBMEIsRUFBMUI7QUFDQUcsZUFBU0YsY0FBVCxJQUEyQixFQUEzQjs7QUFFQSxhQUFPVyxTQUFQO0FBQ0Q7Ozs7OztBQUdILElBQU1BLFlBQVlWLFVBQVVXLFdBQVYsRUFBbEI7QUFBQSxJQUNNQyxxQkFBcUJDLFNBQVNDLGVBRHBDOztBQUdBRixtQkFBbUJHLE9BQW5CLEdBQTZCLFVBQVNDLEtBQVQsRUFBZ0I7QUFDM0MsTUFBTUMsVUFBVUQsTUFBTUMsT0FBdEI7O0FBRUEsTUFBSSxLQUFKLEVBQVcsQ0FFVixDQUZELE1BRU8sSUFBSUEsWUFBWW5CLGFBQWhCLEVBQStCO0FBQ3BDWSxjQUFVUSxXQUFWO0FBQ0QsR0FGTSxNQUVBLElBQUlELFlBQVlsQixjQUFoQixFQUFnQztBQUNyQ1csY0FBVVMsWUFBVjtBQUNEO0FBQ0YsQ0FWRDs7QUFZQVAsbUJBQW1CUSxTQUFuQixHQUErQixVQUFTSixLQUFULEVBQWdCO0FBQzdDLE1BQU1DLFVBQVVELE1BQU1DLE9BQXRCOztBQUVBLE1BQUksS0FBSixFQUFXLENBRVYsQ0FGRCxNQUVPLElBQUlBLFlBQVluQixhQUFoQixFQUErQjtBQUNwQ1ksY0FBVVcsYUFBVjtBQUNELEdBRk0sTUFFQSxJQUFJSixZQUFZbEIsY0FBaEIsRUFBZ0M7QUFDckNXLGNBQVVZLGNBQVY7QUFDRDtBQUNGLENBVkQ7O0FBWUFDLE9BQU9DLE9BQVAsR0FBaUJkLFNBQWpCIiwiZmlsZSI6ImtleUV2ZW50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgY29uc3RhbnRzID0gcmVxdWlyZSgnLi4vLi4vY29uc3RhbnRzJyk7XG5cbmNvbnN0IHsgQ1RSTF9LRVlfQ09ERSwgU0hJRlRfS0VZX0NPREUgfSA9IGNvbnN0YW50cztcblxuY2xhc3MgS2V5RXZlbnRzIHtcbiAgY29uc3RydWN0b3IoaGFuZGxlcnMpIHtcbiAgICB0aGlzLmhhbmRsZXJzID0gaGFuZGxlcnM7XG4gIH1cbiAgXG4gIG9uQ3RybEtleVVwKCkge1xuICAgIGNvbnN0IGN0cmxLZXlEb3duID0gZmFsc2UsXG4gICAgICAgICAgY3RybEtleUhhbmRsZXJzID0gdGhpcy5oYW5kbGVyc1tDVFJMX0tFWV9DT0RFXTtcblxuICAgIGN0cmxLZXlIYW5kbGVycy5mb3JFYWNoKGZ1bmN0aW9uKGN0cmxLZXlIYW5kbGVyKSB7XG4gICAgICBjdHJsS2V5SGFuZGxlcihjdHJsS2V5RG93bik7XG4gICAgfSk7XG4gIH1cblxuICBvblNoaWZ0S2V5VXAoKSB7XG4gICAgY29uc3Qgc2hpZnRLZXlEb3duID0gZmFsc2UsXG4gICAgICAgICAgc2hpZnRLZXlIYW5kbGVycyA9IHRoaXMuaGFuZGxlcnNbU0hJRlRfS0VZX0NPREVdO1xuXG4gICAgc2hpZnRLZXlIYW5kbGVycy5mb3JFYWNoKGZ1bmN0aW9uKHNoaWZ0S2V5SGFuZGxlcikge1xuICAgICAgc2hpZnRLZXlIYW5kbGVyKHNoaWZ0S2V5RG93bik7XG4gICAgfSk7XG4gIH1cblxuICBvbkN0cmxLZXlEb3duKCkge1xuICAgIGNvbnN0IGN0cmxLZXlEb3duID0gdHJ1ZSxcbiAgICAgICAgICBjdHJsS2V5SGFuZGxlcnMgPSB0aGlzLmhhbmRsZXJzW0NUUkxfS0VZX0NPREVdO1xuXG4gICAgY3RybEtleUhhbmRsZXJzLmZvckVhY2goZnVuY3Rpb24oY3RybEtleUhhbmRsZXIpIHtcbiAgICAgIGN0cmxLZXlIYW5kbGVyKGN0cmxLZXlEb3duKTtcbiAgICB9KTtcbiAgfVxuXG4gIG9uU2hpZnRLZXlEb3duKCkge1xuICAgIGNvbnN0IHNoaWZ0S2V5RG93biA9IHRydWUsXG4gICAgICAgICAgc2hpZnRLZXlIYW5kbGVycyA9IHRoaXMuaGFuZGxlcnNbU0hJRlRfS0VZX0NPREVdO1xuXG4gICAgc2hpZnRLZXlIYW5kbGVycy5mb3JFYWNoKGZ1bmN0aW9uKHNoaWZ0S2V5SGFuZGxlcikge1xuICAgICAgc2hpZnRLZXlIYW5kbGVyKHNoaWZ0S2V5RG93bik7XG4gICAgfSk7XG4gIH1cblxuICBhZGRDdHJsS2V5SGFuZGxlcihjdHJsS2V5SGFuZGxlcikge1xuICAgIGNvbnN0IGN0cmxLZXlIYW5kbGVycyA9IHRoaXMuaGFuZGxlcnNbQ1RSTF9LRVlfQ09ERV07XG5cbiAgICBjdHJsS2V5SGFuZGxlcnMucHVzaChjdHJsS2V5SGFuZGxlcik7XG4gIH1cblxuICBhZGRTaGlmdEtleUhhbmRsZXIoc2hpZnRLZXlIYW5kbGVyKSB7XG4gICAgY29uc3Qgc2hpZnRLZXlIYW5kbGVycyA9IHRoaXMuaGFuZGxlcnNbU0hJRlRfS0VZX0NPREVdO1xuXG4gICAgc2hpZnRLZXlIYW5kbGVycy5wdXNoKHNoaWZ0S2V5SGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgaGFuZGxlcnMgPSB7fSxcbiAgICAgICAgICBrZXlFdmVudHMgPSBuZXcgS2V5RXZlbnRzKGhhbmRsZXJzKTtcbiAgICBcbiAgICBoYW5kbGVyc1tDVFJMX0tFWV9DT0RFXSA9IFtdO1xuICAgIGhhbmRsZXJzW1NISUZUX0tFWV9DT0RFXSA9IFtdO1xuXG4gICAgcmV0dXJuIGtleUV2ZW50cztcbiAgfVxufVxuXG5jb25zdCBrZXlFdmVudHMgPSBLZXlFdmVudHMuZnJvbU5vdGhpbmcoKSxcbiAgICAgIGRvY3VtZW50RE9NRWxlbWVudCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblxuZG9jdW1lbnRET01FbGVtZW50Lm9ua2V5dXAgPSBmdW5jdGlvbihldmVudCkge1xuICBjb25zdCBrZXlDb2RlID0gZXZlbnQua2V5Q29kZTtcblxuICBpZiAoZmFsc2UpIHtcblxuICB9IGVsc2UgaWYgKGtleUNvZGUgPT09IENUUkxfS0VZX0NPREUpIHtcbiAgICBrZXlFdmVudHMub25DdHJsS2V5VXAoKTtcbiAgfSBlbHNlIGlmIChrZXlDb2RlID09PSBTSElGVF9LRVlfQ09ERSkge1xuICAgIGtleUV2ZW50cy5vblNoaWZ0S2V5VXAoKTtcbiAgfVxufTtcblxuZG9jdW1lbnRET01FbGVtZW50Lm9ua2V5ZG93biA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gIGNvbnN0IGtleUNvZGUgPSBldmVudC5rZXlDb2RlO1xuXG4gIGlmIChmYWxzZSkge1xuXG4gIH0gZWxzZSBpZiAoa2V5Q29kZSA9PT0gQ1RSTF9LRVlfQ09ERSkge1xuICAgIGtleUV2ZW50cy5vbkN0cmxLZXlEb3duKCk7XG4gIH0gZWxzZSBpZiAoa2V5Q29kZSA9PT0gU0hJRlRfS0VZX0NPREUpIHtcbiAgICBrZXlFdmVudHMub25TaGlmdEtleURvd24oKTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBrZXlFdmVudHM7XG4iXX0=
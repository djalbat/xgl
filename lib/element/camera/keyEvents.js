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
        return ctrlKeyHandler(ctrlKeyDown);
      });
    }
  }, {
    key: 'onShiftKeyUp',
    value: function onShiftKeyUp() {
      var shiftKeyDown = false,
          shiftKeyHandlers = this.handlers[SHIFT_KEY_CODE];

      shiftKeyHandlers.forEach(function (shiftKeyHandler) {
        return shiftKeyHandler(shiftKeyDown);
      });
    }
  }, {
    key: 'onCtrlKeyDown',
    value: function onCtrlKeyDown() {
      var ctrlKeyDown = true,
          ctrlKeyHandlers = this.handlers[CTRL_KEY_CODE];

      ctrlKeyHandlers.forEach(function (ctrlKeyHandler) {
        return ctrlKeyHandler(ctrlKeyDown);
      });
    }
  }, {
    key: 'onShiftKeyDown',
    value: function onShiftKeyDown() {
      var shiftKeyDown = true,
          shiftKeyHandlers = this.handlers[SHIFT_KEY_CODE];

      shiftKeyHandlers.forEach(function (shiftKeyHandler) {
        return shiftKeyHandler(shiftKeyDown);
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

  if (false) {
    ///
  } else if (keyCode === CTRL_KEY_CODE) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9lbGVtZW50L2NhbWVyYS9rZXlFdmVudHMuanMiXSwibmFtZXMiOlsiY29uc3RhbnRzIiwicmVxdWlyZSIsIkNUUkxfS0VZX0NPREUiLCJTSElGVF9LRVlfQ09ERSIsIktleUV2ZW50cyIsImhhbmRsZXJzIiwiY3RybEtleURvd24iLCJjdHJsS2V5SGFuZGxlcnMiLCJmb3JFYWNoIiwiY3RybEtleUhhbmRsZXIiLCJzaGlmdEtleURvd24iLCJzaGlmdEtleUhhbmRsZXJzIiwic2hpZnRLZXlIYW5kbGVyIiwicHVzaCIsImtleUV2ZW50cyIsImZyb21Ob3RoaW5nIiwiZG9jdW1lbnRET01FbGVtZW50IiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJvbmtleXVwIiwiZXZlbnQiLCJrZXlDb2RlIiwib25DdHJsS2V5VXAiLCJvblNoaWZ0S2V5VXAiLCJvbmtleWRvd24iLCJvbkN0cmxLZXlEb3duIiwib25TaGlmdEtleURvd24iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsWUFBWUMsUUFBUSxpQkFBUixDQUFsQjs7SUFFUUMsYSxHQUFrQ0YsUyxDQUFsQ0UsYTtJQUFlQyxjLEdBQW1CSCxTLENBQW5CRyxjOztJQUVqQkMsUztBQUNKLHFCQUFZQyxRQUFaLEVBQXNCO0FBQUE7O0FBQ3BCLFNBQUtBLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0Q7Ozs7a0NBRWE7QUFDWixVQUFNQyxjQUFjLEtBQXBCO0FBQUEsVUFDTUMsa0JBQWtCLEtBQUtGLFFBQUwsQ0FBY0gsYUFBZCxDQUR4Qjs7QUFHQUssc0JBQWdCQyxPQUFoQixDQUF3QixVQUFDQyxjQUFEO0FBQUEsZUFBb0JBLGVBQWVILFdBQWYsQ0FBcEI7QUFBQSxPQUF4QjtBQUNEOzs7bUNBRWM7QUFDYixVQUFNSSxlQUFlLEtBQXJCO0FBQUEsVUFDTUMsbUJBQW1CLEtBQUtOLFFBQUwsQ0FBY0YsY0FBZCxDQUR6Qjs7QUFHQVEsdUJBQWlCSCxPQUFqQixDQUF5QixVQUFDSSxlQUFEO0FBQUEsZUFBcUJBLGdCQUFnQkYsWUFBaEIsQ0FBckI7QUFBQSxPQUF6QjtBQUNEOzs7b0NBRWU7QUFDZCxVQUFNSixjQUFjLElBQXBCO0FBQUEsVUFDTUMsa0JBQWtCLEtBQUtGLFFBQUwsQ0FBY0gsYUFBZCxDQUR4Qjs7QUFHQUssc0JBQWdCQyxPQUFoQixDQUF3QixVQUFDQyxjQUFEO0FBQUEsZUFBb0JBLGVBQWVILFdBQWYsQ0FBcEI7QUFBQSxPQUF4QjtBQUNEOzs7cUNBRWdCO0FBQ2YsVUFBTUksZUFBZSxJQUFyQjtBQUFBLFVBQ01DLG1CQUFtQixLQUFLTixRQUFMLENBQWNGLGNBQWQsQ0FEekI7O0FBR0FRLHVCQUFpQkgsT0FBakIsQ0FBeUIsVUFBQ0ksZUFBRDtBQUFBLGVBQXFCQSxnQkFBZ0JGLFlBQWhCLENBQXJCO0FBQUEsT0FBekI7QUFDRDs7O3NDQUVpQkQsYyxFQUFnQjtBQUNoQyxVQUFNRixrQkFBa0IsS0FBS0YsUUFBTCxDQUFjSCxhQUFkLENBQXhCOztBQUVBSyxzQkFBZ0JNLElBQWhCLENBQXFCSixjQUFyQjtBQUNEOzs7dUNBRWtCRyxlLEVBQWlCO0FBQ2xDLFVBQU1ELG1CQUFtQixLQUFLTixRQUFMLENBQWNGLGNBQWQsQ0FBekI7O0FBRUFRLHVCQUFpQkUsSUFBakIsQ0FBc0JELGVBQXRCO0FBQ0Q7OztrQ0FFb0I7QUFDbkIsVUFBTVAsV0FBVyxFQUFqQjtBQUFBLFVBQ01TLFlBQVksSUFBSVYsU0FBSixDQUFjQyxRQUFkLENBRGxCOztBQUdBQSxlQUFTSCxhQUFULElBQTBCLEVBQTFCO0FBQ0FHLGVBQVNGLGNBQVQsSUFBMkIsRUFBM0I7O0FBRUEsYUFBT1csU0FBUDtBQUNEOzs7Ozs7QUFHSCxJQUFNQSxZQUFZVixVQUFVVyxXQUFWLEVBQWxCO0FBQUEsSUFDTUMscUJBQXFCQyxTQUFTQyxlQURwQzs7QUFHQUYsbUJBQW1CRyxPQUFuQixHQUE2QixVQUFDQyxLQUFELEVBQVc7QUFDdEMsTUFBTUMsVUFBVUQsTUFBTUMsT0FBdEI7O0FBRUEsTUFBSSxLQUFKLEVBQVc7QUFDVDtBQUNELEdBRkQsTUFFTyxJQUFJQSxZQUFZbkIsYUFBaEIsRUFBK0I7QUFDcENZLGNBQVVRLFdBQVY7QUFDRCxHQUZNLE1BRUEsSUFBSUQsWUFBWWxCLGNBQWhCLEVBQWdDO0FBQ3JDVyxjQUFVUyxZQUFWO0FBQ0Q7QUFDRixDQVZEOztBQVlBUCxtQkFBbUJRLFNBQW5CLEdBQStCLFVBQUNKLEtBQUQsRUFBVztBQUN4QyxNQUFNQyxVQUFVRCxNQUFNQyxPQUF0Qjs7QUFFQSxNQUFJLEtBQUosRUFBVyxDQUVWLENBRkQsTUFFTyxJQUFJQSxZQUFZbkIsYUFBaEIsRUFBK0I7QUFDcENZLGNBQVVXLGFBQVY7QUFDRCxHQUZNLE1BRUEsSUFBSUosWUFBWWxCLGNBQWhCLEVBQWdDO0FBQ3JDVyxjQUFVWSxjQUFWO0FBQ0Q7QUFDRixDQVZEOztBQVlBQyxPQUFPQyxPQUFQLEdBQWlCZCxTQUFqQiIsImZpbGUiOiJrZXlFdmVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGNvbnN0YW50cyA9IHJlcXVpcmUoJy4uLy4uL2NvbnN0YW50cycpO1xuXG5jb25zdCB7IENUUkxfS0VZX0NPREUsIFNISUZUX0tFWV9DT0RFIH0gPSBjb25zdGFudHM7XG5cbmNsYXNzIEtleUV2ZW50cyB7XG4gIGNvbnN0cnVjdG9yKGhhbmRsZXJzKSB7XG4gICAgdGhpcy5oYW5kbGVycyA9IGhhbmRsZXJzO1xuICB9XG4gIFxuICBvbkN0cmxLZXlVcCgpIHtcbiAgICBjb25zdCBjdHJsS2V5RG93biA9IGZhbHNlLFxuICAgICAgICAgIGN0cmxLZXlIYW5kbGVycyA9IHRoaXMuaGFuZGxlcnNbQ1RSTF9LRVlfQ09ERV07XG5cbiAgICBjdHJsS2V5SGFuZGxlcnMuZm9yRWFjaCgoY3RybEtleUhhbmRsZXIpID0+IGN0cmxLZXlIYW5kbGVyKGN0cmxLZXlEb3duKSk7XG4gIH1cblxuICBvblNoaWZ0S2V5VXAoKSB7XG4gICAgY29uc3Qgc2hpZnRLZXlEb3duID0gZmFsc2UsXG4gICAgICAgICAgc2hpZnRLZXlIYW5kbGVycyA9IHRoaXMuaGFuZGxlcnNbU0hJRlRfS0VZX0NPREVdO1xuXG4gICAgc2hpZnRLZXlIYW5kbGVycy5mb3JFYWNoKChzaGlmdEtleUhhbmRsZXIpID0+IHNoaWZ0S2V5SGFuZGxlcihzaGlmdEtleURvd24pKTtcbiAgfVxuXG4gIG9uQ3RybEtleURvd24oKSB7XG4gICAgY29uc3QgY3RybEtleURvd24gPSB0cnVlLFxuICAgICAgICAgIGN0cmxLZXlIYW5kbGVycyA9IHRoaXMuaGFuZGxlcnNbQ1RSTF9LRVlfQ09ERV07XG5cbiAgICBjdHJsS2V5SGFuZGxlcnMuZm9yRWFjaCgoY3RybEtleUhhbmRsZXIpID0+IGN0cmxLZXlIYW5kbGVyKGN0cmxLZXlEb3duKSk7XG4gIH1cblxuICBvblNoaWZ0S2V5RG93bigpIHtcbiAgICBjb25zdCBzaGlmdEtleURvd24gPSB0cnVlLFxuICAgICAgICAgIHNoaWZ0S2V5SGFuZGxlcnMgPSB0aGlzLmhhbmRsZXJzW1NISUZUX0tFWV9DT0RFXTtcblxuICAgIHNoaWZ0S2V5SGFuZGxlcnMuZm9yRWFjaCgoc2hpZnRLZXlIYW5kbGVyKSA9PiBzaGlmdEtleUhhbmRsZXIoc2hpZnRLZXlEb3duKSk7XG4gIH1cblxuICBhZGRDdHJsS2V5SGFuZGxlcihjdHJsS2V5SGFuZGxlcikge1xuICAgIGNvbnN0IGN0cmxLZXlIYW5kbGVycyA9IHRoaXMuaGFuZGxlcnNbQ1RSTF9LRVlfQ09ERV07XG5cbiAgICBjdHJsS2V5SGFuZGxlcnMucHVzaChjdHJsS2V5SGFuZGxlcik7XG4gIH1cblxuICBhZGRTaGlmdEtleUhhbmRsZXIoc2hpZnRLZXlIYW5kbGVyKSB7XG4gICAgY29uc3Qgc2hpZnRLZXlIYW5kbGVycyA9IHRoaXMuaGFuZGxlcnNbU0hJRlRfS0VZX0NPREVdO1xuXG4gICAgc2hpZnRLZXlIYW5kbGVycy5wdXNoKHNoaWZ0S2V5SGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgaGFuZGxlcnMgPSB7fSxcbiAgICAgICAgICBrZXlFdmVudHMgPSBuZXcgS2V5RXZlbnRzKGhhbmRsZXJzKTtcbiAgICBcbiAgICBoYW5kbGVyc1tDVFJMX0tFWV9DT0RFXSA9IFtdO1xuICAgIGhhbmRsZXJzW1NISUZUX0tFWV9DT0RFXSA9IFtdO1xuXG4gICAgcmV0dXJuIGtleUV2ZW50cztcbiAgfVxufVxuXG5jb25zdCBrZXlFdmVudHMgPSBLZXlFdmVudHMuZnJvbU5vdGhpbmcoKSxcbiAgICAgIGRvY3VtZW50RE9NRWxlbWVudCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblxuZG9jdW1lbnRET01FbGVtZW50Lm9ua2V5dXAgPSAoZXZlbnQpID0+IHtcbiAgY29uc3Qga2V5Q29kZSA9IGV2ZW50LmtleUNvZGU7XG5cbiAgaWYgKGZhbHNlKSB7XG4gICAgLy8vXG4gIH0gZWxzZSBpZiAoa2V5Q29kZSA9PT0gQ1RSTF9LRVlfQ09ERSkge1xuICAgIGtleUV2ZW50cy5vbkN0cmxLZXlVcCgpO1xuICB9IGVsc2UgaWYgKGtleUNvZGUgPT09IFNISUZUX0tFWV9DT0RFKSB7XG4gICAga2V5RXZlbnRzLm9uU2hpZnRLZXlVcCgpO1xuICB9XG59O1xuXG5kb2N1bWVudERPTUVsZW1lbnQub25rZXlkb3duID0gKGV2ZW50KSA9PiB7XG4gIGNvbnN0IGtleUNvZGUgPSBldmVudC5rZXlDb2RlO1xuXG4gIGlmIChmYWxzZSkge1xuXG4gIH0gZWxzZSBpZiAoa2V5Q29kZSA9PT0gQ1RSTF9LRVlfQ09ERSkge1xuICAgIGtleUV2ZW50cy5vbkN0cmxLZXlEb3duKCk7XG4gIH0gZWxzZSBpZiAoa2V5Q29kZSA9PT0gU0hJRlRfS0VZX0NPREUpIHtcbiAgICBrZXlFdmVudHMub25TaGlmdEtleURvd24oKTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBrZXlFdmVudHM7XG4iXX0=
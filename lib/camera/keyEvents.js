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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jYW1lcmEva2V5RXZlbnRzLmpzIl0sIm5hbWVzIjpbImNvbnN0YW50cyIsInJlcXVpcmUiLCJDVFJMX0tFWV9DT0RFIiwiU0hJRlRfS0VZX0NPREUiLCJLZXlFdmVudHMiLCJoYW5kbGVycyIsImN0cmxLZXlEb3duIiwiY3RybEtleUhhbmRsZXJzIiwiZm9yRWFjaCIsImN0cmxLZXlIYW5kbGVyIiwic2hpZnRLZXlEb3duIiwic2hpZnRLZXlIYW5kbGVycyIsInNoaWZ0S2V5SGFuZGxlciIsInB1c2giLCJrZXlFdmVudHMiLCJmcm9tTm90aGluZyIsIm1vZHVsZSIsImV4cG9ydHMiLCJkb2N1bWVudERPTUVsZW1lbnQiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsIm9ua2V5dXAiLCJldmVudCIsImtleUNvZGUiLCJvbkN0cmxLZXlVcCIsIm9uU2hpZnRLZXlVcCIsIm9ua2V5ZG93biIsIm9uQ3RybEtleURvd24iLCJvblNoaWZ0S2V5RG93biJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFlBQVlDLFFBQVEsY0FBUixDQUFsQjs7SUFFUUMsYSxHQUFrQ0YsUyxDQUFsQ0UsYTtJQUFlQyxjLEdBQW1CSCxTLENBQW5CRyxjOztJQUVqQkMsUztBQUNKLHFCQUFZQyxRQUFaLEVBQXNCO0FBQUE7O0FBQ3BCLFNBQUtBLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0Q7Ozs7a0NBRWE7QUFDWixVQUFNQyxjQUFjLEtBQXBCO0FBQUEsVUFDTUMsa0JBQWtCLEtBQUtGLFFBQUwsQ0FBY0gsYUFBZCxDQUR4Qjs7QUFHQUssc0JBQWdCQyxPQUFoQixDQUF3QixVQUFTQyxjQUFULEVBQXlCO0FBQy9DQSx1QkFBZUgsV0FBZjtBQUNELE9BRkQ7QUFHRDs7O21DQUVjO0FBQ2IsVUFBTUksZUFBZSxLQUFyQjtBQUFBLFVBQ01DLG1CQUFtQixLQUFLTixRQUFMLENBQWNGLGNBQWQsQ0FEekI7O0FBR0FRLHVCQUFpQkgsT0FBakIsQ0FBeUIsVUFBU0ksZUFBVCxFQUEwQjtBQUNqREEsd0JBQWdCRixZQUFoQjtBQUNELE9BRkQ7QUFHRDs7O29DQUVlO0FBQ2QsVUFBTUosY0FBYyxJQUFwQjtBQUFBLFVBQ01DLGtCQUFrQixLQUFLRixRQUFMLENBQWNILGFBQWQsQ0FEeEI7O0FBR0FLLHNCQUFnQkMsT0FBaEIsQ0FBd0IsVUFBU0MsY0FBVCxFQUF5QjtBQUMvQ0EsdUJBQWVILFdBQWY7QUFDRCxPQUZEO0FBR0Q7OztxQ0FFZ0I7QUFDZixVQUFNSSxlQUFlLElBQXJCO0FBQUEsVUFDTUMsbUJBQW1CLEtBQUtOLFFBQUwsQ0FBY0YsY0FBZCxDQUR6Qjs7QUFHQVEsdUJBQWlCSCxPQUFqQixDQUF5QixVQUFTSSxlQUFULEVBQTBCO0FBQ2pEQSx3QkFBZ0JGLFlBQWhCO0FBQ0QsT0FGRDtBQUdEOzs7c0NBRWlCRCxjLEVBQWdCO0FBQ2hDLFVBQU1GLGtCQUFrQixLQUFLRixRQUFMLENBQWNILGFBQWQsQ0FBeEI7O0FBRUFLLHNCQUFnQk0sSUFBaEIsQ0FBcUJKLGNBQXJCO0FBQ0Q7Ozt1Q0FFa0JHLGUsRUFBaUI7QUFDbEMsVUFBTUQsbUJBQW1CLEtBQUtOLFFBQUwsQ0FBY0YsY0FBZCxDQUF6Qjs7QUFFQVEsdUJBQWlCRSxJQUFqQixDQUFzQkQsZUFBdEI7QUFDRDs7O2tDQUVvQjtBQUNuQixVQUFNUCxXQUFXLEVBQWpCO0FBQUEsVUFDTVMsWUFBWSxJQUFJVixTQUFKLENBQWNDLFFBQWQsQ0FEbEI7O0FBR0FBLGVBQVNILGFBQVQsSUFBMEIsRUFBMUI7QUFDQUcsZUFBU0YsY0FBVCxJQUEyQixFQUEzQjs7QUFFQSxhQUFPVyxTQUFQO0FBQ0Q7Ozs7OztBQUdILElBQU1BLFlBQVlWLFVBQVVXLFdBQVYsRUFBbEI7O0FBRUFDLE9BQU9DLE9BQVAsR0FBaUJILFNBQWpCOztBQUVBLElBQU1JLHFCQUFxQkMsU0FBU0MsZUFBcEM7O0FBRUFGLG1CQUFtQkcsT0FBbkIsR0FBNkIsVUFBU0MsS0FBVCxFQUFnQjtBQUMzQyxNQUFNQyxVQUFVRCxNQUFNQyxPQUF0Qjs7QUFFQSxNQUFJLEtBQUosRUFBVyxDQUVWLENBRkQsTUFFTyxJQUFJQSxZQUFZckIsYUFBaEIsRUFBK0I7QUFDcENZLGNBQVVVLFdBQVY7QUFDRCxHQUZNLE1BRUEsSUFBSUQsWUFBWXBCLGNBQWhCLEVBQWdDO0FBQ3JDVyxjQUFVVyxZQUFWO0FBQ0Q7QUFDRixDQVZEOztBQVlBUCxtQkFBbUJRLFNBQW5CLEdBQStCLFVBQVNKLEtBQVQsRUFBZ0I7QUFDN0MsTUFBTUMsVUFBVUQsTUFBTUMsT0FBdEI7O0FBRUEsTUFBSSxLQUFKLEVBQVcsQ0FFVixDQUZELE1BRU8sSUFBSUEsWUFBWXJCLGFBQWhCLEVBQStCO0FBQ3BDWSxjQUFVYSxhQUFWO0FBQ0QsR0FGTSxNQUVBLElBQUlKLFlBQVlwQixjQUFoQixFQUFnQztBQUNyQ1csY0FBVWMsY0FBVjtBQUNEO0FBQ0YsQ0FWRCIsImZpbGUiOiJrZXlFdmVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGNvbnN0YW50cyA9IHJlcXVpcmUoJy4uL2NvbnN0YW50cycpO1xuXG5jb25zdCB7IENUUkxfS0VZX0NPREUsIFNISUZUX0tFWV9DT0RFIH0gPSBjb25zdGFudHM7XG5cbmNsYXNzIEtleUV2ZW50cyB7XG4gIGNvbnN0cnVjdG9yKGhhbmRsZXJzKSB7XG4gICAgdGhpcy5oYW5kbGVycyA9IGhhbmRsZXJzO1xuICB9XG4gIFxuICBvbkN0cmxLZXlVcCgpIHtcbiAgICBjb25zdCBjdHJsS2V5RG93biA9IGZhbHNlLFxuICAgICAgICAgIGN0cmxLZXlIYW5kbGVycyA9IHRoaXMuaGFuZGxlcnNbQ1RSTF9LRVlfQ09ERV07XG5cbiAgICBjdHJsS2V5SGFuZGxlcnMuZm9yRWFjaChmdW5jdGlvbihjdHJsS2V5SGFuZGxlcikge1xuICAgICAgY3RybEtleUhhbmRsZXIoY3RybEtleURvd24pO1xuICAgIH0pO1xuICB9XG5cbiAgb25TaGlmdEtleVVwKCkge1xuICAgIGNvbnN0IHNoaWZ0S2V5RG93biA9IGZhbHNlLFxuICAgICAgICAgIHNoaWZ0S2V5SGFuZGxlcnMgPSB0aGlzLmhhbmRsZXJzW1NISUZUX0tFWV9DT0RFXTtcblxuICAgIHNoaWZ0S2V5SGFuZGxlcnMuZm9yRWFjaChmdW5jdGlvbihzaGlmdEtleUhhbmRsZXIpIHtcbiAgICAgIHNoaWZ0S2V5SGFuZGxlcihzaGlmdEtleURvd24pO1xuICAgIH0pO1xuICB9XG5cbiAgb25DdHJsS2V5RG93bigpIHtcbiAgICBjb25zdCBjdHJsS2V5RG93biA9IHRydWUsXG4gICAgICAgICAgY3RybEtleUhhbmRsZXJzID0gdGhpcy5oYW5kbGVyc1tDVFJMX0tFWV9DT0RFXTtcblxuICAgIGN0cmxLZXlIYW5kbGVycy5mb3JFYWNoKGZ1bmN0aW9uKGN0cmxLZXlIYW5kbGVyKSB7XG4gICAgICBjdHJsS2V5SGFuZGxlcihjdHJsS2V5RG93bik7XG4gICAgfSk7XG4gIH1cblxuICBvblNoaWZ0S2V5RG93bigpIHtcbiAgICBjb25zdCBzaGlmdEtleURvd24gPSB0cnVlLFxuICAgICAgICAgIHNoaWZ0S2V5SGFuZGxlcnMgPSB0aGlzLmhhbmRsZXJzW1NISUZUX0tFWV9DT0RFXTtcblxuICAgIHNoaWZ0S2V5SGFuZGxlcnMuZm9yRWFjaChmdW5jdGlvbihzaGlmdEtleUhhbmRsZXIpIHtcbiAgICAgIHNoaWZ0S2V5SGFuZGxlcihzaGlmdEtleURvd24pO1xuICAgIH0pO1xuICB9XG5cbiAgYWRkQ3RybEtleUhhbmRsZXIoY3RybEtleUhhbmRsZXIpIHtcbiAgICBjb25zdCBjdHJsS2V5SGFuZGxlcnMgPSB0aGlzLmhhbmRsZXJzW0NUUkxfS0VZX0NPREVdO1xuXG4gICAgY3RybEtleUhhbmRsZXJzLnB1c2goY3RybEtleUhhbmRsZXIpO1xuICB9XG5cbiAgYWRkU2hpZnRLZXlIYW5kbGVyKHNoaWZ0S2V5SGFuZGxlcikge1xuICAgIGNvbnN0IHNoaWZ0S2V5SGFuZGxlcnMgPSB0aGlzLmhhbmRsZXJzW1NISUZUX0tFWV9DT0RFXTtcblxuICAgIHNoaWZ0S2V5SGFuZGxlcnMucHVzaChzaGlmdEtleUhhbmRsZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IGhhbmRsZXJzID0ge30sXG4gICAgICAgICAga2V5RXZlbnRzID0gbmV3IEtleUV2ZW50cyhoYW5kbGVycyk7XG4gICAgXG4gICAgaGFuZGxlcnNbQ1RSTF9LRVlfQ09ERV0gPSBbXTtcbiAgICBoYW5kbGVyc1tTSElGVF9LRVlfQ09ERV0gPSBbXTtcblxuICAgIHJldHVybiBrZXlFdmVudHM7XG4gIH1cbn1cblxuY29uc3Qga2V5RXZlbnRzID0gS2V5RXZlbnRzLmZyb21Ob3RoaW5nKCk7XG5cbm1vZHVsZS5leHBvcnRzID0ga2V5RXZlbnRzO1xuXG5jb25zdCBkb2N1bWVudERPTUVsZW1lbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cbmRvY3VtZW50RE9NRWxlbWVudC5vbmtleXVwID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgY29uc3Qga2V5Q29kZSA9IGV2ZW50LmtleUNvZGU7XG5cbiAgaWYgKGZhbHNlKSB7XG5cbiAgfSBlbHNlIGlmIChrZXlDb2RlID09PSBDVFJMX0tFWV9DT0RFKSB7XG4gICAga2V5RXZlbnRzLm9uQ3RybEtleVVwKCk7XG4gIH0gZWxzZSBpZiAoa2V5Q29kZSA9PT0gU0hJRlRfS0VZX0NPREUpIHtcbiAgICBrZXlFdmVudHMub25TaGlmdEtleVVwKCk7XG4gIH1cbn07XG5cbmRvY3VtZW50RE9NRWxlbWVudC5vbmtleWRvd24gPSBmdW5jdGlvbihldmVudCkge1xuICBjb25zdCBrZXlDb2RlID0gZXZlbnQua2V5Q29kZTtcblxuICBpZiAoZmFsc2UpIHtcblxuICB9IGVsc2UgaWYgKGtleUNvZGUgPT09IENUUkxfS0VZX0NPREUpIHtcbiAgICBrZXlFdmVudHMub25DdHJsS2V5RG93bigpO1xuICB9IGVsc2UgaWYgKGtleUNvZGUgPT09IFNISUZUX0tFWV9DT0RFKSB7XG4gICAga2V5RXZlbnRzLm9uU2hpZnRLZXlEb3duKCk7XG4gIH1cbn07XG4iXX0=
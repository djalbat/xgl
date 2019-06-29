'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var constants = require('../constants');

var SHIFT_KEY_CODE = constants.SHIFT_KEY_CODE;

var KeyEvents = function () {
  function KeyEvents(handlers, shiftKeyDown) {
    _classCallCheck(this, KeyEvents);

    this.handlers = handlers;
    this.shiftKeyDown = shiftKeyDown;
  }

  _createClass(KeyEvents, [{
    key: 'isShiftKeyDown',
    value: function isShiftKeyDown() {
      return this.shiftKeyDown;
    }
  }, {
    key: 'keyUpEventListener',
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
    key: 'keyDownEventListener',
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
    key: 'addShiftKeyHandler',
    value: function addShiftKeyHandler(shiftKeyHandler) {
      var handler = shiftKeyHandler; ///

      this.handlers.push(handler);
    }
  }, {
    key: 'initialise',
    value: function initialise(canvas) {
      var documentDOMElement = document.documentElement,
          ///
      keyUpEventListener = this.keyUpEventListener.bind(this),
          keyDownEventListener = this.keyDownEventListener.bind(this);

      documentDOMElement.addEventListener('keyup', keyUpEventListener);

      documentDOMElement.addEventListener('keydown', keyDownEventListener);
    }
  }], [{
    key: 'fromNothing',
    value: function fromNothing(canvas) {
      var handlers = [],
          shiftKeyDown = false,
          ///
      keyEvents = new KeyEvents(handlers, shiftKeyDown);

      keyEvents.initialise(canvas);

      return keyEvents;
    }
  }]);

  return KeyEvents;
}();

module.exports = KeyEvents;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9taXNjZWxsYW5lb3VzL2tleUV2ZW50cy5qcyJdLCJuYW1lcyI6WyJjb25zdGFudHMiLCJyZXF1aXJlIiwiU0hJRlRfS0VZX0NPREUiLCJLZXlFdmVudHMiLCJoYW5kbGVycyIsInNoaWZ0S2V5RG93biIsImV2ZW50Iiwia2V5Q29kZSIsImZvckVhY2giLCJoYW5kbGVyIiwic2hpZnRLZXlIYW5kbGVyIiwicHVzaCIsImNhbnZhcyIsImRvY3VtZW50RE9NRWxlbWVudCIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50Iiwia2V5VXBFdmVudExpc3RlbmVyIiwiYmluZCIsImtleURvd25FdmVudExpc3RlbmVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsImtleUV2ZW50cyIsImluaXRpYWxpc2UiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsWUFBWUMsUUFBUSxjQUFSLENBQWxCOztJQUVRQyxjLEdBQW1CRixTLENBQW5CRSxjOztJQUVGQyxTO0FBQ0oscUJBQVlDLFFBQVosRUFBc0JDLFlBQXRCLEVBQW9DO0FBQUE7O0FBQ2xDLFNBQUtELFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsU0FBS0MsWUFBTCxHQUFvQkEsWUFBcEI7QUFDRDs7OztxQ0FFZ0I7QUFDZixhQUFPLEtBQUtBLFlBQVo7QUFDRDs7O3VDQUVrQkMsSyxFQUFPO0FBQUE7O0FBQUEsVUFDaEJDLE9BRGdCLEdBQ0pELEtBREksQ0FDaEJDLE9BRGdCOzs7QUFHeEIsVUFBSUEsWUFBWUwsY0FBaEIsRUFBZ0M7QUFDOUIsYUFBS0csWUFBTCxHQUFvQixLQUFwQjs7QUFFQSxhQUFLRCxRQUFMLENBQWNJLE9BQWQsQ0FBc0IsVUFBQ0MsT0FBRDtBQUFBLGlCQUFhQSxRQUFRLE1BQUtKLFlBQWIsQ0FBYjtBQUFBLFNBQXRCO0FBQ0Q7QUFDRjs7O3lDQUVvQkMsSyxFQUFPO0FBQUE7O0FBQUEsVUFDbEJDLE9BRGtCLEdBQ05ELEtBRE0sQ0FDbEJDLE9BRGtCOzs7QUFHMUIsVUFBSUEsWUFBWUwsY0FBaEIsRUFBZ0M7QUFDOUIsYUFBS0csWUFBTCxHQUFvQixJQUFwQjs7QUFFQSxhQUFLRCxRQUFMLENBQWNJLE9BQWQsQ0FBc0IsVUFBQ0MsT0FBRDtBQUFBLGlCQUFhQSxRQUFRLE9BQUtKLFlBQWIsQ0FBYjtBQUFBLFNBQXRCO0FBQ0Q7QUFDRjs7O3VDQUVrQkssZSxFQUFpQjtBQUNsQyxVQUFNRCxVQUFVQyxlQUFoQixDQURrQyxDQUNBOztBQUVsQyxXQUFLTixRQUFMLENBQWNPLElBQWQsQ0FBbUJGLE9BQW5CO0FBQ0Q7OzsrQkFFVUcsTSxFQUFRO0FBQ2pCLFVBQU1DLHFCQUFxQkMsU0FBU0MsZUFBcEM7QUFBQSxVQUFzRDtBQUNoREMsMkJBQXFCLEtBQUtBLGtCQUFMLENBQXdCQyxJQUF4QixDQUE2QixJQUE3QixDQUQzQjtBQUFBLFVBRU1DLHVCQUF1QixLQUFLQSxvQkFBTCxDQUEwQkQsSUFBMUIsQ0FBK0IsSUFBL0IsQ0FGN0I7O0FBSUFKLHlCQUFtQk0sZ0JBQW5CLENBQW9DLE9BQXBDLEVBQTZDSCxrQkFBN0M7O0FBRUFILHlCQUFtQk0sZ0JBQW5CLENBQW9DLFNBQXBDLEVBQStDRCxvQkFBL0M7QUFDRDs7O2dDQUVrQk4sTSxFQUFRO0FBQ3pCLFVBQU1SLFdBQVcsRUFBakI7QUFBQSxVQUNNQyxlQUFlLEtBRHJCO0FBQUEsVUFDNkI7QUFDdkJlLGtCQUFZLElBQUlqQixTQUFKLENBQWNDLFFBQWQsRUFBd0JDLFlBQXhCLENBRmxCOztBQUlBZSxnQkFBVUMsVUFBVixDQUFxQlQsTUFBckI7O0FBRUEsYUFBT1EsU0FBUDtBQUNEOzs7Ozs7QUFHSEUsT0FBT0MsT0FBUCxHQUFpQnBCLFNBQWpCIiwiZmlsZSI6ImtleUV2ZW50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgY29uc3RhbnRzID0gcmVxdWlyZSgnLi4vY29uc3RhbnRzJyk7XG5cbmNvbnN0IHsgU0hJRlRfS0VZX0NPREUgfSA9IGNvbnN0YW50cztcblxuY2xhc3MgS2V5RXZlbnRzIHtcbiAgY29uc3RydWN0b3IoaGFuZGxlcnMsIHNoaWZ0S2V5RG93bikge1xuICAgIHRoaXMuaGFuZGxlcnMgPSBoYW5kbGVycztcbiAgICB0aGlzLnNoaWZ0S2V5RG93biA9IHNoaWZ0S2V5RG93bjtcbiAgfVxuXG4gIGlzU2hpZnRLZXlEb3duKCkge1xuICAgIHJldHVybiB0aGlzLnNoaWZ0S2V5RG93bjtcbiAgfVxuXG4gIGtleVVwRXZlbnRMaXN0ZW5lcihldmVudCkge1xuICAgIGNvbnN0IHsga2V5Q29kZSB9ID0gZXZlbnQ7XG5cbiAgICBpZiAoa2V5Q29kZSA9PT0gU0hJRlRfS0VZX0NPREUpIHtcbiAgICAgIHRoaXMuc2hpZnRLZXlEb3duID0gZmFsc2U7XG5cbiAgICAgIHRoaXMuaGFuZGxlcnMuZm9yRWFjaCgoaGFuZGxlcikgPT4gaGFuZGxlcih0aGlzLnNoaWZ0S2V5RG93bikpO1xuICAgIH1cbiAgfVxuXG4gIGtleURvd25FdmVudExpc3RlbmVyKGV2ZW50KSB7XG4gICAgY29uc3QgeyBrZXlDb2RlIH0gPSBldmVudDtcblxuICAgIGlmIChrZXlDb2RlID09PSBTSElGVF9LRVlfQ09ERSkge1xuICAgICAgdGhpcy5zaGlmdEtleURvd24gPSB0cnVlO1xuXG4gICAgICB0aGlzLmhhbmRsZXJzLmZvckVhY2goKGhhbmRsZXIpID0+IGhhbmRsZXIodGhpcy5zaGlmdEtleURvd24pKTtcbiAgICB9XG4gIH1cblxuICBhZGRTaGlmdEtleUhhbmRsZXIoc2hpZnRLZXlIYW5kbGVyKSB7XG4gICAgY29uc3QgaGFuZGxlciA9IHNoaWZ0S2V5SGFuZGxlcjsgIC8vL1xuXG4gICAgdGhpcy5oYW5kbGVycy5wdXNoKGhhbmRsZXIpO1xuICB9XG5cbiAgaW5pdGlhbGlzZShjYW52YXMpIHtcbiAgICBjb25zdCBkb2N1bWVudERPTUVsZW1lbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsICAvLy9cbiAgICAgICAgICBrZXlVcEV2ZW50TGlzdGVuZXIgPSB0aGlzLmtleVVwRXZlbnRMaXN0ZW5lci5iaW5kKHRoaXMpLFxuICAgICAgICAgIGtleURvd25FdmVudExpc3RlbmVyID0gdGhpcy5rZXlEb3duRXZlbnRMaXN0ZW5lci5iaW5kKHRoaXMpO1xuXG4gICAgZG9jdW1lbnRET01FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywga2V5VXBFdmVudExpc3RlbmVyKTtcblxuICAgIGRvY3VtZW50RE9NRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywga2V5RG93bkV2ZW50TGlzdGVuZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKGNhbnZhcykge1xuICAgIGNvbnN0IGhhbmRsZXJzID0gW10sXG4gICAgICAgICAgc2hpZnRLZXlEb3duID0gZmFsc2UsICAvLy9cbiAgICAgICAgICBrZXlFdmVudHMgPSBuZXcgS2V5RXZlbnRzKGhhbmRsZXJzLCBzaGlmdEtleURvd24pO1xuXG4gICAga2V5RXZlbnRzLmluaXRpYWxpc2UoY2FudmFzKTtcblxuICAgIHJldHVybiBrZXlFdmVudHM7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBLZXlFdmVudHM7XG4iXX0=
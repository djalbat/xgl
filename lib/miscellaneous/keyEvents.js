'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var constants = require('../constants');

var SHIFT_KEY_CODE = constants.SHIFT_KEY_CODE;

var KeyEvents = function () {
  function KeyEvents(shiftKeyDown, shiftKeyHandlers) {
    _classCallCheck(this, KeyEvents);

    this.shiftKeyDown = shiftKeyDown;
    this.shiftKeyHandlers = shiftKeyHandlers;
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

        this.shiftKeyHandlers.forEach(function (shiftKeyHandler) {
          return shiftKeyHandler(_this.shiftKeyDown);
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

        this.shiftKeyHandlers.forEach(function (shiftKeyHandler) {
          return shiftKeyHandler(_this2.shiftKeyDown);
        });
      }
    }
  }, {
    key: 'addShiftKeyHandler',
    value: function addShiftKeyHandler(shiftKeyHandler) {
      this.shiftKeyHandlers.push(shiftKeyHandler);
    }
  }, {
    key: 'initialise',
    value: function initialise() {
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
      var shiftKeyDown = false,
          ///
      shiftKeyHandlers = [],
          keyEvents = new KeyEvents(shiftKeyDown, shiftKeyHandlers);

      keyEvents.initialise();

      return keyEvents;
    }
  }]);

  return KeyEvents;
}();

module.exports = KeyEvents;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9taXNjZWxsYW5lb3VzL2tleUV2ZW50cy5qcyJdLCJuYW1lcyI6WyJjb25zdGFudHMiLCJyZXF1aXJlIiwiU0hJRlRfS0VZX0NPREUiLCJLZXlFdmVudHMiLCJzaGlmdEtleURvd24iLCJzaGlmdEtleUhhbmRsZXJzIiwiZXZlbnQiLCJrZXlDb2RlIiwiZm9yRWFjaCIsInNoaWZ0S2V5SGFuZGxlciIsInB1c2giLCJkb2N1bWVudERPTUVsZW1lbnQiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsImtleVVwRXZlbnRMaXN0ZW5lciIsImJpbmQiLCJrZXlEb3duRXZlbnRMaXN0ZW5lciIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW52YXMiLCJrZXlFdmVudHMiLCJpbml0aWFsaXNlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFlBQVlDLFFBQVEsY0FBUixDQUFsQjs7SUFFUUMsYyxHQUFtQkYsUyxDQUFuQkUsYzs7SUFFRkMsUztBQUNKLHFCQUFZQyxZQUFaLEVBQTBCQyxnQkFBMUIsRUFBNEM7QUFBQTs7QUFDMUMsU0FBS0QsWUFBTCxHQUFvQkEsWUFBcEI7QUFDQSxTQUFLQyxnQkFBTCxHQUF3QkEsZ0JBQXhCO0FBQ0Q7Ozs7cUNBRWdCO0FBQ2YsYUFBTyxLQUFLRCxZQUFaO0FBQ0Q7Ozt1Q0FFa0JFLEssRUFBTztBQUFBOztBQUFBLFVBQ2hCQyxPQURnQixHQUNKRCxLQURJLENBQ2hCQyxPQURnQjs7O0FBR3hCLFVBQUlBLFlBQVlMLGNBQWhCLEVBQWdDO0FBQzlCLGFBQUtFLFlBQUwsR0FBb0IsS0FBcEI7O0FBRUEsYUFBS0MsZ0JBQUwsQ0FBc0JHLE9BQXRCLENBQThCLFVBQUNDLGVBQUQ7QUFBQSxpQkFBcUJBLGdCQUFnQixNQUFLTCxZQUFyQixDQUFyQjtBQUFBLFNBQTlCO0FBQ0Q7QUFDRjs7O3lDQUVvQkUsSyxFQUFPO0FBQUE7O0FBQUEsVUFDbEJDLE9BRGtCLEdBQ05ELEtBRE0sQ0FDbEJDLE9BRGtCOzs7QUFHMUIsVUFBSUEsWUFBWUwsY0FBaEIsRUFBZ0M7QUFDOUIsYUFBS0UsWUFBTCxHQUFvQixJQUFwQjs7QUFFQSxhQUFLQyxnQkFBTCxDQUFzQkcsT0FBdEIsQ0FBOEIsVUFBQ0MsZUFBRDtBQUFBLGlCQUFxQkEsZ0JBQWdCLE9BQUtMLFlBQXJCLENBQXJCO0FBQUEsU0FBOUI7QUFDRDtBQUNGOzs7dUNBRWtCSyxlLEVBQWlCO0FBQ2xDLFdBQUtKLGdCQUFMLENBQXNCSyxJQUF0QixDQUEyQkQsZUFBM0I7QUFDRDs7O2lDQUVZO0FBQ1gsVUFBTUUscUJBQXFCQyxTQUFTQyxlQUFwQztBQUFBLFVBQXNEO0FBQ2hEQywyQkFBcUIsS0FBS0Esa0JBQUwsQ0FBd0JDLElBQXhCLENBQTZCLElBQTdCLENBRDNCO0FBQUEsVUFFTUMsdUJBQXVCLEtBQUtBLG9CQUFMLENBQTBCRCxJQUExQixDQUErQixJQUEvQixDQUY3Qjs7QUFJQUoseUJBQW1CTSxnQkFBbkIsQ0FBb0MsT0FBcEMsRUFBNkNILGtCQUE3Qzs7QUFFQUgseUJBQW1CTSxnQkFBbkIsQ0FBb0MsU0FBcEMsRUFBK0NELG9CQUEvQztBQUNEOzs7Z0NBRWtCRSxNLEVBQVE7QUFDekIsVUFBTWQsZUFBZSxLQUFyQjtBQUFBLFVBQTZCO0FBQ3ZCQyx5QkFBbUIsRUFEekI7QUFBQSxVQUVNYyxZQUFZLElBQUloQixTQUFKLENBQWNDLFlBQWQsRUFBNEJDLGdCQUE1QixDQUZsQjs7QUFJQWMsZ0JBQVVDLFVBQVY7O0FBRUEsYUFBT0QsU0FBUDtBQUNEOzs7Ozs7QUFHSEUsT0FBT0MsT0FBUCxHQUFpQm5CLFNBQWpCIiwiZmlsZSI6ImtleUV2ZW50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgY29uc3RhbnRzID0gcmVxdWlyZSgnLi4vY29uc3RhbnRzJyk7XG5cbmNvbnN0IHsgU0hJRlRfS0VZX0NPREUgfSA9IGNvbnN0YW50cztcblxuY2xhc3MgS2V5RXZlbnRzIHtcbiAgY29uc3RydWN0b3Ioc2hpZnRLZXlEb3duLCBzaGlmdEtleUhhbmRsZXJzKSB7XG4gICAgdGhpcy5zaGlmdEtleURvd24gPSBzaGlmdEtleURvd247XG4gICAgdGhpcy5zaGlmdEtleUhhbmRsZXJzID0gc2hpZnRLZXlIYW5kbGVycztcbiAgfVxuXG4gIGlzU2hpZnRLZXlEb3duKCkge1xuICAgIHJldHVybiB0aGlzLnNoaWZ0S2V5RG93bjtcbiAgfVxuXG4gIGtleVVwRXZlbnRMaXN0ZW5lcihldmVudCkge1xuICAgIGNvbnN0IHsga2V5Q29kZSB9ID0gZXZlbnQ7XG5cbiAgICBpZiAoa2V5Q29kZSA9PT0gU0hJRlRfS0VZX0NPREUpIHtcbiAgICAgIHRoaXMuc2hpZnRLZXlEb3duID0gZmFsc2U7XG5cbiAgICAgIHRoaXMuc2hpZnRLZXlIYW5kbGVycy5mb3JFYWNoKChzaGlmdEtleUhhbmRsZXIpID0+IHNoaWZ0S2V5SGFuZGxlcih0aGlzLnNoaWZ0S2V5RG93bikpO1xuICAgIH1cbiAgfVxuXG4gIGtleURvd25FdmVudExpc3RlbmVyKGV2ZW50KSB7XG4gICAgY29uc3QgeyBrZXlDb2RlIH0gPSBldmVudDtcblxuICAgIGlmIChrZXlDb2RlID09PSBTSElGVF9LRVlfQ09ERSkge1xuICAgICAgdGhpcy5zaGlmdEtleURvd24gPSB0cnVlO1xuXG4gICAgICB0aGlzLnNoaWZ0S2V5SGFuZGxlcnMuZm9yRWFjaCgoc2hpZnRLZXlIYW5kbGVyKSA9PiBzaGlmdEtleUhhbmRsZXIodGhpcy5zaGlmdEtleURvd24pKTtcbiAgICB9XG4gIH1cblxuICBhZGRTaGlmdEtleUhhbmRsZXIoc2hpZnRLZXlIYW5kbGVyKSB7XG4gICAgdGhpcy5zaGlmdEtleUhhbmRsZXJzLnB1c2goc2hpZnRLZXlIYW5kbGVyKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgY29uc3QgZG9jdW1lbnRET01FbGVtZW50ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCAgLy8vXG4gICAgICAgICAga2V5VXBFdmVudExpc3RlbmVyID0gdGhpcy5rZXlVcEV2ZW50TGlzdGVuZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICBrZXlEb3duRXZlbnRMaXN0ZW5lciA9IHRoaXMua2V5RG93bkV2ZW50TGlzdGVuZXIuYmluZCh0aGlzKTtcblxuICAgIGRvY3VtZW50RE9NRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGtleVVwRXZlbnRMaXN0ZW5lcik7XG5cbiAgICBkb2N1bWVudERPTUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGtleURvd25FdmVudExpc3RlbmVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZyhjYW52YXMpIHtcbiAgICBjb25zdCBzaGlmdEtleURvd24gPSBmYWxzZSwgIC8vL1xuICAgICAgICAgIHNoaWZ0S2V5SGFuZGxlcnMgPSBbXSxcbiAgICAgICAgICBrZXlFdmVudHMgPSBuZXcgS2V5RXZlbnRzKHNoaWZ0S2V5RG93biwgc2hpZnRLZXlIYW5kbGVycyk7XG5cbiAgICBrZXlFdmVudHMuaW5pdGlhbGlzZSgpO1xuXG4gICAgcmV0dXJuIGtleUV2ZW50cztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEtleUV2ZW50cztcbiJdfQ==
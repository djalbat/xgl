'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var constants = require('../constants');

var SHIFT_KEY_CODE = constants.SHIFT_KEY_CODE;

var KeyEvents = function () {
  function KeyEvents(handlersMap, shiftKeyDown) {
    _classCallCheck(this, KeyEvents);

    this.handlersMap = handlersMap;
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
      var keyCode = event.keyCode;

      switch (keyCode) {
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
        case SHIFT_KEY_CODE:
          this.shiftKeyDownEventListener();
          break;
      }
    }
  }, {
    key: 'shiftKeyUpEventListener',
    value: function shiftKeyUpEventListener() {
      var _this = this;

      this.shiftKeyDown = false;

      var shiftKeyHandlers = this.handlersMap[SHIFT_KEY_CODE];

      shiftKeyHandlers.forEach(function (shiftKeyHandler) {
        return shiftKeyHandler(_this.shiftKeyDown);
      });
    }
  }, {
    key: 'shiftKeyDownEventListener',
    value: function shiftKeyDownEventListener() {
      var _this2 = this;

      this.shiftKeyDown = true;

      var shiftKeyHandlers = this.handlersMap[SHIFT_KEY_CODE];

      shiftKeyHandlers.forEach(function (shiftKeyHandler) {
        return shiftKeyHandler(_this2.shiftKeyDown);
      });
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

      handlersMap[SHIFT_KEY_CODE] = [];

      var shiftKeyDown = false,
          ///
      keyEvents = new KeyEvents(handlersMap, shiftKeyDown),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9taXNjZWxsYW5lb3VzL2tleUV2ZW50cy5qcyJdLCJuYW1lcyI6WyJjb25zdGFudHMiLCJyZXF1aXJlIiwiU0hJRlRfS0VZX0NPREUiLCJLZXlFdmVudHMiLCJoYW5kbGVyc01hcCIsInNoaWZ0S2V5RG93biIsImV2ZW50Iiwia2V5Q29kZSIsInNoaWZ0S2V5VXBFdmVudExpc3RlbmVyIiwic2hpZnRLZXlEb3duRXZlbnRMaXN0ZW5lciIsInNoaWZ0S2V5SGFuZGxlcnMiLCJmb3JFYWNoIiwic2hpZnRLZXlIYW5kbGVyIiwicHVzaCIsImNhbnZhcyIsImtleUV2ZW50cyIsImtleVVwRXZlbnRMaXN0ZW5lciIsImJpbmQiLCJrZXlEb3duRXZlbnRMaXN0ZW5lciIsImRvY3VtZW50RE9NRWxlbWVudCIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxZQUFZQyxRQUFRLGNBQVIsQ0FBbEI7O0lBRVFDLGMsR0FBbUJGLFMsQ0FBbkJFLGM7O0lBRUZDLFM7QUFDSixxQkFBWUMsV0FBWixFQUF5QkMsWUFBekIsRUFBdUM7QUFBQTs7QUFDckMsU0FBS0QsV0FBTCxHQUFtQkEsV0FBbkI7QUFDQSxTQUFLQyxZQUFMLEdBQW9CQSxZQUFwQjtBQUNEOzs7O3FDQUVnQjtBQUNmLGFBQU8sS0FBS0EsWUFBWjtBQUNEOzs7dUNBRWtCQyxLLEVBQU87QUFDeEIsVUFBTUMsVUFBVUQsTUFBTUMsT0FBdEI7O0FBRUEsY0FBUUEsT0FBUjtBQUNFLGFBQUtMLGNBQUw7QUFDRSxlQUFLTSx1QkFBTDtBQUNBO0FBSEo7QUFLRDs7O3lDQUVvQkYsSyxFQUFPO0FBQzFCLFVBQU1DLFVBQVVELE1BQU1DLE9BQXRCOztBQUVBLGNBQVFBLE9BQVI7QUFDRSxhQUFLTCxjQUFMO0FBQ0UsZUFBS08seUJBQUw7QUFDQTtBQUhKO0FBS0Q7Ozs4Q0FFeUI7QUFBQTs7QUFDeEIsV0FBS0osWUFBTCxHQUFvQixLQUFwQjs7QUFFQSxVQUFNSyxtQkFBbUIsS0FBS04sV0FBTCxDQUFrQkYsY0FBbEIsQ0FBekI7O0FBRUFRLHVCQUFpQkMsT0FBakIsQ0FBeUIsVUFBQ0MsZUFBRDtBQUFBLGVBQXFCQSxnQkFBZ0IsTUFBS1AsWUFBckIsQ0FBckI7QUFBQSxPQUF6QjtBQUNEOzs7Z0RBRTJCO0FBQUE7O0FBQzFCLFdBQUtBLFlBQUwsR0FBb0IsSUFBcEI7O0FBRUEsVUFBTUssbUJBQW1CLEtBQUtOLFdBQUwsQ0FBa0JGLGNBQWxCLENBQXpCOztBQUVBUSx1QkFBaUJDLE9BQWpCLENBQXlCLFVBQUNDLGVBQUQ7QUFBQSxlQUFxQkEsZ0JBQWdCLE9BQUtQLFlBQXJCLENBQXJCO0FBQUEsT0FBekI7QUFDRDs7O3VDQUVrQk8sZSxFQUFpQjtBQUNsQyxVQUFNRixtQkFBbUIsS0FBS04sV0FBTCxDQUFrQkYsY0FBbEIsQ0FBekI7O0FBRUFRLHVCQUFpQkcsSUFBakIsQ0FBc0JELGVBQXRCO0FBQ0Q7OztnQ0FFa0JFLE0sRUFBUTtBQUN6QixVQUFNVixjQUFjLEVBQXBCOztBQUVBQSxrQkFBYUYsY0FBYixJQUFnQyxFQUFoQzs7QUFFQSxVQUFNRyxlQUFlLEtBQXJCO0FBQUEsVUFBNkI7QUFDdkJVLGtCQUFZLElBQUlaLFNBQUosQ0FBY0MsV0FBZCxFQUEyQkMsWUFBM0IsQ0FEbEI7QUFBQSxVQUVNVyxxQkFBcUJELFVBQVVDLGtCQUFWLENBQTZCQyxJQUE3QixDQUFrQ0YsU0FBbEMsQ0FGM0I7QUFBQSxVQUdNRyx1QkFBdUJILFVBQVVHLG9CQUFWLENBQStCRCxJQUEvQixDQUFvQ0YsU0FBcEMsQ0FIN0I7QUFBQSxVQUlNSSxxQkFBcUJDLFNBQVNDLGVBSnBDLENBTHlCLENBUzZCOztBQUV0REYseUJBQW1CRyxnQkFBbkIsQ0FBb0MsT0FBcEMsRUFBNkNOLGtCQUE3QztBQUNBRyx5QkFBbUJHLGdCQUFuQixDQUFvQyxTQUFwQyxFQUErQ0osb0JBQS9DOztBQUVBLGFBQU9ILFNBQVA7QUFDRDs7Ozs7O0FBR0hRLE9BQU9DLE9BQVAsR0FBaUJyQixTQUFqQiIsImZpbGUiOiJrZXlFdmVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGNvbnN0YW50cyA9IHJlcXVpcmUoJy4uL2NvbnN0YW50cycpO1xuXG5jb25zdCB7IFNISUZUX0tFWV9DT0RFIH0gPSBjb25zdGFudHM7XG5cbmNsYXNzIEtleUV2ZW50cyB7XG4gIGNvbnN0cnVjdG9yKGhhbmRsZXJzTWFwLCBzaGlmdEtleURvd24pIHtcbiAgICB0aGlzLmhhbmRsZXJzTWFwID0gaGFuZGxlcnNNYXA7XG4gICAgdGhpcy5zaGlmdEtleURvd24gPSBzaGlmdEtleURvd247XG4gIH1cblxuICBpc1NoaWZ0S2V5RG93bigpIHtcbiAgICByZXR1cm4gdGhpcy5zaGlmdEtleURvd247XG4gIH1cblxuICBrZXlVcEV2ZW50TGlzdGVuZXIoZXZlbnQpIHtcbiAgICBjb25zdCBrZXlDb2RlID0gZXZlbnQua2V5Q29kZTtcblxuICAgIHN3aXRjaCAoa2V5Q29kZSkge1xuICAgICAgY2FzZSBTSElGVF9LRVlfQ09ERSA6XG4gICAgICAgIHRoaXMuc2hpZnRLZXlVcEV2ZW50TGlzdGVuZXIoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAga2V5RG93bkV2ZW50TGlzdGVuZXIoZXZlbnQpIHtcbiAgICBjb25zdCBrZXlDb2RlID0gZXZlbnQua2V5Q29kZTtcblxuICAgIHN3aXRjaCAoa2V5Q29kZSkge1xuICAgICAgY2FzZSBTSElGVF9LRVlfQ09ERSA6XG4gICAgICAgIHRoaXMuc2hpZnRLZXlEb3duRXZlbnRMaXN0ZW5lcigpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgXG4gIHNoaWZ0S2V5VXBFdmVudExpc3RlbmVyKCkge1xuICAgIHRoaXMuc2hpZnRLZXlEb3duID0gZmFsc2U7XG5cbiAgICBjb25zdCBzaGlmdEtleUhhbmRsZXJzID0gdGhpcy5oYW5kbGVyc01hcFsgU0hJRlRfS0VZX0NPREUgXTtcblxuICAgIHNoaWZ0S2V5SGFuZGxlcnMuZm9yRWFjaCgoc2hpZnRLZXlIYW5kbGVyKSA9PiBzaGlmdEtleUhhbmRsZXIodGhpcy5zaGlmdEtleURvd24pKTtcbiAgfVxuXG4gIHNoaWZ0S2V5RG93bkV2ZW50TGlzdGVuZXIoKSB7XG4gICAgdGhpcy5zaGlmdEtleURvd24gPSB0cnVlO1xuXG4gICAgY29uc3Qgc2hpZnRLZXlIYW5kbGVycyA9IHRoaXMuaGFuZGxlcnNNYXBbIFNISUZUX0tFWV9DT0RFIF07XG5cbiAgICBzaGlmdEtleUhhbmRsZXJzLmZvckVhY2goKHNoaWZ0S2V5SGFuZGxlcikgPT4gc2hpZnRLZXlIYW5kbGVyKHRoaXMuc2hpZnRLZXlEb3duKSk7XG4gIH1cblxuICBhZGRTaGlmdEtleUhhbmRsZXIoc2hpZnRLZXlIYW5kbGVyKSB7XG4gICAgY29uc3Qgc2hpZnRLZXlIYW5kbGVycyA9IHRoaXMuaGFuZGxlcnNNYXBbIFNISUZUX0tFWV9DT0RFIF07XG5cbiAgICBzaGlmdEtleUhhbmRsZXJzLnB1c2goc2hpZnRLZXlIYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZyhjYW52YXMpIHtcbiAgICBjb25zdCBoYW5kbGVyc01hcCA9IHt9O1xuICAgIFxuICAgIGhhbmRsZXJzTWFwWyBTSElGVF9LRVlfQ09ERSBdID0gW107XG5cbiAgICBjb25zdCBzaGlmdEtleURvd24gPSBmYWxzZSwgIC8vL1xuICAgICAgICAgIGtleUV2ZW50cyA9IG5ldyBLZXlFdmVudHMoaGFuZGxlcnNNYXAsIHNoaWZ0S2V5RG93biksXG4gICAgICAgICAga2V5VXBFdmVudExpc3RlbmVyID0ga2V5RXZlbnRzLmtleVVwRXZlbnRMaXN0ZW5lci5iaW5kKGtleUV2ZW50cyksXG4gICAgICAgICAga2V5RG93bkV2ZW50TGlzdGVuZXIgPSBrZXlFdmVudHMua2V5RG93bkV2ZW50TGlzdGVuZXIuYmluZChrZXlFdmVudHMpLFxuICAgICAgICAgIGRvY3VtZW50RE9NRWxlbWVudCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDsgIC8vL1xuXG4gICAgZG9jdW1lbnRET01FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywga2V5VXBFdmVudExpc3RlbmVyKTtcbiAgICBkb2N1bWVudERPTUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGtleURvd25FdmVudExpc3RlbmVyKTtcblxuICAgIHJldHVybiBrZXlFdmVudHM7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBLZXlFdmVudHM7XG4iXX0=
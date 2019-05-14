'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var constants = require('../constants');

var CTRL_KEY_CODE = constants.CTRL_KEY_CODE,
    SHIFT_KEY_CODE = constants.SHIFT_KEY_CODE;

var KeyEvents = function () {
  function KeyEvents(handlersMap) {
    _classCallCheck(this, KeyEvents);

    this.handlersMap = handlersMap;
  }

  _createClass(KeyEvents, [{
    key: 'keyUpHandler',
    value: function keyUpHandler(event) {
      var keyCode = event.keyCode;

      switch (keyCode) {
        case CTRL_KEY_CODE:
          this.ctrlKeyUpHandler();
          break;

        case SHIFT_KEY_CODE:
          this.shiftKeyUpHandler();
          break;
      }
    }
  }, {
    key: 'keyDownHandler',
    value: function keyDownHandler(event) {
      var keyCode = event.keyCode;

      switch (keyCode) {
        case CTRL_KEY_CODE:
          this.ctrlKeyDownHandler();
          break;

        case SHIFT_KEY_CODE:
          this.shiftKeyDownHandler();
          break;
      }
    }
  }, {
    key: 'ctrlKeyUpHandler',
    value: function ctrlKeyUpHandler() {
      var ctrlKeyDown = false,
          ctrlKeyHandlers = this.handlersMap[CTRL_KEY_CODE];

      ctrlKeyHandlers.forEach(function (ctrlKeyHandler) {
        return ctrlKeyHandler(ctrlKeyDown);
      });
    }
  }, {
    key: 'shiftKeyUpHandler',
    value: function shiftKeyUpHandler() {
      var shiftKeyDown = false,
          shiftKeyHandlers = this.handlersMap[SHIFT_KEY_CODE];

      shiftKeyHandlers.forEach(function (shiftKeyHandler) {
        return shiftKeyHandler(shiftKeyDown);
      });
    }
  }, {
    key: 'ctrlKeyDownHandler',
    value: function ctrlKeyDownHandler() {
      var ctrlKeyDown = true,
          ctrlKeyHandlers = this.handlersMap[CTRL_KEY_CODE];

      ctrlKeyHandlers.forEach(function (ctrlKeyHandler) {
        return ctrlKeyHandler(ctrlKeyDown);
      });
    }
  }, {
    key: 'shiftKeyDownHandler',
    value: function shiftKeyDownHandler() {
      var shiftKeyDown = true,
          shiftKeyHandlers = this.handlersMap[SHIFT_KEY_CODE];

      shiftKeyHandlers.forEach(function (shiftKeyHandler) {
        return shiftKeyHandler(shiftKeyDown);
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

      var keyEvents = new KeyEvents(handlersMap),
          keyUpHandler = keyEvents.keyUpHandler.bind(keyEvents),
          keyDownHandler = keyEvents.keyDownHandler.bind(keyEvents),
          documentDOMElement = document.documentElement; ///

      documentDOMElement.addEventListener('keyup', keyUpHandler);
      documentDOMElement.addEventListener('keydown', keyDownHandler);

      return keyEvents;
    }
  }]);

  return KeyEvents;
}();

module.exports = KeyEvents;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9taXNjZWxsYW5lb3VzL2tleUV2ZW50cy5qcyJdLCJuYW1lcyI6WyJjb25zdGFudHMiLCJyZXF1aXJlIiwiQ1RSTF9LRVlfQ09ERSIsIlNISUZUX0tFWV9DT0RFIiwiS2V5RXZlbnRzIiwiaGFuZGxlcnNNYXAiLCJldmVudCIsImtleUNvZGUiLCJjdHJsS2V5VXBIYW5kbGVyIiwic2hpZnRLZXlVcEhhbmRsZXIiLCJjdHJsS2V5RG93bkhhbmRsZXIiLCJzaGlmdEtleURvd25IYW5kbGVyIiwiY3RybEtleURvd24iLCJjdHJsS2V5SGFuZGxlcnMiLCJmb3JFYWNoIiwiY3RybEtleUhhbmRsZXIiLCJzaGlmdEtleURvd24iLCJzaGlmdEtleUhhbmRsZXJzIiwic2hpZnRLZXlIYW5kbGVyIiwicHVzaCIsImNhbnZhcyIsImtleUV2ZW50cyIsImtleVVwSGFuZGxlciIsImJpbmQiLCJrZXlEb3duSGFuZGxlciIsImRvY3VtZW50RE9NRWxlbWVudCIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxZQUFZQyxRQUFRLGNBQVIsQ0FBbEI7O0lBRVFDLGEsR0FBa0NGLFMsQ0FBbENFLGE7SUFBZUMsYyxHQUFtQkgsUyxDQUFuQkcsYzs7SUFFakJDLFM7QUFDSixxQkFBWUMsV0FBWixFQUF5QjtBQUFBOztBQUN2QixTQUFLQSxXQUFMLEdBQW1CQSxXQUFuQjtBQUNEOzs7O2lDQUVZQyxLLEVBQU87QUFDbEIsVUFBTUMsVUFBVUQsTUFBTUMsT0FBdEI7O0FBRUEsY0FBUUEsT0FBUjtBQUNFLGFBQUtMLGFBQUw7QUFDRSxlQUFLTSxnQkFBTDtBQUNBOztBQUVGLGFBQUtMLGNBQUw7QUFDRSxlQUFLTSxpQkFBTDtBQUNBO0FBUEo7QUFTRDs7O21DQUVjSCxLLEVBQU87QUFDcEIsVUFBTUMsVUFBVUQsTUFBTUMsT0FBdEI7O0FBRUEsY0FBUUEsT0FBUjtBQUNFLGFBQUtMLGFBQUw7QUFDRSxlQUFLUSxrQkFBTDtBQUNBOztBQUVGLGFBQUtQLGNBQUw7QUFDRSxlQUFLUSxtQkFBTDtBQUNBO0FBUEo7QUFTRDs7O3VDQUVrQjtBQUNqQixVQUFNQyxjQUFjLEtBQXBCO0FBQUEsVUFDTUMsa0JBQWtCLEtBQUtSLFdBQUwsQ0FBaUJILGFBQWpCLENBRHhCOztBQUdBVyxzQkFBZ0JDLE9BQWhCLENBQXdCLFVBQUNDLGNBQUQ7QUFBQSxlQUFvQkEsZUFBZUgsV0FBZixDQUFwQjtBQUFBLE9BQXhCO0FBQ0Q7Ozt3Q0FFbUI7QUFDbEIsVUFBTUksZUFBZSxLQUFyQjtBQUFBLFVBQ01DLG1CQUFtQixLQUFLWixXQUFMLENBQWlCRixjQUFqQixDQUR6Qjs7QUFHQWMsdUJBQWlCSCxPQUFqQixDQUF5QixVQUFDSSxlQUFEO0FBQUEsZUFBcUJBLGdCQUFnQkYsWUFBaEIsQ0FBckI7QUFBQSxPQUF6QjtBQUNEOzs7eUNBRW9CO0FBQ25CLFVBQU1KLGNBQWMsSUFBcEI7QUFBQSxVQUNNQyxrQkFBa0IsS0FBS1IsV0FBTCxDQUFpQkgsYUFBakIsQ0FEeEI7O0FBR0FXLHNCQUFnQkMsT0FBaEIsQ0FBd0IsVUFBQ0MsY0FBRDtBQUFBLGVBQW9CQSxlQUFlSCxXQUFmLENBQXBCO0FBQUEsT0FBeEI7QUFDRDs7OzBDQUVxQjtBQUNwQixVQUFNSSxlQUFlLElBQXJCO0FBQUEsVUFDTUMsbUJBQW1CLEtBQUtaLFdBQUwsQ0FBaUJGLGNBQWpCLENBRHpCOztBQUdBYyx1QkFBaUJILE9BQWpCLENBQXlCLFVBQUNJLGVBQUQ7QUFBQSxlQUFxQkEsZ0JBQWdCRixZQUFoQixDQUFyQjtBQUFBLE9BQXpCO0FBQ0Q7OztzQ0FFaUJELGMsRUFBZ0I7QUFDaEMsVUFBTUYsa0JBQWtCLEtBQUtSLFdBQUwsQ0FBaUJILGFBQWpCLENBQXhCOztBQUVBVyxzQkFBZ0JNLElBQWhCLENBQXFCSixjQUFyQjtBQUNEOzs7dUNBRWtCRyxlLEVBQWlCO0FBQ2xDLFVBQU1ELG1CQUFtQixLQUFLWixXQUFMLENBQWlCRixjQUFqQixDQUF6Qjs7QUFFQWMsdUJBQWlCRSxJQUFqQixDQUFzQkQsZUFBdEI7QUFDRDs7O2dDQUVrQkUsTSxFQUFRO0FBQ3pCLFVBQU1mLGNBQWMsRUFBcEI7O0FBRUFBLGtCQUFhSCxhQUFiLElBQStCLEVBQS9CO0FBQ0FHLGtCQUFhRixjQUFiLElBQWdDLEVBQWhDOztBQUVBLFVBQU1rQixZQUFZLElBQUlqQixTQUFKLENBQWNDLFdBQWQsQ0FBbEI7QUFBQSxVQUNNaUIsZUFBZUQsVUFBVUMsWUFBVixDQUF1QkMsSUFBdkIsQ0FBNEJGLFNBQTVCLENBRHJCO0FBQUEsVUFFTUcsaUJBQWlCSCxVQUFVRyxjQUFWLENBQXlCRCxJQUF6QixDQUE4QkYsU0FBOUIsQ0FGdkI7QUFBQSxVQUdNSSxxQkFBcUJDLFNBQVNDLGVBSHBDLENBTnlCLENBUzZCOztBQUV0REYseUJBQW1CRyxnQkFBbkIsQ0FBb0MsT0FBcEMsRUFBNkNOLFlBQTdDO0FBQ0FHLHlCQUFtQkcsZ0JBQW5CLENBQW9DLFNBQXBDLEVBQStDSixjQUEvQzs7QUFFQSxhQUFPSCxTQUFQO0FBQ0Q7Ozs7OztBQUdIUSxPQUFPQyxPQUFQLEdBQWlCMUIsU0FBakIiLCJmaWxlIjoia2V5RXZlbnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBjb25zdGFudHMgPSByZXF1aXJlKCcuLi9jb25zdGFudHMnKTtcblxuY29uc3QgeyBDVFJMX0tFWV9DT0RFLCBTSElGVF9LRVlfQ09ERSB9ID0gY29uc3RhbnRzO1xuXG5jbGFzcyBLZXlFdmVudHMge1xuICBjb25zdHJ1Y3RvcihoYW5kbGVyc01hcCkge1xuICAgIHRoaXMuaGFuZGxlcnNNYXAgPSBoYW5kbGVyc01hcDtcbiAgfVxuXG4gIGtleVVwSGFuZGxlcihldmVudCkge1xuICAgIGNvbnN0IGtleUNvZGUgPSBldmVudC5rZXlDb2RlO1xuXG4gICAgc3dpdGNoIChrZXlDb2RlKSB7XG4gICAgICBjYXNlIENUUkxfS0VZX0NPREUgOlxuICAgICAgICB0aGlzLmN0cmxLZXlVcEhhbmRsZXIoKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgU0hJRlRfS0VZX0NPREUgOlxuICAgICAgICB0aGlzLnNoaWZ0S2V5VXBIYW5kbGVyKCk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGtleURvd25IYW5kbGVyKGV2ZW50KSB7XG4gICAgY29uc3Qga2V5Q29kZSA9IGV2ZW50LmtleUNvZGU7XG5cbiAgICBzd2l0Y2ggKGtleUNvZGUpIHtcbiAgICAgIGNhc2UgQ1RSTF9LRVlfQ09ERSA6XG4gICAgICAgIHRoaXMuY3RybEtleURvd25IYW5kbGVyKCk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFNISUZUX0tFWV9DT0RFIDpcbiAgICAgICAgdGhpcy5zaGlmdEtleURvd25IYW5kbGVyKCk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICBcbiAgY3RybEtleVVwSGFuZGxlcigpIHtcbiAgICBjb25zdCBjdHJsS2V5RG93biA9IGZhbHNlLFxuICAgICAgICAgIGN0cmxLZXlIYW5kbGVycyA9IHRoaXMuaGFuZGxlcnNNYXBbQ1RSTF9LRVlfQ09ERV07XG5cbiAgICBjdHJsS2V5SGFuZGxlcnMuZm9yRWFjaCgoY3RybEtleUhhbmRsZXIpID0+IGN0cmxLZXlIYW5kbGVyKGN0cmxLZXlEb3duKSk7XG4gIH1cblxuICBzaGlmdEtleVVwSGFuZGxlcigpIHtcbiAgICBjb25zdCBzaGlmdEtleURvd24gPSBmYWxzZSxcbiAgICAgICAgICBzaGlmdEtleUhhbmRsZXJzID0gdGhpcy5oYW5kbGVyc01hcFtTSElGVF9LRVlfQ09ERV07XG5cbiAgICBzaGlmdEtleUhhbmRsZXJzLmZvckVhY2goKHNoaWZ0S2V5SGFuZGxlcikgPT4gc2hpZnRLZXlIYW5kbGVyKHNoaWZ0S2V5RG93bikpO1xuICB9XG5cbiAgY3RybEtleURvd25IYW5kbGVyKCkge1xuICAgIGNvbnN0IGN0cmxLZXlEb3duID0gdHJ1ZSxcbiAgICAgICAgICBjdHJsS2V5SGFuZGxlcnMgPSB0aGlzLmhhbmRsZXJzTWFwW0NUUkxfS0VZX0NPREVdO1xuXG4gICAgY3RybEtleUhhbmRsZXJzLmZvckVhY2goKGN0cmxLZXlIYW5kbGVyKSA9PiBjdHJsS2V5SGFuZGxlcihjdHJsS2V5RG93bikpO1xuICB9XG5cbiAgc2hpZnRLZXlEb3duSGFuZGxlcigpIHtcbiAgICBjb25zdCBzaGlmdEtleURvd24gPSB0cnVlLFxuICAgICAgICAgIHNoaWZ0S2V5SGFuZGxlcnMgPSB0aGlzLmhhbmRsZXJzTWFwW1NISUZUX0tFWV9DT0RFXTtcblxuICAgIHNoaWZ0S2V5SGFuZGxlcnMuZm9yRWFjaCgoc2hpZnRLZXlIYW5kbGVyKSA9PiBzaGlmdEtleUhhbmRsZXIoc2hpZnRLZXlEb3duKSk7XG4gIH1cblxuICBhZGRDdHJsS2V5SGFuZGxlcihjdHJsS2V5SGFuZGxlcikge1xuICAgIGNvbnN0IGN0cmxLZXlIYW5kbGVycyA9IHRoaXMuaGFuZGxlcnNNYXBbQ1RSTF9LRVlfQ09ERV07XG5cbiAgICBjdHJsS2V5SGFuZGxlcnMucHVzaChjdHJsS2V5SGFuZGxlcik7XG4gIH1cblxuICBhZGRTaGlmdEtleUhhbmRsZXIoc2hpZnRLZXlIYW5kbGVyKSB7XG4gICAgY29uc3Qgc2hpZnRLZXlIYW5kbGVycyA9IHRoaXMuaGFuZGxlcnNNYXBbU0hJRlRfS0VZX0NPREVdO1xuXG4gICAgc2hpZnRLZXlIYW5kbGVycy5wdXNoKHNoaWZ0S2V5SGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoY2FudmFzKSB7XG4gICAgY29uc3QgaGFuZGxlcnNNYXAgPSB7fTtcbiAgICBcbiAgICBoYW5kbGVyc01hcFsgQ1RSTF9LRVlfQ09ERSBdID0gW107XG4gICAgaGFuZGxlcnNNYXBbIFNISUZUX0tFWV9DT0RFIF0gPSBbXTtcblxuICAgIGNvbnN0IGtleUV2ZW50cyA9IG5ldyBLZXlFdmVudHMoaGFuZGxlcnNNYXApLFxuICAgICAgICAgIGtleVVwSGFuZGxlciA9IGtleUV2ZW50cy5rZXlVcEhhbmRsZXIuYmluZChrZXlFdmVudHMpLFxuICAgICAgICAgIGtleURvd25IYW5kbGVyID0ga2V5RXZlbnRzLmtleURvd25IYW5kbGVyLmJpbmQoa2V5RXZlbnRzKSxcbiAgICAgICAgICBkb2N1bWVudERPTUVsZW1lbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7ICAvLy9cblxuICAgIGRvY3VtZW50RE9NRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGtleVVwSGFuZGxlcik7XG4gICAgZG9jdW1lbnRET01FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBrZXlEb3duSGFuZGxlcik7XG5cbiAgICByZXR1cm4ga2V5RXZlbnRzO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gS2V5RXZlbnRzO1xuIl19
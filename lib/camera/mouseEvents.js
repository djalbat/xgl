'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var constants = require('../constants');

var MOUSE_UP = constants.MOUSE_UP,
    MOUSE_DOWN = constants.MOUSE_DOWN,
    MOUSE_MOVE = constants.MOUSE_MOVE,
    MOUSE_WHEEL = constants.MOUSE_WHEEL;

var MouseEvents = function () {
  function MouseEvents(canvas, handlersMap) {
    _classCallCheck(this, MouseEvents);

    this.canvas = canvas;

    this.handlersMap = handlersMap;

    addMouseEventHandler(canvas, 'mouseup', function (event) {
      this.onMouseEvent(MOUSE_UP, event);
    }.bind(this));
    addMouseEventHandler(canvas, 'mousedown', function (event) {
      this.onMouseEvent(MOUSE_DOWN, event);
    }.bind(this));
    addMouseEventHandler(canvas, 'mousemove', function (event) {
      this.onMouseEvent(MOUSE_MOVE, event);
    }.bind(this));
    addMouseEventHandler(canvas, 'mousewheel', function (event) {
      this.onMouseWheelEvent(event);
    }.bind(this));
  }

  _createClass(MouseEvents, [{
    key: 'addMouseUpHandler',
    value: function addMouseUpHandler(mouseUpHandler) {
      this.addHandler(MOUSE_UP, mouseUpHandler);
    }
  }, {
    key: 'addMouseDownHandler',
    value: function addMouseDownHandler(mouseDownHandler) {
      this.addHandler(MOUSE_DOWN, mouseDownHandler);
    }
  }, {
    key: 'addMouseMoveHandler',
    value: function addMouseMoveHandler(mouseMoveHandler) {
      this.addHandler(MOUSE_MOVE, mouseMoveHandler);
    }
  }, {
    key: 'addMouseWheelHandler',
    value: function addMouseWheelHandler(mouseWheelHandler) {
      this.addHandler(MOUSE_WHEEL, mouseWheelHandler);
    }
  }, {
    key: 'addHandler',
    value: function addHandler(eventType, handler) {
      var handlers = this.handlersMap[eventType];

      handlers.push(handler);
    }
  }, {
    key: 'onMouseEvent',
    value: function onMouseEvent(eventType, event) {
      var handlers = this.handlersMap[eventType],
          mouseCoordinates = mouseCoordinatesFromEvent(event, this.canvas);

      handlers.forEach(function (handler) {
        handler(mouseCoordinates);
      });
    }
  }, {
    key: 'onMouseWheelEvent',
    value: function onMouseWheelEvent(event) {
      var handlers = this.handlersMap[MOUSE_WHEEL],
          delta = deltaFromEvent(event);

      handlers.forEach(function (handler) {
        handler(delta);
      });
    }
  }], [{
    key: 'fromNothing',
    value: function fromNothing(canvas) {
      var handlersMap = {
        MOUSE_UP: [],
        MOUSE_DOWN: [],
        MOUSE_MOVE: [],
        MOUSE_WHEEL: []
      },
          mouseEvents = new MouseEvents(canvas, handlersMap);

      return mouseEvents;
    }
  }]);

  return MouseEvents;
}();

module.exports = MouseEvents;

function addMouseEventHandler(canvas, type, handler) {
  var domElement = canvas.getDOMElement();

  domElement.addEventListener(type, function (event) {
    event.preventDefault();

    handler(event);
  });
}

function deltaFromEvent(event) {
  var delta = Math.max(-1, Math.min(1, event.wheelDelta)); ///

  return delta;
}

function mouseCoordinatesFromEvent(event, canvas) {
  var domElement = canvas.getDOMElement(),
      domElementBoundingClientRect = domElement.getBoundingClientRect(),
      mouseCoordinates = [+(event.clientX - domElementBoundingClientRect.left), -(event.clientY - domElementBoundingClientRect.top)];

  return mouseCoordinates;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jYW1lcmEvbW91c2VFdmVudHMuanMiXSwibmFtZXMiOlsiY29uc3RhbnRzIiwicmVxdWlyZSIsIk1PVVNFX1VQIiwiTU9VU0VfRE9XTiIsIk1PVVNFX01PVkUiLCJNT1VTRV9XSEVFTCIsIk1vdXNlRXZlbnRzIiwiY2FudmFzIiwiaGFuZGxlcnNNYXAiLCJhZGRNb3VzZUV2ZW50SGFuZGxlciIsImV2ZW50Iiwib25Nb3VzZUV2ZW50IiwiYmluZCIsIm9uTW91c2VXaGVlbEV2ZW50IiwibW91c2VVcEhhbmRsZXIiLCJhZGRIYW5kbGVyIiwibW91c2VEb3duSGFuZGxlciIsIm1vdXNlTW92ZUhhbmRsZXIiLCJtb3VzZVdoZWVsSGFuZGxlciIsImV2ZW50VHlwZSIsImhhbmRsZXIiLCJoYW5kbGVycyIsInB1c2giLCJtb3VzZUNvb3JkaW5hdGVzIiwibW91c2VDb29yZGluYXRlc0Zyb21FdmVudCIsImZvckVhY2giLCJkZWx0YSIsImRlbHRhRnJvbUV2ZW50IiwibW91c2VFdmVudHMiLCJtb2R1bGUiLCJleHBvcnRzIiwidHlwZSIsImRvbUVsZW1lbnQiLCJnZXRET01FbGVtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInByZXZlbnREZWZhdWx0IiwiTWF0aCIsIm1heCIsIm1pbiIsIndoZWVsRGVsdGEiLCJkb21FbGVtZW50Qm91bmRpbmdDbGllbnRSZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiY2xpZW50WCIsImxlZnQiLCJjbGllbnRZIiwidG9wIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsWUFBWUMsUUFBUSxjQUFSLENBQWxCOztJQUVRQyxRLEdBQWtERixTLENBQWxERSxRO0lBQVVDLFUsR0FBd0NILFMsQ0FBeENHLFU7SUFBWUMsVSxHQUE0QkosUyxDQUE1QkksVTtJQUFZQyxXLEdBQWdCTCxTLENBQWhCSyxXOztJQUVwQ0MsVztBQUNKLHVCQUFZQyxNQUFaLEVBQW9CQyxXQUFwQixFQUFpQztBQUFBOztB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S0Q7O0FBRUQsU0FBU2lCLGNBQVQsQ0FBd0JqQixLQUF4QixFQUErQjtBQUM3QixNQUFNZ0IsUUFBUVUsS0FBS0MsR0FBTCxDQUFTLENBQUMsQ0FBVixFQUFhRCxLQUFLRSxHQUFMLENBQVMsQ0FBVCxFQUFZNUIsTUFBTTZCLFVBQWxCLENBQWIsQ0FBZCxDQUQ2QixDQUM4Qjs7QUFFM0QsU0FBT2IsS0FBUDtBQUNEOztBQUVELFNBQVNGLHlCQUFULENBQW1DZCxLQUFuQyxFQUEwQ0gsTUFBMUMsRUFBa0Q7QUFDaEQsTUFBTXlCLGFBQWF6QixPQUFPMEIsYUFBUCxFQUFuQjtBQUFBLE1BQ01PLCtCQUErQlIsV0FBV1MscUJBQVgsRUFEckM7QUFBQSxNQUVNbEIsbUJBQW1CLENBQ2pCLEVBQUViLE1BQU1nQyxPQUFOLEdBQWdCRiw2QkFBNkJHLElBQS9DLENBRGlCLEVBRWpCLEVBQUVqQyxNQUFNa0MsT0FBTixHQUFnQkosNkJBQTZCSyxHQUEvQyxDQUZpQixDQUZ6Qjs7QUFPQSxTQUFPdEIsZ0JBQVA7QUFDRCIsImZpbGUiOiJtb3VzZUV2ZW50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgY29uc3RhbnRzID0gcmVxdWlyZSgnLi4vY29uc3RhbnRzJyk7XG5cbmNvbnN0IHsgTU9VU0VfVVAsIE1PVVNFX0RPV04sIE1PVVNFX01PVkUsIE1PVVNFX1dIRUVMIH0gPSBjb25zdGFudHM7XG5cbmNsYXNzIE1vdXNlRXZlbnRzIHtcbiAgY29uc3RydWN0b3IoY2FudmFzLCBoYW5kbGVyc01hcCkge1xuICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuXG4gICAgdGhpcy5oYW5kbGVyc01hcCA9IGhhbmRsZXJzTWFwO1xuXG4gICAgYWRkTW91c2VFdmVudEhhbmRsZXIoY2FudmFzLCAnbW91c2V1cCcsIGZ1bmN0aW9uKGV2ZW50KSB7IHRoaXMub25Nb3VzZUV2ZW50KE1PVVNFX1VQLCBldmVudCkgfS5iaW5kKHRoaXMpICk7XG4gICAgYWRkTW91c2VFdmVudEhhbmRsZXIoY2FudmFzLCAnbW91c2Vkb3duJywgZnVuY3Rpb24oZXZlbnQpIHsgdGhpcy5vbk1vdXNlRXZlbnQoTU9VU0VfRE9XTiwgZXZlbnQpIH0uYmluZCh0aGlzKSApO1xuICAgIGFkZE1vdXNlRXZlbnRIYW5kbGVyKGNhbnZhcywgJ21vdXNlbW92ZScsIGZ1bmN0aW9uKGV2ZW50KSB7IHRoaXMub25Nb3VzZUV2ZW50KE1PVVNFX01PVkUsIGV2ZW50KSB9LmJpbmQodGhpcykgKTtcbiAgICBhZGRNb3VzZUV2ZW50SGFuZGxlcihjYW52YXMsICdtb3VzZXdoZWVsJywgZnVuY3Rpb24oZXZlbnQpIHsgdGhpcy5vbk1vdXNlV2hlZWxFdmVudChldmVudCkgfS5iaW5kKHRoaXMpICk7XG4gIH1cblxuICBhZGRNb3VzZVVwSGFuZGxlcihtb3VzZVVwSGFuZGxlcikge1xuICAgIHRoaXMuYWRkSGFuZGxlcihNT1VTRV9VUCwgbW91c2VVcEhhbmRsZXIpO1xuICB9XG5cbiAgYWRkTW91c2VEb3duSGFuZGxlcihtb3VzZURvd25IYW5kbGVyKSB7XG4gICAgdGhpcy5hZGRIYW5kbGVyKE1PVVNFX0RPV04sIG1vdXNlRG93bkhhbmRsZXIpO1xuICB9XG5cbiAgYWRkTW91c2VNb3ZlSGFuZGxlcihtb3VzZU1vdmVIYW5kbGVyKSB7XG4gICAgdGhpcy5hZGRIYW5kbGVyKE1PVVNFX01PVkUsIG1vdXNlTW92ZUhhbmRsZXIpO1xuICB9XG5cbiAgYWRkTW91c2VXaGVlbEhhbmRsZXIobW91c2VXaGVlbEhhbmRsZXIpIHtcbiAgICB0aGlzLmFkZEhhbmRsZXIoTU9VU0VfV0hFRUwsIG1vdXNlV2hlZWxIYW5kbGVyKTtcbiAgfVxuXG4gIGFkZEhhbmRsZXIoZXZlbnRUeXBlLCBoYW5kbGVyKSB7XG4gICAgY29uc3QgaGFuZGxlcnMgPSB0aGlzLmhhbmRsZXJzTWFwW2V2ZW50VHlwZV07XG5cbiAgICBoYW5kbGVycy5wdXNoKGhhbmRsZXIpO1xuICB9XG5cbiAgb25Nb3VzZUV2ZW50KGV2ZW50VHlwZSwgZXZlbnQpIHtcbiAgICBjb25zdCBoYW5kbGVycyA9IHRoaXMuaGFuZGxlcnNNYXBbZXZlbnRUeXBlXSxcbiAgICAgICAgICBtb3VzZUNvb3JkaW5hdGVzID0gbW91c2VDb29yZGluYXRlc0Zyb21FdmVudChldmVudCwgdGhpcy5jYW52YXMpO1xuXG4gICAgaGFuZGxlcnMuZm9yRWFjaChmdW5jdGlvbihoYW5kbGVyKSB7XG4gICAgICBoYW5kbGVyKG1vdXNlQ29vcmRpbmF0ZXMpO1xuICAgIH0pO1xuICB9XG5cbiAgb25Nb3VzZVdoZWVsRXZlbnQoZXZlbnQpIHtcbiAgICBjb25zdCBoYW5kbGVycyA9IHRoaXMuaGFuZGxlcnNNYXBbTU9VU0VfV0hFRUxdLFxuICAgICAgICAgIGRlbHRhID0gZGVsdGFGcm9tRXZlbnQoZXZlbnQpO1xuXG4gICAgaGFuZGxlcnMuZm9yRWFjaChmdW5jdGlvbihoYW5kbGVyKSB7XG4gICAgICBoYW5kbGVyKGRlbHRhKTtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZyhjYW52YXMpIHtcbiAgICBjb25zdCBoYW5kbGVyc01hcCA9IHtcbiAgICAgICAgICAgIE1PVVNFX1VQOiBbXSxcbiAgICAgICAgICAgIE1PVVNFX0RPV046IFtdLFxuICAgICAgICAgICAgTU9VU0VfTU9WRTogW10sXG4gICAgICAgICAgICBNT1VTRV9XSEVFTDogW11cbiAgICAgICAgICB9LFxuICAgICAgICAgIG1vdXNlRXZlbnRzID0gbmV3IE1vdXNlRXZlbnRzKGNhbnZhcywgaGFuZGxlcnNNYXApO1xuXG4gICAgcmV0dXJuIG1vdXNlRXZlbnRzO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTW91c2VFdmVudHM7XG5cbmZ1bmN0aW9uIGFkZE1vdXNlRXZlbnRIYW5kbGVyKGNhbnZhcywgdHlwZSwgaGFuZGxlcikge1xuICBjb25zdCBkb21FbGVtZW50ID0gY2FudmFzLmdldERPTUVsZW1lbnQoKTtcblxuICBkb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgaGFuZGxlcihldmVudCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBkZWx0YUZyb21FdmVudChldmVudCkge1xuICBjb25zdCBkZWx0YSA9IE1hdGgubWF4KC0xLCBNYXRoLm1pbigxLCBldmVudC53aGVlbERlbHRhKSk7IC8vL1xuXG4gIHJldHVybiBkZWx0YTtcbn1cblxuZnVuY3Rpb24gbW91c2VDb29yZGluYXRlc0Zyb21FdmVudChldmVudCwgY2FudmFzKSB7XG4gIGNvbnN0IGRvbUVsZW1lbnQgPSBjYW52YXMuZ2V0RE9NRWxlbWVudCgpLFxuICAgICAgICBkb21FbGVtZW50Qm91bmRpbmdDbGllbnRSZWN0ID0gZG9tRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgICAgbW91c2VDb29yZGluYXRlcyA9IFtcbiAgICAgICAgICArKGV2ZW50LmNsaWVudFggLSBkb21FbGVtZW50Qm91bmRpbmdDbGllbnRSZWN0LmxlZnQpLFxuICAgICAgICAgIC0oZXZlbnQuY2xpZW50WSAtIGRvbUVsZW1lbnRCb3VuZGluZ0NsaWVudFJlY3QudG9wKVxuICAgICAgICBdO1xuXG4gIHJldHVybiBtb3VzZUNvb3JkaW5hdGVzO1xufVxuIl19
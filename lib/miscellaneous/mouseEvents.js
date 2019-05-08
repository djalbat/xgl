'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var constants = require('../constants');

var MOUSE_UP = constants.MOUSE_UP,
    MOUSE_DOWN = constants.MOUSE_DOWN,
    MOUSE_MOVE = constants.MOUSE_MOVE,
    MOUSE_WHEEL = constants.MOUSE_WHEEL;

var MouseEvents = function () {
  function MouseEvents(handlersMap, canvas) {
    _classCallCheck(this, MouseEvents);

    this.handlersMap = handlersMap;
    this.canvas = canvas;
  }

  _createClass(MouseEvents, [{
    key: 'getHandlersMap',
    value: function getHandlersMap() {
      return this.handlersMap;
    }
  }, {
    key: 'getCanvas',
    value: function getCanvas() {
      return this.canvas;
    }
  }, {
    key: 'onMouseUp',
    value: function onMouseUp(mouseUpHandler) {
      this.addHandler(MOUSE_UP, mouseUpHandler);
    }
  }, {
    key: 'onMouseDown',
    value: function onMouseDown(mouseDownHandler) {
      this.addHandler(MOUSE_DOWN, mouseDownHandler);
    }
  }, {
    key: 'onMouseMove',
    value: function onMouseMove(mouseMoveHandler) {
      this.addHandler(MOUSE_MOVE, mouseMoveHandler);
    }
  }, {
    key: 'onMouseWheel',
    value: function onMouseWheel(mouseWheelHandler) {
      this.addHandler(MOUSE_WHEEL, mouseWheelHandler);
    }
  }, {
    key: 'addHandler',
    value: function addHandler(eventType, handler) {
      var handlers = this.handlersMap[eventType];

      handlers.push(handler);
    }
  }, {
    key: 'mouseUpEventHandler',
    value: function mouseUpEventHandler(event) {
      this.mouseEventHandler(event, MOUSE_UP);
    }
  }, {
    key: 'mouseDownEventHandler',
    value: function mouseDownEventHandler(event) {
      this.mouseEventHandler(event, MOUSE_DOWN);
    }
  }, {
    key: 'mouseMoveEventHandler',
    value: function mouseMoveEventHandler(event) {
      this.mouseEventHandler(event, MOUSE_MOVE);
    }
  }, {
    key: 'mouseWheelEventHandler',
    value: function mouseWheelEventHandler(event) {
      var handlers = this.handlersMap[MOUSE_WHEEL],
          delta = deltaFromEvent(event);

      handlers.forEach(function (handler) {
        return handler(delta);
      });

      event.preventDefault();
    }
  }, {
    key: 'mouseEventHandler',
    value: function mouseEventHandler(event, eventType) {
      var handlers = this.handlersMap[eventType],
          mouseCoordinates = mouseCoordinatesFromEvent(event, this.canvas);

      handlers.forEach(function (handler) {
        return handler(mouseCoordinates);
      });

      event.preventDefault();
    }
  }], [{
    key: 'fromNothing',
    value: function fromNothing(canvas) {
      var handlersMap = {},
          domElement = canvas.getDOMElement(),
          mouseEvents = new MouseEvents(handlersMap, canvas),
          mouseUpEventHandler = mouseEvents.mouseUpEventHandler.bind(mouseEvents),
          mouseDownEventHandler = mouseEvents.mouseDownEventHandler.bind(mouseEvents),
          mouseMoveEventHandler = mouseEvents.mouseMoveEventHandler.bind(mouseEvents),
          mouseWheelEventHandler = mouseEvents.mouseWheelEventHandler.bind(mouseEvents);

      handlersMap[MOUSE_UP] = [];
      handlersMap[MOUSE_DOWN] = [];
      handlersMap[MOUSE_MOVE] = [];
      handlersMap[MOUSE_WHEEL] = [];

      domElement.addEventListener('mouseup', mouseUpEventHandler);
      domElement.addEventListener('mousedown', mouseDownEventHandler);
      domElement.addEventListener('mousemove', mouseMoveEventHandler);
      domElement.addEventListener('mousewheel', mouseWheelEventHandler);

      return mouseEvents;
    }
  }]);

  return MouseEvents;
}();

module.exports = MouseEvents;

function deltaFromEvent(event) {
  var delta = Math.max(-1, Math.min(1, event.wheelDelta)); ///

  return delta;
}

function mouseCoordinatesFromEvent(event) {
  var domElement = event.target,
      ///
  domElementBoundingClientRect = domElement.getBoundingClientRect(),
      mouseCoordinates = [+(event.clientX - domElementBoundingClientRect.left), -(event.clientY - domElementBoundingClientRect.top)];

  return mouseCoordinates;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9taXNjZWxsYW5lb3VzL21vdXNlRXZlbnRzLmpzIl0sIm5hbWVzIjpbImNvbnN0YW50cyIsInJlcXVpcmUiLCJNT1VTRV9VUCIsIk1PVVNFX0RPV04iLCJNT1VTRV9NT1ZFIiwiTU9VU0VfV0hFRUwiLCJNb3VzZUV2ZW50cyIsImhhbmRsZXJzTWFwIiwiY2FudmFzIiwibW91c2VVcEhhbmRsZXIiLCJhZGRIYW5kbGVyIiwibW91c2VEb3duSGFuZGxlciIsIm1vdXNlTW92ZUhhbmRsZXIiLCJtb3VzZVdoZWVsSGFuZGxlciIsImV2ZW50VHlwZSIsImhhbmRsZXIiLCJoYW5kbGVycyIsInB1c2giLCJldmVudCIsIm1vdXNlRXZlbnRIYW5kbGVyIiwiZGVsdGEiLCJkZWx0YUZyb21FdmVudCIsImZvckVhY2giLCJwcmV2ZW50RGVmYXVsdCIsIm1vdXNlQ29vcmRpbmF0ZXMiLCJtb3VzZUNvb3JkaW5hdGVzRnJvbUV2ZW50IiwiZG9tRWxlbWVudCIsImdldERPTUVsZW1lbnQiLCJtb3VzZUV2ZW50cyIsIm1vdXNlVXBFdmVudEhhbmRsZXIiLCJiaW5kIiwibW91c2VEb3duRXZlbnRIYW5kbGVyIiwibW91c2VNb3ZlRXZlbnRIYW5kbGVyIiwibW91c2VXaGVlbEV2ZW50SGFuZGxlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJtb2R1bGUiLCJleHBvcnRzIiwiTWF0aCIsIm1heCIsIm1pbiIsIndoZWVsRGVsdGEiLCJ0YXJnZXQiLCJkb21FbGVtZW50Qm91bmRpbmdDbGllbnRSZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiY2xpZW50WCIsImxlZnQiLCJjbGllbnRZIiwidG9wIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsWUFBWUMsUUFBUSxjQUFSLENBQWxCOztJQUVRQyxRLEdBQWtERixTLENBQWxERSxRO0lBQVVDLFUsR0FBd0NILFMsQ0FBeENHLFU7SUFBWUMsVSxHQUE0QkosUyxDQUE1QkksVTtJQUFZQyxXLEdBQWdC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USxnQkFBWCxDQUE0QixXQUE1QixFQUF5Q0YscUJBQXpDO0FBQ0FOLGlCQUFXUSxnQkFBWCxDQUE0QixZQUE1QixFQUEwQ0Qsc0JBQTFDOztBQUVBLGFBQU9MLFdBQVA7QUFDRDs7Ozs7O0FBR0hPLE9BQU9DLE9BQVAsR0FBaUI5QixXQUFqQjs7QUFFQSxTQUFTZSxjQUFULENBQXdCSCxLQUF4QixFQUErQjtBQUM3QixNQUFNRSxRQUFRaUIsS0FBS0MsR0FBTCxDQUFTLENBQUMsQ0FBVixFQUFhRCxLQUFLRSxHQUFMLENBQVMsQ0FBVCxFQUFZckIsTUFBTXNCLFVBQWxCLENBQWIsQ0FBZCxDQUQ2QixDQUM4Qjs7QUFFM0QsU0FBT3BCLEtBQVA7QUFDRDs7QUFFRCxTQUFTSyx5QkFBVCxDQUFtQ1AsS0FBbkMsRUFBMEM7QUFDeEMsTUFBTVEsYUFBYVIsTUFBTXVCLE1BQXpCO0FBQUEsTUFBa0M7QUFDNUJDLGlDQUErQmhCLFdBQVdpQixxQkFBWCxFQURyQztBQUFBLE1BRU1uQixtQkFBbUIsQ0FDakIsRUFBRU4sTUFBTTBCLE9BQU4sR0FBZ0JGLDZCQUE2QkcsSUFBL0MsQ0FEaUIsRUFFakIsRUFBRTNCLE1BQU00QixPQUFOLEdBQWdCSiw2QkFBNkJLLEdBQS9DLENBRmlCLENBRnpCOztBQU9BLFNBQU92QixnQkFBUDtBQUNEIiwiZmlsZSI6Im1vdXNlRXZlbnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBjb25zdGFudHMgPSByZXF1aXJlKCcuLi9jb25zdGFudHMnKTtcblxuY29uc3QgeyBNT1VTRV9VUCwgTU9VU0VfRE9XTiwgTU9VU0VfTU9WRSwgTU9VU0VfV0hFRUwgfSA9IGNvbnN0YW50cztcblxuY2xhc3MgTW91c2VFdmVudHMge1xuICBjb25zdHJ1Y3RvcihoYW5kbGVyc01hcCwgY2FudmFzKSB7XG4gICAgdGhpcy5oYW5kbGVyc01hcCA9IGhhbmRsZXJzTWFwO1xuICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICB9XG5cbiAgZ2V0SGFuZGxlcnNNYXAoKSB7XG4gICAgcmV0dXJuIHRoaXMuaGFuZGxlcnNNYXA7XG4gIH1cblxuICBnZXRDYW52YXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2FudmFzO1xuICB9XG5cbiAgb25Nb3VzZVVwKG1vdXNlVXBIYW5kbGVyKSB7XG4gICAgdGhpcy5hZGRIYW5kbGVyKE1PVVNFX1VQLCBtb3VzZVVwSGFuZGxlcik7XG4gIH1cblxuICBvbk1vdXNlRG93bihtb3VzZURvd25IYW5kbGVyKSB7XG4gICAgdGhpcy5hZGRIYW5kbGVyKE1PVVNFX0RPV04sIG1vdXNlRG93bkhhbmRsZXIpO1xuICB9XG5cbiAgb25Nb3VzZU1vdmUobW91c2VNb3ZlSGFuZGxlcikge1xuICAgIHRoaXMuYWRkSGFuZGxlcihNT1VTRV9NT1ZFLCBtb3VzZU1vdmVIYW5kbGVyKTtcbiAgfVxuXG4gIG9uTW91c2VXaGVlbChtb3VzZVdoZWVsSGFuZGxlcikge1xuICAgIHRoaXMuYWRkSGFuZGxlcihNT1VTRV9XSEVFTCwgbW91c2VXaGVlbEhhbmRsZXIpO1xuICB9XG5cbiAgYWRkSGFuZGxlcihldmVudFR5cGUsIGhhbmRsZXIpIHtcbiAgICBjb25zdCBoYW5kbGVycyA9IHRoaXMuaGFuZGxlcnNNYXBbZXZlbnRUeXBlXTtcblxuICAgIGhhbmRsZXJzLnB1c2goaGFuZGxlcik7XG4gIH1cblxuXHRtb3VzZVVwRXZlbnRIYW5kbGVyKGV2ZW50KSB7IHRoaXMubW91c2VFdmVudEhhbmRsZXIoZXZlbnQsIE1PVVNFX1VQKTsgfVxuXG5cdG1vdXNlRG93bkV2ZW50SGFuZGxlcihldmVudCkgeyB0aGlzLm1vdXNlRXZlbnRIYW5kbGVyKGV2ZW50LCBNT1VTRV9ET1dOKTsgfVxuXG5cdG1vdXNlTW92ZUV2ZW50SGFuZGxlcihldmVudCkgeyB0aGlzLm1vdXNlRXZlbnRIYW5kbGVyKGV2ZW50LCBNT1VTRV9NT1ZFKTsgfVxuXG4gIG1vdXNlV2hlZWxFdmVudEhhbmRsZXIoZXZlbnQpIHtcbiAgICBjb25zdCBoYW5kbGVycyA9IHRoaXMuaGFuZGxlcnNNYXBbTU9VU0VfV0hFRUxdLFxuICAgICAgICAgIGRlbHRhID0gZGVsdGFGcm9tRXZlbnQoZXZlbnQpO1xuXG4gICAgaGFuZGxlcnMuZm9yRWFjaCgoaGFuZGxlcikgPT4gaGFuZGxlcihkZWx0YSkpO1xuXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG5cdG1vdXNlRXZlbnRIYW5kbGVyKGV2ZW50LCBldmVudFR5cGUpIHtcblx0XHRjb25zdCBoYW5kbGVycyA9IHRoaXMuaGFuZGxlcnNNYXBbZXZlbnRUeXBlXSxcblx0XHRcdFx0XHRtb3VzZUNvb3JkaW5hdGVzID0gbW91c2VDb29yZGluYXRlc0Zyb21FdmVudChldmVudCwgdGhpcy5jYW52YXMpO1xuXG5cdFx0aGFuZGxlcnMuZm9yRWFjaCgoaGFuZGxlcikgPT4gaGFuZGxlcihtb3VzZUNvb3JkaW5hdGVzKSk7XG5cblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHR9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKGNhbnZhcykge1xuICAgIGNvbnN0IGhhbmRsZXJzTWFwID0ge30sXG5cdFx0XHRcdFx0ZG9tRWxlbWVudCA9IGNhbnZhcy5nZXRET01FbGVtZW50KCksXG5cdFx0XHRcdFx0bW91c2VFdmVudHMgPSBuZXcgTW91c2VFdmVudHMoaGFuZGxlcnNNYXAsIGNhbnZhcyksXG5cdFx0XHRcdFx0bW91c2VVcEV2ZW50SGFuZGxlciA9IG1vdXNlRXZlbnRzLm1vdXNlVXBFdmVudEhhbmRsZXIuYmluZChtb3VzZUV2ZW50cyksXG5cdFx0XHRcdFx0bW91c2VEb3duRXZlbnRIYW5kbGVyID0gbW91c2VFdmVudHMubW91c2VEb3duRXZlbnRIYW5kbGVyLmJpbmQobW91c2VFdmVudHMpLFxuXHRcdFx0XHRcdG1vdXNlTW92ZUV2ZW50SGFuZGxlciA9IG1vdXNlRXZlbnRzLm1vdXNlTW92ZUV2ZW50SGFuZGxlci5iaW5kKG1vdXNlRXZlbnRzKSxcblx0XHRcdFx0XHRtb3VzZVdoZWVsRXZlbnRIYW5kbGVyID0gbW91c2VFdmVudHMubW91c2VXaGVlbEV2ZW50SGFuZGxlci5iaW5kKG1vdXNlRXZlbnRzKTtcblxuXHRcdGhhbmRsZXJzTWFwW01PVVNFX1VQXSA9IFtdO1xuXHRcdGhhbmRsZXJzTWFwW01PVVNFX0RPV05dID0gW107XG5cdFx0aGFuZGxlcnNNYXBbTU9VU0VfTU9WRV0gPSBbXTtcblx0XHRoYW5kbGVyc01hcFtNT1VTRV9XSEVFTF0gPSBbXTtcblxuICAgIGRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG1vdXNlVXBFdmVudEhhbmRsZXIpO1xuICAgIGRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgbW91c2VEb3duRXZlbnRIYW5kbGVyKTtcbiAgICBkb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG1vdXNlTW92ZUV2ZW50SGFuZGxlcik7XG4gICAgZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXdoZWVsJywgbW91c2VXaGVlbEV2ZW50SGFuZGxlcik7XG5cbiAgICByZXR1cm4gbW91c2VFdmVudHM7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBNb3VzZUV2ZW50cztcblxuZnVuY3Rpb24gZGVsdGFGcm9tRXZlbnQoZXZlbnQpIHtcbiAgY29uc3QgZGVsdGEgPSBNYXRoLm1heCgtMSwgTWF0aC5taW4oMSwgZXZlbnQud2hlZWxEZWx0YSkpOyAvLy9cblxuICByZXR1cm4gZGVsdGE7XG59XG5cbmZ1bmN0aW9uIG1vdXNlQ29vcmRpbmF0ZXNGcm9tRXZlbnQoZXZlbnQpIHtcbiAgY29uc3QgZG9tRWxlbWVudCA9IGV2ZW50LnRhcmdldCwgIC8vL1xuICAgICAgICBkb21FbGVtZW50Qm91bmRpbmdDbGllbnRSZWN0ID0gZG9tRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgICAgbW91c2VDb29yZGluYXRlcyA9IFtcbiAgICAgICAgICArKGV2ZW50LmNsaWVudFggLSBkb21FbGVtZW50Qm91bmRpbmdDbGllbnRSZWN0LmxlZnQpLFxuICAgICAgICAgIC0oZXZlbnQuY2xpZW50WSAtIGRvbUVsZW1lbnRCb3VuZGluZ0NsaWVudFJlY3QudG9wKVxuICAgICAgICBdO1xuXG4gIHJldHVybiBtb3VzZUNvb3JkaW5hdGVzO1xufVxuIl19
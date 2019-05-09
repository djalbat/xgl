'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var constants = require('../constants');

var MOUSE_UP = constants.MOUSE_UP,
    MOUSE_DOWN = constants.MOUSE_DOWN,
    MOUSE_MOVE = constants.MOUSE_MOVE,
    MOUSE_WHEEL = constants.MOUSE_WHEEL;

var MouseEvents = function () {
  function MouseEvents(handlersMap, mouseDown, canvas) {
    _classCallCheck(this, MouseEvents);

    this.handlersMap = handlersMap;
    this.mouseDown = mouseDown;
    this.canvas = canvas;
  }

  _createClass(MouseEvents, [{
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
      this.mouseDown = false;

      this.mouseEventHandler(event, MOUSE_UP);
    }
  }, {
    key: 'mouseDownEventHandler',
    value: function mouseDownEventHandler(event) {
      this.mouseDown = true;

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
      var delta = deltaFromEvent(event),
          handlers = this.handlersMap[MOUSE_WHEEL];

      handlers.forEach(function (handler) {
        return handler(delta);
      });

      event.preventDefault();
    }
  }, {
    key: 'mouseEventHandler',
    value: function mouseEventHandler(event, eventType) {
      var _this = this;

      var handlers = this.handlersMap[eventType],
          mouseCoordinates = mouseCoordinatesFromEvent(event, this.canvas);

      handlers.forEach(function (handler) {
        return handler(mouseCoordinates, _this.mouseDown, _this.canvas);
      });

      event.preventDefault();
    }
  }], [{
    key: 'fromNothing',
    value: function fromNothing(canvas) {
      var handlersMap = {},
          mouseDown = false,
          ///
      domElement = canvas.getDOMElement(),
          mouseEvents = new MouseEvents(handlersMap, mouseDown, canvas),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9taXNjZWxsYW5lb3VzL21vdXNlRXZlbnRzLmpzIl0sIm5hbWVzIjpbImNvbnN0YW50cyIsInJlcXVpcmUiLCJNT1VTRV9VUCIsIk1PVVNFX0RPV04iLCJNT1VTRV9NT1ZFIiwiTU9VU0VfV0hFRUwiLCJNb3VzZUV2ZW50cyIsImhhbmRsZXJzTWFwIiwibW91c2VEb3duIiwiY2FudmFzIiwibW91c2VVcEhhbmRsZXIiLCJhZGRIYW5kbGVyIiwibW91c2VEb3duSGFuZGxlciIsIm1vdXNlTW92ZUhhbmRsZXIiLCJtb3VzZVdoZWVsSGFuZGxlciIsImV2ZW50VHlwZSIsImhhbmRsZXIiLCJoYW5kbGVycyIsInB1c2giLCJldmVudCIsIm1vdXNlRXZlbnRIYW5kbGVyIiwiZGVsdGEiLCJkZWx0YUZyb21FdmVudCIsImZvckVhY2giLCJwcmV2ZW50RGVmYXVsdCIsIm1vdXNlQ29vcmRpbmF0ZXMiLCJtb3VzZUNvb3JkaW5hdGVzRnJvbUV2ZW50IiwiZG9tRWxlbWVudCIsImdldERPTUVsZW1lbnQiLCJtb3VzZUV2ZW50cyIsIm1vdXNlVXBFdmVudEhhbmRsZXIiLCJiaW5kIiwibW91c2VEb3duRXZlbnRIYW5kbGVyIiwibW91c2VNb3ZlRXZlbnRIYW5kbGVyIiwibW91c2VXaGVlbEV2ZW50SGFuZGxlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJtb2R1bGUiLCJleHBvcnRzIiwiTWF0aCIsIm1heCIsIm1pbiIsIndoZWVsRGVsdGEiLCJ0YXJnZXQiLCJkb21FbGVtZW50Qm91bmRpbmdDbGllbnRSZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiY2xpZW50WCIsImxlZnQiLCJjbGllbnRZIiwidG9wIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsWUFBWUMsUUFBUSxjQUFSLENBQWxCOztJQUVRQyxRLEdBQWtERixTLENBQWxERSxRO0lBQVVDLFUsR0FBd0NILFMsQ0FBeENHLFU7SUFBWUMsVSxHQUE0QkosUyxDQUE1QkksVTtJ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Q0FHLGtCQUFZRixXQUFaLElBQTJCLEVBQTNCOztBQUVFc0IsaUJBQVdRLGdCQUFYLENBQTRCLFNBQTVCLEVBQXVDTCxtQkFBdkM7QUFDQUgsaUJBQVdRLGdCQUFYLENBQTRCLFdBQTVCLEVBQXlDSCxxQkFBekM7QUFDQUwsaUJBQVdRLGdCQUFYLENBQTRCLFdBQTVCLEVBQXlDRixxQkFBekM7QUFDQU4saUJBQVdRLGdCQUFYLENBQTRCLFlBQTVCLEVBQTBDRCxzQkFBMUM7O0FBRUEsYUFBT0wsV0FBUDtBQUNEOzs7Ozs7QUFHSE8sT0FBT0MsT0FBUCxHQUFpQi9CLFdBQWpCOztBQUVBLFNBQVNnQixjQUFULENBQXdCSCxLQUF4QixFQUErQjtBQUM3QixNQUFNRSxRQUFRaUIsS0FBS0MsR0FBTCxDQUFTLENBQUMsQ0FBVixFQUFhRCxLQUFLRSxHQUFMLENBQVMsQ0FBVCxFQUFZckIsTUFBTXNCLFVBQWxCLENBQWIsQ0FBZCxDQUQ2QixDQUM4Qjs7QUFFM0QsU0FBT3BCLEtBQVA7QUFDRDs7QUFFRCxTQUFTSyx5QkFBVCxDQUFtQ1AsS0FBbkMsRUFBMEM7QUFDeEMsTUFBTVEsYUFBYVIsTUFBTXVCLE1BQXpCO0FBQUEsTUFBa0M7QUFDNUJDLGlDQUErQmhCLFdBQVdpQixxQkFBWCxFQURyQztBQUFBLE1BRU1uQixtQkFBbUIsQ0FDakIsRUFBRU4sTUFBTTBCLE9BQU4sR0FBZ0JGLDZCQUE2QkcsSUFBL0MsQ0FEaUIsRUFFakIsRUFBRTNCLE1BQU00QixPQUFOLEdBQWdCSiw2QkFBNkJLLEdBQS9DLENBRmlCLENBRnpCOztBQU9BLFNBQU92QixnQkFBUDtBQUNEIiwiZmlsZSI6Im1vdXNlRXZlbnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBjb25zdGFudHMgPSByZXF1aXJlKCcuLi9jb25zdGFudHMnKTtcblxuY29uc3QgeyBNT1VTRV9VUCwgTU9VU0VfRE9XTiwgTU9VU0VfTU9WRSwgTU9VU0VfV0hFRUwgfSA9IGNvbnN0YW50cztcblxuY2xhc3MgTW91c2VFdmVudHMge1xuICBjb25zdHJ1Y3RvcihoYW5kbGVyc01hcCwgbW91c2VEb3duLCBjYW52YXMpIHtcbiAgICB0aGlzLmhhbmRsZXJzTWFwID0gaGFuZGxlcnNNYXA7XG4gICAgdGhpcy5tb3VzZURvd24gPSBtb3VzZURvd247XG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gIH1cblxuICBvbk1vdXNlVXAobW91c2VVcEhhbmRsZXIpIHtcbiAgICB0aGlzLmFkZEhhbmRsZXIoTU9VU0VfVVAsIG1vdXNlVXBIYW5kbGVyKTtcbiAgfVxuXG4gIG9uTW91c2VEb3duKG1vdXNlRG93bkhhbmRsZXIpIHtcbiAgICB0aGlzLmFkZEhhbmRsZXIoTU9VU0VfRE9XTiwgbW91c2VEb3duSGFuZGxlcik7XG4gIH1cblxuICBvbk1vdXNlTW92ZShtb3VzZU1vdmVIYW5kbGVyKSB7XG4gICAgdGhpcy5hZGRIYW5kbGVyKE1PVVNFX01PVkUsIG1vdXNlTW92ZUhhbmRsZXIpO1xuICB9XG5cbiAgb25Nb3VzZVdoZWVsKG1vdXNlV2hlZWxIYW5kbGVyKSB7XG4gICAgdGhpcy5hZGRIYW5kbGVyKE1PVVNFX1dIRUVMLCBtb3VzZVdoZWVsSGFuZGxlcik7XG4gIH1cblxuICBhZGRIYW5kbGVyKGV2ZW50VHlwZSwgaGFuZGxlcikge1xuICAgIGNvbnN0IGhhbmRsZXJzID0gdGhpcy5oYW5kbGVyc01hcFtldmVudFR5cGVdO1xuXG4gICAgaGFuZGxlcnMucHVzaChoYW5kbGVyKTtcbiAgfVxuXG5cdG1vdXNlVXBFdmVudEhhbmRsZXIoZXZlbnQpIHtcbiAgICB0aGlzLm1vdXNlRG93biA9IGZhbHNlO1xuXG4gICAgdGhpcy5tb3VzZUV2ZW50SGFuZGxlcihldmVudCwgTU9VU0VfVVApO1xuICB9XG5cblx0bW91c2VEb3duRXZlbnRIYW5kbGVyKGV2ZW50KSB7XG4gICAgdGhpcy5tb3VzZURvd24gPSB0cnVlO1xuXG4gICAgdGhpcy5tb3VzZUV2ZW50SGFuZGxlcihldmVudCwgTU9VU0VfRE9XTik7XG4gIH1cblxuXHRtb3VzZU1vdmVFdmVudEhhbmRsZXIoZXZlbnQpIHtcbiAgICB0aGlzLm1vdXNlRXZlbnRIYW5kbGVyKGV2ZW50LCBNT1VTRV9NT1ZFKTtcbiAgfVxuXG4gIG1vdXNlV2hlZWxFdmVudEhhbmRsZXIoZXZlbnQpIHtcbiAgICBjb25zdCBkZWx0YSA9IGRlbHRhRnJvbUV2ZW50KGV2ZW50KSxcbiAgICAgICAgICBoYW5kbGVycyA9IHRoaXMuaGFuZGxlcnNNYXBbTU9VU0VfV0hFRUxdO1xuXG4gICAgaGFuZGxlcnMuZm9yRWFjaCgoaGFuZGxlcikgPT4gaGFuZGxlcihkZWx0YSkpO1xuXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG5cdG1vdXNlRXZlbnRIYW5kbGVyKGV2ZW50LCBldmVudFR5cGUpIHtcblx0XHRjb25zdCBoYW5kbGVycyA9IHRoaXMuaGFuZGxlcnNNYXBbZXZlbnRUeXBlXSxcblx0XHRcdFx0XHRtb3VzZUNvb3JkaW5hdGVzID0gbW91c2VDb29yZGluYXRlc0Zyb21FdmVudChldmVudCwgdGhpcy5jYW52YXMpO1xuXG5cdFx0aGFuZGxlcnMuZm9yRWFjaCgoaGFuZGxlcikgPT4gaGFuZGxlcihtb3VzZUNvb3JkaW5hdGVzLCB0aGlzLm1vdXNlRG93biwgdGhpcy5jYW52YXMpKTtcblxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoY2FudmFzKSB7XG4gICAgY29uc3QgaGFuZGxlcnNNYXAgPSB7fSxcbiAgICAgICAgICBtb3VzZURvd24gPSBmYWxzZSwgIC8vL1xuXHRcdFx0XHRcdGRvbUVsZW1lbnQgPSBjYW52YXMuZ2V0RE9NRWxlbWVudCgpLFxuXHRcdFx0XHRcdG1vdXNlRXZlbnRzID0gbmV3IE1vdXNlRXZlbnRzKGhhbmRsZXJzTWFwLCBtb3VzZURvd24sIGNhbnZhcyksXG5cdFx0XHRcdFx0bW91c2VVcEV2ZW50SGFuZGxlciA9IG1vdXNlRXZlbnRzLm1vdXNlVXBFdmVudEhhbmRsZXIuYmluZChtb3VzZUV2ZW50cyksXG5cdFx0XHRcdFx0bW91c2VEb3duRXZlbnRIYW5kbGVyID0gbW91c2VFdmVudHMubW91c2VEb3duRXZlbnRIYW5kbGVyLmJpbmQobW91c2VFdmVudHMpLFxuXHRcdFx0XHRcdG1vdXNlTW92ZUV2ZW50SGFuZGxlciA9IG1vdXNlRXZlbnRzLm1vdXNlTW92ZUV2ZW50SGFuZGxlci5iaW5kKG1vdXNlRXZlbnRzKSxcblx0XHRcdFx0XHRtb3VzZVdoZWVsRXZlbnRIYW5kbGVyID0gbW91c2VFdmVudHMubW91c2VXaGVlbEV2ZW50SGFuZGxlci5iaW5kKG1vdXNlRXZlbnRzKTtcblxuXHRcdGhhbmRsZXJzTWFwW01PVVNFX1VQXSA9IFtdO1xuXHRcdGhhbmRsZXJzTWFwW01PVVNFX0RPV05dID0gW107XG5cdFx0aGFuZGxlcnNNYXBbTU9VU0VfTU9WRV0gPSBbXTtcblx0XHRoYW5kbGVyc01hcFtNT1VTRV9XSEVFTF0gPSBbXTtcblxuICAgIGRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG1vdXNlVXBFdmVudEhhbmRsZXIpO1xuICAgIGRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgbW91c2VEb3duRXZlbnRIYW5kbGVyKTtcbiAgICBkb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG1vdXNlTW92ZUV2ZW50SGFuZGxlcik7XG4gICAgZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXdoZWVsJywgbW91c2VXaGVlbEV2ZW50SGFuZGxlcik7XG5cbiAgICByZXR1cm4gbW91c2VFdmVudHM7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBNb3VzZUV2ZW50cztcblxuZnVuY3Rpb24gZGVsdGFGcm9tRXZlbnQoZXZlbnQpIHtcbiAgY29uc3QgZGVsdGEgPSBNYXRoLm1heCgtMSwgTWF0aC5taW4oMSwgZXZlbnQud2hlZWxEZWx0YSkpOyAvLy9cblxuICByZXR1cm4gZGVsdGE7XG59XG5cbmZ1bmN0aW9uIG1vdXNlQ29vcmRpbmF0ZXNGcm9tRXZlbnQoZXZlbnQpIHtcbiAgY29uc3QgZG9tRWxlbWVudCA9IGV2ZW50LnRhcmdldCwgIC8vL1xuICAgICAgICBkb21FbGVtZW50Qm91bmRpbmdDbGllbnRSZWN0ID0gZG9tRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgICAgbW91c2VDb29yZGluYXRlcyA9IFtcbiAgICAgICAgICArKGV2ZW50LmNsaWVudFggLSBkb21FbGVtZW50Qm91bmRpbmdDbGllbnRSZWN0LmxlZnQpLFxuICAgICAgICAgIC0oZXZlbnQuY2xpZW50WSAtIGRvbUVsZW1lbnRCb3VuZGluZ0NsaWVudFJlY3QudG9wKVxuICAgICAgICBdO1xuXG4gIHJldHVybiBtb3VzZUNvb3JkaW5hdGVzO1xufVxuIl19
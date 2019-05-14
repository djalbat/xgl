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
      var _this = this;

      var delta = deltaFromEvent(event),
          handlers = this.handlersMap[MOUSE_WHEEL];

      handlers.forEach(function (handler) {
        return handler(delta, _this.canvas);
      });

      event.preventDefault();
    }
  }, {
    key: 'mouseEventHandler',
    value: function mouseEventHandler(event, eventType) {
      var _this2 = this;

      var handlers = this.handlersMap[eventType],
          mouseCoordinates = mouseCoordinatesFromEvent(event, this.canvas);

      handlers.forEach(function (handler) {
        return handler(mouseCoordinates, _this2.mouseDown, _this2.canvas);
      });

      event.preventDefault();
    }
  }], [{
    key: 'fromNothing',
    value: function fromNothing(canvas) {
      var handlersMap = {};

      handlersMap[MOUSE_UP] = [];
      handlersMap[MOUSE_DOWN] = [];
      handlersMap[MOUSE_MOVE] = [];
      handlersMap[MOUSE_WHEEL] = [];

      var mouseDown = false,
          ///
      mouseEvents = new MouseEvents(handlersMap, mouseDown, canvas),
          canvasDOMElement = canvas.getDOMElement(),
          mouseUpEventHandler = mouseEvents.mouseUpEventHandler.bind(mouseEvents),
          mouseDownEventHandler = mouseEvents.mouseDownEventHandler.bind(mouseEvents),
          mouseMoveEventHandler = mouseEvents.mouseMoveEventHandler.bind(mouseEvents),
          mouseWheelEventHandler = mouseEvents.mouseWheelEventHandler.bind(mouseEvents);

      canvasDOMElement.addEventListener('mouseup', mouseUpEventHandler);
      canvasDOMElement.addEventListener('mousedown', mouseDownEventHandler);
      canvasDOMElement.addEventListener('mousemove', mouseMoveEventHandler);
      canvasDOMElement.addEventListener('mousewheel', mouseWheelEventHandler);

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
  var canvasDOMElement = event.target,
      ///
  domElementBoundingClientRect = canvasDOMElement.getBoundingClientRect(),
      mouseCoordinates = [+(event.clientX - domElementBoundingClientRect.left), -(event.clientY - domElementBoundingClientRect.top)];

  return mouseCoordinates;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9taXNjZWxsYW5lb3VzL21vdXNlRXZlbnRzLmpzIl0sIm5hbWVzIjpbImNvbnN0YW50cyIsInJlcXVpcmUiLCJNT1VTRV9VUCIsIk1PVVNFX0RPV04iLCJNT1VTRV9NT1ZFIiwiTU9VU0VfV0hFRUwiLCJNb3VzZUV2ZW50cyIsImhhbmRsZXJzTWFwIiwibW91c2VEb3duIiwiY2FudmFzIiwibW91c2VVcEhhbmRsZXIiLCJhZGRIYW5kbGVyIiwibW91c2VEb3duSGFuZGxlciIsIm1vdXNlTW92ZUhhbmRsZXIiLCJtb3VzZVdoZWVsSGFuZGxlciIsImV2ZW50VHlwZSIsImhhbmRsZXIiLCJoYW5kbGVycyIsInB1c2giLCJldmVudCIsIm1vdXNlRXZlbnRIYW5kbGVyIiwiZGVsdGEiLCJkZWx0YUZyb21FdmVudCIsImZvckVhY2giLCJwcmV2ZW50RGVmYXVsdCIsIm1vdXNlQ29vcmRpbmF0ZXMiLCJtb3VzZUNvb3JkaW5hdGVzRnJvbUV2ZW50IiwibW91c2VFdmVudHMiLCJjYW52YXNET01FbGVtZW50IiwiZ2V0RE9NRWxlbWVudCIsIm1vdXNlVXBFdmVudEhhbmRsZXIiLCJiaW5kIiwibW91c2VEb3duRXZlbnRIYW5kbGVyIiwibW91c2VNb3ZlRXZlbnRIYW5kbGVyIiwibW91c2VXaGVlbEV2ZW50SGFuZGxlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJtb2R1bGUiLCJleHBvcnRzIiwiTWF0aCIsIm1heCIsIm1pbiIsIndoZWVsRGVsdGEiLCJ0YXJnZXQiLCJkb21FbGVtZW50Qm91bmRpbmdDbGllbnRSZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiY2xpZW50WCIsImxlZnQiLCJjbGllbnRZIiwidG9wIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsWUFBWUMsUUFBUSxjQUFSLENBQWxCOztJQUVRQyxRLEdBQWtERixTLENBQWxERSxRO0lBQVVDLFUsR0FBd0NILFMsQ0FBeENHLFU7SUFBWUMsVSxHQUE0QkosUyxDQUE1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QSxVQU1DTyx5QkFBeUJQLFlBQVlPLHNCQUFaLENBQW1DSCxJQUFuQyxDQUF3Q0osV0FBeEMsQ0FOMUI7O0FBUUFDLHVCQUFpQk8sZ0JBQWpCLENBQWtDLFNBQWxDLEVBQTZDTCxtQkFBN0M7QUFDQUYsdUJBQWlCTyxnQkFBakIsQ0FBa0MsV0FBbEMsRUFBK0NILHFCQUEvQztBQUNBSix1QkFBaUJPLGdCQUFqQixDQUFrQyxXQUFsQyxFQUErQ0YscUJBQS9DO0FBQ0FMLHVCQUFpQk8sZ0JBQWpCLENBQWtDLFlBQWxDLEVBQWdERCxzQkFBaEQ7O0FBRUEsYUFBT1AsV0FBUDtBQUNEOzs7Ozs7QUFHSFMsT0FBT0MsT0FBUCxHQUFpQi9CLFdBQWpCOztBQUVBLFNBQVNnQixjQUFULENBQXdCSCxLQUF4QixFQUErQjtBQUM3QixNQUFNRSxRQUFRaUIsS0FBS0MsR0FBTCxDQUFTLENBQUMsQ0FBVixFQUFhRCxLQUFLRSxHQUFMLENBQVMsQ0FBVCxFQUFZckIsTUFBTXNCLFVBQWxCLENBQWIsQ0FBZCxDQUQ2QixDQUM4Qjs7QUFFM0QsU0FBT3BCLEtBQVA7QUFDRDs7QUFFRCxTQUFTSyx5QkFBVCxDQUFtQ1AsS0FBbkMsRUFBMEM7QUFDeEMsTUFBTVMsbUJBQW1CVCxNQUFNdUIsTUFBL0I7QUFBQSxNQUF3QztBQUNsQ0MsaUNBQStCZixpQkFBaUJnQixxQkFBakIsRUFEckM7QUFBQSxNQUVNbkIsbUJBQW1CLENBQ2pCLEVBQUVOLE1BQU0wQixPQUFOLEdBQWdCRiw2QkFBNkJHLElBQS9DLENBRGlCLEVBRWpCLEVBQUUzQixNQUFNNEIsT0FBTixHQUFnQkosNkJBQTZCSyxHQUEvQyxDQUZpQixDQUZ6Qjs7QUFPQSxTQUFPdkIsZ0JBQVA7QUFDRCIsImZpbGUiOiJtb3VzZUV2ZW50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgY29uc3RhbnRzID0gcmVxdWlyZSgnLi4vY29uc3RhbnRzJyk7XG5cbmNvbnN0IHsgTU9VU0VfVVAsIE1PVVNFX0RPV04sIE1PVVNFX01PVkUsIE1PVVNFX1dIRUVMIH0gPSBjb25zdGFudHM7XG5cbmNsYXNzIE1vdXNlRXZlbnRzIHtcbiAgY29uc3RydWN0b3IoaGFuZGxlcnNNYXAsIG1vdXNlRG93biwgY2FudmFzKSB7XG4gICAgdGhpcy5oYW5kbGVyc01hcCA9IGhhbmRsZXJzTWFwO1xuICAgIHRoaXMubW91c2VEb3duID0gbW91c2VEb3duO1xuICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICB9XG5cbiAgb25Nb3VzZVVwKG1vdXNlVXBIYW5kbGVyKSB7XG4gICAgdGhpcy5hZGRIYW5kbGVyKE1PVVNFX1VQLCBtb3VzZVVwSGFuZGxlcik7XG4gIH1cblxuICBvbk1vdXNlRG93bihtb3VzZURvd25IYW5kbGVyKSB7XG4gICAgdGhpcy5hZGRIYW5kbGVyKE1PVVNFX0RPV04sIG1vdXNlRG93bkhhbmRsZXIpO1xuICB9XG5cbiAgb25Nb3VzZU1vdmUobW91c2VNb3ZlSGFuZGxlcikge1xuICAgIHRoaXMuYWRkSGFuZGxlcihNT1VTRV9NT1ZFLCBtb3VzZU1vdmVIYW5kbGVyKTtcbiAgfVxuXG4gIG9uTW91c2VXaGVlbChtb3VzZVdoZWVsSGFuZGxlcikge1xuICAgIHRoaXMuYWRkSGFuZGxlcihNT1VTRV9XSEVFTCwgbW91c2VXaGVlbEhhbmRsZXIpO1xuICB9XG5cbiAgYWRkSGFuZGxlcihldmVudFR5cGUsIGhhbmRsZXIpIHtcbiAgICBjb25zdCBoYW5kbGVycyA9IHRoaXMuaGFuZGxlcnNNYXBbZXZlbnRUeXBlXTtcblxuICAgIGhhbmRsZXJzLnB1c2goaGFuZGxlcik7XG4gIH1cblxuXHRtb3VzZVVwRXZlbnRIYW5kbGVyKGV2ZW50KSB7XG4gICAgdGhpcy5tb3VzZURvd24gPSBmYWxzZTtcblxuICAgIHRoaXMubW91c2VFdmVudEhhbmRsZXIoZXZlbnQsIE1PVVNFX1VQKTtcbiAgfVxuXG5cdG1vdXNlRG93bkV2ZW50SGFuZGxlcihldmVudCkge1xuICAgIHRoaXMubW91c2VEb3duID0gdHJ1ZTtcblxuICAgIHRoaXMubW91c2VFdmVudEhhbmRsZXIoZXZlbnQsIE1PVVNFX0RPV04pO1xuICB9XG5cblx0bW91c2VNb3ZlRXZlbnRIYW5kbGVyKGV2ZW50KSB7XG4gICAgdGhpcy5tb3VzZUV2ZW50SGFuZGxlcihldmVudCwgTU9VU0VfTU9WRSk7XG4gIH1cblxuICBtb3VzZVdoZWVsRXZlbnRIYW5kbGVyKGV2ZW50KSB7XG4gICAgY29uc3QgZGVsdGEgPSBkZWx0YUZyb21FdmVudChldmVudCksXG4gICAgICAgICAgaGFuZGxlcnMgPSB0aGlzLmhhbmRsZXJzTWFwW01PVVNFX1dIRUVMXTtcblxuICAgIGhhbmRsZXJzLmZvckVhY2goKGhhbmRsZXIpID0+IGhhbmRsZXIoZGVsdGEsIHRoaXMuY2FudmFzKSk7XG5cblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cblx0bW91c2VFdmVudEhhbmRsZXIoZXZlbnQsIGV2ZW50VHlwZSkge1xuXHRcdGNvbnN0IGhhbmRsZXJzID0gdGhpcy5oYW5kbGVyc01hcFtldmVudFR5cGVdLFxuXHRcdFx0XHRcdG1vdXNlQ29vcmRpbmF0ZXMgPSBtb3VzZUNvb3JkaW5hdGVzRnJvbUV2ZW50KGV2ZW50LCB0aGlzLmNhbnZhcyk7XG5cblx0XHRoYW5kbGVycy5mb3JFYWNoKChoYW5kbGVyKSA9PiBoYW5kbGVyKG1vdXNlQ29vcmRpbmF0ZXMsIHRoaXMubW91c2VEb3duLCB0aGlzLmNhbnZhcykpO1xuXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0fVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZyhjYW52YXMpIHtcbiAgICBjb25zdCBoYW5kbGVyc01hcCA9IHt9O1xuXG4gICAgaGFuZGxlcnNNYXBbIE1PVVNFX1VQIF0gPSBbXTtcbiAgICBoYW5kbGVyc01hcFsgTU9VU0VfRE9XTiBdID0gW107XG4gICAgaGFuZGxlcnNNYXBbIE1PVVNFX01PVkUgXSA9IFtdO1xuICAgIGhhbmRsZXJzTWFwWyBNT1VTRV9XSEVFTCBdID0gW107XG5cbiAgICBjb25zdCBtb3VzZURvd24gPSBmYWxzZSwgIC8vL1xuXHRcdFx0XHRcdG1vdXNlRXZlbnRzID0gbmV3IE1vdXNlRXZlbnRzKGhhbmRsZXJzTWFwLCBtb3VzZURvd24sIGNhbnZhcyksXG4gICAgICAgICAgY2FudmFzRE9NRWxlbWVudCA9IGNhbnZhcy5nZXRET01FbGVtZW50KCksXG5cdFx0XHRcdFx0bW91c2VVcEV2ZW50SGFuZGxlciA9IG1vdXNlRXZlbnRzLm1vdXNlVXBFdmVudEhhbmRsZXIuYmluZChtb3VzZUV2ZW50cyksXG5cdFx0XHRcdFx0bW91c2VEb3duRXZlbnRIYW5kbGVyID0gbW91c2VFdmVudHMubW91c2VEb3duRXZlbnRIYW5kbGVyLmJpbmQobW91c2VFdmVudHMpLFxuXHRcdFx0XHRcdG1vdXNlTW92ZUV2ZW50SGFuZGxlciA9IG1vdXNlRXZlbnRzLm1vdXNlTW92ZUV2ZW50SGFuZGxlci5iaW5kKG1vdXNlRXZlbnRzKSxcblx0XHRcdFx0XHRtb3VzZVdoZWVsRXZlbnRIYW5kbGVyID0gbW91c2VFdmVudHMubW91c2VXaGVlbEV2ZW50SGFuZGxlci5iaW5kKG1vdXNlRXZlbnRzKTtcblxuICAgIGNhbnZhc0RPTUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG1vdXNlVXBFdmVudEhhbmRsZXIpO1xuICAgIGNhbnZhc0RPTUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgbW91c2VEb3duRXZlbnRIYW5kbGVyKTtcbiAgICBjYW52YXNET01FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG1vdXNlTW92ZUV2ZW50SGFuZGxlcik7XG4gICAgY2FudmFzRE9NRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXdoZWVsJywgbW91c2VXaGVlbEV2ZW50SGFuZGxlcik7XG5cbiAgICByZXR1cm4gbW91c2VFdmVudHM7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBNb3VzZUV2ZW50cztcblxuZnVuY3Rpb24gZGVsdGFGcm9tRXZlbnQoZXZlbnQpIHtcbiAgY29uc3QgZGVsdGEgPSBNYXRoLm1heCgtMSwgTWF0aC5taW4oMSwgZXZlbnQud2hlZWxEZWx0YSkpOyAvLy9cblxuICByZXR1cm4gZGVsdGE7XG59XG5cbmZ1bmN0aW9uIG1vdXNlQ29vcmRpbmF0ZXNGcm9tRXZlbnQoZXZlbnQpIHtcbiAgY29uc3QgY2FudmFzRE9NRWxlbWVudCA9IGV2ZW50LnRhcmdldCwgIC8vL1xuICAgICAgICBkb21FbGVtZW50Qm91bmRpbmdDbGllbnRSZWN0ID0gY2FudmFzRE9NRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgICAgbW91c2VDb29yZGluYXRlcyA9IFtcbiAgICAgICAgICArKGV2ZW50LmNsaWVudFggLSBkb21FbGVtZW50Qm91bmRpbmdDbGllbnRSZWN0LmxlZnQpLFxuICAgICAgICAgIC0oZXZlbnQuY2xpZW50WSAtIGRvbUVsZW1lbnRCb3VuZGluZ0NsaWVudFJlY3QudG9wKVxuICAgICAgICBdO1xuXG4gIHJldHVybiBtb3VzZUNvb3JkaW5hdGVzO1xufVxuIl19
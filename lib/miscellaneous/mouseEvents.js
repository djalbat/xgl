'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var constants = require('../constants');

var MOUSE_UP = constants.MOUSE_UP,
    MOUSE_DOWN = constants.MOUSE_DOWN,
    MOUSE_MOVE = constants.MOUSE_MOVE,
    MOUSE_WHEEL = constants.MOUSE_WHEEL;

var MouseEvents = function () {
  function MouseEvents(handlersMap, mouseDown) {
    _classCallCheck(this, MouseEvents);

    this.handlersMap = handlersMap;
    this.mouseDown = mouseDown;
  }

  _createClass(MouseEvents, [{
    key: 'mouseEventListener',
    value: function mouseEventListener(event, eventType) {
      var _this = this;

      var handlers = this.handlersMap[eventType],
          mouseCoordinates = mouseCoordinatesFromEvent(event);

      handlers.forEach(function (handler) {
        return handler(mouseCoordinates, _this.mouseDown);
      });

      event.preventDefault();
    }
  }, {
    key: 'mouseUpEventListener',
    value: function mouseUpEventListener(event) {
      this.mouseDown = false;

      this.mouseEventListener(event, MOUSE_UP);
    }
  }, {
    key: 'mouseDownEventListener',
    value: function mouseDownEventListener(event) {
      this.mouseDown = true;

      this.mouseEventListener(event, MOUSE_DOWN);
    }
  }, {
    key: 'mouseMoveEventListener',
    value: function mouseMoveEventListener(event) {
      this.mouseEventListener(event, MOUSE_MOVE);
    }
  }, {
    key: 'mouseWheelEventListener',
    value: function mouseWheelEventListener(event) {
      var handlers = this.handlersMap[MOUSE_WHEEL],
          mouseWheelDelta = mouseWheelDeltaFromEvent(event);

      handlers.forEach(function (handler) {
        return handler(mouseWheelDelta);
      });

      event.preventDefault();
    }
  }, {
    key: 'addMouseUpHandler',
    value: function addMouseUpHandler(mouseUpHandler) {
      var mouseUpHandlers = this.handlersMap[MOUSE_UP];

      mouseUpHandlers.push(mouseUpHandler);
    }
  }, {
    key: 'addMouseDownHandler',
    value: function addMouseDownHandler(mouseDownHandler) {
      var mouseDownHandlers = this.handlersMap[MOUSE_DOWN];

      mouseDownHandlers.push(mouseDownHandler);
    }
  }, {
    key: 'addMouseMoveHandler',
    value: function addMouseMoveHandler(mouseMoveHandler) {
      var mouseMoveHandlers = this.handlersMap[MOUSE_MOVE];

      mouseMoveHandlers.push(mouseMoveHandler);
    }
  }, {
    key: 'addMouseWheelHandler',
    value: function addMouseWheelHandler(mouseWheelHandler) {
      var mouseWheelHandlers = this.handlersMap[MOUSE_WHEEL];

      mouseWheelHandlers.push(mouseWheelHandler);
    }
  }, {
    key: 'initialise',
    value: function initialise(canvas) {
      var canvasDOMElement = canvas.getDOMElement(),
          mouseUpEventListener = this.mouseUpEventListener.bind(this),
          mouseDownEventListener = this.mouseDownEventListener.bind(this),
          mouseMoveEventListener = this.mouseMoveEventListener.bind(this),
          mouseWheelEventListener = this.mouseWheelEventListener.bind(this);

      this.handlersMap[MOUSE_UP] = [];
      this.handlersMap[MOUSE_DOWN] = [];
      this.handlersMap[MOUSE_MOVE] = [];
      this.handlersMap[MOUSE_WHEEL] = [];

      canvasDOMElement.addEventListener('mouseup', mouseUpEventListener);

      canvasDOMElement.addEventListener('mousedown', mouseDownEventListener);

      canvasDOMElement.addEventListener('mousemove', mouseMoveEventListener);

      canvasDOMElement.addEventListener('mousewheel', mouseWheelEventListener);
    }
  }], [{
    key: 'fromNothing',
    value: function fromNothing() {
      var handlersMap = {},
          mouseDown = false,
          ///
      mouseEvents = new MouseEvents(handlersMap, mouseDown);

      return mouseEvents;
    }
  }]);

  return MouseEvents;
}();

module.exports = MouseEvents;

function mouseWheelDeltaFromEvent(event) {
  var mouseWheelDelta = Math.max(-1, Math.min(1, event.wheelDelta)); ///

  return mouseWheelDelta;
}

function mouseCoordinatesFromEvent(event) {
  var target = event.target,
      clientX = event.clientX,
      clientY = event.clientY,
      canvasDOMElement = target,
      boundingClientRect = canvasDOMElement.getBoundingClientRect(),
      top = boundingClientRect.top,
      left = boundingClientRect.left,
      mouseCoordinates = [clientX - left, top - clientY];


  return mouseCoordinates;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9taXNjZWxsYW5lb3VzL21vdXNlRXZlbnRzLmpzIl0sIm5hbWVzIjpbImNvbnN0YW50cyIsInJlcXVpcmUiLCJNT1VTRV9VUCIsIk1PVVNFX0RPV04iLCJNT1VTRV9NT1ZFIiwiTU9VU0VfV0hFRUwiLCJNb3VzZUV2ZW50cyIsImhhbmRsZXJzTWFwIiwibW91c2VEb3duIiwiZXZlbnQiLCJldmVudFR5cGUiLCJoYW5kbGVycyIsIm1vdXNlQ29vcmRpbmF0ZXMiLCJtb3VzZUNvb3JkaW5hdGVzRnJvbUV2ZW50IiwiZm9yRWFjaCIsImhhbmRsZXIiLCJwcmV2ZW50RGVmYXVsdCIsIm1vdXNlRXZlbnRMaXN0ZW5lciIsIm1vdXNlV2hlZWxEZWx0YSIsIm1vdXNlV2hlZWxEZWx0YUZyb21FdmVudCIsIm1vdXNlVXBIYW5kbGVyIiwibW91c2VVcEhhbmRsZXJzIiwicHVzaCIsIm1vdXNlRG93bkhhbmRsZXIiLCJtb3VzZURvd25IYW5kbGVycyIsIm1vdXNlTW92ZUhhbmRsZXIiLCJtb3VzZU1vdmVIYW5kbGVycyIsIm1vdXNlV2hlZWxIYW5kbGVyIiwibW91c2VXaGVlbEhhbmRsZXJzIiwiY2FudmFzIiwiY2FudmFzRE9NRWxlbWVudCIsImdldERPTUVsZW1lbnQiLCJtb3VzZVVwRXZlbnRMaXN0ZW5lciIsImJpbmQiLCJtb3VzZURvd25FdmVudExpc3RlbmVyIiwibW91c2VNb3ZlRXZlbnRMaXN0ZW5lciIsIm1vdXNlV2hlZWxFdmVudExpc3RlbmVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm1vdXNlRXZlbnRzIiwibW9kdWxlIiwiZXhwb3J0cyIsIk1hdGgiLCJtYXgiLCJtaW4iLCJ3aGVlbERlbHRhIiwidGFyZ2V0IiwiY2xpZW50WCIsImNsaWVudFkiLCJib3VuZGluZ0NsaWVudFJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0b3AiLCJsZWZ0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsWUFBWUMsUUFBUSxjQUFS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TWxDdkMsZ0JBTmtDLEdBTWYsQ0FFakJrQyxVQUFVSyxJQUZPLEVBSWpCRCxNQUFNSCxPQUpXLENBTmU7OztBQWN4QyxTQUFPbkMsZ0JBQVA7QUFDRCIsImZpbGUiOiJtb3VzZUV2ZW50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgY29uc3RhbnRzID0gcmVxdWlyZSgnLi4vY29uc3RhbnRzJyk7XG5cbmNvbnN0IHsgTU9VU0VfVVAsIE1PVVNFX0RPV04sIE1PVVNFX01PVkUsIE1PVVNFX1dIRUVMIH0gPSBjb25zdGFudHM7XG5cbmNsYXNzIE1vdXNlRXZlbnRzIHtcbiAgY29uc3RydWN0b3IoaGFuZGxlcnNNYXAsIG1vdXNlRG93bikge1xuICAgIHRoaXMuaGFuZGxlcnNNYXAgPSBoYW5kbGVyc01hcDtcbiAgICB0aGlzLm1vdXNlRG93biA9IG1vdXNlRG93bjtcbiAgfVxuXG4gIG1vdXNlRXZlbnRMaXN0ZW5lcihldmVudCwgZXZlbnRUeXBlKSB7XG4gICAgY29uc3QgaGFuZGxlcnMgPSB0aGlzLmhhbmRsZXJzTWFwW2V2ZW50VHlwZV0sXG4gICAgICAgICAgbW91c2VDb29yZGluYXRlcyA9IG1vdXNlQ29vcmRpbmF0ZXNGcm9tRXZlbnQoZXZlbnQpO1xuXG4gICAgaGFuZGxlcnMuZm9yRWFjaCgoaGFuZGxlcikgPT4gaGFuZGxlcihtb3VzZUNvb3JkaW5hdGVzLCB0aGlzLm1vdXNlRG93bikpO1xuXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIG1vdXNlVXBFdmVudExpc3RlbmVyKGV2ZW50KSB7XG4gICAgdGhpcy5tb3VzZURvd24gPSBmYWxzZTtcblxuICAgIHRoaXMubW91c2VFdmVudExpc3RlbmVyKGV2ZW50LCBNT1VTRV9VUCk7XG4gIH1cblxuXHRtb3VzZURvd25FdmVudExpc3RlbmVyKGV2ZW50KSB7XG4gICAgdGhpcy5tb3VzZURvd24gPSB0cnVlO1xuXG4gICAgdGhpcy5tb3VzZUV2ZW50TGlzdGVuZXIoZXZlbnQsIE1PVVNFX0RPV04pO1xuICB9XG5cblx0bW91c2VNb3ZlRXZlbnRMaXN0ZW5lcihldmVudCkge1xuICAgIHRoaXMubW91c2VFdmVudExpc3RlbmVyKGV2ZW50LCBNT1VTRV9NT1ZFKTtcbiAgfVxuXG4gIG1vdXNlV2hlZWxFdmVudExpc3RlbmVyKGV2ZW50KSB7XG4gICAgY29uc3QgaGFuZGxlcnMgPSB0aGlzLmhhbmRsZXJzTWFwWyBNT1VTRV9XSEVFTCBdLFxuICAgICAgICAgIG1vdXNlV2hlZWxEZWx0YSA9IG1vdXNlV2hlZWxEZWx0YUZyb21FdmVudChldmVudCk7XG5cbiAgICBoYW5kbGVycy5mb3JFYWNoKChoYW5kbGVyKSA9PiBoYW5kbGVyKG1vdXNlV2hlZWxEZWx0YSkpO1xuXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIGFkZE1vdXNlVXBIYW5kbGVyKG1vdXNlVXBIYW5kbGVyKSB7XG4gICAgY29uc3QgbW91c2VVcEhhbmRsZXJzID0gdGhpcy5oYW5kbGVyc01hcFsgTU9VU0VfVVAgXTtcblxuICAgIG1vdXNlVXBIYW5kbGVycy5wdXNoKG1vdXNlVXBIYW5kbGVyKTtcbiAgfVxuXG4gIGFkZE1vdXNlRG93bkhhbmRsZXIobW91c2VEb3duSGFuZGxlcikge1xuICAgIGNvbnN0IG1vdXNlRG93bkhhbmRsZXJzID0gdGhpcy5oYW5kbGVyc01hcFsgTU9VU0VfRE9XTiBdO1xuXG4gICAgbW91c2VEb3duSGFuZGxlcnMucHVzaChtb3VzZURvd25IYW5kbGVyKTtcbiAgfVxuXG4gIGFkZE1vdXNlTW92ZUhhbmRsZXIobW91c2VNb3ZlSGFuZGxlcikge1xuICAgIGNvbnN0IG1vdXNlTW92ZUhhbmRsZXJzID0gdGhpcy5oYW5kbGVyc01hcFsgTU9VU0VfTU9WRSBdO1xuXG4gICAgbW91c2VNb3ZlSGFuZGxlcnMucHVzaChtb3VzZU1vdmVIYW5kbGVyKTtcbiAgfVxuXG4gIGFkZE1vdXNlV2hlZWxIYW5kbGVyKG1vdXNlV2hlZWxIYW5kbGVyKSB7XG4gICAgY29uc3QgbW91c2VXaGVlbEhhbmRsZXJzID0gdGhpcy5oYW5kbGVyc01hcFsgTU9VU0VfV0hFRUwgXTtcblxuICAgIG1vdXNlV2hlZWxIYW5kbGVycy5wdXNoKG1vdXNlV2hlZWxIYW5kbGVyKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoY2FudmFzKSB7XG4gICAgICBjb25zdCBjYW52YXNET01FbGVtZW50ID0gY2FudmFzLmdldERPTUVsZW1lbnQoKSxcbiAgICAgICAgICAgIG1vdXNlVXBFdmVudExpc3RlbmVyID0gdGhpcy5tb3VzZVVwRXZlbnRMaXN0ZW5lci5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgbW91c2VEb3duRXZlbnRMaXN0ZW5lciA9IHRoaXMubW91c2VEb3duRXZlbnRMaXN0ZW5lci5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgbW91c2VNb3ZlRXZlbnRMaXN0ZW5lciA9IHRoaXMubW91c2VNb3ZlRXZlbnRMaXN0ZW5lci5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgbW91c2VXaGVlbEV2ZW50TGlzdGVuZXIgPSB0aGlzLm1vdXNlV2hlZWxFdmVudExpc3RlbmVyLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLmhhbmRsZXJzTWFwWyBNT1VTRV9VUCBdID0gW107XG4gICAgdGhpcy5oYW5kbGVyc01hcFsgTU9VU0VfRE9XTiBdID0gW107XG4gICAgdGhpcy5oYW5kbGVyc01hcFsgTU9VU0VfTU9WRSBdID0gW107XG4gICAgdGhpcy5oYW5kbGVyc01hcFsgTU9VU0VfV0hFRUwgXSA9IFtdO1xuXG4gICAgY2FudmFzRE9NRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgbW91c2VVcEV2ZW50TGlzdGVuZXIpO1xuXG4gICAgY2FudmFzRE9NRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBtb3VzZURvd25FdmVudExpc3RlbmVyKTtcblxuICAgIGNhbnZhc0RPTUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgbW91c2VNb3ZlRXZlbnRMaXN0ZW5lcik7XG5cbiAgICBjYW52YXNET01FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNld2hlZWwnLCBtb3VzZVdoZWVsRXZlbnRMaXN0ZW5lcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgaGFuZGxlcnNNYXAgPSB7fSxcbiAgICAgICAgICBtb3VzZURvd24gPSBmYWxzZSwgIC8vL1xuXHRcdFx0XHRcdG1vdXNlRXZlbnRzID0gbmV3IE1vdXNlRXZlbnRzKGhhbmRsZXJzTWFwLCBtb3VzZURvd24pO1xuXG4gICAgcmV0dXJuIG1vdXNlRXZlbnRzO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTW91c2VFdmVudHM7XG5cbmZ1bmN0aW9uIG1vdXNlV2hlZWxEZWx0YUZyb21FdmVudChldmVudCkge1xuICBjb25zdCBtb3VzZVdoZWVsRGVsdGEgPSBNYXRoLm1heCgtMSwgTWF0aC5taW4oMSwgZXZlbnQud2hlZWxEZWx0YSkpOyAvLy9cblxuICByZXR1cm4gbW91c2VXaGVlbERlbHRhO1xufVxuXG5mdW5jdGlvbiBtb3VzZUNvb3JkaW5hdGVzRnJvbUV2ZW50KGV2ZW50KSB7XG4gIGNvbnN0IHsgdGFyZ2V0LCBjbGllbnRYLCBjbGllbnRZIH0gPSBldmVudCxcbiAgICAgICAgY2FudmFzRE9NRWxlbWVudCA9IHRhcmdldCwgIC8vL1xuICAgICAgICBib3VuZGluZ0NsaWVudFJlY3QgPSBjYW52YXNET01FbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgICB0b3AgPSBib3VuZGluZ0NsaWVudFJlY3QudG9wLFxuICAgICAgICBsZWZ0ID0gYm91bmRpbmdDbGllbnRSZWN0LmxlZnQsXG4gICAgICAgIG1vdXNlQ29vcmRpbmF0ZXMgPSBbXG5cbiAgICAgICAgICBjbGllbnRYIC0gbGVmdCxcblxuICAgICAgICAgIHRvcCAtIGNsaWVudFksXG5cbiAgICAgICAgXTtcblxuICByZXR1cm4gbW91c2VDb29yZGluYXRlcztcbn1cbiJdfQ==
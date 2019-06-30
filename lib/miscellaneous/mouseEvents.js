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
    value: function fromNothing(canvas) {
      var handlersMap = {},
          mouseDown = false,
          ///
      mouseEvents = new MouseEvents(handlersMap, mouseDown);

      mouseEvents.initialise(canvas);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9taXNjZWxsYW5lb3VzL21vdXNlRXZlbnRzLmpzIl0sIm5hbWVzIjpbImNvbnN0YW50cyIsInJlcXVpcmUiLCJNT1VTRV9VUCIsIk1PVVNFX0RPV04iLCJNT1VTRV9NT1ZFIiwiTU9VU0VfV0hFRUwiLCJNb3VzZUV2ZW50cyIsImhhbmRsZXJzTWFwIiwibW91c2VEb3duIiwiZXZlbnQiLCJldmVudFR5cGUiLCJoYW5kbGVycyIsIm1vdXNlQ29vcmRpbmF0ZXMiLCJtb3VzZUNvb3JkaW5hdGVzRnJvbUV2ZW50IiwiZm9yRWFjaCIsImhhbmRsZXIiLCJwcmV2ZW50RGVmYXVsdCIsIm1vdXNlRXZlbnRMaXN0ZW5lciIsIm1vdXNlV2hlZWxEZWx0YSIsIm1vdXNlV2hlZWxEZWx0YUZyb21FdmVudCIsIm1vdXNlVXBIYW5kbGVyIiwibW91c2VVcEhhbmRsZXJzIiwicHVzaCIsIm1vdXNlRG93bkhhbmRsZXIiLCJtb3VzZURvd25IYW5kbGVycyIsIm1vdXNlTW92ZUhhbmRsZXIiLCJtb3VzZU1vdmVIYW5kbGVycyIsIm1vdXNlV2hlZWxIYW5kbGVyIiwibW91c2VXaGVlbEhhbmRsZXJzIiwiY2FudmFzIiwiY2FudmFzRE9NRWxlbWVudCIsImdldERPTUVsZW1lbnQiLCJtb3VzZVVwRXZlbnRMaXN0ZW5lciIsImJpbmQiLCJtb3VzZURvd25FdmVudExpc3RlbmVyIiwibW91c2VNb3ZlRXZlbnRMaXN0ZW5lciIsIm1vdXNlV2hlZWxFdmVudExpc3RlbmVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm1vdXNlRXZlbnRzIiwiaW5pdGlhbGlzZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJNYXRoIiwibWF4IiwibWluIiwid2hlZWxEZWx0YSIsInRhcmdldCIsImNsaWVudFgiLCJjbGllbnRZIiwiYm91bmRpbmdDbGllbnRSZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9wIiwibGVmdCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFlB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bUJFLEdBSlM7QUFBQSxNQUtsQ0MsSUFMa0MsR0FLM0JILG1CQUFtQkcsSUFMUTtBQUFBLE1BTWxDeEMsZ0JBTmtDLEdBTWYsQ0FFakJtQyxVQUFVSyxJQUZPLEVBSWpCRCxNQUFNSCxPQUpXLENBTmU7OztBQWN4QyxTQUFPcEMsZ0JBQVA7QUFDRCIsImZpbGUiOiJtb3VzZUV2ZW50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgY29uc3RhbnRzID0gcmVxdWlyZSgnLi4vY29uc3RhbnRzJyk7XG5cbmNvbnN0IHsgTU9VU0VfVVAsIE1PVVNFX0RPV04sIE1PVVNFX01PVkUsIE1PVVNFX1dIRUVMIH0gPSBjb25zdGFudHM7XG5cbmNsYXNzIE1vdXNlRXZlbnRzIHtcbiAgY29uc3RydWN0b3IoaGFuZGxlcnNNYXAsIG1vdXNlRG93bikge1xuICAgIHRoaXMuaGFuZGxlcnNNYXAgPSBoYW5kbGVyc01hcDtcbiAgICB0aGlzLm1vdXNlRG93biA9IG1vdXNlRG93bjtcbiAgfVxuXG4gIG1vdXNlRXZlbnRMaXN0ZW5lcihldmVudCwgZXZlbnRUeXBlKSB7XG4gICAgY29uc3QgaGFuZGxlcnMgPSB0aGlzLmhhbmRsZXJzTWFwW2V2ZW50VHlwZV0sXG4gICAgICAgICAgbW91c2VDb29yZGluYXRlcyA9IG1vdXNlQ29vcmRpbmF0ZXNGcm9tRXZlbnQoZXZlbnQpO1xuXG4gICAgaGFuZGxlcnMuZm9yRWFjaCgoaGFuZGxlcikgPT4gaGFuZGxlcihtb3VzZUNvb3JkaW5hdGVzLCB0aGlzLm1vdXNlRG93bikpO1xuXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIG1vdXNlVXBFdmVudExpc3RlbmVyKGV2ZW50KSB7XG4gICAgdGhpcy5tb3VzZURvd24gPSBmYWxzZTtcblxuICAgIHRoaXMubW91c2VFdmVudExpc3RlbmVyKGV2ZW50LCBNT1VTRV9VUCk7XG4gIH1cblxuXHRtb3VzZURvd25FdmVudExpc3RlbmVyKGV2ZW50KSB7XG4gICAgdGhpcy5tb3VzZURvd24gPSB0cnVlO1xuXG4gICAgdGhpcy5tb3VzZUV2ZW50TGlzdGVuZXIoZXZlbnQsIE1PVVNFX0RPV04pO1xuICB9XG5cblx0bW91c2VNb3ZlRXZlbnRMaXN0ZW5lcihldmVudCkge1xuICAgIHRoaXMubW91c2VFdmVudExpc3RlbmVyKGV2ZW50LCBNT1VTRV9NT1ZFKTtcbiAgfVxuXG4gIG1vdXNlV2hlZWxFdmVudExpc3RlbmVyKGV2ZW50KSB7XG4gICAgY29uc3QgaGFuZGxlcnMgPSB0aGlzLmhhbmRsZXJzTWFwWyBNT1VTRV9XSEVFTCBdLFxuICAgICAgICAgIG1vdXNlV2hlZWxEZWx0YSA9IG1vdXNlV2hlZWxEZWx0YUZyb21FdmVudChldmVudCk7XG5cbiAgICBoYW5kbGVycy5mb3JFYWNoKChoYW5kbGVyKSA9PiBoYW5kbGVyKG1vdXNlV2hlZWxEZWx0YSkpO1xuXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIGFkZE1vdXNlVXBIYW5kbGVyKG1vdXNlVXBIYW5kbGVyKSB7XG4gICAgY29uc3QgbW91c2VVcEhhbmRsZXJzID0gdGhpcy5oYW5kbGVyc01hcFsgTU9VU0VfVVAgXTtcblxuICAgIG1vdXNlVXBIYW5kbGVycy5wdXNoKG1vdXNlVXBIYW5kbGVyKTtcbiAgfVxuXG4gIGFkZE1vdXNlRG93bkhhbmRsZXIobW91c2VEb3duSGFuZGxlcikge1xuICAgIGNvbnN0IG1vdXNlRG93bkhhbmRsZXJzID0gdGhpcy5oYW5kbGVyc01hcFsgTU9VU0VfRE9XTiBdO1xuXG4gICAgbW91c2VEb3duSGFuZGxlcnMucHVzaChtb3VzZURvd25IYW5kbGVyKTtcbiAgfVxuXG4gIGFkZE1vdXNlTW92ZUhhbmRsZXIobW91c2VNb3ZlSGFuZGxlcikge1xuICAgIGNvbnN0IG1vdXNlTW92ZUhhbmRsZXJzID0gdGhpcy5oYW5kbGVyc01hcFsgTU9VU0VfTU9WRSBdO1xuXG4gICAgbW91c2VNb3ZlSGFuZGxlcnMucHVzaChtb3VzZU1vdmVIYW5kbGVyKTtcbiAgfVxuXG4gIGFkZE1vdXNlV2hlZWxIYW5kbGVyKG1vdXNlV2hlZWxIYW5kbGVyKSB7XG4gICAgY29uc3QgbW91c2VXaGVlbEhhbmRsZXJzID0gdGhpcy5oYW5kbGVyc01hcFsgTU9VU0VfV0hFRUwgXTtcblxuICAgIG1vdXNlV2hlZWxIYW5kbGVycy5wdXNoKG1vdXNlV2hlZWxIYW5kbGVyKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoY2FudmFzKSB7XG4gICAgICBjb25zdCBjYW52YXNET01FbGVtZW50ID0gY2FudmFzLmdldERPTUVsZW1lbnQoKSxcbiAgICAgICAgICAgIG1vdXNlVXBFdmVudExpc3RlbmVyID0gdGhpcy5tb3VzZVVwRXZlbnRMaXN0ZW5lci5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgbW91c2VEb3duRXZlbnRMaXN0ZW5lciA9IHRoaXMubW91c2VEb3duRXZlbnRMaXN0ZW5lci5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgbW91c2VNb3ZlRXZlbnRMaXN0ZW5lciA9IHRoaXMubW91c2VNb3ZlRXZlbnRMaXN0ZW5lci5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgbW91c2VXaGVlbEV2ZW50TGlzdGVuZXIgPSB0aGlzLm1vdXNlV2hlZWxFdmVudExpc3RlbmVyLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLmhhbmRsZXJzTWFwWyBNT1VTRV9VUCBdID0gW107XG4gICAgdGhpcy5oYW5kbGVyc01hcFsgTU9VU0VfRE9XTiBdID0gW107XG4gICAgdGhpcy5oYW5kbGVyc01hcFsgTU9VU0VfTU9WRSBdID0gW107XG4gICAgdGhpcy5oYW5kbGVyc01hcFsgTU9VU0VfV0hFRUwgXSA9IFtdO1xuXG4gICAgY2FudmFzRE9NRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgbW91c2VVcEV2ZW50TGlzdGVuZXIpO1xuXG4gICAgY2FudmFzRE9NRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBtb3VzZURvd25FdmVudExpc3RlbmVyKTtcblxuICAgIGNhbnZhc0RPTUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgbW91c2VNb3ZlRXZlbnRMaXN0ZW5lcik7XG5cbiAgICBjYW52YXNET01FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNld2hlZWwnLCBtb3VzZVdoZWVsRXZlbnRMaXN0ZW5lcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoY2FudmFzKSB7XG4gICAgY29uc3QgaGFuZGxlcnNNYXAgPSB7fSxcbiAgICAgICAgICBtb3VzZURvd24gPSBmYWxzZSwgIC8vL1xuXHRcdFx0XHRcdG1vdXNlRXZlbnRzID0gbmV3IE1vdXNlRXZlbnRzKGhhbmRsZXJzTWFwLCBtb3VzZURvd24pO1xuXG4gICAgbW91c2VFdmVudHMuaW5pdGlhbGlzZShjYW52YXMpO1xuXG4gICAgcmV0dXJuIG1vdXNlRXZlbnRzO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTW91c2VFdmVudHM7XG5cbmZ1bmN0aW9uIG1vdXNlV2hlZWxEZWx0YUZyb21FdmVudChldmVudCkge1xuICBjb25zdCBtb3VzZVdoZWVsRGVsdGEgPSBNYXRoLm1heCgtMSwgTWF0aC5taW4oMSwgZXZlbnQud2hlZWxEZWx0YSkpOyAvLy9cblxuICByZXR1cm4gbW91c2VXaGVlbERlbHRhO1xufVxuXG5mdW5jdGlvbiBtb3VzZUNvb3JkaW5hdGVzRnJvbUV2ZW50KGV2ZW50KSB7XG4gIGNvbnN0IHsgdGFyZ2V0LCBjbGllbnRYLCBjbGllbnRZIH0gPSBldmVudCxcbiAgICAgICAgY2FudmFzRE9NRWxlbWVudCA9IHRhcmdldCwgIC8vL1xuICAgICAgICBib3VuZGluZ0NsaWVudFJlY3QgPSBjYW52YXNET01FbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgICB0b3AgPSBib3VuZGluZ0NsaWVudFJlY3QudG9wLFxuICAgICAgICBsZWZ0ID0gYm91bmRpbmdDbGllbnRSZWN0LmxlZnQsXG4gICAgICAgIG1vdXNlQ29vcmRpbmF0ZXMgPSBbXG5cbiAgICAgICAgICBjbGllbnRYIC0gbGVmdCxcblxuICAgICAgICAgIHRvcCAtIGNsaWVudFksXG5cbiAgICAgICAgXTtcblxuICByZXR1cm4gbW91c2VDb29yZGluYXRlcztcbn1cbiJdfQ==
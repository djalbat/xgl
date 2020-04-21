"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _constants = require("../constants");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MouseEvents = /*#__PURE__*/function () {
  function MouseEvents(handlersMap, mouseDown) {
    _classCallCheck(this, MouseEvents);

    this.handlersMap = handlersMap;
    this.mouseDown = mouseDown;
  }

  _createClass(MouseEvents, [{
    key: "mouseEventListener",
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
    key: "mouseUpEventListener",
    value: function mouseUpEventListener(event) {
      this.mouseDown = false;
      this.mouseEventListener(event, _constants.MOUSE_UP);
    }
  }, {
    key: "mouseDownEventListener",
    value: function mouseDownEventListener(event) {
      this.mouseDown = true;
      this.mouseEventListener(event, _constants.MOUSE_DOWN);
    }
  }, {
    key: "mouseMoveEventListener",
    value: function mouseMoveEventListener(event) {
      this.mouseEventListener(event, _constants.MOUSE_MOVE);
    }
  }, {
    key: "mouseWheelEventListener",
    value: function mouseWheelEventListener(event) {
      var handlers = this.handlersMap[_constants.MOUSE_WHEEL],
          mouseWheelDelta = mouseWheelDeltaFromEvent(event);
      handlers.forEach(function (handler) {
        return handler(mouseWheelDelta);
      });
      event.preventDefault();
    }
  }, {
    key: "addMouseUpHandler",
    value: function addMouseUpHandler(mouseUpHandler) {
      var mouseUpHandlers = this.handlersMap[_constants.MOUSE_UP];
      mouseUpHandlers.push(mouseUpHandler);
    }
  }, {
    key: "addMouseDownHandler",
    value: function addMouseDownHandler(mouseDownHandler) {
      var mouseDownHandlers = this.handlersMap[_constants.MOUSE_DOWN];
      mouseDownHandlers.push(mouseDownHandler);
    }
  }, {
    key: "addMouseMoveHandler",
    value: function addMouseMoveHandler(mouseMoveHandler) {
      var mouseMoveHandlers = this.handlersMap[_constants.MOUSE_MOVE];
      mouseMoveHandlers.push(mouseMoveHandler);
    }
  }, {
    key: "addMouseWheelHandler",
    value: function addMouseWheelHandler(mouseWheelHandler) {
      var mouseWheelHandlers = this.handlersMap[_constants.MOUSE_WHEEL];
      mouseWheelHandlers.push(mouseWheelHandler);
    }
  }, {
    key: "initialise",
    value: function initialise(canvas) {
      var canvasDOMElement = canvas.getDOMElement(),
          mouseUpEventListener = this.mouseUpEventListener.bind(this),
          mouseDownEventListener = this.mouseDownEventListener.bind(this),
          mouseMoveEventListener = this.mouseMoveEventListener.bind(this),
          mouseWheelEventListener = this.mouseWheelEventListener.bind(this);
      this.handlersMap[_constants.MOUSE_UP] = [];
      this.handlersMap[_constants.MOUSE_DOWN] = [];
      this.handlersMap[_constants.MOUSE_MOVE] = [];
      this.handlersMap[_constants.MOUSE_WHEEL] = [];
      canvasDOMElement.addEventListener("mouseup", mouseUpEventListener);
      canvasDOMElement.addEventListener("mousedown", mouseDownEventListener);
      canvasDOMElement.addEventListener("mousemove", mouseMoveEventListener);
      canvasDOMElement.addEventListener("mousewheel", mouseWheelEventListener);
    }
  }], [{
    key: "fromNothing",
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

exports["default"] = MouseEvents;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vdXNlRXZlbnRzLmpzIl0sIm5hbWVzIjpbIk1vdXNlRXZlbnRzIiwiaGFuZGxlcnNNYXAiLCJtb3VzZURvd24iLCJldmVudCIsImV2ZW50VHlwZSIsImhhbmRsZXJzIiwibW91c2VDb29yZGluYXRlcyIsIm1vdXNlQ29vcmRpbmF0ZXNGcm9tRXZlbnQiLCJmb3JFYWNoIiwiaGFuZGxlciIsInByZXZlbnREZWZhdWx0IiwibW91c2VFdmVudExpc3RlbmVyIiwiTU9VU0VfVVAiLCJNT1VTRV9ET1dOIiwiTU9VU0VfTU9WRSIsIk1PVVNFX1dIRUVMIiwibW91c2VXaGVlbERlbHRhIiwibW91c2VXaGVlbERlbHRhRnJvbUV2ZW50IiwibW91c2VVcEhhbmRsZXIiLCJtb3VzZVVwSGFuZGxlcnMiLCJwdXNoIiwibW91c2VEb3duSGFuZGxlciIsIm1vdXNlRG93bkhhbmRsZXJzIiwibW91c2VNb3ZlSGFuZGxlciIsIm1vdXNlTW92ZUhhbmRsZXJzIiwibW91c2VXaGVlbEhhbmRsZXIiLCJtb3VzZVdoZWVsSGFuZGxlcnMiLCJjYW52YXMiLCJjYW52YXNET01FbGVtZW50IiwiZ2V0RE9NRWxlbWVudCIsIm1vdXNlVXBFdmVudExpc3RlbmVyIiwiYmluZCIsIm1vdXNlRG93bkV2ZW50TGlzdGVuZXIiLCJtb3VzZU1vdmVFdmVudExpc3RlbmVyIiwibW91c2VXaGVlbEV2ZW50TGlzdGVuZXIiLCJhZGRFdmVudExpc3RlbmVyIiwibW91c2VFdmVudHMiLCJNYXRoIiwibWF4IiwibWluIiwid2hlZWxEZWx0YSIsInRhcmdldCIsImNsaWVudFgiLCJjbGllbnRZIiwiYm91bmRpbmdDbGllbnRSZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9wIiwibGVmdCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7Ozs7Ozs7SUFFcUJBLFc7QUFDbkIsdUJBQVlDLFdBQVosRUFBeUJDLFNBQXpCLEVBQW9DO0FBQUE7O0FBQ2xDLFNBQUtELFdBQUwsR0FBbUJBLFdB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LE1BS2xDQyxJQUxrQyxHQUszQkgsa0JBQWtCLENBQUNHLElBTFE7QUFBQSxNQU1sQ3pDLGdCQU5rQyxHQU1mLENBRWpCb0MsT0FBTyxHQUFHSyxJQUZPLEVBSWpCRCxHQUFHLEdBQUdILE9BSlcsQ0FOZTtBQWN4QyxTQUFPckMsZ0JBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBNT1VTRV9VUCwgTU9VU0VfRE9XTiwgTU9VU0VfTU9WRSwgTU9VU0VfV0hFRUwgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vdXNlRXZlbnRzIHtcbiAgY29uc3RydWN0b3IoaGFuZGxlcnNNYXAsIG1vdXNlRG93bikge1xuICAgIHRoaXMuaGFuZGxlcnNNYXAgPSBoYW5kbGVyc01hcDtcbiAgICB0aGlzLm1vdXNlRG93biA9IG1vdXNlRG93bjtcbiAgfVxuXG4gIG1vdXNlRXZlbnRMaXN0ZW5lcihldmVudCwgZXZlbnRUeXBlKSB7XG4gICAgY29uc3QgaGFuZGxlcnMgPSB0aGlzLmhhbmRsZXJzTWFwW2V2ZW50VHlwZV0sXG4gICAgICAgICAgbW91c2VDb29yZGluYXRlcyA9IG1vdXNlQ29vcmRpbmF0ZXNGcm9tRXZlbnQoZXZlbnQpO1xuXG4gICAgaGFuZGxlcnMuZm9yRWFjaCgoaGFuZGxlcikgPT4gaGFuZGxlcihtb3VzZUNvb3JkaW5hdGVzLCB0aGlzLm1vdXNlRG93bikpO1xuXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIG1vdXNlVXBFdmVudExpc3RlbmVyKGV2ZW50KSB7XG4gICAgdGhpcy5tb3VzZURvd24gPSBmYWxzZTtcblxuICAgIHRoaXMubW91c2VFdmVudExpc3RlbmVyKGV2ZW50LCBNT1VTRV9VUCk7XG4gIH1cblxuXHRtb3VzZURvd25FdmVudExpc3RlbmVyKGV2ZW50KSB7XG4gICAgdGhpcy5tb3VzZURvd24gPSB0cnVlO1xuXG4gICAgdGhpcy5tb3VzZUV2ZW50TGlzdGVuZXIoZXZlbnQsIE1PVVNFX0RPV04pO1xuICB9XG5cblx0bW91c2VNb3ZlRXZlbnRMaXN0ZW5lcihldmVudCkge1xuICAgIHRoaXMubW91c2VFdmVudExpc3RlbmVyKGV2ZW50LCBNT1VTRV9NT1ZFKTtcbiAgfVxuXG4gIG1vdXNlV2hlZWxFdmVudExpc3RlbmVyKGV2ZW50KSB7XG4gICAgY29uc3QgaGFuZGxlcnMgPSB0aGlzLmhhbmRsZXJzTWFwWyBNT1VTRV9XSEVFTCBdLFxuICAgICAgICAgIG1vdXNlV2hlZWxEZWx0YSA9IG1vdXNlV2hlZWxEZWx0YUZyb21FdmVudChldmVudCk7XG5cbiAgICBoYW5kbGVycy5mb3JFYWNoKChoYW5kbGVyKSA9PiBoYW5kbGVyKG1vdXNlV2hlZWxEZWx0YSkpO1xuXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIGFkZE1vdXNlVXBIYW5kbGVyKG1vdXNlVXBIYW5kbGVyKSB7XG4gICAgY29uc3QgbW91c2VVcEhhbmRsZXJzID0gdGhpcy5oYW5kbGVyc01hcFsgTU9VU0VfVVAgXTtcblxuICAgIG1vdXNlVXBIYW5kbGVycy5wdXNoKG1vdXNlVXBIYW5kbGVyKTtcbiAgfVxuXG4gIGFkZE1vdXNlRG93bkhhbmRsZXIobW91c2VEb3duSGFuZGxlcikge1xuICAgIGNvbnN0IG1vdXNlRG93bkhhbmRsZXJzID0gdGhpcy5oYW5kbGVyc01hcFsgTU9VU0VfRE9XTiBdO1xuXG4gICAgbW91c2VEb3duSGFuZGxlcnMucHVzaChtb3VzZURvd25IYW5kbGVyKTtcbiAgfVxuXG4gIGFkZE1vdXNlTW92ZUhhbmRsZXIobW91c2VNb3ZlSGFuZGxlcikge1xuICAgIGNvbnN0IG1vdXNlTW92ZUhhbmRsZXJzID0gdGhpcy5oYW5kbGVyc01hcFsgTU9VU0VfTU9WRSBdO1xuXG4gICAgbW91c2VNb3ZlSGFuZGxlcnMucHVzaChtb3VzZU1vdmVIYW5kbGVyKTtcbiAgfVxuXG4gIGFkZE1vdXNlV2hlZWxIYW5kbGVyKG1vdXNlV2hlZWxIYW5kbGVyKSB7XG4gICAgY29uc3QgbW91c2VXaGVlbEhhbmRsZXJzID0gdGhpcy5oYW5kbGVyc01hcFsgTU9VU0VfV0hFRUwgXTtcblxuICAgIG1vdXNlV2hlZWxIYW5kbGVycy5wdXNoKG1vdXNlV2hlZWxIYW5kbGVyKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoY2FudmFzKSB7XG4gICAgICBjb25zdCBjYW52YXNET01FbGVtZW50ID0gY2FudmFzLmdldERPTUVsZW1lbnQoKSxcbiAgICAgICAgICAgIG1vdXNlVXBFdmVudExpc3RlbmVyID0gdGhpcy5tb3VzZVVwRXZlbnRMaXN0ZW5lci5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgbW91c2VEb3duRXZlbnRMaXN0ZW5lciA9IHRoaXMubW91c2VEb3duRXZlbnRMaXN0ZW5lci5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgbW91c2VNb3ZlRXZlbnRMaXN0ZW5lciA9IHRoaXMubW91c2VNb3ZlRXZlbnRMaXN0ZW5lci5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgbW91c2VXaGVlbEV2ZW50TGlzdGVuZXIgPSB0aGlzLm1vdXNlV2hlZWxFdmVudExpc3RlbmVyLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLmhhbmRsZXJzTWFwWyBNT1VTRV9VUCBdID0gW107XG4gICAgdGhpcy5oYW5kbGVyc01hcFsgTU9VU0VfRE9XTiBdID0gW107XG4gICAgdGhpcy5oYW5kbGVyc01hcFsgTU9VU0VfTU9WRSBdID0gW107XG4gICAgdGhpcy5oYW5kbGVyc01hcFsgTU9VU0VfV0hFRUwgXSA9IFtdO1xuXG4gICAgY2FudmFzRE9NRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBtb3VzZVVwRXZlbnRMaXN0ZW5lcik7XG5cbiAgICBjYW52YXNET01FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgbW91c2VEb3duRXZlbnRMaXN0ZW5lcik7XG5cbiAgICBjYW52YXNET01FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgbW91c2VNb3ZlRXZlbnRMaXN0ZW5lcik7XG5cbiAgICBjYW52YXNET01FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXdoZWVsXCIsIG1vdXNlV2hlZWxFdmVudExpc3RlbmVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBoYW5kbGVyc01hcCA9IHt9LFxuICAgICAgICAgIG1vdXNlRG93biA9IGZhbHNlLCAgLy8vXG5cdFx0XHRcdFx0bW91c2VFdmVudHMgPSBuZXcgTW91c2VFdmVudHMoaGFuZGxlcnNNYXAsIG1vdXNlRG93bik7XG5cbiAgICByZXR1cm4gbW91c2VFdmVudHM7XG4gIH1cbn1cblxuZnVuY3Rpb24gbW91c2VXaGVlbERlbHRhRnJvbUV2ZW50KGV2ZW50KSB7XG4gIGNvbnN0IG1vdXNlV2hlZWxEZWx0YSA9IE1hdGgubWF4KC0xLCBNYXRoLm1pbigxLCBldmVudC53aGVlbERlbHRhKSk7IC8vL1xuXG4gIHJldHVybiBtb3VzZVdoZWVsRGVsdGE7XG59XG5cbmZ1bmN0aW9uIG1vdXNlQ29vcmRpbmF0ZXNGcm9tRXZlbnQoZXZlbnQpIHtcbiAgY29uc3QgeyB0YXJnZXQsIGNsaWVudFgsIGNsaWVudFkgfSA9IGV2ZW50LFxuICAgICAgICBjYW52YXNET01FbGVtZW50ID0gdGFyZ2V0LCAgLy8vXG4gICAgICAgIGJvdW5kaW5nQ2xpZW50UmVjdCA9IGNhbnZhc0RPTUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICAgIHRvcCA9IGJvdW5kaW5nQ2xpZW50UmVjdC50b3AsXG4gICAgICAgIGxlZnQgPSBib3VuZGluZ0NsaWVudFJlY3QubGVmdCxcbiAgICAgICAgbW91c2VDb29yZGluYXRlcyA9IFtcblxuICAgICAgICAgIGNsaWVudFggLSBsZWZ0LFxuXG4gICAgICAgICAgdG9wIC0gY2xpZW50WSxcblxuICAgICAgICBdO1xuXG4gIHJldHVybiBtb3VzZUNvb3JkaW5hdGVzO1xufVxuIl19
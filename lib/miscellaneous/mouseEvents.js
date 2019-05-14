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
    key: 'mouseEventListener',
    value: function mouseEventListener(event, eventType) {
      var _this = this;

      var handlers = this.handlersMap[eventType],
          mouseCoordinates = mouseCoordinatesFromEvent(event, this.canvas);

      handlers.forEach(function (handler) {
        return handler(mouseCoordinates, _this.mouseDown, _this.canvas);
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
      var _this2 = this;

      var delta = deltaFromEvent(event),
          handlers = this.handlersMap[MOUSE_WHEEL];

      handlers.forEach(function (handler) {
        return handler(delta, _this2.canvas);
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
          mouseUpEventListener = mouseEvents.mouseUpEventListener.bind(mouseEvents),
          mouseDownEventListener = mouseEvents.mouseDownEventListener.bind(mouseEvents),
          mouseMoveEventListener = mouseEvents.mouseMoveEventListener.bind(mouseEvents),
          mouseWheelEventListener = mouseEvents.mouseWheelEventListener.bind(mouseEvents);

      canvasDOMElement.addEventListener('mouseup', mouseUpEventListener);
      canvasDOMElement.addEventListener('mousedown', mouseDownEventListener);
      canvasDOMElement.addEventListener('mousemove', mouseMoveEventListener);
      canvasDOMElement.addEventListener('mousewheel', mouseWheelEventListener);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9taXNjZWxsYW5lb3VzL21vdXNlRXZlbnRzLmpzIl0sIm5hbWVzIjpbImNvbnN0YW50cyIsInJlcXVpcmUiLCJNT1VTRV9VUCIsIk1PVVNFX0RPV04iLCJNT1VTRV9NT1ZFIiwiTU9VU0VfV0hFRUwiLCJNb3VzZUV2ZW50cyIsImhhbmRsZXJzTWFwIiwibW91c2VEb3duIiwiY2FudmFzIiwiZXZlbnQiLCJldmVudFR5cGUiLCJoYW5kbGVycyIsIm1vdXNlQ29vcmRpbmF0ZXMiLCJtb3VzZUNvb3JkaW5hdGVzRnJvbUV2ZW50IiwiZm9yRWFjaCIsImhhbmRsZXIiLCJwcmV2ZW50RGVmYXVsdCIsIm1vdXNlRXZlbnRMaXN0ZW5lciIsImRlbHRhIiwiZGVsdGFGcm9tRXZlbnQiLCJtb3VzZVVwSGFuZGxlciIsIm1vdXNlVXBIYW5kbGVycyIsInB1c2giLCJtb3VzZURvd25IYW5kbGVyIiwibW91c2VEb3duSGFuZGxlcnMiLCJtb3VzZU1vdmVIYW5kbGVyIiwibW91c2VNb3ZlSGFuZGxlcnMiLCJtb3VzZVdoZWVsSGFuZGxlciIsIm1vdXNlV2hlZWxIYW5kbGVycyIsIm1vdXNlRXZlbnRzIiwiY2FudmFzRE9NRWxlbWVudCIsImdldERPTUVsZW1lbnQiLCJtb3VzZVVwRXZlbnRMaXN0ZW5lciIsImJpbmQiLCJtb3VzZURvd25FdmVudExpc3RlbmVyIiwibW91c2VNb3ZlRXZlbnRMaXN0ZW5lciIsIm1vdXNlV2hlZWxFdmVudExpc3RlbmVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm1vZHVsZSIsImV4cG9ydHMiLCJNYXRoIiwibWF4IiwibWluIiwid2hlZWxEZWx0YSIsInRhcmdldCIsImRvbUVsZW1lbnRCb3VuZGluZ0NsaWVudFJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJjbGllbnRYIiwibGVmdCIsImNsaWVudFkiLCJ0b3AiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxZQUFZQyxRQUFRLGNBQVIsQ0FBbEI7O0lB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RXZlbnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBjb25zdGFudHMgPSByZXF1aXJlKCcuLi9jb25zdGFudHMnKTtcblxuY29uc3QgeyBNT1VTRV9VUCwgTU9VU0VfRE9XTiwgTU9VU0VfTU9WRSwgTU9VU0VfV0hFRUwgfSA9IGNvbnN0YW50cztcblxuY2xhc3MgTW91c2VFdmVudHMge1xuICBjb25zdHJ1Y3RvcihoYW5kbGVyc01hcCwgbW91c2VEb3duLCBjYW52YXMpIHtcbiAgICB0aGlzLmhhbmRsZXJzTWFwID0gaGFuZGxlcnNNYXA7XG4gICAgdGhpcy5tb3VzZURvd24gPSBtb3VzZURvd247XG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gIH1cblxuICBtb3VzZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGV2ZW50VHlwZSkge1xuICAgIGNvbnN0IGhhbmRsZXJzID0gdGhpcy5oYW5kbGVyc01hcFtldmVudFR5cGVdLFxuICAgICAgICAgIG1vdXNlQ29vcmRpbmF0ZXMgPSBtb3VzZUNvb3JkaW5hdGVzRnJvbUV2ZW50KGV2ZW50LCB0aGlzLmNhbnZhcyk7XG5cbiAgICBoYW5kbGVycy5mb3JFYWNoKChoYW5kbGVyKSA9PiBoYW5kbGVyKG1vdXNlQ29vcmRpbmF0ZXMsIHRoaXMubW91c2VEb3duLCB0aGlzLmNhbnZhcykpO1xuXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIG1vdXNlVXBFdmVudExpc3RlbmVyKGV2ZW50KSB7XG4gICAgdGhpcy5tb3VzZURvd24gPSBmYWxzZTtcblxuICAgIHRoaXMubW91c2VFdmVudExpc3RlbmVyKGV2ZW50LCBNT1VTRV9VUCk7XG4gIH1cblxuXHRtb3VzZURvd25FdmVudExpc3RlbmVyKGV2ZW50KSB7XG4gICAgdGhpcy5tb3VzZURvd24gPSB0cnVlO1xuXG4gICAgdGhpcy5tb3VzZUV2ZW50TGlzdGVuZXIoZXZlbnQsIE1PVVNFX0RPV04pO1xuICB9XG5cblx0bW91c2VNb3ZlRXZlbnRMaXN0ZW5lcihldmVudCkge1xuICAgIHRoaXMubW91c2VFdmVudExpc3RlbmVyKGV2ZW50LCBNT1VTRV9NT1ZFKTtcbiAgfVxuXG4gIG1vdXNlV2hlZWxFdmVudExpc3RlbmVyKGV2ZW50KSB7XG4gICAgY29uc3QgZGVsdGEgPSBkZWx0YUZyb21FdmVudChldmVudCksXG4gICAgICAgICAgaGFuZGxlcnMgPSB0aGlzLmhhbmRsZXJzTWFwWyBNT1VTRV9XSEVFTCBdO1xuXG4gICAgaGFuZGxlcnMuZm9yRWFjaCgoaGFuZGxlcikgPT4gaGFuZGxlcihkZWx0YSwgdGhpcy5jYW52YXMpKTtcblxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICBhZGRNb3VzZVVwSGFuZGxlcihtb3VzZVVwSGFuZGxlcikge1xuICAgIGNvbnN0IG1vdXNlVXBIYW5kbGVycyA9IHRoaXMuaGFuZGxlcnNNYXBbIE1PVVNFX1VQIF07XG5cbiAgICBtb3VzZVVwSGFuZGxlcnMucHVzaChtb3VzZVVwSGFuZGxlcik7XG4gIH1cblxuICBhZGRNb3VzZURvd25IYW5kbGVyKG1vdXNlRG93bkhhbmRsZXIpIHtcbiAgICBjb25zdCBtb3VzZURvd25IYW5kbGVycyA9IHRoaXMuaGFuZGxlcnNNYXBbIE1PVVNFX0RPV04gXTtcblxuICAgIG1vdXNlRG93bkhhbmRsZXJzLnB1c2gobW91c2VEb3duSGFuZGxlcik7XG4gIH1cblxuICBhZGRNb3VzZU1vdmVIYW5kbGVyKG1vdXNlTW92ZUhhbmRsZXIpIHtcbiAgICBjb25zdCBtb3VzZU1vdmVIYW5kbGVycyA9IHRoaXMuaGFuZGxlcnNNYXBbIE1PVVNFX01PVkUgXTtcblxuICAgIG1vdXNlTW92ZUhhbmRsZXJzLnB1c2gobW91c2VNb3ZlSGFuZGxlcik7XG4gIH1cblxuICBhZGRNb3VzZVdoZWVsSGFuZGxlcihtb3VzZVdoZWVsSGFuZGxlcikge1xuICAgIGNvbnN0IG1vdXNlV2hlZWxIYW5kbGVycyA9IHRoaXMuaGFuZGxlcnNNYXBbIE1PVVNFX1dIRUVMIF07XG5cbiAgICBtb3VzZVdoZWVsSGFuZGxlcnMucHVzaChtb3VzZVdoZWVsSGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoY2FudmFzKSB7XG4gICAgY29uc3QgaGFuZGxlcnNNYXAgPSB7fTtcblxuICAgIGhhbmRsZXJzTWFwWyBNT1VTRV9VUCBdID0gW107XG4gICAgaGFuZGxlcnNNYXBbIE1PVVNFX0RPV04gXSA9IFtdO1xuICAgIGhhbmRsZXJzTWFwWyBNT1VTRV9NT1ZFIF0gPSBbXTtcbiAgICBoYW5kbGVyc01hcFsgTU9VU0VfV0hFRUwgXSA9IFtdO1xuXG4gICAgY29uc3QgbW91c2VEb3duID0gZmFsc2UsICAvLy9cblx0XHRcdFx0XHRtb3VzZUV2ZW50cyA9IG5ldyBNb3VzZUV2ZW50cyhoYW5kbGVyc01hcCwgbW91c2VEb3duLCBjYW52YXMpLFxuICAgICAgICAgIGNhbnZhc0RPTUVsZW1lbnQgPSBjYW52YXMuZ2V0RE9NRWxlbWVudCgpLFxuXHRcdFx0XHRcdG1vdXNlVXBFdmVudExpc3RlbmVyID0gbW91c2VFdmVudHMubW91c2VVcEV2ZW50TGlzdGVuZXIuYmluZChtb3VzZUV2ZW50cyksXG5cdFx0XHRcdFx0bW91c2VEb3duRXZlbnRMaXN0ZW5lciA9IG1vdXNlRXZlbnRzLm1vdXNlRG93bkV2ZW50TGlzdGVuZXIuYmluZChtb3VzZUV2ZW50cyksXG5cdFx0XHRcdFx0bW91c2VNb3ZlRXZlbnRMaXN0ZW5lciA9IG1vdXNlRXZlbnRzLm1vdXNlTW92ZUV2ZW50TGlzdGVuZXIuYmluZChtb3VzZUV2ZW50cyksXG5cdFx0XHRcdFx0bW91c2VXaGVlbEV2ZW50TGlzdGVuZXIgPSBtb3VzZUV2ZW50cy5tb3VzZVdoZWVsRXZlbnRMaXN0ZW5lci5iaW5kKG1vdXNlRXZlbnRzKTtcblxuICAgIGNhbnZhc0RPTUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG1vdXNlVXBFdmVudExpc3RlbmVyKTtcbiAgICBjYW52YXNET01FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIG1vdXNlRG93bkV2ZW50TGlzdGVuZXIpO1xuICAgIGNhbnZhc0RPTUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgbW91c2VNb3ZlRXZlbnRMaXN0ZW5lcik7XG4gICAgY2FudmFzRE9NRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXdoZWVsJywgbW91c2VXaGVlbEV2ZW50TGlzdGVuZXIpO1xuXG4gICAgcmV0dXJuIG1vdXNlRXZlbnRzO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTW91c2VFdmVudHM7XG5cbmZ1bmN0aW9uIGRlbHRhRnJvbUV2ZW50KGV2ZW50KSB7XG4gIGNvbnN0IGRlbHRhID0gTWF0aC5tYXgoLTEsIE1hdGgubWluKDEsIGV2ZW50LndoZWVsRGVsdGEpKTsgLy8vXG5cbiAgcmV0dXJuIGRlbHRhO1xufVxuXG5mdW5jdGlvbiBtb3VzZUNvb3JkaW5hdGVzRnJvbUV2ZW50KGV2ZW50KSB7XG4gIGNvbnN0IGNhbnZhc0RPTUVsZW1lbnQgPSBldmVudC50YXJnZXQsICAvLy9cbiAgICAgICAgZG9tRWxlbWVudEJvdW5kaW5nQ2xpZW50UmVjdCA9IGNhbnZhc0RPTUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICAgIG1vdXNlQ29vcmRpbmF0ZXMgPSBbXG4gICAgICAgICAgKyhldmVudC5jbGllbnRYIC0gZG9tRWxlbWVudEJvdW5kaW5nQ2xpZW50UmVjdC5sZWZ0KSxcbiAgICAgICAgICAtKGV2ZW50LmNsaWVudFkgLSBkb21FbGVtZW50Qm91bmRpbmdDbGllbnRSZWN0LnRvcClcbiAgICAgICAgXTtcblxuICByZXR1cm4gbW91c2VDb29yZGluYXRlcztcbn1cbiJdfQ==
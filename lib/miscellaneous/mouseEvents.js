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
      mouseEvents = new MouseEvents(handlersMap, mouseDown, canvas);

      mouseEvents.initialise(canvas);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9taXNjZWxsYW5lb3VzL21vdXNlRXZlbnRzLmpzIl0sIm5hbWVzIjpbImNvbnN0YW50cyIsInJlcXVpcmUiLCJNT1VTRV9VUCIsIk1PVVNFX0RPV04iLCJNT1VTRV9NT1ZFIiwiTU9VU0VfV0hFRUwiLCJNb3VzZUV2ZW50cyIsImhhbmRsZXJzTWFwIiwibW91c2VEb3duIiwiY2FudmFzIiwiZXZlbnQiLCJldmVudFR5cGUiLCJoYW5kbGVycyIsIm1vdXNlQ29vcmRpbmF0ZXMiLCJtb3VzZUNvb3JkaW5hdGVzRnJvbUV2ZW50IiwiZm9yRWFjaCIsImhhbmRsZXIiLCJwcmV2ZW50RGVmYXVsdCIsIm1vdXNlRXZlbnRMaXN0ZW5lciIsImRlbHRhIiwiZGVsdGFGcm9tRXZlbnQiLCJtb3VzZVVwSGFuZGxlciIsIm1vdXNlVXBIYW5kbGVycyIsInB1c2giLCJtb3VzZURvd25IYW5kbGVyIiwibW91c2VEb3duSGFuZGxlcnMiLCJtb3VzZU1vdmVIYW5kbGVyIiwibW91c2VNb3ZlSGFuZGxlcnMiLCJtb3VzZVdoZWVsSGFuZGxlciIsIm1vdXNlV2hlZWxIYW5kbGVycyIsImNhbnZhc0RPTUVsZW1lbnQiLCJnZXRET01FbGVtZW50IiwibW91c2VVcEV2ZW50TGlzdGVuZXIiLCJiaW5kIiwibW91c2VEb3duRXZlbnRMaXN0ZW5lciIsIm1vdXNlTW92ZUV2ZW50TGlzdGVuZXIiLCJtb3VzZVdoZWVsRXZlbnRMaXN0ZW5lciIsImFkZEV2ZW50TGlzdGVuZXIiLCJtb3VzZUV2ZW50cyIsImluaXRpYWxpc2UiLCJtb2R1bGUiLCJleHBvcnRzIiwiTWF0aCIsIm1heCIsIm1pbiIsIndoZWVsRGVsdGEiLCJ0YXJnZXQiLCJjbGllbnRYIiwiY2xpZW50WSIsImJvdW5kaW5nQ2xpZW50UmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsImxlZnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxZQUFZQyxRQUFRLGNBQVIsQ0FBbEI7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R0FFZmdCLE1BRmU7QUFBQSxNQUdsQ0csa0JBSGtDLEdBR2JuQixpQkFBaUJvQixxQkFBakIsRUFIYTtBQUFBLE1BSWxDQyxHQUprQyxHQUk1QkYsbUJBQW1CRSxHQUpTO0FBQUEsTUFLbENDLElBTGtDLEdBSzNCSCxtQkFBbUJHLElBTFE7QUFBQSxNQU1sQ3ZDLGdCQU5rQyxHQU1mLENBRWpCa0MsVUFBVUssSUFGTyxFQUlqQkQsTUFBTUgsT0FKVyxDQU5lOzs7QUFjeEMsU0FBT25DLGdCQUFQO0FBQ0QiLCJmaWxlIjoibW91c2VFdmVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGNvbnN0YW50cyA9IHJlcXVpcmUoJy4uL2NvbnN0YW50cycpO1xuXG5jb25zdCB7IE1PVVNFX1VQLCBNT1VTRV9ET1dOLCBNT1VTRV9NT1ZFLCBNT1VTRV9XSEVFTCB9ID0gY29uc3RhbnRzO1xuXG5jbGFzcyBNb3VzZUV2ZW50cyB7XG4gIGNvbnN0cnVjdG9yKGhhbmRsZXJzTWFwLCBtb3VzZURvd24sIGNhbnZhcykge1xuICAgIHRoaXMuaGFuZGxlcnNNYXAgPSBoYW5kbGVyc01hcDtcbiAgICB0aGlzLm1vdXNlRG93biA9IG1vdXNlRG93bjtcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgfVxuXG4gIG1vdXNlRXZlbnRMaXN0ZW5lcihldmVudCwgZXZlbnRUeXBlKSB7XG4gICAgY29uc3QgaGFuZGxlcnMgPSB0aGlzLmhhbmRsZXJzTWFwW2V2ZW50VHlwZV0sXG4gICAgICAgICAgbW91c2VDb29yZGluYXRlcyA9IG1vdXNlQ29vcmRpbmF0ZXNGcm9tRXZlbnQoZXZlbnQsIHRoaXMuY2FudmFzKTtcblxuICAgIGhhbmRsZXJzLmZvckVhY2goKGhhbmRsZXIpID0+IGhhbmRsZXIobW91c2VDb29yZGluYXRlcywgdGhpcy5tb3VzZURvd24sIHRoaXMuY2FudmFzKSk7XG5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbiAgbW91c2VVcEV2ZW50TGlzdGVuZXIoZXZlbnQpIHtcbiAgICB0aGlzLm1vdXNlRG93biA9IGZhbHNlO1xuXG4gICAgdGhpcy5tb3VzZUV2ZW50TGlzdGVuZXIoZXZlbnQsIE1PVVNFX1VQKTtcbiAgfVxuXG5cdG1vdXNlRG93bkV2ZW50TGlzdGVuZXIoZXZlbnQpIHtcbiAgICB0aGlzLm1vdXNlRG93biA9IHRydWU7XG5cbiAgICB0aGlzLm1vdXNlRXZlbnRMaXN0ZW5lcihldmVudCwgTU9VU0VfRE9XTik7XG4gIH1cblxuXHRtb3VzZU1vdmVFdmVudExpc3RlbmVyKGV2ZW50KSB7XG4gICAgdGhpcy5tb3VzZUV2ZW50TGlzdGVuZXIoZXZlbnQsIE1PVVNFX01PVkUpO1xuICB9XG5cbiAgbW91c2VXaGVlbEV2ZW50TGlzdGVuZXIoZXZlbnQpIHtcbiAgICBjb25zdCBkZWx0YSA9IGRlbHRhRnJvbUV2ZW50KGV2ZW50KSxcbiAgICAgICAgICBoYW5kbGVycyA9IHRoaXMuaGFuZGxlcnNNYXBbIE1PVVNFX1dIRUVMIF07XG5cbiAgICBoYW5kbGVycy5mb3JFYWNoKChoYW5kbGVyKSA9PiBoYW5kbGVyKGRlbHRhLCB0aGlzLmNhbnZhcykpO1xuXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIGFkZE1vdXNlVXBIYW5kbGVyKG1vdXNlVXBIYW5kbGVyKSB7XG4gICAgY29uc3QgbW91c2VVcEhhbmRsZXJzID0gdGhpcy5oYW5kbGVyc01hcFsgTU9VU0VfVVAgXTtcblxuICAgIG1vdXNlVXBIYW5kbGVycy5wdXNoKG1vdXNlVXBIYW5kbGVyKTtcbiAgfVxuXG4gIGFkZE1vdXNlRG93bkhhbmRsZXIobW91c2VEb3duSGFuZGxlcikge1xuICAgIGNvbnN0IG1vdXNlRG93bkhhbmRsZXJzID0gdGhpcy5oYW5kbGVyc01hcFsgTU9VU0VfRE9XTiBdO1xuXG4gICAgbW91c2VEb3duSGFuZGxlcnMucHVzaChtb3VzZURvd25IYW5kbGVyKTtcbiAgfVxuXG4gIGFkZE1vdXNlTW92ZUhhbmRsZXIobW91c2VNb3ZlSGFuZGxlcikge1xuICAgIGNvbnN0IG1vdXNlTW92ZUhhbmRsZXJzID0gdGhpcy5oYW5kbGVyc01hcFsgTU9VU0VfTU9WRSBdO1xuXG4gICAgbW91c2VNb3ZlSGFuZGxlcnMucHVzaChtb3VzZU1vdmVIYW5kbGVyKTtcbiAgfVxuXG4gIGFkZE1vdXNlV2hlZWxIYW5kbGVyKG1vdXNlV2hlZWxIYW5kbGVyKSB7XG4gICAgY29uc3QgbW91c2VXaGVlbEhhbmRsZXJzID0gdGhpcy5oYW5kbGVyc01hcFsgTU9VU0VfV0hFRUwgXTtcblxuICAgIG1vdXNlV2hlZWxIYW5kbGVycy5wdXNoKG1vdXNlV2hlZWxIYW5kbGVyKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoY2FudmFzKSB7XG4gICAgICBjb25zdCBjYW52YXNET01FbGVtZW50ID0gY2FudmFzLmdldERPTUVsZW1lbnQoKSxcbiAgICAgICAgICAgIG1vdXNlVXBFdmVudExpc3RlbmVyID0gdGhpcy5tb3VzZVVwRXZlbnRMaXN0ZW5lci5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgbW91c2VEb3duRXZlbnRMaXN0ZW5lciA9IHRoaXMubW91c2VEb3duRXZlbnRMaXN0ZW5lci5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgbW91c2VNb3ZlRXZlbnRMaXN0ZW5lciA9IHRoaXMubW91c2VNb3ZlRXZlbnRMaXN0ZW5lci5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgbW91c2VXaGVlbEV2ZW50TGlzdGVuZXIgPSB0aGlzLm1vdXNlV2hlZWxFdmVudExpc3RlbmVyLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLmhhbmRsZXJzTWFwWyBNT1VTRV9VUCBdID0gW107XG4gICAgdGhpcy5oYW5kbGVyc01hcFsgTU9VU0VfRE9XTiBdID0gW107XG4gICAgdGhpcy5oYW5kbGVyc01hcFsgTU9VU0VfTU9WRSBdID0gW107XG4gICAgdGhpcy5oYW5kbGVyc01hcFsgTU9VU0VfV0hFRUwgXSA9IFtdO1xuXG4gICAgY2FudmFzRE9NRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgbW91c2VVcEV2ZW50TGlzdGVuZXIpO1xuXG4gICAgY2FudmFzRE9NRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBtb3VzZURvd25FdmVudExpc3RlbmVyKTtcblxuICAgIGNhbnZhc0RPTUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgbW91c2VNb3ZlRXZlbnRMaXN0ZW5lcik7XG5cbiAgICBjYW52YXNET01FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNld2hlZWwnLCBtb3VzZVdoZWVsRXZlbnRMaXN0ZW5lcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoY2FudmFzKSB7XG4gICAgY29uc3QgaGFuZGxlcnNNYXAgPSB7fSxcbiAgICAgICAgICBtb3VzZURvd24gPSBmYWxzZSwgIC8vL1xuXHRcdFx0XHRcdG1vdXNlRXZlbnRzID0gbmV3IE1vdXNlRXZlbnRzKGhhbmRsZXJzTWFwLCBtb3VzZURvd24sIGNhbnZhcyk7XG5cbiAgICBtb3VzZUV2ZW50cy5pbml0aWFsaXNlKGNhbnZhcyk7XG5cbiAgICByZXR1cm4gbW91c2VFdmVudHM7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBNb3VzZUV2ZW50cztcblxuZnVuY3Rpb24gZGVsdGFGcm9tRXZlbnQoZXZlbnQpIHtcbiAgY29uc3QgZGVsdGEgPSBNYXRoLm1heCgtMSwgTWF0aC5taW4oMSwgZXZlbnQud2hlZWxEZWx0YSkpOyAvLy9cblxuICByZXR1cm4gZGVsdGE7XG59XG5cbmZ1bmN0aW9uIG1vdXNlQ29vcmRpbmF0ZXNGcm9tRXZlbnQoZXZlbnQpIHtcbiAgY29uc3QgeyB0YXJnZXQsIGNsaWVudFgsIGNsaWVudFkgfSA9IGV2ZW50LFxuICAgICAgICBjYW52YXNET01FbGVtZW50ID0gdGFyZ2V0LCAgLy8vXG4gICAgICAgIGJvdW5kaW5nQ2xpZW50UmVjdCA9IGNhbnZhc0RPTUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICAgIHRvcCA9IGJvdW5kaW5nQ2xpZW50UmVjdC50b3AsXG4gICAgICAgIGxlZnQgPSBib3VuZGluZ0NsaWVudFJlY3QubGVmdCxcbiAgICAgICAgbW91c2VDb29yZGluYXRlcyA9IFtcblxuICAgICAgICAgIGNsaWVudFggLSBsZWZ0LFxuXG4gICAgICAgICAgdG9wIC0gY2xpZW50WSxcblxuICAgICAgICBdO1xuXG4gIHJldHVybiBtb3VzZUNvb3JkaW5hdGVzO1xufVxuIl19
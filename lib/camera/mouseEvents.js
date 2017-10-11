'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MOUSE_UP = 'MOUSE_UP',
    MOUSE_DOWN = 'MOUSE_DOWN',
    MOUSE_MOVE = 'MOUSE_MOVE',
    MOUSE_WHEEL = 'MOUSE_WHEEL';

var MouseEvents = function () {
  function MouseEvents(canvas) {
    _classCallCheck(this, MouseEvents);

    this.canvas = canvas;

    this.handlers = {};

    var mouseEventTypes = [MOUSE_UP, MOUSE_DOWN, MOUSE_MOVE, MOUSE_WHEEL];

    mouseEventTypes.forEach(function (mouseEventType) {
      this.handlers[mouseEventType] = [];
    }.bind(this));

    this.addEventHandler(canvas, 'mouseup', function (event) {
      this.onMouseEvent(MOUSE_UP, event);
    }.bind(this));
    this.addEventHandler(canvas, 'mousedown', function (event) {
      this.onMouseEvent(MOUSE_DOWN, event);
    }.bind(this));
    this.addEventHandler(canvas, 'mousemove', function (event) {
      this.onMouseEvent(MOUSE_MOVE, event);
    }.bind(this));
    this.addEventHandler(canvas, 'mousewheel', function (event) {
      this.onMouseWheelEvent(event);
    }.bind(this));
  }

  _createClass(MouseEvents, [{
    key: 'addMouseUpEventHandler',
    value: function addMouseUpEventHandler(mouseUpEventHandler) {
      this.addMouseEventHandler(MOUSE_UP, mouseUpEventHandler);
    }
  }, {
    key: 'addMouseDownEventHandler',
    value: function addMouseDownEventHandler(mouseDownEventHandler) {
      this.addMouseEventHandler(MOUSE_DOWN, mouseDownEventHandler);
    }
  }, {
    key: 'addMouseMoveEventHandler',
    value: function addMouseMoveEventHandler(mouseMoveEventHandler) {
      this.addMouseEventHandler(MOUSE_MOVE, mouseMoveEventHandler);
    }
  }, {
    key: 'addMouseWheelEventHandler',
    value: function addMouseWheelEventHandler(mouseWheelEventHandler) {
      this.addMouseEventHandler(MOUSE_WHEEL, mouseWheelEventHandler);
    }
  }, {
    key: 'addEventHandler',
    value: function addEventHandler(canvas, type, handler) {
      var domElement = canvas.getDOMElement();

      domElement.addEventListener(type, function (event) {
        event.preventDefault();

        handler(event);
      });
    }
  }, {
    key: 'onMouseEvent',
    value: function onMouseEvent(mouseEventType, event) {
      var mouseEventHandlers = this.handlers[mouseEventType],
          mouseCoordinates = this.canvas.mouseCoordinatesFromEvent(event);

      mouseEventHandlers.forEach(function (mouseEventHandler) {
        mouseEventHandler(mouseCoordinates);
      });
    }
  }, {
    key: 'onMouseWheelEvent',
    value: function onMouseWheelEvent(event) {
      var mouseWheelEventType = MOUSE_WHEEL,
          mouseWheelEventHandlers = this.handlers[mouseWheelEventType],
          delta = Math.max(-1, Math.min(1, event.wheelDelta)); ///

      mouseWheelEventHandlers.forEach(function (mouseWheelEventHandler) {
        mouseWheelEventHandler(delta);
      });
    }
  }, {
    key: 'addMouseEventHandler',
    value: function addMouseEventHandler(mouseEventType, mouseEventHandler) {
      var mouseEventHandlers = this.handlers[mouseEventType];

      mouseEventHandlers.push(mouseEventHandler);
    }
  }], [{
    key: 'fromNothing',
    value: function fromNothing(canvas) {
      var mouseEvents = new MouseEvents(canvas);

      return mouseEvents;
    }
  }]);

  return MouseEvents;
}();

module.exports = MouseEvents;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jYW1lcmEvbW91c2VFdmVudHMuanMiXSwibmFtZXMiOlsiTU9VU0VfVVAiLCJNT1VTRV9ET1dOIiwiTU9VU0VfTU9WRSIsIk1PVVNFX1dIRUVMIiwiTW91c2VFdmVudHMiLCJjYW52YXMiLCJoYW5kbGVycyIsIm1vdXNlRXZlbnRUeXBlcyIsImZvckVhY2giLCJtb3VzZUV2ZW50VHlwZSIsImJpbmQiLCJhZGRFdmVudEhhbmRsZXIiLCJldmVudCIsIm9uTW91c2VFdmVudCIsIm9uTW91c2VXaGVlbEV2ZW50IiwibW91c2VVcEV2ZW50SGFuZGxlciIsImFkZE1vdXNlRXZlbnRIYW5kbGVyIiwibW91c2VEb3duRXZlbnRIYW5kbGVyIiwibW91c2VNb3ZlRXZlbnRIYW5kbGVyIiwibW91c2VXaGVlbEV2ZW50SGFuZGxlciIsInR5cGUiLCJoYW5kbGVyIiwiZG9tRWxlbWVudCIsImdldERPTUVsZW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicHJldmVudERlZmF1bHQiLCJtb3VzZUV2ZW50SGFuZGxlcnMiLCJtb3VzZUNvb3JkaW5hdGVzIiwibW91c2VDb29yZGluYXRlc0Zyb21FdmVudCIsIm1vdXNlRXZlbnRIYW5kbGVyIiwibW91c2VXaGVlbEV2ZW50VHlwZSIsIm1vdXNlV2hlZWxFdmVudEhhbmRsZXJzIiwiZGVsdGEiLCJNYXRoIiwibWF4IiwibWluIiwid2hlZWxEZWx0YSIsInB1c2giLCJtb3VzZUV2ZW50cyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxXQUFXLFVBQWpCO0FBQUEsSUFDTUMsYUFBYSxZQURuQjtBQUFBLElBRU1DLGFBQWEsWUFGbkI7QUFBQSxJQUdNQyxjQUFjLGFBSHBCOztJQUtNQyxXO0FBQ0osdUJBQVlDLE1BQVosRUFBb0I7QUFBQTs7QUFDbEIsU0FBS0EsTUFBTCxHQUFjQSxNQUFkOztBQUVBLFNBQUtDLFFBQUwsR0FBZ0IsRUFBaEI7O0FBRUEsUUFBTUMs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QUFLcEIsUUFBTCxDQUFjRyxjQUFkLENBQTNCOztBQUVBaUIseUJBQW1CVyxJQUFuQixDQUF3QlIsaUJBQXhCO0FBQ0Q7OztnQ0FFa0J4QixNLEVBQVE7QUFDekIsVUFBTWlDLGNBQWMsSUFBSWxDLFdBQUosQ0FBZ0JDLE1BQWhCLENBQXBCOztBQUVBLGFBQU9pQyxXQUFQO0FBQ0Q7Ozs7OztBQUdIQyxPQUFPQyxPQUFQLEdBQWlCcEMsV0FBakIiLCJmaWxlIjoibW91c2VFdmVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IE1PVVNFX1VQID0gJ01PVVNFX1VQJyxcbiAgICAgIE1PVVNFX0RPV04gPSAnTU9VU0VfRE9XTicsXG4gICAgICBNT1VTRV9NT1ZFID0gJ01PVVNFX01PVkUnLFxuICAgICAgTU9VU0VfV0hFRUwgPSAnTU9VU0VfV0hFRUwnO1xuXG5jbGFzcyBNb3VzZUV2ZW50cyB7XG4gIGNvbnN0cnVjdG9yKGNhbnZhcykge1xuICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuXG4gICAgdGhpcy5oYW5kbGVycyA9IHt9O1xuXG4gICAgY29uc3QgbW91c2VFdmVudFR5cGVzID0gW1xuICAgICAgICAgICAgTU9VU0VfVVAsXG4gICAgICAgICAgICBNT1VTRV9ET1dOLFxuICAgICAgICAgICAgTU9VU0VfTU9WRSxcbiAgICAgICAgICAgIE1PVVNFX1dIRUVMXG4gICAgICAgICAgXTtcblxuICAgIG1vdXNlRXZlbnRUeXBlcy5mb3JFYWNoKGZ1bmN0aW9uKG1vdXNlRXZlbnRUeXBlKSB7XG4gICAgICB0aGlzLmhhbmRsZXJzW21vdXNlRXZlbnRUeXBlXSA9IFtdO1xuICAgIH0uYmluZCh0aGlzKSk7XG4gICAgXG4gICAgdGhpcy5hZGRFdmVudEhhbmRsZXIoY2FudmFzLCAnbW91c2V1cCcsIGZ1bmN0aW9uKGV2ZW50KSB7IHRoaXMub25Nb3VzZUV2ZW50KE1PVVNFX1VQLCBldmVudCkgfS5iaW5kKHRoaXMpICk7XG4gICAgdGhpcy5hZGRFdmVudEhhbmRsZXIoY2FudmFzLCAnbW91c2Vkb3duJywgZnVuY3Rpb24oZXZlbnQpIHsgdGhpcy5vbk1vdXNlRXZlbnQoTU9VU0VfRE9XTiwgZXZlbnQpIH0uYmluZCh0aGlzKSApO1xuICAgIHRoaXMuYWRkRXZlbnRIYW5kbGVyKGNhbnZhcywgJ21vdXNlbW92ZScsIGZ1bmN0aW9uKGV2ZW50KSB7IHRoaXMub25Nb3VzZUV2ZW50KE1PVVNFX01PVkUsIGV2ZW50KSB9LmJpbmQodGhpcykgKTtcbiAgICB0aGlzLmFkZEV2ZW50SGFuZGxlcihjYW52YXMsICdtb3VzZXdoZWVsJywgZnVuY3Rpb24oZXZlbnQpIHsgdGhpcy5vbk1vdXNlV2hlZWxFdmVudChldmVudCkgfS5iaW5kKHRoaXMpICk7XG4gIH1cblxuICBhZGRNb3VzZVVwRXZlbnRIYW5kbGVyKG1vdXNlVXBFdmVudEhhbmRsZXIpIHtcbiAgICB0aGlzLmFkZE1vdXNlRXZlbnRIYW5kbGVyKE1PVVNFX1VQLCBtb3VzZVVwRXZlbnRIYW5kbGVyKTtcbiAgfVxuXG4gIGFkZE1vdXNlRG93bkV2ZW50SGFuZGxlcihtb3VzZURvd25FdmVudEhhbmRsZXIpIHtcbiAgICB0aGlzLmFkZE1vdXNlRXZlbnRIYW5kbGVyKE1PVVNFX0RPV04sIG1vdXNlRG93bkV2ZW50SGFuZGxlcik7XG4gIH1cblxuICBhZGRNb3VzZU1vdmVFdmVudEhhbmRsZXIobW91c2VNb3ZlRXZlbnRIYW5kbGVyKSB7XG4gICAgdGhpcy5hZGRNb3VzZUV2ZW50SGFuZGxlcihNT1VTRV9NT1ZFLCBtb3VzZU1vdmVFdmVudEhhbmRsZXIpO1xuICB9XG5cbiAgYWRkTW91c2VXaGVlbEV2ZW50SGFuZGxlcihtb3VzZVdoZWVsRXZlbnRIYW5kbGVyKSB7XG4gICAgdGhpcy5hZGRNb3VzZUV2ZW50SGFuZGxlcihNT1VTRV9XSEVFTCwgbW91c2VXaGVlbEV2ZW50SGFuZGxlcik7XG4gIH1cblxuICBhZGRFdmVudEhhbmRsZXIoY2FudmFzLCB0eXBlLCBoYW5kbGVyKSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IGNhbnZhcy5nZXRET01FbGVtZW50KCk7XG5cbiAgICBkb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIGhhbmRsZXIoZXZlbnQpO1xuICAgIH0pO1xuICB9XG5cbiAgb25Nb3VzZUV2ZW50KG1vdXNlRXZlbnRUeXBlLCBldmVudCkge1xuICAgIGNvbnN0IG1vdXNlRXZlbnRIYW5kbGVycyA9IHRoaXMuaGFuZGxlcnNbbW91c2VFdmVudFR5cGVdLFxuICAgICAgICAgIG1vdXNlQ29vcmRpbmF0ZXMgPSB0aGlzLmNhbnZhcy5tb3VzZUNvb3JkaW5hdGVzRnJvbUV2ZW50KGV2ZW50KTtcblxuICAgIG1vdXNlRXZlbnRIYW5kbGVycy5mb3JFYWNoKGZ1bmN0aW9uKG1vdXNlRXZlbnRIYW5kbGVyKSB7XG4gICAgICBtb3VzZUV2ZW50SGFuZGxlcihtb3VzZUNvb3JkaW5hdGVzKTtcbiAgICB9KTtcbiAgfVxuXG4gIG9uTW91c2VXaGVlbEV2ZW50KGV2ZW50KSB7XG4gICAgY29uc3QgbW91c2VXaGVlbEV2ZW50VHlwZSA9IE1PVVNFX1dIRUVMLFxuICAgICAgICAgIG1vdXNlV2hlZWxFdmVudEhhbmRsZXJzID0gdGhpcy5oYW5kbGVyc1ttb3VzZVdoZWVsRXZlbnRUeXBlXSxcbiAgICAgICAgICBkZWx0YSA9IE1hdGgubWF4KC0xLCBNYXRoLm1pbigxLCBldmVudC53aGVlbERlbHRhKSk7IC8vL1xuXG4gICAgbW91c2VXaGVlbEV2ZW50SGFuZGxlcnMuZm9yRWFjaChmdW5jdGlvbihtb3VzZVdoZWVsRXZlbnRIYW5kbGVyKSB7XG4gICAgICBtb3VzZVdoZWVsRXZlbnRIYW5kbGVyKGRlbHRhKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFkZE1vdXNlRXZlbnRIYW5kbGVyKG1vdXNlRXZlbnRUeXBlLCBtb3VzZUV2ZW50SGFuZGxlcikge1xuICAgIGNvbnN0IG1vdXNlRXZlbnRIYW5kbGVycyA9IHRoaXMuaGFuZGxlcnNbbW91c2VFdmVudFR5cGVdO1xuXG4gICAgbW91c2VFdmVudEhhbmRsZXJzLnB1c2gobW91c2VFdmVudEhhbmRsZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKGNhbnZhcykge1xuICAgIGNvbnN0IG1vdXNlRXZlbnRzID0gbmV3IE1vdXNlRXZlbnRzKGNhbnZhcyk7XG5cbiAgICByZXR1cm4gbW91c2VFdmVudHM7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBNb3VzZUV2ZW50cztcbiJdfQ==
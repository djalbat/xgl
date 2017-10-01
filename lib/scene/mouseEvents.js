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
    this.addEventHandler(canvas, 'DOMMouseScroll', function (event) {
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
          delta = Math.max(-1, Math.min(1, event.wheelDelta || -event.detail)); ///

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9zY2VuZS9tb3VzZUV2ZW50cy5qcyJdLCJuYW1lcyI6WyJNT1VTRV9VUCIsIk1PVVNFX0RPV04iLCJNT1VTRV9NT1ZFIiwiTU9VU0VfV0hFRUwiLCJNb3VzZUV2ZW50cyIsImNhbnZhcyIsImhhbmRsZXJzIiwibW91c2VFdmVudFR5cGVzIiwiZm9yRWFjaCIsIm1vdXNlRXZlbnRUeXBlIiwiYmluZCIsImFkZEV2ZW50SGFuZGxlciIsImV2ZW50Iiwib25Nb3VzZUV2ZW50Iiwib25Nb3VzZVdoZWVsRXZlbnQiLCJtb3VzZVVwRXZlbnRIYW5kbGVyIiwiYWRkTW91c2VFdmVudEhhbmRsZXIiLCJtb3VzZURvd25FdmVudEhhbmRsZXIiLCJtb3VzZU1vdmVFdmVudEhhbmRsZXIiLCJtb3VzZVdoZWVsRXZlbnRIYW5kbGVyIiwidHlwZSIsImhhbmRsZXIiLCJkb21FbGVtZW50IiwiZ2V0RE9NRWxlbWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJwcmV2ZW50RGVmYXVsdCIsIm1vdXNlRXZlbnRIYW5kbGVycyIsIm1vdXNlQ29vcmRpbmF0ZXMiLCJtb3VzZUNvb3JkaW5hdGVzRnJvbUV2ZW50IiwibW91c2VFdmVudEhhbmRsZXIiLCJtb3VzZVdoZWVsRXZlbnRUeXBlIiwibW91c2VXaGVlbEV2ZW50SGFuZGxlcnMiLCJkZWx0YSIsIk1hdGgiLCJtYXgiLCJtaW4iLCJ3aGVlbERlbHRhIiwiZGV0YWlsIiwicHVzaCIsIm1vdXNlRXZlbnRzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFdBQVcsVUFBakI7QUFBQSxJQUNNQyxhQUFhLFlBRG5CO0FBQUEsSUFFTUMsYUFBYSxZQUZuQjtBQUFBLElBR01DLGNBQWMsYUFIcEI7O0lBS01DLFc7QUFDSix1QkFBWUMsTUFBWixFQUFvQjtBQUFBOztBQUNsQixTQUFLQSxNQUFMLEdBQWNBLE1BQWQ7O0FBRUEsU0FBS0MsUUFBTCxHQUFnQixFQUFoQjs7QUFF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eEIsTUFBTXlCLE1BQXhDLENBQWIsQ0FGZCxDQUR1QixDQUd1RDs7QUFFOUVOLDhCQUF3QnZCLE9BQXhCLENBQWdDLFVBQVNXLHNCQUFULEVBQWlDO0FBQy9EQSwrQkFBdUJhLEtBQXZCO0FBQ0QsT0FGRDtBQUdEOzs7eUNBRW9CdkIsYyxFQUFnQm9CLGlCLEVBQW1CO0FBQ3RELFVBQU1ILHFCQUFxQixLQUFLcEIsUUFBTCxDQUFjRyxjQUFkLENBQTNCOztBQUVBaUIseUJBQW1CWSxJQUFuQixDQUF3QlQsaUJBQXhCO0FBQ0Q7OztnQ0FFa0J4QixNLEVBQVE7QUFDekIsVUFBTWtDLGNBQWMsSUFBSW5DLFdBQUosQ0FBZ0JDLE1BQWhCLENBQXBCOztBQUVBLGFBQU9rQyxXQUFQO0FBQ0Q7Ozs7OztBQUdIQyxPQUFPQyxPQUFQLEdBQWlCckMsV0FBakIiLCJmaWxlIjoibW91c2VFdmVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IE1PVVNFX1VQID0gJ01PVVNFX1VQJyxcbiAgICAgIE1PVVNFX0RPV04gPSAnTU9VU0VfRE9XTicsXG4gICAgICBNT1VTRV9NT1ZFID0gJ01PVVNFX01PVkUnLFxuICAgICAgTU9VU0VfV0hFRUwgPSAnTU9VU0VfV0hFRUwnO1xuXG5jbGFzcyBNb3VzZUV2ZW50cyB7XG4gIGNvbnN0cnVjdG9yKGNhbnZhcykge1xuICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuXG4gICAgdGhpcy5oYW5kbGVycyA9IHt9O1xuXG4gICAgY29uc3QgbW91c2VFdmVudFR5cGVzID0gW1xuICAgICAgICAgICAgTU9VU0VfVVAsXG4gICAgICAgICAgICBNT1VTRV9ET1dOLFxuICAgICAgICAgICAgTU9VU0VfTU9WRSxcbiAgICAgICAgICAgIE1PVVNFX1dIRUVMXG4gICAgICAgICAgXTtcblxuICAgIG1vdXNlRXZlbnRUeXBlcy5mb3JFYWNoKGZ1bmN0aW9uKG1vdXNlRXZlbnRUeXBlKSB7XG4gICAgICB0aGlzLmhhbmRsZXJzW21vdXNlRXZlbnRUeXBlXSA9IFtdO1xuICAgIH0uYmluZCh0aGlzKSk7XG4gICAgXG4gICAgdGhpcy5hZGRFdmVudEhhbmRsZXIoY2FudmFzLCAnbW91c2V1cCcsIGZ1bmN0aW9uKGV2ZW50KSB7IHRoaXMub25Nb3VzZUV2ZW50KE1PVVNFX1VQLCBldmVudCkgfS5iaW5kKHRoaXMpICk7XG4gICAgdGhpcy5hZGRFdmVudEhhbmRsZXIoY2FudmFzLCAnbW91c2Vkb3duJywgZnVuY3Rpb24oZXZlbnQpIHsgdGhpcy5vbk1vdXNlRXZlbnQoTU9VU0VfRE9XTiwgZXZlbnQpIH0uYmluZCh0aGlzKSApO1xuICAgIHRoaXMuYWRkRXZlbnRIYW5kbGVyKGNhbnZhcywgJ21vdXNlbW92ZScsIGZ1bmN0aW9uKGV2ZW50KSB7IHRoaXMub25Nb3VzZUV2ZW50KE1PVVNFX01PVkUsIGV2ZW50KSB9LmJpbmQodGhpcykgKTtcbiAgICB0aGlzLmFkZEV2ZW50SGFuZGxlcihjYW52YXMsICdtb3VzZXdoZWVsJywgZnVuY3Rpb24oZXZlbnQpIHsgdGhpcy5vbk1vdXNlV2hlZWxFdmVudChldmVudCkgfS5iaW5kKHRoaXMpICk7XG4gICAgdGhpcy5hZGRFdmVudEhhbmRsZXIoY2FudmFzLCAnRE9NTW91c2VTY3JvbGwnLCBmdW5jdGlvbihldmVudCkgeyB0aGlzLm9uTW91c2VXaGVlbEV2ZW50KGV2ZW50KSB9LmJpbmQodGhpcykgKTtcbiAgfVxuXG4gIGFkZE1vdXNlVXBFdmVudEhhbmRsZXIobW91c2VVcEV2ZW50SGFuZGxlcikge1xuICAgIHRoaXMuYWRkTW91c2VFdmVudEhhbmRsZXIoTU9VU0VfVVAsIG1vdXNlVXBFdmVudEhhbmRsZXIpO1xuICB9XG5cbiAgYWRkTW91c2VEb3duRXZlbnRIYW5kbGVyKG1vdXNlRG93bkV2ZW50SGFuZGxlcikge1xuICAgIHRoaXMuYWRkTW91c2VFdmVudEhhbmRsZXIoTU9VU0VfRE9XTiwgbW91c2VEb3duRXZlbnRIYW5kbGVyKTtcbiAgfVxuXG4gIGFkZE1vdXNlTW92ZUV2ZW50SGFuZGxlcihtb3VzZU1vdmVFdmVudEhhbmRsZXIpIHtcbiAgICB0aGlzLmFkZE1vdXNlRXZlbnRIYW5kbGVyKE1PVVNFX01PVkUsIG1vdXNlTW92ZUV2ZW50SGFuZGxlcik7XG4gIH1cblxuICBhZGRNb3VzZVdoZWVsRXZlbnRIYW5kbGVyKG1vdXNlV2hlZWxFdmVudEhhbmRsZXIpIHtcbiAgICB0aGlzLmFkZE1vdXNlRXZlbnRIYW5kbGVyKE1PVVNFX1dIRUVMLCBtb3VzZVdoZWVsRXZlbnRIYW5kbGVyKTtcbiAgfVxuXG4gIGFkZEV2ZW50SGFuZGxlcihjYW52YXMsIHR5cGUsIGhhbmRsZXIpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gY2FudmFzLmdldERPTUVsZW1lbnQoKTtcblxuICAgIGRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgaGFuZGxlcihldmVudCk7XG4gICAgfSk7XG4gIH1cblxuICBvbk1vdXNlRXZlbnQobW91c2VFdmVudFR5cGUsIGV2ZW50KSB7XG4gICAgY29uc3QgbW91c2VFdmVudEhhbmRsZXJzID0gdGhpcy5oYW5kbGVyc1ttb3VzZUV2ZW50VHlwZV0sXG4gICAgICAgICAgbW91c2VDb29yZGluYXRlcyA9IHRoaXMuY2FudmFzLm1vdXNlQ29vcmRpbmF0ZXNGcm9tRXZlbnQoZXZlbnQpO1xuXG4gICAgbW91c2VFdmVudEhhbmRsZXJzLmZvckVhY2goZnVuY3Rpb24obW91c2VFdmVudEhhbmRsZXIpIHtcbiAgICAgIG1vdXNlRXZlbnRIYW5kbGVyKG1vdXNlQ29vcmRpbmF0ZXMpO1xuICAgIH0pO1xuICB9XG5cbiAgb25Nb3VzZVdoZWVsRXZlbnQoZXZlbnQpIHtcbiAgICBjb25zdCBtb3VzZVdoZWVsRXZlbnRUeXBlID0gTU9VU0VfV0hFRUwsXG4gICAgICAgICAgbW91c2VXaGVlbEV2ZW50SGFuZGxlcnMgPSB0aGlzLmhhbmRsZXJzW21vdXNlV2hlZWxFdmVudFR5cGVdLFxuICAgICAgICAgIGRlbHRhID0gTWF0aC5tYXgoLTEsIE1hdGgubWluKDEsIChldmVudC53aGVlbERlbHRhIHx8IC1ldmVudC5kZXRhaWwpKSk7IC8vL1xuXG4gICAgbW91c2VXaGVlbEV2ZW50SGFuZGxlcnMuZm9yRWFjaChmdW5jdGlvbihtb3VzZVdoZWVsRXZlbnRIYW5kbGVyKSB7XG4gICAgICBtb3VzZVdoZWVsRXZlbnRIYW5kbGVyKGRlbHRhKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFkZE1vdXNlRXZlbnRIYW5kbGVyKG1vdXNlRXZlbnRUeXBlLCBtb3VzZUV2ZW50SGFuZGxlcikge1xuICAgIGNvbnN0IG1vdXNlRXZlbnRIYW5kbGVycyA9IHRoaXMuaGFuZGxlcnNbbW91c2VFdmVudFR5cGVdO1xuXG4gICAgbW91c2VFdmVudEhhbmRsZXJzLnB1c2gobW91c2VFdmVudEhhbmRsZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKGNhbnZhcykge1xuICAgIGNvbnN0IG1vdXNlRXZlbnRzID0gbmV3IE1vdXNlRXZlbnRzKGNhbnZhcyk7XG5cbiAgICByZXR1cm4gbW91c2VFdmVudHM7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBNb3VzZUV2ZW50cztcbiJdfQ==
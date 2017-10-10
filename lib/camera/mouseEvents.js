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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jYW1lcmEvbW91c2VFdmVudHMuanMiXSwibmFtZXMiOlsiTU9VU0VfVVAiLCJNT1VTRV9ET1dOIiwiTU9VU0VfTU9WRSIsIk1PVVNFX1dIRUVMIiwiTW91c2VFdmVudHMiLCJjYW52YXMiLCJoYW5kbGVycyIsIm1vdXNlRXZlbnRUeXBlcyIsImZvckVhY2giLCJtb3VzZUV2ZW50VHlwZSIsImJpbmQiLCJhZGRFdmVudEhhbmRsZXIiLCJldmVudCIsIm9uTW91c2VFdmVudCIsIm9uTW91c2VXaGVlbEV2ZW50IiwibW91c2VVcEV2ZW50SGFuZGxlciIsImFkZE1vdXNlRXZlbnRIYW5kbGVyIiwibW91c2VEb3duRXZlbnRIYW5kbGVyIiwibW91c2VNb3ZlRXZlbnRIYW5kbGVyIiwibW91c2VXaGVlbEV2ZW50SGFuZGxlciIsInR5cGUiLCJoYW5kbGVyIiwiZG9tRWxlbWVudCIsImdldERPTUVsZW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicHJldmVudERlZmF1bHQiLCJtb3VzZUV2ZW50SGFuZGxlcnMiLCJtb3VzZUNvb3JkaW5hdGVzIiwibW91c2VDb29yZGluYXRlc0Zyb21FdmVudCIsIm1vdXNlRXZlbnRIYW5kbGVyIiwibW91c2VXaGVlbEV2ZW50VHlwZSIsIm1vdXNlV2hlZWxFdmVudEhhbmRsZXJzIiwiZGVsdGEiLCJNYXRoIiwibWF4IiwibWluIiwid2hlZWxEZWx0YSIsImRldGFpbCIsInB1c2giLCJtb3VzZUV2ZW50cyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxXQUFXLFVBQWpCO0FBQUEsSUFDTUMsYUFBYSxZQURuQjtBQUFBLElBRU1DLGFBQWEsWUFGbkI7QUFBQSxJQUdNQyxjQUFjLGFBSHBCOztJQUtNQyxXO0FBQ0osdUJBQVlDLE1BQVosRUFBb0I7QUFBQTs7QUFDbEIsU0FBS0EsTUFBTCxHQUFjQSxNQUFkOztBQUVBLFNBQUtDLFFBQUwsR0FBZ0IsRUFBaEI7O0FB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Q3hCLE1BQU15QixNQUF4QyxDQUFiLENBRmQsQ0FEdUIsQ0FHdUQ7O0FBRTlFTiw4QkFBd0J2QixPQUF4QixDQUFnQyxVQUFTVyxzQkFBVCxFQUFpQztBQUMvREEsK0JBQXVCYSxLQUF2QjtBQUNELE9BRkQ7QUFHRDs7O3lDQUVvQnZCLGMsRUFBZ0JvQixpQixFQUFtQjtBQUN0RCxVQUFNSCxxQkFBcUIsS0FBS3BCLFFBQUwsQ0FBY0csY0FBZCxDQUEzQjs7QUFFQWlCLHlCQUFtQlksSUFBbkIsQ0FBd0JULGlCQUF4QjtBQUNEOzs7Z0NBRWtCeEIsTSxFQUFRO0FBQ3pCLFVBQU1rQyxjQUFjLElBQUluQyxXQUFKLENBQWdCQyxNQUFoQixDQUFwQjs7QUFFQSxhQUFPa0MsV0FBUDtBQUNEOzs7Ozs7QUFHSEMsT0FBT0MsT0FBUCxHQUFpQnJDLFdBQWpCIiwiZmlsZSI6Im1vdXNlRXZlbnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBNT1VTRV9VUCA9ICdNT1VTRV9VUCcsXG4gICAgICBNT1VTRV9ET1dOID0gJ01PVVNFX0RPV04nLFxuICAgICAgTU9VU0VfTU9WRSA9ICdNT1VTRV9NT1ZFJyxcbiAgICAgIE1PVVNFX1dIRUVMID0gJ01PVVNFX1dIRUVMJztcblxuY2xhc3MgTW91c2VFdmVudHMge1xuICBjb25zdHJ1Y3RvcihjYW52YXMpIHtcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcblxuICAgIHRoaXMuaGFuZGxlcnMgPSB7fTtcblxuICAgIGNvbnN0IG1vdXNlRXZlbnRUeXBlcyA9IFtcbiAgICAgICAgICAgIE1PVVNFX1VQLFxuICAgICAgICAgICAgTU9VU0VfRE9XTixcbiAgICAgICAgICAgIE1PVVNFX01PVkUsXG4gICAgICAgICAgICBNT1VTRV9XSEVFTFxuICAgICAgICAgIF07XG5cbiAgICBtb3VzZUV2ZW50VHlwZXMuZm9yRWFjaChmdW5jdGlvbihtb3VzZUV2ZW50VHlwZSkge1xuICAgICAgdGhpcy5oYW5kbGVyc1ttb3VzZUV2ZW50VHlwZV0gPSBbXTtcbiAgICB9LmJpbmQodGhpcykpO1xuICAgIFxuICAgIHRoaXMuYWRkRXZlbnRIYW5kbGVyKGNhbnZhcywgJ21vdXNldXAnLCBmdW5jdGlvbihldmVudCkgeyB0aGlzLm9uTW91c2VFdmVudChNT1VTRV9VUCwgZXZlbnQpIH0uYmluZCh0aGlzKSApO1xuICAgIHRoaXMuYWRkRXZlbnRIYW5kbGVyKGNhbnZhcywgJ21vdXNlZG93bicsIGZ1bmN0aW9uKGV2ZW50KSB7IHRoaXMub25Nb3VzZUV2ZW50KE1PVVNFX0RPV04sIGV2ZW50KSB9LmJpbmQodGhpcykgKTtcbiAgICB0aGlzLmFkZEV2ZW50SGFuZGxlcihjYW52YXMsICdtb3VzZW1vdmUnLCBmdW5jdGlvbihldmVudCkgeyB0aGlzLm9uTW91c2VFdmVudChNT1VTRV9NT1ZFLCBldmVudCkgfS5iaW5kKHRoaXMpICk7XG4gICAgdGhpcy5hZGRFdmVudEhhbmRsZXIoY2FudmFzLCAnbW91c2V3aGVlbCcsIGZ1bmN0aW9uKGV2ZW50KSB7IHRoaXMub25Nb3VzZVdoZWVsRXZlbnQoZXZlbnQpIH0uYmluZCh0aGlzKSApO1xuICAgIHRoaXMuYWRkRXZlbnRIYW5kbGVyKGNhbnZhcywgJ0RPTU1vdXNlU2Nyb2xsJywgZnVuY3Rpb24oZXZlbnQpIHsgdGhpcy5vbk1vdXNlV2hlZWxFdmVudChldmVudCkgfS5iaW5kKHRoaXMpICk7XG4gIH1cblxuICBhZGRNb3VzZVVwRXZlbnRIYW5kbGVyKG1vdXNlVXBFdmVudEhhbmRsZXIpIHtcbiAgICB0aGlzLmFkZE1vdXNlRXZlbnRIYW5kbGVyKE1PVVNFX1VQLCBtb3VzZVVwRXZlbnRIYW5kbGVyKTtcbiAgfVxuXG4gIGFkZE1vdXNlRG93bkV2ZW50SGFuZGxlcihtb3VzZURvd25FdmVudEhhbmRsZXIpIHtcbiAgICB0aGlzLmFkZE1vdXNlRXZlbnRIYW5kbGVyKE1PVVNFX0RPV04sIG1vdXNlRG93bkV2ZW50SGFuZGxlcik7XG4gIH1cblxuICBhZGRNb3VzZU1vdmVFdmVudEhhbmRsZXIobW91c2VNb3ZlRXZlbnRIYW5kbGVyKSB7XG4gICAgdGhpcy5hZGRNb3VzZUV2ZW50SGFuZGxlcihNT1VTRV9NT1ZFLCBtb3VzZU1vdmVFdmVudEhhbmRsZXIpO1xuICB9XG5cbiAgYWRkTW91c2VXaGVlbEV2ZW50SGFuZGxlcihtb3VzZVdoZWVsRXZlbnRIYW5kbGVyKSB7XG4gICAgdGhpcy5hZGRNb3VzZUV2ZW50SGFuZGxlcihNT1VTRV9XSEVFTCwgbW91c2VXaGVlbEV2ZW50SGFuZGxlcik7XG4gIH1cblxuICBhZGRFdmVudEhhbmRsZXIoY2FudmFzLCB0eXBlLCBoYW5kbGVyKSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IGNhbnZhcy5nZXRET01FbGVtZW50KCk7XG5cbiAgICBkb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIGhhbmRsZXIoZXZlbnQpO1xuICAgIH0pO1xuICB9XG5cbiAgb25Nb3VzZUV2ZW50KG1vdXNlRXZlbnRUeXBlLCBldmVudCkge1xuICAgIGNvbnN0IG1vdXNlRXZlbnRIYW5kbGVycyA9IHRoaXMuaGFuZGxlcnNbbW91c2VFdmVudFR5cGVdLFxuICAgICAgICAgIG1vdXNlQ29vcmRpbmF0ZXMgPSB0aGlzLmNhbnZhcy5tb3VzZUNvb3JkaW5hdGVzRnJvbUV2ZW50KGV2ZW50KTtcblxuICAgIG1vdXNlRXZlbnRIYW5kbGVycy5mb3JFYWNoKGZ1bmN0aW9uKG1vdXNlRXZlbnRIYW5kbGVyKSB7XG4gICAgICBtb3VzZUV2ZW50SGFuZGxlcihtb3VzZUNvb3JkaW5hdGVzKTtcbiAgICB9KTtcbiAgfVxuXG4gIG9uTW91c2VXaGVlbEV2ZW50KGV2ZW50KSB7XG4gICAgY29uc3QgbW91c2VXaGVlbEV2ZW50VHlwZSA9IE1PVVNFX1dIRUVMLFxuICAgICAgICAgIG1vdXNlV2hlZWxFdmVudEhhbmRsZXJzID0gdGhpcy5oYW5kbGVyc1ttb3VzZVdoZWVsRXZlbnRUeXBlXSxcbiAgICAgICAgICBkZWx0YSA9IE1hdGgubWF4KC0xLCBNYXRoLm1pbigxLCAoZXZlbnQud2hlZWxEZWx0YSB8fCAtZXZlbnQuZGV0YWlsKSkpOyAvLy9cblxuICAgIG1vdXNlV2hlZWxFdmVudEhhbmRsZXJzLmZvckVhY2goZnVuY3Rpb24obW91c2VXaGVlbEV2ZW50SGFuZGxlcikge1xuICAgICAgbW91c2VXaGVlbEV2ZW50SGFuZGxlcihkZWx0YSk7XG4gICAgfSk7XG4gIH1cblxuICBhZGRNb3VzZUV2ZW50SGFuZGxlcihtb3VzZUV2ZW50VHlwZSwgbW91c2VFdmVudEhhbmRsZXIpIHtcbiAgICBjb25zdCBtb3VzZUV2ZW50SGFuZGxlcnMgPSB0aGlzLmhhbmRsZXJzW21vdXNlRXZlbnRUeXBlXTtcblxuICAgIG1vdXNlRXZlbnRIYW5kbGVycy5wdXNoKG1vdXNlRXZlbnRIYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZyhjYW52YXMpIHtcbiAgICBjb25zdCBtb3VzZUV2ZW50cyA9IG5ldyBNb3VzZUV2ZW50cyhjYW52YXMpO1xuXG4gICAgcmV0dXJuIG1vdXNlRXZlbnRzO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTW91c2VFdmVudHM7XG4iXX0=
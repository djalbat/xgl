'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var constants = require('../constants');

var MOUSE_UP = constants.MOUSE_UP,
    MOUSE_DOWN = constants.MOUSE_DOWN,
    MOUSE_MOVE = constants.MOUSE_MOVE,
    MOUSE_WHEEL = constants.MOUSE_WHEEL;

var MouseEvents = function () {
  function MouseEvents(canvas, handlers) {
    _classCallCheck(this, MouseEvents);

    this.canvas = canvas;
    this.handlers = handlers;

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
    key: 'addMouseEventHandler',
    value: function addMouseEventHandler(mouseEventType, mouseEventHandler) {
      var mouseEventHandlers = this.handlers[mouseEventType];

      mouseEventHandlers.push(mouseEventHandler);
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
          delta = deltaFromEvent(event);

      mouseWheelEventHandlers.forEach(function (mouseWheelEventHandler) {
        mouseWheelEventHandler(delta);
      });
    }
  }], [{
    key: 'fromNothing',
    value: function fromNothing(canvas) {
      var handlers = {
        MOUSE_UP: [],
        MOUSE_DOWN: [],
        MOUSE_MOVE: [],
        MOUSE_WHEEL: []
      },
          mouseEvents = new MouseEvents(canvas, handlers);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jYW1lcmEvbW91c2VFdmVudHMuanMiXSwibmFtZXMiOlsiY29uc3RhbnRzIiwicmVxdWlyZSIsIk1PVVNFX1VQIiwiTU9VU0VfRE9XTiIsIk1PVVNFX01PVkUiLCJNT1VTRV9XSEVFTCIsIk1vdXNlRXZlbnRzIiwiY2FudmFzIiwiaGFuZGxlcnMiLCJhZGRFdmVudEhhbmRsZXIiLCJldmVudCIsIm9uTW91c2VFdmVudCIsImJpbmQiLCJvbk1vdXNlV2hlZWxFdmVudCIsIm1vdXNlVXBFdmVudEhhbmRsZXIiLCJhZGRNb3VzZUV2ZW50SGFuZGxlciIsIm1vdXNlRG93bkV2ZW50SGFuZGxlciIsIm1vdXNlTW92ZUV2ZW50SGFuZGxlciIsIm1vdXNlV2hlZWxFdmVudEhhbmRsZXIiLCJtb3VzZUV2ZW50VHlwZSIsIm1vdXNlRXZlbnRIYW5kbGVyIiwibW91c2VFdmVudEhhbmRsZXJzIiwicHVzaCIsInR5cGUiLCJoYW5kbGVyIiwiZG9tRWxlbWVudCIsImdldERPTUVsZW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicHJldmVudERlZmF1bHQiLCJtb3VzZUNvb3JkaW5hdGVzIiwibW91c2VDb29yZGluYXRlc0Zyb21FdmVudCIsImZvckVhY2giLCJtb3VzZVdoZWVsRXZlbnRUeXBlIiwibW91c2VXaGVlbEV2ZW50SGFuZGxlcnMiLCJkZWx0YSIsImRlbHRhRnJvbUV2ZW50IiwibW91c2VFdmVudHMiLCJtb2R1bGUiLCJleHBvcnRzIiwiTWF0aCIsIm1heCIsIm1pbiIsIndoZWVsRGVsdGEiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxZQUFZQyxRQUFRLGNBQVIsQ0FBbEI7O0lBRVFDLFEsR0FBa0RGLFMsQ0FBbERFLFE7SUFBVUMsVSxHQUF3Q0gsUyxDQUF4Q0csVTtJQUFZQyxVLEdBQTRCSixTLENBQTVCSSxVO0lBQVlDLFcsR0FBZ0JMLFMsQ0FBaEJLLFc7O0lBRXBDQyxXO0FBQ0osdUJBQVlDLE1BQVosRUFBb0JDLFFBQXBCLEVBQThCO0FBQUE7O0FBQzVCLFNBQUtELE1BQUwsR0FBY0EsTUFBZDtBQUNBLFNBQUtDLFFBQUwsR0FBZ0JBLFFBQWhCOztBQUVBLFNBQUtDLGVBQUwsQ0FBcUJGLE1BQXJCLEVBQTZCLFNBQTdCLEVBQXdDLFVBQVNHLEtBQVQsRUFBZ0I7QUFBRSxXQUFLQyxZQUFMLENBQWtCVCxRQUFsQixFQUE0QlEsS0FBNUI7QUFBb0MsS0FBdEQsQ0FBdURFLElBQXZELENBQTRELElBQTVELENBQXhDO0FBQ0EsU0FBS0gsZUFBTCxDQUFxQkYsTUFBckIsRUFBNkIsV0FBN0IsRUFBMEMsVUFBU0csS0FBVCxFQUFnQjtBQUFFLFdBQUtDLFlBQUwsQ0FBa0JSLFVBQWxCLEVBQThCTyxLQUE5QjtBQUFzQyxLQUF4RCxDQUF5REUsSUFBekQsQ0FBOEQsSUFBOUQsQ0FBMUM7QUFDQSxTQUFLSCxlQUFMLENBQXFCRixNQUFyQixFQUE2QixXQUE3QixFQUEwQyxVQUFTRyxLQUFULEVBQWdCO0FBQUUsV0FBS0MsWUFBTCxDQUFrQlAsVUFBbEIsRUFBOEJNLEtBQTlCO0FBQXNDLEtBQXhELENBQXlERSxJQUF6RCxDQUE4RCxJQUE5RCxDQUExQztBQUNBLFNBQUtILGVBQUwsQ0FBcUJGLE1BQXJCLEVBQTZCLFlBQTdCLEVBQTJDLFVBQVNHLEtBQVQsRUFBZ0I7QUFBRSxXQUFLRyxpQkFBTCxDQUF1QkgsS0FBdkI7QUFBK0IsS0FBakQsQ0FBa0RFLElBQWxELENBQXVELElBQXZELENBQTNDO0FBQ0Q7Ozs7MkNBRXNCRSxtQixFQUFxQjtBQUMxQyxXQUFLQyxvQkFBTCxDQUEwQmIsUUFBMUIsRUFBb0NZLG1CQUFwQztBQUNEOzs7NkNBRXdCRSxxQixFQUF1QjtBQUM5QyxXQUFLRCxvQkFBTCxDQUEwQlosVUFBMUIsRUFBc0NhLHFCQUF0QztBQUNEOzs7NkNBRXdCQyxxQixFQUF1QjtBQUM5QyxXQUFLRixvQkFBTCxDQUEwQlgsVUFBMUIsRUFBc0NhLHFCQUF0QztBQUNEOzs7OENBRXlCQyxzQixFQUF3QjtBQUNoRCxXQUFLSCxvQkFBTCxDQUEwQlYsV0FBMUIsRUFBdUNhLHNCQUF2QztBQUNEOzs7eUNBRW9CQyxjLEVBQWdCQyxpQixFQUFtQjtBQUN0RCxVQUFNQyxxQkFBcUIsS0FBS2IsUUFBTCxDQUFjVyxjQUFkLENBQTNCOztBQUVBRSx5QkFBbUJDLElBQW5CLENBQXdCRixpQkFBeEI7QUFDRDs7O29DQUVlYixNLEVBQVFnQixJLEVBQU1DLE8sRUFBUztBQUNyQyxVQUFNQyxhQUFhbEIsT0FBT21CLGFBQVAsRUFBbkI7O0FBRUFELGlCQUFXRSxnQkFBWCxDQUE0QkosSUFBNUIsRUFBa0MsVUFBU2IsS0FBVCxFQUFnQjtBQUNoREEsY0FBTWtCLGNBQU47O0FBRUFKLGdCQUFRZCxLQUFSO0FBQ0QsT0FKRDtBQUtEOzs7aUNBRVlTLGMsRUFBZ0JULEssRUFBTztBQUNsQyxVQUFNVyxxQkFBcUIsS0FBS2IsUUFBTCxDQUFjVyxjQUFkLENBQTNCO0FBQUEsVUFDTVUsbUJBQW1CLEtBQUt0QixNQUFMLENBQVl1Qix5QkFBWixDQUFzQ3BCLEtBQXRDLENBRHpCOztBQUdBVyx5QkFBbUJVLE9BQW5CLENBQTJCLFVBQVNYLGlCQUFULEVBQTRCO0FBQ3JEQSwwQkFBa0JTLGdCQUFsQjtBQUNELE9BRkQ7QUFHRDs7O3NDQUVpQm5CLEssRUFBTztBQUN2QixVQUFNc0Isc0JBQXNCM0IsV0FBNUI7QUFBQSxVQUNNNEIsMEJBQTBCLEtBQUt6QixRQUFMLENBQWN3QixtQkFBZCxDQURoQztBQUFBLFVBRU1FLFFBQVFDLGVBQWV6QixLQUFmLENBRmQ7O0FBSUF1Qiw4QkFBd0JGLE9BQXhCLENBQWdDLFVBQVNiLHNCQUFULEVBQWlDO0FBQy9EQSwrQkFBdUJnQixLQUF2QjtBQUNELE9BRkQ7QUFHRDs7O2dDQUVrQjNCLE0sRUFBUTtBQUN6QixVQUFNQyxXQUFXO0FBQ1ROLGtCQUFVLEVBREQ7QUFFVEMsb0JBQVksRUFGSDtBQUdUQyxvQkFBWSxFQUhIO0FBSVRDLHFCQUFhO0FBSkosT0FBakI7QUFBQSxVQU1NK0IsY0FBYyxJQUFJOUIsV0FBSixDQUFnQkMsTUFBaEIsRUFBd0JDLFFBQXhCLENBTnBCOztBQVFBLGFBQU80QixXQUFQO0FBQ0Q7Ozs7OztBQUdIQyxPQUFPQyxPQUFQLEdBQWlCaEMsV0FBakI7O0FBRUEsU0FBUzZCLGNBQVQsQ0FBd0J6QixLQUF4QixFQUErQjtBQUM3QixNQUFNd0IsUUFBUUssS0FBS0MsR0FBTCxDQUFTLENBQUMsQ0FBVixFQUFhRCxLQUFLRSxHQUFMLENBQVMsQ0FBVCxFQUFZL0IsTUFBTWdDLFVBQWxCLENBQWIsQ0FBZCxDQUQ2QixDQUM4Qjs7QUFFM0QsU0FBT1IsS0FBUDtBQUNEIiwiZmlsZSI6Im1vdXNlRXZlbnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBjb25zdGFudHMgPSByZXF1aXJlKCcuLi9jb25zdGFudHMnKTtcblxuY29uc3QgeyBNT1VTRV9VUCwgTU9VU0VfRE9XTiwgTU9VU0VfTU9WRSwgTU9VU0VfV0hFRUwgfSA9IGNvbnN0YW50cztcblxuY2xhc3MgTW91c2VFdmVudHMge1xuICBjb25zdHJ1Y3RvcihjYW52YXMsIGhhbmRsZXJzKSB7XG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgdGhpcy5oYW5kbGVycyA9IGhhbmRsZXJzO1xuXG4gICAgdGhpcy5hZGRFdmVudEhhbmRsZXIoY2FudmFzLCAnbW91c2V1cCcsIGZ1bmN0aW9uKGV2ZW50KSB7IHRoaXMub25Nb3VzZUV2ZW50KE1PVVNFX1VQLCBldmVudCkgfS5iaW5kKHRoaXMpICk7XG4gICAgdGhpcy5hZGRFdmVudEhhbmRsZXIoY2FudmFzLCAnbW91c2Vkb3duJywgZnVuY3Rpb24oZXZlbnQpIHsgdGhpcy5vbk1vdXNlRXZlbnQoTU9VU0VfRE9XTiwgZXZlbnQpIH0uYmluZCh0aGlzKSApO1xuICAgIHRoaXMuYWRkRXZlbnRIYW5kbGVyKGNhbnZhcywgJ21vdXNlbW92ZScsIGZ1bmN0aW9uKGV2ZW50KSB7IHRoaXMub25Nb3VzZUV2ZW50KE1PVVNFX01PVkUsIGV2ZW50KSB9LmJpbmQodGhpcykgKTtcbiAgICB0aGlzLmFkZEV2ZW50SGFuZGxlcihjYW52YXMsICdtb3VzZXdoZWVsJywgZnVuY3Rpb24oZXZlbnQpIHsgdGhpcy5vbk1vdXNlV2hlZWxFdmVudChldmVudCkgfS5iaW5kKHRoaXMpICk7XG4gIH1cblxuICBhZGRNb3VzZVVwRXZlbnRIYW5kbGVyKG1vdXNlVXBFdmVudEhhbmRsZXIpIHtcbiAgICB0aGlzLmFkZE1vdXNlRXZlbnRIYW5kbGVyKE1PVVNFX1VQLCBtb3VzZVVwRXZlbnRIYW5kbGVyKTtcbiAgfVxuXG4gIGFkZE1vdXNlRG93bkV2ZW50SGFuZGxlcihtb3VzZURvd25FdmVudEhhbmRsZXIpIHtcbiAgICB0aGlzLmFkZE1vdXNlRXZlbnRIYW5kbGVyKE1PVVNFX0RPV04sIG1vdXNlRG93bkV2ZW50SGFuZGxlcik7XG4gIH1cblxuICBhZGRNb3VzZU1vdmVFdmVudEhhbmRsZXIobW91c2VNb3ZlRXZlbnRIYW5kbGVyKSB7XG4gICAgdGhpcy5hZGRNb3VzZUV2ZW50SGFuZGxlcihNT1VTRV9NT1ZFLCBtb3VzZU1vdmVFdmVudEhhbmRsZXIpO1xuICB9XG5cbiAgYWRkTW91c2VXaGVlbEV2ZW50SGFuZGxlcihtb3VzZVdoZWVsRXZlbnRIYW5kbGVyKSB7XG4gICAgdGhpcy5hZGRNb3VzZUV2ZW50SGFuZGxlcihNT1VTRV9XSEVFTCwgbW91c2VXaGVlbEV2ZW50SGFuZGxlcik7XG4gIH1cblxuICBhZGRNb3VzZUV2ZW50SGFuZGxlcihtb3VzZUV2ZW50VHlwZSwgbW91c2VFdmVudEhhbmRsZXIpIHtcbiAgICBjb25zdCBtb3VzZUV2ZW50SGFuZGxlcnMgPSB0aGlzLmhhbmRsZXJzW21vdXNlRXZlbnRUeXBlXTtcblxuICAgIG1vdXNlRXZlbnRIYW5kbGVycy5wdXNoKG1vdXNlRXZlbnRIYW5kbGVyKTtcbiAgfVxuXG4gIGFkZEV2ZW50SGFuZGxlcihjYW52YXMsIHR5cGUsIGhhbmRsZXIpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gY2FudmFzLmdldERPTUVsZW1lbnQoKTtcblxuICAgIGRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgaGFuZGxlcihldmVudCk7XG4gICAgfSk7XG4gIH1cblxuICBvbk1vdXNlRXZlbnQobW91c2VFdmVudFR5cGUsIGV2ZW50KSB7XG4gICAgY29uc3QgbW91c2VFdmVudEhhbmRsZXJzID0gdGhpcy5oYW5kbGVyc1ttb3VzZUV2ZW50VHlwZV0sXG4gICAgICAgICAgbW91c2VDb29yZGluYXRlcyA9IHRoaXMuY2FudmFzLm1vdXNlQ29vcmRpbmF0ZXNGcm9tRXZlbnQoZXZlbnQpO1xuXG4gICAgbW91c2VFdmVudEhhbmRsZXJzLmZvckVhY2goZnVuY3Rpb24obW91c2VFdmVudEhhbmRsZXIpIHtcbiAgICAgIG1vdXNlRXZlbnRIYW5kbGVyKG1vdXNlQ29vcmRpbmF0ZXMpO1xuICAgIH0pO1xuICB9XG5cbiAgb25Nb3VzZVdoZWVsRXZlbnQoZXZlbnQpIHtcbiAgICBjb25zdCBtb3VzZVdoZWVsRXZlbnRUeXBlID0gTU9VU0VfV0hFRUwsXG4gICAgICAgICAgbW91c2VXaGVlbEV2ZW50SGFuZGxlcnMgPSB0aGlzLmhhbmRsZXJzW21vdXNlV2hlZWxFdmVudFR5cGVdLFxuICAgICAgICAgIGRlbHRhID0gZGVsdGFGcm9tRXZlbnQoZXZlbnQpO1xuXG4gICAgbW91c2VXaGVlbEV2ZW50SGFuZGxlcnMuZm9yRWFjaChmdW5jdGlvbihtb3VzZVdoZWVsRXZlbnRIYW5kbGVyKSB7XG4gICAgICBtb3VzZVdoZWVsRXZlbnRIYW5kbGVyKGRlbHRhKTtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZyhjYW52YXMpIHtcbiAgICBjb25zdCBoYW5kbGVycyA9IHtcbiAgICAgICAgICAgIE1PVVNFX1VQOiBbXSxcbiAgICAgICAgICAgIE1PVVNFX0RPV046IFtdLFxuICAgICAgICAgICAgTU9VU0VfTU9WRTogW10sXG4gICAgICAgICAgICBNT1VTRV9XSEVFTDogW11cbiAgICAgICAgICB9LFxuICAgICAgICAgIG1vdXNlRXZlbnRzID0gbmV3IE1vdXNlRXZlbnRzKGNhbnZhcywgaGFuZGxlcnMpO1xuXG4gICAgcmV0dXJuIG1vdXNlRXZlbnRzO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTW91c2VFdmVudHM7XG5cbmZ1bmN0aW9uIGRlbHRhRnJvbUV2ZW50KGV2ZW50KSB7XG4gIGNvbnN0IGRlbHRhID0gTWF0aC5tYXgoLTEsIE1hdGgubWluKDEsIGV2ZW50LndoZWVsRGVsdGEpKTsgLy8vXG5cbiAgcmV0dXJuIGRlbHRhO1xufVxuIl19
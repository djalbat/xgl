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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9taXNjZWxsYW5lb3VzL21vdXNlRXZlbnRzLmpzIl0sIm5hbWVzIjpbImNvbnN0YW50cyIsInJlcXVpcmUiLCJNT1VTRV9VUCIsIk1PVVNFX0RPV04iLCJNT1VTRV9NT1ZFIiwiTU9VU0VfV0hFRUwiLCJNb3VzZUV2ZW50cyIsImhhbmRsZXJzTWFwIiwibW91c2VEb3duIiwiY2FudmFzIiwiZXZlbnQiLCJldmVudFR5cGUiLCJoYW5kbGVycyIsIm1vdXNlQ29vcmRpbmF0ZXMiLCJtb3VzZUNvb3JkaW5hdGVzRnJvbUV2ZW50IiwiZm9yRWFjaCIsImhhbmRsZXIiLCJwcmV2ZW50RGVmYXVsdCIsIm1vdXNlRXZlbnRMaXN0ZW5lciIsImRlbHRhIiwiZGVsdGFGcm9tRXZlbnQiLCJtb3VzZVVwSGFuZGxlciIsIm1vdXNlVXBIYW5kbGVycyIsInB1c2giLCJtb3VzZURvd25IYW5kbGVyIiwibW91c2VEb3duSGFuZGxlcnMiLCJtb3VzZU1vdmVIYW5kbGVyIiwibW91c2VNb3ZlSGFuZGxlcnMiLCJtb3VzZVdoZWVsSGFuZGxlciIsIm1vdXNlV2hlZWxIYW5kbGVycyIsIm1vdXNlRXZlbnRzIiwiY2FudmFzRE9NRWxlbWVudCIsImdldERPTUVsZW1lbnQiLCJtb3VzZVVwRXZlbnRMaXN0ZW5lciIsImJpbmQiLCJtb3VzZURvd25FdmVudExpc3RlbmVyIiwibW91c2VNb3ZlRXZlbnRMaXN0ZW5lciIsIm1vdXNlV2hlZWxFdmVudExpc3RlbmVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm1vZHVsZSIsImV4cG9ydHMiLCJNYXRoIiwibWF4IiwibWluIiwid2hlZWxEZWx0YSIsInRhcmdldCIsImNsaWVudFgiLCJjbGllbnRZIiwiYm91bmRpbmdDbGllbnRSZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9wIiwibGVmdCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFlBQVlDLFFBQVEsY0FBUixDQUFsQjs7SUFFUUMsUSxHQUFrREYsUyxDQUFsREUsUTtJQUFVQyxVLEdBQXdDSCxTLENBQXhDRyxVO0lBQVlDLFUsR0FBNEJKLFMsQ0FBNUJJLFU7SUFBWUMsVyxHQUFnQkwsUyxDQUFoQkssVzs7SUFFcENDLFc7QUFDSix1QkFBWUMsV0FBWixFQUF5QkMsU0FBekIsRUFBb0NDLE1BQXBDLEVBQTRDO0FBQUE7O0FBQzFDLFNBQUtGLFdBQUwsR0FBbUJBLFdBQW5CO0FBQ0EsU0FBS0MsU0FBTCxHQUFpQkEsU0FBakI7QUFDQSxTQUFLQyxNQUFMLEdBQWNBLE1BQWQ7QUFDRDs7Ozt1Q0FFa0JDLEssRUFBT0MsUyxFQUFXO0FBQUE7O0FBQ25DLFVBQU1DLFdBQVcsS0FBS0wsV0FBTCxDQUFpQkksU0FBakIsQ0FBakI7QUFBQSxVQUNNRSxtQkFBbUJDLDBCQUEwQkosS0FBMUIsRUFBaUMsS0FBS0QsTUFBdEMsQ0FEekI7O0FBR0FHLGVBQVNHLE9BQVQsQ0FBaUIsVUFBQ0MsT0FBRDtBQUFBLGVBQWFBLFFBQVFILGdCQUFSLEVBQTBCLE1BQUtMLFNBQS9CLEVBQTBDLE1BQUtDLE1BQS9DLENBQWI7QUFBQSxPQUFqQjs7QUFFQUMsWUFBTU8sY0FBTjtBQUNEOzs7eUNBRW9CUCxLLEVBQU87QUFDMUIsV0FBS0YsU0FBTCxHQUFpQixLQUFqQjs7QUFFQSxXQUFLVSxrQkFBTCxDQUF3QlIsS0FBeEIsRUFBK0JSLFFBQS9CO0FBQ0Q7OzsyQ0FFcUJRLEssRUFBTztBQUMzQixXQUFLRixTQUFMLEdBQWlCLElBQWpCOztBQUVBLFdBQUtVLGtCQUFMLENBQXdCUixLQUF4QixFQUErQlAsVUFBL0I7QUFDRDs7OzJDQUVxQk8sSyxFQUFPO0FBQzNCLFdBQUtRLGtCQUFMLENBQXdCUixLQUF4QixFQUErQk4sVUFBL0I7QUFDRDs7OzRDQUV1Qk0sSyxFQUFPO0FBQUE7O0FBQzdCLFVBQU1TLFFBQVFDLGVBQWVWLEtBQWYsQ0FBZDtBQUFBLFVBQ01FLFdBQVcsS0FBS0wsV0FBTCxDQUFrQkYsV0FBbEIsQ0FEakI7O0FBR0FPLGVBQVNHLE9BQVQsQ0FBaUIsVUFBQ0MsT0FBRDtBQUFBLGVBQWFBLFFBQVFHLEtBQVIsRUFBZSxPQUFLVixNQUFwQixDQUFiO0FBQUEsT0FBakI7O0FBRUZDLFlBQU1PLGNBQU47QUFDQzs7O3NDQUVpQkksYyxFQUFnQjtBQUNoQyxVQUFNQyxrQkFBa0IsS0FBS2YsV0FBTCxDQUFrQkwsUUFBbEIsQ0FBeEI7O0FBRUFvQixzQkFBZ0JDLElBQWhCLENBQXFCRixjQUFyQjtBQUNEOzs7d0NBRW1CRyxnQixFQUFrQjtBQUNwQyxVQUFNQyxvQkFBb0IsS0FBS2xCLFdBQUwsQ0FBa0JKLFVBQWxCLENBQTFCOztBQUVBc0Isd0JBQWtCRixJQUFsQixDQUF1QkMsZ0JBQXZCO0FBQ0Q7Ozt3Q0FFbUJFLGdCLEVBQWtCO0FBQ3BDLFVBQU1DLG9CQUFvQixLQUFLcEIsV0FBTCxDQUFrQkgsVUFBbEIsQ0FBMUI7O0FBRUF1Qix3QkFBa0JKLElBQWxCLENBQXVCRyxnQkFBdkI7QUFDRDs7O3lDQUVvQkUsaUIsRUFBbUI7QUFDdEMsVUFBTUMscUJBQXFCLEtBQUt0QixXQUFMLENBQWtCRixXQUFsQixDQUEzQjs7QUFFQXdCLHlCQUFtQk4sSUFBbkIsQ0FBd0JLLGlCQUF4QjtBQUNEOzs7Z0NBRWtCbkIsTSxFQUFRO0FBQ3pCLFVBQU1GLGNBQWMsRUFBcEI7O0FBRUFBLGtCQUFhTCxRQUFiLElBQTBCLEVBQTFCO0FBQ0FLLGtCQUFhSixVQUFiLElBQTRCLEVBQTVCO0FBQ0FJLGtCQUFhSCxVQUFiLElBQTRCLEVBQTVCO0FBQ0FHLGtCQUFhRixXQUFiLElBQTZCLEVBQTdCOztBQUVBLFVBQU1HLFlBQVksS0FBbEI7QUFBQSxVQUEwQjtBQUN6QnNCLG9CQUFjLElBQUl4QixXQUFKLENBQWdCQyxXQUFoQixFQUE2QkMsU0FBN0IsRUFBd0NDLE1BQXhDLENBRGY7QUFBQSxVQUVNc0IsbUJBQW1CdEIsT0FBT3VCLGFBQVAsRUFGekI7QUFBQSxVQUdDQyx1QkFBdUJILFlBQVlHLG9CQUFaLENBQWlDQyxJQUFqQyxDQUFzQ0osV0FBdEMsQ0FIeEI7QUFBQSxVQUlDSyx5QkFBeUJMLFlBQVlLLHNCQUFaLENBQW1DRCxJQUFuQyxDQUF3Q0osV0FBeEMsQ0FKMUI7QUFBQSxVQUtDTSx5QkFBeUJOLFlBQVlNLHNCQUFaLENBQW1DRixJQUFuQyxDQUF3Q0osV0FBeEMsQ0FMMUI7QUFBQSxVQU1DTywwQkFBMEJQLFlBQVlPLHVCQUFaLENBQW9DSCxJQUFwQyxDQUF5Q0osV0FBekMsQ0FOM0I7O0FBUUFDLHVCQUFpQk8sZ0JBQWpCLENBQWtDLFNBQWxDLEVBQTZDTCxvQkFBN0M7QUFDQUYsdUJBQWlCTyxnQkFBakIsQ0FBa0MsV0FBbEMsRUFBK0NILHNCQUEvQztBQUNBSix1QkFBaUJPLGdCQUFqQixDQUFrQyxXQUFsQyxFQUErQ0Ysc0JBQS9DO0FBQ0FMLHVCQUFpQk8sZ0JBQWpCLENBQWtDLFlBQWxDLEVBQWdERCx1QkFBaEQ7O0FBRUEsYUFBT1AsV0FBUDtBQUNEOzs7Ozs7QUFHSFMsT0FBT0MsT0FBUCxHQUFpQmxDLFdBQWpCOztBQUVBLFNBQVNjLGNBQVQsQ0FBd0JWLEtBQXhCLEVBQStCO0FBQzdCLE1BQU1TLFFBQVFzQixLQUFLQyxHQUFMLENBQVMsQ0FBQyxDQUFWLEVBQWFELEtBQUtFLEdBQUwsQ0FBUyxDQUFULEVBQVlqQyxNQUFNa0MsVUFBbEIsQ0FBYixDQUFkLENBRDZCLENBQzhCOztBQUUzRCxTQUFPekIsS0FBUDtBQUNEOztBQUVELFNBQVNMLHlCQUFULENBQW1DSixLQUFuQyxFQUEwQztBQUFBLE1BQ2hDbUMsTUFEZ0MsR0FDSG5DLEtBREcsQ0FDaENtQyxNQURnQztBQUFBLE1BQ3hCQyxPQUR3QixHQUNIcEMsS0FERyxDQUN4Qm9DLE9BRHdCO0FBQUEsTUFDZkMsT0FEZSxHQUNIckMsS0FERyxDQUNmcUMsT0FEZTtBQUFBLE1BRWxDaEIsZ0JBRmtDLEdBRWZjLE1BRmU7QUFBQSxNQUdsQ0csa0JBSGtDLEdBR2JqQixpQkFBaUJrQixxQkFBakIsRUFIYTtBQUFBLE1BSWxDQyxHQUprQyxHQUk1QkYsbUJBQW1CRSxHQUpTO0FBQUEsTUFLbENDLElBTGtDLEdBSzNCSCxtQkFBbUJHLElBTFE7QUFBQSxNQU1sQ3RDLGdCQU5rQyxHQU1mLENBRWpCaUMsVUFBVUssSUFGTyxFQUlqQkQsTUFBTUgsT0FKVyxDQU5lOzs7QUFjeEMsU0FBT2xDLGdCQUFQO0FBQ0QiLCJmaWxlIjoibW91c2VFdmVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGNvbnN0YW50cyA9IHJlcXVpcmUoJy4uL2NvbnN0YW50cycpO1xuXG5jb25zdCB7IE1PVVNFX1VQLCBNT1VTRV9ET1dOLCBNT1VTRV9NT1ZFLCBNT1VTRV9XSEVFTCB9ID0gY29uc3RhbnRzO1xuXG5jbGFzcyBNb3VzZUV2ZW50cyB7XG4gIGNvbnN0cnVjdG9yKGhhbmRsZXJzTWFwLCBtb3VzZURvd24sIGNhbnZhcykge1xuICAgIHRoaXMuaGFuZGxlcnNNYXAgPSBoYW5kbGVyc01hcDtcbiAgICB0aGlzLm1vdXNlRG93biA9IG1vdXNlRG93bjtcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgfVxuXG4gIG1vdXNlRXZlbnRMaXN0ZW5lcihldmVudCwgZXZlbnRUeXBlKSB7XG4gICAgY29uc3QgaGFuZGxlcnMgPSB0aGlzLmhhbmRsZXJzTWFwW2V2ZW50VHlwZV0sXG4gICAgICAgICAgbW91c2VDb29yZGluYXRlcyA9IG1vdXNlQ29vcmRpbmF0ZXNGcm9tRXZlbnQoZXZlbnQsIHRoaXMuY2FudmFzKTtcblxuICAgIGhhbmRsZXJzLmZvckVhY2goKGhhbmRsZXIpID0+IGhhbmRsZXIobW91c2VDb29yZGluYXRlcywgdGhpcy5tb3VzZURvd24sIHRoaXMuY2FudmFzKSk7XG5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbiAgbW91c2VVcEV2ZW50TGlzdGVuZXIoZXZlbnQpIHtcbiAgICB0aGlzLm1vdXNlRG93biA9IGZhbHNlO1xuXG4gICAgdGhpcy5tb3VzZUV2ZW50TGlzdGVuZXIoZXZlbnQsIE1PVVNFX1VQKTtcbiAgfVxuXG5cdG1vdXNlRG93bkV2ZW50TGlzdGVuZXIoZXZlbnQpIHtcbiAgICB0aGlzLm1vdXNlRG93biA9IHRydWU7XG5cbiAgICB0aGlzLm1vdXNlRXZlbnRMaXN0ZW5lcihldmVudCwgTU9VU0VfRE9XTik7XG4gIH1cblxuXHRtb3VzZU1vdmVFdmVudExpc3RlbmVyKGV2ZW50KSB7XG4gICAgdGhpcy5tb3VzZUV2ZW50TGlzdGVuZXIoZXZlbnQsIE1PVVNFX01PVkUpO1xuICB9XG5cbiAgbW91c2VXaGVlbEV2ZW50TGlzdGVuZXIoZXZlbnQpIHtcbiAgICBjb25zdCBkZWx0YSA9IGRlbHRhRnJvbUV2ZW50KGV2ZW50KSxcbiAgICAgICAgICBoYW5kbGVycyA9IHRoaXMuaGFuZGxlcnNNYXBbIE1PVVNFX1dIRUVMIF07XG5cbiAgICBoYW5kbGVycy5mb3JFYWNoKChoYW5kbGVyKSA9PiBoYW5kbGVyKGRlbHRhLCB0aGlzLmNhbnZhcykpO1xuXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIGFkZE1vdXNlVXBIYW5kbGVyKG1vdXNlVXBIYW5kbGVyKSB7XG4gICAgY29uc3QgbW91c2VVcEhhbmRsZXJzID0gdGhpcy5oYW5kbGVyc01hcFsgTU9VU0VfVVAgXTtcblxuICAgIG1vdXNlVXBIYW5kbGVycy5wdXNoKG1vdXNlVXBIYW5kbGVyKTtcbiAgfVxuXG4gIGFkZE1vdXNlRG93bkhhbmRsZXIobW91c2VEb3duSGFuZGxlcikge1xuICAgIGNvbnN0IG1vdXNlRG93bkhhbmRsZXJzID0gdGhpcy5oYW5kbGVyc01hcFsgTU9VU0VfRE9XTiBdO1xuXG4gICAgbW91c2VEb3duSGFuZGxlcnMucHVzaChtb3VzZURvd25IYW5kbGVyKTtcbiAgfVxuXG4gIGFkZE1vdXNlTW92ZUhhbmRsZXIobW91c2VNb3ZlSGFuZGxlcikge1xuICAgIGNvbnN0IG1vdXNlTW92ZUhhbmRsZXJzID0gdGhpcy5oYW5kbGVyc01hcFsgTU9VU0VfTU9WRSBdO1xuXG4gICAgbW91c2VNb3ZlSGFuZGxlcnMucHVzaChtb3VzZU1vdmVIYW5kbGVyKTtcbiAgfVxuXG4gIGFkZE1vdXNlV2hlZWxIYW5kbGVyKG1vdXNlV2hlZWxIYW5kbGVyKSB7XG4gICAgY29uc3QgbW91c2VXaGVlbEhhbmRsZXJzID0gdGhpcy5oYW5kbGVyc01hcFsgTU9VU0VfV0hFRUwgXTtcblxuICAgIG1vdXNlV2hlZWxIYW5kbGVycy5wdXNoKG1vdXNlV2hlZWxIYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZyhjYW52YXMpIHtcbiAgICBjb25zdCBoYW5kbGVyc01hcCA9IHt9O1xuXG4gICAgaGFuZGxlcnNNYXBbIE1PVVNFX1VQIF0gPSBbXTtcbiAgICBoYW5kbGVyc01hcFsgTU9VU0VfRE9XTiBdID0gW107XG4gICAgaGFuZGxlcnNNYXBbIE1PVVNFX01PVkUgXSA9IFtdO1xuICAgIGhhbmRsZXJzTWFwWyBNT1VTRV9XSEVFTCBdID0gW107XG5cbiAgICBjb25zdCBtb3VzZURvd24gPSBmYWxzZSwgIC8vL1xuXHRcdFx0XHRcdG1vdXNlRXZlbnRzID0gbmV3IE1vdXNlRXZlbnRzKGhhbmRsZXJzTWFwLCBtb3VzZURvd24sIGNhbnZhcyksXG4gICAgICAgICAgY2FudmFzRE9NRWxlbWVudCA9IGNhbnZhcy5nZXRET01FbGVtZW50KCksXG5cdFx0XHRcdFx0bW91c2VVcEV2ZW50TGlzdGVuZXIgPSBtb3VzZUV2ZW50cy5tb3VzZVVwRXZlbnRMaXN0ZW5lci5iaW5kKG1vdXNlRXZlbnRzKSxcblx0XHRcdFx0XHRtb3VzZURvd25FdmVudExpc3RlbmVyID0gbW91c2VFdmVudHMubW91c2VEb3duRXZlbnRMaXN0ZW5lci5iaW5kKG1vdXNlRXZlbnRzKSxcblx0XHRcdFx0XHRtb3VzZU1vdmVFdmVudExpc3RlbmVyID0gbW91c2VFdmVudHMubW91c2VNb3ZlRXZlbnRMaXN0ZW5lci5iaW5kKG1vdXNlRXZlbnRzKSxcblx0XHRcdFx0XHRtb3VzZVdoZWVsRXZlbnRMaXN0ZW5lciA9IG1vdXNlRXZlbnRzLm1vdXNlV2hlZWxFdmVudExpc3RlbmVyLmJpbmQobW91c2VFdmVudHMpO1xuXG4gICAgY2FudmFzRE9NRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgbW91c2VVcEV2ZW50TGlzdGVuZXIpO1xuICAgIGNhbnZhc0RPTUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgbW91c2VEb3duRXZlbnRMaXN0ZW5lcik7XG4gICAgY2FudmFzRE9NRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBtb3VzZU1vdmVFdmVudExpc3RlbmVyKTtcbiAgICBjYW52YXNET01FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNld2hlZWwnLCBtb3VzZVdoZWVsRXZlbnRMaXN0ZW5lcik7XG5cbiAgICByZXR1cm4gbW91c2VFdmVudHM7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBNb3VzZUV2ZW50cztcblxuZnVuY3Rpb24gZGVsdGFGcm9tRXZlbnQoZXZlbnQpIHtcbiAgY29uc3QgZGVsdGEgPSBNYXRoLm1heCgtMSwgTWF0aC5taW4oMSwgZXZlbnQud2hlZWxEZWx0YSkpOyAvLy9cblxuICByZXR1cm4gZGVsdGE7XG59XG5cbmZ1bmN0aW9uIG1vdXNlQ29vcmRpbmF0ZXNGcm9tRXZlbnQoZXZlbnQpIHtcbiAgY29uc3QgeyB0YXJnZXQsIGNsaWVudFgsIGNsaWVudFkgfSA9IGV2ZW50LFxuICAgICAgICBjYW52YXNET01FbGVtZW50ID0gdGFyZ2V0LCAgLy8vXG4gICAgICAgIGJvdW5kaW5nQ2xpZW50UmVjdCA9IGNhbnZhc0RPTUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICAgIHRvcCA9IGJvdW5kaW5nQ2xpZW50UmVjdC50b3AsXG4gICAgICAgIGxlZnQgPSBib3VuZGluZ0NsaWVudFJlY3QubGVmdCxcbiAgICAgICAgbW91c2VDb29yZGluYXRlcyA9IFtcblxuICAgICAgICAgIGNsaWVudFggLSBsZWZ0LFxuXG4gICAgICAgICAgdG9wIC0gY2xpZW50WSxcblxuICAgICAgICBdO1xuXG4gIHJldHVybiBtb3VzZUNvb3JkaW5hdGVzO1xufVxuIl19
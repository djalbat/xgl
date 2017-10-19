'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var constants = require('../../constants');

var MOUSE_UP = constants.MOUSE_UP,
    MOUSE_DOWN = constants.MOUSE_DOWN,
    MOUSE_MOVE = constants.MOUSE_MOVE,
    MOUSE_WHEEL = constants.MOUSE_WHEEL;

var MouseEvents = function () {
  function MouseEvents(handlersMap) {
    _classCallCheck(this, MouseEvents);

    this.handlersMap = handlersMap;
  }

  _createClass(MouseEvents, [{
    key: 'addMouseUpHandler',
    value: function addMouseUpHandler(mouseUpHandler) {
      this.addHandler(MOUSE_UP, mouseUpHandler);
    }
  }, {
    key: 'addMouseDownHandler',
    value: function addMouseDownHandler(mouseDownHandler) {
      this.addHandler(MOUSE_DOWN, mouseDownHandler);
    }
  }, {
    key: 'addMouseMoveHandler',
    value: function addMouseMoveHandler(mouseMoveHandler) {
      this.addHandler(MOUSE_MOVE, mouseMoveHandler);
    }
  }, {
    key: 'addMouseWheelHandler',
    value: function addMouseWheelHandler(mouseWheelHandler) {
      this.addHandler(MOUSE_WHEEL, mouseWheelHandler);
    }
  }, {
    key: 'addHandler',
    value: function addHandler(eventType, handler) {
      var handlers = this.handlersMap[eventType];

      handlers.push(handler);
    }
  }, {
    key: 'onMouseEvent',
    value: function onMouseEvent(eventType, event) {
      var handlers = this.handlersMap[eventType],
          mouseCoordinates = mouseCoordinatesFromEvent(event, this.canvas);

      handlers.forEach(function (handler) {
        handler(mouseCoordinates);
      });
    }
  }, {
    key: 'onMouseWheelEvent',
    value: function onMouseWheelEvent(event) {
      var handlers = this.handlersMap[MOUSE_WHEEL],
          delta = deltaFromEvent(event);

      handlers.forEach(function (handler) {
        handler(delta);
      });
    }
  }], [{
    key: 'fromNothing',
    value: function fromNothing(canvas) {
      var handlersMap = {
        MOUSE_UP: [],
        MOUSE_DOWN: [],
        MOUSE_MOVE: [],
        MOUSE_WHEEL: []
      },
          mouseEvents = new MouseEvents(handlersMap),
          domElement = canvas.getDOMElement();

      addMouseEventHandler(domElement, 'mouseup', function (event) {
        mouseEvents.onMouseEvent(MOUSE_UP, event);
      });
      addMouseEventHandler(domElement, 'mousedown', function (event) {
        mouseEvents.onMouseEvent(MOUSE_DOWN, event);
      });
      addMouseEventHandler(domElement, 'mousemove', function (event) {
        mouseEvents.onMouseEvent(MOUSE_MOVE, event);
      });
      addMouseEventHandler(domElement, 'mousewheel', function (event) {
        mouseEvents.onMouseWheelEvent(event);
      });

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
  var domElement = event.target,
      ///
  domElementBoundingClientRect = domElement.getBoundingClientRect(),
      mouseCoordinates = [+(event.clientX - domElementBoundingClientRect.left), -(event.clientY - domElementBoundingClientRect.top)];

  return mouseCoordinates;
}

function addMouseEventHandler(domElement, type, handler) {
  domElement.addEventListener(type, function (event) {
    handler(event);

    event.preventDefault();
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9lbGVtZW50L2NhbWVyYS9tb3VzZUV2ZW50cy5qcyJdLCJuYW1lcyI6WyJjb25zdGFudHMiLCJyZXF1aXJlIiwiTU9VU0VfVVAiLCJNT1VTRV9ET1dOIiwiTU9VU0VfTU9WRSIsIk1PVVNFX1dIRUVMIiwiTW91c2VFdmVudHMiLCJoYW5kbGVyc01hcCIsIm1vdXNlVXBIYW5kbGVyIiwiYWRkSGFuZGxlciIsIm1vdXNlRG93bkhhbmRsZXIiLCJtb3VzZU1vdmVIYW5kbGVyIiwibW91c2VXaGVlbEhhbmRsZXIiLCJldmVudFR5cGUiLCJoYW5kbGVyIiwiaGFuZGxlcnMiLCJwdXNoIiwiZXZlbnQiLCJtb3VzZUNvb3JkaW5hdGVzIiwibW91c2VDb29yZGluYXRlc0Zyb21FdmVudCIsImNhbnZhcyIsImZvckVhY2giLCJkZWx0YSIsImRlbHRhRnJvbUV2ZW50IiwibW91c2VFdmVudHMiLCJkb21FbGVtZW50IiwiZ2V0RE9NRWxlbWVudCIsImFkZE1vdXNlRXZlbnRIYW5kbGVyIiwib25Nb3VzZUV2ZW50Iiwib25Nb3VzZVdoZWVsRXZlbnQiLCJtb2R1bGUiLCJleHBvcnRzIiwiTWF0aCIsIm1heCIsIm1pbiIsIndoZWVsRGVsdGEiLCJ0YXJnZXQiLCJkb21FbGVtZW50Qm91bmRpbmdDbGllbnRSZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiY2xpZW50WCIsImxlZnQiLCJjbGllbnRZIiwidG9wIiwidHlwZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJwcmV2ZW50RGVmYXVsdCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFlBQVlDLFFBQVEsaUJBQVIsQ0FBbEI7O0lBRVFDLFEsR0FBa0RGLFMsQ0FBbERFLFE7SUFBVUMsVSxHQUF3Q0gsUyxDQUF4Q0csVTtJQUFZQyxVLEdBQTRCSixTLENBQTVCSSxVO0lBQVlDLFcsR0FBZ0JMLFMsQ0FBaEJLLFc7O0lBRXBDQyxXO0FBQ0osdUJBQVlDLFdBQVosRUFBeUI7QUFBQTs7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LEdBQWdCRiw2QkFBNkJHLElBQS9DLENBRGlCLEVBRWpCLEVBQUV2QixNQUFNd0IsT0FBTixHQUFnQkosNkJBQTZCSyxHQUEvQyxDQUZpQixDQUZ6Qjs7QUFPQSxTQUFPeEIsZ0JBQVA7QUFDRDs7QUFFRCxTQUFTUyxvQkFBVCxDQUE4QkYsVUFBOUIsRUFBMENrQixJQUExQyxFQUFnRDdCLE9BQWhELEVBQXlEO0FBQ3ZEVyxhQUFXbUIsZ0JBQVgsQ0FBNEJELElBQTVCLEVBQWtDLFVBQVMxQixLQUFULEVBQWdCO0FBQ2hESCxZQUFRRyxLQUFSOztBQUVBQSxVQUFNNEIsY0FBTjtBQUNELEdBSkQ7QUFLRCIsImZpbGUiOiJtb3VzZUV2ZW50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgY29uc3RhbnRzID0gcmVxdWlyZSgnLi4vLi4vY29uc3RhbnRzJyk7XG5cbmNvbnN0IHsgTU9VU0VfVVAsIE1PVVNFX0RPV04sIE1PVVNFX01PVkUsIE1PVVNFX1dIRUVMIH0gPSBjb25zdGFudHM7XG5cbmNsYXNzIE1vdXNlRXZlbnRzIHtcbiAgY29uc3RydWN0b3IoaGFuZGxlcnNNYXApIHtcbiAgICB0aGlzLmhhbmRsZXJzTWFwID0gaGFuZGxlcnNNYXA7XG4gIH1cblxuICBhZGRNb3VzZVVwSGFuZGxlcihtb3VzZVVwSGFuZGxlcikge1xuICAgIHRoaXMuYWRkSGFuZGxlcihNT1VTRV9VUCwgbW91c2VVcEhhbmRsZXIpO1xuICB9XG5cbiAgYWRkTW91c2VEb3duSGFuZGxlcihtb3VzZURvd25IYW5kbGVyKSB7XG4gICAgdGhpcy5hZGRIYW5kbGVyKE1PVVNFX0RPV04sIG1vdXNlRG93bkhhbmRsZXIpO1xuICB9XG5cbiAgYWRkTW91c2VNb3ZlSGFuZGxlcihtb3VzZU1vdmVIYW5kbGVyKSB7XG4gICAgdGhpcy5hZGRIYW5kbGVyKE1PVVNFX01PVkUsIG1vdXNlTW92ZUhhbmRsZXIpO1xuICB9XG5cbiAgYWRkTW91c2VXaGVlbEhhbmRsZXIobW91c2VXaGVlbEhhbmRsZXIpIHtcbiAgICB0aGlzLmFkZEhhbmRsZXIoTU9VU0VfV0hFRUwsIG1vdXNlV2hlZWxIYW5kbGVyKTtcbiAgfVxuXG4gIGFkZEhhbmRsZXIoZXZlbnRUeXBlLCBoYW5kbGVyKSB7XG4gICAgY29uc3QgaGFuZGxlcnMgPSB0aGlzLmhhbmRsZXJzTWFwW2V2ZW50VHlwZV07XG5cbiAgICBoYW5kbGVycy5wdXNoKGhhbmRsZXIpO1xuICB9XG5cbiAgb25Nb3VzZUV2ZW50KGV2ZW50VHlwZSwgZXZlbnQpIHtcbiAgICBjb25zdCBoYW5kbGVycyA9IHRoaXMuaGFuZGxlcnNNYXBbZXZlbnRUeXBlXSxcbiAgICAgICAgICBtb3VzZUNvb3JkaW5hdGVzID0gbW91c2VDb29yZGluYXRlc0Zyb21FdmVudChldmVudCwgdGhpcy5jYW52YXMpO1xuXG4gICAgaGFuZGxlcnMuZm9yRWFjaChmdW5jdGlvbihoYW5kbGVyKSB7XG4gICAgICBoYW5kbGVyKG1vdXNlQ29vcmRpbmF0ZXMpO1xuICAgIH0pO1xuICB9XG5cbiAgb25Nb3VzZVdoZWVsRXZlbnQoZXZlbnQpIHtcbiAgICBjb25zdCBoYW5kbGVycyA9IHRoaXMuaGFuZGxlcnNNYXBbTU9VU0VfV0hFRUxdLFxuICAgICAgICAgIGRlbHRhID0gZGVsdGFGcm9tRXZlbnQoZXZlbnQpO1xuXG4gICAgaGFuZGxlcnMuZm9yRWFjaChmdW5jdGlvbihoYW5kbGVyKSB7XG4gICAgICBoYW5kbGVyKGRlbHRhKTtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZyhjYW52YXMpIHtcbiAgICBjb25zdCBoYW5kbGVyc01hcCA9IHtcbiAgICAgICAgICAgIE1PVVNFX1VQOiBbXSxcbiAgICAgICAgICAgIE1PVVNFX0RPV046IFtdLFxuICAgICAgICAgICAgTU9VU0VfTU9WRTogW10sXG4gICAgICAgICAgICBNT1VTRV9XSEVFTDogW11cbiAgICAgICAgICB9LFxuICAgICAgICAgIG1vdXNlRXZlbnRzID0gbmV3IE1vdXNlRXZlbnRzKGhhbmRsZXJzTWFwKSxcbiAgICAgICAgICBkb21FbGVtZW50ID0gY2FudmFzLmdldERPTUVsZW1lbnQoKTtcblxuICAgIGFkZE1vdXNlRXZlbnRIYW5kbGVyKGRvbUVsZW1lbnQsICdtb3VzZXVwJywgZnVuY3Rpb24oZXZlbnQpIHsgbW91c2VFdmVudHMub25Nb3VzZUV2ZW50KE1PVVNFX1VQLCBldmVudCk7IH0pO1xuICAgIGFkZE1vdXNlRXZlbnRIYW5kbGVyKGRvbUVsZW1lbnQsICdtb3VzZWRvd24nLCBmdW5jdGlvbihldmVudCkgeyBtb3VzZUV2ZW50cy5vbk1vdXNlRXZlbnQoTU9VU0VfRE9XTiwgZXZlbnQpOyB9KTtcbiAgICBhZGRNb3VzZUV2ZW50SGFuZGxlcihkb21FbGVtZW50LCAnbW91c2Vtb3ZlJywgZnVuY3Rpb24oZXZlbnQpIHsgbW91c2VFdmVudHMub25Nb3VzZUV2ZW50KE1PVVNFX01PVkUsIGV2ZW50KTsgfSk7XG4gICAgYWRkTW91c2VFdmVudEhhbmRsZXIoZG9tRWxlbWVudCwgJ21vdXNld2hlZWwnLCBmdW5jdGlvbihldmVudCkgeyBtb3VzZUV2ZW50cy5vbk1vdXNlV2hlZWxFdmVudChldmVudCk7IH0pO1xuXG4gICAgcmV0dXJuIG1vdXNlRXZlbnRzO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTW91c2VFdmVudHM7XG5cbmZ1bmN0aW9uIGRlbHRhRnJvbUV2ZW50KGV2ZW50KSB7XG4gIGNvbnN0IGRlbHRhID0gTWF0aC5tYXgoLTEsIE1hdGgubWluKDEsIGV2ZW50LndoZWVsRGVsdGEpKTsgLy8vXG5cbiAgcmV0dXJuIGRlbHRhO1xufVxuXG5mdW5jdGlvbiBtb3VzZUNvb3JkaW5hdGVzRnJvbUV2ZW50KGV2ZW50KSB7XG4gIGNvbnN0IGRvbUVsZW1lbnQgPSBldmVudC50YXJnZXQsICAvLy9cbiAgICAgICAgZG9tRWxlbWVudEJvdW5kaW5nQ2xpZW50UmVjdCA9IGRvbUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICAgIG1vdXNlQ29vcmRpbmF0ZXMgPSBbXG4gICAgICAgICAgKyhldmVudC5jbGllbnRYIC0gZG9tRWxlbWVudEJvdW5kaW5nQ2xpZW50UmVjdC5sZWZ0KSxcbiAgICAgICAgICAtKGV2ZW50LmNsaWVudFkgLSBkb21FbGVtZW50Qm91bmRpbmdDbGllbnRSZWN0LnRvcClcbiAgICAgICAgXTtcblxuICByZXR1cm4gbW91c2VDb29yZGluYXRlcztcbn1cblxuZnVuY3Rpb24gYWRkTW91c2VFdmVudEhhbmRsZXIoZG9tRWxlbWVudCwgdHlwZSwgaGFuZGxlcikge1xuICBkb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBoYW5kbGVyKGV2ZW50KTtcblxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH0pO1xufVxuIl19
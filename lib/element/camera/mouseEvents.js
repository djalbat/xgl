'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var constants = require('../../constants');

var MOUSE_UP = constants.MOUSE_UP,
    MOUSE_DOWN = constants.MOUSE_DOWN,
    MOUSE_MOVE = constants.MOUSE_MOVE,
    MOUSE_WHEEL = constants.MOUSE_WHEEL;

var MouseEvents = function () {
  function MouseEvents(handlersMap, canvas) {
    _classCallCheck(this, MouseEvents);

    this.handlersMap = handlersMap;
    this.canvas = canvas;
  }

  _createClass(MouseEvents, [{
    key: 'getHandlersMap',
    value: function getHandlersMap() {
      return this.handlersMap;
    }
  }, {
    key: 'getCanvas',
    value: function getCanvas() {
      return this.canvas;
    }
  }, {
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
      var MOUSE_UP = [],
          MOUSE_DOWN = [],
          MOUSE_MOVE = [],
          MOUSE_WHEEL = [],
          handlersMap = {
        MOUSE_UP: MOUSE_UP,
        MOUSE_DOWN: MOUSE_DOWN,
        MOUSE_MOVE: MOUSE_MOVE,
        MOUSE_WHEEL: MOUSE_WHEEL
      },
          mouseEvents = new MouseEvents(handlersMap, canvas),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9lbGVtZW50L2NhbWVyYS9tb3VzZUV2ZW50cy5qcyJdLCJuYW1lcyI6WyJjb25zdGFudHMiLCJyZXF1aXJlIiwiTU9VU0VfVVAiLCJNT1VTRV9ET1dOIiwiTU9VU0VfTU9WRSIsIk1PVVNFX1dIRUVMIiwiTW91c2VFdmVudHMiLCJoYW5kbGVyc01hcCIsImNhbnZhcyIsIm1vdXNlVXBIYW5kbGVyIiwiYWRkSGFuZGxlciIsIm1vdXNlRG93bkhhbmRsZXIiLCJtb3VzZU1vdmVIYW5kbGVyIiwibW91c2VXaGVlbEhhbmRsZXIiLCJldmVudFR5cGUiLCJoYW5kbGVyIiwiaGFuZGxlcnMiLCJwdXNoIiwiZXZlbnQiLCJtb3VzZUNvb3JkaW5hdGVzIiwibW91c2VDb29yZGluYXRlc0Zyb21FdmVudCIsImZvckVhY2giLCJkZWx0YSIsImRlbHRhRnJvbUV2ZW50IiwibW91c2VFdmVudHMiLCJkb21FbGVtZW50IiwiZ2V0RE9NRWxlbWVudCIsImFkZE1vdXNlRXZlbnRIYW5kbGVyIiwib25Nb3VzZUV2ZW50Iiwib25Nb3VzZVdoZWVsRXZlbnQiLCJtb2R1bGUiLCJleHBvcnRzIiwiTWF0aCIsIm1heCIsIm1pbiIsIndoZWVsRGVsdGEiLCJ0YXJnZXQiLCJkb21FbGVtZW50Qm91bmRpbmdDbGllbnRSZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiY2xpZW50WCIsImxlZnQiLCJjbGllbnRZIiwidG9wIiwidHlwZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJwcmV2ZW50RGVmYXVsdCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFlBQVlDLFFBQVEsaUJBQVIsQ0FBbEI7O0lBRVFDLFEsR0FBa0RGLFMsQ0FBbERFLFE7SUFBVUMsVSxHQUF3Q0gsUyxDQUF4Q0csVTtJQUFZQyxVLEdBQTRCSixTLENBQTVCSSxVO0lBQVlDLFcsR0FBZ0JMLFMsQ0FBaEJLLFc7O0lBRXBDQyxXO0FBQ0osdUJBQVlDLFdBQVosRUFBeUJDLE1BQXpC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QWQsQ0FENkIsQ0FDOEI7O0FBRTNELFNBQU9iLEtBQVA7QUFDRDs7QUFFRCxTQUFTRix5QkFBVCxDQUFtQ0YsS0FBbkMsRUFBMEM7QUFDeEMsTUFBTU8sYUFBYVAsTUFBTWtCLE1BQXpCO0FBQUEsTUFBa0M7QUFDNUJDLGlDQUErQlosV0FBV2EscUJBQVgsRUFEckM7QUFBQSxNQUVNbkIsbUJBQW1CLENBQ2pCLEVBQUVELE1BQU1xQixPQUFOLEdBQWdCRiw2QkFBNkJHLElBQS9DLENBRGlCLEVBRWpCLEVBQUV0QixNQUFNdUIsT0FBTixHQUFnQkosNkJBQTZCSyxHQUEvQyxDQUZpQixDQUZ6Qjs7QUFPQSxTQUFPdkIsZ0JBQVA7QUFDRDs7QUFFRCxTQUFTUSxvQkFBVCxDQUE4QkYsVUFBOUIsRUFBMENrQixJQUExQyxFQUFnRDVCLE9BQWhELEVBQXlEO0FBQ3ZEVSxhQUFXbUIsZ0JBQVgsQ0FBNEJELElBQTVCLEVBQWtDLFVBQVN6QixLQUFULEVBQWdCO0FBQ2hESCxZQUFRRyxLQUFSOztBQUVBQSxVQUFNMkIsY0FBTjtBQUNELEdBSkQ7QUFLRCIsImZpbGUiOiJtb3VzZUV2ZW50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgY29uc3RhbnRzID0gcmVxdWlyZSgnLi4vLi4vY29uc3RhbnRzJyk7XG5cbmNvbnN0IHsgTU9VU0VfVVAsIE1PVVNFX0RPV04sIE1PVVNFX01PVkUsIE1PVVNFX1dIRUVMIH0gPSBjb25zdGFudHM7XG5cbmNsYXNzIE1vdXNlRXZlbnRzIHtcbiAgY29uc3RydWN0b3IoaGFuZGxlcnNNYXAsIGNhbnZhcykge1xuICAgIHRoaXMuaGFuZGxlcnNNYXAgPSBoYW5kbGVyc01hcDtcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgfVxuXG4gIGdldEhhbmRsZXJzTWFwKCkge1xuICAgIHJldHVybiB0aGlzLmhhbmRsZXJzTWFwO1xuICB9XG5cbiAgZ2V0Q2FudmFzKCkge1xuICAgIHJldHVybiB0aGlzLmNhbnZhcztcbiAgfVxuXG4gIGFkZE1vdXNlVXBIYW5kbGVyKG1vdXNlVXBIYW5kbGVyKSB7XG4gICAgdGhpcy5hZGRIYW5kbGVyKE1PVVNFX1VQLCBtb3VzZVVwSGFuZGxlcik7XG4gIH1cblxuICBhZGRNb3VzZURvd25IYW5kbGVyKG1vdXNlRG93bkhhbmRsZXIpIHtcbiAgICB0aGlzLmFkZEhhbmRsZXIoTU9VU0VfRE9XTiwgbW91c2VEb3duSGFuZGxlcik7XG4gIH1cblxuICBhZGRNb3VzZU1vdmVIYW5kbGVyKG1vdXNlTW92ZUhhbmRsZXIpIHtcbiAgICB0aGlzLmFkZEhhbmRsZXIoTU9VU0VfTU9WRSwgbW91c2VNb3ZlSGFuZGxlcik7XG4gIH1cblxuICBhZGRNb3VzZVdoZWVsSGFuZGxlcihtb3VzZVdoZWVsSGFuZGxlcikge1xuICAgIHRoaXMuYWRkSGFuZGxlcihNT1VTRV9XSEVFTCwgbW91c2VXaGVlbEhhbmRsZXIpO1xuICB9XG5cbiAgYWRkSGFuZGxlcihldmVudFR5cGUsIGhhbmRsZXIpIHtcbiAgICBjb25zdCBoYW5kbGVycyA9IHRoaXMuaGFuZGxlcnNNYXBbZXZlbnRUeXBlXTtcblxuICAgIGhhbmRsZXJzLnB1c2goaGFuZGxlcik7XG4gIH1cblxuICBvbk1vdXNlRXZlbnQoZXZlbnRUeXBlLCBldmVudCkge1xuICAgIGNvbnN0IGhhbmRsZXJzID0gdGhpcy5oYW5kbGVyc01hcFtldmVudFR5cGVdLFxuICAgICAgICAgIG1vdXNlQ29vcmRpbmF0ZXMgPSBtb3VzZUNvb3JkaW5hdGVzRnJvbUV2ZW50KGV2ZW50LCB0aGlzLmNhbnZhcyk7XG5cbiAgICBoYW5kbGVycy5mb3JFYWNoKGZ1bmN0aW9uKGhhbmRsZXIpIHtcbiAgICAgIGhhbmRsZXIobW91c2VDb29yZGluYXRlcyk7XG4gICAgfSk7XG4gIH1cblxuICBvbk1vdXNlV2hlZWxFdmVudChldmVudCkge1xuICAgIGNvbnN0IGhhbmRsZXJzID0gdGhpcy5oYW5kbGVyc01hcFtNT1VTRV9XSEVFTF0sXG4gICAgICAgICAgZGVsdGEgPSBkZWx0YUZyb21FdmVudChldmVudCk7XG5cbiAgICBoYW5kbGVycy5mb3JFYWNoKGZ1bmN0aW9uKGhhbmRsZXIpIHtcbiAgICAgIGhhbmRsZXIoZGVsdGEpO1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKGNhbnZhcykge1xuICAgIGNvbnN0IE1PVVNFX1VQID0gW10sXG5cdFx0XHQgICAgTU9VU0VfRE9XTiA9IFtdLFxuXHRcdFx0ICAgIE1PVVNFX01PVkUgPSBbXSxcblx0XHRcdCAgICBNT1VTRV9XSEVFTCA9IFtdLFxuXHRcdFx0ICAgIGhhbmRsZXJzTWFwID0ge1xuICAgICAgICAgICAgTU9VU0VfVVAsXG4gICAgICAgICAgICBNT1VTRV9ET1dOLFxuICAgICAgICAgICAgTU9VU0VfTU9WRSxcbiAgICAgICAgICAgIE1PVVNFX1dIRUVMXG4gICAgICAgICAgfSxcbiAgICAgICAgICBtb3VzZUV2ZW50cyA9IG5ldyBNb3VzZUV2ZW50cyhoYW5kbGVyc01hcCwgY2FudmFzKSxcbiAgICAgICAgICBkb21FbGVtZW50ID0gY2FudmFzLmdldERPTUVsZW1lbnQoKTtcblxuICAgIGFkZE1vdXNlRXZlbnRIYW5kbGVyKGRvbUVsZW1lbnQsICdtb3VzZXVwJywgZnVuY3Rpb24oZXZlbnQpIHsgbW91c2VFdmVudHMub25Nb3VzZUV2ZW50KE1PVVNFX1VQLCBldmVudCk7IH0pO1xuICAgIGFkZE1vdXNlRXZlbnRIYW5kbGVyKGRvbUVsZW1lbnQsICdtb3VzZWRvd24nLCBmdW5jdGlvbihldmVudCkgeyBtb3VzZUV2ZW50cy5vbk1vdXNlRXZlbnQoTU9VU0VfRE9XTiwgZXZlbnQpOyB9KTtcbiAgICBhZGRNb3VzZUV2ZW50SGFuZGxlcihkb21FbGVtZW50LCAnbW91c2Vtb3ZlJywgZnVuY3Rpb24oZXZlbnQpIHsgbW91c2VFdmVudHMub25Nb3VzZUV2ZW50KE1PVVNFX01PVkUsIGV2ZW50KTsgfSk7XG4gICAgYWRkTW91c2VFdmVudEhhbmRsZXIoZG9tRWxlbWVudCwgJ21vdXNld2hlZWwnLCBmdW5jdGlvbihldmVudCkgeyBtb3VzZUV2ZW50cy5vbk1vdXNlV2hlZWxFdmVudChldmVudCk7IH0pO1xuXG4gICAgcmV0dXJuIG1vdXNlRXZlbnRzO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTW91c2VFdmVudHM7XG5cbmZ1bmN0aW9uIGRlbHRhRnJvbUV2ZW50KGV2ZW50KSB7XG4gIGNvbnN0IGRlbHRhID0gTWF0aC5tYXgoLTEsIE1hdGgubWluKDEsIGV2ZW50LndoZWVsRGVsdGEpKTsgLy8vXG5cbiAgcmV0dXJuIGRlbHRhO1xufVxuXG5mdW5jdGlvbiBtb3VzZUNvb3JkaW5hdGVzRnJvbUV2ZW50KGV2ZW50KSB7XG4gIGNvbnN0IGRvbUVsZW1lbnQgPSBldmVudC50YXJnZXQsICAvLy9cbiAgICAgICAgZG9tRWxlbWVudEJvdW5kaW5nQ2xpZW50UmVjdCA9IGRvbUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICAgIG1vdXNlQ29vcmRpbmF0ZXMgPSBbXG4gICAgICAgICAgKyhldmVudC5jbGllbnRYIC0gZG9tRWxlbWVudEJvdW5kaW5nQ2xpZW50UmVjdC5sZWZ0KSxcbiAgICAgICAgICAtKGV2ZW50LmNsaWVudFkgLSBkb21FbGVtZW50Qm91bmRpbmdDbGllbnRSZWN0LnRvcClcbiAgICAgICAgXTtcblxuICByZXR1cm4gbW91c2VDb29yZGluYXRlcztcbn1cblxuZnVuY3Rpb24gYWRkTW91c2VFdmVudEhhbmRsZXIoZG9tRWxlbWVudCwgdHlwZSwgaGFuZGxlcikge1xuICBkb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBoYW5kbGVyKGV2ZW50KTtcblxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH0pO1xufVxuIl19
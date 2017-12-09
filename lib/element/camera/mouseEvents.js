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
      var handlersMap = {
        MOUSE_UP: [],
        MOUSE_DOWN: [],
        MOUSE_MOVE: [],
        MOUSE_WHEEL: []
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9lbGVtZW50L2NhbWVyYS9tb3VzZUV2ZW50cy5qcyJdLCJuYW1lcyI6WyJjb25zdGFudHMiLCJyZXF1aXJlIiwiTU9VU0VfVVAiLCJNT1VTRV9ET1dOIiwiTU9VU0VfTU9WRSIsIk1PVVNFX1dIRUVMIiwiTW91c2VFdmVudHMiLCJoYW5kbGVyc01hcCIsImNhbnZhcyIsIm1vdXNlVXBIYW5kbGVyIiwiYWRkSGFuZGxlciIsIm1vdXNlRG93bkhhbmRsZXIiLCJtb3VzZU1vdmVIYW5kbGVyIiwibW91c2VXaGVlbEhhbmRsZXIiLCJldmVudFR5cGUiLCJoYW5kbGVyIiwiaGFuZGxlcnMiLCJwdXNoIiwiZXZlbnQiLCJtb3VzZUNvb3JkaW5hdGVzIiwibW91c2VDb29yZGluYXRlc0Zyb21FdmVudCIsImZvckVhY2giLCJkZWx0YSIsImRlbHRhRnJvbUV2ZW50IiwibW91c2VFdmVudHMiLCJkb21FbGVtZW50IiwiZ2V0RE9NRWxlbWVudCIsImFkZE1vdXNlRXZlbnRIYW5kbGVyIiwib25Nb3VzZUV2ZW50Iiwib25Nb3VzZVdoZWVsRXZlbnQiLCJtb2R1bGUiLCJleHBvcnRzIiwiTWF0aCIsIm1heCIsIm1pbiIsIndoZWVsRGVsdGEiLCJ0YXJnZXQiLCJkb21FbGVtZW50Qm91bmRpbmdDbGllbnRSZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiY2xpZW50WCIsImxlZnQiLCJjbGllbnRZIiwidG9wIiwidHlwZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJwcmV2ZW50RGVmYXVsdCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFlBQVlDLFFBQVEsaUJBQVIsQ0FBbEI7O0lBRVFDLFEsR0FBa0RGLFMsQ0FBbERFLFE7SUFBVUMsVSxHQUF3Q0gsUyxDQUF4Q0csVTtJQUFZQyxVLEdBQTRCSixTLENBQTVCSSxVO0lBQVlDLFcsR0FBZ0JMLFMsQ0FBaEJLLFc7O0lBRXBDQyxXO0FBQ0osdUJBQVlDLFdBQVosRUFBeUJDLE1BQXpC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QyxFQUEwQztBQUN4QyxNQUFNTyxhQUFhUCxNQUFNa0IsTUFBekI7QUFBQSxNQUFrQztBQUM1QkMsaUNBQStCWixXQUFXYSxxQkFBWCxFQURyQztBQUFBLE1BRU1uQixtQkFBbUIsQ0FDakIsRUFBRUQsTUFBTXFCLE9BQU4sR0FBZ0JGLDZCQUE2QkcsSUFBL0MsQ0FEaUIsRUFFakIsRUFBRXRCLE1BQU11QixPQUFOLEdBQWdCSiw2QkFBNkJLLEdBQS9DLENBRmlCLENBRnpCOztBQU9BLFNBQU92QixnQkFBUDtBQUNEOztBQUVELFNBQVNRLG9CQUFULENBQThCRixVQUE5QixFQUEwQ2tCLElBQTFDLEVBQWdENUIsT0FBaEQsRUFBeUQ7QUFDdkRVLGFBQVdtQixnQkFBWCxDQUE0QkQsSUFBNUIsRUFBa0MsVUFBU3pCLEtBQVQsRUFBZ0I7QUFDaERILFlBQVFHLEtBQVI7O0FBRUFBLFVBQU0yQixjQUFOO0FBQ0QsR0FKRDtBQUtEIiwiZmlsZSI6Im1vdXNlRXZlbnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBjb25zdGFudHMgPSByZXF1aXJlKCcuLi8uLi9jb25zdGFudHMnKTtcblxuY29uc3QgeyBNT1VTRV9VUCwgTU9VU0VfRE9XTiwgTU9VU0VfTU9WRSwgTU9VU0VfV0hFRUwgfSA9IGNvbnN0YW50cztcblxuY2xhc3MgTW91c2VFdmVudHMge1xuICBjb25zdHJ1Y3RvcihoYW5kbGVyc01hcCwgY2FudmFzKSB7XG4gICAgdGhpcy5oYW5kbGVyc01hcCA9IGhhbmRsZXJzTWFwO1xuICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICB9XG5cbiAgZ2V0SGFuZGxlcnNNYXAoKSB7XG4gICAgcmV0dXJuIHRoaXMuaGFuZGxlcnNNYXA7XG4gIH1cblxuICBnZXRDYW52YXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2FudmFzO1xuICB9XG5cbiAgYWRkTW91c2VVcEhhbmRsZXIobW91c2VVcEhhbmRsZXIpIHtcbiAgICB0aGlzLmFkZEhhbmRsZXIoTU9VU0VfVVAsIG1vdXNlVXBIYW5kbGVyKTtcbiAgfVxuXG4gIGFkZE1vdXNlRG93bkhhbmRsZXIobW91c2VEb3duSGFuZGxlcikge1xuICAgIHRoaXMuYWRkSGFuZGxlcihNT1VTRV9ET1dOLCBtb3VzZURvd25IYW5kbGVyKTtcbiAgfVxuXG4gIGFkZE1vdXNlTW92ZUhhbmRsZXIobW91c2VNb3ZlSGFuZGxlcikge1xuICAgIHRoaXMuYWRkSGFuZGxlcihNT1VTRV9NT1ZFLCBtb3VzZU1vdmVIYW5kbGVyKTtcbiAgfVxuXG4gIGFkZE1vdXNlV2hlZWxIYW5kbGVyKG1vdXNlV2hlZWxIYW5kbGVyKSB7XG4gICAgdGhpcy5hZGRIYW5kbGVyKE1PVVNFX1dIRUVMLCBtb3VzZVdoZWVsSGFuZGxlcik7XG4gIH1cblxuICBhZGRIYW5kbGVyKGV2ZW50VHlwZSwgaGFuZGxlcikge1xuICAgIGNvbnN0IGhhbmRsZXJzID0gdGhpcy5oYW5kbGVyc01hcFtldmVudFR5cGVdO1xuXG4gICAgaGFuZGxlcnMucHVzaChoYW5kbGVyKTtcbiAgfVxuXG4gIG9uTW91c2VFdmVudChldmVudFR5cGUsIGV2ZW50KSB7XG4gICAgY29uc3QgaGFuZGxlcnMgPSB0aGlzLmhhbmRsZXJzTWFwW2V2ZW50VHlwZV0sXG4gICAgICAgICAgbW91c2VDb29yZGluYXRlcyA9IG1vdXNlQ29vcmRpbmF0ZXNGcm9tRXZlbnQoZXZlbnQsIHRoaXMuY2FudmFzKTtcblxuICAgIGhhbmRsZXJzLmZvckVhY2goZnVuY3Rpb24oaGFuZGxlcikge1xuICAgICAgaGFuZGxlcihtb3VzZUNvb3JkaW5hdGVzKTtcbiAgICB9KTtcbiAgfVxuXG4gIG9uTW91c2VXaGVlbEV2ZW50KGV2ZW50KSB7XG4gICAgY29uc3QgaGFuZGxlcnMgPSB0aGlzLmhhbmRsZXJzTWFwW01PVVNFX1dIRUVMXSxcbiAgICAgICAgICBkZWx0YSA9IGRlbHRhRnJvbUV2ZW50KGV2ZW50KTtcblxuICAgIGhhbmRsZXJzLmZvckVhY2goZnVuY3Rpb24oaGFuZGxlcikge1xuICAgICAgaGFuZGxlcihkZWx0YSk7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoY2FudmFzKSB7XG4gICAgY29uc3QgaGFuZGxlcnNNYXAgPSB7XG4gICAgICAgICAgICBNT1VTRV9VUDogW10sXG4gICAgICAgICAgICBNT1VTRV9ET1dOOiBbXSxcbiAgICAgICAgICAgIE1PVVNFX01PVkU6IFtdLFxuICAgICAgICAgICAgTU9VU0VfV0hFRUw6IFtdXG4gICAgICAgICAgfSxcbiAgICAgICAgICBtb3VzZUV2ZW50cyA9IG5ldyBNb3VzZUV2ZW50cyhoYW5kbGVyc01hcCwgY2FudmFzKSxcbiAgICAgICAgICBkb21FbGVtZW50ID0gY2FudmFzLmdldERPTUVsZW1lbnQoKTtcblxuICAgIGFkZE1vdXNlRXZlbnRIYW5kbGVyKGRvbUVsZW1lbnQsICdtb3VzZXVwJywgZnVuY3Rpb24oZXZlbnQpIHsgbW91c2VFdmVudHMub25Nb3VzZUV2ZW50KE1PVVNFX1VQLCBldmVudCk7IH0pO1xuICAgIGFkZE1vdXNlRXZlbnRIYW5kbGVyKGRvbUVsZW1lbnQsICdtb3VzZWRvd24nLCBmdW5jdGlvbihldmVudCkgeyBtb3VzZUV2ZW50cy5vbk1vdXNlRXZlbnQoTU9VU0VfRE9XTiwgZXZlbnQpOyB9KTtcbiAgICBhZGRNb3VzZUV2ZW50SGFuZGxlcihkb21FbGVtZW50LCAnbW91c2Vtb3ZlJywgZnVuY3Rpb24oZXZlbnQpIHsgbW91c2VFdmVudHMub25Nb3VzZUV2ZW50KE1PVVNFX01PVkUsIGV2ZW50KTsgfSk7XG4gICAgYWRkTW91c2VFdmVudEhhbmRsZXIoZG9tRWxlbWVudCwgJ21vdXNld2hlZWwnLCBmdW5jdGlvbihldmVudCkgeyBtb3VzZUV2ZW50cy5vbk1vdXNlV2hlZWxFdmVudChldmVudCk7IH0pO1xuXG4gICAgcmV0dXJuIG1vdXNlRXZlbnRzO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTW91c2VFdmVudHM7XG5cbmZ1bmN0aW9uIGRlbHRhRnJvbUV2ZW50KGV2ZW50KSB7XG4gIGNvbnN0IGRlbHRhID0gTWF0aC5tYXgoLTEsIE1hdGgubWluKDEsIGV2ZW50LndoZWVsRGVsdGEpKTsgLy8vXG5cbiAgcmV0dXJuIGRlbHRhO1xufVxuXG5mdW5jdGlvbiBtb3VzZUNvb3JkaW5hdGVzRnJvbUV2ZW50KGV2ZW50KSB7XG4gIGNvbnN0IGRvbUVsZW1lbnQgPSBldmVudC50YXJnZXQsICAvLy9cbiAgICAgICAgZG9tRWxlbWVudEJvdW5kaW5nQ2xpZW50UmVjdCA9IGRvbUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICAgIG1vdXNlQ29vcmRpbmF0ZXMgPSBbXG4gICAgICAgICAgKyhldmVudC5jbGllbnRYIC0gZG9tRWxlbWVudEJvdW5kaW5nQ2xpZW50UmVjdC5sZWZ0KSxcbiAgICAgICAgICAtKGV2ZW50LmNsaWVudFkgLSBkb21FbGVtZW50Qm91bmRpbmdDbGllbnRSZWN0LnRvcClcbiAgICAgICAgXTtcblxuICByZXR1cm4gbW91c2VDb29yZGluYXRlcztcbn1cblxuZnVuY3Rpb24gYWRkTW91c2VFdmVudEhhbmRsZXIoZG9tRWxlbWVudCwgdHlwZSwgaGFuZGxlcikge1xuICBkb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBoYW5kbGVyKGV2ZW50KTtcblxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH0pO1xufVxuIl19
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
          mouseCoordinates = mouseCoordinatesFromEvent(event, this.canvas);

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

function mouseCoordinatesFromEvent(event, canvas) {
  var domElement = canvas.getDOMElement(),
      domElementBoundingClientRect = domElement.getBoundingClientRect(),
      mouseCoordinates = [+(event.clientX - domElementBoundingClientRect.left), -(event.clientY - domElementBoundingClientRect.top)];

  return mouseCoordinates;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jYW1lcmEvbW91c2VFdmVudHMuanMiXSwibmFtZXMiOlsiY29uc3RhbnRzIiwicmVxdWlyZSIsIk1PVVNFX1VQIiwiTU9VU0VfRE9XTiIsIk1PVVNFX01PVkUiLCJNT1VTRV9XSEVFTCIsIk1vdXNlRXZlbnRzIiwiY2FudmFzIiwiaGFuZGxlcnMiLCJhZGRFdmVudEhhbmRsZXIiLCJldmVudCIsIm9uTW91c2VFdmVudCIsImJpbmQiLCJvbk1vdXNlV2hlZWxFdmVudCIsIm1vdXNlVXBFdmVudEhhbmRsZXIiLCJhZGRNb3VzZUV2ZW50SGFuZGxlciIsIm1vdXNlRG93bkV2ZW50SGFuZGxlciIsIm1vdXNlTW92ZUV2ZW50SGFuZGxlciIsIm1vdXNlV2hlZWxFdmVudEhhbmRsZXIiLCJtb3VzZUV2ZW50VHlwZSIsIm1vdXNlRXZlbnRIYW5kbGVyIiwibW91c2VFdmVudEhhbmRsZXJzIiwicHVzaCIsInR5cGUiLCJoYW5kbGVyIiwiZG9tRWxlbWVudCIsImdldERPTUVsZW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicHJldmVudERlZmF1bHQiLCJtb3VzZUNvb3JkaW5hdGVzIiwibW91c2VDb29yZGluYXRlc0Zyb21FdmVudCIsImZvckVhY2giLCJtb3VzZVdoZWVsRXZlbnRUeXBlIiwibW91c2VXaGVlbEV2ZW50SGFuZGxlcnMiLCJkZWx0YSIsImRlbHRhRnJvbUV2ZW50IiwibW91c2VFdmVudHMiLCJtb2R1bGUiLCJleHBvcnRzIiwiTWF0aCIsIm1heCIsIm1pbiIsIndoZWVsRGVsdGEiLCJkb21FbGVtZW50Qm91bmRpbmdDbGllbnRSZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiY2xpZW50WCIsImxlZnQiLCJjbGllbnRZIiwidG9wIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsWUFBWUMsUUFBUSxjQUFSLENBQWxCOztJQUVRQyxRLEdBQWtERixTLENBQWxERSxRO0lBQVVDLFUsR0FBd0NILFMsQ0FBeENHLFU7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QUVUQyxvQkFBWSxFQUZIO0FBR1RDLG9CQUFZLEVBSEg7QUFJVEMscUJBQWE7QUFKSixPQUFqQjtBQUFBLFVBTU0rQixjQUFjLElBQUk5QixXQUFKLENBQWdCQyxNQUFoQixFQUF3QkMsUUFBeEIsQ0FOcEI7O0FBUUEsYUFBTzRCLFdBQVA7QUFDRDs7Ozs7O0FBR0hDLE9BQU9DLE9BQVAsR0FBaUJoQyxXQUFqQjs7QUFFQSxTQUFTNkIsY0FBVCxDQUF3QnpCLEtBQXhCLEVBQStCO0FBQzdCLE1BQU13QixRQUFRSyxLQUFLQyxHQUFMLENBQVMsQ0FBQyxDQUFWLEVBQWFELEtBQUtFLEdBQUwsQ0FBUyxDQUFULEVBQVkvQixNQUFNZ0MsVUFBbEIsQ0FBYixDQUFkLENBRDZCLENBQzhCOztBQUUzRCxTQUFPUixLQUFQO0FBQ0Q7O0FBRUQsU0FBU0oseUJBQVQsQ0FBbUNwQixLQUFuQyxFQUEwQ0gsTUFBMUMsRUFBa0Q7QUFDaEQsTUFBTWtCLGFBQWFsQixPQUFPbUIsYUFBUCxFQUFuQjtBQUFBLE1BQ01pQiwrQkFBK0JsQixXQUFXbUIscUJBQVgsRUFEckM7QUFBQSxNQUVNZixtQkFBbUIsQ0FDakIsRUFBRW5CLE1BQU1tQyxPQUFOLEdBQWdCRiw2QkFBNkJHLElBQS9DLENBRGlCLEVBRWpCLEVBQUVwQyxNQUFNcUMsT0FBTixHQUFnQkosNkJBQTZCSyxHQUEvQyxDQUZpQixDQUZ6Qjs7QUFPQSxTQUFPbkIsZ0JBQVA7QUFDRCIsImZpbGUiOiJtb3VzZUV2ZW50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgY29uc3RhbnRzID0gcmVxdWlyZSgnLi4vY29uc3RhbnRzJyk7XG5cbmNvbnN0IHsgTU9VU0VfVVAsIE1PVVNFX0RPV04sIE1PVVNFX01PVkUsIE1PVVNFX1dIRUVMIH0gPSBjb25zdGFudHM7XG5cbmNsYXNzIE1vdXNlRXZlbnRzIHtcbiAgY29uc3RydWN0b3IoY2FudmFzLCBoYW5kbGVycykge1xuICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgIHRoaXMuaGFuZGxlcnMgPSBoYW5kbGVycztcblxuICAgIHRoaXMuYWRkRXZlbnRIYW5kbGVyKGNhbnZhcywgJ21vdXNldXAnLCBmdW5jdGlvbihldmVudCkgeyB0aGlzLm9uTW91c2VFdmVudChNT1VTRV9VUCwgZXZlbnQpIH0uYmluZCh0aGlzKSApO1xuICAgIHRoaXMuYWRkRXZlbnRIYW5kbGVyKGNhbnZhcywgJ21vdXNlZG93bicsIGZ1bmN0aW9uKGV2ZW50KSB7IHRoaXMub25Nb3VzZUV2ZW50KE1PVVNFX0RPV04sIGV2ZW50KSB9LmJpbmQodGhpcykgKTtcbiAgICB0aGlzLmFkZEV2ZW50SGFuZGxlcihjYW52YXMsICdtb3VzZW1vdmUnLCBmdW5jdGlvbihldmVudCkgeyB0aGlzLm9uTW91c2VFdmVudChNT1VTRV9NT1ZFLCBldmVudCkgfS5iaW5kKHRoaXMpICk7XG4gICAgdGhpcy5hZGRFdmVudEhhbmRsZXIoY2FudmFzLCAnbW91c2V3aGVlbCcsIGZ1bmN0aW9uKGV2ZW50KSB7IHRoaXMub25Nb3VzZVdoZWVsRXZlbnQoZXZlbnQpIH0uYmluZCh0aGlzKSApO1xuICB9XG5cbiAgYWRkTW91c2VVcEV2ZW50SGFuZGxlcihtb3VzZVVwRXZlbnRIYW5kbGVyKSB7XG4gICAgdGhpcy5hZGRNb3VzZUV2ZW50SGFuZGxlcihNT1VTRV9VUCwgbW91c2VVcEV2ZW50SGFuZGxlcik7XG4gIH1cblxuICBhZGRNb3VzZURvd25FdmVudEhhbmRsZXIobW91c2VEb3duRXZlbnRIYW5kbGVyKSB7XG4gICAgdGhpcy5hZGRNb3VzZUV2ZW50SGFuZGxlcihNT1VTRV9ET1dOLCBtb3VzZURvd25FdmVudEhhbmRsZXIpO1xuICB9XG5cbiAgYWRkTW91c2VNb3ZlRXZlbnRIYW5kbGVyKG1vdXNlTW92ZUV2ZW50SGFuZGxlcikge1xuICAgIHRoaXMuYWRkTW91c2VFdmVudEhhbmRsZXIoTU9VU0VfTU9WRSwgbW91c2VNb3ZlRXZlbnRIYW5kbGVyKTtcbiAgfVxuXG4gIGFkZE1vdXNlV2hlZWxFdmVudEhhbmRsZXIobW91c2VXaGVlbEV2ZW50SGFuZGxlcikge1xuICAgIHRoaXMuYWRkTW91c2VFdmVudEhhbmRsZXIoTU9VU0VfV0hFRUwsIG1vdXNlV2hlZWxFdmVudEhhbmRsZXIpO1xuICB9XG5cbiAgYWRkTW91c2VFdmVudEhhbmRsZXIobW91c2VFdmVudFR5cGUsIG1vdXNlRXZlbnRIYW5kbGVyKSB7XG4gICAgY29uc3QgbW91c2VFdmVudEhhbmRsZXJzID0gdGhpcy5oYW5kbGVyc1ttb3VzZUV2ZW50VHlwZV07XG5cbiAgICBtb3VzZUV2ZW50SGFuZGxlcnMucHVzaChtb3VzZUV2ZW50SGFuZGxlcik7XG4gIH1cblxuICBhZGRFdmVudEhhbmRsZXIoY2FudmFzLCB0eXBlLCBoYW5kbGVyKSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IGNhbnZhcy5nZXRET01FbGVtZW50KCk7XG5cbiAgICBkb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIGhhbmRsZXIoZXZlbnQpO1xuICAgIH0pO1xuICB9XG5cbiAgb25Nb3VzZUV2ZW50KG1vdXNlRXZlbnRUeXBlLCBldmVudCkge1xuICAgIGNvbnN0IG1vdXNlRXZlbnRIYW5kbGVycyA9IHRoaXMuaGFuZGxlcnNbbW91c2VFdmVudFR5cGVdLFxuICAgICAgICAgIG1vdXNlQ29vcmRpbmF0ZXMgPSBtb3VzZUNvb3JkaW5hdGVzRnJvbUV2ZW50KGV2ZW50LCB0aGlzLmNhbnZhcyk7XG5cbiAgICBtb3VzZUV2ZW50SGFuZGxlcnMuZm9yRWFjaChmdW5jdGlvbihtb3VzZUV2ZW50SGFuZGxlcikge1xuICAgICAgbW91c2VFdmVudEhhbmRsZXIobW91c2VDb29yZGluYXRlcyk7XG4gICAgfSk7XG4gIH1cblxuICBvbk1vdXNlV2hlZWxFdmVudChldmVudCkge1xuICAgIGNvbnN0IG1vdXNlV2hlZWxFdmVudFR5cGUgPSBNT1VTRV9XSEVFTCxcbiAgICAgICAgICBtb3VzZVdoZWVsRXZlbnRIYW5kbGVycyA9IHRoaXMuaGFuZGxlcnNbbW91c2VXaGVlbEV2ZW50VHlwZV0sXG4gICAgICAgICAgZGVsdGEgPSBkZWx0YUZyb21FdmVudChldmVudCk7XG5cbiAgICBtb3VzZVdoZWVsRXZlbnRIYW5kbGVycy5mb3JFYWNoKGZ1bmN0aW9uKG1vdXNlV2hlZWxFdmVudEhhbmRsZXIpIHtcbiAgICAgIG1vdXNlV2hlZWxFdmVudEhhbmRsZXIoZGVsdGEpO1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKGNhbnZhcykge1xuICAgIGNvbnN0IGhhbmRsZXJzID0ge1xuICAgICAgICAgICAgTU9VU0VfVVA6IFtdLFxuICAgICAgICAgICAgTU9VU0VfRE9XTjogW10sXG4gICAgICAgICAgICBNT1VTRV9NT1ZFOiBbXSxcbiAgICAgICAgICAgIE1PVVNFX1dIRUVMOiBbXVxuICAgICAgICAgIH0sXG4gICAgICAgICAgbW91c2VFdmVudHMgPSBuZXcgTW91c2VFdmVudHMoY2FudmFzLCBoYW5kbGVycyk7XG5cbiAgICByZXR1cm4gbW91c2VFdmVudHM7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBNb3VzZUV2ZW50cztcblxuZnVuY3Rpb24gZGVsdGFGcm9tRXZlbnQoZXZlbnQpIHtcbiAgY29uc3QgZGVsdGEgPSBNYXRoLm1heCgtMSwgTWF0aC5taW4oMSwgZXZlbnQud2hlZWxEZWx0YSkpOyAvLy9cblxuICByZXR1cm4gZGVsdGE7XG59XG5cbmZ1bmN0aW9uIG1vdXNlQ29vcmRpbmF0ZXNGcm9tRXZlbnQoZXZlbnQsIGNhbnZhcykge1xuICBjb25zdCBkb21FbGVtZW50ID0gY2FudmFzLmdldERPTUVsZW1lbnQoKSxcbiAgICAgICAgZG9tRWxlbWVudEJvdW5kaW5nQ2xpZW50UmVjdCA9IGRvbUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICAgIG1vdXNlQ29vcmRpbmF0ZXMgPSBbXG4gICAgICAgICAgKyhldmVudC5jbGllbnRYIC0gZG9tRWxlbWVudEJvdW5kaW5nQ2xpZW50UmVjdC5sZWZ0KSxcbiAgICAgICAgICAtKGV2ZW50LmNsaWVudFkgLSBkb21FbGVtZW50Qm91bmRpbmdDbGllbnRSZWN0LnRvcClcbiAgICAgICAgXTtcblxuICByZXR1cm4gbW91c2VDb29yZGluYXRlcztcbn1cbiJdfQ==
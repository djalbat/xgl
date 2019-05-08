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
    key: 'onMouseUp',
    value: function onMouseUp(mouseUpHandler) {
      this.addHandler(MOUSE_UP, mouseUpHandler);
    }
  }, {
    key: 'onMouseDown',
    value: function onMouseDown(mouseDownHandler) {
      this.addHandler(MOUSE_DOWN, mouseDownHandler);
    }
  }, {
    key: 'onMouseMove',
    value: function onMouseMove(mouseMoveHandler) {
      this.addHandler(MOUSE_MOVE, mouseMoveHandler);
    }
  }, {
    key: 'onMouseWheel',
    value: function onMouseWheel(mouseWheelHandler) {
      this.addHandler(MOUSE_WHEEL, mouseWheelHandler);
    }
  }, {
    key: 'addHandler',
    value: function addHandler(eventType, handler) {
      var handlers = this.handlersMap[eventType];

      handlers.push(handler);
    }
  }, {
    key: 'mouseUpEventHandler',
    value: function mouseUpEventHandler(event) {
      this.mouseEventHandler(event, MOUSE_UP);
    }
  }, {
    key: 'mouseDownEventHandler',
    value: function mouseDownEventHandler(event) {
      this.mouseEventHandler(event, MOUSE_DOWN);
    }
  }, {
    key: 'mouseMoveEventHandler',
    value: function mouseMoveEventHandler(event) {
      this.mouseEventHandler(event, MOUSE_MOVE);
    }
  }, {
    key: 'mouseWheelEventHandler',
    value: function mouseWheelEventHandler(event) {
      var handlers = this.handlersMap[MOUSE_WHEEL],
          delta = deltaFromEvent(event);

      handlers.forEach(function (handler) {
        return handler(delta);
      });

      event.preventDefault();
    }
  }, {
    key: 'mouseEventHandler',
    value: function mouseEventHandler(event, eventType) {
      var handlers = this.handlersMap[eventType],
          mouseCoordinates = mouseCoordinatesFromEvent(event, this.canvas);

      handlers.forEach(function (handler) {
        return handler(mouseCoordinates);
      });

      event.preventDefault();
    }
  }], [{
    key: 'fromNothing',
    value: function fromNothing(canvas) {
      var handlersMap = {},
          domElement = canvas.getDOMElement(),
          mouseEvents = new MouseEvents(handlersMap, canvas),
          mouseUpEventHandler = mouseEvents.mouseUpEventHandler.bind(mouseEvents),
          mouseDownEventHandler = mouseEvents.mouseDownEventHandler.bind(mouseEvents),
          mouseMoveEventHandler = mouseEvents.mouseMoveEventHandler.bind(mouseEvents),
          mouseWheelEventHandler = mouseEvents.mouseWheelEventHandler.bind(mouseEvents);

      handlersMap[MOUSE_UP] = [];
      handlersMap[MOUSE_DOWN] = [];
      handlersMap[MOUSE_MOVE] = [];
      handlersMap[MOUSE_WHEEL] = [];

      domElement.addEventListener('mouseup', mouseUpEventHandler);
      domElement.addEventListener('mousedown', mouseDownEventHandler);
      domElement.addEventListener('mousemove', mouseMoveEventHandler);
      domElement.addEventListener('mousewheel', mouseWheelEventHandler);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9lbGVtZW50L2NhbWVyYS9tb3VzZUV2ZW50cy5qcyJdLCJuYW1lcyI6WyJjb25zdGFudHMiLCJyZXF1aXJlIiwiTU9VU0VfVVAiLCJNT1VTRV9ET1dOIiwiTU9VU0VfTU9WRSIsIk1PVVNFX1dIRUVMIiwiTW91c2VFdmVudHMiLCJoYW5kbGVyc01hcCIsImNhbnZhcyIsIm1vdXNlVXBIYW5kbGVyIiwiYWRkSGFuZGxlciIsIm1vdXNlRG93bkhhbmRsZXIiLCJtb3VzZU1vdmVIYW5kbGVyIiwibW91c2VXaGVlbEhhbmRsZXIiLCJldmVudFR5cGUiLCJoYW5kbGVyIiwiaGFuZGxlcnMiLCJwdXNoIiwiZXZlbnQiLCJtb3VzZUV2ZW50SGFuZGxlciIsImRlbHRhIiwiZGVsdGFGcm9tRXZlbnQiLCJmb3JFYWNoIiwicHJldmVudERlZmF1bHQiLCJtb3VzZUNvb3JkaW5hdGVzIiwibW91c2VDb29yZGluYXRlc0Zyb21FdmVudCIsImRvbUVsZW1lbnQiLCJnZXRET01FbGVtZW50IiwibW91c2VFdmVudHMiLCJtb3VzZVVwRXZlbnRIYW5kbGVyIiwiYmluZCIsIm1vdXNlRG93bkV2ZW50SGFuZGxlciIsIm1vdXNlTW92ZUV2ZW50SGFuZGxlciIsIm1vdXNlV2hlZWxFdmVudEhhbmRsZXIiLCJhZGRFdmVudExpc3RlbmVyIiwibW9kdWxlIiwiZXhwb3J0cyIsIk1hdGgiLCJtYXgiLCJtaW4iLCJ3aGVlbERlbHRhIiwidGFyZ2V0IiwiZG9tRWxlbWVudEJvdW5kaW5nQ2xpZW50UmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImNsaWVudFgiLCJsZWZ0IiwiY2xpZW50WSIsInRvcCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFlBQVlDLFFBQVEsaUJBQVIsQ0FBbEI7O0lBRVFDLFEsR0FBa0RGLFMsQ0FBbERFLFE7SUFBVUMsVSxHQUF3Q0gsUyxDQUF4Q0csVTtJQUFZQyxVLEdBQTRCSixTLENBQTVCSSxVO0lBQVlDLFcs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aUJBQVdRLGdCQUFYLENBQTRCLFdBQTVCLEVBQXlDRixxQkFBekM7QUFDQU4saUJBQVdRLGdCQUFYLENBQTRCLFlBQTVCLEVBQTBDRCxzQkFBMUM7O0FBRUEsYUFBT0wsV0FBUDtBQUNEOzs7Ozs7QUFHSE8sT0FBT0MsT0FBUCxHQUFpQjlCLFdBQWpCOztBQUVBLFNBQVNlLGNBQVQsQ0FBd0JILEtBQXhCLEVBQStCO0FBQzdCLE1BQU1FLFFBQVFpQixLQUFLQyxHQUFMLENBQVMsQ0FBQyxDQUFWLEVBQWFELEtBQUtFLEdBQUwsQ0FBUyxDQUFULEVBQVlyQixNQUFNc0IsVUFBbEIsQ0FBYixDQUFkLENBRDZCLENBQzhCOztBQUUzRCxTQUFPcEIsS0FBUDtBQUNEOztBQUVELFNBQVNLLHlCQUFULENBQW1DUCxLQUFuQyxFQUEwQztBQUN4QyxNQUFNUSxhQUFhUixNQUFNdUIsTUFBekI7QUFBQSxNQUFrQztBQUM1QkMsaUNBQStCaEIsV0FBV2lCLHFCQUFYLEVBRHJDO0FBQUEsTUFFTW5CLG1CQUFtQixDQUNqQixFQUFFTixNQUFNMEIsT0FBTixHQUFnQkYsNkJBQTZCRyxJQUEvQyxDQURpQixFQUVqQixFQUFFM0IsTUFBTTRCLE9BQU4sR0FBZ0JKLDZCQUE2QkssR0FBL0MsQ0FGaUIsQ0FGekI7O0FBT0EsU0FBT3ZCLGdCQUFQO0FBQ0QiLCJmaWxlIjoibW91c2VFdmVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGNvbnN0YW50cyA9IHJlcXVpcmUoJy4uLy4uL2NvbnN0YW50cycpO1xuXG5jb25zdCB7IE1PVVNFX1VQLCBNT1VTRV9ET1dOLCBNT1VTRV9NT1ZFLCBNT1VTRV9XSEVFTCB9ID0gY29uc3RhbnRzO1xuXG5jbGFzcyBNb3VzZUV2ZW50cyB7XG4gIGNvbnN0cnVjdG9yKGhhbmRsZXJzTWFwLCBjYW52YXMpIHtcbiAgICB0aGlzLmhhbmRsZXJzTWFwID0gaGFuZGxlcnNNYXA7XG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gIH1cblxuICBnZXRIYW5kbGVyc01hcCgpIHtcbiAgICByZXR1cm4gdGhpcy5oYW5kbGVyc01hcDtcbiAgfVxuXG4gIGdldENhbnZhcygpIHtcbiAgICByZXR1cm4gdGhpcy5jYW52YXM7XG4gIH1cblxuICBvbk1vdXNlVXAobW91c2VVcEhhbmRsZXIpIHtcbiAgICB0aGlzLmFkZEhhbmRsZXIoTU9VU0VfVVAsIG1vdXNlVXBIYW5kbGVyKTtcbiAgfVxuXG4gIG9uTW91c2VEb3duKG1vdXNlRG93bkhhbmRsZXIpIHtcbiAgICB0aGlzLmFkZEhhbmRsZXIoTU9VU0VfRE9XTiwgbW91c2VEb3duSGFuZGxlcik7XG4gIH1cblxuICBvbk1vdXNlTW92ZShtb3VzZU1vdmVIYW5kbGVyKSB7XG4gICAgdGhpcy5hZGRIYW5kbGVyKE1PVVNFX01PVkUsIG1vdXNlTW92ZUhhbmRsZXIpO1xuICB9XG5cbiAgb25Nb3VzZVdoZWVsKG1vdXNlV2hlZWxIYW5kbGVyKSB7XG4gICAgdGhpcy5hZGRIYW5kbGVyKE1PVVNFX1dIRUVMLCBtb3VzZVdoZWVsSGFuZGxlcik7XG4gIH1cblxuICBhZGRIYW5kbGVyKGV2ZW50VHlwZSwgaGFuZGxlcikge1xuICAgIGNvbnN0IGhhbmRsZXJzID0gdGhpcy5oYW5kbGVyc01hcFtldmVudFR5cGVdO1xuXG4gICAgaGFuZGxlcnMucHVzaChoYW5kbGVyKTtcbiAgfVxuXG5cdG1vdXNlVXBFdmVudEhhbmRsZXIoZXZlbnQpIHsgdGhpcy5tb3VzZUV2ZW50SGFuZGxlcihldmVudCwgTU9VU0VfVVApOyB9XG5cblx0bW91c2VEb3duRXZlbnRIYW5kbGVyKGV2ZW50KSB7IHRoaXMubW91c2VFdmVudEhhbmRsZXIoZXZlbnQsIE1PVVNFX0RPV04pOyB9XG5cblx0bW91c2VNb3ZlRXZlbnRIYW5kbGVyKGV2ZW50KSB7IHRoaXMubW91c2VFdmVudEhhbmRsZXIoZXZlbnQsIE1PVVNFX01PVkUpOyB9XG5cbiAgbW91c2VXaGVlbEV2ZW50SGFuZGxlcihldmVudCkge1xuICAgIGNvbnN0IGhhbmRsZXJzID0gdGhpcy5oYW5kbGVyc01hcFtNT1VTRV9XSEVFTF0sXG4gICAgICAgICAgZGVsdGEgPSBkZWx0YUZyb21FdmVudChldmVudCk7XG5cbiAgICBoYW5kbGVycy5mb3JFYWNoKChoYW5kbGVyKSA9PiBoYW5kbGVyKGRlbHRhKSk7XG5cblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cblx0bW91c2VFdmVudEhhbmRsZXIoZXZlbnQsIGV2ZW50VHlwZSkge1xuXHRcdGNvbnN0IGhhbmRsZXJzID0gdGhpcy5oYW5kbGVyc01hcFtldmVudFR5cGVdLFxuXHRcdFx0XHRcdG1vdXNlQ29vcmRpbmF0ZXMgPSBtb3VzZUNvb3JkaW5hdGVzRnJvbUV2ZW50KGV2ZW50LCB0aGlzLmNhbnZhcyk7XG5cblx0XHRoYW5kbGVycy5mb3JFYWNoKChoYW5kbGVyKSA9PiBoYW5kbGVyKG1vdXNlQ29vcmRpbmF0ZXMpKTtcblxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoY2FudmFzKSB7XG4gICAgY29uc3QgaGFuZGxlcnNNYXAgPSB7fSxcblx0XHRcdFx0XHRkb21FbGVtZW50ID0gY2FudmFzLmdldERPTUVsZW1lbnQoKSxcblx0XHRcdFx0XHRtb3VzZUV2ZW50cyA9IG5ldyBNb3VzZUV2ZW50cyhoYW5kbGVyc01hcCwgY2FudmFzKSxcblx0XHRcdFx0XHRtb3VzZVVwRXZlbnRIYW5kbGVyID0gbW91c2VFdmVudHMubW91c2VVcEV2ZW50SGFuZGxlci5iaW5kKG1vdXNlRXZlbnRzKSxcblx0XHRcdFx0XHRtb3VzZURvd25FdmVudEhhbmRsZXIgPSBtb3VzZUV2ZW50cy5tb3VzZURvd25FdmVudEhhbmRsZXIuYmluZChtb3VzZUV2ZW50cyksXG5cdFx0XHRcdFx0bW91c2VNb3ZlRXZlbnRIYW5kbGVyID0gbW91c2VFdmVudHMubW91c2VNb3ZlRXZlbnRIYW5kbGVyLmJpbmQobW91c2VFdmVudHMpLFxuXHRcdFx0XHRcdG1vdXNlV2hlZWxFdmVudEhhbmRsZXIgPSBtb3VzZUV2ZW50cy5tb3VzZVdoZWVsRXZlbnRIYW5kbGVyLmJpbmQobW91c2VFdmVudHMpO1xuXG5cdFx0aGFuZGxlcnNNYXBbTU9VU0VfVVBdID0gW107XG5cdFx0aGFuZGxlcnNNYXBbTU9VU0VfRE9XTl0gPSBbXTtcblx0XHRoYW5kbGVyc01hcFtNT1VTRV9NT1ZFXSA9IFtdO1xuXHRcdGhhbmRsZXJzTWFwW01PVVNFX1dIRUVMXSA9IFtdO1xuXG4gICAgZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgbW91c2VVcEV2ZW50SGFuZGxlcik7XG4gICAgZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBtb3VzZURvd25FdmVudEhhbmRsZXIpO1xuICAgIGRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgbW91c2VNb3ZlRXZlbnRIYW5kbGVyKTtcbiAgICBkb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNld2hlZWwnLCBtb3VzZVdoZWVsRXZlbnRIYW5kbGVyKTtcblxuICAgIHJldHVybiBtb3VzZUV2ZW50cztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE1vdXNlRXZlbnRzO1xuXG5mdW5jdGlvbiBkZWx0YUZyb21FdmVudChldmVudCkge1xuICBjb25zdCBkZWx0YSA9IE1hdGgubWF4KC0xLCBNYXRoLm1pbigxLCBldmVudC53aGVlbERlbHRhKSk7IC8vL1xuXG4gIHJldHVybiBkZWx0YTtcbn1cblxuZnVuY3Rpb24gbW91c2VDb29yZGluYXRlc0Zyb21FdmVudChldmVudCkge1xuICBjb25zdCBkb21FbGVtZW50ID0gZXZlbnQudGFyZ2V0LCAgLy8vXG4gICAgICAgIGRvbUVsZW1lbnRCb3VuZGluZ0NsaWVudFJlY3QgPSBkb21FbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgICBtb3VzZUNvb3JkaW5hdGVzID0gW1xuICAgICAgICAgICsoZXZlbnQuY2xpZW50WCAtIGRvbUVsZW1lbnRCb3VuZGluZ0NsaWVudFJlY3QubGVmdCksXG4gICAgICAgICAgLShldmVudC5jbGllbnRZIC0gZG9tRWxlbWVudEJvdW5kaW5nQ2xpZW50UmVjdC50b3ApXG4gICAgICAgIF07XG5cbiAgcmV0dXJuIG1vdXNlQ29vcmRpbmF0ZXM7XG59XG4iXX0=
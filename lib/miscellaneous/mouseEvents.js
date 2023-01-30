"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return MouseEvents;
    }
});
var _eventTypes = require("../eventTypes");
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
var MouseEvents = /*#__PURE__*/ function() {
    function MouseEvents(handlersMap, mouseDown) {
        var _this = this;
        _classCallCheck(this, MouseEvents);
        _defineProperty(this, "wheelEventListener", function(event) {
            var handlers = _this.handlersMap[_eventTypes.WHEEL_EVENT_TYPE], mouseWheelDelta = mouseWheelDeltaFromEvent(event);
            handlers.forEach(function(handler) {
                return handler(mouseWheelDelta);
            });
            event.preventDefault();
        });
        _defineProperty(this, "mouseEventListener", function(event, eventType) {
            var handlers = _this.handlersMap[eventType], mouseCoordinates = mouseCoordinatesFromEvent(event);
            handlers.forEach(function(handler) {
                return handler(mouseCoordinates, _this.mouseDown);
            });
            event.preventDefault();
        });
        _defineProperty(this, "mouseUpEventListener", function(event) {
            _this.mouseDown = false;
            _this.mouseEventListener(event, _eventTypes.MOUSEUP_EVENT_TYPE);
        });
        _defineProperty(this, "mouseDownEventListener", function(event) {
            _this.mouseDown = true;
            _this.mouseEventListener(event, _eventTypes.MOUSEDOWN_EVENT_TYPE);
        });
        _defineProperty(this, "mouseMoveEventListener", function(event) {
            _this.mouseEventListener(event, _eventTypes.MOUSEMOVE_EVENT_TYPE);
        });
        this.handlersMap = handlersMap;
        this.mouseDown = mouseDown;
    }
    _createClass(MouseEvents, [
        {
            key: "addMouseUpHandler",
            value: function addMouseUpHandler(mouseUpHandler) {
                var mouseUpHandlers = this.handlersMap[_eventTypes.MOUSEUP_EVENT_TYPE];
                mouseUpHandlers.push(mouseUpHandler);
            }
        },
        {
            key: "addMouseDownHandler",
            value: function addMouseDownHandler(mouseDownHandler) {
                var mouseDownHandlers = this.handlersMap[_eventTypes.MOUSEDOWN_EVENT_TYPE];
                mouseDownHandlers.push(mouseDownHandler);
            }
        },
        {
            key: "addMouseMoveHandler",
            value: function addMouseMoveHandler(mouseMoveHandler) {
                var mouseMoveHandlers = this.handlersMap[_eventTypes.MOUSEMOVE_EVENT_TYPE];
                mouseMoveHandlers.push(mouseMoveHandler);
            }
        },
        {
            key: "addMouseWheelHandler",
            value: function addMouseWheelHandler(mouseWheelHandler) {
                var mouseWheelHandlers = this.handlersMap[_eventTypes.WHEEL_EVENT_TYPE];
                mouseWheelHandlers.push(mouseWheelHandler);
            }
        },
        {
            key: "initialise",
            value: function initialise(canvas) {
                var canvasDOMElement = canvas.getDOMElement();
                this.handlersMap[_eventTypes.WHEEL_EVENT_TYPE] = [];
                this.handlersMap[_eventTypes.MOUSEUP_EVENT_TYPE] = [];
                this.handlersMap[_eventTypes.MOUSEDOWN_EVENT_TYPE] = [];
                this.handlersMap[_eventTypes.MOUSEMOVE_EVENT_TYPE] = [];
                canvasDOMElement.addEventListener(_eventTypes.WHEEL_EVENT_TYPE, this.wheelEventListener);
                canvasDOMElement.addEventListener(_eventTypes.MOUSEUP_EVENT_TYPE, this.mouseUpEventListener);
                canvasDOMElement.addEventListener(_eventTypes.MOUSEDOWN_EVENT_TYPE, this.mouseDownEventListener);
                canvasDOMElement.addEventListener(_eventTypes.MOUSEMOVE_EVENT_TYPE, this.mouseMoveEventListener);
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var handlersMap = {}, mouseDown = false, mouseEvents = new MouseEvents(handlersMap, mouseDown);
                return mouseEvents;
            }
        }
    ]);
    return MouseEvents;
}();
function mouseWheelDeltaFromEvent(event) {
    var wheelDelta = event.wheelDelta, mouseWheelDelta = Math.max(-1, Math.min(1, wheelDelta)); ///
    return mouseWheelDelta;
}
function mouseCoordinatesFromEvent(event) {
    var target = event.target, clientX = event.clientX, clientY = event.clientY, canvasDOMElement = target, boundingClientRect = canvasDOMElement.getBoundingClientRect(), top = boundingClientRect.top, left = boundingClientRect.left, mouseCoordinates = [
        clientX - left,
        top - clientY
    ];
    return mouseCoordinates;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXNjZWxsYW5lb3VzL21vdXNlRXZlbnRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBXSEVFTF9FVkVOVF9UWVBFLCBNT1VTRVVQX0VWRU5UX1RZUEUsIE1PVVNFRE9XTl9FVkVOVF9UWVBFLCBNT1VTRU1PVkVfRVZFTlRfVFlQRSB9IGZyb20gXCIuLi9ldmVudFR5cGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vdXNlRXZlbnRzIHtcbiAgY29uc3RydWN0b3IoaGFuZGxlcnNNYXAsIG1vdXNlRG93bikge1xuICAgIHRoaXMuaGFuZGxlcnNNYXAgPSBoYW5kbGVyc01hcDtcbiAgICB0aGlzLm1vdXNlRG93biA9IG1vdXNlRG93bjtcbiAgfVxuXG4gIHdoZWVsRXZlbnRMaXN0ZW5lciA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZXJzID0gdGhpcy5oYW5kbGVyc01hcFsgV0hFRUxfRVZFTlRfVFlQRSBdLFxuICAgICAgICAgIG1vdXNlV2hlZWxEZWx0YSA9IG1vdXNlV2hlZWxEZWx0YUZyb21FdmVudChldmVudCk7XG5cbiAgICBoYW5kbGVycy5mb3JFYWNoKChoYW5kbGVyKSA9PiBoYW5kbGVyKG1vdXNlV2hlZWxEZWx0YSkpO1xuXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIG1vdXNlRXZlbnRMaXN0ZW5lciA9IChldmVudCwgZXZlbnRUeXBlKSA9PiB7XG4gICAgY29uc3QgaGFuZGxlcnMgPSB0aGlzLmhhbmRsZXJzTWFwW2V2ZW50VHlwZV0sXG4gICAgICAgICAgbW91c2VDb29yZGluYXRlcyA9IG1vdXNlQ29vcmRpbmF0ZXNGcm9tRXZlbnQoZXZlbnQpO1xuXG4gICAgaGFuZGxlcnMuZm9yRWFjaCgoaGFuZGxlcikgPT4gaGFuZGxlcihtb3VzZUNvb3JkaW5hdGVzLCB0aGlzLm1vdXNlRG93bikpO1xuXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIG1vdXNlVXBFdmVudExpc3RlbmVyID0gKGV2ZW50KSA9PiB7XG4gICAgdGhpcy5tb3VzZURvd24gPSBmYWxzZTtcblxuICAgIHRoaXMubW91c2VFdmVudExpc3RlbmVyKGV2ZW50LCBNT1VTRVVQX0VWRU5UX1RZUEUpO1xuICB9XG5cblx0bW91c2VEb3duRXZlbnRMaXN0ZW5lciA9IChldmVudCkgPT4ge1xuICAgIHRoaXMubW91c2VEb3duID0gdHJ1ZTtcblxuICAgIHRoaXMubW91c2VFdmVudExpc3RlbmVyKGV2ZW50LCBNT1VTRURPV05fRVZFTlRfVFlQRSk7XG4gIH1cblxuXHRtb3VzZU1vdmVFdmVudExpc3RlbmVyID0gKGV2ZW50KSA9PiB7XG4gICAgdGhpcy5tb3VzZUV2ZW50TGlzdGVuZXIoZXZlbnQsIE1PVVNFTU9WRV9FVkVOVF9UWVBFKTtcbiAgfVxuXG4gIGFkZE1vdXNlVXBIYW5kbGVyKG1vdXNlVXBIYW5kbGVyKSB7XG4gICAgY29uc3QgbW91c2VVcEhhbmRsZXJzID0gdGhpcy5oYW5kbGVyc01hcFsgTU9VU0VVUF9FVkVOVF9UWVBFIF07XG5cbiAgICBtb3VzZVVwSGFuZGxlcnMucHVzaChtb3VzZVVwSGFuZGxlcik7XG4gIH1cblxuICBhZGRNb3VzZURvd25IYW5kbGVyKG1vdXNlRG93bkhhbmRsZXIpIHtcbiAgICBjb25zdCBtb3VzZURvd25IYW5kbGVycyA9IHRoaXMuaGFuZGxlcnNNYXBbIE1PVVNFRE9XTl9FVkVOVF9UWVBFIF07XG5cbiAgICBtb3VzZURvd25IYW5kbGVycy5wdXNoKG1vdXNlRG93bkhhbmRsZXIpO1xuICB9XG5cbiAgYWRkTW91c2VNb3ZlSGFuZGxlcihtb3VzZU1vdmVIYW5kbGVyKSB7XG4gICAgY29uc3QgbW91c2VNb3ZlSGFuZGxlcnMgPSB0aGlzLmhhbmRsZXJzTWFwWyBNT1VTRU1PVkVfRVZFTlRfVFlQRSBdO1xuXG4gICAgbW91c2VNb3ZlSGFuZGxlcnMucHVzaChtb3VzZU1vdmVIYW5kbGVyKTtcbiAgfVxuXG4gIGFkZE1vdXNlV2hlZWxIYW5kbGVyKG1vdXNlV2hlZWxIYW5kbGVyKSB7XG4gICAgY29uc3QgbW91c2VXaGVlbEhhbmRsZXJzID0gdGhpcy5oYW5kbGVyc01hcFsgV0hFRUxfRVZFTlRfVFlQRSBdO1xuXG4gICAgbW91c2VXaGVlbEhhbmRsZXJzLnB1c2gobW91c2VXaGVlbEhhbmRsZXIpO1xuICB9XG5cbiAgaW5pdGlhbGlzZShjYW52YXMpIHtcbiAgICAgIGNvbnN0IGNhbnZhc0RPTUVsZW1lbnQgPSBjYW52YXMuZ2V0RE9NRWxlbWVudCgpO1xuXG4gICAgdGhpcy5oYW5kbGVyc01hcFsgV0hFRUxfRVZFTlRfVFlQRSBdID0gW107XG4gICAgdGhpcy5oYW5kbGVyc01hcFsgTU9VU0VVUF9FVkVOVF9UWVBFIF0gPSBbXTtcbiAgICB0aGlzLmhhbmRsZXJzTWFwWyBNT1VTRURPV05fRVZFTlRfVFlQRSBdID0gW107XG4gICAgdGhpcy5oYW5kbGVyc01hcFsgTU9VU0VNT1ZFX0VWRU5UX1RZUEUgXSA9IFtdO1xuXG4gICAgY2FudmFzRE9NRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFdIRUVMX0VWRU5UX1RZUEUsIHRoaXMud2hlZWxFdmVudExpc3RlbmVyKTtcbiAgICBjYW52YXNET01FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoTU9VU0VVUF9FVkVOVF9UWVBFLCB0aGlzLm1vdXNlVXBFdmVudExpc3RlbmVyKTtcbiAgICBjYW52YXNET01FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoTU9VU0VET1dOX0VWRU5UX1RZUEUsIHRoaXMubW91c2VEb3duRXZlbnRMaXN0ZW5lcik7XG4gICAgY2FudmFzRE9NRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKE1PVVNFTU9WRV9FVkVOVF9UWVBFLCB0aGlzLm1vdXNlTW92ZUV2ZW50TGlzdGVuZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IGhhbmRsZXJzTWFwID0ge30sXG4gICAgICAgICAgbW91c2VEb3duID0gZmFsc2UsICAvLy9cblx0XHRcdFx0XHRtb3VzZUV2ZW50cyA9IG5ldyBNb3VzZUV2ZW50cyhoYW5kbGVyc01hcCwgbW91c2VEb3duKTtcblxuICAgIHJldHVybiBtb3VzZUV2ZW50cztcbiAgfVxufVxuXG5mdW5jdGlvbiBtb3VzZVdoZWVsRGVsdGFGcm9tRXZlbnQoZXZlbnQpIHtcbiAgY29uc3QgeyB3aGVlbERlbHRhIH0gPSBldmVudCxcbiAgICAgICAgbW91c2VXaGVlbERlbHRhID0gTWF0aC5tYXgoLTEsIE1hdGgubWluKDEsIHdoZWVsRGVsdGEpKTsgLy8vXG5cbiAgcmV0dXJuIG1vdXNlV2hlZWxEZWx0YTtcbn1cblxuZnVuY3Rpb24gbW91c2VDb29yZGluYXRlc0Zyb21FdmVudChldmVudCkge1xuICBjb25zdCB7IHRhcmdldCwgY2xpZW50WCwgY2xpZW50WSB9ID0gZXZlbnQsXG4gICAgICAgIGNhbnZhc0RPTUVsZW1lbnQgPSB0YXJnZXQsICAvLy9cbiAgICAgICAgYm91bmRpbmdDbGllbnRSZWN0ID0gY2FudmFzRE9NRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgICAgeyB0b3AsIGxlZnQgfSA9IGJvdW5kaW5nQ2xpZW50UmVjdCxcbiAgICAgICAgbW91c2VDb29yZGluYXRlcyA9IFtcbiAgICAgICAgICBjbGllbnRYIC0gbGVmdCxcbiAgICAgICAgICB0b3AgLSBjbGllbnRZXG4gICAgICAgIF07XG5cbiAgcmV0dXJuIG1vdXNlQ29vcmRpbmF0ZXM7XG59XG4iXSwibmFtZXMiOlsiTW91c2VFdmVudHMiLCJoYW5kbGVyc01hcCIsIm1vdXNlRG93biIsIndoZWVsRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwiaGFuZGxlcnMiLCJXSEVFTF9FVkVOVF9UWVBFIiwibW91c2VXaGVlbERlbHRhIiwibW91c2VXaGVlbERlbHRhRnJvbUV2ZW50IiwiZm9yRWFjaCIsImhhbmRsZXIiLCJwcmV2ZW50RGVmYXVsdCIsIm1vdXNlRXZlbnRMaXN0ZW5lciIsImV2ZW50VHlwZSIsIm1vdXNlQ29vcmRpbmF0ZXMiLCJtb3VzZUNvb3JkaW5hdGVzRnJvbUV2ZW50IiwibW91c2VVcEV2ZW50TGlzdGVuZXIiLCJNT1VTRVVQX0VWRU5UX1RZUEUiLCJtb3VzZURvd25FdmVudExpc3RlbmVyIiwiTU9VU0VET1dOX0VWRU5UX1RZUEUiLCJtb3VzZU1vdmVFdmVudExpc3RlbmVyIiwiTU9VU0VNT1ZFX0VWRU5UX1RZUEUiLCJhZGRNb3VzZVVwSGFuZGxlciIsIm1vdXNlVXBIYW5kbGVyIiwibW91c2VVcEhhbmRsZXJzIiwicHVzaCIsImFkZE1vdXNlRG93bkhhbmRsZXIiLCJtb3VzZURvd25IYW5kbGVyIiwibW91c2VEb3duSGFuZGxlcnMiLCJhZGRNb3VzZU1vdmVIYW5kbGVyIiwibW91c2VNb3ZlSGFuZGxlciIsIm1vdXNlTW92ZUhhbmRsZXJzIiwiYWRkTW91c2VXaGVlbEhhbmRsZXIiLCJtb3VzZVdoZWVsSGFuZGxlciIsIm1vdXNlV2hlZWxIYW5kbGVycyIsImluaXRpYWxpc2UiLCJjYW52YXMiLCJjYW52YXNET01FbGVtZW50IiwiZ2V0RE9NRWxlbWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJmcm9tTm90aGluZyIsIm1vdXNlRXZlbnRzIiwid2hlZWxEZWx0YSIsIk1hdGgiLCJtYXgiLCJtaW4iLCJ0YXJnZXQiLCJjbGllbnRYIiwiY2xpZW50WSIsImJvdW5kaW5nQ2xpZW50UmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsImxlZnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBSXFCQTs7OzBCQUY0RTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLElBQUEsQUFBTUEsNEJBdUZsQixBQXZGWTthQUFNQSxZQUNQQyxXQUFXLEVBQUVDLFNBQVM7OzhCQURmRjtRQU1uQkcsc0JBQUFBLHNCQUFxQixTQUFDQyxPQUFVO1lBQzlCLElBQU1DLFdBQVcsTUFBS0osV0FBVyxDQUFFSyw0QkFBZ0IsQ0FBRSxFQUMvQ0Msa0JBQWtCQyx5QkFBeUJKO1lBRWpE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
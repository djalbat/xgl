"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
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
var MouseEvents = /*#__PURE__*/ function() {
    function MouseEvents(handlersMap, mouseDown) {
        _classCallCheck(this, MouseEvents);
        this.handlersMap = handlersMap;
        this.mouseDown = mouseDown;
    }
    _createClass(MouseEvents, [
        {
            key: "wheelEventListener",
            value: function wheelEventListener(event) {
                var handlers = this.handlersMap[_eventTypes.WHEEL_EVENT_TYPE], mouseWheelDelta = mouseWheelDeltaFromEvent(event);
                handlers.forEach(function(handler) {
                    return handler(mouseWheelDelta);
                });
                event.preventDefault();
            }
        },
        {
            key: "mouseEventListener",
            value: function mouseEventListener(event, eventType) {
                var _this = this;
                var handlers = this.handlersMap[eventType], mouseCoordinates = mouseCoordinatesFromEvent(event);
                handlers.forEach(function(handler) {
                    return handler(mouseCoordinates, _this.mouseDown);
                });
                event.preventDefault();
            }
        },
        {
            key: "mouseUpEventListener",
            value: function mouseUpEventListener(event) {
                this.mouseDown = false;
                this.mouseEventListener(event, _eventTypes.MOUSEUP_EVENT_TYPE);
            }
        },
        {
            key: "mouseDownEventListener",
            value: function mouseDownEventListener(event) {
                this.mouseDown = true;
                this.mouseEventListener(event, _eventTypes.MOUSEDOWN_EVENT_TYPE);
            }
        },
        {
            key: "mouseMoveEventListener",
            value: function mouseMoveEventListener(event) {
                this.mouseEventListener(event, _eventTypes.MOUSEMOVE_EVENT_TYPE);
            }
        },
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
                var canvasDOMElement = canvas.getDOMElement(), wheelEventListener = this.wheelEventListener.bind(this), mouseUpEventListener = this.mouseUpEventListener.bind(this), mouseDownEventListener = this.mouseDownEventListener.bind(this), mouseMoveEventListener = this.mouseMoveEventListener.bind(this);
                this.handlersMap[_eventTypes.WHEEL_EVENT_TYPE] = [];
                this.handlersMap[_eventTypes.MOUSEUP_EVENT_TYPE] = [];
                this.handlersMap[_eventTypes.MOUSEDOWN_EVENT_TYPE] = [];
                this.handlersMap[_eventTypes.MOUSEMOVE_EVENT_TYPE] = [];
                canvasDOMElement.addEventListener(_eventTypes.WHEEL_EVENT_TYPE, wheelEventListener);
                canvasDOMElement.addEventListener(_eventTypes.MOUSEUP_EVENT_TYPE, mouseUpEventListener);
                canvasDOMElement.addEventListener(_eventTypes.MOUSEDOWN_EVENT_TYPE, mouseDownEventListener);
                canvasDOMElement.addEventListener(_eventTypes.MOUSEMOVE_EVENT_TYPE, mouseMoveEventListener);
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
exports.default = MouseEvents;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXNjZWxsYW5lb3VzL21vdXNlRXZlbnRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBXSEVFTF9FVkVOVF9UWVBFLCBNT1VTRVVQX0VWRU5UX1RZUEUsIE1PVVNFRE9XTl9FVkVOVF9UWVBFLCBNT1VTRU1PVkVfRVZFTlRfVFlQRSB9IGZyb20gXCIuLi9ldmVudFR5cGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vdXNlRXZlbnRzIHtcbiAgY29uc3RydWN0b3IoaGFuZGxlcnNNYXAsIG1vdXNlRG93bikge1xuICAgIHRoaXMuaGFuZGxlcnNNYXAgPSBoYW5kbGVyc01hcDtcbiAgICB0aGlzLm1vdXNlRG93biA9IG1vdXNlRG93bjtcbiAgfVxuXG4gIHdoZWVsRXZlbnRMaXN0ZW5lcihldmVudCkge1xuICAgIGNvbnN0IGhhbmRsZXJzID0gdGhpcy5oYW5kbGVyc01hcFsgV0hFRUxfRVZFTlRfVFlQRSBdLFxuICAgICAgICAgIG1vdXNlV2hlZWxEZWx0YSA9IG1vdXNlV2hlZWxEZWx0YUZyb21FdmVudChldmVudCk7XG5cbiAgICBoYW5kbGVycy5mb3JFYWNoKChoYW5kbGVyKSA9PiBoYW5kbGVyKG1vdXNlV2hlZWxEZWx0YSkpO1xuXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIG1vdXNlRXZlbnRMaXN0ZW5lcihldmVudCwgZXZlbnRUeXBlKSB7XG4gICAgY29uc3QgaGFuZGxlcnMgPSB0aGlzLmhhbmRsZXJzTWFwW2V2ZW50VHlwZV0sXG4gICAgICAgICAgbW91c2VDb29yZGluYXRlcyA9IG1vdXNlQ29vcmRpbmF0ZXNGcm9tRXZlbnQoZXZlbnQpO1xuXG4gICAgaGFuZGxlcnMuZm9yRWFjaCgoaGFuZGxlcikgPT4gaGFuZGxlcihtb3VzZUNvb3JkaW5hdGVzLCB0aGlzLm1vdXNlRG93bikpO1xuXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIG1vdXNlVXBFdmVudExpc3RlbmVyKGV2ZW50KSB7XG4gICAgdGhpcy5tb3VzZURvd24gPSBmYWxzZTtcblxuICAgIHRoaXMubW91c2VFdmVudExpc3RlbmVyKGV2ZW50LCBNT1VTRVVQX0VWRU5UX1RZUEUpO1xuICB9XG5cblx0bW91c2VEb3duRXZlbnRMaXN0ZW5lcihldmVudCkge1xuICAgIHRoaXMubW91c2VEb3duID0gdHJ1ZTtcblxuICAgIHRoaXMubW91c2VFdmVudExpc3RlbmVyKGV2ZW50LCBNT1VTRURPV05fRVZFTlRfVFlQRSk7XG4gIH1cblxuXHRtb3VzZU1vdmVFdmVudExpc3RlbmVyKGV2ZW50KSB7XG4gICAgdGhpcy5tb3VzZUV2ZW50TGlzdGVuZXIoZXZlbnQsIE1PVVNFTU9WRV9FVkVOVF9UWVBFKTtcbiAgfVxuXG4gIGFkZE1vdXNlVXBIYW5kbGVyKG1vdXNlVXBIYW5kbGVyKSB7XG4gICAgY29uc3QgbW91c2VVcEhhbmRsZXJzID0gdGhpcy5oYW5kbGVyc01hcFsgTU9VU0VVUF9FVkVOVF9UWVBFIF07XG5cbiAgICBtb3VzZVVwSGFuZGxlcnMucHVzaChtb3VzZVVwSGFuZGxlcik7XG4gIH1cblxuICBhZGRNb3VzZURvd25IYW5kbGVyKG1vdXNlRG93bkhhbmRsZXIpIHtcbiAgICBjb25zdCBtb3VzZURvd25IYW5kbGVycyA9IHRoaXMuaGFuZGxlcnNNYXBbIE1PVVNFRE9XTl9FVkVOVF9UWVBFIF07XG5cbiAgICBtb3VzZURvd25IYW5kbGVycy5wdXNoKG1vdXNlRG93bkhhbmRsZXIpO1xuICB9XG5cbiAgYWRkTW91c2VNb3ZlSGFuZGxlcihtb3VzZU1vdmVIYW5kbGVyKSB7XG4gICAgY29uc3QgbW91c2VNb3ZlSGFuZGxlcnMgPSB0aGlzLmhhbmRsZXJzTWFwWyBNT1VTRU1PVkVfRVZFTlRfVFlQRSBdO1xuXG4gICAgbW91c2VNb3ZlSGFuZGxlcnMucHVzaChtb3VzZU1vdmVIYW5kbGVyKTtcbiAgfVxuXG4gIGFkZE1vdXNlV2hlZWxIYW5kbGVyKG1vdXNlV2hlZWxIYW5kbGVyKSB7XG4gICAgY29uc3QgbW91c2VXaGVlbEhhbmRsZXJzID0gdGhpcy5oYW5kbGVyc01hcFsgV0hFRUxfRVZFTlRfVFlQRSBdO1xuXG4gICAgbW91c2VXaGVlbEhhbmRsZXJzLnB1c2gobW91c2VXaGVlbEhhbmRsZXIpO1xuICB9XG5cbiAgaW5pdGlhbGlzZShjYW52YXMpIHtcbiAgICAgIGNvbnN0IGNhbnZhc0RPTUVsZW1lbnQgPSBjYW52YXMuZ2V0RE9NRWxlbWVudCgpLFxuICAgICAgICAgICAgd2hlZWxFdmVudExpc3RlbmVyID0gdGhpcy53aGVlbEV2ZW50TGlzdGVuZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICAgIG1vdXNlVXBFdmVudExpc3RlbmVyID0gdGhpcy5tb3VzZVVwRXZlbnRMaXN0ZW5lci5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgbW91c2VEb3duRXZlbnRMaXN0ZW5lciA9IHRoaXMubW91c2VEb3duRXZlbnRMaXN0ZW5lci5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgbW91c2VNb3ZlRXZlbnRMaXN0ZW5lciA9IHRoaXMubW91c2VNb3ZlRXZlbnRMaXN0ZW5lci5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5oYW5kbGVyc01hcFsgV0hFRUxfRVZFTlRfVFlQRSBdID0gW107XG4gICAgdGhpcy5oYW5kbGVyc01hcFsgTU9VU0VVUF9FVkVOVF9UWVBFIF0gPSBbXTtcbiAgICB0aGlzLmhhbmRsZXJzTWFwWyBNT1VTRURPV05fRVZFTlRfVFlQRSBdID0gW107XG4gICAgdGhpcy5oYW5kbGVyc01hcFsgTU9VU0VNT1ZFX0VWRU5UX1RZUEUgXSA9IFtdO1xuXG4gICAgY2FudmFzRE9NRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFdIRUVMX0VWRU5UX1RZUEUsIHdoZWVsRXZlbnRMaXN0ZW5lcik7XG4gICAgY2FudmFzRE9NRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKE1PVVNFVVBfRVZFTlRfVFlQRSwgbW91c2VVcEV2ZW50TGlzdGVuZXIpO1xuICAgIGNhbnZhc0RPTUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihNT1VTRURPV05fRVZFTlRfVFlQRSwgbW91c2VEb3duRXZlbnRMaXN0ZW5lcik7XG4gICAgY2FudmFzRE9NRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKE1PVVNFTU9WRV9FVkVOVF9UWVBFLCBtb3VzZU1vdmVFdmVudExpc3RlbmVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBoYW5kbGVyc01hcCA9IHt9LFxuICAgICAgICAgIG1vdXNlRG93biA9IGZhbHNlLCAgLy8vXG5cdFx0XHRcdFx0bW91c2VFdmVudHMgPSBuZXcgTW91c2VFdmVudHMoaGFuZGxlcnNNYXAsIG1vdXNlRG93bik7XG5cbiAgICByZXR1cm4gbW91c2VFdmVudHM7XG4gIH1cbn1cblxuZnVuY3Rpb24gbW91c2VXaGVlbERlbHRhRnJvbUV2ZW50KGV2ZW50KSB7XG4gIGNvbnN0IHsgd2hlZWxEZWx0YSB9ID0gZXZlbnQsXG4gICAgICAgIG1vdXNlV2hlZWxEZWx0YSA9IE1hdGgubWF4KC0xLCBNYXRoLm1pbigxLCB3aGVlbERlbHRhKSk7IC8vL1xuXG4gIHJldHVybiBtb3VzZVdoZWVsRGVsdGE7XG59XG5cbmZ1bmN0aW9uIG1vdXNlQ29vcmRpbmF0ZXNGcm9tRXZlbnQoZXZlbnQpIHtcbiAgY29uc3QgeyB0YXJnZXQsIGNsaWVudFgsIGNsaWVudFkgfSA9IGV2ZW50LFxuICAgICAgICBjYW52YXNET01FbGVtZW50ID0gdGFyZ2V0LCAgLy8vXG4gICAgICAgIGJvdW5kaW5nQ2xpZW50UmVjdCA9IGNhbnZhc0RPTUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICAgIHsgdG9wLCBsZWZ0IH0gPSBib3VuZGluZ0NsaWVudFJlY3QsXG4gICAgICAgIG1vdXNlQ29vcmRpbmF0ZXMgPSBbXG4gICAgICAgICAgY2xpZW50WCAtIGxlZnQsXG4gICAgICAgICAgdG9wIC0gY2xpZW50WVxuICAgICAgICBdO1xuXG4gIHJldHVybiBtb3VzZUNvb3JkaW5hdGVzO1xufVxuIl0sIm5hbWVzIjpbIk1vdXNlRXZlbnRzIiwiaGFuZGxlcnNNYXAiLCJtb3VzZURvd24iLCJ3aGVlbEV2ZW50TGlzdGVuZXIiLCJldmVudCIsImhhbmRsZXJzIiwibW91c2VXaGVlbERlbHRhIiwibW91c2VXaGVlbERlbHRhRnJvbUV2ZW50IiwiZm9yRWFjaCIsImhhbmRsZXIiLCJwcmV2ZW50RGVmYXVsdCIsIm1vdXNlRXZlbnRMaXN0ZW5lciIsImV2ZW50VHlwZSIsIm1vdXNlQ29vcmRpbmF0ZXMiLCJtb3VzZUNvb3JkaW5hdGVzRnJvbUV2ZW50IiwibW91c2VVcEV2ZW50TGlzdGVuZXIiLCJtb3VzZURvd25FdmVudExpc3RlbmVyIiwibW91c2VNb3ZlRXZlbnRMaXN0ZW5lciIsImFkZE1vdXNlVXBIYW5kbGVyIiwibW91c2VVcEhhbmRsZXIiLCJtb3VzZVVwSGFuZGxlcnMiLCJwdXNoIiwiYWRkTW91c2VEb3duSGFuZGxlciIsIm1vdXNlRG93bkhhbmRsZXIiLCJtb3VzZURvd25IYW5kbGVycyIsImFkZE1vdXNlTW92ZUhhbmRsZXIiLCJtb3VzZU1vdmVIYW5kbGVyIiwibW91c2VNb3ZlSGFuZGxlcnMiLCJhZGRNb3VzZVdoZWVsSGFuZGxlciIsIm1vdXNlV2hlZWxIYW5kbGVyIiwibW91c2VXaGVlbEhhbmRsZXJzIiwiaW5pdGlhbGlzZSIsImNhbnZhcyIsImNhbnZhc0RPTUVsZW1lbnQiLCJnZXRET01FbGVtZW50IiwiYmluZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJmcm9tTm90aGluZyIsIm1vdXNlRXZlbnRzIiwid2hlZWxEZWx0YSIsIk1hdGgiLCJtYXgiLCJtaW4iLCJ0YXJnZXQiLCJjbGllbnRYIiwiY2xpZW50WSIsImJvdW5kaW5nQ2xpZW50UmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsImxlZnQiXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7O0FBRXFGLEdBQWUsQ0FBZixXQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUUzRkEs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
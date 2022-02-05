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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXNjZWxsYW5lb3VzL21vdXNlRXZlbnRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBXSEVFTF9FVkVOVF9UWVBFLCBNT1VTRVVQX0VWRU5UX1RZUEUsIE1PVVNFRE9XTl9FVkVOVF9UWVBFLCBNT1VTRU1PVkVfRVZFTlRfVFlQRSB9IGZyb20gXCIuLi9ldmVudFR5cGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vdXNlRXZlbnRzIHtcbiAgY29uc3RydWN0b3IoaGFuZGxlcnNNYXAsIG1vdXNlRG93bikge1xuICAgIHRoaXMuaGFuZGxlcnNNYXAgPSBoYW5kbGVyc01hcDtcbiAgICB0aGlzLm1vdXNlRG93biA9IG1vdXNlRG93bjtcbiAgfVxuXG4gIHdoZWVsRXZlbnRMaXN0ZW5lcihldmVudCkge1xuICAgIGNvbnN0IGhhbmRsZXJzID0gdGhpcy5oYW5kbGVyc01hcFsgV0hFRUxfRVZFTlRfVFlQRSBdLFxuICAgICAgICAgIG1vdXNlV2hlZWxEZWx0YSA9IG1vdXNlV2hlZWxEZWx0YUZyb21FdmVudChldmVudCk7XG5cbiAgICBoYW5kbGVycy5mb3JFYWNoKChoYW5kbGVyKSA9PiBoYW5kbGVyKG1vdXNlV2hlZWxEZWx0YSkpO1xuXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIG1vdXNlRXZlbnRMaXN0ZW5lcihldmVudCwgZXZlbnRUeXBlKSB7XG4gICAgY29uc3QgaGFuZGxlcnMgPSB0aGlzLmhhbmRsZXJzTWFwW2V2ZW50VHlwZV0sXG4gICAgICAgICAgbW91c2VDb29yZGluYXRlcyA9IG1vdXNlQ29vcmRpbmF0ZXNGcm9tRXZlbnQoZXZlbnQpO1xuXG4gICAgaGFuZGxlcnMuZm9yRWFjaCgoaGFuZGxlcikgPT4gaGFuZGxlcihtb3VzZUNvb3JkaW5hdGVzLCB0aGlzLm1vdXNlRG93bikpO1xuXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIG1vdXNlVXBFdmVudExpc3RlbmVyKGV2ZW50KSB7XG4gICAgdGhpcy5tb3VzZURvd24gPSBmYWxzZTtcblxuICAgIHRoaXMubW91c2VFdmVudExpc3RlbmVyKGV2ZW50LCBNT1VTRVVQX0VWRU5UX1RZUEUpO1xuICB9XG5cblx0bW91c2VEb3duRXZlbnRMaXN0ZW5lcihldmVudCkge1xuICAgIHRoaXMubW91c2VEb3duID0gdHJ1ZTtcblxuICAgIHRoaXMubW91c2VFdmVudExpc3RlbmVyKGV2ZW50LCBNT1VTRURPV05fRVZFTlRfVFlQRSk7XG4gIH1cblxuXHRtb3VzZU1vdmVFdmVudExpc3RlbmVyKGV2ZW50KSB7XG4gICAgdGhpcy5tb3VzZUV2ZW50TGlzdGVuZXIoZXZlbnQsIE1PVVNFTU9WRV9FVkVOVF9UWVBFKTtcbiAgfVxuXG4gIGFkZE1vdXNlVXBIYW5kbGVyKG1vdXNlVXBIYW5kbGVyKSB7XG4gICAgY29uc3QgbW91c2VVcEhhbmRsZXJzID0gdGhpcy5oYW5kbGVyc01hcFsgTU9VU0VVUF9FVkVOVF9UWVBFIF07XG5cbiAgICBtb3VzZVVwSGFuZGxlcnMucHVzaChtb3VzZVVwSGFuZGxlcik7XG4gIH1cblxuICBhZGRNb3VzZURvd25IYW5kbGVyKG1vdXNlRG93bkhhbmRsZXIpIHtcbiAgICBjb25zdCBtb3VzZURvd25IYW5kbGVycyA9IHRoaXMuaGFuZGxlcnNNYXBbIE1PVVNFRE9XTl9FVkVOVF9UWVBFIF07XG5cbiAgICBtb3VzZURvd25IYW5kbGVycy5wdXNoKG1vdXNlRG93bkhhbmRsZXIpO1xuICB9XG5cbiAgYWRkTW91c2VNb3ZlSGFuZGxlcihtb3VzZU1vdmVIYW5kbGVyKSB7XG4gICAgY29uc3QgbW91c2VNb3ZlSGFuZGxlcnMgPSB0aGlzLmhhbmRsZXJzTWFwWyBNT1VTRU1PVkVfRVZFTlRfVFlQRSBdO1xuXG4gICAgbW91c2VNb3ZlSGFuZGxlcnMucHVzaChtb3VzZU1vdmVIYW5kbGVyKTtcbiAgfVxuXG4gIGFkZE1vdXNlV2hlZWxIYW5kbGVyKG1vdXNlV2hlZWxIYW5kbGVyKSB7XG4gICAgY29uc3QgbW91c2VXaGVlbEhhbmRsZXJzID0gdGhpcy5oYW5kbGVyc01hcFsgV0hFRUxfRVZFTlRfVFlQRSBdO1xuXG4gICAgbW91c2VXaGVlbEhhbmRsZXJzLnB1c2gobW91c2VXaGVlbEhhbmRsZXIpO1xuICB9XG5cbiAgaW5pdGlhbGlzZShjYW52YXMpIHtcbiAgICAgIGNvbnN0IGNhbnZhc0RPTUVsZW1lbnQgPSBjYW52YXMuZ2V0RE9NRWxlbWVudCgpLFxuICAgICAgICAgICAgd2hlZWxFdmVudExpc3RlbmVyID0gdGhpcy53aGVlbEV2ZW50TGlzdGVuZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICAgIG1vdXNlVXBFdmVudExpc3RlbmVyID0gdGhpcy5tb3VzZVVwRXZlbnRMaXN0ZW5lci5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgbW91c2VEb3duRXZlbnRMaXN0ZW5lciA9IHRoaXMubW91c2VEb3duRXZlbnRMaXN0ZW5lci5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgbW91c2VNb3ZlRXZlbnRMaXN0ZW5lciA9IHRoaXMubW91c2VNb3ZlRXZlbnRMaXN0ZW5lci5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5oYW5kbGVyc01hcFsgV0hFRUxfRVZFTlRfVFlQRSBdID0gW107XG4gICAgdGhpcy5oYW5kbGVyc01hcFsgTU9VU0VVUF9FVkVOVF9UWVBFIF0gPSBbXTtcbiAgICB0aGlzLmhhbmRsZXJzTWFwWyBNT1VTRURPV05fRVZFTlRfVFlQRSBdID0gW107XG4gICAgdGhpcy5oYW5kbGVyc01hcFsgTU9VU0VNT1ZFX0VWRU5UX1RZUEUgXSA9IFtdO1xuXG4gICAgY2FudmFzRE9NRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFdIRUVMX0VWRU5UX1RZUEUsIHdoZWVsRXZlbnRMaXN0ZW5lcik7XG4gICAgY2FudmFzRE9NRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKE1PVVNFVVBfRVZFTlRfVFlQRSwgbW91c2VVcEV2ZW50TGlzdGVuZXIpO1xuICAgIGNhbnZhc0RPTUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihNT1VTRURPV05fRVZFTlRfVFlQRSwgbW91c2VEb3duRXZlbnRMaXN0ZW5lcik7XG4gICAgY2FudmFzRE9NRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKE1PVVNFTU9WRV9FVkVOVF9UWVBFLCBtb3VzZU1vdmVFdmVudExpc3RlbmVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBoYW5kbGVyc01hcCA9IHt9LFxuICAgICAgICAgIG1vdXNlRG93biA9IGZhbHNlLCAgLy8vXG5cdFx0XHRcdFx0bW91c2VFdmVudHMgPSBuZXcgTW91c2VFdmVudHMoaGFuZGxlcnNNYXAsIG1vdXNlRG93bik7XG5cbiAgICByZXR1cm4gbW91c2VFdmVudHM7XG4gIH1cbn1cblxuZnVuY3Rpb24gbW91c2VXaGVlbERlbHRhRnJvbUV2ZW50KGV2ZW50KSB7XG4gIGNvbnN0IHsgd2hlZWxEZWx0YSB9ID0gZXZlbnQsXG4gICAgICAgIG1vdXNlV2hlZWxEZWx0YSA9IE1hdGgubWF4KC0xLCBNYXRoLm1pbigxLCB3aGVlbERlbHRhKSk7IC8vL1xuXG4gIHJldHVybiBtb3VzZVdoZWVsRGVsdGE7XG59XG5cbmZ1bmN0aW9uIG1vdXNlQ29vcmRpbmF0ZXNGcm9tRXZlbnQoZXZlbnQpIHtcbiAgY29uc3QgeyB0YXJnZXQsIGNsaWVudFgsIGNsaWVudFkgfSA9IGV2ZW50LFxuICAgICAgICBjYW52YXNET01FbGVtZW50ID0gdGFyZ2V0LCAgLy8vXG4gICAgICAgIGJvdW5kaW5nQ2xpZW50UmVjdCA9IGNhbnZhc0RPTUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICAgIHsgdG9wLCBsZWZ0IH0gPSBib3VuZGluZ0NsaWVudFJlY3QsXG4gICAgICAgIG1vdXNlQ29vcmRpbmF0ZXMgPSBbXG4gICAgICAgICAgY2xpZW50WCAtIGxlZnQsXG4gICAgICAgICAgdG9wIC0gY2xpZW50WVxuICAgICAgICBdO1xuXG4gIHJldHVybiBtb3VzZUNvb3JkaW5hdGVzO1xufVxuIl0sIm5hbWVzIjpbIk1vdXNlRXZlbnRzIiwiaGFuZGxlcnNNYXAiLCJtb3VzZURvd24iLCJ3aGVlbEV2ZW50TGlzdGVuZXIiLCJldmVudCIsImhhbmRsZXJzIiwiV0hFRUxfRVZFTlRfVFlQRSIsIm1vdXNlV2hlZWxEZWx0YSIsIm1vdXNlV2hlZWxEZWx0YUZyb21FdmVudCIsImZvckVhY2giLCJoYW5kbGVyIiwicHJldmVudERlZmF1bHQiLCJtb3VzZUV2ZW50TGlzdGVuZXIiLCJldmVudFR5cGUiLCJtb3VzZUNvb3JkaW5hdGVzIiwibW91c2VDb29yZGluYXRlc0Zyb21FdmVudCIsIm1vdXNlVXBFdmVudExpc3RlbmVyIiwiTU9VU0VVUF9FVkVOVF9UWVBFIiwibW91c2VEb3duRXZlbnRMaXN0ZW5lciIsIk1PVVNFRE9XTl9FVkVOVF9UWVBFIiwibW91c2VNb3ZlRXZlbnRMaXN0ZW5lciIsIk1PVVNFTU9WRV9FVkVOVF9UWVBFIiwiYWRkTW91c2VVcEhhbmRsZXIiLCJtb3VzZVVwSGFuZGxlciIsIm1vdXNlVXBIYW5kbGVycyIsInB1c2giLCJhZGRNb3VzZURvd25IYW5kbGVyIiwibW91c2VEb3duSGFuZGxlciIsIm1vdXNlRG93bkhhbmRsZXJzIiwiYWRkTW91c2VNb3ZlSGFuZGxlciIsIm1vdXNlTW92ZUhhbmRsZXIiLCJtb3VzZU1vdmVIYW5kbGVycyIsImFkZE1vdXNlV2hlZWxIYW5kbGVyIiwibW91c2VXaGVlbEhhbmRsZXIiLCJtb3VzZVdoZWVsSGFuZGxlcnMiLCJpbml0aWFsaXNlIiwiY2FudmFzIiwiY2FudmFzRE9NRWxlbWVudCIsImdldERPTUVsZW1lbnQiLCJiaW5kIiwiYWRkRXZlbnRMaXN0ZW5lciIsImZyb21Ob3RoaW5nIiwibW91c2VFdmVudHMiLCJ3aGVlbERlbHRhIiwiTWF0aCIsIm1heCIsIm1pbiIsInRhcmdldCIsImNsaWVudFgiLCJjbGllbnRZIiwiYm91bmRpbmdDbGllbnRSZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwi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
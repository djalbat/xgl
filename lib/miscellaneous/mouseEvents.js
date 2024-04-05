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
function _class_call_check(instance, Constructor) {
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
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _define_property(obj, key, value) {
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
        _class_call_check(this, MouseEvents);
        _define_property(this, "wheelEventListener", function(event) {
            var handlers = _this.handlersMap[_eventTypes.WHEEL_EVENT_TYPE], mouseWheelDelta = mouseWheelDeltaFromEvent(event);
            handlers.forEach(function(handler) {
                handler(mouseWheelDelta);
            });
            event.preventDefault();
        });
        _define_property(this, "mouseEventListener", function(event, eventType) {
            var handlers = _this.handlersMap[eventType], mouseCoordinates = mouseCoordinatesFromEvent(event);
            handlers.forEach(function(handler) {
                handler(mouseCoordinates, _this.mouseDown);
            });
            event.preventDefault();
        });
        _define_property(this, "mouseUpEventListener", function(event) {
            _this.mouseDown = false;
            _this.mouseEventListener(event, _eventTypes.MOUSEUP_EVENT_TYPE);
        });
        _define_property(this, "mouseDownEventListener", function(event) {
            _this.mouseDown = true;
            _this.mouseEventListener(event, _eventTypes.MOUSEDOWN_EVENT_TYPE);
        });
        _define_property(this, "mouseMoveEventListener", function(event) {
            _this.mouseEventListener(event, _eventTypes.MOUSEMOVE_EVENT_TYPE);
        });
        this.handlersMap = handlersMap;
        this.mouseDown = mouseDown;
    }
    _create_class(MouseEvents, [
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXNjZWxsYW5lb3VzL21vdXNlRXZlbnRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBXSEVFTF9FVkVOVF9UWVBFLCBNT1VTRVVQX0VWRU5UX1RZUEUsIE1PVVNFRE9XTl9FVkVOVF9UWVBFLCBNT1VTRU1PVkVfRVZFTlRfVFlQRSB9IGZyb20gXCIuLi9ldmVudFR5cGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vdXNlRXZlbnRzIHtcbiAgY29uc3RydWN0b3IoaGFuZGxlcnNNYXAsIG1vdXNlRG93bikge1xuICAgIHRoaXMuaGFuZGxlcnNNYXAgPSBoYW5kbGVyc01hcDtcbiAgICB0aGlzLm1vdXNlRG93biA9IG1vdXNlRG93bjtcbiAgfVxuXG4gIHdoZWVsRXZlbnRMaXN0ZW5lciA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZXJzID0gdGhpcy5oYW5kbGVyc01hcFsgV0hFRUxfRVZFTlRfVFlQRSBdLFxuICAgICAgICAgIG1vdXNlV2hlZWxEZWx0YSA9IG1vdXNlV2hlZWxEZWx0YUZyb21FdmVudChldmVudCk7XG5cbiAgICBoYW5kbGVycy5mb3JFYWNoKChoYW5kbGVyKSA9PiB7XG4gICAgICBoYW5kbGVyKG1vdXNlV2hlZWxEZWx0YSk7XG4gICAgfSk7XG5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbiAgbW91c2VFdmVudExpc3RlbmVyID0gKGV2ZW50LCBldmVudFR5cGUpID0+IHtcbiAgICBjb25zdCBoYW5kbGVycyA9IHRoaXMuaGFuZGxlcnNNYXBbZXZlbnRUeXBlXSxcbiAgICAgICAgICBtb3VzZUNvb3JkaW5hdGVzID0gbW91c2VDb29yZGluYXRlc0Zyb21FdmVudChldmVudCk7XG5cbiAgICBoYW5kbGVycy5mb3JFYWNoKChoYW5kbGVyKSA9PiB7XG4gICAgICBoYW5kbGVyKG1vdXNlQ29vcmRpbmF0ZXMsIHRoaXMubW91c2VEb3duKTtcbiAgICB9KTtcblxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICBtb3VzZVVwRXZlbnRMaXN0ZW5lciA9IChldmVudCkgPT4ge1xuICAgIHRoaXMubW91c2VEb3duID0gZmFsc2U7XG5cbiAgICB0aGlzLm1vdXNlRXZlbnRMaXN0ZW5lcihldmVudCwgTU9VU0VVUF9FVkVOVF9UWVBFKTtcbiAgfVxuXG5cdG1vdXNlRG93bkV2ZW50TGlzdGVuZXIgPSAoZXZlbnQpID0+IHtcbiAgICB0aGlzLm1vdXNlRG93biA9IHRydWU7XG5cbiAgICB0aGlzLm1vdXNlRXZlbnRMaXN0ZW5lcihldmVudCwgTU9VU0VET1dOX0VWRU5UX1RZUEUpO1xuICB9XG5cblx0bW91c2VNb3ZlRXZlbnRMaXN0ZW5lciA9IChldmVudCkgPT4ge1xuICAgIHRoaXMubW91c2VFdmVudExpc3RlbmVyKGV2ZW50LCBNT1VTRU1PVkVfRVZFTlRfVFlQRSk7XG4gIH1cblxuICBhZGRNb3VzZVVwSGFuZGxlcihtb3VzZVVwSGFuZGxlcikge1xuICAgIGNvbnN0IG1vdXNlVXBIYW5kbGVycyA9IHRoaXMuaGFuZGxlcnNNYXBbIE1PVVNFVVBfRVZFTlRfVFlQRSBdO1xuXG4gICAgbW91c2VVcEhhbmRsZXJzLnB1c2gobW91c2VVcEhhbmRsZXIpO1xuICB9XG5cbiAgYWRkTW91c2VEb3duSGFuZGxlcihtb3VzZURvd25IYW5kbGVyKSB7XG4gICAgY29uc3QgbW91c2VEb3duSGFuZGxlcnMgPSB0aGlzLmhhbmRsZXJzTWFwWyBNT1VTRURPV05fRVZFTlRfVFlQRSBdO1xuXG4gICAgbW91c2VEb3duSGFuZGxlcnMucHVzaChtb3VzZURvd25IYW5kbGVyKTtcbiAgfVxuXG4gIGFkZE1vdXNlTW92ZUhhbmRsZXIobW91c2VNb3ZlSGFuZGxlcikge1xuICAgIGNvbnN0IG1vdXNlTW92ZUhhbmRsZXJzID0gdGhpcy5oYW5kbGVyc01hcFsgTU9VU0VNT1ZFX0VWRU5UX1RZUEUgXTtcblxuICAgIG1vdXNlTW92ZUhhbmRsZXJzLnB1c2gobW91c2VNb3ZlSGFuZGxlcik7XG4gIH1cblxuICBhZGRNb3VzZVdoZWVsSGFuZGxlcihtb3VzZVdoZWVsSGFuZGxlcikge1xuICAgIGNvbnN0IG1vdXNlV2hlZWxIYW5kbGVycyA9IHRoaXMuaGFuZGxlcnNNYXBbIFdIRUVMX0VWRU5UX1RZUEUgXTtcblxuICAgIG1vdXNlV2hlZWxIYW5kbGVycy5wdXNoKG1vdXNlV2hlZWxIYW5kbGVyKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoY2FudmFzKSB7XG4gICAgICBjb25zdCBjYW52YXNET01FbGVtZW50ID0gY2FudmFzLmdldERPTUVsZW1lbnQoKTtcblxuICAgIHRoaXMuaGFuZGxlcnNNYXBbIFdIRUVMX0VWRU5UX1RZUEUgXSA9IFtdO1xuICAgIHRoaXMuaGFuZGxlcnNNYXBbIE1PVVNFVVBfRVZFTlRfVFlQRSBdID0gW107XG4gICAgdGhpcy5oYW5kbGVyc01hcFsgTU9VU0VET1dOX0VWRU5UX1RZUEUgXSA9IFtdO1xuICAgIHRoaXMuaGFuZGxlcnNNYXBbIE1PVVNFTU9WRV9FVkVOVF9UWVBFIF0gPSBbXTtcblxuICAgIGNhbnZhc0RPTUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihXSEVFTF9FVkVOVF9UWVBFLCB0aGlzLndoZWVsRXZlbnRMaXN0ZW5lcik7XG4gICAgY2FudmFzRE9NRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKE1PVVNFVVBfRVZFTlRfVFlQRSwgdGhpcy5tb3VzZVVwRXZlbnRMaXN0ZW5lcik7XG4gICAgY2FudmFzRE9NRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKE1PVVNFRE9XTl9FVkVOVF9UWVBFLCB0aGlzLm1vdXNlRG93bkV2ZW50TGlzdGVuZXIpO1xuICAgIGNhbnZhc0RPTUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihNT1VTRU1PVkVfRVZFTlRfVFlQRSwgdGhpcy5tb3VzZU1vdmVFdmVudExpc3RlbmVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBoYW5kbGVyc01hcCA9IHt9LFxuICAgICAgICAgIG1vdXNlRG93biA9IGZhbHNlLCAgLy8vXG5cdFx0XHRcdFx0bW91c2VFdmVudHMgPSBuZXcgTW91c2VFdmVudHMoaGFuZGxlcnNNYXAsIG1vdXNlRG93bik7XG5cbiAgICByZXR1cm4gbW91c2VFdmVudHM7XG4gIH1cbn1cblxuZnVuY3Rpb24gbW91c2VXaGVlbERlbHRhRnJvbUV2ZW50KGV2ZW50KSB7XG4gIGNvbnN0IHsgd2hlZWxEZWx0YSB9ID0gZXZlbnQsXG4gICAgICAgIG1vdXNlV2hlZWxEZWx0YSA9IE1hdGgubWF4KC0xLCBNYXRoLm1pbigxLCB3aGVlbERlbHRhKSk7IC8vL1xuXG4gIHJldHVybiBtb3VzZVdoZWVsRGVsdGE7XG59XG5cbmZ1bmN0aW9uIG1vdXNlQ29vcmRpbmF0ZXNGcm9tRXZlbnQoZXZlbnQpIHtcbiAgY29uc3QgeyB0YXJnZXQsIGNsaWVudFgsIGNsaWVudFkgfSA9IGV2ZW50LFxuICAgICAgICBjYW52YXNET01FbGVtZW50ID0gdGFyZ2V0LCAgLy8vXG4gICAgICAgIGJvdW5kaW5nQ2xpZW50UmVjdCA9IGNhbnZhc0RPTUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICAgIHsgdG9wLCBsZWZ0IH0gPSBib3VuZGluZ0NsaWVudFJlY3QsXG4gICAgICAgIG1vdXNlQ29vcmRpbmF0ZXMgPSBbXG4gICAgICAgICAgY2xpZW50WCAtIGxlZnQsXG4gICAgICAgICAgdG9wIC0gY2xpZW50WVxuICAgICAgICBdO1xuXG4gIHJldHVybiBtb3VzZUNvb3JkaW5hdGVzO1xufVxuIl0sIm5hbWVzIjpbIk1vdXNlRXZlbnRzIiwiaGFuZGxlcnNNYXAiLCJtb3VzZURvd24iLCJ3aGVlbEV2ZW50TGlzdGVuZXIiLCJldmVudCIsImhhbmRsZXJzIiwiV0hFRUxfRVZFTlRfVFlQRSIsIm1vdXNlV2hlZWxEZWx0YSIsIm1vdXNlV2hlZWxEZWx0YUZyb21FdmVudCIsImZvckVhY2giLCJoYW5kbGVyIiwicHJldmVudERlZmF1bHQiLCJtb3VzZUV2ZW50TGlzdGVuZXIiLCJldmVudFR5cGUiLCJtb3VzZUNvb3JkaW5hdGVzIiwibW91c2VDb29yZGluYXRlc0Zyb21FdmVudCIsIm1vdXNlVXBFdmVudExpc3RlbmVyIiwiTU9VU0VVUF9FVkVOVF9UWVBFIiwibW91c2VEb3duRXZlbnRMaXN0ZW5lciIsIk1PVVNFRE9XTl9FVkVOVF9UWVBFIiwibW91c2VNb3ZlRXZlbnRMaXN0ZW5lciIsIk1PVVNFTU9WRV9FVkVOVF9UWVBFIiwiYWRkTW91c2VVcEhhbmRsZXIiLCJtb3VzZVVwSGFuZGxlciIsIm1vdXNlVXBIYW5kbGVycyIsInB1c2giLCJhZGRNb3VzZURvd25IYW5kbGVyIiwibW91c2VEb3duSGFuZGxlciIsIm1vdXNlRG93bkhhbmRsZXJzIiwiYWRkTW91c2VNb3ZlSGFuZGxlciIsIm1vdXNlTW92ZUhhbmRsZXIiLCJtb3VzZU1vdmVIYW5kbGVycyIsImFkZE1vdXNlV2hlZWxIYW5kbGVyIiwibW91c2VXaGVlbEhhbmRsZXIiLCJtb3VzZVdoZWVsSGFuZGxlcnMiLCJpbml0aWFsaXNlIiwiY2FudmFzIiwiY2FudmFzRE9NRWxlbWVudCIsImdldERPTUVsZW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZnJvbU5vdGhpbmciLCJtb3VzZUV2ZW50cyIsIndoZWVsRGVsdGEiLCJNYXRoIiwibWF4IiwibWluIiwidGFyZ2V0IiwiY2xpZW50WCIsImNsaWVudFkiLCJib3VuZGluZ0NsaWVudFJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0b3AiLCJsZWZ0Il0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBSXFCQTs7OzBCQUY0RTs7Ozs7Ozs7Ozs7Ozs7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
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _constants = require("../constants");
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
var MouseEvents = function() {
    function MouseEvents(handlersMap, mouseDown) {
        _classCallCheck(this, MouseEvents);
        this.handlersMap = handlersMap;
        this.mouseDown = mouseDown;
    }
    _createClass(MouseEvents, [
        {
            key: "mouseEventListener",
            value: function mouseEventListener(event, eventType) {
                var handlers = this.handlersMap[eventType], mouseCoordinates = mouseCoordinatesFromEvent(event);
                handlers.forEach((function(handler) {
                    return handler(mouseCoordinates, this.mouseDown);
                }).bind(this));
                event.preventDefault();
            }
        },
        {
            key: "mouseUpEventListener",
            value: function mouseUpEventListener(event) {
                this.mouseDown = false;
                this.mouseEventListener(event, _constants.MOUSE_UP);
            }
        },
        {
            key: "mouseDownEventListener",
            value: function mouseDownEventListener(event) {
                this.mouseDown = true;
                this.mouseEventListener(event, _constants.MOUSE_DOWN);
            }
        },
        {
            key: "mouseMoveEventListener",
            value: function mouseMoveEventListener(event) {
                this.mouseEventListener(event, _constants.MOUSE_MOVE);
            }
        },
        {
            key: "mouseWheelEventListener",
            value: function mouseWheelEventListener(event) {
                var handlers = this.handlersMap[_constants.MOUSE_WHEEL], mouseWheelDelta = mouseWheelDeltaFromEvent(event);
                handlers.forEach(function(handler) {
                    return handler(mouseWheelDelta);
                });
                event.preventDefault();
            }
        },
        {
            key: "addMouseUpHandler",
            value: function addMouseUpHandler(mouseUpHandler) {
                var mouseUpHandlers = this.handlersMap[_constants.MOUSE_UP];
                mouseUpHandlers.push(mouseUpHandler);
            }
        },
        {
            key: "addMouseDownHandler",
            value: function addMouseDownHandler(mouseDownHandler) {
                var mouseDownHandlers = this.handlersMap[_constants.MOUSE_DOWN];
                mouseDownHandlers.push(mouseDownHandler);
            }
        },
        {
            key: "addMouseMoveHandler",
            value: function addMouseMoveHandler(mouseMoveHandler) {
                var mouseMoveHandlers = this.handlersMap[_constants.MOUSE_MOVE];
                mouseMoveHandlers.push(mouseMoveHandler);
            }
        },
        {
            key: "addMouseWheelHandler",
            value: function addMouseWheelHandler(mouseWheelHandler) {
                var mouseWheelHandlers = this.handlersMap[_constants.MOUSE_WHEEL];
                mouseWheelHandlers.push(mouseWheelHandler);
            }
        },
        {
            key: "initialise",
            value: function initialise(canvas) {
                var canvasDOMElement = canvas.getDOMElement(), mouseUpEventListener = this.mouseUpEventListener.bind(this), mouseDownEventListener = this.mouseDownEventListener.bind(this), mouseMoveEventListener = this.mouseMoveEventListener.bind(this), mouseWheelEventListener = this.mouseWheelEventListener.bind(this);
                this.handlersMap[_constants.MOUSE_UP] = [];
                this.handlersMap[_constants.MOUSE_DOWN] = [];
                this.handlersMap[_constants.MOUSE_MOVE] = [];
                this.handlersMap[_constants.MOUSE_WHEEL] = [];
                canvasDOMElement.addEventListener("mouseup", mouseUpEventListener);
                canvasDOMElement.addEventListener("mousedown", mouseDownEventListener);
                canvasDOMElement.addEventListener("mousemove", mouseMoveEventListener);
                canvasDOMElement.addEventListener("mousewheel", mouseWheelEventListener);
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var handlersMap = {
                }, mouseDown = false, mouseEvents = new MouseEvents(handlersMap, mouseDown);
                return mouseEvents;
            }
        }
    ]);
    return MouseEvents;
}();
exports.default = MouseEvents;
function mouseWheelDeltaFromEvent(event) {
    var mouseWheelDelta = Math.max(-1, Math.min(1, event.wheelDelta)); ///
    return mouseWheelDelta;
}
function mouseCoordinatesFromEvent(event) {
    var target = event.target, clientX = event.clientX, clientY = event.clientY, canvasDOMElement = target, boundingClientRect = canvasDOMElement.getBoundingClientRect(), top = boundingClientRect.top, left = boundingClientRect.left, mouseCoordinates = [
        clientX - left,
        top - clientY, 
    ];
    return mouseCoordinates;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXNjZWxsYW5lb3VzL21vdXNlRXZlbnRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBNT1VTRV9VUCwgTU9VU0VfRE9XTiwgTU9VU0VfTU9WRSwgTU9VU0VfV0hFRUwgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vdXNlRXZlbnRzIHtcbiAgY29uc3RydWN0b3IoaGFuZGxlcnNNYXAsIG1vdXNlRG93bikge1xuICAgIHRoaXMuaGFuZGxlcnNNYXAgPSBoYW5kbGVyc01hcDtcbiAgICB0aGlzLm1vdXNlRG93biA9IG1vdXNlRG93bjtcbiAgfVxuXG4gIG1vdXNlRXZlbnRMaXN0ZW5lcihldmVudCwgZXZlbnRUeXBlKSB7XG4gICAgY29uc3QgaGFuZGxlcnMgPSB0aGlzLmhhbmRsZXJzTWFwW2V2ZW50VHlwZV0sXG4gICAgICAgICAgbW91c2VDb29yZGluYXRlcyA9IG1vdXNlQ29vcmRpbmF0ZXNGcm9tRXZlbnQoZXZlbnQpO1xuXG4gICAgaGFuZGxlcnMuZm9yRWFjaCgoaGFuZGxlcikgPT4gaGFuZGxlcihtb3VzZUNvb3JkaW5hdGVzLCB0aGlzLm1vdXNlRG93bikpO1xuXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIG1vdXNlVXBFdmVudExpc3RlbmVyKGV2ZW50KSB7XG4gICAgdGhpcy5tb3VzZURvd24gPSBmYWxzZTtcblxuICAgIHRoaXMubW91c2VFdmVudExpc3RlbmVyKGV2ZW50LCBNT1VTRV9VUCk7XG4gIH1cblxuXHRtb3VzZURvd25FdmVudExpc3RlbmVyKGV2ZW50KSB7XG4gICAgdGhpcy5tb3VzZURvd24gPSB0cnVlO1xuXG4gICAgdGhpcy5tb3VzZUV2ZW50TGlzdGVuZXIoZXZlbnQsIE1PVVNFX0RPV04pO1xuICB9XG5cblx0bW91c2VNb3ZlRXZlbnRMaXN0ZW5lcihldmVudCkge1xuICAgIHRoaXMubW91c2VFdmVudExpc3RlbmVyKGV2ZW50LCBNT1VTRV9NT1ZFKTtcbiAgfVxuXG4gIG1vdXNlV2hlZWxFdmVudExpc3RlbmVyKGV2ZW50KSB7XG4gICAgY29uc3QgaGFuZGxlcnMgPSB0aGlzLmhhbmRsZXJzTWFwWyBNT1VTRV9XSEVFTCBdLFxuICAgICAgICAgIG1vdXNlV2hlZWxEZWx0YSA9IG1vdXNlV2hlZWxEZWx0YUZyb21FdmVudChldmVudCk7XG5cbiAgICBoYW5kbGVycy5mb3JFYWNoKChoYW5kbGVyKSA9PiBoYW5kbGVyKG1vdXNlV2hlZWxEZWx0YSkpO1xuXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIGFkZE1vdXNlVXBIYW5kbGVyKG1vdXNlVXBIYW5kbGVyKSB7XG4gICAgY29uc3QgbW91c2VVcEhhbmRsZXJzID0gdGhpcy5oYW5kbGVyc01hcFsgTU9VU0VfVVAgXTtcblxuICAgIG1vdXNlVXBIYW5kbGVycy5wdXNoKG1vdXNlVXBIYW5kbGVyKTtcbiAgfVxuXG4gIGFkZE1vdXNlRG93bkhhbmRsZXIobW91c2VEb3duSGFuZGxlcikge1xuICAgIGNvbnN0IG1vdXNlRG93bkhhbmRsZXJzID0gdGhpcy5oYW5kbGVyc01hcFsgTU9VU0VfRE9XTiBdO1xuXG4gICAgbW91c2VEb3duSGFuZGxlcnMucHVzaChtb3VzZURvd25IYW5kbGVyKTtcbiAgfVxuXG4gIGFkZE1vdXNlTW92ZUhhbmRsZXIobW91c2VNb3ZlSGFuZGxlcikge1xuICAgIGNvbnN0IG1vdXNlTW92ZUhhbmRsZXJzID0gdGhpcy5oYW5kbGVyc01hcFsgTU9VU0VfTU9WRSBdO1xuXG4gICAgbW91c2VNb3ZlSGFuZGxlcnMucHVzaChtb3VzZU1vdmVIYW5kbGVyKTtcbiAgfVxuXG4gIGFkZE1vdXNlV2hlZWxIYW5kbGVyKG1vdXNlV2hlZWxIYW5kbGVyKSB7XG4gICAgY29uc3QgbW91c2VXaGVlbEhhbmRsZXJzID0gdGhpcy5oYW5kbGVyc01hcFsgTU9VU0VfV0hFRUwgXTtcblxuICAgIG1vdXNlV2hlZWxIYW5kbGVycy5wdXNoKG1vdXNlV2hlZWxIYW5kbGVyKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoY2FudmFzKSB7XG4gICAgICBjb25zdCBjYW52YXNET01FbGVtZW50ID0gY2FudmFzLmdldERPTUVsZW1lbnQoKSxcbiAgICAgICAgICAgIG1vdXNlVXBFdmVudExpc3RlbmVyID0gdGhpcy5tb3VzZVVwRXZlbnRMaXN0ZW5lci5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgbW91c2VEb3duRXZlbnRMaXN0ZW5lciA9IHRoaXMubW91c2VEb3duRXZlbnRMaXN0ZW5lci5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgbW91c2VNb3ZlRXZlbnRMaXN0ZW5lciA9IHRoaXMubW91c2VNb3ZlRXZlbnRMaXN0ZW5lci5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgbW91c2VXaGVlbEV2ZW50TGlzdGVuZXIgPSB0aGlzLm1vdXNlV2hlZWxFdmVudExpc3RlbmVyLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLmhhbmRsZXJzTWFwWyBNT1VTRV9VUCBdID0gW107XG4gICAgdGhpcy5oYW5kbGVyc01hcFsgTU9VU0VfRE9XTiBdID0gW107XG4gICAgdGhpcy5oYW5kbGVyc01hcFsgTU9VU0VfTU9WRSBdID0gW107XG4gICAgdGhpcy5oYW5kbGVyc01hcFsgTU9VU0VfV0hFRUwgXSA9IFtdO1xuXG4gICAgY2FudmFzRE9NRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBtb3VzZVVwRXZlbnRMaXN0ZW5lcik7XG5cbiAgICBjYW52YXNET01FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgbW91c2VEb3duRXZlbnRMaXN0ZW5lcik7XG5cbiAgICBjYW52YXNET01FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgbW91c2VNb3ZlRXZlbnRMaXN0ZW5lcik7XG5cbiAgICBjYW52YXNET01FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXdoZWVsXCIsIG1vdXNlV2hlZWxFdmVudExpc3RlbmVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBoYW5kbGVyc01hcCA9IHt9LFxuICAgICAgICAgIG1vdXNlRG93biA9IGZhbHNlLCAgLy8vXG5cdFx0XHRcdFx0bW91c2VFdmVudHMgPSBuZXcgTW91c2VFdmVudHMoaGFuZGxlcnNNYXAsIG1vdXNlRG93bik7XG5cbiAgICByZXR1cm4gbW91c2VFdmVudHM7XG4gIH1cbn1cblxuZnVuY3Rpb24gbW91c2VXaGVlbERlbHRhRnJvbUV2ZW50KGV2ZW50KSB7XG4gIGNvbnN0IG1vdXNlV2hlZWxEZWx0YSA9IE1hdGgubWF4KC0xLCBNYXRoLm1pbigxLCBldmVudC53aGVlbERlbHRhKSk7IC8vL1xuXG4gIHJldHVybiBtb3VzZVdoZWVsRGVsdGE7XG59XG5cbmZ1bmN0aW9uIG1vdXNlQ29vcmRpbmF0ZXNGcm9tRXZlbnQoZXZlbnQpIHtcbiAgY29uc3QgeyB0YXJnZXQsIGNsaWVudFgsIGNsaWVudFkgfSA9IGV2ZW50LFxuICAgICAgICBjYW52YXNET01FbGVtZW50ID0gdGFyZ2V0LCAgLy8vXG4gICAgICAgIGJvdW5kaW5nQ2xpZW50UmVjdCA9IGNhbnZhc0RPTUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICAgIHRvcCA9IGJvdW5kaW5nQ2xpZW50UmVjdC50b3AsXG4gICAgICAgIGxlZnQgPSBib3VuZGluZ0NsaWVudFJlY3QubGVmdCxcbiAgICAgICAgbW91c2VDb29yZGluYXRlcyA9IFtcblxuICAgICAgICAgIGNsaWVudFggLSBsZWZ0LFxuXG4gICAgICAgICAgdG9wIC0gY2xpZW50WSxcblxuICAgICAgICBdO1xuXG4gIHJldHVybiBtb3VzZUNvb3JkaW5hdGVzO1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0lBRWtELFVBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXZELFdBQVc7YUFBWCxXQUFXLENBQ2xCLFdBQVcs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
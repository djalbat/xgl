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
            key: "mouseWheelEventListener",
            value: function mouseWheelEventListener(event) {
                var handlers = this.handlersMap[_eventTypes.MOUSEWHEEL_EVENT_TYPE], mouseWheelDelta = mouseWheelDeltaFromEvent(event);
                handlers.forEach(function(handler) {
                    return handler(mouseWheelDelta);
                });
                event.preventDefault();
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
                var mouseWheelHandlers = this.handlersMap[_eventTypes.MOUSEWHEEL_EVENT_TYPE];
                mouseWheelHandlers.push(mouseWheelHandler);
            }
        },
        {
            key: "initialise",
            value: function initialise(canvas) {
                var canvasDOMElement = canvas.getDOMElement(), mouseUpEventListener = this.mouseUpEventListener.bind(this), mouseDownEventListener = this.mouseDownEventListener.bind(this), mouseMoveEventListener = this.mouseMoveEventListener.bind(this), mouseWheelEventListener = this.mouseWheelEventListener.bind(this);
                this.handlersMap[_eventTypes.MOUSEUP_EVENT_TYPE] = [];
                this.handlersMap[_eventTypes.MOUSEDOWN_EVENT_TYPE] = [];
                this.handlersMap[_eventTypes.MOUSEMOVE_EVENT_TYPE] = [];
                this.handlersMap[_eventTypes.MOUSEWHEEL_EVENT_TYPE] = [];
                canvasDOMElement.addEventListener(_eventTypes.MOUSEUP_EVENT_TYPE, mouseUpEventListener);
                canvasDOMElement.addEventListener(_eventTypes.MOUSEDOWN_EVENT_TYPE, mouseDownEventListener);
                canvasDOMElement.addEventListener(_eventTypes.MOUSEMOVE_EVENT_TYPE, mouseMoveEventListener);
                canvasDOMElement.addEventListener(_eventTypes.MOUSEWHEEL_EVENT_TYPE, mouseWheelEventListener);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXNjZWxsYW5lb3VzL21vdXNlRXZlbnRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBNT1VTRVVQX0VWRU5UX1RZUEUsIE1PVVNFRE9XTl9FVkVOVF9UWVBFLCBNT1VTRU1PVkVfRVZFTlRfVFlQRSwgTU9VU0VXSEVFTF9FVkVOVF9UWVBFIH0gZnJvbSBcIi4uL2V2ZW50VHlwZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW91c2VFdmVudHMge1xuICBjb25zdHJ1Y3RvcihoYW5kbGVyc01hcCwgbW91c2VEb3duKSB7XG4gICAgdGhpcy5oYW5kbGVyc01hcCA9IGhhbmRsZXJzTWFwO1xuICAgIHRoaXMubW91c2VEb3duID0gbW91c2VEb3duO1xuICB9XG5cbiAgbW91c2VFdmVudExpc3RlbmVyKGV2ZW50LCBldmVudFR5cGUpIHtcbiAgICBjb25zdCBoYW5kbGVycyA9IHRoaXMuaGFuZGxlcnNNYXBbZXZlbnRUeXBlXSxcbiAgICAgICAgICBtb3VzZUNvb3JkaW5hdGVzID0gbW91c2VDb29yZGluYXRlc0Zyb21FdmVudChldmVudCk7XG5cbiAgICBoYW5kbGVycy5mb3JFYWNoKChoYW5kbGVyKSA9PiBoYW5kbGVyKG1vdXNlQ29vcmRpbmF0ZXMsIHRoaXMubW91c2VEb3duKSk7XG5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbiAgbW91c2VVcEV2ZW50TGlzdGVuZXIoZXZlbnQpIHtcbiAgICB0aGlzLm1vdXNlRG93biA9IGZhbHNlO1xuXG4gICAgdGhpcy5tb3VzZUV2ZW50TGlzdGVuZXIoZXZlbnQsIE1PVVNFVVBfRVZFTlRfVFlQRSk7XG4gIH1cblxuXHRtb3VzZURvd25FdmVudExpc3RlbmVyKGV2ZW50KSB7XG4gICAgdGhpcy5tb3VzZURvd24gPSB0cnVlO1xuXG4gICAgdGhpcy5tb3VzZUV2ZW50TGlzdGVuZXIoZXZlbnQsIE1PVVNFRE9XTl9FVkVOVF9UWVBFKTtcbiAgfVxuXG5cdG1vdXNlTW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQpIHtcbiAgICB0aGlzLm1vdXNlRXZlbnRMaXN0ZW5lcihldmVudCwgTU9VU0VNT1ZFX0VWRU5UX1RZUEUpO1xuICB9XG5cbiAgbW91c2VXaGVlbEV2ZW50TGlzdGVuZXIoZXZlbnQpIHtcbiAgICBjb25zdCBoYW5kbGVycyA9IHRoaXMuaGFuZGxlcnNNYXBbIE1PVVNFV0hFRUxfRVZFTlRfVFlQRSBdLFxuICAgICAgICAgIG1vdXNlV2hlZWxEZWx0YSA9IG1vdXNlV2hlZWxEZWx0YUZyb21FdmVudChldmVudCk7XG5cbiAgICBoYW5kbGVycy5mb3JFYWNoKChoYW5kbGVyKSA9PiBoYW5kbGVyKG1vdXNlV2hlZWxEZWx0YSkpO1xuXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIGFkZE1vdXNlVXBIYW5kbGVyKG1vdXNlVXBIYW5kbGVyKSB7XG4gICAgY29uc3QgbW91c2VVcEhhbmRsZXJzID0gdGhpcy5oYW5kbGVyc01hcFsgTU9VU0VVUF9FVkVOVF9UWVBFIF07XG5cbiAgICBtb3VzZVVwSGFuZGxlcnMucHVzaChtb3VzZVVwSGFuZGxlcik7XG4gIH1cblxuICBhZGRNb3VzZURvd25IYW5kbGVyKG1vdXNlRG93bkhhbmRsZXIpIHtcbiAgICBjb25zdCBtb3VzZURvd25IYW5kbGVycyA9IHRoaXMuaGFuZGxlcnNNYXBbIE1PVVNFRE9XTl9FVkVOVF9UWVBFIF07XG5cbiAgICBtb3VzZURvd25IYW5kbGVycy5wdXNoKG1vdXNlRG93bkhhbmRsZXIpO1xuICB9XG5cbiAgYWRkTW91c2VNb3ZlSGFuZGxlcihtb3VzZU1vdmVIYW5kbGVyKSB7XG4gICAgY29uc3QgbW91c2VNb3ZlSGFuZGxlcnMgPSB0aGlzLmhhbmRsZXJzTWFwWyBNT1VTRU1PVkVfRVZFTlRfVFlQRSBdO1xuXG4gICAgbW91c2VNb3ZlSGFuZGxlcnMucHVzaChtb3VzZU1vdmVIYW5kbGVyKTtcbiAgfVxuXG4gIGFkZE1vdXNlV2hlZWxIYW5kbGVyKG1vdXNlV2hlZWxIYW5kbGVyKSB7XG4gICAgY29uc3QgbW91c2VXaGVlbEhhbmRsZXJzID0gdGhpcy5oYW5kbGVyc01hcFsgTU9VU0VXSEVFTF9FVkVOVF9UWVBFIF07XG5cbiAgICBtb3VzZVdoZWVsSGFuZGxlcnMucHVzaChtb3VzZVdoZWVsSGFuZGxlcik7XG4gIH1cblxuICBpbml0aWFsaXNlKGNhbnZhcykge1xuICAgICAgY29uc3QgY2FudmFzRE9NRWxlbWVudCA9IGNhbnZhcy5nZXRET01FbGVtZW50KCksXG4gICAgICAgICAgICBtb3VzZVVwRXZlbnRMaXN0ZW5lciA9IHRoaXMubW91c2VVcEV2ZW50TGlzdGVuZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICAgIG1vdXNlRG93bkV2ZW50TGlzdGVuZXIgPSB0aGlzLm1vdXNlRG93bkV2ZW50TGlzdGVuZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICAgIG1vdXNlTW92ZUV2ZW50TGlzdGVuZXIgPSB0aGlzLm1vdXNlTW92ZUV2ZW50TGlzdGVuZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICAgIG1vdXNlV2hlZWxFdmVudExpc3RlbmVyID0gdGhpcy5tb3VzZVdoZWVsRXZlbnRMaXN0ZW5lci5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5oYW5kbGVyc01hcFsgTU9VU0VVUF9FVkVOVF9UWVBFIF0gPSBbXTtcbiAgICB0aGlzLmhhbmRsZXJzTWFwWyBNT1VTRURPV05fRVZFTlRfVFlQRSBdID0gW107XG4gICAgdGhpcy5oYW5kbGVyc01hcFsgTU9VU0VNT1ZFX0VWRU5UX1RZUEUgXSA9IFtdO1xuICAgIHRoaXMuaGFuZGxlcnNNYXBbIE1PVVNFV0hFRUxfRVZFTlRfVFlQRSBdID0gW107XG5cbiAgICBjYW52YXNET01FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoTU9VU0VVUF9FVkVOVF9UWVBFLCBtb3VzZVVwRXZlbnRMaXN0ZW5lcik7XG5cbiAgICBjYW52YXNET01FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoTU9VU0VET1dOX0VWRU5UX1RZUEUsIG1vdXNlRG93bkV2ZW50TGlzdGVuZXIpO1xuXG4gICAgY2FudmFzRE9NRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKE1PVVNFTU9WRV9FVkVOVF9UWVBFLCBtb3VzZU1vdmVFdmVudExpc3RlbmVyKTtcblxuICAgIGNhbnZhc0RPTUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihNT1VTRVdIRUVMX0VWRU5UX1RZUEUsIG1vdXNlV2hlZWxFdmVudExpc3RlbmVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBoYW5kbGVyc01hcCA9IHt9LFxuICAgICAgICAgIG1vdXNlRG93biA9IGZhbHNlLCAgLy8vXG5cdFx0XHRcdFx0bW91c2VFdmVudHMgPSBuZXcgTW91c2VFdmVudHMoaGFuZGxlcnNNYXAsIG1vdXNlRG93bik7XG5cbiAgICByZXR1cm4gbW91c2VFdmVudHM7XG4gIH1cbn1cblxuZnVuY3Rpb24gbW91c2VXaGVlbERlbHRhRnJvbUV2ZW50KGV2ZW50KSB7XG4gIGNvbnN0IHsgd2hlZWxEZWx0YSB9ID0gZXZlbnQsXG4gICAgICAgIG1vdXNlV2hlZWxEZWx0YSA9IE1hdGgubWF4KC0xLCBNYXRoLm1pbigxLCB3aGVlbERlbHRhKSk7IC8vL1xuXG4gIHJldHVybiBtb3VzZVdoZWVsRGVsdGE7XG59XG5cbmZ1bmN0aW9uIG1vdXNlQ29vcmRpbmF0ZXNGcm9tRXZlbnQoZXZlbnQpIHtcbiAgY29uc3QgeyB0YXJnZXQsIGNsaWVudFgsIGNsaWVudFkgfSA9IGV2ZW50LFxuICAgICAgICBjYW52YXNET01FbGVtZW50ID0gdGFyZ2V0LCAgLy8vXG4gICAgICAgIGJvdW5kaW5nQ2xpZW50UmVjdCA9IGNhbnZhc0RPTUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICAgIHsgdG9wLCBsZWZ0IH0gPSBib3VuZGluZ0NsaWVudFJlY3QsXG4gICAgICAgIG1vdXNlQ29vcmRpbmF0ZXMgPSBbXG4gICAgICAgICAgY2xpZW50WCAtIGxlZnQsXG4gICAgICAgICAgdG9wIC0gY2xpZW50WVxuICAgICAgICBdO1xuXG4gIHJldHVybiBtb3VzZUNvb3JkaW5hdGVzO1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0FBRTBGLEdBQWUsQ0FBZixXQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVoRyxXQUFXO2FBQVgsV0FBVyxDQUNsQixXQUFXLEVBQUUsU0FBUzs4QkFEZixXQUFXO2FBRXZCLFdBQVcsR0FBRyxXQUFXO2FBQ3pCLFNBQVMsR0FBRyxTQUFTOztpQkFIVCxXQUFXOztZQU05QixHQUFrQixHQUFsQixrQkFBa0I7NEJBQWxCLGtCQUFrQixDQUFDLEtBQUssRUFBRSxTQUFTLEVBQUUsQ0FBQztnQkFDcEMsR0FBSyxDQUFDLFFBQVEsUUFBUSxXQUFXLENBQUMsU0FBUyxHQUNyQyxnQkFBZ0IsR0FBRyx5QkFBeUIsQ0FBQyxLQUFLO2dCQUV4RCxRQUFRLENBQUMsT0FBTyxXQUFFLE9BQU87MkJBQUssT0FBTyxDQUFDLGdCQUFnQixPQUFPLFNBQVM7O2dCQUV0RSxLQUFLLENBQUMsY0FBYztZQUN0QixDQUFDOzs7WUFFRCxHQUFvQixHQUFwQixvQkFBb0I7NEJBQXBCLG9CQUFvQixDQUFDLEtBQUssRUFBRSxDQUFDO3FCQUN0QixTQUFTLEdBQUcsS0FBSztxQkFFakIsa0JBQWtCLENBQUMsS0FBSyxFQXBCcUUsV0FBZTtZQXFCbkgsQ0FBQzs7O1lBRUYsR0FBc0IsR0FBdEIsc0JBQXNCOzRCQUF0QixzQkFBc0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQztxQkFDdkIsU0FBUyxHQUFHLElBQUk7cUJBRWhCLGtCQUFrQixDQUFDLEtBQUssRUExQnFFLFdBQWU7WUEyQm5ILENBQUM7OztZQUVGLEdBQXNCLEdBQXRCLHNCQUFzQjs0QkFBdEIsc0JBQXNCLENBQUMsS0FBSyxFQUFFLENBQUM7cUJBQ3ZCLGtCQUFrQixDQUFDLEtBQUssRUE5QnFFLFdBQWU7WUErQm5ILENBQUM7OztZQUVELEdBQXVCLEdBQXZCLHVCQUF1Qjs0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
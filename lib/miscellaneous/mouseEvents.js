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
var count = 0;
function mouseWheelDeltaFromEvent(event) {
    var wheelDelta = event.wheelDelta, mouseWheelDelta = Math.max(-1, Math.min(1, wheelDelta)); ///
    console.log(count++);
    return mouseWheelDelta;
}
function mouseCoordinatesFromEvent(event) {
    var target = event.target, clientX = event.clientX, clientY = event.clientY, canvasDOMElement = target, boundingClientRect = canvasDOMElement.getBoundingClientRect(), top = boundingClientRect.top, left = boundingClientRect.left, mouseCoordinates = [
        clientX - left,
        top - clientY
    ];
    return mouseCoordinates;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXNjZWxsYW5lb3VzL21vdXNlRXZlbnRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBXSEVFTF9FVkVOVF9UWVBFLCBNT1VTRVVQX0VWRU5UX1RZUEUsIE1PVVNFRE9XTl9FVkVOVF9UWVBFLCBNT1VTRU1PVkVfRVZFTlRfVFlQRSB9IGZyb20gXCIuLi9ldmVudFR5cGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vdXNlRXZlbnRzIHtcbiAgY29uc3RydWN0b3IoaGFuZGxlcnNNYXAsIG1vdXNlRG93bikge1xuICAgIHRoaXMuaGFuZGxlcnNNYXAgPSBoYW5kbGVyc01hcDtcbiAgICB0aGlzLm1vdXNlRG93biA9IG1vdXNlRG93bjtcbiAgfVxuXG4gIHdoZWVsRXZlbnRMaXN0ZW5lcihldmVudCkge1xuICAgIGNvbnN0IGhhbmRsZXJzID0gdGhpcy5oYW5kbGVyc01hcFsgV0hFRUxfRVZFTlRfVFlQRSBdLFxuICAgICAgICAgIG1vdXNlV2hlZWxEZWx0YSA9IG1vdXNlV2hlZWxEZWx0YUZyb21FdmVudChldmVudCk7XG5cbiAgICBoYW5kbGVycy5mb3JFYWNoKChoYW5kbGVyKSA9PiBoYW5kbGVyKG1vdXNlV2hlZWxEZWx0YSkpO1xuXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIG1vdXNlRXZlbnRMaXN0ZW5lcihldmVudCwgZXZlbnRUeXBlKSB7XG4gICAgY29uc3QgaGFuZGxlcnMgPSB0aGlzLmhhbmRsZXJzTWFwW2V2ZW50VHlwZV0sXG4gICAgICAgICAgbW91c2VDb29yZGluYXRlcyA9IG1vdXNlQ29vcmRpbmF0ZXNGcm9tRXZlbnQoZXZlbnQpO1xuXG4gICAgaGFuZGxlcnMuZm9yRWFjaCgoaGFuZGxlcikgPT4gaGFuZGxlcihtb3VzZUNvb3JkaW5hdGVzLCB0aGlzLm1vdXNlRG93bikpO1xuXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIG1vdXNlVXBFdmVudExpc3RlbmVyKGV2ZW50KSB7XG4gICAgdGhpcy5tb3VzZURvd24gPSBmYWxzZTtcblxuICAgIHRoaXMubW91c2VFdmVudExpc3RlbmVyKGV2ZW50LCBNT1VTRVVQX0VWRU5UX1RZUEUpO1xuICB9XG5cblx0bW91c2VEb3duRXZlbnRMaXN0ZW5lcihldmVudCkge1xuICAgIHRoaXMubW91c2VEb3duID0gdHJ1ZTtcblxuICAgIHRoaXMubW91c2VFdmVudExpc3RlbmVyKGV2ZW50LCBNT1VTRURPV05fRVZFTlRfVFlQRSk7XG4gIH1cblxuXHRtb3VzZU1vdmVFdmVudExpc3RlbmVyKGV2ZW50KSB7XG4gICAgdGhpcy5tb3VzZUV2ZW50TGlzdGVuZXIoZXZlbnQsIE1PVVNFTU9WRV9FVkVOVF9UWVBFKTtcbiAgfVxuXG4gIGFkZE1vdXNlVXBIYW5kbGVyKG1vdXNlVXBIYW5kbGVyKSB7XG4gICAgY29uc3QgbW91c2VVcEhhbmRsZXJzID0gdGhpcy5oYW5kbGVyc01hcFsgTU9VU0VVUF9FVkVOVF9UWVBFIF07XG5cbiAgICBtb3VzZVVwSGFuZGxlcnMucHVzaChtb3VzZVVwSGFuZGxlcik7XG4gIH1cblxuICBhZGRNb3VzZURvd25IYW5kbGVyKG1vdXNlRG93bkhhbmRsZXIpIHtcbiAgICBjb25zdCBtb3VzZURvd25IYW5kbGVycyA9IHRoaXMuaGFuZGxlcnNNYXBbIE1PVVNFRE9XTl9FVkVOVF9UWVBFIF07XG5cbiAgICBtb3VzZURvd25IYW5kbGVycy5wdXNoKG1vdXNlRG93bkhhbmRsZXIpO1xuICB9XG5cbiAgYWRkTW91c2VNb3ZlSGFuZGxlcihtb3VzZU1vdmVIYW5kbGVyKSB7XG4gICAgY29uc3QgbW91c2VNb3ZlSGFuZGxlcnMgPSB0aGlzLmhhbmRsZXJzTWFwWyBNT1VTRU1PVkVfRVZFTlRfVFlQRSBdO1xuXG4gICAgbW91c2VNb3ZlSGFuZGxlcnMucHVzaChtb3VzZU1vdmVIYW5kbGVyKTtcbiAgfVxuXG4gIGFkZE1vdXNlV2hlZWxIYW5kbGVyKG1vdXNlV2hlZWxIYW5kbGVyKSB7XG4gICAgY29uc3QgbW91c2VXaGVlbEhhbmRsZXJzID0gdGhpcy5oYW5kbGVyc01hcFsgV0hFRUxfRVZFTlRfVFlQRSBdO1xuXG4gICAgbW91c2VXaGVlbEhhbmRsZXJzLnB1c2gobW91c2VXaGVlbEhhbmRsZXIpO1xuICB9XG5cbiAgaW5pdGlhbGlzZShjYW52YXMpIHtcbiAgICAgIGNvbnN0IGNhbnZhc0RPTUVsZW1lbnQgPSBjYW52YXMuZ2V0RE9NRWxlbWVudCgpLFxuICAgICAgICAgICAgd2hlZWxFdmVudExpc3RlbmVyID0gdGhpcy53aGVlbEV2ZW50TGlzdGVuZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICAgIG1vdXNlVXBFdmVudExpc3RlbmVyID0gdGhpcy5tb3VzZVVwRXZlbnRMaXN0ZW5lci5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgbW91c2VEb3duRXZlbnRMaXN0ZW5lciA9IHRoaXMubW91c2VEb3duRXZlbnRMaXN0ZW5lci5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgbW91c2VNb3ZlRXZlbnRMaXN0ZW5lciA9IHRoaXMubW91c2VNb3ZlRXZlbnRMaXN0ZW5lci5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5oYW5kbGVyc01hcFsgV0hFRUxfRVZFTlRfVFlQRSBdID0gW107XG4gICAgdGhpcy5oYW5kbGVyc01hcFsgTU9VU0VVUF9FVkVOVF9UWVBFIF0gPSBbXTtcbiAgICB0aGlzLmhhbmRsZXJzTWFwWyBNT1VTRURPV05fRVZFTlRfVFlQRSBdID0gW107XG4gICAgdGhpcy5oYW5kbGVyc01hcFsgTU9VU0VNT1ZFX0VWRU5UX1RZUEUgXSA9IFtdO1xuXG4gICAgY2FudmFzRE9NRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFdIRUVMX0VWRU5UX1RZUEUsIHdoZWVsRXZlbnRMaXN0ZW5lcik7XG4gICAgY2FudmFzRE9NRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKE1PVVNFVVBfRVZFTlRfVFlQRSwgbW91c2VVcEV2ZW50TGlzdGVuZXIpO1xuICAgIGNhbnZhc0RPTUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihNT1VTRURPV05fRVZFTlRfVFlQRSwgbW91c2VEb3duRXZlbnRMaXN0ZW5lcik7XG4gICAgY2FudmFzRE9NRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKE1PVVNFTU9WRV9FVkVOVF9UWVBFLCBtb3VzZU1vdmVFdmVudExpc3RlbmVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBoYW5kbGVyc01hcCA9IHt9LFxuICAgICAgICAgIG1vdXNlRG93biA9IGZhbHNlLCAgLy8vXG5cdFx0XHRcdFx0bW91c2VFdmVudHMgPSBuZXcgTW91c2VFdmVudHMoaGFuZGxlcnNNYXAsIG1vdXNlRG93bik7XG5cbiAgICByZXR1cm4gbW91c2VFdmVudHM7XG4gIH1cbn1cblxubGV0IGNvdW50ID0gMDtcblxuZnVuY3Rpb24gbW91c2VXaGVlbERlbHRhRnJvbUV2ZW50KGV2ZW50KSB7XG4gIGNvbnN0IHsgd2hlZWxEZWx0YSB9ID0gZXZlbnQsXG4gICAgICAgIG1vdXNlV2hlZWxEZWx0YSA9IE1hdGgubWF4KC0xLCBNYXRoLm1pbigxLCB3aGVlbERlbHRhKSk7IC8vL1xuXG4gIGNvbnNvbGUubG9nKGNvdW50KyspXG5cbiAgcmV0dXJuIG1vdXNlV2hlZWxEZWx0YTtcbn1cblxuZnVuY3Rpb24gbW91c2VDb29yZGluYXRlc0Zyb21FdmVudChldmVudCkge1xuICBjb25zdCB7IHRhcmdldCwgY2xpZW50WCwgY2xpZW50WSB9ID0gZXZlbnQsXG4gICAgICAgIGNhbnZhc0RPTUVsZW1lbnQgPSB0YXJnZXQsICAvLy9cbiAgICAgICAgYm91bmRpbmdDbGllbnRSZWN0ID0gY2FudmFzRE9NRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgICAgeyB0b3AsIGxlZnQgfSA9IGJvdW5kaW5nQ2xpZW50UmVjdCxcbiAgICAgICAgbW91c2VDb29yZGluYXRlcyA9IFtcbiAgICAgICAgICBjbGllbnRYIC0gbGVmdCxcbiAgICAgICAgICB0b3AgLSBjbGllbnRZXG4gICAgICAgIF07XG5cbiAgcmV0dXJuIG1vdXNlQ29vcmRpbmF0ZXM7XG59XG4iXSwibmFtZXMiOlsiTW91c2VFdmVudHMiLCJoYW5kbGVyc01hcCIsIm1vdXNlRG93biIsIndoZWVsRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwiaGFuZGxlcnMiLCJXSEVFTF9FVkVOVF9UWVBFIiwibW91c2VXaGVlbERlbHRhIiwibW91c2VXaGVlbERlbHRhRnJvbUV2ZW50IiwiZm9yRWFjaCIsImhhbmRsZXIiLCJwcmV2ZW50RGVmYXVsdCIsIm1vdXNlRXZlbnRMaXN0ZW5lciIsImV2ZW50VHlwZSIsIm1vdXNlQ29vcmRpbmF0ZXMiLCJtb3VzZUNvb3JkaW5hdGVzRnJvbUV2ZW50IiwibW91c2VVcEV2ZW50TGlzdGVuZXIiLCJNT1VTRVVQX0VWRU5UX1RZUEUiLCJtb3VzZURvd25FdmVudExpc3RlbmVyIiwiTU9VU0VET1dOX0VWRU5UX1RZUEUiLCJtb3VzZU1vdmVFdmVudExpc3RlbmVyIiwiTU9VU0VNT1ZFX0VWRU5UX1RZUEUiLCJhZGRNb3VzZVVwSGFuZGxlciIsIm1vdXNlVXBIYW5kbGVyIiwibW91c2VVcEhhbmRsZXJzIiwicHVzaCIsImFkZE1vdXNlRG93bkhhbmRsZXIiLCJtb3VzZURvd25IYW5kbGVyIiwibW91c2VEb3duSGFuZGxlcnMiLCJhZGRNb3VzZU1vdmVIYW5kbGVyIiwibW91c2VNb3ZlSGFuZGxlciIsIm1vdXNlTW92ZUhhbmRsZXJzIiwiYWRkTW91c2VXaGVlbEhhbmRsZXIiLCJtb3VzZVdoZWVsSGFuZGxlciIsIm1vdXNlV2hlZWxIYW5kbGVycyIsImluaXRpYWxpc2UiLCJjYW52YXMiLCJjYW52YXNET01FbGVtZW50IiwiZ2V0RE9NRWxlbWVudCIsImJpbmQiLCJhZGRFdmVudExpc3RlbmVyIiwiZnJvbU5vdGhpbmciLCJtb3VzZUV2ZW50cyIsImNvdW50Iiwid2hlZWxEZWx0YSIsIk1hdGgiLCJtYXgiLCJtaW4iLCJjb25zb2xlIiwibG9nIiwidGFyZ2V0IiwiY2xpZW50WCIsImNsaWVudFkiLCJib3VuZGluZ0NsaWVudFJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0b3AiLCJsZWZ0Il0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7OztBQUVxRixHQUFlLENBQWYsV0FBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFM0ZBLFdBQVcsaUJBQWpCLFFBQVE7YUFBRkEsV0FBVyxDQUNsQkMsV0FBVyxFQUFFQyxTQUFTOztRQUNoQyxJQUFJLENBQUNELFdBQVcsR0FBR0EsV0FBVztRQUM5QixJQUFJLENBQUNDLFNBQVMsR0FBR0EsU0FBUzs7OztZQUc1QkMsR0FBa0IsRUFBbEJBLENBQWtCO21CQUFsQkEsUUFBUSxDQUFSQSxrQkFBa0IsQ0FBQ0MsS0FBSyxFQUFFLENBQUM7Z0JBQ3pCLEdBQUssQ0FBQ0MsUUFBUSxHQUFHLElBQUksQ0FBQ0osV0FBVyxDQUFFSyxXQUFnQixvQkFDN0NDLGVBQWUsR0FBR0Msd0JBQXdCLENBQUNKLEtBQUs7Z0JBRXREQyxRQUFRLENBQUNJLE9BQU8sQ0FBQyxRQUFRLENBQVBDLE9BQU87b0JBQUtBLE1BQU0sQ0FBTkEsT0FBTyxDQUFDSCxlQUFlOztnQkFFckRILEtBQUssQ0FBQ08sY0FBYztZQUN0QixDQUFDOzs7WUFFREMsR0FBa0IsRUFBbEJBLENBQWtCO21CQUFsQkEsUUFBUSxDQUFSQSxrQkFBa0IsQ0FBQ1IsS0FBSyxFQUFFUyxTQUFTLEVBQUUsQ0FBQzs7Z0JBQ3BDLEdBQUssQ0FBQ1IsUUFBUSxHQUFHLElBQUksQ0FBQ0osV0FBVyxDQUFDWSxTQUFTLEdBQ3JDQyxnQkFBZ0IsR0FBR0MseUJBQXlCLENBQUNYLEtBQUs7Z0JBRXhEQyxRQUFRLENBQUNJLE9BQU8sQ0FBQyxRQUFRLENBQVBDLE9BQU87b0JBQUtBLE1BQU0sQ0FBTkEsT0FBTyxDQUFDSSxnQkFBZ0IsUUFBT1osU0FBUzs7Z0JBRXRFRSxLQUFLLENBQUNPLGNBQWM7WUFDdEIsQ0FBQzs7O1lBRURLLEdBQW9CLEVBQXBCQSxDQUFvQjttQkFBcEJBLFFB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
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXNjZWxsYW5lb3VzL21vdXNlRXZlbnRzLmpzIl0sIm5hbWVzIjpbIk1PVVNFVVBfRVZFTlRfVFlQRSIsIk1PVVNFRE9XTl9FVkVOVF9UWVBFIiwiTU9VU0VNT1ZFX0VWRU5UX1RZUEUiLCJNT1VTRVdIRUVMX0VWRU5UX1RZUEUiLCJNb3VzZUV2ZW50cyIsImNvbnN0cnVjdG9yIiwiaGFuZGxlcnNNYXAiLCJtb3VzZURvd24iLCJtb3VzZUV2ZW50TGlzdGVuZXIiLCJldmVudCIsImV2ZW50VHlwZSIsImhhbmRsZXJzIiwibW91c2VDb29yZGluYXRlcyIsIm1vdXNlQ29vcmRpbmF0ZXNGcm9tRXZlbnQiLCJmb3JFYWNoIiwiaGFuZGxlciIsInByZXZlbnREZWZhdWx0IiwibW91c2VVcEV2ZW50TGlzdGVuZXIiLCJtb3VzZURvd25FdmVudExpc3RlbmVyIiwibW91c2VNb3ZlRXZlbnRMaXN0ZW5lciIsIm1vdXNlV2hlZWxFdmVudExpc3RlbmVyIiwibW91c2VXaGVlbERlbHRhIiwibW91c2VXaGVlbERlbHRhRnJvbUV2ZW50IiwiYWRkTW91c2VVcEhhbmRsZXIiLCJtb3VzZVVwSGFuZGxlciIsIm1vdXNlVXBIYW5kbGVycyIsInB1c2giLCJhZGRNb3VzZURvd25IYW5kbGVyIiwibW91c2VEb3duSGFuZGxlciIsIm1vdXNlRG93bkhhbmRsZXJzIiwiYWRkTW91c2VNb3ZlSGFuZGxlciIsIm1vdXNlTW92ZUhhbmRsZXIiLCJtb3VzZU1vdmVIYW5kbGVycyIsImFkZE1vdXNlV2hlZWxIYW5kbGVyIiwibW91c2VXaGVlbEhhbmRsZXIiLCJtb3VzZVdoZWVsSGFuZGxlcnMiLCJpbml0aWFsaXNlIiwiY2FudmFzIiwiY2FudmFzRE9NRWxlbWVudCIsImdldERPTUVsZW1lbnQiLCJiaW5kIiwiYWRkRXZlbnRMaXN0ZW5lciIsImZyb21Ob3RoaW5nIiwibW91c2VFdmVudHMiLCJ3aGVlbERlbHRhIiwiTWF0aCIsIm1heCIsIm1pbiIsInRhcmdldCIsImNsaWVudFgiLCJjbGllbnRZIiwiYm91bmRpbmdDbGllbnRSZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9wIiwibGVmdCJdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7QUFFMEYsR0FBZSxDQUFmLFdBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRWhHLFdBQVcsaUJBQWpCLFFBQVE7YUFBRixXQUFXLENBQ2xCLFdBQVcsRUFBRSxTQUFTOzhCQURmLFdBQVc7UUFFNUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXO1FBQzlCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUzs7aUJBSFQsV0FBVzs7WUFNOUIsR0FBa0IsR0FBbEIsa0JBQWtCO21CQUFsQixRQUFRLENBQVIsa0JBQWtCLENBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxDQUFDOztnQkFDcEMsR0FBSyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsR0FDckMsZ0JBQWdCLEdBQUcseUJBQXlCLENBQUMsS0FBSztnQkFFeEQsUUFBUSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQVAsT0FBTztvQkFBSyxNQUFNLENBQU4sT0FBTyxDQUFDLGdCQUFnQixRQUFPLFNBQVM7O2dCQUV0RSxLQUFLLENBQUMsY0FBYztZQUN0QixDQUFDOzs7WUFFRCxHQUFvQixHQUFwQixvQkFBb0I7bUJBQXBCLFFBQVEsQ0FBUixvQkFBb0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDM0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLO2dCQUV0QixJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxFQXBCcUUsV0FBZTtZQXFCbkgsQ0FBQzs7O1lBRUYsR0FBc0IsR0FBdEIsc0JBQXNCO21CQUF0QixRQUFRLENBQVIsc0JBQXNCLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQzVCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSTtnQkFFckIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssRUExQnFFLFdBQWU7WUEyQm5ILENBQUM7OztZQUVGLEdB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dCB7IE1PVVNFVVBfRVZFTlRfVFlQRSwgTU9VU0VET1dOX0VWRU5UX1RZUEUsIE1PVVNFTU9WRV9FVkVOVF9UWVBFLCBNT1VTRVdIRUVMX0VWRU5UX1RZUEUgfSBmcm9tIFwiLi4vZXZlbnRUeXBlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb3VzZUV2ZW50cyB7XG4gIGNvbnN0cnVjdG9yKGhhbmRsZXJzTWFwLCBtb3VzZURvd24pIHtcbiAgICB0aGlzLmhhbmRsZXJzTWFwID0gaGFuZGxlcnNNYXA7XG4gICAgdGhpcy5tb3VzZURvd24gPSBtb3VzZURvd247XG4gIH1cblxuICBtb3VzZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGV2ZW50VHlwZSkge1xuICAgIGNvbnN0IGhhbmRsZXJzID0gdGhpcy5oYW5kbGVyc01hcFtldmVudFR5cGVdLFxuICAgICAgICAgIG1vdXNlQ29vcmRpbmF0ZXMgPSBtb3VzZUNvb3JkaW5hdGVzRnJvbUV2ZW50KGV2ZW50KTtcblxuICAgIGhhbmRsZXJzLmZvckVhY2goKGhhbmRsZXIpID0+IGhhbmRsZXIobW91c2VDb29yZGluYXRlcywgdGhpcy5tb3VzZURvd24pKTtcblxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICBtb3VzZVVwRXZlbnRMaXN0ZW5lcihldmVudCkge1xuICAgIHRoaXMubW91c2VEb3duID0gZmFsc2U7XG5cbiAgICB0aGlzLm1vdXNlRXZlbnRMaXN0ZW5lcihldmVudCwgTU9VU0VVUF9FVkVOVF9UWVBFKTtcbiAgfVxuXG5cdG1vdXNlRG93bkV2ZW50TGlzdGVuZXIoZXZlbnQpIHtcbiAgICB0aGlzLm1vdXNlRG93biA9IHRydWU7XG5cbiAgICB0aGlzLm1vdXNlRXZlbnRMaXN0ZW5lcihldmVudCwgTU9VU0VET1dOX0VWRU5UX1RZUEUpO1xuICB9XG5cblx0bW91c2VNb3ZlRXZlbnRMaXN0ZW5lcihldmVudCkge1xuICAgIHRoaXMubW91c2VFdmVudExpc3RlbmVyKGV2ZW50LCBNT1VTRU1PVkVfRVZFTlRfVFlQRSk7XG4gIH1cblxuICBtb3VzZVdoZWVsRXZlbnRMaXN0ZW5lcihldmVudCkge1xuICAgIGNvbnN0IGhhbmRsZXJzID0gdGhpcy5oYW5kbGVyc01hcFsgTU9VU0VXSEVFTF9FVkVOVF9UWVBFIF0sXG4gICAgICAgICAgbW91c2VXaGVlbERlbHRhID0gbW91c2VXaGVlbERlbHRhRnJvbUV2ZW50KGV2ZW50KTtcblxuICAgIGhhbmRsZXJzLmZvckVhY2goKGhhbmRsZXIpID0+IGhhbmRsZXIobW91c2VXaGVlbERlbHRhKSk7XG5cblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbiAgYWRkTW91c2VVcEhhbmRsZXIobW91c2VVcEhhbmRsZXIpIHtcbiAgICBjb25zdCBtb3VzZVVwSGFuZGxlcnMgPSB0aGlzLmhhbmRsZXJzTWFwWyBNT1VTRVVQX0VWRU5UX1RZUEUgXTtcblxuICAgIG1vdXNlVXBIYW5kbGVycy5wdXNoKG1vdXNlVXBIYW5kbGVyKTtcbiAgfVxuXG4gIGFkZE1vdXNlRG93bkhhbmRsZXIobW91c2VEb3duSGFuZGxlcikge1xuICAgIGNvbnN0IG1vdXNlRG93bkhhbmRsZXJzID0gdGhpcy5oYW5kbGVyc01hcFsgTU9VU0VET1dOX0VWRU5UX1RZUEUgXTtcblxuICAgIG1vdXNlRG93bkhhbmRsZXJzLnB1c2gobW91c2VEb3duSGFuZGxlcik7XG4gIH1cblxuICBhZGRNb3VzZU1vdmVIYW5kbGVyKG1vdXNlTW92ZUhhbmRsZXIpIHtcbiAgICBjb25zdCBtb3VzZU1vdmVIYW5kbGVycyA9IHRoaXMuaGFuZGxlcnNNYXBbIE1PVVNFTU9WRV9FVkVOVF9UWVBFIF07XG5cbiAgICBtb3VzZU1vdmVIYW5kbGVycy5wdXNoKG1vdXNlTW92ZUhhbmRsZXIpO1xuICB9XG5cbiAgYWRkTW91c2VXaGVlbEhhbmRsZXIobW91c2VXaGVlbEhhbmRsZXIpIHtcbiAgICBjb25zdCBtb3VzZVdoZWVsSGFuZGxlcnMgPSB0aGlzLmhhbmRsZXJzTWFwWyBNT1VTRVdIRUVMX0VWRU5UX1RZUEUgXTtcblxuICAgIG1vdXNlV2hlZWxIYW5kbGVycy5wdXNoKG1vdXNlV2hlZWxIYW5kbGVyKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoY2FudmFzKSB7XG4gICAgICBjb25zdCBjYW52YXNET01FbGVtZW50ID0gY2FudmFzLmdldERPTUVsZW1lbnQoKSxcbiAgICAgICAgICAgIG1vdXNlVXBFdmVudExpc3RlbmVyID0gdGhpcy5tb3VzZVVwRXZlbnRMaXN0ZW5lci5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgbW91c2VEb3duRXZlbnRMaXN0ZW5lciA9IHRoaXMubW91c2VEb3duRXZlbnRMaXN0ZW5lci5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgbW91c2VNb3ZlRXZlbnRMaXN0ZW5lciA9IHRoaXMubW91c2VNb3ZlRXZlbnRMaXN0ZW5lci5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgbW91c2VXaGVlbEV2ZW50TGlzdGVuZXIgPSB0aGlzLm1vdXNlV2hlZWxFdmVudExpc3RlbmVyLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLmhhbmRsZXJzTWFwWyBNT1VTRVVQX0VWRU5UX1RZUEUgXSA9IFtdO1xuICAgIHRoaXMuaGFuZGxlcnNNYXBbIE1PVVNFRE9XTl9FVkVOVF9UWVBFIF0gPSBbXTtcbiAgICB0aGlzLmhhbmRsZXJzTWFwWyBNT1VTRU1PVkVfRVZFTlRfVFlQRSBdID0gW107XG4gICAgdGhpcy5oYW5kbGVyc01hcFsgTU9VU0VXSEVFTF9FVkVOVF9UWVBFIF0gPSBbXTtcblxuICAgIGNhbnZhc0RPTUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihNT1VTRVVQX0VWRU5UX1RZUEUsIG1vdXNlVXBFdmVudExpc3RlbmVyKTtcblxuICAgIGNhbnZhc0RPTUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihNT1VTRURPV05fRVZFTlRfVFlQRSwgbW91c2VEb3duRXZlbnRMaXN0ZW5lcik7XG5cbiAgICBjYW52YXNET01FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoTU9VU0VNT1ZFX0VWRU5UX1RZUEUsIG1vdXNlTW92ZUV2ZW50TGlzdGVuZXIpO1xuXG4gICAgY2FudmFzRE9NRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKE1PVVNFV0hFRUxfRVZFTlRfVFlQRSwgbW91c2VXaGVlbEV2ZW50TGlzdGVuZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IGhhbmRsZXJzTWFwID0ge30sXG4gICAgICAgICAgbW91c2VEb3duID0gZmFsc2UsICAvLy9cblx0XHRcdFx0XHRtb3VzZUV2ZW50cyA9IG5ldyBNb3VzZUV2ZW50cyhoYW5kbGVyc01hcCwgbW91c2VEb3duKTtcblxuICAgIHJldHVybiBtb3VzZUV2ZW50cztcbiAgfVxufVxuXG5mdW5jdGlvbiBtb3VzZVdoZWVsRGVsdGFGcm9tRXZlbnQoZXZlbnQpIHtcbiAgY29uc3QgeyB3aGVlbERlbHRhIH0gPSBldmVudCxcbiAgICAgICAgbW91c2VXaGVlbERlbHRhID0gTWF0aC5tYXgoLTEsIE1hdGgubWluKDEsIHdoZWVsRGVsdGEpKTsgLy8vXG5cbiAgcmV0dXJuIG1vdXNlV2hlZWxEZWx0YTtcbn1cblxuZnVuY3Rpb24gbW91c2VDb29yZGluYXRlc0Zyb21FdmVudChldmVudCkge1xuICBjb25zdCB7IHRhcmdldCwgY2xpZW50WCwgY2xpZW50WSB9ID0gZXZlbnQsXG4gICAgICAgIGNhbnZhc0RPTUVsZW1lbnQgPSB0YXJnZXQsICAvLy9cbiAgICAgICAgYm91bmRpbmdDbGllbnRSZWN0ID0gY2FudmFzRE9NRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgICAgeyB0b3AsIGxlZnQgfSA9IGJvdW5kaW5nQ2xpZW50UmVjdCxcbiAgICAgICAgbW91c2VDb29yZGluYXRlcyA9IFtcbiAgICAgICAgICBjbGllbnRYIC0gbGVmdCxcbiAgICAgICAgICB0b3AgLSBjbGllbnRZXG4gICAgICAgIF07XG5cbiAgcmV0dXJuIG1vdXNlQ29vcmRpbmF0ZXM7XG59XG4iXX0=
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return UserInput;
    }
});
var _keyEvents = /*#__PURE__*/ _interopRequireDefault(require("./keyEvents"));
var _mouseEvents = /*#__PURE__*/ _interopRequireDefault(require("./mouseEvents"));
var _vector = require("../maths/vector");
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
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var UserInput = /*#__PURE__*/ function() {
    function UserInput(handlers, keyEvents, mouseEvents, mouseCoordinates, previousMouseCoordinates) {
        _classCallCheck(this, UserInput);
        this.handlers = handlers;
        this.keyEvents = keyEvents;
        this.mouseEvents = mouseEvents;
        this.mouseCoordinates = mouseCoordinates;
        this.previousMouseCoordinates = previousMouseCoordinates;
    }
    _createClass(UserInput, [
        {
            key: "mouseMoveHandler",
            value: function mouseMoveHandler(mouseCoordinates, mouseDown, canvas) {
                this.previousMouseCoordinates = this.mouseCoordinates; ///
                this.mouseCoordinates = mouseCoordinates;
                if (this.previousMouseCoordinates === null) {
                    return;
                }
                if (mouseDown) {
                    var mouseWheelDelta = 0, shiftKeyDown = this.keyEvents.isShiftKeyDown(), relativeMouseCoordinates = (0, _vector.subtract2)(this.mouseCoordinates, this.previousMouseCoordinates);
                    this.handlers.forEach(function(handler) {
                        return handler(relativeMouseCoordinates, mouseWheelDelta, shiftKeyDown);
                    });
                }
            }
        },
        {
            key: "mouseWheelHandler",
            value: function mouseWheelHandler(mouseWheelDelta, canvas) {
                var shiftKeyDown = this.keyEvents.isShiftKeyDown(), relativeMouseCoordinates = (0, _vector.zero2)();
                this.handlers.forEach(function(handler) {
                    return handler(relativeMouseCoordinates, mouseWheelDelta, shiftKeyDown);
                });
            }
        },
        {
            key: "addUserInputHandler",
            value: function addUserInputHandler(userInputHandler) {
                var handler = userInputHandler; ///
                this.handlers.push(handler);
            }
        },
        {
            key: "addEscapeKeyDownHandler",
            value: function addEscapeKeyDownHandler(escapeKeyDownHandler) {
                this.keyEvents.addEscapeKeyDownHandler(escapeKeyDownHandler);
            }
        },
        {
            key: "initialise",
            value: function initialise(canvas) {
                var mouseMoveHandler = this.mouseMoveHandler.bind(this), mouseWheelHandler = this.mouseWheelHandler.bind(this);
                this.keyEvents.initialise();
                this.mouseEvents.initialise(canvas);
                this.mouseEvents.addMouseMoveHandler(mouseMoveHandler);
                this.mouseEvents.addMouseWheelHandler(mouseWheelHandler);
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var handlers = [], keyEvents = _keyEvents.default.fromNothing(), mouseEvents = _mouseEvents.default.fromNothing(), mouseCoordinates = null, previousMouseCoordinates = null, userInput = new UserInput(handlers, keyEvents, mouseEvents, mouseCoordinates, previousMouseCoordinates);
                return userInput;
            }
        }
    ]);
    return UserInput;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXNjZWxsYW5lb3VzL3VzZXJJbnB1dC5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEtleUV2ZW50cyBmcm9tIFwiLi9rZXlFdmVudHNcIjtcbmltcG9ydCBNb3VzZUV2ZW50cyBmcm9tIFwiLi9tb3VzZUV2ZW50c1wiO1xuXG5pbXBvcnQgeyB6ZXJvMiwgc3VidHJhY3QyIH0gZnJvbSBcIi4uL21hdGhzL3ZlY3RvclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VySW5wdXQge1xuICBjb25zdHJ1Y3RvcihoYW5kbGVycywga2V5RXZlbnRzLCBtb3VzZUV2ZW50cywgbW91c2VDb29yZGluYXRlcywgcHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzKSB7XG4gICAgdGhpcy5oYW5kbGVycyA9IGhhbmRsZXJzO1xuICAgIHRoaXMua2V5RXZlbnRzID0ga2V5RXZlbnRzO1xuICAgIHRoaXMubW91c2VFdmVudHMgPSBtb3VzZUV2ZW50cztcbiAgICB0aGlzLm1vdXNlQ29vcmRpbmF0ZXMgPSBtb3VzZUNvb3JkaW5hdGVzO1xuICAgIHRoaXMucHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzID0gcHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzO1xuICB9XG5cbiAgbW91c2VNb3ZlSGFuZGxlcihtb3VzZUNvb3JkaW5hdGVzLCBtb3VzZURvd24sIGNhbnZhcykge1xuICAgIHRoaXMucHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzID0gdGhpcy5tb3VzZUNvb3JkaW5hdGVzOyAgLy8vXG5cbiAgICB0aGlzLm1vdXNlQ29vcmRpbmF0ZXMgPSBtb3VzZUNvb3JkaW5hdGVzO1xuXG4gICAgaWYgKHRoaXMucHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKG1vdXNlRG93bikge1xuICAgICAgY29uc3QgbW91c2VXaGVlbERlbHRhID0gMCwgIC8vL1xuICAgICAgICAgICAgc2hpZnRLZXlEb3duID0gdGhpcy5rZXlFdmVudHMuaXNTaGlmdEtleURvd24oKSxcbiAgICAgICAgICAgIHJlbGF0aXZlTW91c2VDb29yZGluYXRlcyA9IHN1YnRyYWN0Mih0aGlzLm1vdXNlQ29vcmRpbmF0ZXMsIHRoaXMucHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzKTtcblxuICAgICAgdGhpcy5oYW5kbGVycy5mb3JFYWNoKChoYW5kbGVyKSA9PiBoYW5kbGVyKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgbW91c2VXaGVlbERlbHRhLCBzaGlmdEtleURvd24pKTtcbiAgICB9XG4gIH1cblxuICBtb3VzZVdoZWVsSGFuZGxlcihtb3VzZVdoZWVsRGVsdGEsIGNhbnZhcykge1xuICAgIGNvbnN0IHNoaWZ0S2V5RG93biA9IHRoaXMua2V5RXZlbnRzLmlzU2hpZnRLZXlEb3duKCksXG4gICAgICAgICAgcmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzID0gemVybzIoKTtcblxuICAgIHRoaXMuaGFuZGxlcnMuZm9yRWFjaCgoaGFuZGxlcikgPT4gaGFuZGxlcihyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlV2hlZWxEZWx0YSwgc2hpZnRLZXlEb3duKSk7XG4gIH1cblxuICBhZGRVc2VySW5wdXRIYW5kbGVyKHVzZXJJbnB1dEhhbmRsZXIpIHtcbiAgICBjb25zdCBoYW5kbGVyID0gdXNlcklucHV0SGFuZGxlcjsgLy8vXG5cbiAgICB0aGlzLmhhbmRsZXJzLnB1c2goaGFuZGxlcik7XG4gIH1cblxuICBhZGRFc2NhcGVLZXlEb3duSGFuZGxlcihlc2NhcGVLZXlEb3duSGFuZGxlcikgeyB0aGlzLmtleUV2ZW50cy5hZGRFc2NhcGVLZXlEb3duSGFuZGxlcihlc2NhcGVLZXlEb3duSGFuZGxlcik7IH1cblxuICBpbml0aWFsaXNlKGNhbnZhcykge1xuICAgIGNvbnN0IG1vdXNlTW92ZUhhbmRsZXIgPSB0aGlzLm1vdXNlTW92ZUhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICBtb3VzZVdoZWVsSGFuZGxlciA9IHRoaXMubW91c2VXaGVlbEhhbmRsZXIuYmluZCh0aGlzKTtcblxuICAgIHRoaXMua2V5RXZlbnRzLmluaXRpYWxpc2UoKTtcblxuICAgIHRoaXMubW91c2VFdmVudHMuaW5pdGlhbGlzZShjYW52YXMpO1xuXG4gICAgdGhpcy5tb3VzZUV2ZW50cy5hZGRNb3VzZU1vdmVIYW5kbGVyKG1vdXNlTW92ZUhhbmRsZXIpO1xuXG4gICAgdGhpcy5tb3VzZUV2ZW50cy5hZGRNb3VzZVdoZWVsSGFuZGxlcihtb3VzZVdoZWVsSGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgaGFuZGxlcnMgPSBbXSxcbiAgICAgICAgICBrZXlFdmVudHMgPSBLZXlFdmVudHMuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBtb3VzZUV2ZW50cyA9IE1vdXNlRXZlbnRzLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgbW91c2VDb29yZGluYXRlcyA9IG51bGwsICAvLy9cbiAgICAgICAgICBwcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMgPSBudWxsLCAgLy8vXG4gICAgICAgICAgdXNlcklucHV0ID0gbmV3IFVzZXJJbnB1dChoYW5kbGVycywga2V5RXZlbnRzLCBtb3VzZUV2ZW50cywgbW91c2VDb29yZGluYXRlcywgcHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzKTtcblxuICAgIHJldHVybiB1c2VySW5wdXQ7XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiVXNlcklucHV0IiwiaGFuZGxlcnMiLCJrZXlFdmVudHMiLCJtb3VzZUV2ZW50cyIsIm1vdXNlQ29vcmRpbmF0ZXMiLCJwcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMiLCJtb3VzZU1vdmVIYW5kbGVyIiwibW91c2VEb3duIiwiY2FudmFzIiwibW91c2VXaGVlbERlbHRhIiwic2hpZnRLZXlEb3duIiwiaXNTaGlmdEtleURvd24iLCJyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMiLCJzdWJ0cmFjdDIiLCJmb3JFYWNoIiwiaGFuZGxlciIsIm1vdXNlV2hlZWxIYW5kbGVyIiwiemVybzIiLCJhZGRVc2VySW5wdXRIYW5kbGVyIiwidXNlcklucHV0SGFuZGxlciIsInB1c2giLCJhZGRFc2NhcGVLZXlEb3duSGFuZGxlciIsImVzY2FwZUtleURvd25IYW5kbGVyIiwiaW5pdGlhbGlzZSIsImJpbmQiLCJhZGRNb3VzZU1vdmVIYW5kbGVyIiwiYWRkTW91c2VXaGVlbEhhbmRsZXIiLCJmcm9tTm90aGluZyIsIktleUV2ZW50cyIsIk1vdXNlRXZlbnRzIiwidXNlcklucHV0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU9xQkE7Ozs4REFMQztnRUFDRTtzQkFFUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsQixJQUFBLEFBQU1BLDBCQUFOO2FBQU1BLFVBQ1BDLFFBQVEsRUFBRUMsU0FBUyxFQUFFQyxXQUFXLEVBQUVDLGdCQUFnQixFQUFFQyx3QkFBd0I7OEJBRHJFTDtRQUVqQixJQUFJLENBQUNDLFFBQVEsR0FBR0E7UUFDaEIsSUFBSSxDQUFDQyxTQUFTLEdBQUdBO1FBQ2pCLElBQUksQ0FBQ0MsV0FBVyxHQUFHQTtRQUNuQixJQUFJLENBQUNDLGdCQUFnQixHQUFHQTtRQUN4QixJQUFJLENBQUNDLHdCQUF3QixHQUFHQTs7aUJBTmZMOztZQVNuQk0sS0FBQUE7bUJBQUFBLFNBQUFBLGlCQUFpQkYsZ0JBQWdCLEVBQUVHLFNBQVMsRUFBRUMsTUFBTSxFQUFFO2dCQUNwRCxJQUFJLENBQUNILHdCQUF3QixHQUFHLElBQUksQ0FBQ0QsZ0JBQWdCLEVBQUcsR0FBRztnQkFFM0QsSUFBSSxDQUFDQSxnQkFBZ0IsR0FBR0E7Z0JBRXhCLElBQUksSUFBSSxDQUFDQyx3QkFBd0IsS0FBSyxJQUFJLEVBQUU7b0JBQzFDO2dCQUNGLENBQUM7Z0JBRUQsSUFBSUUsV0FBVztvQkFDYixJQUFNRSxrQkFBa0IsR0FDbEJDLGVBQWUsSUFBSSxDQUFDUixTQUFTLENBQUNTLGNBQWMsSUFDNUNDLDJCQUEyQkMsSUFBQUEsaUJBQVMsRUFBQyxJQUFJLENBQUNULGdCQUFnQixFQUFFLElBQUksQ0FBQ0Msd0JBQXdCO29CQUUvRixJQUFJLENBQUNKLFFBQVEsQ0FBQ2EsT0FBTyxDQUFDLFNBQUNDOytCQUFZQSxRQUFRSCwwQkFBMEJILGlCQUFpQkM7O2dCQUN4RixDQUFDO1lBQ0g7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUEsa0JBQWtCUCxlQUFlLEVBQUVELE1BQU0sRUFBRTtnQkFDekMsSUFBTUUsZUFBZSxJQUFJLENBQUNSLFNBQVMsQ0FBQ1MsY0FBYyxJQUM1Q0MsMkJBQTJCSyxJQUFBQSxhQUFLO2dCQUV0QyxJQUFJLENBQUNoQixRQUFRLENBQUNhLE9BQU8sQ0FBQyxTQUFDQzsyQkFBWUEsUUFBUUgsMEJBQTBCSCxpQkFBaUJDOztZQUN4Rjs7O1lBRUFRLEtBQUFBO21CQUFBQSxTQUFBQSxvQkFBb0JDLGdCQUFnQixFQUFFO2dCQUNwQyxJQUFNSixVQUFVSSxrQkFBa0IsR0FBRztnQkFFckMsSUFBSSxDQUFDbEIsUUFBUSxDQUFDbUIsSUFBSSxDQUFDTDtZQUNyQjs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQSx3QkFBd0JDLG9CQUFvQixFQUFFO2dCQUFFLElBQUksQ0FBQ3BCLFNBQVMsQ0FBQ21CLHVCQUF1QixDQUFDQztZQUF1Qjs7O1lBRTlHQyxLQUFBQTttQkFBQUEsU0FBQUEsV0FBV2YsTUFBTSxFQUFFO2dCQUNqQixJQUFNRixtQkFBbUIsSUFBSSxDQUFDQSxnQkFBZ0IsQ0FBQ2tCLElBQUksQ0FBQyxJQUFJLEdBQ2xEUixvQkFBb0IsSUFBSSxDQUFDQSxpQkFBaUIsQ0FBQ1EsSUFBSSxDQUFDLElBQUk7Z0JBRTFELElBQUksQ0FBQ3RCLFNBQVMsQ0FBQ3FCLFVBQVU7Z0JBRXpCLElBQUksQ0FBQ3BCLFdBQVcsQ0FBQ29CLFVBQVUsQ0FBQ2Y7Z0JBRTVCLElBQUksQ0FBQ0wsV0FBVyxDQUFDc0IsbUJBQW1CLENBQUNuQjtnQkFFckMsSUFBSSxDQUFDSCxXQUFXLENBQUN1QixvQkFBb0IsQ0FBQ1Y7WUFDeEM7Ozs7WUFFT1csS0FBQUE7bUJBQVAsU0FBT0EsY0FBYztnQkFDbkIsSUFBTTFCLFdBQVcsRUFBRSxFQUNiQyxZQUFZMEIsa0JBQVMsQ0FBQ0QsV0FBVyxJQUNqQ3hCLGNBQWMwQixvQkFBVyxDQUFDRixXQUFXLElBQ3JDdkIsbUJBQW1CLElBQUksRUFDdkJDLDJCQUEyQixJQUFJLEVBQy9CeUIsWUFBWSxJQTdERDlCLFVBNkRlQyxVQUFVQyxXQUFXQyxhQUFhQyxrQkFBa0JDO2dCQUVwRixPQUFPeUI7WUFDVDs7O1dBaEVtQjlCIn0=
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
                        handler(relativeMouseCoordinates, mouseWheelDelta, shiftKeyDown);
                    });
                }
            }
        },
        {
            key: "mouseWheelHandler",
            value: function mouseWheelHandler(mouseWheelDelta, canvas) {
                var shiftKeyDown = this.keyEvents.isShiftKeyDown(), relativeMouseCoordinates = (0, _vector.zero2)();
                this.handlers.forEach(function(handler) {
                    handler(relativeMouseCoordinates, mouseWheelDelta, shiftKeyDown);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXNjZWxsYW5lb3VzL3VzZXJJbnB1dC5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEtleUV2ZW50cyBmcm9tIFwiLi9rZXlFdmVudHNcIjtcbmltcG9ydCBNb3VzZUV2ZW50cyBmcm9tIFwiLi9tb3VzZUV2ZW50c1wiO1xuXG5pbXBvcnQgeyB6ZXJvMiwgc3VidHJhY3QyIH0gZnJvbSBcIi4uL21hdGhzL3ZlY3RvclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VySW5wdXQge1xuICBjb25zdHJ1Y3RvcihoYW5kbGVycywga2V5RXZlbnRzLCBtb3VzZUV2ZW50cywgbW91c2VDb29yZGluYXRlcywgcHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzKSB7XG4gICAgdGhpcy5oYW5kbGVycyA9IGhhbmRsZXJzO1xuICAgIHRoaXMua2V5RXZlbnRzID0ga2V5RXZlbnRzO1xuICAgIHRoaXMubW91c2VFdmVudHMgPSBtb3VzZUV2ZW50cztcbiAgICB0aGlzLm1vdXNlQ29vcmRpbmF0ZXMgPSBtb3VzZUNvb3JkaW5hdGVzO1xuICAgIHRoaXMucHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzID0gcHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzO1xuICB9XG5cbiAgbW91c2VNb3ZlSGFuZGxlcihtb3VzZUNvb3JkaW5hdGVzLCBtb3VzZURvd24sIGNhbnZhcykge1xuICAgIHRoaXMucHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzID0gdGhpcy5tb3VzZUNvb3JkaW5hdGVzOyAgLy8vXG5cbiAgICB0aGlzLm1vdXNlQ29vcmRpbmF0ZXMgPSBtb3VzZUNvb3JkaW5hdGVzO1xuXG4gICAgaWYgKHRoaXMucHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKG1vdXNlRG93bikge1xuICAgICAgY29uc3QgbW91c2VXaGVlbERlbHRhID0gMCwgIC8vL1xuICAgICAgICAgICAgc2hpZnRLZXlEb3duID0gdGhpcy5rZXlFdmVudHMuaXNTaGlmdEtleURvd24oKSxcbiAgICAgICAgICAgIHJlbGF0aXZlTW91c2VDb29yZGluYXRlcyA9IHN1YnRyYWN0Mih0aGlzLm1vdXNlQ29vcmRpbmF0ZXMsIHRoaXMucHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzKTtcblxuICAgICAgdGhpcy5oYW5kbGVycy5mb3JFYWNoKChoYW5kbGVyKSA9PiB7XG4gICAgICAgIGhhbmRsZXIocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCBtb3VzZVdoZWVsRGVsdGEsIHNoaWZ0S2V5RG93bik7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBtb3VzZVdoZWVsSGFuZGxlcihtb3VzZVdoZWVsRGVsdGEsIGNhbnZhcykge1xuICAgIGNvbnN0IHNoaWZ0S2V5RG93biA9IHRoaXMua2V5RXZlbnRzLmlzU2hpZnRLZXlEb3duKCksXG4gICAgICAgICAgcmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzID0gemVybzIoKTtcblxuICAgIHRoaXMuaGFuZGxlcnMuZm9yRWFjaCgoaGFuZGxlcikgPT4ge1xuICAgICAgaGFuZGxlcihyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlV2hlZWxEZWx0YSwgc2hpZnRLZXlEb3duKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFkZFVzZXJJbnB1dEhhbmRsZXIodXNlcklucHV0SGFuZGxlcikge1xuICAgIGNvbnN0IGhhbmRsZXIgPSB1c2VySW5wdXRIYW5kbGVyOyAvLy9cblxuICAgIHRoaXMuaGFuZGxlcnMucHVzaChoYW5kbGVyKTtcbiAgfVxuXG4gIGFkZEVzY2FwZUtleURvd25IYW5kbGVyKGVzY2FwZUtleURvd25IYW5kbGVyKSB7IHRoaXMua2V5RXZlbnRzLmFkZEVzY2FwZUtleURvd25IYW5kbGVyKGVzY2FwZUtleURvd25IYW5kbGVyKTsgfVxuXG4gIGluaXRpYWxpc2UoY2FudmFzKSB7XG4gICAgY29uc3QgbW91c2VNb3ZlSGFuZGxlciA9IHRoaXMubW91c2VNb3ZlSGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIG1vdXNlV2hlZWxIYW5kbGVyID0gdGhpcy5tb3VzZVdoZWVsSGFuZGxlci5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5rZXlFdmVudHMuaW5pdGlhbGlzZSgpO1xuXG4gICAgdGhpcy5tb3VzZUV2ZW50cy5pbml0aWFsaXNlKGNhbnZhcyk7XG5cbiAgICB0aGlzLm1vdXNlRXZlbnRzLmFkZE1vdXNlTW92ZUhhbmRsZXIobW91c2VNb3ZlSGFuZGxlcik7XG5cbiAgICB0aGlzLm1vdXNlRXZlbnRzLmFkZE1vdXNlV2hlZWxIYW5kbGVyKG1vdXNlV2hlZWxIYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBoYW5kbGVycyA9IFtdLFxuICAgICAgICAgIGtleUV2ZW50cyA9IEtleUV2ZW50cy5mcm9tTm90aGluZygpLFxuICAgICAgICAgIG1vdXNlRXZlbnRzID0gTW91c2VFdmVudHMuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBtb3VzZUNvb3JkaW5hdGVzID0gbnVsbCwgIC8vL1xuICAgICAgICAgIHByZXZpb3VzTW91c2VDb29yZGluYXRlcyA9IG51bGwsICAvLy9cbiAgICAgICAgICB1c2VySW5wdXQgPSBuZXcgVXNlcklucHV0KGhhbmRsZXJzLCBrZXlFdmVudHMsIG1vdXNlRXZlbnRzLCBtb3VzZUNvb3JkaW5hdGVzLCBwcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMpO1xuXG4gICAgcmV0dXJuIHVzZXJJbnB1dDtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJVc2VySW5wdXQiLCJoYW5kbGVycyIsImtleUV2ZW50cyIsIm1vdXNlRXZlbnRzIiwibW91c2VDb29yZGluYXRlcyIsInByZXZpb3VzTW91c2VDb29yZGluYXRlcyIsIm1vdXNlTW92ZUhhbmRsZXIiLCJtb3VzZURvd24iLCJjYW52YXMiLCJtb3VzZVdoZWVsRGVsdGEiLCJzaGlmdEtleURvd24iLCJpc1NoaWZ0S2V5RG93biIsInJlbGF0aXZlTW91c2VDb29yZGluYXRlcyIsInN1YnRyYWN0MiIsImZvckVhY2giLCJoYW5kbGVyIiwibW91c2VXaGVlbEhhbmRsZXIiLCJ6ZXJvMiIsImFkZFVzZXJJbnB1dEhhbmRsZXIiLCJ1c2VySW5wdXRIYW5kbGVyIiwicHVzaCIsImFkZEVzY2FwZUtleURvd25IYW5kbGVyIiwiZXNjYXBlS2V5RG93bkhhbmRsZXIiLCJpbml0aWFsaXNlIiwiYmluZCIsImFkZE1vdXNlTW92ZUhhbmRsZXIiLCJhZGRNb3VzZVdoZWVsSGFuZGxlciIsImZyb21Ob3RoaW5nIiwiS2V5RXZlbnRzIiwiTW91c2VFdmVudHMiLCJ1c2VySW5wdXQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBT3FCQTs7OzhEQUxDO2dFQUNFO3NCQUVTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxCLElBQUEsQUFBTUEsMEJBQU47YUFBTUEsVUFDUEMsUUFBUSxFQUFFQyxTQUFTLEVBQUVDLFdBQVcsRUFBRUMsZ0JBQWdCLEVBQUVDLHdCQUF3Qjs4QkFEckVMO1FBRWpCLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTtRQUNoQixJQUFJLENBQUNDLFNBQVMsR0FBR0E7UUFDakIsSUFBSSxDQUFDQyxXQUFXLEdBQUdBO1FBQ25CLElBQUksQ0FBQ0MsZ0JBQWdCLEdBQUdBO1FBQ3hCLElBQUksQ0FBQ0Msd0JBQXdCLEdBQUdBOztpQkFOZkw7O1lBU25CTSxLQUFBQTttQkFBQUEsU0FBQUEsaUJBQWlCRixnQkFBZ0IsRUFBRUcsU0FBUyxFQUFFQyxNQUFNLEVBQUU7Z0JBQ3BELElBQUksQ0FBQ0gsd0JBQXdCLEdBQUcsSUFBSSxDQUFDRCxnQkFBZ0IsRUFBRyxHQUFHO2dCQUUzRCxJQUFJLENBQUNBLGdCQUFnQixHQUFHQTtnQkFFeEIsSUFBSSxJQUFJLENBQUNDLHdCQUF3QixLQUFLLElBQUksRUFBRTtvQkFDMUM7Z0JBQ0YsQ0FBQztnQkFFRCxJQUFJRSxXQUFXO29CQUNiLElBQU1FLGtCQUFrQixHQUNsQkMsZUFBZSxJQUFJLENBQUNSLFNBQVMsQ0FBQ1MsY0FBYyxJQUM1Q0MsMkJBQTJCQyxJQUFBQSxpQkFBUyxFQUFDLElBQUksQ0FBQ1QsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDQyx3QkFBd0I7b0JBRS9GLElBQUksQ0FBQ0osUUFBUSxDQUFDYSxPQUFPLENBQUMsU0FBQ0MsU0FBWTt3QkFDakNBLFFBQVFILDBCQUEwQkgsaUJBQWlCQztvQkFDckQ7Z0JBQ0YsQ0FBQztZQUNIOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBLGtCQUFrQlAsZUFBZSxFQUFFRCxNQUFNLEVBQUU7Z0JBQ3pDLElBQU1FLGVBQWUsSUFBSSxDQUFDUixTQUFTLENBQUNTLGNBQWMsSUFDNUNDLDJCQUEyQkssSUFBQUEsYUFBSztnQkFFdEMsSUFBSSxDQUFDaEIsUUFBUSxDQUFDYSxPQUFPLENBQUMsU0FBQ0MsU0FBWTtvQkFDakNBLFFBQVFILDBCQUEwQkgsaUJBQWlCQztnQkFDckQ7WUFDRjs7O1lBRUFRLEtBQUFBO21CQUFBQSxTQUFBQSxvQkFBb0JDLGdCQUFnQixFQUFFO2dCQUNwQyxJQUFNSixVQUFVSSxrQkFBa0IsR0FBRztnQkFFckMsSUFBSSxDQUFDbEIsUUFBUSxDQUFDbUIsSUFBSSxDQUFDTDtZQUNyQjs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQSx3QkFBd0JDLG9CQUFvQixFQUFFO2dCQUFFLElBQUksQ0FBQ3BCLFNBQVMsQ0FBQ21CLHVCQUF1QixDQUFDQztZQUF1Qjs7O1lBRTlHQyxLQUFBQTttQkFBQUEsU0FBQUEsV0FBV2YsTUFBTSxFQUFFO2dCQUNqQixJQUFNRixtQkFBbUIsSUFBSSxDQUFDQSxnQkFBZ0IsQ0FBQ2tCLElBQUksQ0FBQyxJQUFJLEdBQ2xEUixvQkFBb0IsSUFBSSxDQUFDQSxpQkFBaUIsQ0FBQ1EsSUFBSSxDQUFDLElBQUk7Z0JBRTFELElBQUksQ0FBQ3RCLFNBQVMsQ0FBQ3FCLFVBQVU7Z0JBRXpCLElBQUksQ0FBQ3BCLFdBQVcsQ0FBQ29CLFVBQVUsQ0FBQ2Y7Z0JBRTVCLElBQUksQ0FBQ0wsV0FBVyxDQUFDc0IsbUJBQW1CLENBQUNuQjtnQkFFckMsSUFBSSxDQUFDSCxXQUFXLENBQUN1QixvQkFBb0IsQ0FBQ1Y7WUFDeEM7Ozs7WUFFT1csS0FBQUE7bUJBQVAsU0FBT0EsY0FBYztnQkFDbkIsSUFBTTFCLFdBQVcsRUFBRSxFQUNiQyxZQUFZMEIsa0JBQVMsQ0FBQ0QsV0FBVyxJQUNqQ3hCLGNBQWMwQixvQkFBVyxDQUFDRixXQUFXLElBQ3JDdkIsbUJBQW1CLElBQUksRUFDdkJDLDJCQUEyQixJQUFJLEVBQy9CeUIsWUFBWSxJQWpFRDlCLFVBaUVlQyxVQUFVQyxXQUFXQyxhQUFhQyxrQkFBa0JDO2dCQUVwRixPQUFPeUI7WUFDVDs7O1dBcEVtQjlCIn0=
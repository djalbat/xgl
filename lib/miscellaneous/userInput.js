"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _keyEvents = _interopRequireDefault(require("./keyEvents"));
var _mouseEvents = _interopRequireDefault(require("./mouseEvents"));
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
                    var mouseWheelDelta = 0, shiftKeyDown = this.keyEvents.isShiftKeyDown(), relativeMouseCoordinates = (0, _vector).subtract2(this.mouseCoordinates, this.previousMouseCoordinates);
                    this.handlers.forEach(function(handler) {
                        return handler(relativeMouseCoordinates, mouseWheelDelta, shiftKeyDown);
                    });
                }
            }
        },
        {
            key: "mouseWheelHandler",
            value: function mouseWheelHandler(mouseWheelDelta, canvas) {
                var shiftKeyDown = this.keyEvents.isShiftKeyDown(), relativeMouseCoordinates = (0, _vector).zero2();
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
exports.default = UserInput;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXNjZWxsYW5lb3VzL3VzZXJJbnB1dC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEtleUV2ZW50cyBmcm9tIFwiLi9rZXlFdmVudHNcIjtcbmltcG9ydCBNb3VzZUV2ZW50cyBmcm9tIFwiLi9tb3VzZUV2ZW50c1wiO1xuXG5pbXBvcnQgeyB6ZXJvMiwgc3VidHJhY3QyIH0gZnJvbSBcIi4uL21hdGhzL3ZlY3RvclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VySW5wdXQge1xuICBjb25zdHJ1Y3RvcihoYW5kbGVycywga2V5RXZlbnRzLCBtb3VzZUV2ZW50cywgbW91c2VDb29yZGluYXRlcywgcHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzKSB7XG4gICAgdGhpcy5oYW5kbGVycyA9IGhhbmRsZXJzO1xuICAgIHRoaXMua2V5RXZlbnRzID0ga2V5RXZlbnRzO1xuICAgIHRoaXMubW91c2VFdmVudHMgPSBtb3VzZUV2ZW50cztcbiAgICB0aGlzLm1vdXNlQ29vcmRpbmF0ZXMgPSBtb3VzZUNvb3JkaW5hdGVzO1xuICAgIHRoaXMucHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzID0gcHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzO1xuICB9XG5cbiAgbW91c2VNb3ZlSGFuZGxlcihtb3VzZUNvb3JkaW5hdGVzLCBtb3VzZURvd24sIGNhbnZhcykge1xuICAgIHRoaXMucHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzID0gdGhpcy5tb3VzZUNvb3JkaW5hdGVzOyAgLy8vXG5cbiAgICB0aGlzLm1vdXNlQ29vcmRpbmF0ZXMgPSBtb3VzZUNvb3JkaW5hdGVzO1xuXG4gICAgaWYgKHRoaXMucHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKG1vdXNlRG93bikge1xuICAgICAgY29uc3QgbW91c2VXaGVlbERlbHRhID0gMCwgIC8vL1xuICAgICAgICAgICAgc2hpZnRLZXlEb3duID0gdGhpcy5rZXlFdmVudHMuaXNTaGlmdEtleURvd24oKSxcbiAgICAgICAgICAgIHJlbGF0aXZlTW91c2VDb29yZGluYXRlcyA9IHN1YnRyYWN0Mih0aGlzLm1vdXNlQ29vcmRpbmF0ZXMsIHRoaXMucHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzKTtcblxuICAgICAgdGhpcy5oYW5kbGVycy5mb3JFYWNoKChoYW5kbGVyKSA9PiBoYW5kbGVyKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgbW91c2VXaGVlbERlbHRhLCBzaGlmdEtleURvd24pKTtcbiAgICB9XG4gIH1cblxuICBtb3VzZVdoZWVsSGFuZGxlcihtb3VzZVdoZWVsRGVsdGEsIGNhbnZhcykge1xuICAgIGNvbnN0IHNoaWZ0S2V5RG93biA9IHRoaXMua2V5RXZlbnRzLmlzU2hpZnRLZXlEb3duKCksXG4gICAgICAgICAgcmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzID0gemVybzIoKTtcblxuICAgIHRoaXMuaGFuZGxlcnMuZm9yRWFjaCgoaGFuZGxlcikgPT4gaGFuZGxlcihyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlV2hlZWxEZWx0YSwgc2hpZnRLZXlEb3duKSk7XG4gIH1cblxuICBhZGRVc2VySW5wdXRIYW5kbGVyKHVzZXJJbnB1dEhhbmRsZXIpIHtcbiAgICBjb25zdCBoYW5kbGVyID0gdXNlcklucHV0SGFuZGxlcjsgLy8vXG5cbiAgICB0aGlzLmhhbmRsZXJzLnB1c2goaGFuZGxlcik7XG4gIH1cblxuICBhZGRFc2NhcGVLZXlEb3duSGFuZGxlcihlc2NhcGVLZXlEb3duSGFuZGxlcikgeyB0aGlzLmtleUV2ZW50cy5hZGRFc2NhcGVLZXlEb3duSGFuZGxlcihlc2NhcGVLZXlEb3duSGFuZGxlcik7IH1cblxuICBpbml0aWFsaXNlKGNhbnZhcykge1xuICAgIGNvbnN0IG1vdXNlTW92ZUhhbmRsZXIgPSB0aGlzLm1vdXNlTW92ZUhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICBtb3VzZVdoZWVsSGFuZGxlciA9IHRoaXMubW91c2VXaGVlbEhhbmRsZXIuYmluZCh0aGlzKTtcblxuICAgIHRoaXMua2V5RXZlbnRzLmluaXRpYWxpc2UoKTtcblxuICAgIHRoaXMubW91c2VFdmVudHMuaW5pdGlhbGlzZShjYW52YXMpO1xuXG4gICAgdGhpcy5tb3VzZUV2ZW50cy5hZGRNb3VzZU1vdmVIYW5kbGVyKG1vdXNlTW92ZUhhbmRsZXIpO1xuXG4gICAgdGhpcy5tb3VzZUV2ZW50cy5hZGRNb3VzZVdoZWVsSGFuZGxlcihtb3VzZVdoZWVsSGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgaGFuZGxlcnMgPSBbXSxcbiAgICAgICAgICBrZXlFdmVudHMgPSBLZXlFdmVudHMuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBtb3VzZUV2ZW50cyA9IE1vdXNlRXZlbnRzLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgbW91c2VDb29yZGluYXRlcyA9IG51bGwsICAvLy9cbiAgICAgICAgICBwcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMgPSBudWxsLCAgLy8vXG4gICAgICAgICAgdXNlcklucHV0ID0gbmV3IFVzZXJJbnB1dChoYW5kbGVycywga2V5RXZlbnRzLCBtb3VzZUV2ZW50cywgbW91c2VDb29yZGluYXRlcywgcHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzKTtcblxuICAgIHJldHVybiB1c2VySW5wdXQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJVc2VySW5wdXQiLCJoYW5kbGVycyIsImtleUV2ZW50cyIsIm1vdXNlRXZlbnRzIiwibW91c2VDb29yZGluYXRlcyIsInByZXZpb3VzTW91c2VDb29yZGluYXRlcyIsIm1vdXNlTW92ZUhhbmRsZXIiLCJtb3VzZURvd24iLCJjYW52YXMiLCJtb3VzZVdoZWVsRGVsdGEiLCJzaGlmdEtleURvd24iLCJpc1NoaWZ0S2V5RG93biIsInJlbGF0aXZlTW91c2VDb29yZGluYXRlcyIsInN1YnRyYWN0MiIsImZvckVhY2giLCJoYW5kbGVyIiwibW91c2VXaGVlbEhhbmRsZXIiLCJ6ZXJvMiIsImFkZFVzZXJJbnB1dEhhbmRsZXIiLCJ1c2VySW5wdXRIYW5kbGVyIiwicHVzaCIsImFkZEVzY2FwZUtleURvd25IYW5kbGVyIiwiZXNjYXBlS2V5RG93bkhhbmRsZXIiLCJpbml0aWFsaXNlIiwiYmluZCIsImFkZE1vdXNlTW92ZUhhbmRsZXIiLCJhZGRNb3VzZVdoZWVsSGFuZGxlciIsImZyb21Ob3RoaW5nIiwiS2V5RXZlbnRzIiwiTW91c2VFdmVudHMiLCJ1c2VySW5wdXQiXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7O0FBRVUsR0FBYSxDQUFiLFVBQWE7QUFDWCxHQUFlLENBQWYsWUFBZTtBQUVOLEdBQWlCLENBQWpCLE9BQWlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRTdCQSxTQUFTLGlCQUFmLFFBQVE7YUFBRkEsU0FBUyxDQUNoQkMsUUFBUSxFQUFFQyxTQUFTLEVBQUVDLFdBQVcsRUFBRUMsZ0JBQWdCLEVBQUVDLHdCQUF3Qjs7UUFDdEYsSUFBSSxDQUFDSixRQUFRLEdBQUdBLFFBQVE7UUFDeEIsSUFBSSxDQUFDQyxTQUFTLEdBQUdBLFNBQVM7UUFDMUIsSUFBSSxDQUFDQyxXQUFXLEdBQUdBLFdBQVc7UUFDOUIsSUFBSSxDQUFDQyxnQkFBZ0IsR0FBR0EsZ0JBQWdCO1FBQ3hDLElBQUksQ0FBQ0Msd0JBQXdCLEdBQUdBLHdCQUF3Qjs7OztZQUcxREMsR0FBZ0IsRUFBaEJBLENBQWdCO21CQUFoQkEsUUFBUSxDQUFSQSxnQkFBZ0IsQ0FBQ0YsZ0JBQWdCLEVBQUVHLFNBQVMsRUFBRUMsTUFBTSxFQUFFLENBQUM7Z0JBQ3JELElBQUksQ0FBQ0gsd0JBQXdCLEdBQUcsSUFBSSxDQUFDRCxnQkFBZ0IsQ0FBRyxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7Z0JBRTNELElBQUksQ0FBQ0EsZ0JBQWdCLEdBQUdBLGdCQUFnQjtnQkFFeEMsRUFBRSxFQUFFLElBQUksQ0FBQ0Msd0JBQXdC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
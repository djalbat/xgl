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
var UserInput = function() {
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
                    var mouseWheelDelta = 0, shiftKeyDown = this.keyEvents.isShiftKeyDown(), relativeMouseCoordinates = _vector.subtract2(this.mouseCoordinates, this.previousMouseCoordinates);
                    this.handlers.forEach(function(handler) {
                        return handler(relativeMouseCoordinates, mouseWheelDelta, shiftKeyDown);
                    });
                }
            }
        },
        {
            key: "mouseWheelHandler",
            value: function mouseWheelHandler(mouseWheelDelta, canvas) {
                var shiftKeyDown = this.keyEvents.isShiftKeyDown(), relativeMouseCoordinates = _vector.zero2();
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
            key: "initialise",
            value: function initialise(canvas) {
                var mouseMoveHandler = this.mouseMoveHandler.bind(this), mouseWheelHandler = this.mouseWheelHandler.bind(this);
                this.keyEvents.initialise(canvas);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXNjZWxsYW5lb3VzL3VzZXJJbnB1dC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEtleUV2ZW50cyBmcm9tIFwiLi9rZXlFdmVudHNcIjtcbmltcG9ydCBNb3VzZUV2ZW50cyBmcm9tIFwiLi9tb3VzZUV2ZW50c1wiO1xuXG5pbXBvcnQgeyB6ZXJvMiwgc3VidHJhY3QyIH0gZnJvbSBcIi4uL21hdGhzL3ZlY3RvclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VySW5wdXQge1xuICBjb25zdHJ1Y3RvcihoYW5kbGVycywga2V5RXZlbnRzLCBtb3VzZUV2ZW50cywgbW91c2VDb29yZGluYXRlcywgcHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzKSB7XG4gICAgdGhpcy5oYW5kbGVycyA9IGhhbmRsZXJzO1xuICAgIHRoaXMua2V5RXZlbnRzID0ga2V5RXZlbnRzO1xuICAgIHRoaXMubW91c2VFdmVudHMgPSBtb3VzZUV2ZW50cztcbiAgICB0aGlzLm1vdXNlQ29vcmRpbmF0ZXMgPSBtb3VzZUNvb3JkaW5hdGVzO1xuICAgIHRoaXMucHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzID0gcHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzO1xuICB9XG5cbiAgbW91c2VNb3ZlSGFuZGxlcihtb3VzZUNvb3JkaW5hdGVzLCBtb3VzZURvd24sIGNhbnZhcykge1xuICAgIHRoaXMucHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzID0gdGhpcy5tb3VzZUNvb3JkaW5hdGVzOyAgLy8vXG5cbiAgICB0aGlzLm1vdXNlQ29vcmRpbmF0ZXMgPSBtb3VzZUNvb3JkaW5hdGVzO1xuXG4gICAgaWYgKHRoaXMucHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKG1vdXNlRG93bikge1xuICAgICAgY29uc3QgbW91c2VXaGVlbERlbHRhID0gMCwgIC8vL1xuICAgICAgICAgICAgc2hpZnRLZXlEb3duID0gdGhpcy5rZXlFdmVudHMuaXNTaGlmdEtleURvd24oKSxcbiAgICAgICAgICAgIHJlbGF0aXZlTW91c2VDb29yZGluYXRlcyA9IHN1YnRyYWN0Mih0aGlzLm1vdXNlQ29vcmRpbmF0ZXMsIHRoaXMucHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzKTtcblxuICAgICAgdGhpcy5oYW5kbGVycy5mb3JFYWNoKChoYW5kbGVyKSA9PiBoYW5kbGVyKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgbW91c2VXaGVlbERlbHRhLCBzaGlmdEtleURvd24pKTtcbiAgICB9XG4gIH1cblxuICBtb3VzZVdoZWVsSGFuZGxlcihtb3VzZVdoZWVsRGVsdGEsIGNhbnZhcykge1xuICAgIGNvbnN0IHNoaWZ0S2V5RG93biA9IHRoaXMua2V5RXZlbnRzLmlzU2hpZnRLZXlEb3duKCksXG4gICAgICAgICAgcmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzID0gemVybzIoKTtcblxuICAgIHRoaXMuaGFuZGxlcnMuZm9yRWFjaCgoaGFuZGxlcikgPT4gaGFuZGxlcihyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlV2hlZWxEZWx0YSwgc2hpZnRLZXlEb3duKSk7XG4gIH1cblxuICBhZGRVc2VySW5wdXRIYW5kbGVyKHVzZXJJbnB1dEhhbmRsZXIpIHtcbiAgICBjb25zdCBoYW5kbGVyID0gdXNlcklucHV0SGFuZGxlcjsgLy8vXG5cbiAgICB0aGlzLmhhbmRsZXJzLnB1c2goaGFuZGxlcik7XG4gIH1cblxuICBpbml0aWFsaXNlKGNhbnZhcykge1xuICAgIGNvbnN0IG1vdXNlTW92ZUhhbmRsZXIgPSB0aGlzLm1vdXNlTW92ZUhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICBtb3VzZVdoZWVsSGFuZGxlciA9IHRoaXMubW91c2VXaGVlbEhhbmRsZXIuYmluZCh0aGlzKTtcblxuICAgIHRoaXMua2V5RXZlbnRzLmluaXRpYWxpc2UoY2FudmFzKTtcblxuICAgIHRoaXMubW91c2VFdmVudHMuaW5pdGlhbGlzZShjYW52YXMpO1xuXG4gICAgdGhpcy5tb3VzZUV2ZW50cy5hZGRNb3VzZU1vdmVIYW5kbGVyKG1vdXNlTW92ZUhhbmRsZXIpO1xuXG4gICAgdGhpcy5tb3VzZUV2ZW50cy5hZGRNb3VzZVdoZWVsSGFuZGxlcihtb3VzZVdoZWVsSGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgaGFuZGxlcnMgPSBbXSxcbiAgICAgICAgICBrZXlFdmVudHMgPSBLZXlFdmVudHMuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBtb3VzZUV2ZW50cyA9IE1vdXNlRXZlbnRzLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgbW91c2VDb29yZGluYXRlcyA9IG51bGwsICAvLy9cbiAgICAgICAgICBwcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMgPSBudWxsLCAgLy8vXG4gICAgICAgICAgdXNlcklucHV0ID0gbmV3IFVzZXJJbnB1dChoYW5kbGVycywga2V5RXZlbnRzLCBtb3VzZUV2ZW50cywgbW91c2VDb29yZGluYXRlcywgcHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzKTtcblxuICAgIHJldHVybiB1c2VySW5wdXQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztJQUVVLFVBQWE7SUFDWCxZQUFlO0lBRU4sT0FBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFN0IsU0FBUzthQUFULFNBQVMsQ0FDaEIsUUFBUSxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsZ0JBQWdCLEVBQUUsd0JBQXdCOzhCQURyRSxTQUFTO2FBRXJCLFFBQVEsR0FBRyxRQUFRO2FBQ25CLFNBQVMsR0FBRyxTQUFTO2FBQ3JCLFdBQVcsR0FBRyxXQUFXO2FBQ3pCLGdCQUFnQixHQUFHLGdCQUFnQjthQUNuQyx3QkFBd0IsR0FBRyx3QkFBd0I7O2lCQU52QyxTQUFTOztZQVM1QixHQUFnQixHQUFoQixnQkFBZ0I7NEJBQWhCLGdCQUFnQixDQUFDLGdCQUFnQixFQUFFLFNBQVMsRUFBRSxNQUFNO3FCQUM3Qyx3QkFBd0IsUUFBUSxnQkFBZ0IsQ0FBRyxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7cUJBRXRELGdCQUFnQixHQUFHLGdCQUFnQjt5QkFFL0Isd0JBQXdCLEtBQUssSUFBSTs7O29CQUl0QyxTQUFTO3dCQUNMLGVBQWUsR0FBRyxDQUFDLEVBQ25CLFlBQVksUUFBUSxTQUFTLENBQUMsY0FBYyxJQUM1Qyx3QkFBd0IsR0F2QkgsT0FBaUIsZ0JBdUJJLGdCQUFnQixPQUFPLHdCQUF3Qjt5QkFFMUYsUUFBUSxDQUFDLE9BQU8sVUFBRSxPQUFPOytCQUFLLE9BQU8sQ0FBQyx3QkFBd0IsRUFBRSxlQUFlLEVBQUUsWUFBWTs7Ozs7O1lBSXRHLEdBQWlCLEdBQWpCLGlCQUFpQjs0QkFBakIsaUJBQWlCLENBQUMsZUFBZSxFQUFFLE1BQU07b0JBQ2pDLFlBQVksUUFBUSxTQUFTLENBQUMsY0FBYyxJQUM1Qyx3QkFBd0IsR0EvQkQsT0FBaUI7cUJBaUN6QyxRQUFRLENBQUMsT0FBTyxVQUFFLE9BQU87MkJBQUssT0FBTyxDQUFDLHdCQUF3QixFQUFFLGVBQWUsRUFBRSxZQUFZOzs7OztZQUdwRyxHQUFtQixHQUFuQixtQkFBbUI7NEJBQW5CLG1CQUFtQixDQUFDLGdCQUFnQjtvQkFDNUIsT0FBTyxHQUFHLGdCQUFnQixDQUFFLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztxQkFFaEMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPOzs7O1lBRzVCLEdBQVUsR0FBVixVQUFVOzRCQUFWLFVBQVUsQ0FBQyxNQUFNO29CQUNULGdCQUFnQixRQUFRLGdCQUFnQixDQUFDLElBQUksUUFDN0MsaUJBQWlCLFFBQVEsaUJBQWlCLENBQUMsSUFBSTtxQkFFaEQsU0FBUyxDQUFDLFVBQVUsQ0FBQyxNQUFNO3FCQUUzQixXQUFXLENBQUMsVUFBVSxDQUFDLE1BQU07cUJBRTdCLFdBQVcsQ0FBQyxtQkFBbUIsQ0FBQyxnQkFBZ0I7cUJBRWhELFdBQVcsQ0FBQyxvQkFBb0IsQ0FBQyxpQkFBaUI7Ozs7O1lBR2xELEdBQVcsR0FBWCxXQUFXOzRCQUFYLFdBQVc7b0JBQ1YsUUFBUSxPQUNSLFNBQVMsR0E1REcsVUFBYSxTQTRESCxXQUFXLElBQ2pDLFdBQVcsR0E1REcsWUFBZSxTQTRESCxXQUFXLElBQ3JDLGdCQUFnQixHQUFHLElBQUksRUFDdkIsd0JBQXdCLEdBQUcsSUFBSSxFQUMvQixTQUFTLE9BQU8sU0FBUyxDQUFDLFFBQVEsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLGdCQUFnQixFQUFFLHdCQUF3Qjt1QkFFckcsU0FBUzs7OztXQTdEQyxTQUFTOztrQkFBVCxTQUFTIn0=
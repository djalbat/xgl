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
var _keyEvents = /*#__PURE__*/ _interop_require_default(require("./keyEvents"));
var _mouseEvents = /*#__PURE__*/ _interop_require_default(require("./mouseEvents"));
var _vector = require("../maths/vector");
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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var UserInput = /*#__PURE__*/ function() {
    function UserInput(handlers, keyEvents, mouseEvents, mouseCoordinates, previousMouseCoordinates) {
        _class_call_check(this, UserInput);
        this.handlers = handlers;
        this.keyEvents = keyEvents;
        this.mouseEvents = mouseEvents;
        this.mouseCoordinates = mouseCoordinates;
        this.previousMouseCoordinates = previousMouseCoordinates;
    }
    _create_class(UserInput, [
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXNjZWxsYW5lb3VzL3VzZXJJbnB1dC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEtleUV2ZW50cyBmcm9tIFwiLi9rZXlFdmVudHNcIjtcbmltcG9ydCBNb3VzZUV2ZW50cyBmcm9tIFwiLi9tb3VzZUV2ZW50c1wiO1xuXG5pbXBvcnQgeyB6ZXJvMiwgc3VidHJhY3QyIH0gZnJvbSBcIi4uL21hdGhzL3ZlY3RvclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VySW5wdXQge1xuICBjb25zdHJ1Y3RvcihoYW5kbGVycywga2V5RXZlbnRzLCBtb3VzZUV2ZW50cywgbW91c2VDb29yZGluYXRlcywgcHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzKSB7XG4gICAgdGhpcy5oYW5kbGVycyA9IGhhbmRsZXJzO1xuICAgIHRoaXMua2V5RXZlbnRzID0ga2V5RXZlbnRzO1xuICAgIHRoaXMubW91c2VFdmVudHMgPSBtb3VzZUV2ZW50cztcbiAgICB0aGlzLm1vdXNlQ29vcmRpbmF0ZXMgPSBtb3VzZUNvb3JkaW5hdGVzO1xuICAgIHRoaXMucHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzID0gcHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzO1xuICB9XG5cbiAgbW91c2VNb3ZlSGFuZGxlcihtb3VzZUNvb3JkaW5hdGVzLCBtb3VzZURvd24sIGNhbnZhcykge1xuICAgIHRoaXMucHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzID0gdGhpcy5tb3VzZUNvb3JkaW5hdGVzOyAgLy8vXG5cbiAgICB0aGlzLm1vdXNlQ29vcmRpbmF0ZXMgPSBtb3VzZUNvb3JkaW5hdGVzO1xuXG4gICAgaWYgKHRoaXMucHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKG1vdXNlRG93bikge1xuICAgICAgY29uc3QgbW91c2VXaGVlbERlbHRhID0gMCwgIC8vL1xuICAgICAgICAgICAgc2hpZnRLZXlEb3duID0gdGhpcy5rZXlFdmVudHMuaXNTaGlmdEtleURvd24oKSxcbiAgICAgICAgICAgIHJlbGF0aXZlTW91c2VDb29yZGluYXRlcyA9IHN1YnRyYWN0Mih0aGlzLm1vdXNlQ29vcmRpbmF0ZXMsIHRoaXMucHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzKTtcblxuICAgICAgdGhpcy5oYW5kbGVycy5mb3JFYWNoKChoYW5kbGVyKSA9PiB7XG4gICAgICAgIGhhbmRsZXIocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCBtb3VzZVdoZWVsRGVsdGEsIHNoaWZ0S2V5RG93bik7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBtb3VzZVdoZWVsSGFuZGxlcihtb3VzZVdoZWVsRGVsdGEsIGNhbnZhcykge1xuICAgIGNvbnN0IHNoaWZ0S2V5RG93biA9IHRoaXMua2V5RXZlbnRzLmlzU2hpZnRLZXlEb3duKCksXG4gICAgICAgICAgcmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzID0gemVybzIoKTtcblxuICAgIHRoaXMuaGFuZGxlcnMuZm9yRWFjaCgoaGFuZGxlcikgPT4ge1xuICAgICAgaGFuZGxlcihyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlV2hlZWxEZWx0YSwgc2hpZnRLZXlEb3duKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFkZFVzZXJJbnB1dEhhbmRsZXIodXNlcklucHV0SGFuZGxlcikge1xuICAgIGNvbnN0IGhhbmRsZXIgPSB1c2VySW5wdXRIYW5kbGVyOyAvLy9cblxuICAgIHRoaXMuaGFuZGxlcnMucHVzaChoYW5kbGVyKTtcbiAgfVxuXG4gIGFkZEVzY2FwZUtleURvd25IYW5kbGVyKGVzY2FwZUtleURvd25IYW5kbGVyKSB7IHRoaXMua2V5RXZlbnRzLmFkZEVzY2FwZUtleURvd25IYW5kbGVyKGVzY2FwZUtleURvd25IYW5kbGVyKTsgfVxuXG4gIGluaXRpYWxpc2UoY2FudmFzKSB7XG4gICAgY29uc3QgbW91c2VNb3ZlSGFuZGxlciA9IHRoaXMubW91c2VNb3ZlSGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIG1vdXNlV2hlZWxIYW5kbGVyID0gdGhpcy5tb3VzZVdoZWVsSGFuZGxlci5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5rZXlFdmVudHMuaW5pdGlhbGlzZSgpO1xuXG4gICAgdGhpcy5tb3VzZUV2ZW50cy5pbml0aWFsaXNlKGNhbnZhcyk7XG5cbiAgICB0aGlzLm1vdXNlRXZlbnRzLmFkZE1vdXNlTW92ZUhhbmRsZXIobW91c2VNb3ZlSGFuZGxlcik7XG5cbiAgICB0aGlzLm1vdXNlRXZlbnRzLmFkZE1vdXNlV2hlZWxIYW5kbGVyKG1vdXNlV2hlZWxIYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBoYW5kbGVycyA9IFtdLFxuICAgICAgICAgIGtleUV2ZW50cyA9IEtleUV2ZW50cy5mcm9tTm90aGluZygpLFxuICAgICAgICAgIG1vdXNlRXZlbnRzID0gTW91c2VFdmVudHMuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBtb3VzZUNvb3JkaW5hdGVzID0gbnVsbCwgIC8vL1xuICAgICAgICAgIHByZXZpb3VzTW91c2VDb29yZGluYXRlcyA9IG51bGwsICAvLy9cbiAgICAgICAgICB1c2VySW5wdXQgPSBuZXcgVXNlcklucHV0KGhhbmRsZXJzLCBrZXlFdmVudHMsIG1vdXNlRXZlbnRzLCBtb3VzZUNvb3JkaW5hdGVzLCBwcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMpO1xuXG4gICAgcmV0dXJuIHVzZXJJbnB1dDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlVzZXJJbnB1dCIsImhhbmRsZXJzIiwia2V5RXZlbnRzIiwibW91c2VFdmVudHMiLCJtb3VzZUNvb3JkaW5hdGVzIiwicHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzIiwibW91c2VNb3ZlSGFuZGxlciIsIm1vdXNlRG93biIsImNhbnZhcyIsIm1vdXNlV2hlZWxEZWx0YSIsInNoaWZ0S2V5RG93biIsImlzU2hpZnRLZXlEb3duIiwicmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzIiwic3VidHJhY3QyIiwiZm9yRWFjaCIsImhhbmRsZXIiLCJtb3VzZVdoZWVsSGFuZGxlciIsInplcm8yIiwiYWRkVXNlcklucHV0SGFuZGxlciIsInVzZXJJbnB1dEhhbmRsZXIiLCJwdXNoIiwiYWRkRXNjYXBlS2V5RG93bkhhbmRsZXIiLCJlc2NhcGVLZXlEb3duSGFuZGxlciIsImluaXRpYWxpc2UiLCJiaW5kIiwiYWRkTW91c2VNb3ZlSGFuZGxlciIsImFkZE1vdXNlV2hlZWxIYW5kbGVyIiwiZnJvbU5vdGhpbmciLCJLZXlFdmVudHMiLCJNb3VzZUV2ZW50cyIsInVzZXJJbnB1dCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFPcUJBOzs7Z0VBTEM7a0VBQ0U7c0JBRVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEIsSUFBQSxBQUFNQSwwQkFBRCxBQUFMO2FBQU1BLFVBQ1BDLFFBQVEsRUFBRUMsU0FBUyxFQUFFQyxXQUFXLEVBQUVDLGdCQUFnQixFQUFFQyx3QkFBd0I7Z0NBRHJFTDtRQUVqQixJQUFJLENBQUNDLFFBQVEsR0FBR0E7UUFDaEIsSUFBSSxDQUFDQyxTQUFTLEdBQUdBO1FBQ2pCLElBQUksQ0FBQ0MsV0FBVyxHQUFHQTtRQUNuQixJQUFJLENBQUNDLGdCQUFnQixHQUFHQTtRQUN4QixJQUFJLENBQUNDLHdCQUF3QixHQUFHQTs7a0JBTmZMOztZQVNuQk0sS0FBQUE7bUJBQUFBLFNBQUFBLGlCQUFpQkYsZ0JBQWdCLEVBQUVHLFNBQVMsRUFBRUMsTUFBTTtnQkFDbEQsSUFBSSxDQUFDSCx3QkFBd0IsR0FBRyxJQUFJLENBQUNELGdCQUFnQixFQUFHLEdBQUc7Z0JBRTNELElBQUksQ0FBQ0EsZ0JBQWdCLEdBQUdBO2dCQUV4QixJQUFJLElBQUksQ0FBQ0Msd0JBQXdCLEtBQUssTUFBTTtvQkFDMUM7Z0JBQ0Y7Z0JBRUEsSUFBSUUsV0FBVztvQkFDYixJQUFNRSxrQkFBa0IsR0FDbEJDLGVBQWUsSUFBSSxDQUFDUixTQUFTLENBQUNTLGNBQWMsSUFDNUNDLDJCQUEyQkMsSUFBQUEsaUJBQVMsRUFBQyxJQUFJLENBQUNULGdCQUFnQixFQUFFLElBQUksQ0FBQ0Msd0JBQXdCO29CQUUvRixJQUFJLENBQUNKLFFBQVEsQ0FBQ2EsT0FBTyxDQUFDLFNBQUNDO3dCQUNyQkEsUUFBUUgsMEJBQTBCSCxpQkFBaUJDO29CQUNyRDtnQkFDRjtZQUNGOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBLGtCQUFrQlAsZUFBZSxFQUFFRCxNQUFNO2dCQUN2QyxJQUFNRSxlQUFlLElBQUksQ0FBQ1IsU0FBUyxDQUFDUyxjQUFjLElBQzVDQywyQkFBMkJLLElBQUFBLGFBQUs7Z0JBRXRDLElBQUksQ0FBQ2hCLFFBQVEsQ0FBQ2EsT0FBTyxDQUFDLFNBQUNDO29CQUNyQkEsUUFBUUgsMEJBQTBCSCxpQkFBaUJDO2dCQUNyRDtZQUNGOzs7WUFFQVEsS0FBQUE7bUJBQUFBLFNBQUFBLG9CQUFvQkMsZ0JBQWdCO2dCQUNsQyxJQUFNSixVQUFVSSxrQkFBa0IsR0FBRztnQkFFckMsSUFBSSxDQUFDbEIsUUFBUSxDQUFDbUIsSUFBSSxDQUFDTDtZQUNyQjs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQSx3QkFBd0JDLG9CQUFvQjtnQkFBSSxJQUFJLENBQUNwQixTQUFTLENBQUNtQix1QkFBdUIsQ0FBQ0M7WUFBdUI7OztZQUU5R0MsS0FBQUE7bUJBQUFBLFNBQUFBLFdBQVdmLE1BQU07Z0JBQ2YsSUFBTUYsbUJBQW1CLElBQUksQ0FBQ0EsZ0JBQWdCLENBQUNrQixJQUFJLENBQUMsSUFBSSxHQUNsRFIsb0JBQW9CLElBQUksQ0FBQ0EsaUJBQWlCLENBQUNRLElBQUksQ0FBQyxJQUFJO2dCQUUxRCxJQUFJLENBQUN0QixTQUFTLENBQUNxQixVQUFVO2dCQUV6QixJQUFJLENBQUNwQixXQUFXLENBQUNvQixVQUFVLENBQUNmO2dCQUU1QixJQUFJLENBQUNMLFdBQVcsQ0FBQ3NCLG1CQUFtQixDQUFDbkI7Z0JBRXJDLElBQUksQ0FBQ0gsV0FBVyxDQUFDdUIsb0JBQW9CLENBQUNWO1lBQ3hDOzs7O1lBRU9XLEtBQUFBO21CQUFQLFNBQU9BO2dCQUNMLElBQU0xQixXQUFXLEVBQUUsRUFDYkMsWUFBWTBCLGtCQUFTLENBQUNELFdBQVcsSUFDakN4QixjQUFjMEIsb0JBQVcsQ0FBQ0YsV0FBVyxJQUNyQ3ZCLG1CQUFtQixNQUNuQkMsMkJBQTJCLE1BQzNCeUIsWUFBWSxJQWpFRDlCLFVBaUVlQyxVQUFVQyxXQUFXQyxhQUFhQyxrQkFBa0JDO2dCQUVwRixPQUFPeUI7WUFDVDs7O1dBcEVtQjlCIn0=
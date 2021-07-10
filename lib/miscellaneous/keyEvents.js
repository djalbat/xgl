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
var KeyEvents = /*#__PURE__*/ function() {
    function KeyEvents(handlers, shiftKeyDown) {
        _classCallCheck(this, KeyEvents);
        this.handlers = handlers;
        this.shiftKeyDown = shiftKeyDown;
    }
    _createClass(KeyEvents, [
        {
            key: "isShiftKeyDown",
            value: function isShiftKeyDown() {
                return this.shiftKeyDown;
            }
        },
        {
            key: "keyUpEventListener",
            value: function keyUpEventListener(event) {
                var keyCode = event.keyCode;
                if (keyCode === _constants.SHIFT_KEY_CODE) {
                    this.shiftKeyDown = false;
                    this.handlers.forEach((function(handler) {
                        return handler(this.shiftKeyDown);
                    }).bind(this));
                }
            }
        },
        {
            key: "keyDownEventListener",
            value: function keyDownEventListener(event) {
                var keyCode = event.keyCode;
                if (keyCode === _constants.SHIFT_KEY_CODE) {
                    this.shiftKeyDown = true;
                    this.handlers.forEach((function(handler) {
                        return handler(this.shiftKeyDown);
                    }).bind(this));
                }
            }
        },
        {
            key: "addShiftKeyHandler",
            value: function addShiftKeyHandler(shiftKeyHandler) {
                var handler = shiftKeyHandler; ///
                this.handlers.push(handler);
            }
        },
        {
            key: "initialise",
            value: function initialise(canvas) {
                var documentDOMElement = document.documentElement, keyUpEventListener = this.keyUpEventListener.bind(this), keyDownEventListener = this.keyDownEventListener.bind(this);
                documentDOMElement.addEventListener("keyup", keyUpEventListener);
                documentDOMElement.addEventListener("keydown", keyDownEventListener);
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var handlers = [], shiftKeyDown = false, keyEvents = new KeyEvents(handlers, shiftKeyDown);
                return keyEvents;
            }
        }
    ]);
    return KeyEvents;
}();
exports.default = KeyEvents;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXNjZWxsYW5lb3VzL2tleUV2ZW50cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgU0hJRlRfS0VZX0NPREUgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEtleUV2ZW50cyB7XG4gIGNvbnN0cnVjdG9yKGhhbmRsZXJzLCBzaGlmdEtleURvd24pIHtcbiAgICB0aGlzLmhhbmRsZXJzID0gaGFuZGxlcnM7XG4gICAgdGhpcy5zaGlmdEtleURvd24gPSBzaGlmdEtleURvd247XG4gIH1cblxuICBpc1NoaWZ0S2V5RG93bigpIHtcbiAgICByZXR1cm4gdGhpcy5zaGlmdEtleURvd247XG4gIH1cblxuICBrZXlVcEV2ZW50TGlzdGVuZXIoZXZlbnQpIHtcbiAgICBjb25zdCB7IGtleUNvZGUgfSA9IGV2ZW50O1xuXG4gICAgaWYgKGtleUNvZGUgPT09IFNISUZUX0tFWV9DT0RFKSB7XG4gICAgICB0aGlzLnNoaWZ0S2V5RG93biA9IGZhbHNlO1xuXG4gICAgICB0aGlzLmhhbmRsZXJzLmZvckVhY2goKGhhbmRsZXIpID0+IGhhbmRsZXIodGhpcy5zaGlmdEtleURvd24pKTtcbiAgICB9XG4gIH1cblxuICBrZXlEb3duRXZlbnRMaXN0ZW5lcihldmVudCkge1xuICAgIGNvbnN0IHsga2V5Q29kZSB9ID0gZXZlbnQ7XG5cbiAgICBpZiAoa2V5Q29kZSA9PT0gU0hJRlRfS0VZX0NPREUpIHtcbiAgICAgIHRoaXMuc2hpZnRLZXlEb3duID0gdHJ1ZTtcblxuICAgICAgdGhpcy5oYW5kbGVycy5mb3JFYWNoKChoYW5kbGVyKSA9PiBoYW5kbGVyKHRoaXMuc2hpZnRLZXlEb3duKSk7XG4gICAgfVxuICB9XG5cbiAgYWRkU2hpZnRLZXlIYW5kbGVyKHNoaWZ0S2V5SGFuZGxlcikge1xuICAgIGNvbnN0IGhhbmRsZXIgPSBzaGlmdEtleUhhbmRsZXI7ICAvLy9cblxuICAgIHRoaXMuaGFuZGxlcnMucHVzaChoYW5kbGVyKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoY2FudmFzKSB7XG4gICAgY29uc3QgZG9jdW1lbnRET01FbGVtZW50ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCAgLy8vXG4gICAgICAgICAga2V5VXBFdmVudExpc3RlbmVyID0gdGhpcy5rZXlVcEV2ZW50TGlzdGVuZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICBrZXlEb3duRXZlbnRMaXN0ZW5lciA9IHRoaXMua2V5RG93bkV2ZW50TGlzdGVuZXIuYmluZCh0aGlzKTtcblxuICAgIGRvY3VtZW50RE9NRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwga2V5VXBFdmVudExpc3RlbmVyKTtcblxuICAgIGRvY3VtZW50RE9NRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBrZXlEb3duRXZlbnRMaXN0ZW5lcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgaGFuZGxlcnMgPSBbXSxcbiAgICAgICAgICBzaGlmdEtleURvd24gPSBmYWxzZSwgIC8vL1xuICAgICAgICAgIGtleUV2ZW50cyA9IG5ldyBLZXlFdmVudHMoaGFuZGxlcnMsIHNoaWZ0S2V5RG93bik7XG5cbiAgICByZXR1cm4ga2V5RXZlbnRzO1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7QUFFbUIsR0FBYyxDQUFkLFVBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXhCLFNBQVM7YUFBVCxTQUFTLENBQ2hCLFFBQVEsRUFBRSxZQUFZOzhCQURmLFNBQVM7YUFFckIsUUFBUSxHQUFHLFFBQVE7YUFDbkIsWUFBWSxHQUFHLFlBQVk7O2lCQUhmLFNBQVM7O1lBTTVCLEdBQWMsR0FBZCxjQUFjOzRCQUFkLGNBQWMsR0FBRyxDQUFDOzRCQUNKLFlBQVk7WUFDMUIsQ0FBQzs7O1lBRUQsR0FBa0IsR0FBbEIsa0JBQWtCOzRCQUFsQixrQkFBa0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDekIsR0FBSyxDQUFHLE9BQU8sR0FBSyxLQUFLLENBQWpCLE9BQU87Z0JBRWYsRUFBRSxFQUFFLE9BQU8sS0FmZ0IsVUFBYyxpQkFlVCxDQUFDO3lCQUMxQixZQUFZLEdBQUcsS0FBSzt5QkFFcEIsUUFBUSxDQUFDLE9BQU8sV0FBRSxPQUFPOytCQUFLLE9BQU8sTUFBTSxZQUFZOztnQkFDOUQsQ0FBQztZQUNILENBQUM7OztZQUVELEdBQW9CLEdBQXBCLG9CQUFvQjs0QkFBcEIsb0JBQW9CLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQzNCLEdBQUssQ0FBRyxPQUFPLEdBQUssS0FBSyxDQUFqQixPQUFPO2dCQUVmLEVBQUUsRUFBRSxPQUFPLEtBekJnQixVQUFjLGlCQXlCVCxDQUFDO3lCQUMxQixZQUFZLEdBQUcsSUFBSTt5QkFFbkIsUUFBUSxDQUFDLE9BQU8sV0FBRSxPQUFPOytCQUFLLE9BQU8sTUFBTSxZQUFZOztnQkFDOUQsQ0FBQztZQUNILENBQUM7OztZQUVELEdBQWtCLEdBQWxCLGtCQUFrQjs0QkFBbEIsa0JBQWtCLENBQUMsZUFBZSxFQUFFLENBQUM7Z0JBQ25DLEdBQUssQ0FBQyxPQUFPLEdBQUcsZUFBZSxDQUFHLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztxQkFFaEMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPO1lBQzVCLENBQUM7OztZQUVELEdBQVUsR0FBVixVQUFVOzRCQUFWLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFDbEIsR0FBSyxDQUFDLGtCQUFrQixHQUFHLFFBQVEsQ0FBQyxlQUFlLEVBQzdDLGtCQUFrQixRQUFRLGtCQUFrQixDQUFDLElBQUksUUFDakQsb0JBQW9CLFFBQVEsb0JBQW9CLENBQUMsSUFBSTtnQkFFM0Qsa0JBQWtCLENBQUMsZ0JBQWdCLEVBQUMsS0FBTyxHQUFFLGtCQUFrQjtnQkFFL0Qsa0JBQWtCLENBQUMsZ0JBQWdCLEVBQUMsT0FBUyxHQUFFLG9CQUFvQjtZQUNyRSxDQUFDOzs7O1lBRU0sR0FBVyxHQUFYLFdBQVc7NEJBQVgsV0FBVyxHQUFHLENBQUM7Z0JBQ3BCLEdBQUssQ0FBQyxRQUFRLE9BQ1IsWUFBWSxHQUFHLEtBQUssRUFDcEIsU0FBUyxHQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLFlBQVk7dUJBRS9DLFNBQVM7WUFDbEIsQ0FBQzs7O1dBcERrQixTQUFTOztrQkFBVCxTQUFTIn0=
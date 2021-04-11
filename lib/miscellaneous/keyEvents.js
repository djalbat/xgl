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
var KeyEvents = function() {
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXNjZWxsYW5lb3VzL2tleUV2ZW50cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgU0hJRlRfS0VZX0NPREUgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEtleUV2ZW50cyB7XG4gIGNvbnN0cnVjdG9yKGhhbmRsZXJzLCBzaGlmdEtleURvd24pIHtcbiAgICB0aGlzLmhhbmRsZXJzID0gaGFuZGxlcnM7XG4gICAgdGhpcy5zaGlmdEtleURvd24gPSBzaGlmdEtleURvd247XG4gIH1cblxuICBpc1NoaWZ0S2V5RG93bigpIHtcbiAgICByZXR1cm4gdGhpcy5zaGlmdEtleURvd247XG4gIH1cblxuICBrZXlVcEV2ZW50TGlzdGVuZXIoZXZlbnQpIHtcbiAgICBjb25zdCB7IGtleUNvZGUgfSA9IGV2ZW50O1xuXG4gICAgaWYgKGtleUNvZGUgPT09IFNISUZUX0tFWV9DT0RFKSB7XG4gICAgICB0aGlzLnNoaWZ0S2V5RG93biA9IGZhbHNlO1xuXG4gICAgICB0aGlzLmhhbmRsZXJzLmZvckVhY2goKGhhbmRsZXIpID0+IGhhbmRsZXIodGhpcy5zaGlmdEtleURvd24pKTtcbiAgICB9XG4gIH1cblxuICBrZXlEb3duRXZlbnRMaXN0ZW5lcihldmVudCkge1xuICAgIGNvbnN0IHsga2V5Q29kZSB9ID0gZXZlbnQ7XG5cbiAgICBpZiAoa2V5Q29kZSA9PT0gU0hJRlRfS0VZX0NPREUpIHtcbiAgICAgIHRoaXMuc2hpZnRLZXlEb3duID0gdHJ1ZTtcblxuICAgICAgdGhpcy5oYW5kbGVycy5mb3JFYWNoKChoYW5kbGVyKSA9PiBoYW5kbGVyKHRoaXMuc2hpZnRLZXlEb3duKSk7XG4gICAgfVxuICB9XG5cbiAgYWRkU2hpZnRLZXlIYW5kbGVyKHNoaWZ0S2V5SGFuZGxlcikge1xuICAgIGNvbnN0IGhhbmRsZXIgPSBzaGlmdEtleUhhbmRsZXI7ICAvLy9cblxuICAgIHRoaXMuaGFuZGxlcnMucHVzaChoYW5kbGVyKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoY2FudmFzKSB7XG4gICAgY29uc3QgZG9jdW1lbnRET01FbGVtZW50ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCAgLy8vXG4gICAgICAgICAga2V5VXBFdmVudExpc3RlbmVyID0gdGhpcy5rZXlVcEV2ZW50TGlzdGVuZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICBrZXlEb3duRXZlbnRMaXN0ZW5lciA9IHRoaXMua2V5RG93bkV2ZW50TGlzdGVuZXIuYmluZCh0aGlzKTtcblxuICAgIGRvY3VtZW50RE9NRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwga2V5VXBFdmVudExpc3RlbmVyKTtcblxuICAgIGRvY3VtZW50RE9NRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBrZXlEb3duRXZlbnRMaXN0ZW5lcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgaGFuZGxlcnMgPSBbXSxcbiAgICAgICAgICBzaGlmdEtleURvd24gPSBmYWxzZSwgIC8vL1xuICAgICAgICAgIGtleUV2ZW50cyA9IG5ldyBLZXlFdmVudHMoaGFuZGxlcnMsIHNoaWZ0S2V5RG93bik7XG5cbiAgICByZXR1cm4ga2V5RXZlbnRzO1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7SUFFbUIsVUFBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFeEIsU0FBUzthQUFULFNBQVMsQ0FDaEIsUUFBUSxFQUFFLFlBQVk7OEJBRGYsU0FBUzthQUVyQixRQUFRLEdBQUcsUUFBUTthQUNuQixZQUFZLEdBQUcsWUFBWTs7aUJBSGYsU0FBUzs7WUFNNUIsR0FBYyxHQUFkLGNBQWM7NEJBQWQsY0FBYzs0QkFDQSxZQUFZOzs7O1lBRzFCLEdBQWtCLEdBQWxCLGtCQUFrQjs0QkFBbEIsa0JBQWtCLENBQUMsS0FBSztvQkFDZCxPQUFPLEdBQUssS0FBSyxDQUFqQixPQUFPO29CQUVYLE9BQU8sS0FmZ0IsVUFBYzt5QkFnQmxDLFlBQVksR0FBRyxLQUFLO3lCQUVwQixRQUFRLENBQUMsT0FBTyxXQUFFLE9BQU87K0JBQUssT0FBTyxNQUFNLFlBQVk7Ozs7OztZQUloRSxHQUFvQixHQUFwQixvQkFBb0I7NEJBQXBCLG9CQUFvQixDQUFDLEtBQUs7b0JBQ2hCLE9BQU8sR0FBSyxLQUFLLENBQWpCLE9BQU87b0JBRVgsT0FBTyxLQXpCZ0IsVUFBYzt5QkEwQmxDLFlBQVksR0FBRyxJQUFJO3lCQUVuQixRQUFRLENBQUMsT0FBTyxXQUFFLE9BQU87K0JBQUssT0FBTyxNQUFNLFlBQVk7Ozs7OztZQUloRSxHQUFrQixHQUFsQixrQkFBa0I7NEJBQWxCLGtCQUFrQixDQUFDLGVBQWU7b0JBQzFCLE9BQU8sR0FBRyxlQUFlLENBQUcsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO3FCQUVoQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU87Ozs7WUFHNUIsR0FBVSxHQUFWLFVBQVU7NEJBQVYsVUFBVSxDQUFDLE1BQU07b0JBQ1Qsa0JBQWtCLEdBQUcsUUFBUSxDQUFDLGVBQWUsRUFDN0Msa0JBQWtCLFFBQVEsa0JBQWtCLENBQUMsSUFBSSxRQUNqRCxvQkFBb0IsUUFBUSxvQkFBb0IsQ0FBQyxJQUFJO2dCQUUzRCxrQkFBa0IsQ0FBQyxnQkFBZ0IsRUFBQyxLQUFPLEdBQUUsa0JBQWtCO2dCQUUvRCxrQkFBa0IsQ0FBQyxnQkFBZ0IsRUFBQyxPQUFTLEdBQUUsb0JBQW9COzs7OztZQUc5RCxHQUFXLEdBQVgsV0FBVzs0QkFBWCxXQUFXO29CQUNWLFFBQVEsT0FDUixZQUFZLEdBQUcsS0FBSyxFQUNwQixTQUFTLE9BQU8sU0FBUyxDQUFDLFFBQVEsRUFBRSxZQUFZO3VCQUUvQyxTQUFTOzs7O1dBbkRDLFNBQVM7O2tCQUFULFNBQVMifQ==
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _keyCodes = require("../keyCodes");
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
                if (keyCode === _keyCodes.SHIFT_KEY_CODE) {
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
                if (keyCode === _keyCodes.SHIFT_KEY_CODE) {
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
            key: "addEscapeKeyDownHandler",
            value: function addEscapeKeyDownHandler(escapeKeyDownHandler) {
                var documentDOMElement = document.documentElement; ///
                documentDOMElement.addEventListener(_eventTypes.KEYDOWN_EVENT_TYPE, function(event) {
                    var keyCode = event.keyCode;
                    if (keyCode === _keyCodes.ESCAPE_KEY_CODE) {
                        escapeKeyDownHandler();
                    }
                });
            }
        },
        {
            key: "initialise",
            value: function initialise() {
                var documentDOMElement = document.documentElement, keyUpEventListener = this.keyUpEventListener.bind(this), keyDownEventListener = this.keyDownEventListener.bind(this);
                documentDOMElement.addEventListener(_eventTypes.KEYUP_EVENT_TYPE, keyUpEventListener);
                documentDOMElement.addEventListener(_eventTypes.KEYDOWN_EVENT_TYPE, keyDownEventListener);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXNjZWxsYW5lb3VzL2tleUV2ZW50cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRVNDQVBFX0tFWV9DT0RFLCBTSElGVF9LRVlfQ09ERSB9IGZyb20gXCIuLi9rZXlDb2Rlc1wiO1xuaW1wb3J0IHsgS0VZVVBfRVZFTlRfVFlQRSwgS0VZRE9XTl9FVkVOVF9UWVBFIH0gZnJvbSBcIi4uL2V2ZW50VHlwZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgS2V5RXZlbnRzIHtcbiAgY29uc3RydWN0b3IoaGFuZGxlcnMsIHNoaWZ0S2V5RG93bikge1xuICAgIHRoaXMuaGFuZGxlcnMgPSBoYW5kbGVycztcbiAgICB0aGlzLnNoaWZ0S2V5RG93biA9IHNoaWZ0S2V5RG93bjtcbiAgfVxuXG4gIGlzU2hpZnRLZXlEb3duKCkge1xuICAgIHJldHVybiB0aGlzLnNoaWZ0S2V5RG93bjtcbiAgfVxuXG4gIGtleVVwRXZlbnRMaXN0ZW5lcihldmVudCkge1xuICAgIGNvbnN0IHsga2V5Q29kZSB9ID0gZXZlbnQ7XG5cbiAgICBpZiAoa2V5Q29kZSA9PT0gU0hJRlRfS0VZX0NPREUpIHtcbiAgICAgIHRoaXMuc2hpZnRLZXlEb3duID0gZmFsc2U7XG5cbiAgICAgIHRoaXMuaGFuZGxlcnMuZm9yRWFjaCgoaGFuZGxlcikgPT4gaGFuZGxlcih0aGlzLnNoaWZ0S2V5RG93bikpO1xuICAgIH1cbiAgfVxuXG4gIGtleURvd25FdmVudExpc3RlbmVyKGV2ZW50KSB7XG4gICAgY29uc3QgeyBrZXlDb2RlIH0gPSBldmVudDtcblxuICAgIGlmIChrZXlDb2RlID09PSBTSElGVF9LRVlfQ09ERSkge1xuICAgICAgdGhpcy5zaGlmdEtleURvd24gPSB0cnVlO1xuXG4gICAgICB0aGlzLmhhbmRsZXJzLmZvckVhY2goKGhhbmRsZXIpID0+IGhhbmRsZXIodGhpcy5zaGlmdEtleURvd24pKTtcbiAgICB9XG4gIH1cblxuICBhZGRTaGlmdEtleUhhbmRsZXIoc2hpZnRLZXlIYW5kbGVyKSB7XG4gICAgY29uc3QgaGFuZGxlciA9IHNoaWZ0S2V5SGFuZGxlcjsgIC8vL1xuXG4gICAgdGhpcy5oYW5kbGVycy5wdXNoKGhhbmRsZXIpO1xuICB9XG5cbiAgYWRkRXNjYXBlS2V5RG93bkhhbmRsZXIoZXNjYXBlS2V5RG93bkhhbmRsZXIpIHtcbiAgICBjb25zdCBkb2N1bWVudERPTUVsZW1lbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7ICAvLy9cblxuICAgIGRvY3VtZW50RE9NRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKEtFWURPV05fRVZFTlRfVFlQRSwgKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCB7IGtleUNvZGUgfSA9IGV2ZW50O1xuXG4gICAgICBpZiAoa2V5Q29kZSA9PT0gRVNDQVBFX0tFWV9DT0RFKSB7XG4gICAgICAgIGVzY2FwZUtleURvd25IYW5kbGVyKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIGNvbnN0IGRvY3VtZW50RE9NRWxlbWVudCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgIC8vL1xuICAgICAgICAgIGtleVVwRXZlbnRMaXN0ZW5lciA9IHRoaXMua2V5VXBFdmVudExpc3RlbmVyLmJpbmQodGhpcyksXG4gICAgICAgICAga2V5RG93bkV2ZW50TGlzdGVuZXIgPSB0aGlzLmtleURvd25FdmVudExpc3RlbmVyLmJpbmQodGhpcyk7XG5cbiAgICBkb2N1bWVudERPTUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihLRVlVUF9FVkVOVF9UWVBFLCBrZXlVcEV2ZW50TGlzdGVuZXIpO1xuXG4gICAgZG9jdW1lbnRET01FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoS0VZRE9XTl9FVkVOVF9UWVBFLCBrZXlEb3duRXZlbnRMaXN0ZW5lcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgaGFuZGxlcnMgPSBbXSxcbiAgICAgICAgICBzaGlmdEtleURvd24gPSBmYWxzZSwgIC8vL1xuICAgICAgICAgIGtleUV2ZW50cyA9IG5ldyBLZXlFdmVudHMoaGFuZGxlcnMsIHNoaWZ0S2V5RG93bik7XG5cbiAgICByZXR1cm4ga2V5RXZlbnRzO1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7QUFFb0MsR0FBYSxDQUFiLFNBQWE7QUFDUixHQUFlLENBQWYsV0FBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFL0MsU0FBUzthQUFULFNBQVMsQ0FDaEIsUUFBUSxFQUFFLFlBQVk7OEJBRGYsU0FBUzthQUVyQixRQUFRLEdBQUcsUUFBUTthQUNuQixZQUFZLEdBQUcsWUFBWTs7aUJBSGYsU0FBUzs7WUFNNUIsR0FBYyxHQUFkLGNBQWM7NEJBQWQsY0FBYyxHQUFHLENBQUM7NEJBQ0osWUFBWTtZQUMxQixDQUFDOzs7WUFFRCxHQUFrQixHQUFsQixrQkFBa0I7NEJBQWxCLGtCQUFrQixDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUN6QixHQUFLLENBQUcsT0FBTyxHQUFLLEtBQUssQ0FBakIsT0FBTztnQkFFZixFQUFFLEVBQUUsT0FBTyxLQWhCaUMsU0FBYSxpQkFnQnpCLENBQUM7eUJBQzFCLFlBQVksR0FBRyxLQUFLO3lCQUVwQixRQUFRLENBQUMsT0FBTyxXQUFFLE9BQU87K0JBQUssT0FBTyxNQUFNLFlBQVk7O2dCQUM5RCxDQUFDO1lBQ0gsQ0FBQzs7O1lBRUQsR0FBb0IsR0FBcEIsb0JBQW9COzRCQUFwQixvQkFBb0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDM0IsR0FBSyxDQUFHLE9BQU8sR0FBSyxLQUFLLENBQWpCLE9BQU87Z0JBRWYsRUFBRSxFQUFFLE9BQU8sS0ExQmlDLFNBQWEsaUJBMEJ6QixDQUFDO3lCQUMxQixZQUFZLEdBQUcsSUFBSTt5QkFFbkIsUUFBUSxDQUFDLE9BQU8sV0FBRSxPQUFPOytCQUFLLE9BQU8sTUFBTSxZQUFZOztnQkFDOUQsQ0FBQztZQUNILENBQUM7OztZQUVELEdBQWtCLEdBQWxCLGtCQUFrQjs0QkFBbEIsa0JBQWtCLENBQUMsZUFBZSxFQUFFLENBQUM7Z0JBQ25DLEdBQUssQ0FBQyxPQUFPLEdBQUcsZUFBZSxDQUFHLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztxQkFFaEMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPO1lBQzVCLENBQUM7OztZQUVELEdBQXVCLEdBQXZCLHVCQUF1Qjs0QkFBdkIsdUJBQXVCLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztnQkFDN0MsR0FBSyxDQUFDLGtCQUFrQixHQUFHLFFBQVEsQ0FBQyxlQUFlLENBQUcsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO2dCQUV6RCxrQkFBa0IsQ0FBQyxnQkFBZ0IsQ0F6Q2MsV0FBZSw4QkF5Q1AsS0FBSyxFQUFLLENBQUM7b0JBQ2xFLEdBQUssQ0FBRyxPQUFPLEdBQUssS0FBSyxDQUFqQixPQUFPO29CQUVmLEVBQUUsRUFBRSxPQUFPLEtBN0MrQixTQUFhLGtCQTZDdEIsQ0FBQzt3QkFDaEMsb0JBQW9CO29CQUN0QixDQUFDO2dCQUNILENBQUM7WUFDSCxDQUFDOzs7WUFFRCxHQUFVLEdBQVYsVUFBVTs0QkFBVixVQUFVLEdBQUcsQ0FBQztnQkFDWixHQUFLLENBQUMsa0JBQWtCLEdBQUcsUUFBUSxDQUFDLGVBQWUsRUFDN0Msa0JBQWtCLFFBQVEsa0JBQWtCLENBQUMsSUFBSSxRQUNqRCxvQkFBb0IsUUFBUSxvQkFBb0IsQ0FBQyxJQUFJO2dCQUUzRCxrQkFBa0IsQ0FBQyxnQkFBZ0IsQ0F2RGMsV0FBZSxtQkF1RFYsa0JBQWtCO2dCQUV4RSxrQkFBa0IsQ0FBQyxnQkFBZ0IsQ0F6RGMsV0FBZSxxQkF5RFIsb0JBQW9CO1lBQzlFLENBQUM7Ozs7WUFFTSxHQUFXLEdBQVgsV0FBVzs0QkFBWCxXQUFXLEdBQUcsQ0FBQztnQkFDcEIsR0FBSyxDQUFDLFFBQVEsT0FDUixZQUFZLEdBQUcsS0FBSyxFQUNwQixTQUFTLEdBQUcsR0FBRyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsWUFBWTt1QkFFL0MsU0FBUztZQUNsQixDQUFDOzs7V0FoRWtCLFNBQVM7O2tCQUFULFNBQVMifQ==
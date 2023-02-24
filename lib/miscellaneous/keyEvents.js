"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return KeyEvents;
    }
});
var _necessary = require("necessary");
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
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
var ESCAPE_KEY_CODE = _necessary.keyCodes.ESCAPE_KEY_CODE, SHIFT_KEY_CODE = _necessary.keyCodes.SHIFT_KEY_CODE;
var KeyEvents = /*#__PURE__*/ function() {
    function KeyEvents(handlers) {
        var _this = this;
        _classCallCheck(this, KeyEvents);
        _defineProperty(this, "keyUpEventListener", function(event) {
            var keyCode = event.keyCode;
            if (keyCode === SHIFT_KEY_CODE) {
                _this.shiftKeyDown = false;
                _this.handlers.forEach(function(handler) {
                    return handler(_this.shiftKeyDown);
                });
            }
        });
        _defineProperty(this, "keyDownEventListener", function(event) {
            var keyCode = event.keyCode;
            if (keyCode === SHIFT_KEY_CODE) {
                _this.shiftKeyDown = true;
                _this.handlers.forEach(function(handler) {
                    return handler(_this.shiftKeyDown);
                });
            }
        });
        this.handlers = handlers;
    }
    _createClass(KeyEvents, [
        {
            key: "getHandlers",
            value: function getHandlers() {
                return this.handlers;
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
                    if (keyCode === ESCAPE_KEY_CODE) {
                        escapeKeyDownHandler();
                    }
                });
            }
        },
        {
            key: "initialise",
            value: function initialise() {
                var documentDOMElement = document.documentElement; ///
                documentDOMElement.addEventListener(_eventTypes.KEYUP_EVENT_TYPE, this.keyUpEventListener);
                documentDOMElement.addEventListener(_eventTypes.KEYDOWN_EVENT_TYPE, this.keyDownEventListener);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXNjZWxsYW5lb3VzL2tleUV2ZW50cy5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsga2V5Q29kZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCB7IEtFWVVQX0VWRU5UX1RZUEUsIEtFWURPV05fRVZFTlRfVFlQRSB9IGZyb20gXCIuLi9ldmVudFR5cGVzXCI7XG5cbmNvbnN0IHsgRVNDQVBFX0tFWV9DT0RFLCBTSElGVF9LRVlfQ09ERSB9ID0ga2V5Q29kZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEtleUV2ZW50cyB7XG4gIGNvbnN0cnVjdG9yKGhhbmRsZXJzKSB7XG4gICAgdGhpcy5oYW5kbGVycyA9IGhhbmRsZXJzO1xuICB9XG5cbiAgZ2V0SGFuZGxlcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaGFuZGxlcnM7XG4gIH1cblxuICBrZXlVcEV2ZW50TGlzdGVuZXIgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCB7IGtleUNvZGUgfSA9IGV2ZW50O1xuXG4gICAgaWYgKGtleUNvZGUgPT09IFNISUZUX0tFWV9DT0RFKSB7XG4gICAgICB0aGlzLnNoaWZ0S2V5RG93biA9IGZhbHNlO1xuXG4gICAgICB0aGlzLmhhbmRsZXJzLmZvckVhY2goKGhhbmRsZXIpID0+IGhhbmRsZXIodGhpcy5zaGlmdEtleURvd24pKTtcbiAgICB9XG4gIH1cblxuICBrZXlEb3duRXZlbnRMaXN0ZW5lciA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IHsga2V5Q29kZSB9ID0gZXZlbnQ7XG5cbiAgICBpZiAoa2V5Q29kZSA9PT0gU0hJRlRfS0VZX0NPREUpIHtcbiAgICAgIHRoaXMuc2hpZnRLZXlEb3duID0gdHJ1ZTtcblxuICAgICAgdGhpcy5oYW5kbGVycy5mb3JFYWNoKChoYW5kbGVyKSA9PiBoYW5kbGVyKHRoaXMuc2hpZnRLZXlEb3duKSk7XG4gICAgfVxuICB9XG5cbiAgYWRkU2hpZnRLZXlIYW5kbGVyKHNoaWZ0S2V5SGFuZGxlcikge1xuICAgIGNvbnN0IGhhbmRsZXIgPSBzaGlmdEtleUhhbmRsZXI7ICAvLy9cblxuICAgIHRoaXMuaGFuZGxlcnMucHVzaChoYW5kbGVyKTtcbiAgfVxuXG4gIGFkZEVzY2FwZUtleURvd25IYW5kbGVyKGVzY2FwZUtleURvd25IYW5kbGVyKSB7XG4gICAgY29uc3QgZG9jdW1lbnRET01FbGVtZW50ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50OyAgLy8vXG5cbiAgICBkb2N1bWVudERPTUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihLRVlET1dOX0VWRU5UX1RZUEUsIChldmVudCkgPT4ge1xuICAgICAgY29uc3QgeyBrZXlDb2RlIH0gPSBldmVudDtcblxuICAgICAgaWYgKGtleUNvZGUgPT09IEVTQ0FQRV9LRVlfQ09ERSkge1xuICAgICAgICBlc2NhcGVLZXlEb3duSGFuZGxlcigpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICBjb25zdCBkb2N1bWVudERPTUVsZW1lbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7ICAvLy9cblxuICAgIGRvY3VtZW50RE9NRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKEtFWVVQX0VWRU5UX1RZUEUsIHRoaXMua2V5VXBFdmVudExpc3RlbmVyKTtcblxuICAgIGRvY3VtZW50RE9NRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKEtFWURPV05fRVZFTlRfVFlQRSwgdGhpcy5rZXlEb3duRXZlbnRMaXN0ZW5lcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgaGFuZGxlcnMgPSBbXSxcbiAgICAgICAgICBzaGlmdEtleURvd24gPSBmYWxzZSwgIC8vL1xuICAgICAgICAgIGtleUV2ZW50cyA9IG5ldyBLZXlFdmVudHMoaGFuZGxlcnMsIHNoaWZ0S2V5RG93bik7XG5cbiAgICByZXR1cm4ga2V5RXZlbnRzO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIktleUV2ZW50cyIsIkVTQ0FQRV9LRVlfQ09ERSIsImtleUNvZGVzIiwiU0hJRlRfS0VZX0NPREUiLCJoYW5kbGVycyIsImtleVVwRXZlbnRMaXN0ZW5lciIsImV2ZW50Iiwia2V5Q29kZSIsInNoaWZ0S2V5RG93biIsImZvckVhY2giLCJoYW5kbGVyIiwia2V5RG93bkV2ZW50TGlzdGVuZXIiLCJnZXRIYW5kbGVycyIsImFkZFNoaWZ0S2V5SGFuZGxlciIsInNoaWZ0S2V5SGFuZGxlciIsInB1c2giLCJhZGRFc2NhcGVLZXlEb3duSGFuZGxlciIsImVzY2FwZUtleURvd25IYW5kbGVyIiwiZG9jdW1lbnRET01FbGVtZW50IiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiS0VZRE9XTl9FVkVOVF9UWVBFIiwiaW5pdGlhbGlzZSIsIktFWVVQX0VWRU5UX1RZUEUiLCJmcm9tTm90aGluZyIsImtleUV2ZW50cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFRcUJBOzs7eUJBTkk7MEJBRTRCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFckQsSUFBUUMsa0JBQW9DQyxtQkFBUSxDQUE1Q0QsaUJBQWlCRSxpQkFBbUJELG1CQUFRLENBQTNCQztBQUVWLElBQUEsQUFBTUgsMEJBQU47YUFBTUEsVUFDUEksUUFBUTs7OEJBRERKO1FBU25CSyxzQkFBQUEsc0JBQXFCLFNBQUNDLE9BQVU7WUFDOUIsSUFBTSxBQUFFQyxVQUFZRCxNQUFaQztZQUVSLElBQUlBLFlBQVlKLGdCQUFnQjtnQkFDOUIsTUFBS0ssWUFBWSxHQUFHLEtBQUs7Z0JBRXpCLE1BQUtKLFFBQVEsQ0FBQ0ssT0FBTyxDQUFDLFNBQUNDOzJCQUFZQSxRQUFRLE1BQUtGLFlBQVk7O1lBQzlELENBQUM7UUFDSDtRQUVBRyxzQkFBQUEsd0JBQXVCLFNBQUNMLE9BQVU7WUFDaEMsSUFBTSxBQUFFQyxVQUFZRCxNQUFaQztZQUVSLElBQUlBLFlBQVlKLGdCQUFnQjtnQkFDOUIsTUFBS0ssWUFBWSxHQUFHLElBQUk7Z0JBRXhCLE1BQUtKLFFBQVEsQ0FBQ0ssT0FBTyxDQUFDLFNBQUNDOzJCQUFZQSxRQUFRLE1BQUtGLFlBQVk7O1lBQzlELENBQUM7UUFDSDtRQXpCRSxJQUFJLENBQUNKLFFBQVEsR0FBR0E7O2lCQUZDSjs7WUFLbkJZLEtBQUFBO21CQUFBQSxTQUFBQSxjQUFjO2dCQUNaLE9BQU8sSUFBSSxDQUFDUixRQUFRO1lBQ3RCOzs7WUFzQkFTLEtBQUFBO21CQUFBQSxTQUFBQSxtQkFBbUJDLGVBQWUsRUFBRTtnQkFDbEMsSUFBTUosVUFBVUksaUJBQWtCLEdBQUc7Z0JBRXJDLElBQUksQ0FBQ1YsUUFBUSxDQUFDVyxJQUFJLENBQUNMO1lBQ3JCOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBLHdCQUF3QkMsb0JBQW9CLEVBQUU7Z0JBQzVDLElBQU1DLHFCQUFxQkMsU0FBU0MsZUFBZSxFQUFHLEdBQUc7Z0JBRXpERixtQkFBbUJHLGdCQUFnQixDQUFDQyw4QkFBa0IsRUFBRSxTQUFDaEIsT0FBVTtvQkFDakUsSUFBTSxBQUFFQyxVQUFZRCxNQUFaQztvQkFFUixJQUFJQSxZQUFZTixpQkFBaUI7d0JBQy9CZ0I7b0JBQ0YsQ0FBQztnQkFDSDtZQUNGOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBLGFBQWE7Z0JBQ1gsSUFBTUwscUJBQXFCQyxTQUFTQyxlQUFlLEVBQUcsR0FBRztnQkFFekRGLG1CQUFtQkcsZ0JBQWdCLENBQUNHLDRCQUFnQixFQUFFLElBQUksQ0FBQ25CLGtCQUFrQjtnQkFFN0VhLG1CQUFtQkcsZ0JBQWdCLENBQUNDLDhCQUFrQixFQUFFLElBQUksQ0FBQ1gsb0JBQW9CO1lBQ25GOzs7O1lBRU9jLEtBQUFBO21CQUFQLFNBQU9BLGNBQWM7Z0JBQ25CLElBQU1yQixXQUFXLEVBQUUsRUFDYkksZUFBZSxLQUFLLEVBQ3BCa0IsWUFBWSxJQTFERDFCLFVBMERlSSxVQUFVSTtnQkFFMUMsT0FBT2tCO1lBQ1Q7OztXQTdEbUIxQiJ9
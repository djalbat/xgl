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
                    var _this = this;
                    this.shiftKeyDown = false;
                    this.handlers.forEach(function(handler) {
                        return handler(_this.shiftKeyDown);
                    });
                }
            }
        },
        {
            key: "keyDownEventListener",
            value: function keyDownEventListener(event) {
                var keyCode = event.keyCode;
                if (keyCode === _keyCodes.SHIFT_KEY_CODE) {
                    var _this = this;
                    this.shiftKeyDown = true;
                    this.handlers.forEach(function(handler) {
                        return handler(_this.shiftKeyDown);
                    });
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXNjZWxsYW5lb3VzL2tleUV2ZW50cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRVNDQVBFX0tFWV9DT0RFLCBTSElGVF9LRVlfQ09ERSB9IGZyb20gXCIuLi9rZXlDb2Rlc1wiO1xuaW1wb3J0IHsgS0VZVVBfRVZFTlRfVFlQRSwgS0VZRE9XTl9FVkVOVF9UWVBFIH0gZnJvbSBcIi4uL2V2ZW50VHlwZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgS2V5RXZlbnRzIHtcbiAgY29uc3RydWN0b3IoaGFuZGxlcnMsIHNoaWZ0S2V5RG93bikge1xuICAgIHRoaXMuaGFuZGxlcnMgPSBoYW5kbGVycztcbiAgICB0aGlzLnNoaWZ0S2V5RG93biA9IHNoaWZ0S2V5RG93bjtcbiAgfVxuXG4gIGlzU2hpZnRLZXlEb3duKCkge1xuICAgIHJldHVybiB0aGlzLnNoaWZ0S2V5RG93bjtcbiAgfVxuXG4gIGtleVVwRXZlbnRMaXN0ZW5lcihldmVudCkge1xuICAgIGNvbnN0IHsga2V5Q29kZSB9ID0gZXZlbnQ7XG5cbiAgICBpZiAoa2V5Q29kZSA9PT0gU0hJRlRfS0VZX0NPREUpIHtcbiAgICAgIHRoaXMuc2hpZnRLZXlEb3duID0gZmFsc2U7XG5cbiAgICAgIHRoaXMuaGFuZGxlcnMuZm9yRWFjaCgoaGFuZGxlcikgPT4gaGFuZGxlcih0aGlzLnNoaWZ0S2V5RG93bikpO1xuICAgIH1cbiAgfVxuXG4gIGtleURvd25FdmVudExpc3RlbmVyKGV2ZW50KSB7XG4gICAgY29uc3QgeyBrZXlDb2RlIH0gPSBldmVudDtcblxuICAgIGlmIChrZXlDb2RlID09PSBTSElGVF9LRVlfQ09ERSkge1xuICAgICAgdGhpcy5zaGlmdEtleURvd24gPSB0cnVlO1xuXG4gICAgICB0aGlzLmhhbmRsZXJzLmZvckVhY2goKGhhbmRsZXIpID0+IGhhbmRsZXIodGhpcy5zaGlmdEtleURvd24pKTtcbiAgICB9XG4gIH1cblxuICBhZGRTaGlmdEtleUhhbmRsZXIoc2hpZnRLZXlIYW5kbGVyKSB7XG4gICAgY29uc3QgaGFuZGxlciA9IHNoaWZ0S2V5SGFuZGxlcjsgIC8vL1xuXG4gICAgdGhpcy5oYW5kbGVycy5wdXNoKGhhbmRsZXIpO1xuICB9XG5cbiAgYWRkRXNjYXBlS2V5RG93bkhhbmRsZXIoZXNjYXBlS2V5RG93bkhhbmRsZXIpIHtcbiAgICBjb25zdCBkb2N1bWVudERPTUVsZW1lbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7ICAvLy9cblxuICAgIGRvY3VtZW50RE9NRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKEtFWURPV05fRVZFTlRfVFlQRSwgKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCB7IGtleUNvZGUgfSA9IGV2ZW50O1xuXG4gICAgICBpZiAoa2V5Q29kZSA9PT0gRVNDQVBFX0tFWV9DT0RFKSB7XG4gICAgICAgIGVzY2FwZUtleURvd25IYW5kbGVyKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIGNvbnN0IGRvY3VtZW50RE9NRWxlbWVudCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgIC8vL1xuICAgICAgICAgIGtleVVwRXZlbnRMaXN0ZW5lciA9IHRoaXMua2V5VXBFdmVudExpc3RlbmVyLmJpbmQodGhpcyksXG4gICAgICAgICAga2V5RG93bkV2ZW50TGlzdGVuZXIgPSB0aGlzLmtleURvd25FdmVudExpc3RlbmVyLmJpbmQodGhpcyk7XG5cbiAgICBkb2N1bWVudERPTUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihLRVlVUF9FVkVOVF9UWVBFLCBrZXlVcEV2ZW50TGlzdGVuZXIpO1xuXG4gICAgZG9jdW1lbnRET01FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoS0VZRE9XTl9FVkVOVF9UWVBFLCBrZXlEb3duRXZlbnRMaXN0ZW5lcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgaGFuZGxlcnMgPSBbXSxcbiAgICAgICAgICBzaGlmdEtleURvd24gPSBmYWxzZSwgIC8vL1xuICAgICAgICAgIGtleUV2ZW50cyA9IG5ldyBLZXlFdmVudHMoaGFuZGxlcnMsIHNoaWZ0S2V5RG93bik7XG5cbiAgICByZXR1cm4ga2V5RXZlbnRzO1xuICB9XG59XG4iXSwibmFtZXMiOlsiS2V5RXZlbnRzIiwiaGFuZGxlcnMiLCJzaGlmdEtleURvd24iLCJpc1NoaWZ0S2V5RG93biIsImtleVVwRXZlbnRMaXN0ZW5lciIsImV2ZW50Iiwia2V5Q29kZSIsImZvckVhY2giLCJoYW5kbGVyIiwia2V5RG93bkV2ZW50TGlzdGVuZXIiLCJhZGRTaGlmdEtleUhhbmRsZXIiLCJzaGlmdEtleUhhbmRsZXIiLCJwdXNoIiwiYWRkRXNjYXBlS2V5RG93bkhhbmRsZXIiLCJlc2NhcGVLZXlEb3duSGFuZGxlciIsImRvY3VtZW50RE9NRWxlbWVudCIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImluaXRpYWxpc2UiLCJiaW5kIiwiZnJvbU5vdGhpbmciLCJrZXlFdmVudHMiXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7O0FBRW9DLEdBQWEsQ0FBYixTQUFhO0FBQ1IsR0FBZSxDQUFmLFdBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRS9DQSxTQUFTLGlCQUFmLFFBQVE7YUFBRkEsU0FBUyxDQUNoQkMsUUFBUSxFQUFFQyxZQUFZOztRQUNoQyxJQUFJLENBQUNELFFBQVEsR0FBR0EsUUFBUTtRQUN4QixJQUFJLENBQUNDLFlBQVksR0FBR0EsWUFBWTs7OztZQUdsQ0MsR0FBYyxFQUFkQSxDQUFjO21CQUFkQSxRQUFRLENBQVJBLGNBQWMsR0FBRyxDQUFDO2dCQUNoQixNQUFNLENBQUMsSUFBSSxDQUFDRCxZQUFZO1lBQzFCLENBQUM7OztZQUVERSxHQUFrQixFQUFsQkEsQ0FBa0I7bUJBQWxCQSxRQUFRLENBQVJBLGtCQUFrQixDQUFDQyxLQUFLLEVBQUUsQ0FBQztnQkFDekIsR0FBSyxD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
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXNjZWxsYW5lb3VzL2tleUV2ZW50cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRVNDQVBFX0tFWV9DT0RFLCBTSElGVF9LRVlfQ09ERSB9IGZyb20gXCIuLi9rZXlDb2Rlc1wiO1xuaW1wb3J0IHsgS0VZVVBfRVZFTlRfVFlQRSwgS0VZRE9XTl9FVkVOVF9UWVBFIH0gZnJvbSBcIi4uL2V2ZW50VHlwZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgS2V5RXZlbnRzIHtcbiAgY29uc3RydWN0b3IoaGFuZGxlcnMsIHNoaWZ0S2V5RG93bikge1xuICAgIHRoaXMuaGFuZGxlcnMgPSBoYW5kbGVycztcbiAgICB0aGlzLnNoaWZ0S2V5RG93biA9IHNoaWZ0S2V5RG93bjtcbiAgfVxuXG4gIGlzU2hpZnRLZXlEb3duKCkge1xuICAgIHJldHVybiB0aGlzLnNoaWZ0S2V5RG93bjtcbiAgfVxuXG4gIGtleVVwRXZlbnRMaXN0ZW5lcihldmVudCkge1xuICAgIGNvbnN0IHsga2V5Q29kZSB9ID0gZXZlbnQ7XG5cbiAgICBpZiAoa2V5Q29kZSA9PT0gU0hJRlRfS0VZX0NPREUpIHtcbiAgICAgIHRoaXMuc2hpZnRLZXlEb3duID0gZmFsc2U7XG5cbiAgICAgIHRoaXMuaGFuZGxlcnMuZm9yRWFjaCgoaGFuZGxlcikgPT4gaGFuZGxlcih0aGlzLnNoaWZ0S2V5RG93bikpO1xuICAgIH1cbiAgfVxuXG4gIGtleURvd25FdmVudExpc3RlbmVyKGV2ZW50KSB7XG4gICAgY29uc3QgeyBrZXlDb2RlIH0gPSBldmVudDtcblxuICAgIGlmIChrZXlDb2RlID09PSBTSElGVF9LRVlfQ09ERSkge1xuICAgICAgdGhpcy5zaGlmdEtleURvd24gPSB0cnVlO1xuXG4gICAgICB0aGlzLmhhbmRsZXJzLmZvckVhY2goKGhhbmRsZXIpID0+IGhhbmRsZXIodGhpcy5zaGlmdEtleURvd24pKTtcbiAgICB9XG4gIH1cblxuICBhZGRTaGlmdEtleUhhbmRsZXIoc2hpZnRLZXlIYW5kbGVyKSB7XG4gICAgY29uc3QgaGFuZGxlciA9IHNoaWZ0S2V5SGFuZGxlcjsgIC8vL1xuXG4gICAgdGhpcy5oYW5kbGVycy5wdXNoKGhhbmRsZXIpO1xuICB9XG5cbiAgYWRkRXNjYXBlS2V5RG93bkhhbmRsZXIoZXNjYXBlS2V5RG93bkhhbmRsZXIpIHtcbiAgICBjb25zdCBkb2N1bWVudERPTUVsZW1lbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7ICAvLy9cblxuICAgIGRvY3VtZW50RE9NRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKEtFWURPV05fRVZFTlRfVFlQRSwgKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCB7IGtleUNvZGUgfSA9IGV2ZW50O1xuXG4gICAgICBpZiAoa2V5Q29kZSA9PT0gRVNDQVBFX0tFWV9DT0RFKSB7XG4gICAgICAgIGVzY2FwZUtleURvd25IYW5kbGVyKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIGNvbnN0IGRvY3VtZW50RE9NRWxlbWVudCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgIC8vL1xuICAgICAgICAgIGtleVVwRXZlbnRMaXN0ZW5lciA9IHRoaXMua2V5VXBFdmVudExpc3RlbmVyLmJpbmQodGhpcyksXG4gICAgICAgICAga2V5RG93bkV2ZW50TGlzdGVuZXIgPSB0aGlzLmtleURvd25FdmVudExpc3RlbmVyLmJpbmQodGhpcyk7XG5cbiAgICBkb2N1bWVudERPTUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihLRVlVUF9FVkVOVF9UWVBFLCBrZXlVcEV2ZW50TGlzdGVuZXIpO1xuXG4gICAgZG9jdW1lbnRET01FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoS0VZRE9XTl9FVkVOVF9UWVBFLCBrZXlEb3duRXZlbnRMaXN0ZW5lcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgaGFuZGxlcnMgPSBbXSxcbiAgICAgICAgICBzaGlmdEtleURvd24gPSBmYWxzZSwgIC8vL1xuICAgICAgICAgIGtleUV2ZW50cyA9IG5ldyBLZXlFdmVudHMoaGFuZGxlcnMsIHNoaWZ0S2V5RG93bik7XG5cbiAgICByZXR1cm4ga2V5RXZlbnRzO1xuICB9XG59XG4iXSwibmFtZXMiOlsiS2V5RXZlbnRzIiwiaGFuZGxlcnMiLCJzaGlmdEtleURvd24iLCJpc1NoaWZ0S2V5RG93biIsImtleVVwRXZlbnRMaXN0ZW5lciIsImV2ZW50Iiwia2V5Q29kZSIsImZvckVhY2giLCJoYW5kbGVyIiwia2V5RG93bkV2ZW50TGlzdGVuZXIiLCJhZGRTaGlmdEtleUhhbmRsZXIiLCJzaGlmdEtleUhhbmRsZXIiLCJwdXNoIiwiYWRkRXNjYXBlS2V5RG93bkhhbmRsZXIiLCJlc2NhcGVLZXlEb3duSGFuZGxlciIsImRvY3VtZW50RE9NRWxlbWVudCIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImluaXRpYWxpc2UiLCJiaW5kIiwiZnJvbU5vdGhpbmciLCJrZXlFdmVudHMiXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7O0FBRW9DLEdBQWEsQ0FBYixTQUFhO0FBQ1IsR0FBZSxDQUFmLFdBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRS9DQSxTQUFTLGlCQUFmLFFBQVE7YUFBRkEsU0FBUyxDQUNoQkMsUUFBUSxFQUFFQyxZQUFZOzhCQURmRixTQUFTO1FBRTFCLElBQUksQ0FBQ0MsUUFBUSxHQUFHQSxRQUFRO1FBQ3hCLElBQUksQ0FBQ0MsWUFBWSxHQUFHQSxZQUFZOztpQkFIZkYsU0FBUzs7WUFNNUJHLEdBQWMsRUFBZEEsQ0FBYzttQkFBZEEsUUFBUSxDQUFSQSxjQUFjLEdBQUcsQ0FBQztnQkFDaEIsTUFBTSxDQUFDLElBQUksQ0FBQ0QsWUFBWTtZQUMxQixDQUFDOzs7WUFFREUsR0FBa0IsRUFBbEJBLENBQWtCO21CQUFsQkEsUUFBUSxDQUFSQSxrQkFBa0IsQ0FBQ0MsS0FBSyxF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
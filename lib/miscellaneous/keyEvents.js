"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
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
var ESCAPE_KEY_CODE = _necessary.keyCodes.ESCAPE_KEY_CODE, SHIFT_KEY_CODE = _necessary.keyCodes.SHIFT_KEY_CODE;
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
                if (keyCode === SHIFT_KEY_CODE) {
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
                if (keyCode === SHIFT_KEY_CODE) {
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
                    if (keyCode === ESCAPE_KEY_CODE) {
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXNjZWxsYW5lb3VzL2tleUV2ZW50cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsga2V5Q29kZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCB7IEtFWVVQX0VWRU5UX1RZUEUsIEtFWURPV05fRVZFTlRfVFlQRSB9IGZyb20gXCIuLi9ldmVudFR5cGVzXCI7XG5cbmNvbnN0IHsgRVNDQVBFX0tFWV9DT0RFLCBTSElGVF9LRVlfQ09ERSB9ID0ga2V5Q29kZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEtleUV2ZW50cyB7XG4gIGNvbnN0cnVjdG9yKGhhbmRsZXJzLCBzaGlmdEtleURvd24pIHtcbiAgICB0aGlzLmhhbmRsZXJzID0gaGFuZGxlcnM7XG4gICAgdGhpcy5zaGlmdEtleURvd24gPSBzaGlmdEtleURvd247XG4gIH1cblxuICBpc1NoaWZ0S2V5RG93bigpIHtcbiAgICByZXR1cm4gdGhpcy5zaGlmdEtleURvd247XG4gIH1cblxuICBrZXlVcEV2ZW50TGlzdGVuZXIoZXZlbnQpIHtcbiAgICBjb25zdCB7IGtleUNvZGUgfSA9IGV2ZW50O1xuXG4gICAgaWYgKGtleUNvZGUgPT09IFNISUZUX0tFWV9DT0RFKSB7XG4gICAgICB0aGlzLnNoaWZ0S2V5RG93biA9IGZhbHNlO1xuXG4gICAgICB0aGlzLmhhbmRsZXJzLmZvckVhY2goKGhhbmRsZXIpID0+IGhhbmRsZXIodGhpcy5zaGlmdEtleURvd24pKTtcbiAgICB9XG4gIH1cblxuICBrZXlEb3duRXZlbnRMaXN0ZW5lcihldmVudCkge1xuICAgIGNvbnN0IHsga2V5Q29kZSB9ID0gZXZlbnQ7XG5cbiAgICBpZiAoa2V5Q29kZSA9PT0gU0hJRlRfS0VZX0NPREUpIHtcbiAgICAgIHRoaXMuc2hpZnRLZXlEb3duID0gdHJ1ZTtcblxuICAgICAgdGhpcy5oYW5kbGVycy5mb3JFYWNoKChoYW5kbGVyKSA9PiBoYW5kbGVyKHRoaXMuc2hpZnRLZXlEb3duKSk7XG4gICAgfVxuICB9XG5cbiAgYWRkU2hpZnRLZXlIYW5kbGVyKHNoaWZ0S2V5SGFuZGxlcikge1xuICAgIGNvbnN0IGhhbmRsZXIgPSBzaGlmdEtleUhhbmRsZXI7ICAvLy9cblxuICAgIHRoaXMuaGFuZGxlcnMucHVzaChoYW5kbGVyKTtcbiAgfVxuXG4gIGFkZEVzY2FwZUtleURvd25IYW5kbGVyKGVzY2FwZUtleURvd25IYW5kbGVyKSB7XG4gICAgY29uc3QgZG9jdW1lbnRET01FbGVtZW50ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50OyAgLy8vXG5cbiAgICBkb2N1bWVudERPTUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihLRVlET1dOX0VWRU5UX1RZUEUsIChldmVudCkgPT4ge1xuICAgICAgY29uc3QgeyBrZXlDb2RlIH0gPSBldmVudDtcblxuICAgICAgaWYgKGtleUNvZGUgPT09IEVTQ0FQRV9LRVlfQ09ERSkge1xuICAgICAgICBlc2NhcGVLZXlEb3duSGFuZGxlcigpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICBjb25zdCBkb2N1bWVudERPTUVsZW1lbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsICAvLy9cbiAgICAgICAgICBrZXlVcEV2ZW50TGlzdGVuZXIgPSB0aGlzLmtleVVwRXZlbnRMaXN0ZW5lci5iaW5kKHRoaXMpLFxuICAgICAgICAgIGtleURvd25FdmVudExpc3RlbmVyID0gdGhpcy5rZXlEb3duRXZlbnRMaXN0ZW5lci5iaW5kKHRoaXMpO1xuXG4gICAgZG9jdW1lbnRET01FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoS0VZVVBfRVZFTlRfVFlQRSwga2V5VXBFdmVudExpc3RlbmVyKTtcblxuICAgIGRvY3VtZW50RE9NRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKEtFWURPV05fRVZFTlRfVFlQRSwga2V5RG93bkV2ZW50TGlzdGVuZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IGhhbmRsZXJzID0gW10sXG4gICAgICAgICAgc2hpZnRLZXlEb3duID0gZmFsc2UsICAvLy9cbiAgICAgICAgICBrZXlFdmVudHMgPSBuZXcgS2V5RXZlbnRzKGhhbmRsZXJzLCBzaGlmdEtleURvd24pO1xuXG4gICAgcmV0dXJuIGtleUV2ZW50cztcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkVTQ0FQRV9LRVlfQ09ERSIsImtleUNvZGVzIiwiU0hJRlRfS0VZX0NPREUiLCJLZXlFdmVudHMiLCJoYW5kbGVycyIsInNoaWZ0S2V5RG93biIsImlzU2hpZnRLZXlEb3duIiwia2V5VXBFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJrZXlDb2RlIiwiZm9yRWFjaCIsImhhbmRsZXIiLCJrZXlEb3duRXZlbnRMaXN0ZW5lciIsImFkZFNoaWZ0S2V5SGFuZGxlciIsInNoaWZ0S2V5SGFuZGxlciIsInB1c2giLCJhZGRFc2NhcGVLZXlEb3duSGFuZGxlciIsImVzY2FwZUtleURvd25IYW5kbGVyIiwiZG9jdW1lbnRET01FbGVtZW50IiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiS0VZRE9XTl9FVkVOVF9UWVBFIiwiaW5pdGlhbGlzZSIsImJpbmQiLCJLRVlVUF9FVkVOVF9UWVBFIiwiZnJvbU5vdGhpbmciLCJrZXlFdmVudHMiXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7O0FBRWEsR0FBVyxDQUFYLFVBQVc7QUFFaUIsR0FBZSxDQUFmLFdBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXBFLEdBQUssQ0FBR0EsZUFBZSxHQUFxQkMsVUFBUSxVQUE1Q0QsZUFBZSxFQUFFRSxjQUFjLEdBQUtELFVBQVEsVUFBM0JDLGNBQWM7SUFFbEJDLFNBQVMsaUJBQWYsUUFBUTthQUFGQSxTQUFTLENBQ2hCQyxRQUFRLEVBQUVDLFlBQVk7O1FBQ2hDLElBQUksQ0FBQ0QsUUFBUSxHQUFHQSxRQUFRO1FBQ3hCLElBQUksQ0FBQ0MsWUFBWSxH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
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
                var _this = this;
                var keyCode = event.keyCode;
                if (keyCode === SHIFT_KEY_CODE) {
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
                var _this = this;
                var keyCode = event.keyCode;
                if (keyCode === SHIFT_KEY_CODE) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXNjZWxsYW5lb3VzL2tleUV2ZW50cy5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsga2V5Q29kZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCB7IEtFWVVQX0VWRU5UX1RZUEUsIEtFWURPV05fRVZFTlRfVFlQRSB9IGZyb20gXCIuLi9ldmVudFR5cGVzXCI7XG5cbmNvbnN0IHsgRVNDQVBFX0tFWV9DT0RFLCBTSElGVF9LRVlfQ09ERSB9ID0ga2V5Q29kZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEtleUV2ZW50cyB7XG4gIGNvbnN0cnVjdG9yKGhhbmRsZXJzLCBzaGlmdEtleURvd24pIHtcbiAgICB0aGlzLmhhbmRsZXJzID0gaGFuZGxlcnM7XG4gICAgdGhpcy5zaGlmdEtleURvd24gPSBzaGlmdEtleURvd247XG4gIH1cblxuICBpc1NoaWZ0S2V5RG93bigpIHtcbiAgICByZXR1cm4gdGhpcy5zaGlmdEtleURvd247XG4gIH1cblxuICBrZXlVcEV2ZW50TGlzdGVuZXIoZXZlbnQpIHtcbiAgICBjb25zdCB7IGtleUNvZGUgfSA9IGV2ZW50O1xuXG4gICAgaWYgKGtleUNvZGUgPT09IFNISUZUX0tFWV9DT0RFKSB7XG4gICAgICB0aGlzLnNoaWZ0S2V5RG93biA9IGZhbHNlO1xuXG4gICAgICB0aGlzLmhhbmRsZXJzLmZvckVhY2goKGhhbmRsZXIpID0+IGhhbmRsZXIodGhpcy5zaGlmdEtleURvd24pKTtcbiAgICB9XG4gIH1cblxuICBrZXlEb3duRXZlbnRMaXN0ZW5lcihldmVudCkge1xuICAgIGNvbnN0IHsga2V5Q29kZSB9ID0gZXZlbnQ7XG5cbiAgICBpZiAoa2V5Q29kZSA9PT0gU0hJRlRfS0VZX0NPREUpIHtcbiAgICAgIHRoaXMuc2hpZnRLZXlEb3duID0gdHJ1ZTtcblxuICAgICAgdGhpcy5oYW5kbGVycy5mb3JFYWNoKChoYW5kbGVyKSA9PiBoYW5kbGVyKHRoaXMuc2hpZnRLZXlEb3duKSk7XG4gICAgfVxuICB9XG5cbiAgYWRkU2hpZnRLZXlIYW5kbGVyKHNoaWZ0S2V5SGFuZGxlcikge1xuICAgIGNvbnN0IGhhbmRsZXIgPSBzaGlmdEtleUhhbmRsZXI7ICAvLy9cblxuICAgIHRoaXMuaGFuZGxlcnMucHVzaChoYW5kbGVyKTtcbiAgfVxuXG4gIGFkZEVzY2FwZUtleURvd25IYW5kbGVyKGVzY2FwZUtleURvd25IYW5kbGVyKSB7XG4gICAgY29uc3QgZG9jdW1lbnRET01FbGVtZW50ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50OyAgLy8vXG5cbiAgICBkb2N1bWVudERPTUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihLRVlET1dOX0VWRU5UX1RZUEUsIChldmVudCkgPT4ge1xuICAgICAgY29uc3QgeyBrZXlDb2RlIH0gPSBldmVudDtcblxuICAgICAgaWYgKGtleUNvZGUgPT09IEVTQ0FQRV9LRVlfQ09ERSkge1xuICAgICAgICBlc2NhcGVLZXlEb3duSGFuZGxlcigpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICBjb25zdCBkb2N1bWVudERPTUVsZW1lbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsICAvLy9cbiAgICAgICAgICBrZXlVcEV2ZW50TGlzdGVuZXIgPSB0aGlzLmtleVVwRXZlbnRMaXN0ZW5lci5iaW5kKHRoaXMpLFxuICAgICAgICAgIGtleURvd25FdmVudExpc3RlbmVyID0gdGhpcy5rZXlEb3duRXZlbnRMaXN0ZW5lci5iaW5kKHRoaXMpO1xuXG4gICAgZG9jdW1lbnRET01FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoS0VZVVBfRVZFTlRfVFlQRSwga2V5VXBFdmVudExpc3RlbmVyKTtcblxuICAgIGRvY3VtZW50RE9NRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKEtFWURPV05fRVZFTlRfVFlQRSwga2V5RG93bkV2ZW50TGlzdGVuZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IGhhbmRsZXJzID0gW10sXG4gICAgICAgICAgc2hpZnRLZXlEb3duID0gZmFsc2UsICAvLy9cbiAgICAgICAgICBrZXlFdmVudHMgPSBuZXcgS2V5RXZlbnRzKGhhbmRsZXJzLCBzaGlmdEtleURvd24pO1xuXG4gICAgcmV0dXJuIGtleUV2ZW50cztcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJLZXlFdmVudHMiLCJFU0NBUEVfS0VZX0NPREUiLCJrZXlDb2RlcyIsIlNISUZUX0tFWV9DT0RFIiwiaGFuZGxlcnMiLCJzaGlmdEtleURvd24iLCJpc1NoaWZ0S2V5RG93biIsImtleVVwRXZlbnRMaXN0ZW5lciIsImV2ZW50Iiwia2V5Q29kZSIsImZvckVhY2giLCJoYW5kbGVyIiwia2V5RG93bkV2ZW50TGlzdGVuZXIiLCJhZGRTaGlmdEtleUhhbmRsZXIiLCJzaGlmdEtleUhhbmRsZXIiLCJwdXNoIiwiYWRkRXNjYXBlS2V5RG93bkhhbmRsZXIiLCJlc2NhcGVLZXlEb3duSGFuZGxlciIsImRvY3VtZW50RE9NRWxlbWVudCIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIktFWURPV05fRVZFTlRfVFlQRSIsImluaXRpYWxpc2UiLCJiaW5kIiwiS0VZVVBfRVZFTlRfVFlQRSIsImZyb21Ob3RoaW5nIiwia2V5RXZlbnRzIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7ZUFRUUEsU0FBUzs7O3lCQU5MLFdBQVc7MEJBRWlCLGVBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXBFLElBQVFDLGVBQWUsR0FBcUJDLFVBQVEsU0FBQSxDQUE1Q0QsZUFBZSxFQUFFRSxjQUFjLEdBQUtELFVBQVEsU0FBQSxDQUEzQkMsY0FBYyxBQUFjO0FBRXRDLElBQUEsQUFBTUgsU0FBUyxpQkFBZjthQUFNQSxTQUFTLENBQ2hCSSxRQUFRLEVB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
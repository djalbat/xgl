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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXNjZWxsYW5lb3VzL2tleUV2ZW50cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsga2V5Q29kZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCB7IEtFWVVQX0VWRU5UX1RZUEUsIEtFWURPV05fRVZFTlRfVFlQRSB9IGZyb20gXCIuLi9ldmVudFR5cGVzXCI7XG5cbmNvbnN0IHsgRVNDQVBFX0tFWV9DT0RFLCBTSElGVF9LRVlfQ09ERSB9ID0ga2V5Q29kZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEtleUV2ZW50cyB7XG4gIGNvbnN0cnVjdG9yKGhhbmRsZXJzLCBzaGlmdEtleURvd24pIHtcbiAgICB0aGlzLmhhbmRsZXJzID0gaGFuZGxlcnM7XG4gICAgdGhpcy5zaGlmdEtleURvd24gPSBzaGlmdEtleURvd247XG4gIH1cblxuICBpc1NoaWZ0S2V5RG93bigpIHtcbiAgICByZXR1cm4gdGhpcy5zaGlmdEtleURvd247XG4gIH1cblxuICBrZXlVcEV2ZW50TGlzdGVuZXIoZXZlbnQpIHtcbiAgICBjb25zdCB7IGtleUNvZGUgfSA9IGV2ZW50O1xuXG4gICAgaWYgKGtleUNvZGUgPT09IFNISUZUX0tFWV9DT0RFKSB7XG4gICAgICB0aGlzLnNoaWZ0S2V5RG93biA9IGZhbHNlO1xuXG4gICAgICB0aGlzLmhhbmRsZXJzLmZvckVhY2goKGhhbmRsZXIpID0+IGhhbmRsZXIodGhpcy5zaGlmdEtleURvd24pKTtcbiAgICB9XG4gIH1cblxuICBrZXlEb3duRXZlbnRMaXN0ZW5lcihldmVudCkge1xuICAgIGNvbnN0IHsga2V5Q29kZSB9ID0gZXZlbnQ7XG5cbiAgICBpZiAoa2V5Q29kZSA9PT0gU0hJRlRfS0VZX0NPREUpIHtcbiAgICAgIHRoaXMuc2hpZnRLZXlEb3duID0gdHJ1ZTtcblxuICAgICAgdGhpcy5oYW5kbGVycy5mb3JFYWNoKChoYW5kbGVyKSA9PiBoYW5kbGVyKHRoaXMuc2hpZnRLZXlEb3duKSk7XG4gICAgfVxuICB9XG5cbiAgYWRkU2hpZnRLZXlIYW5kbGVyKHNoaWZ0S2V5SGFuZGxlcikge1xuICAgIGNvbnN0IGhhbmRsZXIgPSBzaGlmdEtleUhhbmRsZXI7ICAvLy9cblxuICAgIHRoaXMuaGFuZGxlcnMucHVzaChoYW5kbGVyKTtcbiAgfVxuXG4gIGFkZEVzY2FwZUtleURvd25IYW5kbGVyKGVzY2FwZUtleURvd25IYW5kbGVyKSB7XG4gICAgY29uc3QgZG9jdW1lbnRET01FbGVtZW50ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50OyAgLy8vXG5cbiAgICBkb2N1bWVudERPTUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihLRVlET1dOX0VWRU5UX1RZUEUsIChldmVudCkgPT4ge1xuICAgICAgY29uc3QgeyBrZXlDb2RlIH0gPSBldmVudDtcblxuICAgICAgaWYgKGtleUNvZGUgPT09IEVTQ0FQRV9LRVlfQ09ERSkge1xuICAgICAgICBlc2NhcGVLZXlEb3duSGFuZGxlcigpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICBjb25zdCBkb2N1bWVudERPTUVsZW1lbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsICAvLy9cbiAgICAgICAgICBrZXlVcEV2ZW50TGlzdGVuZXIgPSB0aGlzLmtleVVwRXZlbnRMaXN0ZW5lci5iaW5kKHRoaXMpLFxuICAgICAgICAgIGtleURvd25FdmVudExpc3RlbmVyID0gdGhpcy5rZXlEb3duRXZlbnRMaXN0ZW5lci5iaW5kKHRoaXMpO1xuXG4gICAgZG9jdW1lbnRET01FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoS0VZVVBfRVZFTlRfVFlQRSwga2V5VXBFdmVudExpc3RlbmVyKTtcblxuICAgIGRvY3VtZW50RE9NRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKEtFWURPV05fRVZFTlRfVFlQRSwga2V5RG93bkV2ZW50TGlzdGVuZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IGhhbmRsZXJzID0gW10sXG4gICAgICAgICAgc2hpZnRLZXlEb3duID0gZmFsc2UsICAvLy9cbiAgICAgICAgICBrZXlFdmVudHMgPSBuZXcgS2V5RXZlbnRzKGhhbmRsZXJzLCBzaGlmdEtleURvd24pO1xuXG4gICAgcmV0dXJuIGtleUV2ZW50cztcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkVTQ0FQRV9LRVlfQ09ERSIsIlNISUZUX0tFWV9DT0RFIiwiS2V5RXZlbnRzIiwiaGFuZGxlcnMiLCJzaGlmdEtleURvd24iLCJpc1NoaWZ0S2V5RG93biIsImtleVVwRXZlbnRMaXN0ZW5lciIsImV2ZW50Iiwia2V5Q29kZSIsImZvckVhY2giLCJoYW5kbGVyIiwia2V5RG93bkV2ZW50TGlzdGVuZXIiLCJhZGRTaGlmdEtleUhhbmRsZXIiLCJzaGlmdEtleUhhbmRsZXIiLCJwdXNoIiwiYWRkRXNjYXBlS2V5RG93bkhhbmRsZXIiLCJlc2NhcGVLZXlEb3duSGFuZGxlciIsImRvY3VtZW50RE9NRWxlbWVudCIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImluaXRpYWxpc2UiLCJiaW5kIiwiZnJvbU5vdGhpbmciLCJrZXlFdmVudHMiXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7O0FBRWEsR0FBVyxDQUFYLFVBQVc7QUFFaUIsR0FBZSxDQUFmLFdBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXBFLEdBQUssQ0FBR0EsZUFBZSxHQUpFLFVBQVcsVUFJNUJBLGVBQWUsRUFBRUMsY0FBYyxHQUpkLFVBQVcsVUFJWEEsY0FBYztJQUVsQkMsU0FBUyxpQkFBZixRQUFRO2FBQUZBLFNBQVMsQ0FDaEJDLFFBQVEsRUFBRUMsWUFBWTs7UUFDaEMsSUFBSSxDQUFDRCxRQUFRLEdBQUdBLFFBQVE7UUFDeEIsSUFBSSxDQUFDQyxZQUFZLEdBQUdBLFlBQVk7Ozs7WUFHbENDLEdBQWMsRUFBZEEsQ0FBYzttQkFBZEEsUUFBUSxDQUFSQSxj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
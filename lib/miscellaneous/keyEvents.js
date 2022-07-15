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
    function KeyEvents(handlers, shiftKeyDown) {
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
        this.shiftKeyDown = shiftKeyDown;
    }
    _createClass(KeyEvents, [
        {
            key: "getHandlers",
            value: function getHandlers() {
                return this.handlers;
            }
        },
        {
            key: "isShiftKeyDown",
            value: function isShiftKeyDown() {
                return this.shiftKeyDown;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXNjZWxsYW5lb3VzL2tleUV2ZW50cy5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsga2V5Q29kZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCB7IEtFWVVQX0VWRU5UX1RZUEUsIEtFWURPV05fRVZFTlRfVFlQRSB9IGZyb20gXCIuLi9ldmVudFR5cGVzXCI7XG5cbmNvbnN0IHsgRVNDQVBFX0tFWV9DT0RFLCBTSElGVF9LRVlfQ09ERSB9ID0ga2V5Q29kZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEtleUV2ZW50cyB7XG4gIGNvbnN0cnVjdG9yKGhhbmRsZXJzLCBzaGlmdEtleURvd24pIHtcbiAgICB0aGlzLmhhbmRsZXJzID0gaGFuZGxlcnM7XG4gICAgdGhpcy5zaGlmdEtleURvd24gPSBzaGlmdEtleURvd247XG4gIH1cblxuICBnZXRIYW5kbGVycygpIHtcbiAgICByZXR1cm4gdGhpcy5oYW5kbGVycztcbiAgfVxuXG4gIGlzU2hpZnRLZXlEb3duKCkge1xuICAgIHJldHVybiB0aGlzLnNoaWZ0S2V5RG93bjtcbiAgfVxuXG4gIGtleVVwRXZlbnRMaXN0ZW5lciA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IHsga2V5Q29kZSB9ID0gZXZlbnQ7XG5cbiAgICBpZiAoa2V5Q29kZSA9PT0gU0hJRlRfS0VZX0NPREUpIHtcbiAgICAgIHRoaXMuc2hpZnRLZXlEb3duID0gZmFsc2U7XG5cbiAgICAgIHRoaXMuaGFuZGxlcnMuZm9yRWFjaCgoaGFuZGxlcikgPT4gaGFuZGxlcih0aGlzLnNoaWZ0S2V5RG93bikpO1xuICAgIH1cbiAgfVxuXG4gIGtleURvd25FdmVudExpc3RlbmVyID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgeyBrZXlDb2RlIH0gPSBldmVudDtcblxuICAgIGlmIChrZXlDb2RlID09PSBTSElGVF9LRVlfQ09ERSkge1xuICAgICAgdGhpcy5zaGlmdEtleURvd24gPSB0cnVlO1xuXG4gICAgICB0aGlzLmhhbmRsZXJzLmZvckVhY2goKGhhbmRsZXIpID0+IGhhbmRsZXIodGhpcy5zaGlmdEtleURvd24pKTtcbiAgICB9XG4gIH1cblxuICBhZGRTaGlmdEtleUhhbmRsZXIoc2hpZnRLZXlIYW5kbGVyKSB7XG4gICAgY29uc3QgaGFuZGxlciA9IHNoaWZ0S2V5SGFuZGxlcjsgIC8vL1xuXG4gICAgdGhpcy5oYW5kbGVycy5wdXNoKGhhbmRsZXIpO1xuICB9XG5cbiAgYWRkRXNjYXBlS2V5RG93bkhhbmRsZXIoZXNjYXBlS2V5RG93bkhhbmRsZXIpIHtcbiAgICBjb25zdCBkb2N1bWVudERPTUVsZW1lbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7ICAvLy9cblxuICAgIGRvY3VtZW50RE9NRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKEtFWURPV05fRVZFTlRfVFlQRSwgKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCB7IGtleUNvZGUgfSA9IGV2ZW50O1xuXG4gICAgICBpZiAoa2V5Q29kZSA9PT0gRVNDQVBFX0tFWV9DT0RFKSB7XG4gICAgICAgIGVzY2FwZUtleURvd25IYW5kbGVyKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIGNvbnN0IGRvY3VtZW50RE9NRWxlbWVudCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDsgIC8vL1xuXG4gICAgZG9jdW1lbnRET01FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoS0VZVVBfRVZFTlRfVFlQRSwgdGhpcy5rZXlVcEV2ZW50TGlzdGVuZXIpO1xuXG4gICAgZG9jdW1lbnRET01FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoS0VZRE9XTl9FVkVOVF9UWVBFLCB0aGlzLmtleURvd25FdmVudExpc3RlbmVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBoYW5kbGVycyA9IFtdLFxuICAgICAgICAgIHNoaWZ0S2V5RG93biA9IGZhbHNlLCAgLy8vXG4gICAgICAgICAga2V5RXZlbnRzID0gbmV3IEtleUV2ZW50cyhoYW5kbGVycywgc2hpZnRLZXlEb3duKTtcblxuICAgIHJldHVybiBrZXlFdmVudHM7XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiS2V5RXZlbnRzIiwiRVNDQVBFX0tFWV9DT0RFIiwia2V5Q29kZXMiLCJTSElGVF9LRVlfQ09ERSIsImhhbmRsZXJzIiwic2hpZnRLZXlEb3duIiwia2V5VXBFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJrZXlDb2RlIiwiZm9yRWFjaCIsImhhbmRsZXIiLCJrZXlEb3duRXZlbnRMaXN0ZW5lciIsImdldEhhbmRsZXJzIiwiaXNTaGlmdEtleURvd24iLCJhZGRTaGlmdEtleUhhbmRsZXIiLCJzaGlmdEtleUhhbmRsZXIiLCJwdXNoIiwiYWRkRXNjYXBlS2V5RG93bkhhbmRsZXIiLCJlc2NhcGVLZXlEb3duSGFuZGxlciIsImRvY3VtZW50RE9NRWxlbWVudCIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIktFWURPV05fRVZFTlRfVFlQRSIsImluaXRpYWxpc2UiLCJLRVlVUF9FVkVOVF9UWVBFIiwiZnJvbU5vdGhpbmciLCJrZXlFdmVudHMiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7OztlQVFRQSxTQUFTOzs7eUJBTkwsV0FBVzswQkFFaUIsZUFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXBFLElBQVFDLGVBQWUsR0FBcUJDLFVBQVEsU0FBQSxDQUE1Q0QsZUFBZSxFQUFFRSxjQUFjLEdBQUtELFVBQVEsU0FBQSxDQUEzQkMsY0FBYyxBQUFjO0FBRXRDLElBQUEsQUFBTUgsU0FBUyxpQkFBZjthQUFNQSxTQUFTLENBQ2hCSSxRQUFRLEVBQUVDLFlBQVk7OztRQWFsQ0Msc0JBQUFBLG9CQUFrQixFQUFHLFNBQUNDLEtB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
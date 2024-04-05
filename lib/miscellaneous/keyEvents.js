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
function _class_call_check(instance, Constructor) {
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
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _define_property(obj, key, value) {
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
        _class_call_check(this, KeyEvents);
        _define_property(this, "keyUpEventListener", function(event) {
            var keyCode = event.keyCode;
            if (keyCode === SHIFT_KEY_CODE) {
                _this.shiftKeyDown = false;
                _this.handlers.forEach(function(handler) {
                    handler(_this.shiftKeyDown);
                });
            }
        });
        _define_property(this, "keyDownEventListener", function(event) {
            var keyCode = event.keyCode;
            if (keyCode === SHIFT_KEY_CODE) {
                _this.shiftKeyDown = true;
                _this.handlers.forEach(function(handler) {
                    handler(_this.shiftKeyDown);
                });
            }
        });
        this.handlers = handlers;
        this.shiftKeyDown = shiftKeyDown;
    }
    _create_class(KeyEvents, [
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXNjZWxsYW5lb3VzL2tleUV2ZW50cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsga2V5Q29kZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCB7IEtFWVVQX0VWRU5UX1RZUEUsIEtFWURPV05fRVZFTlRfVFlQRSB9IGZyb20gXCIuLi9ldmVudFR5cGVzXCI7XG5cbmNvbnN0IHsgRVNDQVBFX0tFWV9DT0RFLCBTSElGVF9LRVlfQ09ERSB9ID0ga2V5Q29kZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEtleUV2ZW50cyB7XG4gIGNvbnN0cnVjdG9yKGhhbmRsZXJzLCBzaGlmdEtleURvd24pIHtcbiAgICB0aGlzLmhhbmRsZXJzID0gaGFuZGxlcnM7XG4gICAgdGhpcy5zaGlmdEtleURvd24gPSBzaGlmdEtleURvd247XG4gIH1cblxuICBnZXRIYW5kbGVycygpIHtcbiAgICByZXR1cm4gdGhpcy5oYW5kbGVycztcbiAgfVxuXG4gIGlzU2hpZnRLZXlEb3duKCkge1xuICAgIHJldHVybiB0aGlzLnNoaWZ0S2V5RG93bjtcbiAgfVxuXG4gIGtleVVwRXZlbnRMaXN0ZW5lciA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IHsga2V5Q29kZSB9ID0gZXZlbnQ7XG5cbiAgICBpZiAoa2V5Q29kZSA9PT0gU0hJRlRfS0VZX0NPREUpIHtcbiAgICAgIHRoaXMuc2hpZnRLZXlEb3duID0gZmFsc2U7XG5cbiAgICAgIHRoaXMuaGFuZGxlcnMuZm9yRWFjaCgoaGFuZGxlcikgPT4ge1xuICAgICAgICBoYW5kbGVyKHRoaXMuc2hpZnRLZXlEb3duKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGtleURvd25FdmVudExpc3RlbmVyID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgeyBrZXlDb2RlIH0gPSBldmVudDtcblxuICAgIGlmIChrZXlDb2RlID09PSBTSElGVF9LRVlfQ09ERSkge1xuICAgICAgdGhpcy5zaGlmdEtleURvd24gPSB0cnVlO1xuXG4gICAgICB0aGlzLmhhbmRsZXJzLmZvckVhY2goKGhhbmRsZXIpID0+IHtcbiAgICAgICAgaGFuZGxlcih0aGlzLnNoaWZ0S2V5RG93bik7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBhZGRTaGlmdEtleUhhbmRsZXIoc2hpZnRLZXlIYW5kbGVyKSB7XG4gICAgY29uc3QgaGFuZGxlciA9IHNoaWZ0S2V5SGFuZGxlcjsgIC8vL1xuXG4gICAgdGhpcy5oYW5kbGVycy5wdXNoKGhhbmRsZXIpO1xuICB9XG5cbiAgYWRkRXNjYXBlS2V5RG93bkhhbmRsZXIoZXNjYXBlS2V5RG93bkhhbmRsZXIpIHtcbiAgICBjb25zdCBkb2N1bWVudERPTUVsZW1lbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7ICAvLy9cblxuICAgIGRvY3VtZW50RE9NRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKEtFWURPV05fRVZFTlRfVFlQRSwgKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCB7IGtleUNvZGUgfSA9IGV2ZW50O1xuXG4gICAgICBpZiAoa2V5Q29kZSA9PT0gRVNDQVBFX0tFWV9DT0RFKSB7XG4gICAgICAgIGVzY2FwZUtleURvd25IYW5kbGVyKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIGNvbnN0IGRvY3VtZW50RE9NRWxlbWVudCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDsgIC8vL1xuXG4gICAgZG9jdW1lbnRET01FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoS0VZVVBfRVZFTlRfVFlQRSwgdGhpcy5rZXlVcEV2ZW50TGlzdGVuZXIpO1xuXG4gICAgZG9jdW1lbnRET01FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoS0VZRE9XTl9FVkVOVF9UWVBFLCB0aGlzLmtleURvd25FdmVudExpc3RlbmVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBoYW5kbGVycyA9IFtdLFxuICAgICAgICAgIHNoaWZ0S2V5RG93biA9IGZhbHNlLCAgLy8vXG4gICAgICAgICAga2V5RXZlbnRzID0gbmV3IEtleUV2ZW50cyhoYW5kbGVycywgc2hpZnRLZXlEb3duKTtcblxuICAgIHJldHVybiBrZXlFdmVudHM7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJLZXlFdmVudHMiLCJFU0NBUEVfS0VZX0NPREUiLCJrZXlDb2RlcyIsIlNISUZUX0tFWV9DT0RFIiwiaGFuZGxlcnMiLCJzaGlmdEtleURvd24iLCJrZXlVcEV2ZW50TGlzdGVuZXIiLCJldmVudCIsImtleUNvZGUiLCJmb3JFYWNoIiwiaGFuZGxlciIsImtleURvd25FdmVudExpc3RlbmVyIiwiZ2V0SGFuZGxlcnMiLCJpc1NoaWZ0S2V5RG93biIsImFkZFNoaWZ0S2V5SGFuZGxlciIsInNoaWZ0S2V5SGFuZGxlciIsInB1c2giLCJhZGRFc2NhcGVLZXlEb3duSGFuZGxlciIsImVzY2FwZUtleURvd25IYW5kbGVyIiwiZG9jdW1lbnRET01FbGVtZW50IiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiS0VZRE9XTl9FVkVOVF9UWVBFIiwiaW5pdGlhbGlzZSIsIktFWVVQX0VWRU5UX1RZUEUiLCJmcm9tTm90aGluZyIsImtleUV2ZW50cyJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFRcUJBOzs7eUJBTkk7MEJBRTRCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFckQsSUFBUUMsa0JBQW9DQyxtQkFBUSxDQUE1Q0QsaUJBQWlCRSxpQkFBbUJELG1CQUFRLENBQTNCQztBQUVWLElBQUEsQUFBTUgsMEJBQUQsQUFBTDthQUFNQSxVQUNQSSxRQUFRLEVBQUVDLFlBQVk7O2dDQURmTDtRQWNuQk0sdUJBQUFBLHNCQUFxQixTQUFDQztZQUNwQixJQUFNLEFBQUVDLFVBQVlELE1BQVpDO1lBRVIsSUFBSUEsWUFBWUwsZ0JBQWdCO2dCQUM5QixNQUFLRSxZQUFZLEdBQUc7Z0JBRXBCLE1BQUtELFFBQVEsQ0FBQ0ssT0FBTyxDQUFDLFNBQUNDO29CQUNyQkEsUUFBUSxNQUFLTCxZQUFZO2dCQUMzQjtZQUNGO1FBQ0Y7UUFFQU0sdUJBQUFBLHdCQUF1QixTQUFDSjtZQUN0QixJQUFNLEFBQUVDLFVBQVlELE1BQVpDO1lBRVIsSUFBSUEsWUFBWUwsZ0JBQWdCO2dCQUM5QixNQUFLRSxZQUFZLEdBQUc7Z0JBRXBCLE1BQUtELFFBQVEsQ0FBQ0ssT0FBTyxDQUFDLFNBQUNDO29CQUNyQkEsUUFBUSxNQUFLTCxZQUFZO2dCQUMzQjtZQUNGO1FBQ0Y7UUFsQ0UsSUFBSSxDQUFDRCxRQUFRLEdBQUdBO1FBQ2hCLElBQUksQ0FBQ0MsWUFBWSxHQUFHQTs7a0JBSEhMOztZQU1uQlksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDUixRQUFRO1lBQ3RCOzs7WUFFQVMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDUixZQUFZO1lBQzFCOzs7WUEwQkFTLEtBQUFBO21CQUFBQSxTQUFBQSxtQkFBbUJDLGVBQWU7Z0JBQ2hDLElBQU1MLFVBQVVLLGlCQUFrQixHQUFHO2dCQUVyQyxJQUFJLENBQUNYLFFBQVEsQ0FBQ1ksSUFBSSxDQUFDTjtZQUNyQjs7O1lBRUFPLEtBQUFBO21CQUFBQSxTQUFBQSx3QkFBd0JDLG9CQUFvQjtnQkFDMUMsSUFBTUMscUJBQXFCQyxTQUFTQyxlQUFlLEVBQUcsR0FBRztnQkFFekRGLG1CQUFtQkcsZ0JBQWdCLENBQUNDLDhCQUFrQixFQUFFLFNBQUNoQjtvQkFDdkQsSUFBTSxBQUFFQyxVQUFZRCxNQUFaQztvQkFFUixJQUFJQSxZQUFZUCxpQkFBaUI7d0JBQy9CaUI7b0JBQ0Y7Z0JBQ0Y7WUFDRjs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNTCxxQkFBcUJDLFNBQVNDLGVBQWUsRUFBRyxHQUFHO2dCQUV6REYsbUJBQW1CRyxnQkFBZ0IsQ0FBQ0csNEJBQWdCLEVBQUUsSUFBSSxDQUFDbkIsa0JBQWtCO2dCQUU3RWEsbUJBQW1CRyxnQkFBZ0IsQ0FBQ0MsOEJBQWtCLEVBQUUsSUFBSSxDQUFDWixvQkFBb0I7WUFDbkY7Ozs7WUFFT2UsS0FBQUE7bUJBQVAsU0FBT0E7Z0JBQ0wsSUFBTXRCLFdBQVcsRUFBRSxFQUNiQyxlQUFlLE9BQ2ZzQixZQUFZLElBbkVEM0IsVUFtRWVJLFVBQVVDO2dCQUUxQyxPQUFPc0I7WUFDVDs7O1dBdEVtQjNCIn0=
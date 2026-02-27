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
const _necessary = require("necessary");
const _eventTypes = require("../eventTypes");
const { ESCAPE_KEY_CODE, SHIFT_KEY_CODE } = _necessary.keyCodes;
class KeyEvents {
    constructor(handlers, shiftKeyDown){
        this.handlers = handlers;
        this.shiftKeyDown = shiftKeyDown;
    }
    getHandlers() {
        return this.handlers;
    }
    isShiftKeyDown() {
        return this.shiftKeyDown;
    }
    keyUpEventListener = (event)=>{
        const { keyCode } = event;
        if (keyCode === SHIFT_KEY_CODE) {
            this.shiftKeyDown = false;
            this.handlers.forEach((handler)=>{
                handler(this.shiftKeyDown);
            });
        }
    };
    keyDownEventListener = (event)=>{
        const { keyCode } = event;
        if (keyCode === SHIFT_KEY_CODE) {
            this.shiftKeyDown = true;
            this.handlers.forEach((handler)=>{
                handler(this.shiftKeyDown);
            });
        }
    };
    addShiftKeyHandler(shiftKeyHandler) {
        const handler = shiftKeyHandler; ///
        this.handlers.push(handler);
    }
    addEscapeKeyDownHandler(escapeKeyDownHandler) {
        const documentDOMElement = document.documentElement; ///
        documentDOMElement.addEventListener(_eventTypes.KEYDOWN_EVENT_TYPE, (event)=>{
            const { keyCode } = event;
            if (keyCode === ESCAPE_KEY_CODE) {
                escapeKeyDownHandler();
            }
        });
    }
    initialise() {
        const documentDOMElement = document.documentElement; ///
        documentDOMElement.addEventListener(_eventTypes.KEYUP_EVENT_TYPE, this.keyUpEventListener);
        documentDOMElement.addEventListener(_eventTypes.KEYDOWN_EVENT_TYPE, this.keyDownEventListener);
    }
    static fromNothing() {
        const handlers = [], shiftKeyDown = false, keyEvents = new KeyEvents(handlers, shiftKeyDown);
        return keyEvents;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXNjZWxsYW5lb3VzL2tleUV2ZW50cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsga2V5Q29kZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCB7IEtFWVVQX0VWRU5UX1RZUEUsIEtFWURPV05fRVZFTlRfVFlQRSB9IGZyb20gXCIuLi9ldmVudFR5cGVzXCI7XG5cbmNvbnN0IHsgRVNDQVBFX0tFWV9DT0RFLCBTSElGVF9LRVlfQ09ERSB9ID0ga2V5Q29kZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEtleUV2ZW50cyB7XG4gIGNvbnN0cnVjdG9yKGhhbmRsZXJzLCBzaGlmdEtleURvd24pIHtcbiAgICB0aGlzLmhhbmRsZXJzID0gaGFuZGxlcnM7XG4gICAgdGhpcy5zaGlmdEtleURvd24gPSBzaGlmdEtleURvd247XG4gIH1cblxuICBnZXRIYW5kbGVycygpIHtcbiAgICByZXR1cm4gdGhpcy5oYW5kbGVycztcbiAgfVxuXG4gIGlzU2hpZnRLZXlEb3duKCkge1xuICAgIHJldHVybiB0aGlzLnNoaWZ0S2V5RG93bjtcbiAgfVxuXG4gIGtleVVwRXZlbnRMaXN0ZW5lciA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IHsga2V5Q29kZSB9ID0gZXZlbnQ7XG5cbiAgICBpZiAoa2V5Q29kZSA9PT0gU0hJRlRfS0VZX0NPREUpIHtcbiAgICAgIHRoaXMuc2hpZnRLZXlEb3duID0gZmFsc2U7XG5cbiAgICAgIHRoaXMuaGFuZGxlcnMuZm9yRWFjaCgoaGFuZGxlcikgPT4ge1xuICAgICAgICBoYW5kbGVyKHRoaXMuc2hpZnRLZXlEb3duKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGtleURvd25FdmVudExpc3RlbmVyID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgeyBrZXlDb2RlIH0gPSBldmVudDtcblxuICAgIGlmIChrZXlDb2RlID09PSBTSElGVF9LRVlfQ09ERSkge1xuICAgICAgdGhpcy5zaGlmdEtleURvd24gPSB0cnVlO1xuXG4gICAgICB0aGlzLmhhbmRsZXJzLmZvckVhY2goKGhhbmRsZXIpID0+IHtcbiAgICAgICAgaGFuZGxlcih0aGlzLnNoaWZ0S2V5RG93bik7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBhZGRTaGlmdEtleUhhbmRsZXIoc2hpZnRLZXlIYW5kbGVyKSB7XG4gICAgY29uc3QgaGFuZGxlciA9IHNoaWZ0S2V5SGFuZGxlcjsgIC8vL1xuXG4gICAgdGhpcy5oYW5kbGVycy5wdXNoKGhhbmRsZXIpO1xuICB9XG5cbiAgYWRkRXNjYXBlS2V5RG93bkhhbmRsZXIoZXNjYXBlS2V5RG93bkhhbmRsZXIpIHtcbiAgICBjb25zdCBkb2N1bWVudERPTUVsZW1lbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7ICAvLy9cblxuICAgIGRvY3VtZW50RE9NRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKEtFWURPV05fRVZFTlRfVFlQRSwgKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCB7IGtleUNvZGUgfSA9IGV2ZW50O1xuXG4gICAgICBpZiAoa2V5Q29kZSA9PT0gRVNDQVBFX0tFWV9DT0RFKSB7XG4gICAgICAgIGVzY2FwZUtleURvd25IYW5kbGVyKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIGNvbnN0IGRvY3VtZW50RE9NRWxlbWVudCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDsgIC8vL1xuXG4gICAgZG9jdW1lbnRET01FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoS0VZVVBfRVZFTlRfVFlQRSwgdGhpcy5rZXlVcEV2ZW50TGlzdGVuZXIpO1xuXG4gICAgZG9jdW1lbnRET01FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoS0VZRE9XTl9FVkVOVF9UWVBFLCB0aGlzLmtleURvd25FdmVudExpc3RlbmVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBoYW5kbGVycyA9IFtdLFxuICAgICAgICAgIHNoaWZ0S2V5RG93biA9IGZhbHNlLCAgLy8vXG4gICAgICAgICAga2V5RXZlbnRzID0gbmV3IEtleUV2ZW50cyhoYW5kbGVycywgc2hpZnRLZXlEb3duKTtcblxuICAgIHJldHVybiBrZXlFdmVudHM7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJLZXlFdmVudHMiLCJFU0NBUEVfS0VZX0NPREUiLCJTSElGVF9LRVlfQ09ERSIsImtleUNvZGVzIiwiaGFuZGxlcnMiLCJzaGlmdEtleURvd24iLCJnZXRIYW5kbGVycyIsImlzU2hpZnRLZXlEb3duIiwia2V5VXBFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJrZXlDb2RlIiwiZm9yRWFjaCIsImhhbmRsZXIiLCJrZXlEb3duRXZlbnRMaXN0ZW5lciIsImFkZFNoaWZ0S2V5SGFuZGxlciIsInNoaWZ0S2V5SGFuZGxlciIsInB1c2giLCJhZGRFc2NhcGVLZXlEb3duSGFuZGxlciIsImVzY2FwZUtleURvd25IYW5kbGVyIiwiZG9jdW1lbnRET01FbGVtZW50IiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiS0VZRE9XTl9FVkVOVF9UWVBFIiwiaW5pdGlhbGlzZSIsIktFWVVQX0VWRU5UX1RZUEUiLCJmcm9tTm90aGluZyIsImtleUV2ZW50cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBUUE7OztlQUFxQkE7OzsyQkFOSTs0QkFFNEI7QUFFckQsTUFBTSxFQUFFQyxlQUFlLEVBQUVDLGNBQWMsRUFBRSxHQUFHQyxtQkFBUTtBQUVyQyxNQUFNSDtJQUNuQixZQUFZSSxRQUFRLEVBQUVDLFlBQVksQ0FBRTtRQUNsQyxJQUFJLENBQUNELFFBQVEsR0FBR0E7UUFDaEIsSUFBSSxDQUFDQyxZQUFZLEdBQUdBO0lBQ3RCO0lBRUFDLGNBQWM7UUFDWixPQUFPLElBQUksQ0FBQ0YsUUFBUTtJQUN0QjtJQUVBRyxpQkFBaUI7UUFDZixPQUFPLElBQUksQ0FBQ0YsWUFBWTtJQUMxQjtJQUVBRyxxQkFBcUIsQ0FBQ0M7UUFDcEIsTUFBTSxFQUFFQyxPQUFPLEVBQUUsR0FBR0Q7UUFFcEIsSUFBSUMsWUFBWVIsZ0JBQWdCO1lBQzlCLElBQUksQ0FBQ0csWUFBWSxHQUFHO1lBRXBCLElBQUksQ0FBQ0QsUUFBUSxDQUFDTyxPQUFPLENBQUMsQ0FBQ0M7Z0JBQ3JCQSxRQUFRLElBQUksQ0FBQ1AsWUFBWTtZQUMzQjtRQUNGO0lBQ0YsRUFBQztJQUVEUSx1QkFBdUIsQ0FBQ0o7UUFDdEIsTUFBTSxFQUFFQyxPQUFPLEVBQUUsR0FBR0Q7UUFFcEIsSUFBSUMsWUFBWVIsZ0JBQWdCO1lBQzlCLElBQUksQ0FBQ0csWUFBWSxHQUFHO1lBRXBCLElBQUksQ0FBQ0QsUUFBUSxDQUFDTyxPQUFPLENBQUMsQ0FBQ0M7Z0JBQ3JCQSxRQUFRLElBQUksQ0FBQ1AsWUFBWTtZQUMzQjtRQUNGO0lBQ0YsRUFBQztJQUVEUyxtQkFBbUJDLGVBQWUsRUFBRTtRQUNsQyxNQUFNSCxVQUFVRyxpQkFBa0IsR0FBRztRQUVyQyxJQUFJLENBQUNYLFFBQVEsQ0FBQ1ksSUFBSSxDQUFDSjtJQUNyQjtJQUVBSyx3QkFBd0JDLG9CQUFvQixFQUFFO1FBQzVDLE1BQU1DLHFCQUFxQkMsU0FBU0MsZUFBZSxFQUFHLEdBQUc7UUFFekRGLG1CQUFtQkcsZ0JBQWdCLENBQUNDLDhCQUFrQixFQUFFLENBQUNkO1lBQ3ZELE1BQU0sRUFBRUMsT0FBTyxFQUFFLEdBQUdEO1lBRXBCLElBQUlDLFlBQVlULGlCQUFpQjtnQkFDL0JpQjtZQUNGO1FBQ0Y7SUFDRjtJQUVBTSxhQUFhO1FBQ1gsTUFBTUwscUJBQXFCQyxTQUFTQyxlQUFlLEVBQUcsR0FBRztRQUV6REYsbUJBQW1CRyxnQkFBZ0IsQ0FBQ0csNEJBQWdCLEVBQUUsSUFBSSxDQUFDakIsa0JBQWtCO1FBRTdFVyxtQkFBbUJHLGdCQUFnQixDQUFDQyw4QkFBa0IsRUFBRSxJQUFJLENBQUNWLG9CQUFvQjtJQUNuRjtJQUVBLE9BQU9hLGNBQWM7UUFDbkIsTUFBTXRCLFdBQVcsRUFBRSxFQUNiQyxlQUFlLE9BQ2ZzQixZQUFZLElBQUkzQixVQUFVSSxVQUFVQztRQUUxQyxPQUFPc0I7SUFDVDtBQUNGIn0=
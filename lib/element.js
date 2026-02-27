"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Element;
    }
});
const _constants = require("./constants");
const _array = require("./utilities/array");
class Element {
    getProperties() {
        return this.properties;
    }
    getChildElements() {
        return this.childElements;
    }
    setProperties(properties) {
        this.properties = properties;
    }
    setChildElements(childElements) {
        this.childElements = childElements;
    }
    static fromProperties(Class, properties, ...remainingArguments) {
        const element = new Class(...remainingArguments), childElements = typeof element.childElements === _constants.FUNCTION ? (0, _array.guarantee)(element.childElements(properties)) : properties.childElements || [];
        element.setProperties(properties);
        element.setChildElements(childElements);
        return element;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lbGVtZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBGVU5DVElPTiB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuXG5pbXBvcnQgeyBndWFyYW50ZWUgfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRWxlbWVudCB7XG4gIGdldFByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcGVydGllcztcbiAgfVxuXG4gIGdldENoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2hpbGRFbGVtZW50cztcbiAgfVxuXG4gIHNldFByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIHRoaXMucHJvcGVydGllcyA9IHByb3BlcnRpZXM7XG4gIH1cblxuICBzZXRDaGlsZEVsZW1lbnRzKGNoaWxkRWxlbWVudHMpIHtcbiAgICB0aGlzLmNoaWxkRWxlbWVudHMgPSBjaGlsZEVsZW1lbnRzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gbmV3IENsYXNzKC4uLnJlbWFpbmluZ0FyZ3VtZW50cyksXG4gICAgICAgICAgY2hpbGRFbGVtZW50cyA9ICh0eXBlb2YgZWxlbWVudC5jaGlsZEVsZW1lbnRzID09PSBGVU5DVElPTikgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGd1YXJhbnRlZShlbGVtZW50LmNoaWxkRWxlbWVudHMocHJvcGVydGllcykpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnRpZXMuY2hpbGRFbGVtZW50cyB8fCBbXTtcblxuICAgIGVsZW1lbnQuc2V0UHJvcGVydGllcyhwcm9wZXJ0aWVzKTtcblxuICAgIGVsZW1lbnQuc2V0Q2hpbGRFbGVtZW50cyhjaGlsZEVsZW1lbnRzKTtcblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG59XG4iXSwibmFtZXMiOlsiRWxlbWVudCIsImdldFByb3BlcnRpZXMiLCJwcm9wZXJ0aWVzIiwiZ2V0Q2hpbGRFbGVtZW50cyIsImNoaWxkRWxlbWVudHMiLCJzZXRQcm9wZXJ0aWVzIiwic2V0Q2hpbGRFbGVtZW50cyIsImZyb21Qcm9wZXJ0aWVzIiwiQ2xhc3MiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJlbGVtZW50IiwiRlVOQ1RJT04iLCJndWFyYW50ZWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU1BOzs7ZUFBcUJBOzs7MkJBSkk7dUJBRUM7QUFFWCxNQUFNQTtJQUNuQkMsZ0JBQWdCO1FBQ2QsT0FBTyxJQUFJLENBQUNDLFVBQVU7SUFDeEI7SUFFQUMsbUJBQW1CO1FBQ2pCLE9BQU8sSUFBSSxDQUFDQyxhQUFhO0lBQzNCO0lBRUFDLGNBQWNILFVBQVUsRUFBRTtRQUN4QixJQUFJLENBQUNBLFVBQVUsR0FBR0E7SUFDcEI7SUFFQUksaUJBQWlCRixhQUFhLEVBQUU7UUFDOUIsSUFBSSxDQUFDQSxhQUFhLEdBQUdBO0lBQ3ZCO0lBRUEsT0FBT0csZUFBZUMsS0FBSyxFQUFFTixVQUFVLEVBQUUsR0FBR08sa0JBQWtCLEVBQUU7UUFDOUQsTUFBTUMsVUFBVSxJQUFJRixTQUFTQyxxQkFDdkJMLGdCQUFnQixBQUFDLE9BQU9NLFFBQVFOLGFBQWEsS0FBS08sbUJBQVEsR0FDeENDLElBQUFBLGdCQUFTLEVBQUNGLFFBQVFOLGFBQWEsQ0FBQ0YsZUFDOUJBLFdBQVdFLGFBQWEsSUFBSSxFQUFFO1FBRXhETSxRQUFRTCxhQUFhLENBQUNIO1FBRXRCUSxRQUFRSixnQkFBZ0IsQ0FBQ0Y7UUFFekIsT0FBT007SUFDVDtBQUNGIn0=
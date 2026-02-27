"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Camera;
    }
});
const _element = /*#__PURE__*/ _interop_require_default(require("../element"));
const _constants = require("../constants");
const _defaults = require("../defaults");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class Camera extends _element.default {
    constructor(zFar, zNear, fieldOfView){
        super();
        this.zFar = zFar;
        this.zNear = zNear;
        this.fieldOfView = fieldOfView;
    }
    getZFar() {
        return this.zFar;
    }
    getZNear() {
        return this.zNear;
    }
    getFieldOfView() {
        return this.fieldOfView;
    }
    static fromProperties(Class, properties, ...remainingArguments) {
        let { fieldOfView = _defaults.DEFAULT_FIELD_OF_VIEW } = properties;
        fieldOfView *= _constants.DEGREES_TO_RADIANS_MULTIPLIER; ///
        const { zFar = _defaults.DEFAULT_Z_FAR, zNear = _defaults.DEFAULT_Z_NEAR } = properties, camera = _element.default.fromProperties(Class, properties, zFar, zNear, fieldOfView, ...remainingArguments);
        return camera;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2NhbWVyYS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4uL2VsZW1lbnRcIjtcblxuaW1wb3J0IHsgREVHUkVFU19UT19SQURJQU5TX01VTFRJUExJRVIgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBERUZBVUxUX1pfRkFSLCBERUZBVUxUX1pfTkVBUiwgREVGQVVMVF9GSUVMRF9PRl9WSUVXIH0gZnJvbSBcIi4uL2RlZmF1bHRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbWVyYSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcih6RmFyLCB6TmVhciwgZmllbGRPZlZpZXcpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy56RmFyID0gekZhcjtcbiAgICB0aGlzLnpOZWFyID0gek5lYXI7XG4gICAgdGhpcy5maWVsZE9mVmlldyA9IGZpZWxkT2ZWaWV3O1xuICB9XG5cbiAgZ2V0WkZhcigpIHtcbiAgICByZXR1cm4gdGhpcy56RmFyO1xuICB9XG5cbiAgZ2V0Wk5lYXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuek5lYXI7XG4gIH1cblxuICBnZXRGaWVsZE9mVmlldygpIHtcbiAgICByZXR1cm4gdGhpcy5maWVsZE9mVmlldztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgbGV0IHsgZmllbGRPZlZpZXcgPSBERUZBVUxUX0ZJRUxEX09GX1ZJRVcgfSA9IHByb3BlcnRpZXM7XG5cbiAgICBmaWVsZE9mVmlldyAqPSBERUdSRUVTX1RPX1JBRElBTlNfTVVMVElQTElFUjsgLy8vXG5cbiAgICBjb25zdCB7IHpGYXIgPSBERUZBVUxUX1pfRkFSLCB6TmVhciA9IERFRkFVTFRfWl9ORUFSIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIGNhbWVyYSA9IEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIHpGYXIsIHpOZWFyLCBmaWVsZE9mVmlldywgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiBjYW1lcmE7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJDYW1lcmEiLCJFbGVtZW50IiwiekZhciIsInpOZWFyIiwiZmllbGRPZlZpZXciLCJnZXRaRmFyIiwiZ2V0Wk5lYXIiLCJnZXRGaWVsZE9mVmlldyIsImZyb21Qcm9wZXJ0aWVzIiwiQ2xhc3MiLCJwcm9wZXJ0aWVzIiwicmVtYWluaW5nQXJndW1lbnRzIiwiREVGQVVMVF9GSUVMRF9PRl9WSUVXIiwiREVHUkVFU19UT19SQURJQU5TX01VTFRJUExJRVIiLCJERUZBVUxUX1pfRkFSIiwiREVGQVVMVF9aX05FQVIiLCJjYW1lcmEiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU9BOzs7ZUFBcUJBOzs7Z0VBTEQ7MkJBRTBCOzBCQUN1Qjs7Ozs7O0FBRXRELE1BQU1BLGVBQWVDLGdCQUFPO0lBQ3pDLFlBQVlDLElBQUksRUFBRUMsS0FBSyxFQUFFQyxXQUFXLENBQUU7UUFDcEMsS0FBSztRQUVMLElBQUksQ0FBQ0YsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsS0FBSyxHQUFHQTtRQUNiLElBQUksQ0FBQ0MsV0FBVyxHQUFHQTtJQUNyQjtJQUVBQyxVQUFVO1FBQ1IsT0FBTyxJQUFJLENBQUNILElBQUk7SUFDbEI7SUFFQUksV0FBVztRQUNULE9BQU8sSUFBSSxDQUFDSCxLQUFLO0lBQ25CO0lBRUFJLGlCQUFpQjtRQUNmLE9BQU8sSUFBSSxDQUFDSCxXQUFXO0lBQ3pCO0lBRUEsT0FBT0ksZUFBZUMsS0FBSyxFQUFFQyxVQUFVLEVBQUUsR0FBR0Msa0JBQWtCLEVBQUU7UUFDOUQsSUFBSSxFQUFFUCxjQUFjUSwrQkFBcUIsRUFBRSxHQUFHRjtRQUU5Q04sZUFBZVMsd0NBQTZCLEVBQUUsR0FBRztRQUVqRCxNQUFNLEVBQUVYLE9BQU9ZLHVCQUFhLEVBQUVYLFFBQVFZLHdCQUFjLEVBQUUsR0FBR0wsWUFDbkRNLFNBQVNmLGdCQUFPLENBQUNPLGNBQWMsQ0FBQ0MsT0FBT0MsWUFBWVIsTUFBTUMsT0FBT0MsZ0JBQWdCTztRQUV0RixPQUFPSztJQUNUO0FBQ0YifQ==
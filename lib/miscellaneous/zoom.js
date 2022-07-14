"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Zoom;
    }
});
var _constants = require("../constants");
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
var Zoom = /*#__PURE__*/ function() {
    function Zoom(distance, minimumDistance, mouseWheelDeltaMultiplier) {
        _classCallCheck(this, Zoom);
        this.distance = distance;
        this.minimumDistance = minimumDistance;
        this.mouseWheelDeltaMultiplier = mouseWheelDeltaMultiplier;
    }
    _createClass(Zoom, [
        {
            key: "getDistance",
            value: function getDistance() {
                return this.distance;
            }
        },
        {
            key: "getMinimumDistance",
            value: function getMinimumDistance() {
                return this.minimumDistance;
            }
        },
        {
            key: "getDeltaMultiplier",
            value: function getDeltaMultiplier() {
                return this.mouseWheelDeltaMultiplier;
            }
        },
        {
            key: "updateDistance",
            value: function updateDistance(mouseWheelDelta) {
                mouseWheelDelta = mouseWheelDelta * this.mouseWheelDeltaMultiplier; ///
                this.distance = this.distance - mouseWheelDelta;
                this.distance = Math.max(this.minimumDistance, this.distance);
            }
        }
    ], [
        {
            key: "fromInitialDistanceAndMouseWheelSensitivity",
            value: function fromInitialDistanceAndMouseWheelSensitivity(initialDistance, mouseWheelSensitivity) {
                var distance = initialDistance, minimumDistance = _constants.MINIMUM_DISTANCE, mouseWheelDeltaMultiplier = _constants.MOUSE_WHEEL_DELTA_MULTIPLIER * mouseWheelSensitivity, zoom = new Zoom(distance, minimumDistance, mouseWheelDeltaMultiplier);
                return zoom;
            }
        }
    ]);
    return Zoom;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXNjZWxsYW5lb3VzL3pvb20uanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IE1JTklNVU1fRElTVEFOQ0UsIE1PVVNFX1dIRUVMX0RFTFRBX01VTFRJUExJRVIgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFpvb20ge1xuICBjb25zdHJ1Y3RvcihkaXN0YW5jZSwgbWluaW11bURpc3RhbmNlLCBtb3VzZVdoZWVsRGVsdGFNdWx0aXBsaWVyKSB7XG4gICAgdGhpcy5kaXN0YW5jZSA9IGRpc3RhbmNlO1xuICAgIHRoaXMubWluaW11bURpc3RhbmNlID0gbWluaW11bURpc3RhbmNlO1xuICAgIHRoaXMubW91c2VXaGVlbERlbHRhTXVsdGlwbGllciA9IG1vdXNlV2hlZWxEZWx0YU11bHRpcGxpZXI7XG4gIH1cblxuICBnZXREaXN0YW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5kaXN0YW5jZTtcbiAgfVxuXG4gIGdldE1pbmltdW1EaXN0YW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5taW5pbXVtRGlzdGFuY2U7XG4gIH1cblxuICBnZXREZWx0YU11bHRpcGxpZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMubW91c2VXaGVlbERlbHRhTXVsdGlwbGllcjtcbiAgfVxuXG4gIHVwZGF0ZURpc3RhbmNlKG1vdXNlV2hlZWxEZWx0YSkge1xuICAgIG1vdXNlV2hlZWxEZWx0YSA9IG1vdXNlV2hlZWxEZWx0YSAqIHRoaXMubW91c2VXaGVlbERlbHRhTXVsdGlwbGllcjsgLy8vXG5cbiAgICB0aGlzLmRpc3RhbmNlID0gdGhpcy5kaXN0YW5jZSAtIG1vdXNlV2hlZWxEZWx0YTtcblxuICAgIHRoaXMuZGlzdGFuY2UgPSBNYXRoLm1heCh0aGlzLm1pbmltdW1EaXN0YW5jZSwgdGhpcy5kaXN0YW5jZSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUluaXRpYWxEaXN0YW5jZUFuZE1vdXNlV2hlZWxTZW5zaXRpdml0eShpbml0aWFsRGlzdGFuY2UsIG1vdXNlV2hlZWxTZW5zaXRpdml0eSkge1xuICAgIGNvbnN0IGRpc3RhbmNlID0gaW5pdGlhbERpc3RhbmNlLCAvLy9cbiAgICAgICAgICBtaW5pbXVtRGlzdGFuY2UgPSBNSU5JTVVNX0RJU1RBTkNFLFxuICAgICAgICAgIG1vdXNlV2hlZWxEZWx0YU11bHRpcGxpZXIgPSBNT1VTRV9XSEVFTF9ERUxUQV9NVUxUSVBMSUVSICogbW91c2VXaGVlbFNlbnNpdGl2aXR5LFxuICAgICAgICAgIHpvb20gPSBuZXcgWm9vbShkaXN0YW5jZSwgbWluaW11bURpc3RhbmNlLCBtb3VzZVdoZWVsRGVsdGFNdWx0aXBsaWVyKTtcblxuICAgIHJldHVybiB6b29tO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIlpvb20iLCJkaXN0YW5jZSIsIm1pbmltdW1EaXN0YW5jZSIsIm1vdXNlV2hlZWxEZWx0YU11bHRpcGxpZXIiLCJnZXREaXN0YW5jZSIsImdldE1pbmltdW1EaXN0YW5jZSIsImdldERlbHRhTXVsdGlwbGllciIsInVwZGF0ZURpc3RhbmNlIiwibW91c2VXaGVlbERlbHRhIiwiTWF0aCIsIm1heCIsImZyb21Jbml0aWFsRGlzdGFuY2VBbmRNb3VzZVdoZWVsU2Vuc2l0aXZpdHkiLCJpbml0aWFsRGlzdGFuY2UiLCJtb3VzZVdoZWVsU2Vuc2l0aXZpdHkiLCJNSU5JTVVNX0RJU1RBTkNFIiwiTU9VU0VfV0hFRUxfREVMVEFfTVVMVElQTElFUiIsInpvb20iXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7OztlQUlRQSxJQUFJOzs7eUJBRnNDLGNBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTlELElBQUEsQUFBTUEsSUFBSSxpQkFBVjthQUFNQSxJQUFJLENBQ1hDLFFBQVEsRUFBRUMsZUFBZSxFQUFFQyx5QkFBeUI7O1FBQzlELElBQUksQ0FBQ0YsUUFBUSxHQUFHQSxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDQyxlQUFlLEdBQUdBLGVBQWUsQ0FBQztRQUN2QyxJQUFJLENBQUNDLHlCQUF5QixHQUFHQSx5QkFBeUIsQ0FBQzs7OztZQUc3REMsR0FBVyxFQUFYQSxhQUFXO21CQUFYQSxTQUFBQSxXQUFXLEdBQUc7Z0JBQ1osT0FBTyxJQUFJLENBQUNILFFBQVEsQ0FBQzthQUN0Qjs7O1lBRURJLEdBQWtCLEVBQWxCQSxvQkFBa0I7bUJBQWxCQSxTQUFBQSxrQkFBa0IsR0FBRztnQkFDbkIsT0FBTyxJQUFJLENBQUNILGVBQWUsQ0FBQzthQUM3Qjs7O1lBRURJLEdBQWtCLEVBQWxCQSxvQkFBa0I7bUJBQWxCQSxTQUFBQSxrQkFBa0IsR0FBRztnQkFDbkIsT0FBTyxJQUFJLENBQUNILHlCQUF5QixDQUFDO2FBQ3ZDOzs7WUFFREksR0FBYyxFQUFkQSxnQkFBYzttQkFBZEEsU0FBQUEsY0FBYyxDQUFDQyxlQUFlLEVBQUU7Z0JBQzlCQSxlQUFlLEdBQUdBLGVBQWUsR0FBRyxJQUFJLENBQUNMLHlCQUF5QixDQUFDLENBQUMsR0FBRztnQkFFdkUsSUFBSSxDQUFDRixRQUFRLEdBQUcsSUFBSSxDQUFDQSxRQUFRLEdBQUdPLGVBQWUsQ0FBQztnQkFFaEQsSUFBSSxDQUFDUCxRQUFRLEdBQUdRLElBQUksQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQ1IsZUFBZSxFQUFFLElBQUksQ0FBQ0QsUUFBUSxDQUFDLENBQUM7YUFDL0Q7Ozs7WUFFTVUsR0FBMkMsRUFBM0NBLDZDQUEyQzttQkFBbEQsU0FBT0EsMkNBQTJDLENBQUNDLGVBQWUsRUFBRUMscUJBQXFCLEVBQUU7Z0JBQ3pGLElBQU1aLFFBQVEsR0FBR1csZUFBZSxFQUMxQlYsZUFBZSxHQUFHWSxVQUFnQixpQkFBQSxFQUNsQ1gseUJBQXlCLEdBQUdZLFVBQTRCLDZCQUFBLEdBQUdGLHFCQUFxQixFQUNoRkcsSUFBSSxHQUFHLElBQUloQixJQUFJLENBQUNDLFFBQVEsRUFBRUMsZUFBZSxFQUFFQyx5QkFBeUIsQ0FBQyxBQUFDO2dCQUU1RSxPQUFPYSxJQUFJLENBQUM7YUFDYjs7OztDQUNGLEVBQUEifQ==
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
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
exports.default = Zoom;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXNjZWxsYW5lb3VzL3pvb20uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IE1JTklNVU1fRElTVEFOQ0UsIE1PVVNFX1dIRUVMX0RFTFRBX01VTFRJUExJRVIgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFpvb20ge1xuICBjb25zdHJ1Y3RvcihkaXN0YW5jZSwgbWluaW11bURpc3RhbmNlLCBtb3VzZVdoZWVsRGVsdGFNdWx0aXBsaWVyKSB7XG4gICAgdGhpcy5kaXN0YW5jZSA9IGRpc3RhbmNlO1xuICAgIHRoaXMubWluaW11bURpc3RhbmNlID0gbWluaW11bURpc3RhbmNlO1xuICAgIHRoaXMubW91c2VXaGVlbERlbHRhTXVsdGlwbGllciA9IG1vdXNlV2hlZWxEZWx0YU11bHRpcGxpZXI7XG4gIH1cblxuICBnZXREaXN0YW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5kaXN0YW5jZTtcbiAgfVxuXG4gIGdldE1pbmltdW1EaXN0YW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5taW5pbXVtRGlzdGFuY2U7XG4gIH1cblxuICBnZXREZWx0YU11bHRpcGxpZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMubW91c2VXaGVlbERlbHRhTXVsdGlwbGllcjtcbiAgfVxuXG4gIHVwZGF0ZURpc3RhbmNlKG1vdXNlV2hlZWxEZWx0YSkge1xuICAgIG1vdXNlV2hlZWxEZWx0YSA9IG1vdXNlV2hlZWxEZWx0YSAqIHRoaXMubW91c2VXaGVlbERlbHRhTXVsdGlwbGllcjsgLy8vXG5cbiAgICB0aGlzLmRpc3RhbmNlID0gdGhpcy5kaXN0YW5jZSAtIG1vdXNlV2hlZWxEZWx0YTtcblxuICAgIHRoaXMuZGlzdGFuY2UgPSBNYXRoLm1heCh0aGlzLm1pbmltdW1EaXN0YW5jZSwgdGhpcy5kaXN0YW5jZSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUluaXRpYWxEaXN0YW5jZUFuZE1vdXNlV2hlZWxTZW5zaXRpdml0eShpbml0aWFsRGlzdGFuY2UsIG1vdXNlV2hlZWxTZW5zaXRpdml0eSkge1xuICAgIGNvbnN0IGRpc3RhbmNlID0gaW5pdGlhbERpc3RhbmNlLCAvLy9cbiAgICAgICAgICBtaW5pbXVtRGlzdGFuY2UgPSBNSU5JTVVNX0RJU1RBTkNFLFxuICAgICAgICAgIG1vdXNlV2hlZWxEZWx0YU11bHRpcGxpZXIgPSBNT1VTRV9XSEVFTF9ERUxUQV9NVUxUSVBMSUVSICogbW91c2VXaGVlbFNlbnNpdGl2aXR5LFxuICAgICAgICAgIHpvb20gPSBuZXcgWm9vbShkaXN0YW5jZSwgbWluaW11bURpc3RhbmNlLCBtb3VzZVdoZWVsRGVsdGFNdWx0aXBsaWVyKTtcblxuICAgIHJldHVybiB6b29tO1xuICB9XG59XG4iXSwibmFtZXMiOlsiWm9vbSIsImRpc3RhbmNlIiwibWluaW11bURpc3RhbmNlIiwibW91c2VXaGVlbERlbHRhTXVsdGlwbGllciIsImdldERpc3RhbmNlIiwiZ2V0TWluaW11bURpc3RhbmNlIiwiZ2V0RGVsdGFNdWx0aXBsaWVyIiwidXBkYXRlRGlzdGFuY2UiLCJtb3VzZVdoZWVsRGVsdGEiLCJNYXRoIiwibWF4IiwiZnJvbUluaXRpYWxEaXN0YW5jZUFuZE1vdXNlV2hlZWxTZW5zaXRpdml0eSIsImluaXRpYWxEaXN0YW5jZSIsIm1vdXNlV2hlZWxTZW5zaXRpdml0eSIsInpvb20iXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7O0FBRW1ELEdBQWMsQ0FBZCxVQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUV4REEsSUFBSSxpQkFBVixRQUFRO2FBQUZBLElBQUksQ0FDWEMsUUFBUSxFQUFFQyxlQUFlLEVBQUVDLHlCQUF5Qjs7UUFDOUQsSUFBSSxDQUFDRixRQUFRLEdBQUdBLFFBQVE7UUFDeEIsSUFBSSxDQUFDQyxlQUFlLEdBQUdBLGVBQWU7UUFDdEMsSUFBSSxDQUFDQyx5QkFBeUIsR0FBR0EseUJBQXlCOzs7O1lBRzVEQyxHQUFXLEVBQVhBLENBQVc7bUJBQVhBLFFBQVEsQ0FBUkEsV0FBVyxHQUFHLENBQUM7Z0JBQ2IsTUFBTSxDQUFDLElBQUksQ0FBQ0gsUUFBUTtZQUN0QixDQUFDOzs7WUFFREksR0FBa0IsRUFBbEJBLENBQWtCO21CQUFsQkEsUUFBUSxDQUFSQSxrQkFBa0IsR0FBRyxDQUFDO2dCQUNwQixNQUFNLENBQUMsSUFBSSxDQUFDSCxlQUFlO1lBQzdCLENBQUM7OztZQUVESSxHQUFrQixFQUFsQkEsQ0FBa0I7bUJBQWxCQSxRQUFRLENBQVJBLGtCQUFrQixHQUFHLENBQUM7Z0JBQ3BCLE1BQU0sQ0FBQyxJQUFJLENBQUNILHlCQUF5QjtZQUN2QyxDQUFDOzs7WUFFREksR0FBYyxFQUFkQSxDQUFjO21CQUFkQSxRQUFRLENBQVJBLGNBQWMsQ0FBQ0MsZUFBZSxFQUFFLENBQUM7Z0JBQy9CQSxlQUFlLEdBQUdBLGVBQWUsR0FBRyxJQUFJLENBQUNMLHlCQUF5QixDQUFFLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztnQkFFdkUsSUFBSSxDQUFDRixRQUFRLEdBQUcsSUFBSSxDQUFDQSxRQUFRLEdBQUdPLGVBQWU7Z0JBRS9DLElBQUksQ0FBQ1AsUUFBUSxHQUFHUSxJQUFJLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUNSLGVBQWUsRUFBRSxJQUFJLENBQUNELFFBQVE7WUFDOUQsQ0FBQzs7OztZQUVNVSxHQUEyQyxFQUEzQ0EsQ0FBMkM7bUJBQWxELFFBQVEsQ0FBREEsMkNBQTJDLENBQUNDLGVBQWUsRUFBRUMscUJBQXFCLEVBQUUsQ0FBQztnQkFDMUYsR0FBSyxDQUFDWixRQUFRLEdBQUdXLGVBQWUsRUFDMUJWLGVBQWUsR0EvQnNDLFVBQWMsbUJBZ0NuRUMseUJBQXlCLEdBaEM0QixVQUFjLGdDQWdDUlUscUJBQXFCLEVBQ2hGQyxJQUFJLEdBQUcsR0FBRyxDQUFDZCxJQUFJLENBQUNDLFFBQVEsRUFBRUMsZUFBZSxFQUFFQyx5QkFBeUI7Z0JBRTFFLE1BQU0sQ0FBQ1csSUFBSTtZQUNiLENBQUM7Ozs7O2tCQWxDa0JkLElBQUkifQ==
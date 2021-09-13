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
        },
        {
            key: "magnify",
            value: function magnify(magnification) {
                this.distance = this.distance * magnification;
                this.minimumDistance = this.minimumDistance * magnification;
                this.mouseWheelDeltaMultiplier = this.mouseWheelDeltaMultiplier * magnification;
            }
        }
    ], [
        {
            key: "fromInitialDistanceAndMouseWheelDeltaMultiplier",
            value: function fromInitialDistanceAndMouseWheelDeltaMultiplier(initialDistance, mouseWheelDeltaMultiplier) {
                var distance = initialDistance, minimumDistance = _constants.MINIMUM_DISTANCE, zoom = new Zoom(distance, minimumDistance, mouseWheelDeltaMultiplier);
                return zoom;
            }
        }
    ]);
    return Zoom;
}();
exports.default = Zoom;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXNjZWxsYW5lb3VzL3pvb20uanMiXSwibmFtZXMiOlsiTUlOSU1VTV9ESVNUQU5DRSIsIlpvb20iLCJjb25zdHJ1Y3RvciIsImRpc3RhbmNlIiwibWluaW11bURpc3RhbmNlIiwibW91c2VXaGVlbERlbHRhTXVsdGlwbGllciIsImdldERpc3RhbmNlIiwiZ2V0TWluaW11bURpc3RhbmNlIiwiZ2V0RGVsdGFNdWx0aXBsaWVyIiwidXBkYXRlRGlzdGFuY2UiLCJtb3VzZVdoZWVsRGVsdGEiLCJNYXRoIiwibWF4IiwibWFnbmlmeSIsIm1hZ25pZmljYXRpb24iLCJmcm9tSW5pdGlhbERpc3RhbmNlQW5kTW91c2VXaGVlbERlbHRhTXVsdGlwbGllciIsImluaXRpYWxEaXN0YW5jZSIsInpvb20iXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0FBRXFCLEdBQWMsQ0FBZCxVQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUUxQixJQUFJLGlCQUFWLFFBQVE7YUFBRixJQUFJLENBQ1gsUUFBUSxFQUFFLGVBQWUsRUFBRSx5QkFBeUI7OEJBRDdDLElBQUk7UUFFckIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRO1FBQ3hCLElBQUksQ0FBQyxlQUFlLEdBQUcsZUFBZTtRQUN0QyxJQUFJLENBQUMseUJBQXlCLEdBQUcseUJBQXlCOztpQkFKekMsSUFBSTs7WUFPdkIsR0FBVyxHQUFYLFdBQVc7bUJBQVgsUUFBUSxDQUFSLFdBQVcsR0FBRyxDQUFDO2dCQUNiLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUTtZQUN0QixDQUFDOzs7WUFFRCxHQUFrQixHQUFsQixrQkFBa0I7bUJBQWxCLFFBQVEsQ0FBUixrQkFBa0IsR0FBRyxDQUFDO2dCQUNwQixNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWU7WUFDN0IsQ0FBQzs7O1lBRUQsR0FBa0IsR0FBbEIsa0JBQWtCO21CQUFsQixRQUFRLENBQVIsa0JBQWtCLEdBQUcsQ0FBQztnQkFDcEIsTUFBTSxDQUFDLElBQUksQ0FBQyx5QkFBeUI7WUFDdkMsQ0FBQzs7O1lBRUQsR0FBYyxHQUFkLGNBQWM7bUJBQWQsUUFBUSxDQUFSLGNBQWMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztnQkFDL0IsZUFBZSxHQUFHLGVBQWUsR0FBRyxJQUFJLENBQUMseUJBQXlCLENBQUUsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO2dCQUV2RSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUcsZUFBZTtnQkFFL0MsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLFFBQVE7WUFDOUQsQ0FBQzs7O1lBRUQsR0FBTyxHQUFQLE9BQU87bUJBQVAsUUFBUSxDQUFSLE9BQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQztnQkFDdEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxHQUFHLGFBQWE7Z0JBQzdDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGVBQWUsR0FBRyxhQUFhO2dCQUMzRCxJQUFJLENBQUMseUJBQXlCLEdBQUcsSUFBSSxDQUFDLHlCQUF5QixHQUFHLGFBQWE7WUFDakYsQ0FBQzs7OztZQUVNLEdBQStDLEdBQS9DLCtDQUErQzttQkFBdEQsUUFBUSxDQUFELCtDQUErQyxDQUFDLGVBQWUsRUFBRSx5QkFBeUIsRUFBRSxDQUFDO2dCQUNsRyxHQUFLLENBQUMsUUFBUSxHQUFHLGVBQWUsRUFDMUIsZUFBZSxHQXJDUSxVQUFjLG1CQXNDckMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLGVBQWUsRUFBRSx5QkFBeUI7Z0JBRTFFLE1BQU0sQ0FBQyxJQUFJO1lBQ2IsQ0FBQzs7O1dBdkNrQixJQUFJOztrQkFBSixJQUFJIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IE1JTklNVU1fRElTVEFOQ0UgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFpvb20ge1xuICBjb25zdHJ1Y3RvcihkaXN0YW5jZSwgbWluaW11bURpc3RhbmNlLCBtb3VzZVdoZWVsRGVsdGFNdWx0aXBsaWVyKSB7XG4gICAgdGhpcy5kaXN0YW5jZSA9IGRpc3RhbmNlO1xuICAgIHRoaXMubWluaW11bURpc3RhbmNlID0gbWluaW11bURpc3RhbmNlO1xuICAgIHRoaXMubW91c2VXaGVlbERlbHRhTXVsdGlwbGllciA9IG1vdXNlV2hlZWxEZWx0YU11bHRpcGxpZXI7XG4gIH1cblxuICBnZXREaXN0YW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5kaXN0YW5jZTtcbiAgfVxuXG4gIGdldE1pbmltdW1EaXN0YW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5taW5pbXVtRGlzdGFuY2U7XG4gIH1cblxuICBnZXREZWx0YU11bHRpcGxpZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMubW91c2VXaGVlbERlbHRhTXVsdGlwbGllcjtcbiAgfVxuXG4gIHVwZGF0ZURpc3RhbmNlKG1vdXNlV2hlZWxEZWx0YSkge1xuICAgIG1vdXNlV2hlZWxEZWx0YSA9IG1vdXNlV2hlZWxEZWx0YSAqIHRoaXMubW91c2VXaGVlbERlbHRhTXVsdGlwbGllcjsgLy8vXG5cbiAgICB0aGlzLmRpc3RhbmNlID0gdGhpcy5kaXN0YW5jZSAtIG1vdXNlV2hlZWxEZWx0YTtcblxuICAgIHRoaXMuZGlzdGFuY2UgPSBNYXRoLm1heCh0aGlzLm1pbmltdW1EaXN0YW5jZSwgdGhpcy5kaXN0YW5jZSk7XG4gIH1cblxuICBtYWduaWZ5KG1hZ25pZmljYXRpb24pIHtcbiAgICB0aGlzLmRpc3RhbmNlID0gdGhpcy5kaXN0YW5jZSAqIG1hZ25pZmljYXRpb247XG4gICAgdGhpcy5taW5pbXVtRGlzdGFuY2UgPSB0aGlzLm1pbmltdW1EaXN0YW5jZSAqIG1hZ25pZmljYXRpb247XG4gICAgdGhpcy5tb3VzZVdoZWVsRGVsdGFNdWx0aXBsaWVyID0gdGhpcy5tb3VzZVdoZWVsRGVsdGFNdWx0aXBsaWVyICogbWFnbmlmaWNhdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSW5pdGlhbERpc3RhbmNlQW5kTW91c2VXaGVlbERlbHRhTXVsdGlwbGllcihpbml0aWFsRGlzdGFuY2UsIG1vdXNlV2hlZWxEZWx0YU11bHRpcGxpZXIpIHtcbiAgICBjb25zdCBkaXN0YW5jZSA9IGluaXRpYWxEaXN0YW5jZSwgLy8vXG4gICAgICAgICAgbWluaW11bURpc3RhbmNlID0gTUlOSU1VTV9ESVNUQU5DRSxcbiAgICAgICAgICB6b29tID0gbmV3IFpvb20oZGlzdGFuY2UsIG1pbmltdW1EaXN0YW5jZSwgbW91c2VXaGVlbERlbHRhTXVsdGlwbGllcik7XG4gICAgXG4gICAgcmV0dXJuIHpvb207XG4gIH1cbn1cbiJdfQ==
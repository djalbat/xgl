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
    function Zoom(distance, minimumDistance, deltaMultiplier) {
        _classCallCheck(this, Zoom);
        this.distance = distance;
        this.minimumDistance = minimumDistance;
        this.deltaMultiplier = deltaMultiplier;
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
                return this.deltaMultiplier;
            }
        },
        {
            key: "updateDistance",
            value: function updateDistance(mouseWheelDelta) {
                this.distance - this.distance - mouseWheelDelta * this.deltaMultiplier;
                this.distance = Math.max(this.minimumDistance, this.distance);
            }
        },
        {
            key: "magnify",
            value: function magnify(magnification) {
                this.distance = this.distance * magnification;
                this.minimumDistance = this.minimumDistance * magnification;
                this.deltaMultiplier = this.deltaMultiplier * magnification;
            }
        }
    ], [
        {
            key: "fromInitialDistanceAndDeltaMultiplier",
            value: function fromInitialDistanceAndDeltaMultiplier(initialDistance, deltaMultiplier) {
                var distance = initialDistance, minimumDistance = _constants.MINIMUM_DISTANCE, zoom = new Zoom(distance, minimumDistance, deltaMultiplier);
                return zoom;
            }
        }
    ]);
    return Zoom;
}();
exports.default = Zoom;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXNjZWxsYW5lb3VzL3pvb20uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IE1JTklNVU1fRElTVEFOQ0UgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFpvb20ge1xuICBjb25zdHJ1Y3RvcihkaXN0YW5jZSwgbWluaW11bURpc3RhbmNlLCBkZWx0YU11bHRpcGxpZXIpIHtcbiAgICB0aGlzLmRpc3RhbmNlID0gZGlzdGFuY2U7XG4gICAgdGhpcy5taW5pbXVtRGlzdGFuY2UgPSBtaW5pbXVtRGlzdGFuY2U7XG4gICAgdGhpcy5kZWx0YU11bHRpcGxpZXIgPSBkZWx0YU11bHRpcGxpZXI7XG4gIH1cblxuICBnZXREaXN0YW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5kaXN0YW5jZTtcbiAgfVxuXG4gIGdldE1pbmltdW1EaXN0YW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5taW5pbXVtRGlzdGFuY2U7XG4gIH1cblxuICBnZXREZWx0YU11bHRpcGxpZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVsdGFNdWx0aXBsaWVyO1xuICB9XG5cbiAgdXBkYXRlRGlzdGFuY2UobW91c2VXaGVlbERlbHRhKSB7XG4gICAgdGhpcy5kaXN0YW5jZSAtIHRoaXMuZGlzdGFuY2UgLSAobW91c2VXaGVlbERlbHRhICogdGhpcy5kZWx0YU11bHRpcGxpZXIpO1xuXG4gICAgdGhpcy5kaXN0YW5jZSA9IE1hdGgubWF4KHRoaXMubWluaW11bURpc3RhbmNlLCB0aGlzLmRpc3RhbmNlKTtcbiAgfVxuXG4gIG1hZ25pZnkobWFnbmlmaWNhdGlvbikge1xuICAgIHRoaXMuZGlzdGFuY2UgPSB0aGlzLmRpc3RhbmNlICogbWFnbmlmaWNhdGlvbjtcbiAgICB0aGlzLm1pbmltdW1EaXN0YW5jZSA9IHRoaXMubWluaW11bURpc3RhbmNlICogbWFnbmlmaWNhdGlvbjtcbiAgICB0aGlzLmRlbHRhTXVsdGlwbGllciA9IHRoaXMuZGVsdGFNdWx0aXBsaWVyICogbWFnbmlmaWNhdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSW5pdGlhbERpc3RhbmNlQW5kRGVsdGFNdWx0aXBsaWVyKGluaXRpYWxEaXN0YW5jZSwgZGVsdGFNdWx0aXBsaWVyKSB7XG4gICAgY29uc3QgZGlzdGFuY2UgPSBpbml0aWFsRGlzdGFuY2UsIC8vL1xuICAgICAgICAgIG1pbmltdW1EaXN0YW5jZSA9IE1JTklNVU1fRElTVEFOQ0UsXG4gICAgICAgICAgem9vbSA9IG5ldyBab29tKGRpc3RhbmNlLCBtaW5pbXVtRGlzdGFuY2UsIGRlbHRhTXVsdGlwbGllcik7XG4gICAgXG4gICAgcmV0dXJuIHpvb207XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztBQUVxQixHQUFjLENBQWQsVUFBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFMUIsSUFBSTthQUFKLElBQUksQ0FDWCxRQUFRLEVBQUUsZUFBZSxFQUFFLGVBQWU7OEJBRG5DLElBQUk7YUFFaEIsUUFBUSxHQUFHLFFBQVE7YUFDbkIsZUFBZSxHQUFHLGVBQWU7YUFDakMsZUFBZSxHQUFHLGVBQWU7O2lCQUpyQixJQUFJOztZQU92QixHQUFXLEdBQVgsV0FBVzs0QkFBWCxXQUFXLEdBQUcsQ0FBQzs0QkFDRCxRQUFRO1lBQ3RCLENBQUM7OztZQUVELEdBQWtCLEdBQWxCLGtCQUFrQjs0QkFBbEIsa0JBQWtCLEdBQUcsQ0FBQzs0QkFDUixlQUFlO1lBQzdCLENBQUM7OztZQUVELEdBQWtCLEdBQWxCLGtCQUFrQjs0QkFBbEIsa0JBQWtCLEdBQUcsQ0FBQzs0QkFDUixlQUFlO1lBQzdCLENBQUM7OztZQUVELEdBQWMsR0FBZCxjQUFjOzRCQUFkLGNBQWMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztxQkFDMUIsUUFBUSxRQUFRLFFBQVEsR0FBSSxlQUFlLFFBQVEsZUFBZTtxQkFFbEUsUUFBUSxHQUFHLElBQUksQ0FBQyxHQUFHLE1BQU0sZUFBZSxPQUFPLFFBQVE7WUFDOUQsQ0FBQzs7O1lBRUQsR0FBTyxHQUFQLE9BQU87NEJBQVAsT0FBTyxDQUFDLGFBQWEsRUFBRSxDQUFDO3FCQUNqQixRQUFRLFFBQVEsUUFBUSxHQUFHLGFBQWE7cUJBQ3hDLGVBQWUsUUFBUSxlQUFlLEdBQUcsYUFBYTtxQkFDdEQsZUFBZSxRQUFRLGVBQWUsR0FBRyxhQUFhO1lBQzdELENBQUM7Ozs7WUFFTSxHQUFxQyxHQUFyQyxxQ0FBcUM7NEJBQXJDLHFDQUFxQyxDQUFDLGVBQWUsRUFBRSxlQUFlLEVBQUUsQ0FBQztnQkFDOUUsR0FBSyxDQUFDLFFBQVEsR0FBRyxlQUFlLEVBQzFCLGVBQWUsR0FuQ1EsVUFBYyxtQkFvQ3JDLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxlQUFlLEVBQUUsZUFBZTt1QkFFekQsSUFBSTtZQUNiLENBQUM7OztXQXJDa0IsSUFBSTs7a0JBQUosSUFBSSJ9
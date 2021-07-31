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
    function Zoom(distance, deltaMultiplier) {
        _classCallCheck(this, Zoom);
        this.distance = distance;
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
            key: "getDeltaMultiplier",
            value: function getDeltaMultiplier() {
                return this.deltaMultiplier;
            }
        },
        {
            key: "updateDistance",
            value: function updateDistance(mouseWheelDelta) {
                this.distance -= mouseWheelDelta * this.deltaMultiplier;
                this.distance = Math.max(_constants.MINIMUM_DISTANCE, this.distance);
            }
        }
    ], [
        {
            key: "fromInitialDistanceAndDeltaMultiplier",
            value: function fromInitialDistanceAndDeltaMultiplier(initialDistance, deltaMultiplier) {
                var distance = initialDistance, zoom = new Zoom(distance, deltaMultiplier);
                return zoom;
            }
        }
    ]);
    return Zoom;
}();
exports.default = Zoom;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXNjZWxsYW5lb3VzL3pvb20uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IE1JTklNVU1fRElTVEFOQ0UgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFpvb20ge1xuICBjb25zdHJ1Y3RvcihkaXN0YW5jZSwgZGVsdGFNdWx0aXBsaWVyKSB7XG4gICAgdGhpcy5kaXN0YW5jZSA9IGRpc3RhbmNlO1xuICAgIHRoaXMuZGVsdGFNdWx0aXBsaWVyID0gZGVsdGFNdWx0aXBsaWVyO1xuICB9XG5cbiAgZ2V0RGlzdGFuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGlzdGFuY2U7XG4gIH1cblxuICBnZXREZWx0YU11bHRpcGxpZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVsdGFNdWx0aXBsaWVyO1xuICB9XG5cbiAgdXBkYXRlRGlzdGFuY2UobW91c2VXaGVlbERlbHRhKSB7XG4gICAgdGhpcy5kaXN0YW5jZSAtPSBtb3VzZVdoZWVsRGVsdGEgKiB0aGlzLmRlbHRhTXVsdGlwbGllcjtcblxuICAgIHRoaXMuZGlzdGFuY2UgPSBNYXRoLm1heChNSU5JTVVNX0RJU1RBTkNFLCB0aGlzLmRpc3RhbmNlKTtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21Jbml0aWFsRGlzdGFuY2VBbmREZWx0YU11bHRpcGxpZXIoaW5pdGlhbERpc3RhbmNlLCBkZWx0YU11bHRpcGxpZXIpIHtcbiAgICBjb25zdCBkaXN0YW5jZSA9IGluaXRpYWxEaXN0YW5jZSwgLy8vXG4gICAgICAgICAgem9vbSA9IG5ldyBab29tKGRpc3RhbmNlLCBkZWx0YU11bHRpcGxpZXIpO1xuICAgIFxuICAgIHJldHVybiB6b29tO1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7QUFFcUIsR0FBYyxDQUFkLFVBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRTFCLElBQUk7YUFBSixJQUFJLENBQ1gsUUFBUSxFQUFFLGVBQWU7OEJBRGxCLElBQUk7YUFFaEIsUUFBUSxHQUFHLFFBQVE7YUFDbkIsZUFBZSxHQUFHLGVBQWU7O2lCQUhyQixJQUFJOztZQU12QixHQUFXLEdBQVgsV0FBVzs0QkFBWCxXQUFXLEdBQUcsQ0FBQzs0QkFDRCxRQUFRO1lBQ3RCLENBQUM7OztZQUVELEdBQWtCLEdBQWxCLGtCQUFrQjs0QkFBbEIsa0JBQWtCLEdBQUcsQ0FBQzs0QkFDUixlQUFlO1lBQzdCLENBQUM7OztZQUVELEdBQWMsR0FBZCxjQUFjOzRCQUFkLGNBQWMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztxQkFDMUIsUUFBUSxJQUFJLGVBQWUsUUFBUSxlQUFlO3FCQUVsRCxRQUFRLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FuQkssVUFBYyx3QkFtQkssUUFBUTtZQUMxRCxDQUFDOzs7O1lBRU0sR0FBcUMsR0FBckMscUNBQXFDOzRCQUFyQyxxQ0FBcUMsQ0FBQyxlQUFlLEVBQUUsZUFBZSxFQUFFLENBQUM7Z0JBQzlFLEdBQUssQ0FBQyxRQUFRLEdBQUcsZUFBZSxFQUMxQixJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsZUFBZTt1QkFFeEMsSUFBSTtZQUNiLENBQUM7OztXQXpCa0IsSUFBSTs7a0JBQUosSUFBSSJ9
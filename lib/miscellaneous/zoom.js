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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXNjZWxsYW5lb3VzL3pvb20uanMiXSwibmFtZXMiOlsiTUlOSU1VTV9ESVNUQU5DRSIsIlpvb20iLCJjb25zdHJ1Y3RvciIsImRpc3RhbmNlIiwibWluaW11bURpc3RhbmNlIiwibW91c2VXaGVlbERlbHRhTXVsdGlwbGllciIsImdldERpc3RhbmNlIiwiZ2V0TWluaW11bURpc3RhbmNlIiwiZ2V0RGVsdGFNdWx0aXBsaWVyIiwidXBkYXRlRGlzdGFuY2UiLCJtb3VzZVdoZWVsRGVsdGEiLCJNYXRoIiwibWF4IiwiZnJvbUluaXRpYWxEaXN0YW5jZUFuZE1vdXNlV2hlZWxEZWx0YU11bHRpcGxpZXIiLCJpbml0aWFsRGlzdGFuY2UiLCJ6b29tIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7OztBQUVxQixHQUFjLENBQWQsVUFBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFMUIsSUFBSSxpQkFBVixRQUFRO2FBQUYsSUFBSSxDQUNYLFFBQVEsRUFBRSxlQUFlLEVBQUUseUJBQXlCOzhCQUQ3QyxJQUFJO1FBRXJCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUTtRQUN4QixJQUFJLENBQUMsZUFBZSxHQUFHLGVBQWU7UUFDdEMsSUFBSSxDQUFDLHlCQUF5QixHQUFHLHlCQUF5Qjs7aUJBSnpDLElBQUk7O1lBT3ZCLEdBQVcsRUFBWCxDQUFXO21CQUFYLFFBQVEsQ0FBUixXQUFXLEdBQUcsQ0FBQztnQkFDYixNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVE7WUFDdEIsQ0FBQzs7O1lBRUQsR0FBa0IsRUFBbEIsQ0FBa0I7bUJBQWxCLFFBQVEsQ0FBUixrQkFBa0IsR0FBRyxDQUFDO2dCQUNwQixNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWU7WUFDN0IsQ0FBQzs7O1lBRUQsR0FBa0IsRUFBbEIsQ0FBa0I7bUJBQWxCLFFBQVEsQ0FBUixrQkFBa0IsR0FBRyxDQUFDO2dCQUNwQixNQUFNLENBQUMsSUFBSSxDQUFDLHlCQUF5QjtZQUN2QyxDQUFDOzs7WUFFRCxHQUFjLEVBQWQsQ0FBYzttQkFBZCxRQUFRLENBQVIsY0FBYyxDQUFDLGVBQWUsRUFBRSxDQUFDO2dCQUMvQixlQUFlLEdBQUcsZUFBZSxHQUFHLElBQUksQ0FBQyx5QkFBeUIsQ0FBRSxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7Z0JBRXZFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsR0FBRyxlQUFlO2dCQUUvQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUM5RCxDQUFDOzs7O1lBRU0sR0FBK0MsRUFBL0MsQ0FBK0M7bUJBQXRELFFBQVEsQ0FBRCwrQ0FBK0MsQ0FBQyxlQUFlLEVBQUUseUJBQXlCLEVBQUUsQ0FBQztnQkFDbEcsR0FBSyxDQUFDLFFBQVEsR0FBRyxlQUFlLEVBQzFCLGVBQWUsR0EvQlEsVUFBYyxtQkFnQ3JDLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxlQUFlLEVBQUUseUJBQXlCO2dCQUUxRSxNQUFNLENBQUMsSUFBSTtZQUNiLENBQUM7OztXQWpDa0IsSUFBSTs7a0JBQUosSUFBSSIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBNSU5JTVVNX0RJU1RBTkNFIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBab29tIHtcbiAgY29uc3RydWN0b3IoZGlzdGFuY2UsIG1pbmltdW1EaXN0YW5jZSwgbW91c2VXaGVlbERlbHRhTXVsdGlwbGllcikge1xuICAgIHRoaXMuZGlzdGFuY2UgPSBkaXN0YW5jZTtcbiAgICB0aGlzLm1pbmltdW1EaXN0YW5jZSA9IG1pbmltdW1EaXN0YW5jZTtcbiAgICB0aGlzLm1vdXNlV2hlZWxEZWx0YU11bHRpcGxpZXIgPSBtb3VzZVdoZWVsRGVsdGFNdWx0aXBsaWVyO1xuICB9XG5cbiAgZ2V0RGlzdGFuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGlzdGFuY2U7XG4gIH1cblxuICBnZXRNaW5pbXVtRGlzdGFuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMubWluaW11bURpc3RhbmNlO1xuICB9XG5cbiAgZ2V0RGVsdGFNdWx0aXBsaWVyKCkge1xuICAgIHJldHVybiB0aGlzLm1vdXNlV2hlZWxEZWx0YU11bHRpcGxpZXI7XG4gIH1cblxuICB1cGRhdGVEaXN0YW5jZShtb3VzZVdoZWVsRGVsdGEpIHtcbiAgICBtb3VzZVdoZWVsRGVsdGEgPSBtb3VzZVdoZWVsRGVsdGEgKiB0aGlzLm1vdXNlV2hlZWxEZWx0YU11bHRpcGxpZXI7IC8vL1xuXG4gICAgdGhpcy5kaXN0YW5jZSA9IHRoaXMuZGlzdGFuY2UgLSBtb3VzZVdoZWVsRGVsdGE7XG5cbiAgICB0aGlzLmRpc3RhbmNlID0gTWF0aC5tYXgodGhpcy5taW5pbXVtRGlzdGFuY2UsIHRoaXMuZGlzdGFuY2UpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Jbml0aWFsRGlzdGFuY2VBbmRNb3VzZVdoZWVsRGVsdGFNdWx0aXBsaWVyKGluaXRpYWxEaXN0YW5jZSwgbW91c2VXaGVlbERlbHRhTXVsdGlwbGllcikge1xuICAgIGNvbnN0IGRpc3RhbmNlID0gaW5pdGlhbERpc3RhbmNlLCAvLy9cbiAgICAgICAgICBtaW5pbXVtRGlzdGFuY2UgPSBNSU5JTVVNX0RJU1RBTkNFLFxuICAgICAgICAgIHpvb20gPSBuZXcgWm9vbShkaXN0YW5jZSwgbWluaW11bURpc3RhbmNlLCBtb3VzZVdoZWVsRGVsdGFNdWx0aXBsaWVyKTtcbiAgICBcbiAgICByZXR1cm4gem9vbTtcbiAgfVxufVxuIl19
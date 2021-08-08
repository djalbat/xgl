"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _vector = require("../maths/vector");
var _constants = require("../constants");
var _offsets = require("../utilities/offsets");
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
        for(var i = 0, arr2 = new Array(arr.length); i < arr.length; i++){
            arr2[i] = arr[i];
        }
        return arr2;
    }
}
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
function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
}
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}
var Pan = /*#__PURE__*/ function() {
    function Pan(offsets, magnification, deltaMultiplier) {
        _classCallCheck(this, Pan);
        this.offsets = offsets;
        this.magnification = magnification;
        this.deltaMultiplier = deltaMultiplier;
    }
    _createClass(Pan, [
        {
            key: "getOffsets",
            value: function getOffsets() {
                return this.offsets;
            }
        },
        {
            key: "getMagnification",
            value: function getMagnification() {
                return this.magnification();
            }
        },
        {
            key: "getDeltaMultiplier",
            value: function getDeltaMultiplier() {
                return this.deltaMultiplier;
            }
        },
        {
            key: "updateOffsets",
            value: function updateOffsets(relativeMouseCoordinates, mouseWheelDelta, tilt) {
                var angles = tilt.getAngles(), magnification = this.magnification, scaledMouseWheelDelta = mouseWheelDelta * this.deltaMultiplier, scaledReflectedRelativeMouseCoordinates = (0, _vector).reflect2((0, _vector).scale2(relativeMouseCoordinates, _constants.OFFSET_MULTIPLIER)), directions = _toConsumableArray(scaledReflectedRelativeMouseCoordinates).concat([
                    scaledMouseWheelDelta,
                    0
                ]), relativeOffsets = (0, _offsets).relativeOffsetsFromAnglesDirectionsAndMagnification(angles, directions, magnification);
                this.offsets = (0, _vector).add3(this.offsets, relativeOffsets);
            }
        },
        {
            key: "magnify",
            value: function magnify(magnification) {
                this.magnification = magnification;
                this.offsets = (0, _vector).scale3(this.offsets, magnification);
            }
        }
    ], [
        {
            key: "fromInitialOffsetsAndDeltaMultiplier",
            value: function fromInitialOffsetsAndDeltaMultiplier(initialOffsets, deltaMultiplier) {
                var offsets = initialOffsets, magnification = null, pan = new Pan(offsets, magnification, deltaMultiplier);
                return pan;
            }
        },
        {
            key: "fromInitialPositionAndDeltaMultiplier",
            value: function fromInitialPositionAndDeltaMultiplier(initialPosition, deltaMultiplier) {
                var offsets = (0, _vector).scale3(initialPosition, _constants.INVERT_MULTIPLIER), magnification = null, pan = new Pan(offsets, magnification, deltaMultiplier);
                return pan;
            }
        }
    ]);
    return Pan;
}();
exports.default = Pan;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXNjZWxsYW5lb3VzL3Bhbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYWRkMywgc2NhbGUyLCByZWZsZWN0Miwgc2NhbGUzIH0gZnJvbSBcIi4uL21hdGhzL3ZlY3RvclwiO1xuaW1wb3J0IHsgSU5WRVJUX01VTFRJUExJRVIsIE9GRlNFVF9NVUxUSVBMSUVSIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgcmVsYXRpdmVPZmZzZXRzRnJvbUFuZ2xlc0RpcmVjdGlvbnNBbmRNYWduaWZpY2F0aW9uIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9vZmZzZXRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhbiB7XG4gIGNvbnN0cnVjdG9yKG9mZnNldHMsIG1hZ25pZmljYXRpb24sIGRlbHRhTXVsdGlwbGllcikge1xuICAgIHRoaXMub2Zmc2V0cyA9IG9mZnNldHM7XG4gICAgdGhpcy5tYWduaWZpY2F0aW9uID0gbWFnbmlmaWNhdGlvbjtcbiAgICB0aGlzLmRlbHRhTXVsdGlwbGllciA9IGRlbHRhTXVsdGlwbGllcjtcbiAgfVxuXG4gIGdldE9mZnNldHMoKSB7XG4gICAgcmV0dXJuIHRoaXMub2Zmc2V0cztcbiAgfVxuXG4gIGdldE1hZ25pZmljYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMubWFnbmlmaWNhdGlvbigpO1xuICB9XG5cbiAgZ2V0RGVsdGFNdWx0aXBsaWVyKCkge1xuICAgIHJldHVybiB0aGlzLmRlbHRhTXVsdGlwbGllcjtcbiAgfVxuXG4gIHVwZGF0ZU9mZnNldHMocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCBtb3VzZVdoZWVsRGVsdGEsIHRpbHQpIHtcbiAgICBjb25zdCBhbmdsZXMgPSB0aWx0LmdldEFuZ2xlcygpLFxuICAgICAgICAgIG1hZ25pZmljYXRpb24gPSB0aGlzLm1hZ25pZmljYXRpb24sXG4gICAgICAgICAgc2NhbGVkTW91c2VXaGVlbERlbHRhID0gbW91c2VXaGVlbERlbHRhICogdGhpcy5kZWx0YU11bHRpcGxpZXIsXG4gICAgICAgICAgc2NhbGVkUmVmbGVjdGVkUmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzID0gcmVmbGVjdDIoc2NhbGUyKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgT0ZGU0VUX01VTFRJUExJRVIpKSxcbiAgICAgICAgICBkaXJlY3Rpb25zID0gWyAuLi5zY2FsZWRSZWZsZWN0ZWRSZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIHNjYWxlZE1vdXNlV2hlZWxEZWx0YSwgMCBdLFxuICAgICAgICAgIHJlbGF0aXZlT2Zmc2V0cyA9IHJlbGF0aXZlT2Zmc2V0c0Zyb21BbmdsZXNEaXJlY3Rpb25zQW5kTWFnbmlmaWNhdGlvbihhbmdsZXMsIGRpcmVjdGlvbnMsIG1hZ25pZmljYXRpb24pO1xuXG4gICAgdGhpcy5vZmZzZXRzID0gYWRkMyh0aGlzLm9mZnNldHMsIHJlbGF0aXZlT2Zmc2V0cyk7XG4gIH1cblxuICBtYWduaWZ5KG1hZ25pZmljYXRpb24pIHtcbiAgICB0aGlzLm1hZ25pZmljYXRpb24gPSBtYWduaWZpY2F0aW9uO1xuXG4gICAgdGhpcy5vZmZzZXRzID0gc2NhbGUzKHRoaXMub2Zmc2V0cywgbWFnbmlmaWNhdGlvbik7XG4gIH1cblxuICBzdGF0aWMgZnJvbUluaXRpYWxPZmZzZXRzQW5kRGVsdGFNdWx0aXBsaWVyKGluaXRpYWxPZmZzZXRzLCBkZWx0YU11bHRpcGxpZXIpIHtcbiAgICBjb25zdCBvZmZzZXRzID0gaW5pdGlhbE9mZnNldHMsIC8vL1xuICAgICAgICAgIG1hZ25pZmljYXRpb24gPSBudWxsLCAvL1xuICAgICAgICAgIHBhbiA9IG5ldyBQYW4ob2Zmc2V0cywgbWFnbmlmaWNhdGlvbiwgZGVsdGFNdWx0aXBsaWVyKTtcblxuICAgIHJldHVybiBwYW47XG4gIH1cblxuICBzdGF0aWMgZnJvbUluaXRpYWxQb3NpdGlvbkFuZERlbHRhTXVsdGlwbGllcihpbml0aWFsUG9zaXRpb24sIGRlbHRhTXVsdGlwbGllcikge1xuICAgIGNvbnN0IG9mZnNldHMgPSBzY2FsZTMoaW5pdGlhbFBvc2l0aW9uLCBJTlZFUlRfTVVMVElQTElFUiksXG4gICAgICAgICAgbWFnbmlmaWNhdGlvbiA9IG51bGwsIC8vXG4gICAgICAgICAgcGFuID0gbmV3IFBhbihvZmZzZXRzLCBtYWduaWZpY2F0aW9uLCBkZWx0YU11bHRpcGxpZXIpO1xuICAgIFxuICAgIHJldHVybiBwYW47XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztBQUVtQyxHQUFpQixDQUFqQixPQUFpQjtBQUNYLEdBQWMsQ0FBZCxVQUFjO0FBQ0MsR0FBc0IsQ0FBdEIsUUFBc0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFckUsR0FBRzthQUFILEdBQUcsQ0FDVixPQUFPLEVBQUUsYUFBYSxFQUFFLGVBQWU7OEJBRGhDLEdBQUc7YUFFZixPQUFPLEdBQUcsT0FBTzthQUNqQixhQUFhLEdBQUcsYUFBYTthQUM3QixlQUFlLEdBQUcsZUFBZTs7aUJBSnJCLEdBQUc7O1lBT3RCLEdBQVUsR0FBVixVQUFVOzRCQUFWLFVBQVUsR0FBRyxDQUFDOzRCQUNBLE9BQU87WUFDckIsQ0FBQzs7O1lBRUQsR0FBZ0IsR0FBaEIsZ0JBQWdCOzRCQUFoQixnQkFBZ0IsR0FBRyxDQUFDOzRCQUNOLGFBQWE7WUFDM0IsQ0FBQzs7O1lBRUQsR0FBa0IsR0FBbEIsa0JBQWtCOzRCQUFsQixrQkFBa0IsR0FBRyxDQUFDOzRCQUNSLGVBQWU7WUFDN0IsQ0FBQzs7O1lBRUQsR0FBYSxHQUFiLGFBQWE7NEJBQWIsYUFBYSxDQUFDLHdCQUF3QixFQUFFLGVBQWUsRUFBRSxJQUFJLEVBQUUsQ0FBQztnQkFDOUQsR0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxJQUN2QixhQUFhLFFBQVEsYUFBYSxFQUNsQyxxQkFBcUIsR0FBRyxlQUFlLFFBQVEsZUFBZSxFQUM5RCx1Q0FBdUMsT0EzQkYsT0FBaUIsZUFBakIsT0FBaUIsU0EyQkksd0JBQXdCLEVBMUJ2QyxVQUFjLHNCQTJCekQsVUFBVSxzQkFBUSx1Q0FBdUM7b0JBQUUscUJBQXFCO29CQUFFLENBQUM7b0JBQ25GLGVBQWUsT0EzQjJDLFFBQXNCLHNEQTJCVixNQUFNLEVBQUUsVUFBVSxFQUFFLGFBQWE7cUJBRXhHLE9BQU8sT0EvQitCLE9BQWlCLFlBK0JuQyxPQUFPLEVBQUUsZUFBZTtZQUNuRCxDQUFDOzs7WUFFRCxHQUFPLEdBQVAsT0FBTzs0QkFBUCxPQUFPLENBQUMsYUFBYSxFQUFFLENBQUM7cUJBQ2pCLGFBQWEsR0FBRyxhQUFhO3FCQUU3QixPQUFPLE9BckMrQixPQUFpQixjQXFDakMsT0FBTyxFQUFFLGFBQWE7WUFDbkQsQ0FBQzs7OztZQUVNLEdBQW9DLEdBQXBDLG9DQUFvQzs0QkFBcEMsb0NBQW9DLENBQUMsY0FBYyxFQUFFLGVBQWUsRUFBRSxDQUFDO2dCQUM1RSxHQUFLLENBQUMsT0FBTyxHQUFHLGNBQWMsRUFDeEIsYUFBYSxHQUFHLElBQUksRUFDcEIsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxlQUFlO3VCQUVwRCxHQUFHO1lBQ1osQ0FBQzs7O1lBRU0sR0FBcUMsR0FBckMscUNBQXFDOzRCQUFyQyxxQ0FBcUMsQ0FBQyxlQUFlLEVBQUUsZUFBZSxFQUFFLENBQUM7Z0JBQzlFLEdBQUssQ0FBQyxPQUFPLE9BakQ4QixPQUFpQixTQWlEckMsZUFBZSxFQWhEVyxVQUFjLHFCQWlEekQsYUFBYSxHQUFHLElBQUksRUFDcEIsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxlQUFlO3VCQUVwRCxHQUFHO1lBQ1osQ0FBQzs7O1dBbERrQixHQUFHOztrQkFBSCxHQUFHIn0=
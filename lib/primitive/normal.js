"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _array = require("../utilities/array");
var _vector = require("../maths/vector");
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
var Normal = /*#__PURE__*/ function() {
    function Normal(extent) {
        _classCallCheck(this, Normal);
        this.extent = extent;
    }
    _createClass(Normal, [
        {
            key: "getExtent",
            value: function getExtent() {
                return this.extent;
            }
        },
        {
            key: "clone",
            value: function clone() {
                var extent = cloneExtent(this.extent), normal = new Normal(extent);
                return normal;
            }
        }
    ], [
        {
            key: "fromVertices",
            value: function fromVertices(vertices) {
                var firstVertex = (0, _array).first(vertices), secondVertex = (0, _array).second(vertices), thirdVertex = (0, _array).third(vertices), firstPosition = firstVertex.getPosition(), secondPosition = secondVertex.getPosition(), thirdPosition = thirdVertex.getPosition(), firstExtent = (0, _vector).subtract3(secondPosition, firstPosition), secondExtent = (0, _vector).subtract3(thirdPosition, firstPosition), extent = (0, _vector).normalise3((0, _vector).cross3(firstExtent, secondExtent)), normal = new Normal(extent);
                return normal;
            }
        }
    ]);
    return Normal;
}();
exports.default = Normal;
function cloneExtent(extent) {
    return extent.slice();
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcmltaXRpdmUvbm9ybWFsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBmaXJzdCwgc2Vjb25kLCB0aGlyZCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IG5vcm1hbGlzZTMsIHN1YnRyYWN0MywgY3Jvc3MzIH0gZnJvbSBcIi4uL21hdGhzL3ZlY3RvclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb3JtYWwge1xuICBjb25zdHJ1Y3RvcihleHRlbnQpIHtcbiAgICB0aGlzLmV4dGVudCA9IGV4dGVudDtcbiAgfVxuXG4gIGdldEV4dGVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5leHRlbnQ7XG4gIH1cblxuICBjbG9uZSgpIHtcbiAgICBjb25zdCBleHRlbnQgPSBjbG9uZUV4dGVudCh0aGlzLmV4dGVudCksXG4gICAgICAgICAgbm9ybWFsID0gbmV3IE5vcm1hbChleHRlbnQpO1xuXG4gICAgcmV0dXJuIG5vcm1hbDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVmVydGljZXModmVydGljZXMpIHtcbiAgICBjb25zdCBmaXJzdFZlcnRleCA9IGZpcnN0KHZlcnRpY2VzKSxcbiAgICAgICAgICBzZWNvbmRWZXJ0ZXggPSBzZWNvbmQodmVydGljZXMpLFxuICAgICAgICAgIHRoaXJkVmVydGV4ID0gdGhpcmQodmVydGljZXMpLFxuICAgICAgICAgIGZpcnN0UG9zaXRpb24gPSBmaXJzdFZlcnRleC5nZXRQb3NpdGlvbigpLFxuICAgICAgICAgIHNlY29uZFBvc2l0aW9uID0gc2Vjb25kVmVydGV4LmdldFBvc2l0aW9uKCksXG4gICAgICAgICAgdGhpcmRQb3NpdGlvbiA9IHRoaXJkVmVydGV4LmdldFBvc2l0aW9uKCksXG4gICAgICAgICAgZmlyc3RFeHRlbnQgPSBzdWJ0cmFjdDMoc2Vjb25kUG9zaXRpb24sIGZpcnN0UG9zaXRpb24pLFxuICAgICAgICAgIHNlY29uZEV4dGVudCA9IHN1YnRyYWN0Myh0aGlyZFBvc2l0aW9uLCBmaXJzdFBvc2l0aW9uKSxcbiAgICAgICAgICBleHRlbnQgPSBub3JtYWxpc2UzKGNyb3NzMyhmaXJzdEV4dGVudCwgc2Vjb25kRXh0ZW50KSksXG4gICAgICAgICAgbm9ybWFsID0gbmV3IE5vcm1hbChleHRlbnQpO1xuXG4gICAgcmV0dXJuIG5vcm1hbDtcbiAgfVxufVxuXG5mdW5jdGlvbiBjbG9uZUV4dGVudChleHRlbnQpIHsgcmV0dXJuIGV4dGVudC5zbGljZSgpOyB9XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7QUFFeUIsR0FBb0IsQ0FBcEIsTUFBb0I7QUFDWCxHQUFpQixDQUFqQixPQUFpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFMUMsTUFBTTthQUFOLE1BQU0sQ0FDYixNQUFNOzhCQURDLE1BQU07YUFFbEIsTUFBTSxHQUFHLE1BQU07O2lCQUZILE1BQU07O1lBS3pCLEdBQVMsR0FBVCxTQUFTOzRCQUFULFNBQVMsR0FBRyxDQUFDOzRCQUNDLE1BQU07WUFDcEIsQ0FBQzs7O1lBRUQsR0FBSyxHQUFMLEtBQUs7NEJBQUwsS0FBSyxHQUFHLENBQUM7Z0JBQ1AsR0FBSyxDQUFDLE1BQU0sR0FBRyxXQUFXLE1BQU0sTUFBTSxHQUNoQyxNQUFNLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNO3VCQUV6QixNQUFNO1lBQ2YsQ0FBQzs7OztZQUVNLEdBQVksR0FBWixZQUFZOzRCQUFaLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDN0IsR0FBSyxDQUFDLFdBQVcsT0FwQmdCLE1BQW9CLFFBb0IzQixRQUFRLEdBQzVCLFlBQVksT0FyQmUsTUFBb0IsU0FxQnpCLFFBQVEsR0FDOUIsV0FBVyxPQXRCZ0IsTUFBb0IsUUFzQjNCLFFBQVEsR0FDNUIsYUFBYSxHQUFHLFdBQVcsQ0FBQyxXQUFXLElBQ3ZDLGNBQWMsR0FBRyxZQUFZLENBQUMsV0FBVyxJQUN6QyxhQUFhLEdBQUcsV0FBVyxDQUFDLFdBQVcsSUFDdkMsV0FBVyxPQXpCeUIsT0FBaUIsWUF5QjdCLGNBQWMsRUFBRSxhQUFhLEdBQ3JELFlBQVksT0ExQndCLE9BQWlCLFlBMEI1QixhQUFhLEVBQUUsYUFBYSxHQUNyRCxNQUFNLE9BM0I4QixPQUFpQixpQkFBakIsT0FBaUIsU0EyQjFCLFdBQVcsRUFBRSxZQUFZLElBQ3BELE1BQU0sR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU07dUJBRXpCLE1BQU07WUFDZixDQUFDOzs7V0E3QmtCLE1BQU07O2tCQUFOLE1BQU07U0FnQ2xCLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztXQUFRLE1BQU0sQ0FBQyxLQUFLO0FBQUksQ0FBQyJ9
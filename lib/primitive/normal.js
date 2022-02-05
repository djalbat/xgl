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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcmltaXRpdmUvbm9ybWFsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBmaXJzdCwgc2Vjb25kLCB0aGlyZCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IG5vcm1hbGlzZTMsIHN1YnRyYWN0MywgY3Jvc3MzIH0gZnJvbSBcIi4uL21hdGhzL3ZlY3RvclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb3JtYWwge1xuICBjb25zdHJ1Y3RvcihleHRlbnQpIHtcbiAgICB0aGlzLmV4dGVudCA9IGV4dGVudDtcbiAgfVxuXG4gIGdldEV4dGVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5leHRlbnQ7XG4gIH1cblxuICBjbG9uZSgpIHtcbiAgICBjb25zdCBleHRlbnQgPSBjbG9uZUV4dGVudCh0aGlzLmV4dGVudCksXG4gICAgICAgICAgbm9ybWFsID0gbmV3IE5vcm1hbChleHRlbnQpO1xuXG4gICAgcmV0dXJuIG5vcm1hbDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVmVydGljZXModmVydGljZXMpIHtcbiAgICBjb25zdCBmaXJzdFZlcnRleCA9IGZpcnN0KHZlcnRpY2VzKSxcbiAgICAgICAgICBzZWNvbmRWZXJ0ZXggPSBzZWNvbmQodmVydGljZXMpLFxuICAgICAgICAgIHRoaXJkVmVydGV4ID0gdGhpcmQodmVydGljZXMpLFxuICAgICAgICAgIGZpcnN0UG9zaXRpb24gPSBmaXJzdFZlcnRleC5nZXRQb3NpdGlvbigpLFxuICAgICAgICAgIHNlY29uZFBvc2l0aW9uID0gc2Vjb25kVmVydGV4LmdldFBvc2l0aW9uKCksXG4gICAgICAgICAgdGhpcmRQb3NpdGlvbiA9IHRoaXJkVmVydGV4LmdldFBvc2l0aW9uKCksXG4gICAgICAgICAgZmlyc3RFeHRlbnQgPSBzdWJ0cmFjdDMoc2Vjb25kUG9zaXRpb24sIGZpcnN0UG9zaXRpb24pLFxuICAgICAgICAgIHNlY29uZEV4dGVudCA9IHN1YnRyYWN0Myh0aGlyZFBvc2l0aW9uLCBmaXJzdFBvc2l0aW9uKSxcbiAgICAgICAgICBleHRlbnQgPSBub3JtYWxpc2UzKGNyb3NzMyhmaXJzdEV4dGVudCwgc2Vjb25kRXh0ZW50KSksXG4gICAgICAgICAgbm9ybWFsID0gbmV3IE5vcm1hbChleHRlbnQpO1xuXG4gICAgcmV0dXJuIG5vcm1hbDtcbiAgfVxufVxuXG5mdW5jdGlvbiBjbG9uZUV4dGVudChleHRlbnQpIHsgcmV0dXJuIGV4dGVudC5zbGljZSgpOyB9XG4iXSwibmFtZXMiOlsiTm9ybWFsIiwiZXh0ZW50IiwiZ2V0RXh0ZW50IiwiY2xvbmUiLCJjbG9uZUV4dGVudCIsIm5vcm1hbCIsImZyb21WZXJ0aWNlcyIsInZlcnRpY2VzIiwiZmlyc3RWZXJ0ZXgiLCJmaXJzdCIsInNlY29uZFZlcnRleCIsInNlY29uZCIsInRoaXJkVmVydGV4IiwidGhpcmQiLCJmaXJzdFBvc2l0aW9uIiwiZ2V0UG9zaXRpb24iLCJzZWNvbmRQb3NpdGlvbiIsInRoaXJkUG9zaXRpb24iLCJmaXJzdEV4dGVudCIsInN1YnRyYWN0MyIsInNlY29uZEV4dGVudCIsIm5vcm1hbGlzZTMiLCJjcm9zczMiLCJzbGljZSJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7Ozs7QUFFeUIsR0FBb0IsQ0FBcEIsTUFBb0I7QUFDWCxHQUFpQixDQUFqQixPQUFpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFMUNBLE1BQU0saUJBQVosUUFBUTthQUFGQSxNQUFNLENBQ2JDLE1BQU07O1FBQ2hCLElBQUksQ0FBQ0EsTUFBTSxHQUFHQSxNQUFNOzs7O1lBR3RCQyxHQUFTLEVBQVRBLENBQVM7bUJBQVRBLFFBQVEsQ0FBUkEsU0FBUyxHQUFHLENBQUM7Z0JBQ1gsTUFBTSxDQUFDLElBQUksQ0FBQ0QsTUFBTTtZQUNwQixDQUFDOzs7WUFFREUsR0FBSyxFQUFMQSxDQUFLO21CQUFMQSxRQUFRLENBQVJBLEtBQUssR0FBRyxDQUFDO2dCQUNQLEdBQUssQ0FBQ0YsTUFBTSxHQUFHRyxXQUFXLENBQUMsSUFBSSxDQUFDSCxNQUFNLEdBQ2hDSSxNQUFNLEdBQUcsR0FBRyxDQUFDTCxNQUFNLENBQUNDLE1BQU07Z0JBRWhDLE1BQU0sQ0FBQ0ksTUFBTTtZQUNmLENBQUM7Ozs7WUFFTUMsR0FBWSxFQUFaQSxDQUFZO21CQUFuQixRQUFRLENBQURBLFlBQVksQ0FBQ0MsUUFBUSxFQUFFLENBQUM7Z0JBQzdCLEdBQUssQ0FBQ0MsV0FBVyxPQUFHQyxNQUFLLFFBQUNGLFFBQVEsR0FDNUJHLFlBQVksT0FBR0MsTUFBTSxTQUFDSixRQUFRLEdBQzlCSyxXQUFXLE9BQUdDLE1BQUssUUFBQ04sUUFBUSxHQUM1Qk8sYUFBYSxHQUFHTixXQUFXLENBQUNPLFdBQVcsSUFDdkNDLGNBQWMsR0FBR04sWUFBWSxDQUFDSyxXQUFXLElBQ3pDRSxhQUFhLEdBQUdMLFdBQVcsQ0FBQ0csV0FBVyxJQUN2Q0csV0FBVyxPQUFHQyxPQUFTLFlBQUNILGNBQWMsRUFBRUYsYUFBYSxHQUNyRE0sWUFBWSxPQUFHRCxPQUFTLFlBQUNGLGFBQWEsRUFBRUgsYUFBYSxHQUNyRGIsTUFBTSxPQUFHb0IsT0FBVSxpQkFBQ0MsT0FBTSxTQUFDSixXQUFXLEVBQUVFLFlBQVksSUFDcERmLE1BQU0sR0FBRyxHQUFHLENBQUNMLE1BQU0sQ0FBQ0MsTUFBTTtnQkFFaEMsTUFBTSxDQUFDSSxNQUFNO1lBQ2YsQ0FBQzs7Ozs7a0JBN0JrQkwsTUFBTTtTQWdDbEJJLFdBQVcsQ0FBQ0gsTUFBTSxFQUFFLENBQUM7SUFBQyxNQUFNLENBQUNBLE1BQU0sQ0FBQ3NCLEtBQUs7QUFBSSxDQUFDIn0=
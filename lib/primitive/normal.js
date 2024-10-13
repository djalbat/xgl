"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Normal;
    }
});
var _array = require("../utilities/array");
var _vector = require("../maths/vector");
function _class_call_check(instance, Constructor) {
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
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
var Normal = /*#__PURE__*/ function() {
    function Normal(extent) {
        _class_call_check(this, Normal);
        this.extent = extent;
    }
    _create_class(Normal, [
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
                var firstVertex = (0, _array.first)(vertices), secondVertex = (0, _array.second)(vertices), thirdVertex = (0, _array.third)(vertices), firstPosition = firstVertex.getPosition(), secondPosition = secondVertex.getPosition(), thirdPosition = thirdVertex.getPosition(), firstExtent = (0, _vector.subtract3)(secondPosition, firstPosition), secondExtent = (0, _vector.subtract3)(thirdPosition, firstPosition), extent = (0, _vector.normalise3)((0, _vector.cross3)(firstExtent, secondExtent)), normal = new Normal(extent);
                return normal;
            }
        }
    ]);
    return Normal;
}();
function cloneExtent(extent) {
    return extent.slice();
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcmltaXRpdmUvbm9ybWFsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBmaXJzdCwgc2Vjb25kLCB0aGlyZCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IG5vcm1hbGlzZTMsIHN1YnRyYWN0MywgY3Jvc3MzIH0gZnJvbSBcIi4uL21hdGhzL3ZlY3RvclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb3JtYWwge1xuICBjb25zdHJ1Y3RvcihleHRlbnQpIHtcbiAgICB0aGlzLmV4dGVudCA9IGV4dGVudDtcbiAgfVxuXG4gIGdldEV4dGVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5leHRlbnQ7XG4gIH1cblxuICBjbG9uZSgpIHtcbiAgICBjb25zdCBleHRlbnQgPSBjbG9uZUV4dGVudCh0aGlzLmV4dGVudCksXG4gICAgICAgICAgbm9ybWFsID0gbmV3IE5vcm1hbChleHRlbnQpO1xuXG4gICAgcmV0dXJuIG5vcm1hbDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVmVydGljZXModmVydGljZXMpIHtcbiAgICBjb25zdCBmaXJzdFZlcnRleCA9IGZpcnN0KHZlcnRpY2VzKSxcbiAgICAgICAgICBzZWNvbmRWZXJ0ZXggPSBzZWNvbmQodmVydGljZXMpLFxuICAgICAgICAgIHRoaXJkVmVydGV4ID0gdGhpcmQodmVydGljZXMpLFxuICAgICAgICAgIGZpcnN0UG9zaXRpb24gPSBmaXJzdFZlcnRleC5nZXRQb3NpdGlvbigpLFxuICAgICAgICAgIHNlY29uZFBvc2l0aW9uID0gc2Vjb25kVmVydGV4LmdldFBvc2l0aW9uKCksXG4gICAgICAgICAgdGhpcmRQb3NpdGlvbiA9IHRoaXJkVmVydGV4LmdldFBvc2l0aW9uKCksXG4gICAgICAgICAgZmlyc3RFeHRlbnQgPSBzdWJ0cmFjdDMoc2Vjb25kUG9zaXRpb24sIGZpcnN0UG9zaXRpb24pLFxuICAgICAgICAgIHNlY29uZEV4dGVudCA9IHN1YnRyYWN0Myh0aGlyZFBvc2l0aW9uLCBmaXJzdFBvc2l0aW9uKSxcbiAgICAgICAgICBleHRlbnQgPSBub3JtYWxpc2UzKGNyb3NzMyhmaXJzdEV4dGVudCwgc2Vjb25kRXh0ZW50KSksXG4gICAgICAgICAgbm9ybWFsID0gbmV3IE5vcm1hbChleHRlbnQpO1xuXG4gICAgcmV0dXJuIG5vcm1hbDtcbiAgfVxufVxuXG5mdW5jdGlvbiBjbG9uZUV4dGVudChleHRlbnQpIHsgcmV0dXJuIGV4dGVudC5zbGljZSgpOyB9XG4iXSwibmFtZXMiOlsiTm9ybWFsIiwiZXh0ZW50IiwiZ2V0RXh0ZW50IiwiY2xvbmUiLCJjbG9uZUV4dGVudCIsIm5vcm1hbCIsImZyb21WZXJ0aWNlcyIsInZlcnRpY2VzIiwiZmlyc3RWZXJ0ZXgiLCJmaXJzdCIsInNlY29uZFZlcnRleCIsInNlY29uZCIsInRoaXJkVmVydGV4IiwidGhpcmQiLCJmaXJzdFBvc2l0aW9uIiwiZ2V0UG9zaXRpb24iLCJzZWNvbmRQb3NpdGlvbiIsInRoaXJkUG9zaXRpb24iLCJmaXJzdEV4dGVudCIsInN1YnRyYWN0MyIsInNlY29uZEV4dGVudCIsIm5vcm1hbGlzZTMiLCJjcm9zczMiLCJzbGljZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFLcUJBOzs7cUJBSGdCO3NCQUNTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUvQixJQUFBLEFBQU1BLHVCQUFOO2FBQU1BLE9BQ1BDLE1BQU07Z0NBRENEO1FBRWpCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTs7a0JBRkdEOztZQUtuQkUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxNQUFNO1lBQ3BCOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1GLFNBQVNHLFlBQVksSUFBSSxDQUFDSCxNQUFNLEdBQ2hDSSxTQUFTLElBWEVMLE9BV1NDO2dCQUUxQixPQUFPSTtZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLGFBQWFDLFFBQVE7Z0JBQzFCLElBQU1DLGNBQWNDLElBQUFBLFlBQUssRUFBQ0YsV0FDcEJHLGVBQWVDLElBQUFBLGFBQU0sRUFBQ0osV0FDdEJLLGNBQWNDLElBQUFBLFlBQUssRUFBQ04sV0FDcEJPLGdCQUFnQk4sWUFBWU8sV0FBVyxJQUN2Q0MsaUJBQWlCTixhQUFhSyxXQUFXLElBQ3pDRSxnQkFBZ0JMLFlBQVlHLFdBQVcsSUFDdkNHLGNBQWNDLElBQUFBLGlCQUFTLEVBQUNILGdCQUFnQkYsZ0JBQ3hDTSxlQUFlRCxJQUFBQSxpQkFBUyxFQUFDRixlQUFlSCxnQkFDeENiLFNBQVNvQixJQUFBQSxrQkFBVSxFQUFDQyxJQUFBQSxjQUFNLEVBQUNKLGFBQWFFLGdCQUN4Q2YsU0FBUyxJQTFCRUwsT0EwQlNDO2dCQUUxQixPQUFPSTtZQUNUOzs7V0E3Qm1CTDs7QUFnQ3JCLFNBQVNJLFlBQVlILE1BQU07SUFBSSxPQUFPQSxPQUFPc0IsS0FBSztBQUFJIn0=
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
var Normal = function() {
    function Normal(extent) {
        _classCallCheck(this, Normal);
        this.extent = extent;
    }
    _createClass(Normal, [
        {
            key: "clone",
            value: function clone() {
                var extent = cloneExtent(this.extent), normal = new Normal(extent);
                return normal;
            }
        },
        {
            key: "getExtent",
            value: function getExtent() {
                return this.extent;
            }
        }
    ], [
        {
            key: "fromVertices",
            value: function fromVertices(vertices) {
                var firstVertex = _array.first(vertices), secondVertex = _array.second(vertices), thirdVertex = _array.third(vertices), firstPosition = firstVertex.getPosition(), secondPosition = secondVertex.getPosition(), thirdPosition = thirdVertex.getPosition(), firstExtent = _vector.subtract3(secondPosition, firstPosition), secondExtent = _vector.subtract3(thirdPosition, firstPosition), extent = _vector.normalise3(_vector.cross3(firstExtent, secondExtent)), normal = new Normal(extent);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcmltaXRpdmUvbm9ybWFsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBmaXJzdCwgc2Vjb25kLCB0aGlyZCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IG5vcm1hbGlzZTMsIHN1YnRyYWN0MywgY3Jvc3MzIH0gZnJvbSBcIi4uL21hdGhzL3ZlY3RvclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb3JtYWwge1xuICBjb25zdHJ1Y3RvcihleHRlbnQpIHtcbiAgICB0aGlzLmV4dGVudCA9IGV4dGVudDtcbiAgfVxuXG4gIGNsb25lKCkge1xuICAgIGNvbnN0IGV4dGVudCA9IGNsb25lRXh0ZW50KHRoaXMuZXh0ZW50KSxcbiAgICAgICAgICBub3JtYWwgPSBuZXcgTm9ybWFsKGV4dGVudCk7XG5cbiAgICByZXR1cm4gbm9ybWFsO1xuICB9XG5cbiAgZ2V0RXh0ZW50KCkge1xuICAgIHJldHVybiB0aGlzLmV4dGVudDtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21WZXJ0aWNlcyh2ZXJ0aWNlcykge1xuICAgIGNvbnN0IGZpcnN0VmVydGV4ID0gZmlyc3QodmVydGljZXMpLFxuICAgICAgICAgIHNlY29uZFZlcnRleCA9IHNlY29uZCh2ZXJ0aWNlcyksXG4gICAgICAgICAgdGhpcmRWZXJ0ZXggPSB0aGlyZCh2ZXJ0aWNlcyksXG4gICAgICAgICAgZmlyc3RQb3NpdGlvbiA9IGZpcnN0VmVydGV4LmdldFBvc2l0aW9uKCksXG4gICAgICAgICAgc2Vjb25kUG9zaXRpb24gPSBzZWNvbmRWZXJ0ZXguZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgICB0aGlyZFBvc2l0aW9uID0gdGhpcmRWZXJ0ZXguZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgICBmaXJzdEV4dGVudCA9IHN1YnRyYWN0MyhzZWNvbmRQb3NpdGlvbiwgZmlyc3RQb3NpdGlvbiksXG4gICAgICAgICAgc2Vjb25kRXh0ZW50ID0gc3VidHJhY3QzKHRoaXJkUG9zaXRpb24sIGZpcnN0UG9zaXRpb24pLFxuICAgICAgICAgIGV4dGVudCA9IG5vcm1hbGlzZTMoY3Jvc3MzKGZpcnN0RXh0ZW50LCBzZWNvbmRFeHRlbnQpKSxcbiAgICAgICAgICBub3JtYWwgPSBuZXcgTm9ybWFsKGV4dGVudCk7XG5cbiAgICByZXR1cm4gbm9ybWFsO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNsb25lRXh0ZW50KGV4dGVudCkgeyByZXR1cm4gZXh0ZW50LnNsaWNlKCk7IH1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztJQUV5QixNQUFvQjtJQUNYLE9BQWlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUUxQyxNQUFNO2FBQU4sTUFBTSxDQUNiLE1BQU07OEJBREMsTUFBTTthQUVsQixNQUFNLEdBQUcsTUFBTTs7aUJBRkgsTUFBTTs7WUFLekIsR0FBSyxHQUFMLEtBQUs7NEJBQUwsS0FBSztvQkFDRyxNQUFNLEdBQUcsV0FBVyxNQUFNLE1BQU0sR0FDaEMsTUFBTSxPQUFPLE1BQU0sQ0FBQyxNQUFNO3VCQUV6QixNQUFNOzs7O1lBR2YsR0FBUyxHQUFULFNBQVM7NEJBQVQsU0FBUzs0QkFDSyxNQUFNOzs7OztZQUdiLEdBQVksR0FBWixZQUFZOzRCQUFaLFlBQVksQ0FBQyxRQUFRO29CQUNwQixXQUFXLEdBcEJnQixNQUFvQixPQW9CM0IsUUFBUSxHQUM1QixZQUFZLEdBckJlLE1BQW9CLFFBcUJ6QixRQUFRLEdBQzlCLFdBQVcsR0F0QmdCLE1BQW9CLE9Bc0IzQixRQUFRLEdBQzVCLGFBQWEsR0FBRyxXQUFXLENBQUMsV0FBVyxJQUN2QyxjQUFjLEdBQUcsWUFBWSxDQUFDLFdBQVcsSUFDekMsYUFBYSxHQUFHLFdBQVcsQ0FBQyxXQUFXLElBQ3ZDLFdBQVcsR0F6QnlCLE9BQWlCLFdBeUI3QixjQUFjLEVBQUUsYUFBYSxHQUNyRCxZQUFZLEdBMUJ3QixPQUFpQixXQTBCNUIsYUFBYSxFQUFFLGFBQWEsR0FDckQsTUFBTSxHQTNCOEIsT0FBaUIsWUFBakIsT0FBaUIsUUEyQjFCLFdBQVcsRUFBRSxZQUFZLElBQ3BELE1BQU0sT0FBTyxNQUFNLENBQUMsTUFBTTt1QkFFekIsTUFBTTs7OztXQTVCSSxNQUFNOztrQkFBTixNQUFNO1NBZ0NsQixXQUFXLENBQUMsTUFBTTtXQUFXLE1BQU0sQ0FBQyxLQUFLIn0=
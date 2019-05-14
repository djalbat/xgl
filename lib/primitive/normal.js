'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var vectorMaths = require('../maths/vector'),
    arrayUtilities = require('../utilities/array');

var first = arrayUtilities.first,
    second = arrayUtilities.second,
    third = arrayUtilities.third,
    normalise3 = vectorMaths.normalise3,
    subtract3 = vectorMaths.subtract3,
    cross3 = vectorMaths.cross3;

var Normal = function () {
  function Normal(extent) {
    _classCallCheck(this, Normal);

    this.extent = extent;
  }

  _createClass(Normal, [{
    key: 'clone',
    value: function clone() {
      var extent = cloneExtent(this.extent),
          normal = new Normal(extent);

      return normal;
    }
  }, {
    key: 'getExtent',
    value: function getExtent() {
      return this.extent;
    }
  }], [{
    key: 'fromVertices',
    value: function fromVertices(vertices) {
      var firstVertex = first(vertices),
          secondVertex = second(vertices),
          thirdVertex = third(vertices),
          firstPosition = firstVertex.getPosition(),
          secondPosition = secondVertex.getPosition(),
          thirdPosition = thirdVertex.getPosition(),
          firstExtent = subtract3(secondPosition, firstPosition),
          secondExtent = subtract3(thirdPosition, firstPosition),
          extent = normalise3(cross3(firstExtent, secondExtent)),
          normal = new Normal(extent);

      return normal;
    }
  }]);

  return Normal;
}();

module.exports = Normal;

function cloneExtent(extent) {
  return extent.slice();
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9wcmltaXRpdmUvbm9ybWFsLmpzIl0sIm5hbWVzIjpbInZlY3Rvck1hdGhzIiwicmVxdWlyZSIsImFycmF5VXRpbGl0aWVzIiwiZmlyc3QiLCJzZWNvbmQiLCJ0aGlyZCIsIm5vcm1hbGlzZTMiLCJzdWJ0cmFjdDMiLCJjcm9zczMiLCJOb3JtYWwiLCJleHRlbnQiLCJjbG9uZUV4dGVudCIsIm5vcm1hbCIsInZlcnRpY2VzIiwiZmlyc3RWZXJ0ZXgiLCJzZWNvbmRWZXJ0ZXgiLCJ0aGlyZFZlcnRleCIsImZpcnN0UG9zaXRpb24iLCJnZXRQb3NpdGlvbiIsInNlY29uZFBvc2l0aW9uIiwidGhpcmRQb3NpdGlvbiIsImZpcnN0RXh0ZW50Iiwic2Vjb25kRXh0ZW50IiwibW9kdWxlIiwiZXhwb3J0cyIsInNsaWNlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsY0FBY0MsUUFBUSxpQkFBUixDQUFwQjtBQUFBLElBQ01DLGlCQUFpQkQsUUFBUSxvQkFBUixDQUR2Qjs7SUFHUUUsSyxHQUF5QkQsYyxDQUF6QkMsSztJQUFPQyxNLEdBQWtCRixjLENBQWxCRSxNO0lBQVFDLEssR0FBVUgsYyxDQUFWRyxLO0lBQ2ZDLFUsR0FBa0NOLFcsQ0FBbENNLFU7SUFBWUMsUyxHQUFzQlAsVyxDQUF0Qk8sUztJQUFXQyxNLEdBQVdSLFcsQ0FBWFEsTTs7SUFFekJDLE07QUFDSixrQkFBWUMsTUFBWixFQUFvQjtBQUFBOztBQUNsQixTQUFLQSxNQUFMLEdBQWNBLE1BQWQ7QUFDRDs7Ozs0QkFFTztBQUNOLFVBQU1BLFNBQVNDLFlBQVksS0FBS0QsTUFBakIsQ0FBZjtBQUFBLFVBQ01FLFNBQVMsSUFBSUgsTUFBSixDQUFXQyxNQUFYLENBRGY7O0FBR0EsYUFBT0UsTUFBUDtBQUNEOzs7Z0NBRVc7QUFDVixhQUFPLEtBQUtGLE1BQVo7QUFDRDs7O2lDQUVtQkcsUSxFQUFVO0FBQzVCLFVBQU1DLGNBQWNYLE1BQU1VLFFBQU4sQ0FBcEI7QUFBQSxVQUNNRSxlQUFlWCxPQUFPUyxRQUFQLENBRHJCO0FBQUEsVUFFTUcsY0FBY1gsTUFBTVEsUUFBTixDQUZwQjtBQUFBLFVBR01JLGdCQUFnQkgsWUFBWUksV0FBWixFQUh0QjtBQUFBLFVBSU1DLGlCQUFpQkosYUFBYUcsV0FBYixFQUp2QjtBQUFBLFVBS01FLGdCQUFnQkosWUFBWUUsV0FBWixFQUx0QjtBQUFBLFVBTU1HLGNBQWNkLFVBQVVZLGNBQVYsRUFBMEJGLGFBQTFCLENBTnBCO0FBQUEsVUFPTUssZUFBZWYsVUFBVWEsYUFBVixFQUF5QkgsYUFBekIsQ0FQckI7QUFBQSxVQVFNUCxTQUFTSixXQUFXRSxPQUFPYSxXQUFQLEVBQW9CQyxZQUFwQixDQUFYLENBUmY7QUFBQSxVQVNNVixTQUFTLElBQUlILE1BQUosQ0FBV0MsTUFBWCxDQVRmOztBQVdBLGFBQU9FLE1BQVA7QUFDRDs7Ozs7O0FBR0hXLE9BQU9DLE9BQVAsR0FBaUJmLE1BQWpCOztBQUVBLFNBQVNFLFdBQVQsQ0FBcUJELE1BQXJCLEVBQTZCO0FBQUUsU0FBT0EsT0FBT2UsS0FBUCxFQUFQO0FBQXdCIiwiZmlsZSI6Im5vcm1hbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgdmVjdG9yTWF0aHMgPSByZXF1aXJlKCcuLi9tYXRocy92ZWN0b3InKSxcbiAgICAgIGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL2FycmF5Jyk7XG5cbmNvbnN0IHsgZmlyc3QsIHNlY29uZCwgdGhpcmQgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBub3JtYWxpc2UzLCBzdWJ0cmFjdDMsIGNyb3NzMyB9ID0gdmVjdG9yTWF0aHM7XG5cbmNsYXNzIE5vcm1hbCB7XG4gIGNvbnN0cnVjdG9yKGV4dGVudCkge1xuICAgIHRoaXMuZXh0ZW50ID0gZXh0ZW50O1xuICB9XG5cbiAgY2xvbmUoKSB7XG4gICAgY29uc3QgZXh0ZW50ID0gY2xvbmVFeHRlbnQodGhpcy5leHRlbnQpLFxuICAgICAgICAgIG5vcm1hbCA9IG5ldyBOb3JtYWwoZXh0ZW50KTtcblxuICAgIHJldHVybiBub3JtYWw7XG4gIH1cblxuICBnZXRFeHRlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZXh0ZW50O1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbVZlcnRpY2VzKHZlcnRpY2VzKSB7XG4gICAgY29uc3QgZmlyc3RWZXJ0ZXggPSBmaXJzdCh2ZXJ0aWNlcyksXG4gICAgICAgICAgc2Vjb25kVmVydGV4ID0gc2Vjb25kKHZlcnRpY2VzKSxcbiAgICAgICAgICB0aGlyZFZlcnRleCA9IHRoaXJkKHZlcnRpY2VzKSxcbiAgICAgICAgICBmaXJzdFBvc2l0aW9uID0gZmlyc3RWZXJ0ZXguZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgICBzZWNvbmRQb3NpdGlvbiA9IHNlY29uZFZlcnRleC5nZXRQb3NpdGlvbigpLFxuICAgICAgICAgIHRoaXJkUG9zaXRpb24gPSB0aGlyZFZlcnRleC5nZXRQb3NpdGlvbigpLFxuICAgICAgICAgIGZpcnN0RXh0ZW50ID0gc3VidHJhY3QzKHNlY29uZFBvc2l0aW9uLCBmaXJzdFBvc2l0aW9uKSxcbiAgICAgICAgICBzZWNvbmRFeHRlbnQgPSBzdWJ0cmFjdDModGhpcmRQb3NpdGlvbiwgZmlyc3RQb3NpdGlvbiksXG4gICAgICAgICAgZXh0ZW50ID0gbm9ybWFsaXNlMyhjcm9zczMoZmlyc3RFeHRlbnQsIHNlY29uZEV4dGVudCkpLFxuICAgICAgICAgIG5vcm1hbCA9IG5ldyBOb3JtYWwoZXh0ZW50KTtcblxuICAgIHJldHVybiBub3JtYWw7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBOb3JtYWw7XG5cbmZ1bmN0aW9uIGNsb25lRXh0ZW50KGV4dGVudCkgeyByZXR1cm4gZXh0ZW50LnNsaWNlKCk7IH1cbiJdfQ==
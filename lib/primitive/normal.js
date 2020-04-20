"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var vectorMaths = require("../maths/vector"),
    arrayUtilities = require("../utilities/array");

var first = arrayUtilities.first,
    second = arrayUtilities.second,
    third = arrayUtilities.third,
    normalise3 = vectorMaths.normalise3,
    subtract3 = vectorMaths.subtract3,
    cross3 = vectorMaths.cross3;

var Normal = /*#__PURE__*/function () {
  function Normal(extent) {
    _classCallCheck(this, Normal);

    this.extent = extent;
  }

  _createClass(Normal, [{
    key: "clone",
    value: function clone() {
      var extent = cloneExtent(this.extent),
          normal = new Normal(extent);
      return normal;
    }
  }, {
    key: "getExtent",
    value: function getExtent() {
      return this.extent;
    }
  }], [{
    key: "fromVertices",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vcm1hbC5qcyJdLCJuYW1lcyI6WyJ2ZWN0b3JNYXRocyIsInJlcXVpcmUiLCJhcnJheVV0aWxpdGllcyIsImZpcnN0Iiwic2Vjb25kIiwidGhpcmQiLCJub3JtYWxpc2UzIiwic3VidHJhY3QzIiwiY3Jvc3MzIiwiTm9ybWFsIiwiZXh0ZW50IiwiY2xvbmVFeHRlbnQiLCJub3JtYWwiLCJ2ZXJ0aWNlcyIsImZpcnN0VmVydGV4Iiwic2Vjb25kVmVydGV4IiwidGhpcmRWZXJ0ZXgiLCJmaXJzdFBvc2l0aW9uIiwiZ2V0UG9zaXRpb24iLCJzZWNvbmRQb3NpdGlvbiIsInRoaXJkUG9zaXRpb24iLCJmaXJzdEV4dGVudCIsInNlY29uZEV4dGVudCIsIm1vZHVsZSIsImV4cG9ydHMiLCJzbGljZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBRUEsSUFBTUEsV0FBVyxHQUFHQyxPQUFPLENBQUMsaUJBQUQsQ0FBM0I7QUFBQSxJQUNNQyxjQUFjLEdBQUdELE9BQU8sQ0FBQyxvQkFBRCxDQUQ5Qjs7SUFHUUUsSyxHQUF5QkQsYyxDQUF6QkMsSztJQUFPQyxNLEdBQWtCRixjLENBQWxCRSxNO0lBQVFDLEssR0FBVUgsYyxDQUFWRyxLO0lBQ2ZDLFUsR0FBa0NOLFcsQ0FBbENNLFU7SUFBWUMsUyxHQUFzQlAsVyxDQUF0Qk8sUztJQUFXQyxNLEdBQVdSLFcsQ0FBWFEsTTs7SUFFekJDLE07QUFDSixrQkFBWUMsTUFBWixFQUFvQjtBQUFBOztBQUNsQixTQUFLQSxNQUFMLEdBQWNBLE1BQWQ7QUFDRDs7Ozs0QkFFTztBQUNOLFVBQU1BLE1BQU0sR0FBR0MsV0FBVyxDQUFDLEtBQUtELE1BQU4sQ0FBMUI7QUFBQSxVQUNNRSxNQUFNLEdBQUcsSUFBSUgsTUFBSixDQUFXQyxNQUFYLENBRGY7QUFHQSxhQUFPRSxNQUFQO0FBQ0Q7OztnQ0FFVztBQUNWLGFBQU8sS0FBS0YsTUFBWjtBQUNEOzs7aUNBRW1CRyxRLEVBQVU7QUFDNUIsVUFBTUMsV0FBVyxHQUFHWCxLQUFLLENBQUNVLFFBQUQsQ0FBekI7QUFBQSxVQUNNRSxZQUFZLEdBQUdYLE1BQU0sQ0FBQ1MsUUFBRCxDQUQzQjtBQUFBLFVBRU1HLFdBQVcsR0FBR1gsS0FBSyxDQUFDUSxRQUFELENBRnpCO0FBQUEsVUFHTUksYUFBYSxHQUFHSCxXQUFXLENBQUNJLFdBQVosRUFIdEI7QUFBQSxVQUlNQyxjQUFjLEdBQUdKLFlBQVksQ0FBQ0csV0FBYixFQUp2QjtBQUFBLFVBS01FLGFBQWEsR0FBR0osV0FBVyxDQUFDRSxXQUFaLEVBTHRCO0FBQUEsVUFNTUcsV0FBVyxHQUFHZCxTQUFTLENBQUNZLGNBQUQsRUFBaUJGLGFBQWpCLENBTjdCO0FBQUEsVUFPTUssWUFBWSxHQUFHZixTQUFTLENBQUNhLGFBQUQsRUFBZ0JILGFBQWhCLENBUDlCO0FBQUEsVUFRTVAsTUFBTSxHQUFHSixVQUFVLENBQUNFLE1BQU0sQ0FBQ2EsV0FBRCxFQUFjQyxZQUFkLENBQVAsQ0FSekI7QUFBQSxVQVNNVixNQUFNLEdBQUcsSUFBSUgsTUFBSixDQUFXQyxNQUFYLENBVGY7QUFXQSxhQUFPRSxNQUFQO0FBQ0Q7Ozs7OztBQUdIVyxNQUFNLENBQUNDLE9BQVAsR0FBaUJmLE1BQWpCOztBQUVBLFNBQVNFLFdBQVQsQ0FBcUJELE1BQXJCLEVBQTZCO0FBQUUsU0FBT0EsTUFBTSxDQUFDZSxLQUFQLEVBQVA7QUFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgdmVjdG9yTWF0aHMgPSByZXF1aXJlKFwiLi4vbWF0aHMvdmVjdG9yXCIpLFxuICAgICAgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKFwiLi4vdXRpbGl0aWVzL2FycmF5XCIpO1xuXG5jb25zdCB7IGZpcnN0LCBzZWNvbmQsIHRoaXJkIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgbm9ybWFsaXNlMywgc3VidHJhY3QzLCBjcm9zczMgfSA9IHZlY3Rvck1hdGhzO1xuXG5jbGFzcyBOb3JtYWwge1xuICBjb25zdHJ1Y3RvcihleHRlbnQpIHtcbiAgICB0aGlzLmV4dGVudCA9IGV4dGVudDtcbiAgfVxuXG4gIGNsb25lKCkge1xuICAgIGNvbnN0IGV4dGVudCA9IGNsb25lRXh0ZW50KHRoaXMuZXh0ZW50KSxcbiAgICAgICAgICBub3JtYWwgPSBuZXcgTm9ybWFsKGV4dGVudCk7XG5cbiAgICByZXR1cm4gbm9ybWFsO1xuICB9XG5cbiAgZ2V0RXh0ZW50KCkge1xuICAgIHJldHVybiB0aGlzLmV4dGVudDtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21WZXJ0aWNlcyh2ZXJ0aWNlcykge1xuICAgIGNvbnN0IGZpcnN0VmVydGV4ID0gZmlyc3QodmVydGljZXMpLFxuICAgICAgICAgIHNlY29uZFZlcnRleCA9IHNlY29uZCh2ZXJ0aWNlcyksXG4gICAgICAgICAgdGhpcmRWZXJ0ZXggPSB0aGlyZCh2ZXJ0aWNlcyksXG4gICAgICAgICAgZmlyc3RQb3NpdGlvbiA9IGZpcnN0VmVydGV4LmdldFBvc2l0aW9uKCksXG4gICAgICAgICAgc2Vjb25kUG9zaXRpb24gPSBzZWNvbmRWZXJ0ZXguZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgICB0aGlyZFBvc2l0aW9uID0gdGhpcmRWZXJ0ZXguZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgICBmaXJzdEV4dGVudCA9IHN1YnRyYWN0MyhzZWNvbmRQb3NpdGlvbiwgZmlyc3RQb3NpdGlvbiksXG4gICAgICAgICAgc2Vjb25kRXh0ZW50ID0gc3VidHJhY3QzKHRoaXJkUG9zaXRpb24sIGZpcnN0UG9zaXRpb24pLFxuICAgICAgICAgIGV4dGVudCA9IG5vcm1hbGlzZTMoY3Jvc3MzKGZpcnN0RXh0ZW50LCBzZWNvbmRFeHRlbnQpKSxcbiAgICAgICAgICBub3JtYWwgPSBuZXcgTm9ybWFsKGV4dGVudCk7XG5cbiAgICByZXR1cm4gbm9ybWFsO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTm9ybWFsO1xuXG5mdW5jdGlvbiBjbG9uZUV4dGVudChleHRlbnQpIHsgcmV0dXJuIGV4dGVudC5zbGljZSgpOyB9XG4iXX0=
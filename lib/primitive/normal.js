"use strict";

var _array = require("../utilities/array");

var _vector = require("../maths/vector");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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
      var firstVertex = (0, _array.first)(vertices),
          secondVertex = (0, _array.second)(vertices),
          thirdVertex = (0, _array.third)(vertices),
          firstPosition = firstVertex.getPosition(),
          secondPosition = secondVertex.getPosition(),
          thirdPosition = thirdVertex.getPosition(),
          firstExtent = (0, _vector.subtract3)(secondPosition, firstPosition),
          secondExtent = (0, _vector.subtract3)(thirdPosition, firstPosition),
          extent = (0, _vector.normalise3)((0, _vector.cross3)(firstExtent, secondExtent)),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vcm1hbC5qcyJdLCJuYW1lcyI6WyJOb3JtYWwiLCJleHRlbnQiLCJjbG9uZUV4dGVudCIsIm5vcm1hbCIsInZlcnRpY2VzIiwiZmlyc3RWZXJ0ZXgiLCJzZWNvbmRWZXJ0ZXgiLCJ0aGlyZFZlcnRleCIsImZpcnN0UG9zaXRpb24iLCJnZXRQb3NpdGlvbiIsInNlY29uZFBvc2l0aW9uIiwidGhpcmRQb3NpdGlvbiIsImZpcnN0RXh0ZW50Iiwic2Vjb25kRXh0ZW50IiwibW9kdWxlIiwiZXhwb3J0cyIsInNsaWNlIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7QUFDQTs7Ozs7Ozs7SUFFTUEsTTtBQUNKLGtCQUFZQyxNQUFaLEVBQW9CO0FBQUE7O0FBQ2xCLFNBQUtBLE1BQUwsR0FBY0EsTUFBZDtBQUNEOzs7OzRCQUVPO0FBQ04sVUFBTUEsTUFBTSxHQUFHQyxXQUFXLENBQUMsS0FBS0QsTUFBTixDQUExQjtBQUFBLFVBQ01FLE1BQU0sR0FBRyxJQUFJSCxNQUFKLENBQVdDLE1BQVgsQ0FEZjtBQUdBLGFBQU9FLE1BQVA7QUFDRDs7O2dDQUVXO0FBQ1YsYUFBTyxLQUFLRixNQUFaO0FBQ0Q7OztpQ0FFbUJHLFEsRUFBVTtBQUM1QixVQUFNQyxXQUFXLEdBQUcsa0JBQU1ELFFBQU4sQ0FBcEI7QUFBQSxVQUNNRSxZQUFZLEdBQUcsbUJBQU9GLFFBQVAsQ0FEckI7QUFBQSxVQUVNRyxXQUFXLEdBQUcsa0JBQU1ILFFBQU4sQ0FGcEI7QUFBQSxVQUdNSSxhQUFhLEdBQUdILFdBQVcsQ0FBQ0ksV0FBWixFQUh0QjtBQUFBLFVBSU1DLGNBQWMsR0FBR0osWUFBWSxDQUFDRyxXQUFiLEVBSnZCO0FBQUEsVUFLTUUsYUFBYSxHQUFHSixXQUFXLENBQUNFLFdBQVosRUFMdEI7QUFBQSxVQU1NRyxXQUFXLEdBQUcsdUJBQVVGLGNBQVYsRUFBMEJGLGFBQTFCLENBTnBCO0FBQUEsVUFPTUssWUFBWSxHQUFHLHVCQUFVRixhQUFWLEVBQXlCSCxhQUF6QixDQVByQjtBQUFBLFVBUU1QLE1BQU0sR0FBRyx3QkFBVyxvQkFBT1csV0FBUCxFQUFvQkMsWUFBcEIsQ0FBWCxDQVJmO0FBQUEsVUFTTVYsTUFBTSxHQUFHLElBQUlILE1BQUosQ0FBV0MsTUFBWCxDQVRmO0FBV0EsYUFBT0UsTUFBUDtBQUNEOzs7Ozs7QUFHSFcsTUFBTSxDQUFDQyxPQUFQLEdBQWlCZixNQUFqQjs7QUFFQSxTQUFTRSxXQUFULENBQXFCRCxNQUFyQixFQUE2QjtBQUFFLFNBQU9BLE1BQU0sQ0FBQ2UsS0FBUCxFQUFQO0FBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGZpcnN0LCBzZWNvbmQsIHRoaXJkIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgbm9ybWFsaXNlMywgc3VidHJhY3QzLCBjcm9zczMgfSBmcm9tIFwiLi4vbWF0aHMvdmVjdG9yXCI7XG5cbmNsYXNzIE5vcm1hbCB7XG4gIGNvbnN0cnVjdG9yKGV4dGVudCkge1xuICAgIHRoaXMuZXh0ZW50ID0gZXh0ZW50O1xuICB9XG5cbiAgY2xvbmUoKSB7XG4gICAgY29uc3QgZXh0ZW50ID0gY2xvbmVFeHRlbnQodGhpcy5leHRlbnQpLFxuICAgICAgICAgIG5vcm1hbCA9IG5ldyBOb3JtYWwoZXh0ZW50KTtcblxuICAgIHJldHVybiBub3JtYWw7XG4gIH1cblxuICBnZXRFeHRlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZXh0ZW50O1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbVZlcnRpY2VzKHZlcnRpY2VzKSB7XG4gICAgY29uc3QgZmlyc3RWZXJ0ZXggPSBmaXJzdCh2ZXJ0aWNlcyksXG4gICAgICAgICAgc2Vjb25kVmVydGV4ID0gc2Vjb25kKHZlcnRpY2VzKSxcbiAgICAgICAgICB0aGlyZFZlcnRleCA9IHRoaXJkKHZlcnRpY2VzKSxcbiAgICAgICAgICBmaXJzdFBvc2l0aW9uID0gZmlyc3RWZXJ0ZXguZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgICBzZWNvbmRQb3NpdGlvbiA9IHNlY29uZFZlcnRleC5nZXRQb3NpdGlvbigpLFxuICAgICAgICAgIHRoaXJkUG9zaXRpb24gPSB0aGlyZFZlcnRleC5nZXRQb3NpdGlvbigpLFxuICAgICAgICAgIGZpcnN0RXh0ZW50ID0gc3VidHJhY3QzKHNlY29uZFBvc2l0aW9uLCBmaXJzdFBvc2l0aW9uKSxcbiAgICAgICAgICBzZWNvbmRFeHRlbnQgPSBzdWJ0cmFjdDModGhpcmRQb3NpdGlvbiwgZmlyc3RQb3NpdGlvbiksXG4gICAgICAgICAgZXh0ZW50ID0gbm9ybWFsaXNlMyhjcm9zczMoZmlyc3RFeHRlbnQsIHNlY29uZEV4dGVudCkpLFxuICAgICAgICAgIG5vcm1hbCA9IG5ldyBOb3JtYWwoZXh0ZW50KTtcblxuICAgIHJldHVybiBub3JtYWw7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBOb3JtYWw7XG5cbmZ1bmN0aW9uIGNsb25lRXh0ZW50KGV4dGVudCkgeyByZXR1cm4gZXh0ZW50LnNsaWNlKCk7IH1cbiJdfQ==
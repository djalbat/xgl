"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

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

exports["default"] = Normal;

function cloneExtent(extent) {
  return extent.slice();
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vcm1hbC5qcyJdLCJuYW1lcyI6WyJOb3JtYWwiLCJleHRlbnQiLCJjbG9uZUV4dGVudCIsIm5vcm1hbCIsInZlcnRpY2VzIiwiZmlyc3RWZXJ0ZXgiLCJzZWNvbmRWZXJ0ZXgiLCJ0aGlyZFZlcnRleCIsImZpcnN0UG9zaXRpb24iLCJnZXRQb3NpdGlvbiIsInNlY29uZFBvc2l0aW9uIiwidGhpcmRQb3NpdGlvbiIsImZpcnN0RXh0ZW50Iiwic2Vjb25kRXh0ZW50Iiwic2xpY2UiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBQ0E7Ozs7Ozs7O0lBRXFCQSxNO0FBQ25CLGtCQUFZQyxNQUFaLEVBQW9CO0FBQUE7O0FBQ2xCLFNBQUtBLE1BQUwsR0FBY0EsTUFBZDtBQUNEOzs7OzRCQUVPO0FBQ04sVUFBTUEsTUFBTSxHQUFHQyxXQUFXLENBQUMsS0FBS0QsTUFBTixDQUExQjtBQUFBLFVBQ01FLE1BQU0sR0FBRyxJQUFJSCxNQUFKLENBQVdDLE1BQVgsQ0FEZjtBQUdBLGFBQU9FLE1BQVA7QUFDRDs7O2dDQUVXO0FBQ1YsYUFBTyxLQUFLRixNQUFaO0FBQ0Q7OztpQ0FFbUJHLFEsRUFBVTtBQUM1QixVQUFNQyxXQUFXLEdBQUcsa0JBQU1ELFFBQU4sQ0FBcEI7QUFBQSxVQUNNRSxZQUFZLEdBQUcsbUJBQU9GLFFBQVAsQ0FEckI7QUFBQSxVQUVNRyxXQUFXLEdBQUcsa0JBQU1ILFFBQU4sQ0FGcEI7QUFBQSxVQUdNSSxhQUFhLEdBQUdILFdBQVcsQ0FBQ0ksV0FBWixFQUh0QjtBQUFBLFVBSU1DLGNBQWMsR0FBR0osWUFBWSxDQUFDRyxXQUFiLEVBSnZCO0FBQUEsVUFLTUUsYUFBYSxHQUFHSixXQUFXLENBQUNFLFdBQVosRUFMdEI7QUFBQSxVQU1NRyxXQUFXLEdBQUcsdUJBQVVGLGNBQVYsRUFBMEJGLGFBQTFCLENBTnBCO0FBQUEsVUFPTUssWUFBWSxHQUFHLHVCQUFVRixhQUFWLEVBQXlCSCxhQUF6QixDQVByQjtBQUFBLFVBUU1QLE1BQU0sR0FBRyx3QkFBVyxvQkFBT1csV0FBUCxFQUFvQkMsWUFBcEIsQ0FBWCxDQVJmO0FBQUEsVUFTTVYsTUFBTSxHQUFHLElBQUlILE1BQUosQ0FBV0MsTUFBWCxDQVRmO0FBV0EsYUFBT0UsTUFBUDtBQUNEOzs7Ozs7OztBQUdILFNBQVNELFdBQVQsQ0FBcUJELE1BQXJCLEVBQTZCO0FBQUUsU0FBT0EsTUFBTSxDQUFDYSxLQUFQLEVBQVA7QUFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgZmlyc3QsIHNlY29uZCwgdGhpcmQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBub3JtYWxpc2UzLCBzdWJ0cmFjdDMsIGNyb3NzMyB9IGZyb20gXCIuLi9tYXRocy92ZWN0b3JcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm9ybWFsIHtcbiAgY29uc3RydWN0b3IoZXh0ZW50KSB7XG4gICAgdGhpcy5leHRlbnQgPSBleHRlbnQ7XG4gIH1cblxuICBjbG9uZSgpIHtcbiAgICBjb25zdCBleHRlbnQgPSBjbG9uZUV4dGVudCh0aGlzLmV4dGVudCksXG4gICAgICAgICAgbm9ybWFsID0gbmV3IE5vcm1hbChleHRlbnQpO1xuXG4gICAgcmV0dXJuIG5vcm1hbDtcbiAgfVxuXG4gIGdldEV4dGVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5leHRlbnQ7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tVmVydGljZXModmVydGljZXMpIHtcbiAgICBjb25zdCBmaXJzdFZlcnRleCA9IGZpcnN0KHZlcnRpY2VzKSxcbiAgICAgICAgICBzZWNvbmRWZXJ0ZXggPSBzZWNvbmQodmVydGljZXMpLFxuICAgICAgICAgIHRoaXJkVmVydGV4ID0gdGhpcmQodmVydGljZXMpLFxuICAgICAgICAgIGZpcnN0UG9zaXRpb24gPSBmaXJzdFZlcnRleC5nZXRQb3NpdGlvbigpLFxuICAgICAgICAgIHNlY29uZFBvc2l0aW9uID0gc2Vjb25kVmVydGV4LmdldFBvc2l0aW9uKCksXG4gICAgICAgICAgdGhpcmRQb3NpdGlvbiA9IHRoaXJkVmVydGV4LmdldFBvc2l0aW9uKCksXG4gICAgICAgICAgZmlyc3RFeHRlbnQgPSBzdWJ0cmFjdDMoc2Vjb25kUG9zaXRpb24sIGZpcnN0UG9zaXRpb24pLFxuICAgICAgICAgIHNlY29uZEV4dGVudCA9IHN1YnRyYWN0Myh0aGlyZFBvc2l0aW9uLCBmaXJzdFBvc2l0aW9uKSxcbiAgICAgICAgICBleHRlbnQgPSBub3JtYWxpc2UzKGNyb3NzMyhmaXJzdEV4dGVudCwgc2Vjb25kRXh0ZW50KSksXG4gICAgICAgICAgbm9ybWFsID0gbmV3IE5vcm1hbChleHRlbnQpO1xuXG4gICAgcmV0dXJuIG5vcm1hbDtcbiAgfVxufVxuXG5mdW5jdGlvbiBjbG9uZUV4dGVudChleHRlbnQpIHsgcmV0dXJuIGV4dGVudC5zbGljZSgpOyB9XG4iXX0=
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var rotationUtilities = require("../utilities/rotation");

var rotatePosition = rotationUtilities.rotatePosition;

var Vertex = /*#__PURE__*/function () {
  function Vertex(position) {
    _classCallCheck(this, Vertex);

    this.position = position;
  }

  _createClass(Vertex, [{
    key: "getPosition",
    value: function getPosition() {
      return this.position;
    }
  }, {
    key: "clone",
    value: function clone() {
      var position = this.position.slice(),
          ///
      vertex = new Vertex(position);
      return vertex;
    }
  }, {
    key: "rotate",
    value: function rotate(rotationQuaternion) {
      this.position = rotatePosition(this.position, rotationQuaternion);
    }
  }, {
    key: "applyTransform",
    value: function applyTransform(transform) {
      this.position = transform(this.position);
    }
  }], [{
    key: "fromPosition",
    value: function fromPosition(position) {
      var vertex = new Vertex(position);
      return vertex;
    }
  }, {
    key: "fromCoordinateTuple",
    value: function fromCoordinateTuple(coordinateTuple) {
      var position = coordinateTuple.slice(),
          ///
      vertex = new Vertex(position);
      return vertex;
    }
  }]);

  return Vertex;
}();

module.exports = Vertex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlcnRleC5qcyJdLCJuYW1lcyI6WyJyb3RhdGlvblV0aWxpdGllcyIsInJlcXVpcmUiLCJyb3RhdGVQb3NpdGlvbiIsIlZlcnRleCIsInBvc2l0aW9uIiwic2xpY2UiLCJ2ZXJ0ZXgiLCJyb3RhdGlvblF1YXRlcm5pb24iLCJ0cmFuc2Zvcm0iLCJjb29yZGluYXRlVHVwbGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFQSxJQUFNQSxpQkFBaUIsR0FBR0MsT0FBTyxDQUFDLHVCQUFELENBQWpDOztJQUVRQyxjLEdBQW1CRixpQixDQUFuQkUsYzs7SUFFRkMsTTtBQUNKLGtCQUFZQyxRQUFaLEVBQXNCO0FBQUE7O0FBQ3BCLFNBQUtBLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0Q7Ozs7a0NBRWE7QUFDWixhQUFPLEtBQUtBLFFBQVo7QUFDRDs7OzRCQUVPO0FBQ04sVUFBTUEsUUFBUSxHQUFHLEtBQUtBLFFBQUwsQ0FBY0MsS0FBZCxFQUFqQjtBQUFBLFVBQXdDO0FBQ2xDQyxNQUFBQSxNQUFNLEdBQUcsSUFBSUgsTUFBSixDQUFXQyxRQUFYLENBRGY7QUFHQSxhQUFPRSxNQUFQO0FBQ0Q7OzsyQkFFTUMsa0IsRUFBb0I7QUFDekIsV0FBS0gsUUFBTCxHQUFnQkYsY0FBYyxDQUFDLEtBQUtFLFFBQU4sRUFBZ0JHLGtCQUFoQixDQUE5QjtBQUNEOzs7bUNBRWNDLFMsRUFBVztBQUN4QixXQUFLSixRQUFMLEdBQWdCSSxTQUFTLENBQUMsS0FBS0osUUFBTixDQUF6QjtBQUNEOzs7aUNBRW1CQSxRLEVBQVU7QUFDNUIsVUFBTUUsTUFBTSxHQUFHLElBQUlILE1BQUosQ0FBV0MsUUFBWCxDQUFmO0FBRUEsYUFBT0UsTUFBUDtBQUNEOzs7d0NBRTBCRyxlLEVBQWlCO0FBQzFDLFVBQU1MLFFBQVEsR0FBR0ssZUFBZSxDQUFDSixLQUFoQixFQUFqQjtBQUFBLFVBQTBDO0FBQ3BDQyxNQUFBQSxNQUFNLEdBQUcsSUFBSUgsTUFBSixDQUFXQyxRQUFYLENBRGY7QUFHQSxhQUFPRSxNQUFQO0FBQ0Q7Ozs7OztBQUdISSxNQUFNLENBQUNDLE9BQVAsR0FBaUJSLE1BQWpCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IHJvdGF0aW9uVXRpbGl0aWVzID0gcmVxdWlyZShcIi4uL3V0aWxpdGllcy9yb3RhdGlvblwiKTtcblxuY29uc3QgeyByb3RhdGVQb3NpdGlvbiB9ID0gcm90YXRpb25VdGlsaXRpZXM7XG5cbmNsYXNzIFZlcnRleCB7XG4gIGNvbnN0cnVjdG9yKHBvc2l0aW9uKSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uO1xuICB9XG5cbiAgZ2V0UG9zaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb247XG4gIH1cblxuICBjbG9uZSgpIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IHRoaXMucG9zaXRpb24uc2xpY2UoKSwgLy8vXG4gICAgICAgICAgdmVydGV4ID0gbmV3IFZlcnRleChwb3NpdGlvbik7XG5cbiAgICByZXR1cm4gdmVydGV4O1xuICB9XG5cbiAgcm90YXRlKHJvdGF0aW9uUXVhdGVybmlvbikge1xuICAgIHRoaXMucG9zaXRpb24gPSByb3RhdGVQb3NpdGlvbih0aGlzLnBvc2l0aW9uLCByb3RhdGlvblF1YXRlcm5pb24pO1xuICB9XG5cbiAgYXBwbHlUcmFuc2Zvcm0odHJhbnNmb3JtKSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHRyYW5zZm9ybSh0aGlzLnBvc2l0aW9uKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUG9zaXRpb24ocG9zaXRpb24pIHtcbiAgICBjb25zdCB2ZXJ0ZXggPSBuZXcgVmVydGV4KHBvc2l0aW9uKTtcbiAgICBcbiAgICByZXR1cm4gdmVydGV4O1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbUNvb3JkaW5hdGVUdXBsZShjb29yZGluYXRlVHVwbGUpIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IGNvb3JkaW5hdGVUdXBsZS5zbGljZSgpLCAvLy9cbiAgICAgICAgICB2ZXJ0ZXggPSBuZXcgVmVydGV4KHBvc2l0aW9uKTtcblxuICAgIHJldHVybiB2ZXJ0ZXg7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBWZXJ0ZXg7XG4iXX0=
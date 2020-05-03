"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _rotation = require("../utilities/rotation");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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
      this.position = (0, _rotation.rotatePosition)(this.position, rotationQuaternion);
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

exports["default"] = Vertex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlcnRleC5qcyJdLCJuYW1lcyI6WyJWZXJ0ZXgiLCJwb3NpdGlvbiIsInNsaWNlIiwidmVydGV4Iiwicm90YXRpb25RdWF0ZXJuaW9uIiwidHJhbnNmb3JtIiwiY29vcmRpbmF0ZVR1cGxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOzs7Ozs7OztJQUVxQkEsTTtBQUNuQixrQkFBWUMsUUFBWixFQUFzQjtBQUFBOztBQUNwQixTQUFLQSxRQUFMLEdBQWdCQSxRQUFoQjtBQUNEOzs7O2tDQUVhO0FBQ1osYUFBTyxLQUFLQSxRQUFaO0FBQ0Q7Ozs0QkFFTztBQUNOLFVBQU1BLFFBQVEsR0FBRyxLQUFLQSxRQUFMLENBQWNDLEtBQWQsRUFBakI7QUFBQSxVQUF3QztBQUNsQ0MsTUFBQUEsTUFBTSxHQUFHLElBQUlILE1BQUosQ0FBV0MsUUFBWCxDQURmO0FBR0EsYUFBT0UsTUFBUDtBQUNEOzs7MkJBRU1DLGtCLEVBQW9CO0FBQ3pCLFdBQUtILFFBQUwsR0FBZ0IsOEJBQWUsS0FBS0EsUUFBcEIsRUFBOEJHLGtCQUE5QixDQUFoQjtBQUNEOzs7bUNBRWNDLFMsRUFBVztBQUN4QixXQUFLSixRQUFMLEdBQWdCSSxTQUFTLENBQUMsS0FBS0osUUFBTixDQUF6QjtBQUNEOzs7aUNBRW1CQSxRLEVBQVU7QUFDNUIsVUFBTUUsTUFBTSxHQUFHLElBQUlILE1BQUosQ0FBV0MsUUFBWCxDQUFmO0FBRUEsYUFBT0UsTUFBUDtBQUNEOzs7d0NBRTBCRyxlLEVBQWlCO0FBQzFDLFVBQU1MLFFBQVEsR0FBR0ssZUFBZSxDQUFDSixLQUFoQixFQUFqQjtBQUFBLFVBQTBDO0FBQ3BDQyxNQUFBQSxNQUFNLEdBQUcsSUFBSUgsTUFBSixDQUFXQyxRQUFYLENBRGY7QUFHQSxhQUFPRSxNQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgcm90YXRlUG9zaXRpb24gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3JvdGF0aW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZlcnRleCB7XG4gIGNvbnN0cnVjdG9yKHBvc2l0aW9uKSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uO1xuICB9XG5cbiAgZ2V0UG9zaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb247XG4gIH1cblxuICBjbG9uZSgpIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IHRoaXMucG9zaXRpb24uc2xpY2UoKSwgLy8vXG4gICAgICAgICAgdmVydGV4ID0gbmV3IFZlcnRleChwb3NpdGlvbik7XG5cbiAgICByZXR1cm4gdmVydGV4O1xuICB9XG5cbiAgcm90YXRlKHJvdGF0aW9uUXVhdGVybmlvbikge1xuICAgIHRoaXMucG9zaXRpb24gPSByb3RhdGVQb3NpdGlvbih0aGlzLnBvc2l0aW9uLCByb3RhdGlvblF1YXRlcm5pb24pO1xuICB9XG5cbiAgYXBwbHlUcmFuc2Zvcm0odHJhbnNmb3JtKSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHRyYW5zZm9ybSh0aGlzLnBvc2l0aW9uKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUG9zaXRpb24ocG9zaXRpb24pIHtcbiAgICBjb25zdCB2ZXJ0ZXggPSBuZXcgVmVydGV4KHBvc2l0aW9uKTtcbiAgICBcbiAgICByZXR1cm4gdmVydGV4O1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbUNvb3JkaW5hdGVUdXBsZShjb29yZGluYXRlVHVwbGUpIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IGNvb3JkaW5hdGVUdXBsZS5zbGljZSgpLCAvLy9cbiAgICAgICAgICB2ZXJ0ZXggPSBuZXcgVmVydGV4KHBvc2l0aW9uKTtcblxuICAgIHJldHVybiB2ZXJ0ZXg7XG4gIH1cbn1cbiJdfQ==
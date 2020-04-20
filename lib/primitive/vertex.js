"use strict";

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

module.exports = Vertex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlcnRleC5qcyJdLCJuYW1lcyI6WyJWZXJ0ZXgiLCJwb3NpdGlvbiIsInNsaWNlIiwidmVydGV4Iiwicm90YXRpb25RdWF0ZXJuaW9uIiwidHJhbnNmb3JtIiwiY29vcmRpbmF0ZVR1cGxlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7O0lBRU1BLE07QUFDSixrQkFBWUMsUUFBWixFQUFzQjtBQUFBOztBQUNwQixTQUFLQSxRQUFMLEdBQWdCQSxRQUFoQjtBQUNEOzs7O2tDQUVhO0FBQ1osYUFBTyxLQUFLQSxRQUFaO0FBQ0Q7Ozs0QkFFTztBQUNOLFVBQU1BLFFBQVEsR0FBRyxLQUFLQSxRQUFMLENBQWNDLEtBQWQsRUFBakI7QUFBQSxVQUF3QztBQUNsQ0MsTUFBQUEsTUFBTSxHQUFHLElBQUlILE1BQUosQ0FBV0MsUUFBWCxDQURmO0FBR0EsYUFBT0UsTUFBUDtBQUNEOzs7MkJBRU1DLGtCLEVBQW9CO0FBQ3pCLFdBQUtILFFBQUwsR0FBZ0IsOEJBQWUsS0FBS0EsUUFBcEIsRUFBOEJHLGtCQUE5QixDQUFoQjtBQUNEOzs7bUNBRWNDLFMsRUFBVztBQUN4QixXQUFLSixRQUFMLEdBQWdCSSxTQUFTLENBQUMsS0FBS0osUUFBTixDQUF6QjtBQUNEOzs7aUNBRW1CQSxRLEVBQVU7QUFDNUIsVUFBTUUsTUFBTSxHQUFHLElBQUlILE1BQUosQ0FBV0MsUUFBWCxDQUFmO0FBRUEsYUFBT0UsTUFBUDtBQUNEOzs7d0NBRTBCRyxlLEVBQWlCO0FBQzFDLFVBQU1MLFFBQVEsR0FBR0ssZUFBZSxDQUFDSixLQUFoQixFQUFqQjtBQUFBLFVBQTBDO0FBQ3BDQyxNQUFBQSxNQUFNLEdBQUcsSUFBSUgsTUFBSixDQUFXQyxRQUFYLENBRGY7QUFHQSxhQUFPRSxNQUFQO0FBQ0Q7Ozs7OztBQUdISSxNQUFNLENBQUNDLE9BQVAsR0FBaUJSLE1BQWpCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHJvdGF0ZVBvc2l0aW9uIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9yb3RhdGlvblwiO1xuXG5jbGFzcyBWZXJ0ZXgge1xuICBjb25zdHJ1Y3Rvcihwb3NpdGlvbikge1xuICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgfVxuXG4gIGdldFBvc2l0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uO1xuICB9XG5cbiAgY2xvbmUoKSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSB0aGlzLnBvc2l0aW9uLnNsaWNlKCksIC8vL1xuICAgICAgICAgIHZlcnRleCA9IG5ldyBWZXJ0ZXgocG9zaXRpb24pO1xuXG4gICAgcmV0dXJuIHZlcnRleDtcbiAgfVxuXG4gIHJvdGF0ZShyb3RhdGlvblF1YXRlcm5pb24pIHtcbiAgICB0aGlzLnBvc2l0aW9uID0gcm90YXRlUG9zaXRpb24odGhpcy5wb3NpdGlvbiwgcm90YXRpb25RdWF0ZXJuaW9uKTtcbiAgfVxuXG4gIGFwcGx5VHJhbnNmb3JtKHRyYW5zZm9ybSkge1xuICAgIHRoaXMucG9zaXRpb24gPSB0cmFuc2Zvcm0odGhpcy5wb3NpdGlvbik7XG4gIH1cblxuICBzdGF0aWMgZnJvbVBvc2l0aW9uKHBvc2l0aW9uKSB7XG4gICAgY29uc3QgdmVydGV4ID0gbmV3IFZlcnRleChwb3NpdGlvbik7XG4gICAgXG4gICAgcmV0dXJuIHZlcnRleDtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21Db29yZGluYXRlVHVwbGUoY29vcmRpbmF0ZVR1cGxlKSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSBjb29yZGluYXRlVHVwbGUuc2xpY2UoKSwgLy8vXG4gICAgICAgICAgdmVydGV4ID0gbmV3IFZlcnRleChwb3NpdGlvbik7XG5cbiAgICByZXR1cm4gdmVydGV4O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVmVydGV4O1xuIl19
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var rotationUtilities = require('./utilities/rotation');

var rotatePosition = rotationUtilities.rotatePosition;

var Vertex = function () {
  function Vertex(position) {
    _classCallCheck(this, Vertex);

    this.position = position;
  }

  _createClass(Vertex, [{
    key: 'clone',
    value: function clone() {
      var position = this.position.slice(),
          ///
      vertex = new Vertex(position);

      return vertex;
    }
  }, {
    key: 'getPosition',
    value: function getPosition() {
      return this.position;
    }
  }, {
    key: 'rotate',
    value: function rotate(rotationQuaternion) {
      this.position = rotatePosition(this.position, rotationQuaternion);
    }
  }, {
    key: 'applyTransforms',
    value: function applyTransforms(transforms) {
      var _this = this;

      transforms.forEach(function (transform) {
        _this.position = transform(_this.position);
      });
    }
  }], [{
    key: 'fromPosition',
    value: function fromPosition(position) {
      var vertex = new Vertex(position);

      return vertex;
    }
  }, {
    key: 'fromCoordinateTuple',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi92ZXJ0ZXguanMiXSwibmFtZXMiOlsicm90YXRpb25VdGlsaXRpZXMiLCJyZXF1aXJlIiwicm90YXRlUG9zaXRpb24iLCJWZXJ0ZXgiLCJwb3NpdGlvbiIsInNsaWNlIiwidmVydGV4Iiwicm90YXRpb25RdWF0ZXJuaW9uIiwidHJhbnNmb3JtcyIsImZvckVhY2giLCJ0cmFuc2Zvcm0iLCJjb29yZGluYXRlVHVwbGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsb0JBQW9CQyxRQUFRLHNCQUFSLENBQTFCOztJQUVRQyxjLEdBQW1CRixpQixDQUFuQkUsYzs7SUFFRkMsTTtBQUNKLGtCQUFZQyxRQUFaLEVBQXNCO0FBQUE7O0FBQ3BCLFNBQUtBLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0Q7Ozs7NEJBRU87QUFDTixVQUFNQSxXQUFXLEtBQUtBLFFBQUwsQ0FBY0MsS0FBZCxFQUFqQjtBQUFBLFVBQXdDO0FBQ2xDQyxlQUFTLElBQUlILE1BQUosQ0FBV0MsUUFBWCxDQURmOztBQUdBLGFBQU9FLE1BQVA7QUFDRDs7O2tDQUVhO0FBQ1osYUFBTyxLQUFLRixRQUFaO0FBQ0Q7OzsyQkFFTUcsa0IsRUFBb0I7QUFDekIsV0FBS0gsUUFBTCxHQUFnQkYsZUFBZSxLQUFLRSxRQUFwQixFQUE4Qkcsa0JBQTlCLENBQWhCO0FBQ0Q7OztvQ0FFZUMsVSxFQUFZO0FBQUE7O0FBQzFCQSxpQkFBV0MsT0FBWCxDQUFtQixVQUFDQyxTQUFELEVBQWU7QUFDaEMsY0FBS04sUUFBTCxHQUFnQk0sVUFBVSxNQUFLTixRQUFmLENBQWhCO0FBQ0QsT0FGRDtBQUdEOzs7aUNBRW1CQSxRLEVBQVU7QUFDNUIsVUFBTUUsU0FBUyxJQUFJSCxNQUFKLENBQVdDLFFBQVgsQ0FBZjs7QUFFQSxhQUFPRSxNQUFQO0FBQ0Q7Ozt3Q0FFMEJLLGUsRUFBaUI7QUFDMUMsVUFBTVAsV0FBV08sZ0JBQWdCTixLQUFoQixFQUFqQjtBQUFBLFVBQTBDO0FBQ3BDQyxlQUFTLElBQUlILE1BQUosQ0FBV0MsUUFBWCxDQURmOztBQUdBLGFBQU9FLE1BQVA7QUFDRDs7Ozs7O0FBR0hNLE9BQU9DLE9BQVAsR0FBaUJWLE1BQWpCIiwiZmlsZSI6InZlcnRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3Qgcm90YXRpb25VdGlsaXRpZXMgPSByZXF1aXJlKCcuL3V0aWxpdGllcy9yb3RhdGlvbicpO1xuXG5jb25zdCB7IHJvdGF0ZVBvc2l0aW9uIH0gPSByb3RhdGlvblV0aWxpdGllcztcblxuY2xhc3MgVmVydGV4IHtcbiAgY29uc3RydWN0b3IocG9zaXRpb24pIHtcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XG4gIH1cblxuICBjbG9uZSgpIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IHRoaXMucG9zaXRpb24uc2xpY2UoKSwgLy8vXG4gICAgICAgICAgdmVydGV4ID0gbmV3IFZlcnRleChwb3NpdGlvbik7XG5cbiAgICByZXR1cm4gdmVydGV4O1xuICB9XG5cbiAgZ2V0UG9zaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb247XG4gIH1cblxuICByb3RhdGUocm90YXRpb25RdWF0ZXJuaW9uKSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHJvdGF0ZVBvc2l0aW9uKHRoaXMucG9zaXRpb24sIHJvdGF0aW9uUXVhdGVybmlvbik7XG4gIH1cblxuICBhcHBseVRyYW5zZm9ybXModHJhbnNmb3Jtcykge1xuICAgIHRyYW5zZm9ybXMuZm9yRWFjaCgodHJhbnNmb3JtKSA9PiB7XG4gICAgICB0aGlzLnBvc2l0aW9uID0gdHJhbnNmb3JtKHRoaXMucG9zaXRpb24pO1xuICAgIH0pO1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbVBvc2l0aW9uKHBvc2l0aW9uKSB7XG4gICAgY29uc3QgdmVydGV4ID0gbmV3IFZlcnRleChwb3NpdGlvbik7XG4gICAgXG4gICAgcmV0dXJuIHZlcnRleDtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21Db29yZGluYXRlVHVwbGUoY29vcmRpbmF0ZVR1cGxlKSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSBjb29yZGluYXRlVHVwbGUuc2xpY2UoKSwgLy8vXG4gICAgICAgICAgdmVydGV4ID0gbmV3IFZlcnRleChwb3NpdGlvbik7XG5cbiAgICByZXR1cm4gdmVydGV4O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVmVydGV4O1xuIl19
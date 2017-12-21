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
      var position = clonePosition(this.position),
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
      transforms.forEach(function (transform) {
        this.position = transform(this.position);
      }.bind(this));
    }
  }], [{
    key: 'fromPosition',
    value: function fromPosition(position) {
      var vertex = new Vertex(position);

      return vertex;
    }
  }, {
    key: 'fromCoordinates',
    value: function fromCoordinates(coordinates) {
      var position = positionFromCoordinates(coordinates),
          vertex = new Vertex(position);

      return vertex;
    }
  }]);

  return Vertex;
}();

module.exports = Vertex;

function clonePosition(position) {
  return position.slice();
} ///

function positionFromCoordinates(coordinates) {
  var position = coordinates.slice(); ///

  return position;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi92ZXJ0ZXguanMiXSwibmFtZXMiOlsicm90YXRpb25VdGlsaXRpZXMiLCJyZXF1aXJlIiwicm90YXRlUG9zaXRpb24iLCJWZXJ0ZXgiLCJwb3NpdGlvbiIsImNsb25lUG9zaXRpb24iLCJ2ZXJ0ZXgiLCJyb3RhdGlvblF1YXRlcm5pb24iLCJ0cmFuc2Zvcm1zIiwiZm9yRWFjaCIsInRyYW5zZm9ybSIsImJpbmQiLCJjb29yZGluYXRlcyIsInBvc2l0aW9uRnJvbUNvb3JkaW5hdGVzIiwibW9kdWxlIiwiZXhwb3J0cyIsInNsaWNlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsb0JBQW9CQyxRQUFRLHNCQUFSLENBQTFCOztJQUVRQyxjLEdBQW1CRixpQixDQUFuQkUsYzs7SUFFRkMsTTtBQUNKLGtCQUFZQyxRQUFaLEVBQXNCO0FBQUE7O0FBQ3BCLFNBQUtBLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0Q7Ozs7NEJBRU87QUFDTixVQUFNQSxXQUFXQyxjQUFjLEtBQUtELFFBQW5CLENBQWpCO0FBQUEsVUFDTUUsU0FBUyxJQUFJSCxNQUFKLENBQVdDLFFBQVgsQ0FEZjs7QUFHQSxhQUFPRSxNQUFQO0FBQ0Q7OztrQ0FFYTtBQUNaLGFBQU8sS0FBS0YsUUFBWjtBQUNEOzs7MkJBRU1HLGtCLEVBQW9CO0FBQ3pCLFdBQUtILFFBQUwsR0FBZ0JGLGVBQWUsS0FBS0UsUUFBcEIsRUFBOEJHLGtCQUE5QixDQUFoQjtBQUNEOzs7b0NBRWVDLFUsRUFBWTtBQUMxQkEsaUJBQVdDLE9BQVgsQ0FBbUIsVUFBU0MsU0FBVCxFQUFvQjtBQUNyQyxhQUFLTixRQUFMLEdBQWdCTSxVQUFVLEtBQUtOLFFBQWYsQ0FBaEI7QUFDRCxPQUZrQixDQUVqQk8sSUFGaUIsQ0FFWixJQUZZLENBQW5CO0FBR0Q7OztpQ0FFbUJQLFEsRUFBVTtBQUM1QixVQUFNRSxTQUFTLElBQUlILE1BQUosQ0FBV0MsUUFBWCxDQUFmOztBQUVBLGFBQU9FLE1BQVA7QUFDRDs7O29DQUVzQk0sVyxFQUFhO0FBQ2xDLFVBQU1SLFdBQVdTLHdCQUF3QkQsV0FBeEIsQ0FBakI7QUFBQSxVQUNNTixTQUFTLElBQUlILE1BQUosQ0FBV0MsUUFBWCxDQURmOztBQUdBLGFBQU9FLE1BQVA7QUFDRDs7Ozs7O0FBR0hRLE9BQU9DLE9BQVAsR0FBaUJaLE1BQWpCOztBQUVBLFNBQVNFLGFBQVQsQ0FBdUJELFFBQXZCLEVBQWlDO0FBQUUsU0FBT0EsU0FBU1ksS0FBVCxFQUFQO0FBQTBCLEMsQ0FBQzs7QUFFOUQsU0FBU0gsdUJBQVQsQ0FBaUNELFdBQWpDLEVBQThDO0FBQzVDLE1BQU1SLFdBQVdRLFlBQVlJLEtBQVosRUFBakIsQ0FENEMsQ0FDTjs7QUFFdEMsU0FBT1osUUFBUDtBQUNEIiwiZmlsZSI6InZlcnRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3Qgcm90YXRpb25VdGlsaXRpZXMgPSByZXF1aXJlKCcuL3V0aWxpdGllcy9yb3RhdGlvbicpO1xuXG5jb25zdCB7IHJvdGF0ZVBvc2l0aW9uIH0gPSByb3RhdGlvblV0aWxpdGllcztcblxuY2xhc3MgVmVydGV4IHtcbiAgY29uc3RydWN0b3IocG9zaXRpb24pIHtcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XG4gIH1cblxuICBjbG9uZSgpIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IGNsb25lUG9zaXRpb24odGhpcy5wb3NpdGlvbiksXG4gICAgICAgICAgdmVydGV4ID0gbmV3IFZlcnRleChwb3NpdGlvbik7XG5cbiAgICByZXR1cm4gdmVydGV4O1xuICB9XG5cbiAgZ2V0UG9zaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb247XG4gIH1cblxuICByb3RhdGUocm90YXRpb25RdWF0ZXJuaW9uKSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHJvdGF0ZVBvc2l0aW9uKHRoaXMucG9zaXRpb24sIHJvdGF0aW9uUXVhdGVybmlvbik7XG4gIH1cblxuICBhcHBseVRyYW5zZm9ybXModHJhbnNmb3Jtcykge1xuICAgIHRyYW5zZm9ybXMuZm9yRWFjaChmdW5jdGlvbih0cmFuc2Zvcm0pIHtcbiAgICAgIHRoaXMucG9zaXRpb24gPSB0cmFuc2Zvcm0odGhpcy5wb3NpdGlvbik7XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21Qb3NpdGlvbihwb3NpdGlvbikge1xuICAgIGNvbnN0IHZlcnRleCA9IG5ldyBWZXJ0ZXgocG9zaXRpb24pO1xuICAgIFxuICAgIHJldHVybiB2ZXJ0ZXg7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tQ29vcmRpbmF0ZXMoY29vcmRpbmF0ZXMpIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IHBvc2l0aW9uRnJvbUNvb3JkaW5hdGVzKGNvb3JkaW5hdGVzKSxcbiAgICAgICAgICB2ZXJ0ZXggPSBuZXcgVmVydGV4KHBvc2l0aW9uKTtcblxuICAgIHJldHVybiB2ZXJ0ZXg7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBWZXJ0ZXg7XG5cbmZ1bmN0aW9uIGNsb25lUG9zaXRpb24ocG9zaXRpb24pIHsgcmV0dXJuIHBvc2l0aW9uLnNsaWNlKCk7IH0gLy8vXG5cbmZ1bmN0aW9uIHBvc2l0aW9uRnJvbUNvb3JkaW5hdGVzKGNvb3JkaW5hdGVzKSB7XG4gIGNvbnN0IHBvc2l0aW9uID0gY29vcmRpbmF0ZXMuc2xpY2UoKTsgLy8vXG4gIFxuICByZXR1cm4gcG9zaXRpb247XG59XG4iXX0=
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var rotationUtilities = require('./utilities/rotation');

var rotatePosition = rotationUtilities.rotatePosition,
    rotatePositionAboutZAxis = rotationUtilities.rotatePositionAboutZAxis;

var Vertex = function () {
  function Vertex(position) {
    _classCallCheck(this, Vertex);

    this.position = position;
  }

  _createClass(Vertex, [{
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
    key: 'rotateAboutZAxis',
    value: function rotateAboutZAxis(rotationAboutZAxisMatrix) {
      this.position = rotatePositionAboutZAxis(this.position, rotationAboutZAxisMatrix);
    }
  }, {
    key: 'applyTransform',
    value: function applyTransform(transform) {
      this.position = transform(this.position);
    }
  }, {
    key: 'clone',
    value: function clone() {
      var position = clonePosition(this.position),
          vertex = new Vertex(position);

      return vertex;
    }
  }], [{
    key: 'fromCoordinates',
    value: function fromCoordinates(coordinates) {
      var position = coordinates.slice(),
          ///
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi92ZXJ0ZXguanMiXSwibmFtZXMiOlsicm90YXRpb25VdGlsaXRpZXMiLCJyZXF1aXJlIiwicm90YXRlUG9zaXRpb24iLCJyb3RhdGVQb3NpdGlvbkFib3V0WkF4aXMiLCJWZXJ0ZXgiLCJwb3NpdGlvbiIsInJvdGF0aW9uUXVhdGVybmlvbiIsInJvdGF0aW9uQWJvdXRaQXhpc01hdHJpeCIsInRyYW5zZm9ybSIsImNsb25lUG9zaXRpb24iLCJ2ZXJ0ZXgiLCJjb29yZGluYXRlcyIsInNsaWNlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLG9CQUFvQkMsUUFBUSxzQkFBUixDQUExQjs7SUFFUUMsYyxHQUE2Q0YsaUIsQ0FBN0NFLGM7SUFBZ0JDLHdCLEdBQTZCSCxpQixDQUE3Qkcsd0I7O0lBRWxCQyxNO0FBQ0osa0JBQVlDLFFBQVosRUFBc0I7QUFBQTs7QUFDcEIsU0FBS0EsUUFBTCxHQUFnQkEsUUFBaEI7QUFDRDs7OztrQ0FFYTtBQUNaLGFBQU8sS0FBS0EsUUFBWjtBQUNEOzs7MkJBRU1DLGtCLEVBQW9CO0FBQ3pCLFdBQUtELFFBQUwsR0FBZ0JILGVBQWUsS0FBS0csUUFBcEIsRUFBOEJDLGtCQUE5QixDQUFoQjtBQUNEOzs7cUNBRWdCQyx3QixFQUEwQjtBQUN6QyxXQUFLRixRQUFMLEdBQWdCRix5QkFBeUIsS0FBS0UsUUFBOUIsRUFBd0NFLHdCQUF4QyxDQUFoQjtBQUNEOzs7bUNBRWNDLFMsRUFBVztBQUN4QixXQUFLSCxRQUFMLEdBQWdCRyxVQUFVLEtBQUtILFFBQWYsQ0FBaEI7QUFDRDs7OzRCQUVPO0FBQ04sVUFBTUEsV0FBV0ksY0FBYyxLQUFLSixRQUFuQixDQUFqQjtBQUFBLFVBQ01LLFNBQVMsSUFBSU4sTUFBSixDQUFXQyxRQUFYLENBRGY7O0FBR0EsYUFBT0ssTUFBUDtBQUNEOzs7b0NBRXNCQyxXLEVBQWE7QUFDbEMsVUFBTU4sV0FBV00sWUFBWUMsS0FBWixFQUFqQjtBQUFBLFVBQXNDO0FBQ2hDRixlQUFTLElBQUlOLE1BQUosQ0FBV0MsUUFBWCxDQURmOztBQUdBLGFBQU9LLE1BQVA7QUFDRDs7Ozs7O0FBR0hHLE9BQU9DLE9BQVAsR0FBaUJWLE1BQWpCOztBQUVBLFNBQVNLLGFBQVQsQ0FBdUJKLFFBQXZCLEVBQWlDO0FBQUUsU0FBT0EsU0FBU08sS0FBVCxFQUFQO0FBQTBCLEMsQ0FBQyIsImZpbGUiOiJ2ZXJ0ZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHJvdGF0aW9uVXRpbGl0aWVzID0gcmVxdWlyZSgnLi91dGlsaXRpZXMvcm90YXRpb24nKTtcblxuY29uc3QgeyByb3RhdGVQb3NpdGlvbiwgcm90YXRlUG9zaXRpb25BYm91dFpBeGlzIH0gPSByb3RhdGlvblV0aWxpdGllcztcblxuY2xhc3MgVmVydGV4IHtcbiAgY29uc3RydWN0b3IocG9zaXRpb24pIHtcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XG4gIH1cblxuICBnZXRQb3NpdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbjtcbiAgfVxuXG4gIHJvdGF0ZShyb3RhdGlvblF1YXRlcm5pb24pIHtcbiAgICB0aGlzLnBvc2l0aW9uID0gcm90YXRlUG9zaXRpb24odGhpcy5wb3NpdGlvbiwgcm90YXRpb25RdWF0ZXJuaW9uKTtcbiAgfVxuXG4gIHJvdGF0ZUFib3V0WkF4aXMocm90YXRpb25BYm91dFpBeGlzTWF0cml4KSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHJvdGF0ZVBvc2l0aW9uQWJvdXRaQXhpcyh0aGlzLnBvc2l0aW9uLCByb3RhdGlvbkFib3V0WkF4aXNNYXRyaXgpO1xuICB9XG4gIFxuICBhcHBseVRyYW5zZm9ybSh0cmFuc2Zvcm0pIHtcbiAgICB0aGlzLnBvc2l0aW9uID0gdHJhbnNmb3JtKHRoaXMucG9zaXRpb24pO1xuICB9XG5cbiAgY2xvbmUoKSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSBjbG9uZVBvc2l0aW9uKHRoaXMucG9zaXRpb24pLFxuICAgICAgICAgIHZlcnRleCA9IG5ldyBWZXJ0ZXgocG9zaXRpb24pO1xuICAgIFxuICAgIHJldHVybiB2ZXJ0ZXg7XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvb3JkaW5hdGVzKGNvb3JkaW5hdGVzKSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSBjb29yZGluYXRlcy5zbGljZSgpLCAvLy9cbiAgICAgICAgICB2ZXJ0ZXggPSBuZXcgVmVydGV4KHBvc2l0aW9uKTtcblxuICAgIHJldHVybiB2ZXJ0ZXg7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBWZXJ0ZXg7XG5cbmZ1bmN0aW9uIGNsb25lUG9zaXRpb24ocG9zaXRpb24pIHsgcmV0dXJuIHBvc2l0aW9uLnNsaWNlKCk7IH0gLy8vXG4iXX0=
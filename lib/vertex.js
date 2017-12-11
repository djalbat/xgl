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
    key: 'rotateAboutZAxis',
    value: function rotateAboutZAxis(rotationAboutZAxisMatrix) {
      this.position = rotatePositionAboutZAxis(this.position, rotationAboutZAxisMatrix);
    }
  }, {
    key: 'applyTransform',
    value: function applyTransform(transform) {
      this.position = transform(this.position);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi92ZXJ0ZXguanMiXSwibmFtZXMiOlsicm90YXRpb25VdGlsaXRpZXMiLCJyZXF1aXJlIiwicm90YXRlUG9zaXRpb24iLCJyb3RhdGVQb3NpdGlvbkFib3V0WkF4aXMiLCJWZXJ0ZXgiLCJwb3NpdGlvbiIsImNsb25lUG9zaXRpb24iLCJ2ZXJ0ZXgiLCJyb3RhdGlvblF1YXRlcm5pb24iLCJyb3RhdGlvbkFib3V0WkF4aXNNYXRyaXgiLCJ0cmFuc2Zvcm0iLCJjb29yZGluYXRlcyIsInNsaWNlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLG9CQUFvQkMsUUFBUSxzQkFBUixDQUExQjs7SUFFUUMsYyxHQUE2Q0YsaUIsQ0FBN0NFLGM7SUFBZ0JDLHdCLEdBQTZCSCxpQixDQUE3Qkcsd0I7O0lBRWxCQyxNO0FBQ0osa0JBQVlDLFFBQVosRUFBc0I7QUFBQTs7QUFDcEIsU0FBS0EsUUFBTCxHQUFnQkEsUUFBaEI7QUFDRDs7Ozs0QkFFTztBQUNOLFVBQU1BLFdBQVdDLGNBQWMsS0FBS0QsUUFBbkIsQ0FBakI7QUFBQSxVQUNNRSxTQUFTLElBQUlILE1BQUosQ0FBV0MsUUFBWCxDQURmOztBQUdBLGFBQU9FLE1BQVA7QUFDRDs7O2tDQUVhO0FBQ1osYUFBTyxLQUFLRixRQUFaO0FBQ0Q7OzsyQkFFTUcsa0IsRUFBb0I7QUFDekIsV0FBS0gsUUFBTCxHQUFnQkgsZUFBZSxLQUFLRyxRQUFwQixFQUE4Qkcsa0JBQTlCLENBQWhCO0FBQ0Q7OztxQ0FFZ0JDLHdCLEVBQTBCO0FBQ3pDLFdBQUtKLFFBQUwsR0FBZ0JGLHlCQUF5QixLQUFLRSxRQUE5QixFQUF3Q0ksd0JBQXhDLENBQWhCO0FBQ0Q7OzttQ0FFY0MsUyxFQUFXO0FBQ3hCLFdBQUtMLFFBQUwsR0FBZ0JLLFVBQVUsS0FBS0wsUUFBZixDQUFoQjtBQUNEOzs7b0NBRXNCTSxXLEVBQWE7QUFDbEMsVUFBTU4sV0FBV00sWUFBWUMsS0FBWixFQUFqQjtBQUFBLFVBQXNDO0FBQ2hDTCxlQUFTLElBQUlILE1BQUosQ0FBV0MsUUFBWCxDQURmOztBQUdBLGFBQU9FLE1BQVA7QUFDRDs7Ozs7O0FBR0hNLE9BQU9DLE9BQVAsR0FBaUJWLE1BQWpCOztBQUVBLFNBQVNFLGFBQVQsQ0FBdUJELFFBQXZCLEVBQWlDO0FBQUUsU0FBT0EsU0FBU08sS0FBVCxFQUFQO0FBQTBCLEMsQ0FBQyIsImZpbGUiOiJ2ZXJ0ZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHJvdGF0aW9uVXRpbGl0aWVzID0gcmVxdWlyZSgnLi91dGlsaXRpZXMvcm90YXRpb24nKTtcblxuY29uc3QgeyByb3RhdGVQb3NpdGlvbiwgcm90YXRlUG9zaXRpb25BYm91dFpBeGlzIH0gPSByb3RhdGlvblV0aWxpdGllcztcblxuY2xhc3MgVmVydGV4IHtcbiAgY29uc3RydWN0b3IocG9zaXRpb24pIHtcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XG4gIH1cblxuICBjbG9uZSgpIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IGNsb25lUG9zaXRpb24odGhpcy5wb3NpdGlvbiksXG4gICAgICAgICAgdmVydGV4ID0gbmV3IFZlcnRleChwb3NpdGlvbik7XG5cbiAgICByZXR1cm4gdmVydGV4O1xuICB9XG5cbiAgZ2V0UG9zaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb247XG4gIH1cblxuICByb3RhdGUocm90YXRpb25RdWF0ZXJuaW9uKSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHJvdGF0ZVBvc2l0aW9uKHRoaXMucG9zaXRpb24sIHJvdGF0aW9uUXVhdGVybmlvbik7XG4gIH1cblxuICByb3RhdGVBYm91dFpBeGlzKHJvdGF0aW9uQWJvdXRaQXhpc01hdHJpeCkge1xuICAgIHRoaXMucG9zaXRpb24gPSByb3RhdGVQb3NpdGlvbkFib3V0WkF4aXModGhpcy5wb3NpdGlvbiwgcm90YXRpb25BYm91dFpBeGlzTWF0cml4KTtcbiAgfVxuICBcbiAgYXBwbHlUcmFuc2Zvcm0odHJhbnNmb3JtKSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHRyYW5zZm9ybSh0aGlzLnBvc2l0aW9uKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29vcmRpbmF0ZXMoY29vcmRpbmF0ZXMpIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IGNvb3JkaW5hdGVzLnNsaWNlKCksIC8vL1xuICAgICAgICAgIHZlcnRleCA9IG5ldyBWZXJ0ZXgocG9zaXRpb24pO1xuXG4gICAgcmV0dXJuIHZlcnRleDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFZlcnRleDtcblxuZnVuY3Rpb24gY2xvbmVQb3NpdGlvbihwb3NpdGlvbikgeyByZXR1cm4gcG9zaXRpb24uc2xpY2UoKTsgfSAvLy9cbiJdfQ==
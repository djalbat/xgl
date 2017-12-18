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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi92ZXJ0ZXguanMiXSwibmFtZXMiOlsicm90YXRpb25VdGlsaXRpZXMiLCJyZXF1aXJlIiwicm90YXRlUG9zaXRpb24iLCJyb3RhdGVQb3NpdGlvbkFib3V0WkF4aXMiLCJWZXJ0ZXgiLCJwb3NpdGlvbiIsImNsb25lUG9zaXRpb24iLCJ2ZXJ0ZXgiLCJyb3RhdGlvblF1YXRlcm5pb24iLCJyb3RhdGlvbkFib3V0WkF4aXNNYXRyaXgiLCJ0cmFuc2Zvcm1zIiwiZm9yRWFjaCIsInRyYW5zZm9ybSIsImJpbmQiLCJjb29yZGluYXRlcyIsInBvc2l0aW9uRnJvbUNvb3JkaW5hdGVzIiwibW9kdWxlIiwiZXhwb3J0cyIsInNsaWNlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsb0JBQW9CQyxRQUFRLHNCQUFSLENBQTFCOztJQUVRQyxjLEdBQTZDRixpQixDQUE3Q0UsYztJQUFnQkMsd0IsR0FBNkJILGlCLENBQTdCRyx3Qjs7SUFFbEJDLE07QUFDSixrQkFBWUMsUUFBWixFQUFzQjtBQUFBOztBQUNwQixTQUFLQSxRQUFMLEdBQWdCQSxRQUFoQjtBQUNEOzs7OzRCQUVPO0FBQ04sVUFBTUEsV0FBV0MsY0FBYyxLQUFLRCxRQUFuQixDQUFqQjtBQUFBLFVBQ01FLFNBQVMsSUFBSUgsTUFBSixDQUFXQyxRQUFYLENBRGY7O0FBR0EsYUFBT0UsTUFBUDtBQUNEOzs7a0NBRWE7QUFDWixhQUFPLEtBQUtGLFFBQVo7QUFDRDs7OzJCQUVNRyxrQixFQUFvQjtBQUN6QixXQUFLSCxRQUFMLEdBQWdCSCxlQUFlLEtBQUtHLFFBQXBCLEVBQThCRyxrQkFBOUIsQ0FBaEI7QUFDRDs7O3FDQUVnQkMsd0IsRUFBMEI7QUFDekMsV0FBS0osUUFBTCxHQUFnQkYseUJBQXlCLEtBQUtFLFFBQTlCLEVBQXdDSSx3QkFBeEMsQ0FBaEI7QUFDRDs7O29DQUVlQyxVLEVBQVk7QUFDMUJBLGlCQUFXQyxPQUFYLENBQW1CLFVBQVNDLFNBQVQsRUFBb0I7QUFDckMsYUFBS1AsUUFBTCxHQUFnQk8sVUFBVSxLQUFLUCxRQUFmLENBQWhCO0FBQ0QsT0FGa0IsQ0FFakJRLElBRmlCLENBRVosSUFGWSxDQUFuQjtBQUdEOzs7aUNBRW1CUixRLEVBQVU7QUFDNUIsVUFBTUUsU0FBUyxJQUFJSCxNQUFKLENBQVdDLFFBQVgsQ0FBZjs7QUFFQSxhQUFPRSxNQUFQO0FBQ0Q7OztvQ0FFc0JPLFcsRUFBYTtBQUNsQyxVQUFNVCxXQUFXVSx3QkFBd0JELFdBQXhCLENBQWpCO0FBQUEsVUFDTVAsU0FBUyxJQUFJSCxNQUFKLENBQVdDLFFBQVgsQ0FEZjs7QUFHQSxhQUFPRSxNQUFQO0FBQ0Q7Ozs7OztBQUdIUyxPQUFPQyxPQUFQLEdBQWlCYixNQUFqQjs7QUFFQSxTQUFTRSxhQUFULENBQXVCRCxRQUF2QixFQUFpQztBQUFFLFNBQU9BLFNBQVNhLEtBQVQsRUFBUDtBQUEwQixDLENBQUM7O0FBRTlELFNBQVNILHVCQUFULENBQWlDRCxXQUFqQyxFQUE4QztBQUM1QyxNQUFNVCxXQUFXUyxZQUFZSSxLQUFaLEVBQWpCLENBRDRDLENBQ047O0FBRXRDLFNBQU9iLFFBQVA7QUFDRCIsImZpbGUiOiJ2ZXJ0ZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHJvdGF0aW9uVXRpbGl0aWVzID0gcmVxdWlyZSgnLi91dGlsaXRpZXMvcm90YXRpb24nKTtcblxuY29uc3QgeyByb3RhdGVQb3NpdGlvbiwgcm90YXRlUG9zaXRpb25BYm91dFpBeGlzIH0gPSByb3RhdGlvblV0aWxpdGllcztcblxuY2xhc3MgVmVydGV4IHtcbiAgY29uc3RydWN0b3IocG9zaXRpb24pIHtcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XG4gIH1cblxuICBjbG9uZSgpIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IGNsb25lUG9zaXRpb24odGhpcy5wb3NpdGlvbiksXG4gICAgICAgICAgdmVydGV4ID0gbmV3IFZlcnRleChwb3NpdGlvbik7XG5cbiAgICByZXR1cm4gdmVydGV4O1xuICB9XG5cbiAgZ2V0UG9zaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb247XG4gIH1cblxuICByb3RhdGUocm90YXRpb25RdWF0ZXJuaW9uKSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHJvdGF0ZVBvc2l0aW9uKHRoaXMucG9zaXRpb24sIHJvdGF0aW9uUXVhdGVybmlvbik7XG4gIH1cblxuICByb3RhdGVBYm91dFpBeGlzKHJvdGF0aW9uQWJvdXRaQXhpc01hdHJpeCkge1xuICAgIHRoaXMucG9zaXRpb24gPSByb3RhdGVQb3NpdGlvbkFib3V0WkF4aXModGhpcy5wb3NpdGlvbiwgcm90YXRpb25BYm91dFpBeGlzTWF0cml4KTtcbiAgfVxuICBcbiAgYXBwbHlUcmFuc2Zvcm1zKHRyYW5zZm9ybXMpIHtcbiAgICB0cmFuc2Zvcm1zLmZvckVhY2goZnVuY3Rpb24odHJhbnNmb3JtKSB7XG4gICAgICB0aGlzLnBvc2l0aW9uID0gdHJhbnNmb3JtKHRoaXMucG9zaXRpb24pO1xuICAgIH0uYmluZCh0aGlzKSk7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tUG9zaXRpb24ocG9zaXRpb24pIHtcbiAgICBjb25zdCB2ZXJ0ZXggPSBuZXcgVmVydGV4KHBvc2l0aW9uKTtcbiAgICBcbiAgICByZXR1cm4gdmVydGV4O1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbUNvb3JkaW5hdGVzKGNvb3JkaW5hdGVzKSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSBwb3NpdGlvbkZyb21Db29yZGluYXRlcyhjb29yZGluYXRlcyksXG4gICAgICAgICAgdmVydGV4ID0gbmV3IFZlcnRleChwb3NpdGlvbik7XG5cbiAgICByZXR1cm4gdmVydGV4O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVmVydGV4O1xuXG5mdW5jdGlvbiBjbG9uZVBvc2l0aW9uKHBvc2l0aW9uKSB7IHJldHVybiBwb3NpdGlvbi5zbGljZSgpOyB9IC8vL1xuXG5mdW5jdGlvbiBwb3NpdGlvbkZyb21Db29yZGluYXRlcyhjb29yZGluYXRlcykgeyBcbiAgY29uc3QgcG9zaXRpb24gPSBjb29yZGluYXRlcy5zbGljZSgpOyAvLy9cbiAgXG4gIHJldHVybiBwb3NpdGlvbjtcbn1cbiJdfQ==
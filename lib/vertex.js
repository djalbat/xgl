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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi92ZXJ0ZXguanMiXSwibmFtZXMiOlsicm90YXRpb25VdGlsaXRpZXMiLCJyZXF1aXJlIiwicm90YXRlUG9zaXRpb24iLCJyb3RhdGVQb3NpdGlvbkFib3V0WkF4aXMiLCJWZXJ0ZXgiLCJwb3NpdGlvbiIsImNsb25lUG9zaXRpb24iLCJ2ZXJ0ZXgiLCJyb3RhdGlvblF1YXRlcm5pb24iLCJyb3RhdGlvbkFib3V0WkF4aXNNYXRyaXgiLCJ0cmFuc2Zvcm1zIiwiZm9yRWFjaCIsInRyYW5zZm9ybSIsImJpbmQiLCJjb29yZGluYXRlcyIsInBvc2l0aW9uRnJvbUNvb3JkaW5hdGVzIiwibW9kdWxlIiwiZXhwb3J0cyIsInNsaWNlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsb0JBQW9CQyxRQUFRLHNCQUFSLENBQTFCOztJQUVRQyxjLEdBQTZDRixpQixDQUE3Q0UsYztJQUFnQkMsd0IsR0FBNkJILGlCLENBQTdCRyx3Qjs7SUFFbEJDLE07QUFDSixrQkFBWUMsUUFBWixFQUFzQjtBQUFBOztBQUNwQixTQUFLQSxRQUFMLEdBQWdCQSxRQUFoQjtBQUNEOzs7OzRCQUVPO0FBQ04sVUFBTUEsV0FBV0MsY0FBYyxLQUFLRCxRQUFuQixDQUFqQjtBQUFBLFVBQ01FLFNBQVMsSUFBSUgsTUFBSixDQUFXQyxRQUFYLENBRGY7O0FBR0EsYUFBT0UsTUFBUDtBQUNEOzs7a0NBRWE7QUFDWixhQUFPLEtBQUtGLFFBQVo7QUFDRDs7OzJCQUVNRyxrQixFQUFvQjtBQUN6QixXQUFLSCxRQUFMLEdBQWdCSCxlQUFlLEtBQUtHLFFBQXBCLEVBQThCRyxrQkFBOUIsQ0FBaEI7QUFDRDs7O3FDQUVnQkMsd0IsRUFBMEI7QUFDekMsV0FBS0osUUFBTCxHQUFnQkYseUJBQXlCLEtBQUtFLFFBQTlCLEVBQXdDSSx3QkFBeEMsQ0FBaEI7QUFDRDs7O29DQUVlQyxVLEVBQVk7QUFDMUJBLGlCQUFXQyxPQUFYLENBQW1CLFVBQVNDLFNBQVQsRUFBb0I7QUFDckMsYUFBS1AsUUFBTCxHQUFnQk8sVUFBVSxLQUFLUCxRQUFmLENBQWhCO0FBQ0QsT0FGa0IsQ0FFakJRLElBRmlCLENBRVosSUFGWSxDQUFuQjtBQUdEOzs7b0NBRXNCQyxXLEVBQWE7QUFDbEMsVUFBTVQsV0FBV1Usd0JBQXdCRCxXQUF4QixDQUFqQjtBQUFBLFVBQ01QLFNBQVMsSUFBSUgsTUFBSixDQUFXQyxRQUFYLENBRGY7O0FBR0EsYUFBT0UsTUFBUDtBQUNEOzs7Ozs7QUFHSFMsT0FBT0MsT0FBUCxHQUFpQmIsTUFBakI7O0FBRUEsU0FBU0UsYUFBVCxDQUF1QkQsUUFBdkIsRUFBaUM7QUFBRSxTQUFPQSxTQUFTYSxLQUFULEVBQVA7QUFBMEIsQyxDQUFDOztBQUU5RCxTQUFTSCx1QkFBVCxDQUFpQ0QsV0FBakMsRUFBOEM7QUFDNUMsTUFBTVQsV0FBV1MsWUFBWUksS0FBWixFQUFqQixDQUQ0QyxDQUNOOztBQUV0QyxTQUFPYixRQUFQO0FBQ0QiLCJmaWxlIjoidmVydGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCByb3RhdGlvblV0aWxpdGllcyA9IHJlcXVpcmUoJy4vdXRpbGl0aWVzL3JvdGF0aW9uJyk7XG5cbmNvbnN0IHsgcm90YXRlUG9zaXRpb24sIHJvdGF0ZVBvc2l0aW9uQWJvdXRaQXhpcyB9ID0gcm90YXRpb25VdGlsaXRpZXM7XG5cbmNsYXNzIFZlcnRleCB7XG4gIGNvbnN0cnVjdG9yKHBvc2l0aW9uKSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uO1xuICB9XG5cbiAgY2xvbmUoKSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSBjbG9uZVBvc2l0aW9uKHRoaXMucG9zaXRpb24pLFxuICAgICAgICAgIHZlcnRleCA9IG5ldyBWZXJ0ZXgocG9zaXRpb24pO1xuXG4gICAgcmV0dXJuIHZlcnRleDtcbiAgfVxuXG4gIGdldFBvc2l0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uO1xuICB9XG5cbiAgcm90YXRlKHJvdGF0aW9uUXVhdGVybmlvbikge1xuICAgIHRoaXMucG9zaXRpb24gPSByb3RhdGVQb3NpdGlvbih0aGlzLnBvc2l0aW9uLCByb3RhdGlvblF1YXRlcm5pb24pO1xuICB9XG5cbiAgcm90YXRlQWJvdXRaQXhpcyhyb3RhdGlvbkFib3V0WkF4aXNNYXRyaXgpIHtcbiAgICB0aGlzLnBvc2l0aW9uID0gcm90YXRlUG9zaXRpb25BYm91dFpBeGlzKHRoaXMucG9zaXRpb24sIHJvdGF0aW9uQWJvdXRaQXhpc01hdHJpeCk7XG4gIH1cbiAgXG4gIGFwcGx5VHJhbnNmb3Jtcyh0cmFuc2Zvcm1zKSB7XG4gICAgdHJhbnNmb3Jtcy5mb3JFYWNoKGZ1bmN0aW9uKHRyYW5zZm9ybSkge1xuICAgICAgdGhpcy5wb3NpdGlvbiA9IHRyYW5zZm9ybSh0aGlzLnBvc2l0aW9uKTtcbiAgICB9LmJpbmQodGhpcykpO1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbUNvb3JkaW5hdGVzKGNvb3JkaW5hdGVzKSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSBwb3NpdGlvbkZyb21Db29yZGluYXRlcyhjb29yZGluYXRlcyksXG4gICAgICAgICAgdmVydGV4ID0gbmV3IFZlcnRleChwb3NpdGlvbik7XG5cbiAgICByZXR1cm4gdmVydGV4O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVmVydGV4O1xuXG5mdW5jdGlvbiBjbG9uZVBvc2l0aW9uKHBvc2l0aW9uKSB7IHJldHVybiBwb3NpdGlvbi5zbGljZSgpOyB9IC8vL1xuXG5mdW5jdGlvbiBwb3NpdGlvbkZyb21Db29yZGluYXRlcyhjb29yZGluYXRlcykgeyBcbiAgY29uc3QgcG9zaXRpb24gPSBjb29yZGluYXRlcy5zbGljZSgpOyAvLy9cbiAgXG4gIHJldHVybiBwb3NpdGlvbjtcbn1cbiJdfQ==
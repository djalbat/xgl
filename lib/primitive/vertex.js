'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var rotationUtilities = require('../utilities/rotation');

var rotatePosition = rotationUtilities.rotatePosition;

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
    key: 'clone',
    value: function clone() {
      var position = this.position.slice(),
          ///
      vertex = new Vertex(position);

      return vertex;
    }
  }, {
    key: 'rotate',
    value: function rotate(rotationQuaternion) {
      this.position = rotatePosition(this.position, rotationQuaternion);
    }
  }, {
    key: 'applyTransform',
    value: function applyTransform(transform) {
      this.position = transform(this.position);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9wcmltaXRpdmUvdmVydGV4LmpzIl0sIm5hbWVzIjpbInJvdGF0aW9uVXRpbGl0aWVzIiwicmVxdWlyZSIsInJvdGF0ZVBvc2l0aW9uIiwiVmVydGV4IiwicG9zaXRpb24iLCJzbGljZSIsInZlcnRleCIsInJvdGF0aW9uUXVhdGVybmlvbiIsInRyYW5zZm9ybSIsImNvb3JkaW5hdGVUdXBsZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxvQkFBb0JDLFFBQVEsdUJBQVIsQ0FBMUI7O0lBRVFDLGMsR0FBbUJGLGlCLENBQW5CRSxjOztJQUVGQyxNO0FBQ0osa0JBQVlDLFFBQVosRUFBc0I7QUFBQTs7QUFDcEIsU0FBS0EsUUFBTCxHQUFnQkEsUUFBaEI7QUFDRDs7OztrQ0FFYTtBQUNaLGFBQU8sS0FBS0EsUUFBWjtBQUNEOzs7NEJBRU87QUFDTixVQUFNQSxXQUFXLEtBQUtBLFFBQUwsQ0FBY0MsS0FBZCxFQUFqQjtBQUFBLFVBQXdDO0FBQ2xDQyxlQUFTLElBQUlILE1BQUosQ0FBV0MsUUFBWCxDQURmOztBQUdBLGFBQU9FLE1BQVA7QUFDRDs7OzJCQUVNQyxrQixFQUFvQjtBQUN6QixXQUFLSCxRQUFMLEdBQWdCRixlQUFlLEtBQUtFLFFBQXBCLEVBQThCRyxrQkFBOUIsQ0FBaEI7QUFDRDs7O21DQUVjQyxTLEVBQVc7QUFDeEIsV0FBS0osUUFBTCxHQUFnQkksVUFBVSxLQUFLSixRQUFmLENBQWhCO0FBQ0Q7OztpQ0FFbUJBLFEsRUFBVTtBQUM1QixVQUFNRSxTQUFTLElBQUlILE1BQUosQ0FBV0MsUUFBWCxDQUFmOztBQUVBLGFBQU9FLE1BQVA7QUFDRDs7O3dDQUUwQkcsZSxFQUFpQjtBQUMxQyxVQUFNTCxXQUFXSyxnQkFBZ0JKLEtBQWhCLEVBQWpCO0FBQUEsVUFBMEM7QUFDcENDLGVBQVMsSUFBSUgsTUFBSixDQUFXQyxRQUFYLENBRGY7O0FBR0EsYUFBT0UsTUFBUDtBQUNEOzs7Ozs7QUFHSEksT0FBT0MsT0FBUCxHQUFpQlIsTUFBakIiLCJmaWxlIjoidmVydGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCByb3RhdGlvblV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9yb3RhdGlvbicpO1xuXG5jb25zdCB7IHJvdGF0ZVBvc2l0aW9uIH0gPSByb3RhdGlvblV0aWxpdGllcztcblxuY2xhc3MgVmVydGV4IHtcbiAgY29uc3RydWN0b3IocG9zaXRpb24pIHtcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XG4gIH1cblxuICBnZXRQb3NpdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbjtcbiAgfVxuXG4gIGNsb25lKCkge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gdGhpcy5wb3NpdGlvbi5zbGljZSgpLCAvLy9cbiAgICAgICAgICB2ZXJ0ZXggPSBuZXcgVmVydGV4KHBvc2l0aW9uKTtcblxuICAgIHJldHVybiB2ZXJ0ZXg7XG4gIH1cblxuICByb3RhdGUocm90YXRpb25RdWF0ZXJuaW9uKSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHJvdGF0ZVBvc2l0aW9uKHRoaXMucG9zaXRpb24sIHJvdGF0aW9uUXVhdGVybmlvbik7XG4gIH1cblxuICBhcHBseVRyYW5zZm9ybSh0cmFuc2Zvcm0pIHtcbiAgICB0aGlzLnBvc2l0aW9uID0gdHJhbnNmb3JtKHRoaXMucG9zaXRpb24pO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qb3NpdGlvbihwb3NpdGlvbikge1xuICAgIGNvbnN0IHZlcnRleCA9IG5ldyBWZXJ0ZXgocG9zaXRpb24pO1xuICAgIFxuICAgIHJldHVybiB2ZXJ0ZXg7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tQ29vcmRpbmF0ZVR1cGxlKGNvb3JkaW5hdGVUdXBsZSkge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gY29vcmRpbmF0ZVR1cGxlLnNsaWNlKCksIC8vL1xuICAgICAgICAgIHZlcnRleCA9IG5ldyBWZXJ0ZXgocG9zaXRpb24pO1xuXG4gICAgcmV0dXJuIHZlcnRleDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFZlcnRleDtcbiJdfQ==
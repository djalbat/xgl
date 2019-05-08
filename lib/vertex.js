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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi92ZXJ0ZXguanMiXSwibmFtZXMiOlsicm90YXRpb25VdGlsaXRpZXMiLCJyZXF1aXJlIiwicm90YXRlUG9zaXRpb24iLCJWZXJ0ZXgiLCJwb3NpdGlvbiIsImNsb25lUG9zaXRpb24iLCJ2ZXJ0ZXgiLCJyb3RhdGlvblF1YXRlcm5pb24iLCJ0cmFuc2Zvcm1zIiwiZm9yRWFjaCIsInRyYW5zZm9ybSIsImNvb3JkaW5hdGVzIiwicG9zaXRpb25Gcm9tQ29vcmRpbmF0ZXMiLCJtb2R1bGUiLCJleHBvcnRzIiwic2xpY2UiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxvQkFBb0JDLFFBQVEsc0JBQVIsQ0FBMUI7O0lBRVFDLGMsR0FBbUJGLGlCLENBQW5CRSxjOztJQUVGQyxNO0FBQ0osa0JBQVlDLFFBQVosRUFBc0I7QUFBQTs7QUFDcEIsU0FBS0EsUUFBTCxHQUFnQkEsUUFBaEI7QUFDRDs7Ozs0QkFFTztBQUNOLFVBQU1BLFdBQVdDLGNBQWMsS0FBS0QsUUFBbkIsQ0FBakI7QUFBQSxVQUNNRSxTQUFTLElBQUlILE1BQUosQ0FBV0MsUUFBWCxDQURmOztBQUdBLGFBQU9FLE1BQVA7QUFDRDs7O2tDQUVhO0FBQ1osYUFBTyxLQUFLRixRQUFaO0FBQ0Q7OzsyQkFFTUcsa0IsRUFBb0I7QUFDekIsV0FBS0gsUUFBTCxHQUFnQkYsZUFBZSxLQUFLRSxRQUFwQixFQUE4Qkcsa0JBQTlCLENBQWhCO0FBQ0Q7OztvQ0FFZUMsVSxFQUFZO0FBQUE7O0FBQzFCQSxpQkFBV0MsT0FBWCxDQUFtQixVQUFDQyxTQUFELEVBQWU7QUFDaEMsY0FBS04sUUFBTCxHQUFnQk0sVUFBVSxNQUFLTixRQUFmLENBQWhCO0FBQ0QsT0FGRDtBQUdEOzs7aUNBRW1CQSxRLEVBQVU7QUFDNUIsVUFBTUUsU0FBUyxJQUFJSCxNQUFKLENBQVdDLFFBQVgsQ0FBZjs7QUFFQSxhQUFPRSxNQUFQO0FBQ0Q7OztvQ0FFc0JLLFcsRUFBYTtBQUNsQyxVQUFNUCxXQUFXUSx3QkFBd0JELFdBQXhCLENBQWpCO0FBQUEsVUFDTUwsU0FBUyxJQUFJSCxNQUFKLENBQVdDLFFBQVgsQ0FEZjs7QUFHQSxhQUFPRSxNQUFQO0FBQ0Q7Ozs7OztBQUdITyxPQUFPQyxPQUFQLEdBQWlCWCxNQUFqQjs7QUFFQSxTQUFTRSxhQUFULENBQXVCRCxRQUF2QixFQUFpQztBQUFFLFNBQU9BLFNBQVNXLEtBQVQsRUFBUDtBQUEwQixDLENBQUM7O0FBRTlELFNBQVNILHVCQUFULENBQWlDRCxXQUFqQyxFQUE4QztBQUM1QyxNQUFNUCxXQUFXTyxZQUFZSSxLQUFaLEVBQWpCLENBRDRDLENBQ047O0FBRXRDLFNBQU9YLFFBQVA7QUFDRCIsImZpbGUiOiJ2ZXJ0ZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHJvdGF0aW9uVXRpbGl0aWVzID0gcmVxdWlyZSgnLi91dGlsaXRpZXMvcm90YXRpb24nKTtcblxuY29uc3QgeyByb3RhdGVQb3NpdGlvbiB9ID0gcm90YXRpb25VdGlsaXRpZXM7XG5cbmNsYXNzIFZlcnRleCB7XG4gIGNvbnN0cnVjdG9yKHBvc2l0aW9uKSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uO1xuICB9XG5cbiAgY2xvbmUoKSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSBjbG9uZVBvc2l0aW9uKHRoaXMucG9zaXRpb24pLFxuICAgICAgICAgIHZlcnRleCA9IG5ldyBWZXJ0ZXgocG9zaXRpb24pO1xuXG4gICAgcmV0dXJuIHZlcnRleDtcbiAgfVxuXG4gIGdldFBvc2l0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uO1xuICB9XG5cbiAgcm90YXRlKHJvdGF0aW9uUXVhdGVybmlvbikge1xuICAgIHRoaXMucG9zaXRpb24gPSByb3RhdGVQb3NpdGlvbih0aGlzLnBvc2l0aW9uLCByb3RhdGlvblF1YXRlcm5pb24pO1xuICB9XG5cbiAgYXBwbHlUcmFuc2Zvcm1zKHRyYW5zZm9ybXMpIHtcbiAgICB0cmFuc2Zvcm1zLmZvckVhY2goKHRyYW5zZm9ybSkgPT4ge1xuICAgICAgdGhpcy5wb3NpdGlvbiA9IHRyYW5zZm9ybSh0aGlzLnBvc2l0aW9uKTtcbiAgICB9KTtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21Qb3NpdGlvbihwb3NpdGlvbikge1xuICAgIGNvbnN0IHZlcnRleCA9IG5ldyBWZXJ0ZXgocG9zaXRpb24pO1xuICAgIFxuICAgIHJldHVybiB2ZXJ0ZXg7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tQ29vcmRpbmF0ZXMoY29vcmRpbmF0ZXMpIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IHBvc2l0aW9uRnJvbUNvb3JkaW5hdGVzKGNvb3JkaW5hdGVzKSxcbiAgICAgICAgICB2ZXJ0ZXggPSBuZXcgVmVydGV4KHBvc2l0aW9uKTtcblxuICAgIHJldHVybiB2ZXJ0ZXg7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBWZXJ0ZXg7XG5cbmZ1bmN0aW9uIGNsb25lUG9zaXRpb24ocG9zaXRpb24pIHsgcmV0dXJuIHBvc2l0aW9uLnNsaWNlKCk7IH0gLy8vXG5cbmZ1bmN0aW9uIHBvc2l0aW9uRnJvbUNvb3JkaW5hdGVzKGNvb3JkaW5hdGVzKSB7XG4gIGNvbnN0IHBvc2l0aW9uID0gY29vcmRpbmF0ZXMuc2xpY2UoKTsgLy8vXG4gIFxuICByZXR1cm4gcG9zaXRpb247XG59XG4iXX0=
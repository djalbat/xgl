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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9wcmltaXRpdmUvdmVydGV4LmpzIl0sIm5hbWVzIjpbInJvdGF0aW9uVXRpbGl0aWVzIiwicmVxdWlyZSIsInJvdGF0ZVBvc2l0aW9uIiwiVmVydGV4IiwicG9zaXRpb24iLCJzbGljZSIsInZlcnRleCIsInJvdGF0aW9uUXVhdGVybmlvbiIsInRyYW5zZm9ybXMiLCJmb3JFYWNoIiwidHJhbnNmb3JtIiwiY29vcmRpbmF0ZVR1cGxlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLG9CQUFvQkMsUUFBUSx1QkFBUixDQUExQjs7SUFFUUMsYyxHQUFtQkYsaUIsQ0FBbkJFLGM7O0lBRUZDLE07QUFDSixrQkFBWUMsUUFBWixFQUFzQjtBQUFBOztBQUNwQixTQUFLQSxRQUFMLEdBQWdCQSxRQUFoQjtBQUNEOzs7O2tDQUVhO0FBQ1osYUFBTyxLQUFLQSxRQUFaO0FBQ0Q7Ozs0QkFFTztBQUNOLFVBQU1BLFdBQVcsS0FBS0EsUUFBTCxDQUFjQyxLQUFkLEVBQWpCO0FBQUEsVUFBd0M7QUFDbENDLGVBQVMsSUFBSUgsTUFBSixDQUFXQyxRQUFYLENBRGY7O0FBR0EsYUFBT0UsTUFBUDtBQUNEOzs7MkJBRU1DLGtCLEVBQW9CO0FBQ3pCLFdBQUtILFFBQUwsR0FBZ0JGLGVBQWUsS0FBS0UsUUFBcEIsRUFBOEJHLGtCQUE5QixDQUFoQjtBQUNEOzs7b0NBRWVDLFUsRUFBWTtBQUFBOztBQUMxQkEsaUJBQVdDLE9BQVgsQ0FBbUIsVUFBQ0MsU0FBRCxFQUFlO0FBQ2hDLGNBQUtOLFFBQUwsR0FBZ0JNLFVBQVUsTUFBS04sUUFBZixDQUFoQjtBQUNELE9BRkQ7QUFHRDs7O2lDQUVtQkEsUSxFQUFVO0FBQzVCLFVBQU1FLFNBQVMsSUFBSUgsTUFBSixDQUFXQyxRQUFYLENBQWY7O0FBRUEsYUFBT0UsTUFBUDtBQUNEOzs7d0NBRTBCSyxlLEVBQWlCO0FBQzFDLFVBQU1QLFdBQVdPLGdCQUFnQk4sS0FBaEIsRUFBakI7QUFBQSxVQUEwQztBQUNwQ0MsZUFBUyxJQUFJSCxNQUFKLENBQVdDLFFBQVgsQ0FEZjs7QUFHQSxhQUFPRSxNQUFQO0FBQ0Q7Ozs7OztBQUdITSxPQUFPQyxPQUFQLEdBQWlCVixNQUFqQiIsImZpbGUiOiJ2ZXJ0ZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHJvdGF0aW9uVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL3JvdGF0aW9uJyk7XG5cbmNvbnN0IHsgcm90YXRlUG9zaXRpb24gfSA9IHJvdGF0aW9uVXRpbGl0aWVzO1xuXG5jbGFzcyBWZXJ0ZXgge1xuICBjb25zdHJ1Y3Rvcihwb3NpdGlvbikge1xuICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgfVxuXG4gIGdldFBvc2l0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uO1xuICB9XG5cbiAgY2xvbmUoKSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSB0aGlzLnBvc2l0aW9uLnNsaWNlKCksIC8vL1xuICAgICAgICAgIHZlcnRleCA9IG5ldyBWZXJ0ZXgocG9zaXRpb24pO1xuXG4gICAgcmV0dXJuIHZlcnRleDtcbiAgfVxuXG4gIHJvdGF0ZShyb3RhdGlvblF1YXRlcm5pb24pIHtcbiAgICB0aGlzLnBvc2l0aW9uID0gcm90YXRlUG9zaXRpb24odGhpcy5wb3NpdGlvbiwgcm90YXRpb25RdWF0ZXJuaW9uKTtcbiAgfVxuXG4gIGFwcGx5VHJhbnNmb3Jtcyh0cmFuc2Zvcm1zKSB7XG4gICAgdHJhbnNmb3Jtcy5mb3JFYWNoKCh0cmFuc2Zvcm0pID0+IHtcbiAgICAgIHRoaXMucG9zaXRpb24gPSB0cmFuc2Zvcm0odGhpcy5wb3NpdGlvbik7XG4gICAgfSk7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tUG9zaXRpb24ocG9zaXRpb24pIHtcbiAgICBjb25zdCB2ZXJ0ZXggPSBuZXcgVmVydGV4KHBvc2l0aW9uKTtcbiAgICBcbiAgICByZXR1cm4gdmVydGV4O1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbUNvb3JkaW5hdGVUdXBsZShjb29yZGluYXRlVHVwbGUpIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IGNvb3JkaW5hdGVUdXBsZS5zbGljZSgpLCAvLy9cbiAgICAgICAgICB2ZXJ0ZXggPSBuZXcgVmVydGV4KHBvc2l0aW9uKTtcblxuICAgIHJldHVybiB2ZXJ0ZXg7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBWZXJ0ZXg7XG4iXX0=
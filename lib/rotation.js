'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mat4 = require('gl-mat4'); ///

var defaultXAngle = 0.0,
    defaultYAngle = 0.0,
    defaultZAngle = 6.0,
    xAxisVectorArray = [1, 0, 0],
    yAxisVectorArray = [0, 1, 0],
    zAxisVectorArray = [0, 0, 1];

var Rotation = function () {
  function Rotation(matrix) {
    _classCallCheck(this, Rotation);

    this.matrix = matrix;
  }

  _createClass(Rotation, [{
    key: 'getMatrix',
    value: function getMatrix() {
      return this.matrix;
    }
  }], [{
    key: 'fromXAngleAndYAngle',
    value: function fromXAngleAndYAngle(xAngle, yAngle) {
      var zAngle = defaultZAngle,
          matrix = mat4.create();

      mat4.rotate(matrix, matrix, xAngle, xAxisVectorArray);
      mat4.rotate(matrix, matrix, yAngle, yAxisVectorArray);
      mat4.rotate(matrix, matrix, zAngle, zAxisVectorArray);

      var rotation = new Rotation(matrix);

      return rotation;
    }
  }]);

  return Rotation;
}();

module.exports = Rotation;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9yb3RhdGlvbi5qcyJdLCJuYW1lcyI6WyJtYXQ0IiwicmVxdWlyZSIsImRlZmF1bHRYQW5nbGUiLCJkZWZhdWx0WUFuZ2xlIiwiZGVmYXVsdFpBbmdsZSIsInhBeGlzVmVjdG9yQXJyYXkiLCJ5QXhpc1ZlY3RvckFycmF5IiwiekF4aXNWZWN0b3JBcnJheSIsIlJvdGF0aW9uIiwibWF0cml4IiwieEFuZ2xlIiwieUFuZ2xlIiwiekFuZ2xlIiwiY3JlYXRlIiwicm90YXRlIiwicm90YXRpb24iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxTQUFSLENBQWIsQyxDQUFrQzs7QUFFbEMsSUFBTUMsZ0JBQWdCLEdBQXRCO0FBQUEsSUFDTUMsZ0JBQWdCLEdBRHRCO0FBQUEsSUFFTUMsZ0JBQWdCLEdBRnRCO0FBQUEsSUFHTUMsbUJBQW1CLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSHpCO0FBQUEsSUFJTUMsbUJBQW1CLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSnpCO0FBQUEsSUFLTUMsbUJBQW1CLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBTHpCOztJQU9NQyxRO0FBQ0osb0JBQVlDLE1BQVosRUFBb0I7QUFBQTs7QUFDbEIsU0FBS0EsTUFBTCxHQUFjQSxNQUFkO0FBQ0Q7Ozs7Z0NBRVc7QUFDVixhQUFPLEtBQUtBLE1BQVo7QUFDRDs7O3dDQUUwQkMsTSxFQUFRQyxNLEVBQVE7QUFDekMsVUFBTUMsU0FBU1IsYUFBZjtBQUFBLFVBQ01LLFNBQVNULEtBQUthLE1BQUwsRUFEZjs7QUFHQWIsV0FBS2MsTUFBTCxDQUFZTCxNQUFaLEVBQW9CQSxNQUFwQixFQUE0QkMsTUFBNUIsRUFBb0NMLGdCQUFwQztBQUNBTCxXQUFLYyxNQUFMLENBQVlMLE1BQVosRUFBb0JBLE1BQXBCLEVBQTRCRSxNQUE1QixFQUFvQ0wsZ0JBQXBDO0FBQ0FOLFdBQUtjLE1BQUwsQ0FBWUwsTUFBWixFQUFvQkEsTUFBcEIsRUFBNEJHLE1BQTVCLEVBQW9DTCxnQkFBcEM7O0FBRUEsVUFBTVEsV0FBVyxJQUFJUCxRQUFKLENBQWFDLE1BQWIsQ0FBakI7O0FBRUEsYUFBT00sUUFBUDtBQUNEOzs7Ozs7QUFHSEMsT0FBT0MsT0FBUCxHQUFpQlQsUUFBakIiLCJmaWxlIjoicm90YXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG1hdDQgPSByZXF1aXJlKCdnbC1tYXQ0Jyk7ICAvLy9cblxuY29uc3QgZGVmYXVsdFhBbmdsZSA9IDAuMCxcbiAgICAgIGRlZmF1bHRZQW5nbGUgPSAwLjAsXG4gICAgICBkZWZhdWx0WkFuZ2xlID0gNi4wLFxuICAgICAgeEF4aXNWZWN0b3JBcnJheSA9IFsxLCAwLCAwXSxcbiAgICAgIHlBeGlzVmVjdG9yQXJyYXkgPSBbMCwgMSwgMF0sXG4gICAgICB6QXhpc1ZlY3RvckFycmF5ID0gWzAsIDAsIDFdO1xuXG5jbGFzcyBSb3RhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKG1hdHJpeCkge1xuICAgIHRoaXMubWF0cml4ID0gbWF0cml4O1xuICB9XG4gIFxuICBnZXRNYXRyaXgoKSB7XG4gICAgcmV0dXJuIHRoaXMubWF0cml4O1xuICB9XG5cbiAgc3RhdGljIGZyb21YQW5nbGVBbmRZQW5nbGUoeEFuZ2xlLCB5QW5nbGUpIHtcbiAgICBjb25zdCB6QW5nbGUgPSBkZWZhdWx0WkFuZ2xlLFxuICAgICAgICAgIG1hdHJpeCA9IG1hdDQuY3JlYXRlKCk7XG5cbiAgICBtYXQ0LnJvdGF0ZShtYXRyaXgsIG1hdHJpeCwgeEFuZ2xlLCB4QXhpc1ZlY3RvckFycmF5KTtcbiAgICBtYXQ0LnJvdGF0ZShtYXRyaXgsIG1hdHJpeCwgeUFuZ2xlLCB5QXhpc1ZlY3RvckFycmF5KTtcbiAgICBtYXQ0LnJvdGF0ZShtYXRyaXgsIG1hdHJpeCwgekFuZ2xlLCB6QXhpc1ZlY3RvckFycmF5KTtcblxuICAgIGNvbnN0IHJvdGF0aW9uID0gbmV3IFJvdGF0aW9uKG1hdHJpeCk7XG5cbiAgICByZXR1cm4gcm90YXRpb247XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSb3RhdGlvbjtcbiJdfQ==
"use strict";

var _matrix = require("../maths/matrix");

var _vector = require("../maths/vector");

var _matrix2 = require("../utilities/matrix");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function composeTransform(scale, rotations, position) {
  var matrix = null;

  if (scale !== null) {
    var scaleMatrix = (0, _matrix2.scaleMatrixFromScale)(scale);
    matrix = matrix === null ? scaleMatrix : (0, _matrix.multiply4)(scaleMatrix, matrix);
  }

  if (rotations !== null) {
    var rotationsMatrix = (0, _matrix2.rotationsMatrixFromRotations)(rotations);
    matrix = matrix === null ? rotationsMatrix : (0, _matrix.multiply4)(rotationsMatrix, matrix);
  }

  if (position !== null) {
    var positionMatrix = (0, _matrix2.positionMatrixFromPosition)(position);
    matrix = matrix === null ? positionMatrix : (0, _matrix.multiply4)(positionMatrix, matrix);
  }

  var transform = matrix === null ? function (vector) {
    return vector;
  } : function (vector) {
    return (0, _vector.transform4)([].concat(_toConsumableArray(vector), [1]), matrix).slice(0, 3);
  };
  return transform;
}

module.exports = module.exports = {
  composeTransform: composeTransform
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYW5zZm9ybS5qcyJdLCJuYW1lcyI6WyJjb21wb3NlVHJhbnNmb3JtIiwic2NhbGUiLCJyb3RhdGlvbnMiLCJwb3NpdGlvbiIsIm1hdHJpeCIsInNjYWxlTWF0cml4Iiwicm90YXRpb25zTWF0cml4IiwicG9zaXRpb25NYXRyaXgiLCJ0cmFuc2Zvcm0iLCJ2ZWN0b3IiLCJzbGljZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOztBQUNBOztBQUNBOzs7Ozs7Ozs7O0FBRUEsU0FBU0EsZ0JBQVQsQ0FBMEJDLEtBQTFCLEVBQWlDQyxTQUFqQyxFQUE0Q0MsUUFBNUMsRUFBc0Q7QUFDcEQsTUFBSUMsTUFBTSxHQUFHLElBQWI7O0FBRUEsTUFBSUgsS0FBSyxLQUFLLElBQWQsRUFBb0I7QUFDbEIsUUFBTUksV0FBVyxHQUFHLG1DQUFxQkosS0FBckIsQ0FBcEI7QUFFQUcsSUFBQUEsTUFBTSxHQUFJQSxNQUFNLEtBQUssSUFBWixHQUNFQyxXQURGLEdBRUksdUJBQVVBLFdBQVYsRUFBdUJELE1BQXZCLENBRmI7QUFHRDs7QUFFRCxNQUFJRixTQUFTLEtBQUssSUFBbEIsRUFBd0I7QUFDdEIsUUFBTUksZUFBZSxHQUFHLDJDQUE2QkosU0FBN0IsQ0FBeEI7QUFFQUUsSUFBQUEsTUFBTSxHQUFJQSxNQUFNLEtBQUssSUFBWixHQUNFRSxlQURGLEdBRUksdUJBQVVBLGVBQVYsRUFBMkJGLE1BQTNCLENBRmI7QUFJRDs7QUFFRCxNQUFJRCxRQUFRLEtBQUssSUFBakIsRUFBdUI7QUFDckIsUUFBTUksY0FBYyxHQUFHLHlDQUEyQkosUUFBM0IsQ0FBdkI7QUFFQUMsSUFBQUEsTUFBTSxHQUFJQSxNQUFNLEtBQUssSUFBWixHQUNHRyxjQURILEdBRUssdUJBQVVBLGNBQVYsRUFBMEJILE1BQTFCLENBRmQ7QUFHRDs7QUFFRCxNQUFNSSxTQUFTLEdBQUlKLE1BQU0sS0FBSyxJQUFaLEdBQ0UsVUFBQ0ssTUFBRDtBQUFBLFdBQVlBLE1BQVo7QUFBQSxHQURGLEdBRUksVUFBQ0EsTUFBRDtBQUFBLFdBQVkscURBQWdCQSxNQUFoQixJQUF3QixDQUF4QixJQUE2QkwsTUFBN0IsRUFBcUNNLEtBQXJDLENBQTJDLENBQTNDLEVBQThDLENBQTlDLENBQVo7QUFBQSxHQUZ0QjtBQUlBLFNBQU9GLFNBQVA7QUFDRDs7QUFFREcsTUFBTSxDQUFDQyxPQUFQLEdBQWlCRCxNQUFNLENBQUNDLE9BQVAsR0FBaUI7QUFDaENaLEVBQUFBLGdCQUFnQixFQUFoQkE7QUFEZ0MsQ0FBbEMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgbXVsdGlwbHk0IH0gZnJvbSBcIi4uL21hdGhzL21hdHJpeFwiO1xuaW1wb3J0IHsgdHJhbnNmb3JtNCB9IGZyb20gXCIuLi9tYXRocy92ZWN0b3JcIjtcbmltcG9ydCB7IHNjYWxlTWF0cml4RnJvbVNjYWxlLCBwb3NpdGlvbk1hdHJpeEZyb21Qb3NpdGlvbiwgcm90YXRpb25zTWF0cml4RnJvbVJvdGF0aW9ucyB9IGZyb20gXCIuLi91dGlsaXRpZXMvbWF0cml4XCI7XG5cbmZ1bmN0aW9uIGNvbXBvc2VUcmFuc2Zvcm0oc2NhbGUsIHJvdGF0aW9ucywgcG9zaXRpb24pIHtcbiAgbGV0IG1hdHJpeCA9IG51bGw7XG5cbiAgaWYgKHNjYWxlICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc2NhbGVNYXRyaXggPSBzY2FsZU1hdHJpeEZyb21TY2FsZShzY2FsZSk7XG5cbiAgICBtYXRyaXggPSAobWF0cml4ID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICBzY2FsZU1hdHJpeCA6XG4gICAgICAgICAgICAgICAgIG11bHRpcGx5NChzY2FsZU1hdHJpeCwgbWF0cml4KTtcbiAgfVxuXG4gIGlmIChyb3RhdGlvbnMgIT09IG51bGwpIHtcbiAgICBjb25zdCByb3RhdGlvbnNNYXRyaXggPSByb3RhdGlvbnNNYXRyaXhGcm9tUm90YXRpb25zKHJvdGF0aW9ucyk7XG5cbiAgICBtYXRyaXggPSAobWF0cml4ID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICByb3RhdGlvbnNNYXRyaXggOlxuICAgICAgICAgICAgICAgICBtdWx0aXBseTQocm90YXRpb25zTWF0cml4LCBtYXRyaXgpO1xuXG4gIH1cblxuICBpZiAocG9zaXRpb24gIT09IG51bGwpIHtcbiAgICBjb25zdCBwb3NpdGlvbk1hdHJpeCA9IHBvc2l0aW9uTWF0cml4RnJvbVBvc2l0aW9uKHBvc2l0aW9uKTtcblxuICAgIG1hdHJpeCA9IChtYXRyaXggPT09IG51bGwpID9cbiAgICAgICAgICAgICAgICBwb3NpdGlvbk1hdHJpeCA6XG4gICAgICAgICAgICAgICAgICBtdWx0aXBseTQocG9zaXRpb25NYXRyaXgsIG1hdHJpeCk7XG4gIH1cblxuICBjb25zdCB0cmFuc2Zvcm0gPSAobWF0cml4ID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgKHZlY3RvcikgPT4gdmVjdG9yIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICh2ZWN0b3IpID0+IHRyYW5zZm9ybTQoWyAuLi52ZWN0b3IsIDEgXSwgbWF0cml4KS5zbGljZSgwLCAzKTtcblxuICByZXR1cm4gdHJhbnNmb3JtO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0ge1xuICBjb21wb3NlVHJhbnNmb3JtXG59O1xuIl19
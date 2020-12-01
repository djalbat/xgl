"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.composeTransform = composeTransform;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYW5zZm9ybS5qcyJdLCJuYW1lcyI6WyJjb21wb3NlVHJhbnNmb3JtIiwic2NhbGUiLCJyb3RhdGlvbnMiLCJwb3NpdGlvbiIsIm1hdHJpeCIsInNjYWxlTWF0cml4Iiwicm90YXRpb25zTWF0cml4IiwicG9zaXRpb25NYXRyaXgiLCJ0cmFuc2Zvcm0iLCJ2ZWN0b3IiLCJzbGljZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztBQUVPLFNBQVNBLGdCQUFULENBQTBCQyxLQUExQixFQUFpQ0MsU0FBakMsRUFBNENDLFFBQTVDLEVBQXNEO0FBQzNELE1BQUlDLE1BQU0sR0FBRyxJQUFiOztBQUVBLE1BQUlILEtBQUssS0FBSyxJQUFkLEVBQW9CO0FBQ2xCLFFBQU1JLFdBQVcsR0FBRyxtQ0FBcUJKLEtBQXJCLENBQXBCO0FBRUFHLElBQUFBLE1BQU0sR0FBSUEsTUFBTSxLQUFLLElBQVosR0FDRUMsV0FERixHQUVJLHVCQUFVQSxXQUFWLEVBQXVCRCxNQUF2QixDQUZiO0FBR0Q7O0FBRUQsTUFBSUYsU0FBUyxLQUFLLElBQWxCLEVBQXdCO0FBQ3RCLFFBQU1JLGVBQWUsR0FBRywyQ0FBNkJKLFNBQTdCLENBQXhCO0FBRUFFLElBQUFBLE1BQU0sR0FBSUEsTUFBTSxLQUFLLElBQVosR0FDRUUsZUFERixHQUVJLHVCQUFVQSxlQUFWLEVBQTJCRixNQUEzQixDQUZiO0FBSUQ7O0FBRUQsTUFBSUQsUUFBUSxLQUFLLElBQWpCLEVBQXVCO0FBQ3JCLFFBQU1JLGNBQWMsR0FBRyx5Q0FBMkJKLFFBQTNCLENBQXZCO0FBRUFDLElBQUFBLE1BQU0sR0FBSUEsTUFBTSxLQUFLLElBQVosR0FDR0csY0FESCxHQUVLLHVCQUFVQSxjQUFWLEVBQTBCSCxNQUExQixDQUZkO0FBR0Q7O0FBRUQsTUFBTUksU0FBUyxHQUFJSixNQUFNLEtBQUssSUFBWixHQUNFLFVBQUNLLE1BQUQ7QUFBQSxXQUFZQSxNQUFaO0FBQUEsR0FERixHQUVJLFVBQUNBLE1BQUQ7QUFBQSxXQUFZLHFEQUFnQkEsTUFBaEIsSUFBd0IsQ0FBeEIsSUFBNkJMLE1BQTdCLEVBQXFDTSxLQUFyQyxDQUEyQyxDQUEzQyxFQUE4QyxDQUE5QyxDQUFaO0FBQUEsR0FGdEI7QUFJQSxTQUFPRixTQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgbXVsdGlwbHk0IH0gZnJvbSBcIi4uL21hdGhzL21hdHJpeFwiO1xuaW1wb3J0IHsgdHJhbnNmb3JtNCB9IGZyb20gXCIuLi9tYXRocy92ZWN0b3JcIjtcbmltcG9ydCB7IHNjYWxlTWF0cml4RnJvbVNjYWxlLCBwb3NpdGlvbk1hdHJpeEZyb21Qb3NpdGlvbiwgcm90YXRpb25zTWF0cml4RnJvbVJvdGF0aW9ucyB9IGZyb20gXCIuLi91dGlsaXRpZXMvbWF0cml4XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wb3NlVHJhbnNmb3JtKHNjYWxlLCByb3RhdGlvbnMsIHBvc2l0aW9uKSB7XG4gIGxldCBtYXRyaXggPSBudWxsO1xuXG4gIGlmIChzY2FsZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHNjYWxlTWF0cml4ID0gc2NhbGVNYXRyaXhGcm9tU2NhbGUoc2NhbGUpO1xuXG4gICAgbWF0cml4ID0gKG1hdHJpeCA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgc2NhbGVNYXRyaXggOlxuICAgICAgICAgICAgICAgICBtdWx0aXBseTQoc2NhbGVNYXRyaXgsIG1hdHJpeCk7XG4gIH1cblxuICBpZiAocm90YXRpb25zICE9PSBudWxsKSB7XG4gICAgY29uc3Qgcm90YXRpb25zTWF0cml4ID0gcm90YXRpb25zTWF0cml4RnJvbVJvdGF0aW9ucyhyb3RhdGlvbnMpO1xuXG4gICAgbWF0cml4ID0gKG1hdHJpeCA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgcm90YXRpb25zTWF0cml4IDpcbiAgICAgICAgICAgICAgICAgbXVsdGlwbHk0KHJvdGF0aW9uc01hdHJpeCwgbWF0cml4KTtcblxuICB9XG5cbiAgaWYgKHBvc2l0aW9uICE9PSBudWxsKSB7XG4gICAgY29uc3QgcG9zaXRpb25NYXRyaXggPSBwb3NpdGlvbk1hdHJpeEZyb21Qb3NpdGlvbihwb3NpdGlvbik7XG5cbiAgICBtYXRyaXggPSAobWF0cml4ID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgcG9zaXRpb25NYXRyaXggOlxuICAgICAgICAgICAgICAgICAgbXVsdGlwbHk0KHBvc2l0aW9uTWF0cml4LCBtYXRyaXgpO1xuICB9XG5cbiAgY29uc3QgdHJhbnNmb3JtID0gKG1hdHJpeCA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICh2ZWN0b3IpID0+IHZlY3RvciA6XG4gICAgICAgICAgICAgICAgICAgICAgICAodmVjdG9yKSA9PiB0cmFuc2Zvcm00KFsgLi4udmVjdG9yLCAxIF0sIG1hdHJpeCkuc2xpY2UoMCwgMyk7XG5cbiAgcmV0dXJuIHRyYW5zZm9ybTtcbn1cbiJdfQ==
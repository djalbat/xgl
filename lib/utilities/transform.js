"use strict";

var _matrix = require("../maths/matrix");

var _vector = require("../maths/vector");

var _matrix2 = require("../utilities/matrix");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYW5zZm9ybS5qcyJdLCJuYW1lcyI6WyJjb21wb3NlVHJhbnNmb3JtIiwic2NhbGUiLCJyb3RhdGlvbnMiLCJwb3NpdGlvbiIsIm1hdHJpeCIsInNjYWxlTWF0cml4Iiwicm90YXRpb25zTWF0cml4IiwicG9zaXRpb25NYXRyaXgiLCJ0cmFuc2Zvcm0iLCJ2ZWN0b3IiLCJzbGljZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7OztBQUVBLFNBQVNBLGdCQUFULENBQTBCQyxLQUExQixFQUFpQ0MsU0FBakMsRUFBNENDLFFBQTVDLEVBQXNEO0FBQ3BELE1BQUlDLE1BQU0sR0FBRyxJQUFiOztBQUVBLE1BQUlILEtBQUssS0FBSyxJQUFkLEVBQW9CO0FBQ2xCLFFBQU1JLFdBQVcsR0FBRyxtQ0FBcUJKLEtBQXJCLENBQXBCO0FBRUFHLElBQUFBLE1BQU0sR0FBSUEsTUFBTSxLQUFLLElBQVosR0FDRUMsV0FERixHQUVJLHVCQUFVQSxXQUFWLEVBQXVCRCxNQUF2QixDQUZiO0FBR0Q7O0FBRUQsTUFBSUYsU0FBUyxLQUFLLElBQWxCLEVBQXdCO0FBQ3RCLFFBQU1JLGVBQWUsR0FBRywyQ0FBNkJKLFNBQTdCLENBQXhCO0FBRUFFLElBQUFBLE1BQU0sR0FBSUEsTUFBTSxLQUFLLElBQVosR0FDRUUsZUFERixHQUVJLHVCQUFVQSxlQUFWLEVBQTJCRixNQUEzQixDQUZiO0FBSUQ7O0FBRUQsTUFBSUQsUUFBUSxLQUFLLElBQWpCLEVBQXVCO0FBQ3JCLFFBQU1JLGNBQWMsR0FBRyx5Q0FBMkJKLFFBQTNCLENBQXZCO0FBRUFDLElBQUFBLE1BQU0sR0FBSUEsTUFBTSxLQUFLLElBQVosR0FDR0csY0FESCxHQUVLLHVCQUFVQSxjQUFWLEVBQTBCSCxNQUExQixDQUZkO0FBR0Q7O0FBRUQsTUFBTUksU0FBUyxHQUFJSixNQUFNLEtBQUssSUFBWixHQUNFLFVBQUNLLE1BQUQ7QUFBQSxXQUFZQSxNQUFaO0FBQUEsR0FERixHQUVJLFVBQUNBLE1BQUQ7QUFBQSxXQUFZLHFEQUFnQkEsTUFBaEIsSUFBd0IsQ0FBeEIsSUFBNkJMLE1BQTdCLEVBQXFDTSxLQUFyQyxDQUEyQyxDQUEzQyxFQUE4QyxDQUE5QyxDQUFaO0FBQUEsR0FGdEI7QUFJQSxTQUFPRixTQUFQO0FBQ0Q7O0FBRURHLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQkQsTUFBTSxDQUFDQyxPQUFQLEdBQWlCO0FBQ2hDWixFQUFBQSxnQkFBZ0IsRUFBaEJBO0FBRGdDLENBQWxDIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IG11bHRpcGx5NCB9IGZyb20gXCIuLi9tYXRocy9tYXRyaXhcIjtcbmltcG9ydCB7IHRyYW5zZm9ybTQgfSBmcm9tIFwiLi4vbWF0aHMvdmVjdG9yXCI7XG5pbXBvcnQgeyBzY2FsZU1hdHJpeEZyb21TY2FsZSwgcG9zaXRpb25NYXRyaXhGcm9tUG9zaXRpb24sIHJvdGF0aW9uc01hdHJpeEZyb21Sb3RhdGlvbnMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL21hdHJpeFwiO1xuXG5mdW5jdGlvbiBjb21wb3NlVHJhbnNmb3JtKHNjYWxlLCByb3RhdGlvbnMsIHBvc2l0aW9uKSB7XG4gIGxldCBtYXRyaXggPSBudWxsO1xuXG4gIGlmIChzY2FsZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHNjYWxlTWF0cml4ID0gc2NhbGVNYXRyaXhGcm9tU2NhbGUoc2NhbGUpO1xuXG4gICAgbWF0cml4ID0gKG1hdHJpeCA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgc2NhbGVNYXRyaXggOlxuICAgICAgICAgICAgICAgICBtdWx0aXBseTQoc2NhbGVNYXRyaXgsIG1hdHJpeCk7XG4gIH1cblxuICBpZiAocm90YXRpb25zICE9PSBudWxsKSB7XG4gICAgY29uc3Qgcm90YXRpb25zTWF0cml4ID0gcm90YXRpb25zTWF0cml4RnJvbVJvdGF0aW9ucyhyb3RhdGlvbnMpO1xuXG4gICAgbWF0cml4ID0gKG1hdHJpeCA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgcm90YXRpb25zTWF0cml4IDpcbiAgICAgICAgICAgICAgICAgbXVsdGlwbHk0KHJvdGF0aW9uc01hdHJpeCwgbWF0cml4KTtcblxuICB9XG5cbiAgaWYgKHBvc2l0aW9uICE9PSBudWxsKSB7XG4gICAgY29uc3QgcG9zaXRpb25NYXRyaXggPSBwb3NpdGlvbk1hdHJpeEZyb21Qb3NpdGlvbihwb3NpdGlvbik7XG5cbiAgICBtYXRyaXggPSAobWF0cml4ID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgcG9zaXRpb25NYXRyaXggOlxuICAgICAgICAgICAgICAgICAgbXVsdGlwbHk0KHBvc2l0aW9uTWF0cml4LCBtYXRyaXgpO1xuICB9XG5cbiAgY29uc3QgdHJhbnNmb3JtID0gKG1hdHJpeCA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICh2ZWN0b3IpID0+IHZlY3RvciA6XG4gICAgICAgICAgICAgICAgICAgICAgICAodmVjdG9yKSA9PiB0cmFuc2Zvcm00KFsgLi4udmVjdG9yLCAxIF0sIG1hdHJpeCkuc2xpY2UoMCwgMyk7XG5cbiAgcmV0dXJuIHRyYW5zZm9ybTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgY29tcG9zZVRyYW5zZm9ybVxufTtcbiJdfQ==
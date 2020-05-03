"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.composeTransform = composeTransform;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYW5zZm9ybS5qcyJdLCJuYW1lcyI6WyJjb21wb3NlVHJhbnNmb3JtIiwic2NhbGUiLCJyb3RhdGlvbnMiLCJwb3NpdGlvbiIsIm1hdHJpeCIsInNjYWxlTWF0cml4Iiwicm90YXRpb25zTWF0cml4IiwicG9zaXRpb25NYXRyaXgiLCJ0cmFuc2Zvcm0iLCJ2ZWN0b3IiLCJzbGljZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFFTyxTQUFTQSxnQkFBVCxDQUEwQkMsS0FBMUIsRUFBaUNDLFNBQWpDLEVBQTRDQyxRQUE1QyxFQUFzRDtBQUMzRCxNQUFJQyxNQUFNLEdBQUcsSUFBYjs7QUFFQSxNQUFJSCxLQUFLLEtBQUssSUFBZCxFQUFvQjtBQUNsQixRQUFNSSxXQUFXLEdBQUcsbUNBQXFCSixLQUFyQixDQUFwQjtBQUVBRyxJQUFBQSxNQUFNLEdBQUlBLE1BQU0sS0FBSyxJQUFaLEdBQ0VDLFdBREYsR0FFSSx1QkFBVUEsV0FBVixFQUF1QkQsTUFBdkIsQ0FGYjtBQUdEOztBQUVELE1BQUlGLFNBQVMsS0FBSyxJQUFsQixFQUF3QjtBQUN0QixRQUFNSSxlQUFlLEdBQUcsMkNBQTZCSixTQUE3QixDQUF4QjtBQUVBRSxJQUFBQSxNQUFNLEdBQUlBLE1BQU0sS0FBSyxJQUFaLEdBQ0VFLGVBREYsR0FFSSx1QkFBVUEsZUFBVixFQUEyQkYsTUFBM0IsQ0FGYjtBQUlEOztBQUVELE1BQUlELFFBQVEsS0FBSyxJQUFqQixFQUF1QjtBQUNyQixRQUFNSSxjQUFjLEdBQUcseUNBQTJCSixRQUEzQixDQUF2QjtBQUVBQyxJQUFBQSxNQUFNLEdBQUlBLE1BQU0sS0FBSyxJQUFaLEdBQ0dHLGNBREgsR0FFSyx1QkFBVUEsY0FBVixFQUEwQkgsTUFBMUIsQ0FGZDtBQUdEOztBQUVELE1BQU1JLFNBQVMsR0FBSUosTUFBTSxLQUFLLElBQVosR0FDRSxVQUFDSyxNQUFEO0FBQUEsV0FBWUEsTUFBWjtBQUFBLEdBREYsR0FFSSxVQUFDQSxNQUFEO0FBQUEsV0FBWSxxREFBZ0JBLE1BQWhCLElBQXdCLENBQXhCLElBQTZCTCxNQUE3QixFQUFxQ00sS0FBckMsQ0FBMkMsQ0FBM0MsRUFBOEMsQ0FBOUMsQ0FBWjtBQUFBLEdBRnRCO0FBSUEsU0FBT0YsU0FBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IG11bHRpcGx5NCB9IGZyb20gXCIuLi9tYXRocy9tYXRyaXhcIjtcbmltcG9ydCB7IHRyYW5zZm9ybTQgfSBmcm9tIFwiLi4vbWF0aHMvdmVjdG9yXCI7XG5pbXBvcnQgeyBzY2FsZU1hdHJpeEZyb21TY2FsZSwgcG9zaXRpb25NYXRyaXhGcm9tUG9zaXRpb24sIHJvdGF0aW9uc01hdHJpeEZyb21Sb3RhdGlvbnMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL21hdHJpeFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gY29tcG9zZVRyYW5zZm9ybShzY2FsZSwgcm90YXRpb25zLCBwb3NpdGlvbikge1xuICBsZXQgbWF0cml4ID0gbnVsbDtcblxuICBpZiAoc2NhbGUgIT09IG51bGwpIHtcbiAgICBjb25zdCBzY2FsZU1hdHJpeCA9IHNjYWxlTWF0cml4RnJvbVNjYWxlKHNjYWxlKTtcblxuICAgIG1hdHJpeCA9IChtYXRyaXggPT09IG51bGwpID9cbiAgICAgICAgICAgICAgIHNjYWxlTWF0cml4IDpcbiAgICAgICAgICAgICAgICAgbXVsdGlwbHk0KHNjYWxlTWF0cml4LCBtYXRyaXgpO1xuICB9XG5cbiAgaWYgKHJvdGF0aW9ucyAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHJvdGF0aW9uc01hdHJpeCA9IHJvdGF0aW9uc01hdHJpeEZyb21Sb3RhdGlvbnMocm90YXRpb25zKTtcblxuICAgIG1hdHJpeCA9IChtYXRyaXggPT09IG51bGwpID9cbiAgICAgICAgICAgICAgIHJvdGF0aW9uc01hdHJpeCA6XG4gICAgICAgICAgICAgICAgIG11bHRpcGx5NChyb3RhdGlvbnNNYXRyaXgsIG1hdHJpeCk7XG5cbiAgfVxuXG4gIGlmIChwb3NpdGlvbiAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHBvc2l0aW9uTWF0cml4ID0gcG9zaXRpb25NYXRyaXhGcm9tUG9zaXRpb24ocG9zaXRpb24pO1xuXG4gICAgbWF0cml4ID0gKG1hdHJpeCA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uTWF0cml4IDpcbiAgICAgICAgICAgICAgICAgIG11bHRpcGx5NChwb3NpdGlvbk1hdHJpeCwgbWF0cml4KTtcbiAgfVxuXG4gIGNvbnN0IHRyYW5zZm9ybSA9IChtYXRyaXggPT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAodmVjdG9yKSA9PiB2ZWN0b3IgOlxuICAgICAgICAgICAgICAgICAgICAgICAgKHZlY3RvcikgPT4gdHJhbnNmb3JtNChbIC4uLnZlY3RvciwgMSBdLCBtYXRyaXgpLnNsaWNlKDAsIDMpO1xuXG4gIHJldHVybiB0cmFuc2Zvcm07XG59XG4iXX0=
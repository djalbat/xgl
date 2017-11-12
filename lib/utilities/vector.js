'use strict';

var vec2 = require('gl-vec2');
var vec3 = require('gl-vec3');
var vec4 = require('gl-vec4');

function length2(vector) {
  return vec2.length(vector);
}

function length3(vector) {
  return vec3.length(vector);
}

function length4(vector) {
  return vec4.length(vector);
}

function dot2(vectorA, vectorB) {
  return vec2.dot(vectorA, vectorB);
}

function dot3(vectorA, vectorB) {
  return vec3.dot(vectorA, vectorB);
}

function dot4(vectorA, vectorB) {
  return vec4.dot(vectorA, vectorB);
}

function cross3(vectorA, vectorB) {
  return vec3.cross([], vectorA, vectorB);
}

function normalise2(vector) {
  return vec2.normalize([], vector);
}

function normalise3(vector) {
  return vec3.normalize([], vector);
}

function normalise4(vector) {
  return vec4.normalize([], vector);
}

function scale2(vector, scalar) {
  return vec2.scale([], vector, scalar);
}

function scale3(vector, scalar) {
  return vec3.scale([], vector, scalar);
}

function scale4(vector, scalar) {
  return vec4.scale([], vector, scalar);
}

function add2(vectorA, vectorB) {
  return vec2.add([], vectorA, vectorB);
}

function add3(vectorA, vectorB) {
  return vec3.add([], vectorA, vectorB);
}

function add4(vectorA, vectorB) {
  return vec4.add([], vectorA, vectorB);
}

function subtract2(vectorA, vectorB) {
  return vec2.subtract([], vectorA, vectorB);
}

function subtract3(vectorA, vectorB) {
  return vec3.subtract([], vectorA, vectorB);
}

function subtract4(vectorA, vectorB) {
  return vec4.subtract([], vectorA, vectorB);
}

function transform2(vector, matrix) {
  return vec2.transformMat2([], vector, matrix);
}

function transform3(vector, matrix) {
  return vec3.transformMat3([], vector, matrix);
}

function transform4(vector, matrix) {
  return vec4.transformMat4([], vector, matrix);
}

module.exports = {
  length2: length2,
  length3: length3,
  length4: length4,
  dot2: dot2,
  dot3: dot3,
  dot4: dot4,
  cross3: cross3,
  normalise2: normalise2,
  normalise3: normalise3,
  normalise4: normalise4,
  scale2: scale2,
  scale3: scale3,
  scale4: scale4,
  add2: add2,
  add3: add3,
  add4: add4,
  subtract2: subtract2,
  subtract3: subtract3,
  subtract4: subtract4,
  transform2: transform2,
  transform3: transform3,
  transform4: transform4
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi91dGlsaXRpZXMvdmVjdG9yLmpzIl0sIm5hbWVzIjpbInZlYzIiLCJyZXF1aXJlIiwidmVjMyIsInZlYzQiLCJsZW5ndGgyIiwidmVjdG9yIiwibGVuZ3RoIiwibGVuZ3RoMyIsImxlbmd0aDQiLCJkb3QyIiwidmVjdG9yQSIsInZlY3RvckIiLCJkb3QiLCJkb3QzIiwiZG90NCIsImNyb3NzMyIsImNyb3NzIiwibm9ybWFsaXNlMiIsIm5vcm1hbGl6ZSIsIm5vcm1hbGlzZTMiLCJub3JtYWxpc2U0Iiwic2NhbGUyIiwic2NhbGFyIiwic2NhbGUiLCJzY2FsZTMiLCJzY2FsZTQiLCJhZGQyIiwiYWRkIiwiYWRkMyIsImFkZDQiLCJzdWJ0cmFjdDIiLCJzdWJ0cmFjdCIsInN1YnRyYWN0MyIsInN1YnRyYWN0NCIsInRyYW5zZm9ybTIiLCJtYXRyaXgiLCJ0cmFuc2Zvcm1NYXQyIiwidHJhbnNmb3JtMyIsInRyYW5zZm9ybU1hdDMiLCJ0cmFuc2Zvcm00IiwidHJhbnNmb3JtTWF0NCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBLElBQU1BLE9BQU9DLFFBQVEsU0FBUixDQUFiO0FBQ0EsSUFBTUMsT0FBT0QsUUFBUSxTQUFSLENBQWI7QUFDQSxJQUFNRSxPQUFPRixRQUFRLFNBQVIsQ0FBYjs7QUFFQSxTQUFTRyxPQUFULENBQWlCQyxNQUFqQixFQUF5QjtBQUFFLFNBQU9MLEtBQUtNLE1BQUwsQ0FBWUQsTUFBWixDQUFQO0FBQTZCOztBQUV4RCxTQUFTRSxPQUFULENBQWlCRixNQUFqQixFQUF5QjtBQUFFLFNBQU9ILEtBQUtJLE1BQUwsQ0FBWUQsTUFBWixDQUFQO0FBQTZCOztBQUV4RCxTQUFTRyxPQUFULENBQWlCSCxNQUFqQixFQUF5QjtBQUFFLFNBQU9GLEtBQUtHLE1BQUwsQ0FBWUQsTUFBWixDQUFQO0FBQTZCOztBQUV4RCxTQUFTSSxJQUFULENBQWNDLE9BQWQsRUFBdUJDLE9BQXZCLEVBQWdDO0FB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QUE1QixFQUFvQztBQUFFLFNBQU9uQyxLQUFLb0MsYUFBTCxDQUFtQixFQUFuQixFQUF1Qi9CLE1BQXZCLEVBQStCOEIsTUFBL0IsQ0FBUDtBQUFnRDs7QUFFdEYsU0FBU0UsVUFBVCxDQUFvQmhDLE1BQXBCLEVBQTRCOEIsTUFBNUIsRUFBb0M7QUFBRSxTQUFPakMsS0FBS29DLGFBQUwsQ0FBbUIsRUFBbkIsRUFBdUJqQyxNQUF2QixFQUErQjhCLE1BQS9CLENBQVA7QUFBZ0Q7O0FBRXRGLFNBQVNJLFVBQVQsQ0FBb0JsQyxNQUFwQixFQUE0QjhCLE1BQTVCLEVBQW9DO0FBQUUsU0FBT2hDLEtBQUtxQyxhQUFMLENBQW1CLEVBQW5CLEVBQXVCbkMsTUFBdkIsRUFBK0I4QixNQUEvQixDQUFQO0FBQWdEOztBQUV0Rk0sT0FBT0MsT0FBUCxHQUFpQjtBQUNmdEMsV0FBU0EsT0FETTtBQUVmRyxXQUFTQSxPQUZNO0FBR2ZDLFdBQVNBLE9BSE07QUFJZkMsUUFBTUEsSUFKUztBQUtmSSxRQUFNQSxJQUxTO0FBTWZDLFFBQU1BLElBTlM7QUFPZkMsVUFBUUEsTUFQTztBQVFmRSxjQUFZQSxVQVJHO0FBU2ZFLGNBQVlBLFVBVEc7QUFVZkMsY0FBWUEsVUFWRztBQVdmQyxVQUFRQSxNQVhPO0FBWWZHLFVBQVFBLE1BWk87QUFhZkMsVUFBUUEsTUFiTztBQWNmQyxRQUFNQSxJQWRTO0FBZWZFLFFBQU1BLElBZlM7QUFnQmZDLFFBQU1BLElBaEJTO0FBaUJmQyxhQUFXQSxTQWpCSTtBQWtCZkUsYUFBV0EsU0FsQkk7QUFtQmZDLGFBQVdBLFNBbkJJO0FBb0JmQyxjQUFZQSxVQXBCRztBQXFCZkcsY0FBWUEsVUFyQkc7QUFzQmZFLGNBQVlBO0FBdEJHLENBQWpCIiwiZmlsZSI6InZlY3Rvci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgdmVjMiA9IHJlcXVpcmUoJ2dsLXZlYzInKTtcbmNvbnN0IHZlYzMgPSByZXF1aXJlKCdnbC12ZWMzJyk7XG5jb25zdCB2ZWM0ID0gcmVxdWlyZSgnZ2wtdmVjNCcpO1xuXG5mdW5jdGlvbiBsZW5ndGgyKHZlY3RvcikgeyByZXR1cm4gdmVjMi5sZW5ndGgodmVjdG9yKTsgfVxuXG5mdW5jdGlvbiBsZW5ndGgzKHZlY3RvcikgeyByZXR1cm4gdmVjMy5sZW5ndGgodmVjdG9yKTsgfVxuXG5mdW5jdGlvbiBsZW5ndGg0KHZlY3RvcikgeyByZXR1cm4gdmVjNC5sZW5ndGgodmVjdG9yKTsgfVxuXG5mdW5jdGlvbiBkb3QyKHZlY3RvckEsIHZlY3RvckIpIHsgcmV0dXJuIHZlYzIuZG90KHZlY3RvckEsIHZlY3RvckIpOyB9XG5cbmZ1bmN0aW9uIGRvdDModmVjdG9yQSwgdmVjdG9yQikgeyByZXR1cm4gdmVjMy5kb3QodmVjdG9yQSwgdmVjdG9yQik7IH1cblxuZnVuY3Rpb24gZG90NCh2ZWN0b3JBLCB2ZWN0b3JCKSB7IHJldHVybiB2ZWM0LmRvdCh2ZWN0b3JBLCB2ZWN0b3JCKTsgfVxuXG5mdW5jdGlvbiBjcm9zczModmVjdG9yQSwgdmVjdG9yQikgeyByZXR1cm4gdmVjMy5jcm9zcyhbXSwgdmVjdG9yQSwgdmVjdG9yQik7IH1cblxuZnVuY3Rpb24gbm9ybWFsaXNlMih2ZWN0b3IpIHsgcmV0dXJuIHZlYzIubm9ybWFsaXplKFtdLCB2ZWN0b3IpOyB9XG5cbmZ1bmN0aW9uIG5vcm1hbGlzZTModmVjdG9yKSB7IHJldHVybiB2ZWMzLm5vcm1hbGl6ZShbXSwgdmVjdG9yKTsgfVxuXG5mdW5jdGlvbiBub3JtYWxpc2U0KHZlY3RvcikgeyByZXR1cm4gdmVjNC5ub3JtYWxpemUoW10sIHZlY3Rvcik7IH1cblxuZnVuY3Rpb24gc2NhbGUyKHZlY3Rvciwgc2NhbGFyKSB7IHJldHVybiB2ZWMyLnNjYWxlKFtdLCB2ZWN0b3IsIHNjYWxhcik7IH1cblxuZnVuY3Rpb24gc2NhbGUzKHZlY3Rvciwgc2NhbGFyKSB7IHJldHVybiB2ZWMzLnNjYWxlKFtdLCB2ZWN0b3IsIHNjYWxhcik7IH1cblxuZnVuY3Rpb24gc2NhbGU0KHZlY3Rvciwgc2NhbGFyKSB7IHJldHVybiB2ZWM0LnNjYWxlKFtdLCB2ZWN0b3IsIHNjYWxhcik7IH1cblxuZnVuY3Rpb24gYWRkMih2ZWN0b3JBLCB2ZWN0b3JCKSB7IHJldHVybiB2ZWMyLmFkZChbXSwgdmVjdG9yQSwgdmVjdG9yQik7IH1cblxuZnVuY3Rpb24gYWRkMyh2ZWN0b3JBLCB2ZWN0b3JCKSB7IHJldHVybiB2ZWMzLmFkZChbXSwgdmVjdG9yQSwgdmVjdG9yQik7IH1cblxuZnVuY3Rpb24gYWRkNCh2ZWN0b3JBLCB2ZWN0b3JCKSB7IHJldHVybiB2ZWM0LmFkZChbXSwgdmVjdG9yQSwgdmVjdG9yQik7IH1cblxuZnVuY3Rpb24gc3VidHJhY3QyKHZlY3RvckEsIHZlY3RvckIpIHsgcmV0dXJuIHZlYzIuc3VidHJhY3QoW10sIHZlY3RvckEsIHZlY3RvckIpOyB9XG5cbmZ1bmN0aW9uIHN1YnRyYWN0Myh2ZWN0b3JBLCB2ZWN0b3JCKSB7IHJldHVybiB2ZWMzLnN1YnRyYWN0KFtdLCB2ZWN0b3JBLCB2ZWN0b3JCKTsgfVxuXG5mdW5jdGlvbiBzdWJ0cmFjdDQodmVjdG9yQSwgdmVjdG9yQikgeyByZXR1cm4gdmVjNC5zdWJ0cmFjdChbXSwgdmVjdG9yQSwgdmVjdG9yQik7IH1cblxuZnVuY3Rpb24gdHJhbnNmb3JtMih2ZWN0b3IsIG1hdHJpeCkgeyByZXR1cm4gdmVjMi50cmFuc2Zvcm1NYXQyKFtdLCB2ZWN0b3IsIG1hdHJpeCk7IH1cblxuZnVuY3Rpb24gdHJhbnNmb3JtMyh2ZWN0b3IsIG1hdHJpeCkgeyByZXR1cm4gdmVjMy50cmFuc2Zvcm1NYXQzKFtdLCB2ZWN0b3IsIG1hdHJpeCk7IH1cblxuZnVuY3Rpb24gdHJhbnNmb3JtNCh2ZWN0b3IsIG1hdHJpeCkgeyByZXR1cm4gdmVjNC50cmFuc2Zvcm1NYXQ0KFtdLCB2ZWN0b3IsIG1hdHJpeCk7IH1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGxlbmd0aDI6IGxlbmd0aDIsXG4gIGxlbmd0aDM6IGxlbmd0aDMsXG4gIGxlbmd0aDQ6IGxlbmd0aDQsXG4gIGRvdDI6IGRvdDIsXG4gIGRvdDM6IGRvdDMsXG4gIGRvdDQ6IGRvdDQsXG4gIGNyb3NzMzogY3Jvc3MzLFxuICBub3JtYWxpc2UyOiBub3JtYWxpc2UyLFxuICBub3JtYWxpc2UzOiBub3JtYWxpc2UzLFxuICBub3JtYWxpc2U0OiBub3JtYWxpc2U0LFxuICBzY2FsZTI6IHNjYWxlMixcbiAgc2NhbGUzOiBzY2FsZTMsXG4gIHNjYWxlNDogc2NhbGU0LFxuICBhZGQyOiBhZGQyLFxuICBhZGQzOiBhZGQzLFxuICBhZGQ0OiBhZGQ0LFxuICBzdWJ0cmFjdDI6IHN1YnRyYWN0MixcbiAgc3VidHJhY3QzOiBzdWJ0cmFjdDMsXG4gIHN1YnRyYWN0NDogc3VidHJhY3Q0LFxuICB0cmFuc2Zvcm0yOiB0cmFuc2Zvcm0yLFxuICB0cmFuc2Zvcm0zOiB0cmFuc2Zvcm0zLFxuICB0cmFuc2Zvcm00OiB0cmFuc2Zvcm00XG59O1xuIl19
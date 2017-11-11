'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var vec3 = require('../maths/vec3');

var transform = vec3.transform;


function rotate(vertex, rotationAboutZAxisMatrix) {
  var vec = vertex; ///

  var mat3 = rotationAboutZAxisMatrix; ///

  vec = transform(vec, mat3);

  vertex = vec; ///

  return vertex;
}

function projectOntoXYPlane(vertex) {
  vertex = [].concat(_toConsumableArray(vertex.slice(0, 2)), [0]); ///

  return vertex;
}

module.exports = {
  rotate: rotate,
  projectOntoXYPlane: projectOntoXYPlane
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi91dGlsaXRpZXMvdmVydGV4LmpzIl0sIm5hbWVzIjpbInZlYzMiLCJyZXF1aXJlIiwidHJhbnNmb3JtIiwicm90YXRlIiwidmVydGV4Iiwicm90YXRpb25BYm91dFpBeGlzTWF0cml4IiwidmVjIiwibWF0MyIsInByb2plY3RPbnRvWFlQbGFuZSIsInNsaWNlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLGVBQVIsQ0FBYjs7SUFFUUMsUyxHQUFjRixJLENBQWRFLFM7OztBQUVSLFNBQVNDLE1BQVQsQ0FBZ0JDLE1BQWhCLEVBQXdCQyx3QkFBeEIsRUFBa0Q7QUFDaEQsTUFBSUMsTUFBTUYsTUFBVixDQURnRCxDQUM5Qjs7QUFFbEIsTUFBTUcsT0FBT0Ysd0JBQWIsQ0FIZ0QsQ0FHUjs7QUFFeENDLFFBQU1KLFVBQVVJLEdBQVYsRUFBZUMsSUFBZixDQUFOOztBQUVBSCxXQUFTRSxHQUFULENBUGdELENBT2xDOztBQUVkLFNBQU9GLE1BQVA7QUFDRDs7QUFFRCxTQUFTSSxrQkFBVCxDQUE0QkosTUFBNUIsRUFBb0M7QUFDbENBLHdDQUFhQSxPQUFPSyxLQUFQLENBQWEsQ0FBYixFQUFnQixDQUFoQixDQUFiLElBQWlDLENBQWpDLEdBRGtDLENBQ0k7O0FBRXRDLFNBQU9MLE1BQVA7QUFDRDs7QUFFRE0sT0FBT0MsT0FBUCxHQUFpQjtBQUNmUixVQUFRQSxNQURPO0FBRWZLLHNCQUFvQkE7QUFGTCxDQUFqQiIsImZpbGUiOiJ2ZXJ0ZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHZlYzMgPSByZXF1aXJlKCcuLi9tYXRocy92ZWMzJyk7XG5cbmNvbnN0IHsgdHJhbnNmb3JtIH0gPSB2ZWMzO1xuXG5mdW5jdGlvbiByb3RhdGUodmVydGV4LCByb3RhdGlvbkFib3V0WkF4aXNNYXRyaXgpIHtcbiAgbGV0IHZlYyA9IHZlcnRleDsgLy8vXG5cbiAgY29uc3QgbWF0MyA9IHJvdGF0aW9uQWJvdXRaQXhpc01hdHJpeDsgIC8vL1xuXG4gIHZlYyA9IHRyYW5zZm9ybSh2ZWMsIG1hdDMpO1xuXG4gIHZlcnRleCA9IHZlYzsgLy8vXG5cbiAgcmV0dXJuIHZlcnRleDtcbn1cblxuZnVuY3Rpb24gcHJvamVjdE9udG9YWVBsYW5lKHZlcnRleCkge1xuICB2ZXJ0ZXggPSBbLi4udmVydGV4LnNsaWNlKDAsIDIpLCAwXTsgIC8vL1xuICBcbiAgcmV0dXJuIHZlcnRleDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHJvdGF0ZTogcm90YXRlLFxuICBwcm9qZWN0T250b1hZUGxhbmU6IHByb2plY3RPbnRvWFlQbGFuZVxufTtcbiJdfQ==
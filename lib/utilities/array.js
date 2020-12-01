"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.permute = permute;
exports.flatten = flatten;
exports.guarantee = guarantee;
exports.separate = exports.merge = exports.push = exports.fourth = exports.third = exports.second = exports.first = void 0;

var _necessary = require("necessary");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var first = _necessary.arrayUtilities.first,
    second = _necessary.arrayUtilities.second,
    third = _necessary.arrayUtilities.third,
    fourth = _necessary.arrayUtilities.fourth,
    push = _necessary.arrayUtilities.push,
    merge = _necessary.arrayUtilities.merge,
    separate = _necessary.arrayUtilities.separate;
exports.separate = separate;
exports.merge = merge;
exports.push = push;
exports.fourth = fourth;
exports.third = third;
exports.second = second;
exports.first = first;

function permute(array, places) {
  var length = array.length,
      cut = length - places,
      leadingElements = array.slice(0, cut),
      trailingElements = array.slice(cut);
  array = [].concat(_toConsumableArray(trailingElements), _toConsumableArray(leadingElements));
  return array;
}

function flatten(arrays) {
  return arrays.reduce(function (elements, array) {
    return elements.concat(array);
  }, []);
}

function guarantee(arrayOrElement) {
  arrayOrElement = arrayOrElement || [];
  return arrayOrElement instanceof Array ? arrayOrElement : [arrayOrElement];
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFycmF5LmpzIl0sIm5hbWVzIjpbImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJzZWNvbmQiLCJ0aGlyZCIsImZvdXJ0aCIsInB1c2giLCJtZXJnZSIsInNlcGFyYXRlIiwicGVybXV0ZSIsImFycmF5IiwicGxhY2VzIiwibGVuZ3RoIiwiY3V0IiwibGVhZGluZ0VsZW1lbnRzIiwic2xpY2UiLCJ0cmFpbGluZ0VsZW1lbnRzIiwiZmxhdHRlbiIsImFycmF5cyIsInJlZHVjZSIsImVsZW1lbnRzIiwiY29uY2F0IiwiZ3VhcmFudGVlIiwiYXJyYXlPckVsZW1lbnQiLCJBcnJheSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQTs7Ozs7Ozs7OztJQUVlQSxLLEdBQXdEQyx5QixDQUF4REQsSztJQUFPRSxNLEdBQWlERCx5QixDQUFqREMsTTtJQUFRQyxLLEdBQXlDRix5QixDQUF6Q0UsSztJQUFPQyxNLEdBQWtDSCx5QixDQUFsQ0csTTtJQUFRQyxJLEdBQTBCSix5QixDQUExQkksSTtJQUFNQyxLLEdBQW9CTCx5QixDQUFwQkssSztJQUFPQyxRLEdBQWFOLHlCLENBQWJNLFE7Ozs7Ozs7OztBQUVuRCxTQUFTQyxPQUFULENBQWlCQyxLQUFqQixFQUF3QkMsTUFBeEIsRUFBZ0M7QUFDckMsTUFBTUMsTUFBTSxHQUFHRixLQUFLLENBQUNFLE1BQXJCO0FBQUEsTUFDTUMsR0FBRyxHQUFHRCxNQUFNLEdBQUdELE1BRHJCO0FBQUEsTUFFTUcsZUFBZSxHQUFHSixLQUFLLENBQUNLLEtBQU4sQ0FBWSxDQUFaLEVBQWVGLEdBQWYsQ0FGeEI7QUFBQSxNQUdNRyxnQkFBZ0IsR0FBR04sS0FBSyxDQUFDSyxLQUFOLENBQVlGLEdBQVosQ0FIekI7QUFLQUgsRUFBQUEsS0FBSyxnQ0FBUU0sZ0JBQVIsc0JBQTZCRixlQUE3QixFQUFMO0FBRUEsU0FBT0osS0FBUDtBQUNEOztBQUVNLFNBQVNPLE9BQVQsQ0FBaUJDLE1BQWpCLEVBQXlCO0FBQzlCLFNBQU9BLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjLFVBQUNDLFFBQUQsRUFBV1YsS0FBWDtBQUFBLFdBQXFCVSxRQUFRLENBQUNDLE1BQVQsQ0FBZ0JYLEtBQWhCLENBQXJCO0FBQUEsR0FBZCxFQUEyRCxFQUEzRCxDQUFQO0FBQ0Q7O0FBRU0sU0FBU1ksU0FBVCxDQUFtQkMsY0FBbkIsRUFBbUM7QUFDeENBLEVBQUFBLGNBQWMsR0FBR0EsY0FBYyxJQUFJLEVBQW5DO0FBRUEsU0FBUUEsY0FBYyxZQUFZQyxLQUEzQixHQUNFRCxjQURGLEdBRUcsQ0FBQ0EsY0FBRCxDQUZWO0FBR0QiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmV4cG9ydCBjb25zdCB7IGZpcnN0LCBzZWNvbmQsIHRoaXJkLCBmb3VydGgsIHB1c2gsIG1lcmdlLCBzZXBhcmF0ZSB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBmdW5jdGlvbiBwZXJtdXRlKGFycmF5LCBwbGFjZXMpIHtcbiAgY29uc3QgbGVuZ3RoID0gYXJyYXkubGVuZ3RoLFxuICAgICAgICBjdXQgPSBsZW5ndGggLSBwbGFjZXMsXG4gICAgICAgIGxlYWRpbmdFbGVtZW50cyA9IGFycmF5LnNsaWNlKDAsIGN1dCksXG4gICAgICAgIHRyYWlsaW5nRWxlbWVudHMgPSBhcnJheS5zbGljZShjdXQpO1xuXG4gIGFycmF5ID0gWyAuLi50cmFpbGluZ0VsZW1lbnRzLCAuLi5sZWFkaW5nRWxlbWVudHMgXTtcblxuICByZXR1cm4gYXJyYXk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmbGF0dGVuKGFycmF5cykge1xuICByZXR1cm4gYXJyYXlzLnJlZHVjZSgoZWxlbWVudHMsIGFycmF5KSA9PiBlbGVtZW50cy5jb25jYXQoYXJyYXkpLCBbXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBndWFyYW50ZWUoYXJyYXlPckVsZW1lbnQpIHtcbiAgYXJyYXlPckVsZW1lbnQgPSBhcnJheU9yRWxlbWVudCB8fCBbXTtcblxuICByZXR1cm4gKGFycmF5T3JFbGVtZW50IGluc3RhbmNlb2YgQXJyYXkpID9cbiAgICAgICAgICAgYXJyYXlPckVsZW1lbnQgOlxuICAgICAgICAgICAgW2FycmF5T3JFbGVtZW50XTtcbn1cbiJdfQ==
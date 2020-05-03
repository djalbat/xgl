"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.permute = permute;
exports.flatten = flatten;
exports.guarantee = guarantee;
exports.separate = exports.merge = exports.push = exports.fourth = exports.third = exports.second = exports.first = void 0;

var _necessary = require("necessary");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFycmF5LmpzIl0sIm5hbWVzIjpbImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJzZWNvbmQiLCJ0aGlyZCIsImZvdXJ0aCIsInB1c2giLCJtZXJnZSIsInNlcGFyYXRlIiwicGVybXV0ZSIsImFycmF5IiwicGxhY2VzIiwibGVuZ3RoIiwiY3V0IiwibGVhZGluZ0VsZW1lbnRzIiwic2xpY2UiLCJ0cmFpbGluZ0VsZW1lbnRzIiwiZmxhdHRlbiIsImFycmF5cyIsInJlZHVjZSIsImVsZW1lbnRzIiwiY29uY2F0IiwiZ3VhcmFudGVlIiwiYXJyYXlPckVsZW1lbnQiLCJBcnJheSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7SUFFZUEsSyxHQUF3REMseUIsQ0FBeERELEs7SUFBT0UsTSxHQUFpREQseUIsQ0FBakRDLE07SUFBUUMsSyxHQUF5Q0YseUIsQ0FBekNFLEs7SUFBT0MsTSxHQUFrQ0gseUIsQ0FBbENHLE07SUFBUUMsSSxHQUEwQkoseUIsQ0FBMUJJLEk7SUFBTUMsSyxHQUFvQkwseUIsQ0FBcEJLLEs7SUFBT0MsUSxHQUFhTix5QixDQUFiTSxROzs7Ozs7Ozs7QUFFbkQsU0FBU0MsT0FBVCxDQUFpQkMsS0FBakIsRUFBd0JDLE1BQXhCLEVBQWdDO0FBQ3JDLE1BQU1DLE1BQU0sR0FBR0YsS0FBSyxDQUFDRSxNQUFyQjtBQUFBLE1BQ01DLEdBQUcsR0FBR0QsTUFBTSxHQUFHRCxNQURyQjtBQUFBLE1BRU1HLGVBQWUsR0FBR0osS0FBSyxDQUFDSyxLQUFOLENBQVksQ0FBWixFQUFlRixHQUFmLENBRnhCO0FBQUEsTUFHTUcsZ0JBQWdCLEdBQUdOLEtBQUssQ0FBQ0ssS0FBTixDQUFZRixHQUFaLENBSHpCO0FBS0FILEVBQUFBLEtBQUssZ0NBQVFNLGdCQUFSLHNCQUE2QkYsZUFBN0IsRUFBTDtBQUVBLFNBQU9KLEtBQVA7QUFDRDs7QUFFTSxTQUFTTyxPQUFULENBQWlCQyxNQUFqQixFQUF5QjtBQUM5QixTQUFPQSxNQUFNLENBQUNDLE1BQVAsQ0FBYyxVQUFDQyxRQUFELEVBQVdWLEtBQVg7QUFBQSxXQUFxQlUsUUFBUSxDQUFDQyxNQUFULENBQWdCWCxLQUFoQixDQUFyQjtBQUFBLEdBQWQsRUFBMkQsRUFBM0QsQ0FBUDtBQUNEOztBQUVNLFNBQVNZLFNBQVQsQ0FBbUJDLGNBQW5CLEVBQW1DO0FBQ3hDQSxFQUFBQSxjQUFjLEdBQUdBLGNBQWMsSUFBSSxFQUFuQztBQUVBLFNBQVFBLGNBQWMsWUFBWUMsS0FBM0IsR0FDRUQsY0FERixHQUVHLENBQUNBLGNBQUQsQ0FGVjtBQUdEIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5leHBvcnQgY29uc3QgeyBmaXJzdCwgc2Vjb25kLCB0aGlyZCwgZm91cnRoLCBwdXNoLCBtZXJnZSwgc2VwYXJhdGUgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZnVuY3Rpb24gcGVybXV0ZShhcnJheSwgcGxhY2VzKSB7XG4gIGNvbnN0IGxlbmd0aCA9IGFycmF5Lmxlbmd0aCxcbiAgICAgICAgY3V0ID0gbGVuZ3RoIC0gcGxhY2VzLFxuICAgICAgICBsZWFkaW5nRWxlbWVudHMgPSBhcnJheS5zbGljZSgwLCBjdXQpLFxuICAgICAgICB0cmFpbGluZ0VsZW1lbnRzID0gYXJyYXkuc2xpY2UoY3V0KTtcblxuICBhcnJheSA9IFsgLi4udHJhaWxpbmdFbGVtZW50cywgLi4ubGVhZGluZ0VsZW1lbnRzIF07XG5cbiAgcmV0dXJuIGFycmF5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmxhdHRlbihhcnJheXMpIHtcbiAgcmV0dXJuIGFycmF5cy5yZWR1Y2UoKGVsZW1lbnRzLCBhcnJheSkgPT4gZWxlbWVudHMuY29uY2F0KGFycmF5KSwgW10pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ3VhcmFudGVlKGFycmF5T3JFbGVtZW50KSB7XG4gIGFycmF5T3JFbGVtZW50ID0gYXJyYXlPckVsZW1lbnQgfHwgW107XG5cbiAgcmV0dXJuIChhcnJheU9yRWxlbWVudCBpbnN0YW5jZW9mIEFycmF5KSA/XG4gICAgICAgICAgIGFycmF5T3JFbGVtZW50IDpcbiAgICAgICAgICAgIFthcnJheU9yRWxlbWVudF07XG59XG4iXX0=
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    add: function() {
        return add;
    },
    first: function() {
        return first;
    },
    flatten: function() {
        return flatten;
    },
    fourth: function() {
        return fourth;
    },
    guarantee: function() {
        return guarantee;
    },
    permute: function() {
        return permute;
    },
    push: function() {
        return push;
    },
    second: function() {
        return second;
    },
    separate: function() {
        return separate;
    },
    third: function() {
        return third;
    }
});
var _necessary = require("necessary");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
var first = _necessary.arrayUtilities.first, second = _necessary.arrayUtilities.second, third = _necessary.arrayUtilities.third, fourth = _necessary.arrayUtilities.fourth, push = _necessary.arrayUtilities.push, separate = _necessary.arrayUtilities.separate;
function add(arrayA, arrayB) {
    arrayB.forEach(function(elementB) {
        arrayA.push(elementB);
    });
}
function permute(array, places) {
    var length = array.length, cut = length - places, leadingElements = array.slice(0, cut), trailingElements = array.slice(cut);
    array = _to_consumable_array(trailingElements).concat(_to_consumable_array(leadingElements));
    return array;
}
function flatten(arrays) {
    return arrays.reduce(function(elements, array) {
        return elements.concat(array);
    }, []);
}
function guarantee(arrayOrElement) {
    arrayOrElement = arrayOrElement || [];
    return _instanceof(arrayOrElement, Array) ? arrayOrElement : [
        arrayOrElement
    ];
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvYXJyYXkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5leHBvcnQgY29uc3QgeyBmaXJzdCwgc2Vjb25kLCB0aGlyZCwgZm91cnRoLCBwdXNoLCBzZXBhcmF0ZSB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGQoYXJyYXlBLCBhcnJheUIpIHtcbiAgYXJyYXlCLmZvckVhY2goKGVsZW1lbnRCKSA9PiB7XG4gICAgYXJyYXlBLnB1c2goZWxlbWVudEIpO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBlcm11dGUoYXJyYXksIHBsYWNlcykge1xuICBjb25zdCBsZW5ndGggPSBhcnJheS5sZW5ndGgsXG4gICAgICAgIGN1dCA9IGxlbmd0aCAtIHBsYWNlcyxcbiAgICAgICAgbGVhZGluZ0VsZW1lbnRzID0gYXJyYXkuc2xpY2UoMCwgY3V0KSxcbiAgICAgICAgdHJhaWxpbmdFbGVtZW50cyA9IGFycmF5LnNsaWNlKGN1dCk7XG5cbiAgYXJyYXkgPSBbIC4uLnRyYWlsaW5nRWxlbWVudHMsIC4uLmxlYWRpbmdFbGVtZW50cyBdO1xuXG4gIHJldHVybiBhcnJheTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZsYXR0ZW4oYXJyYXlzKSB7XG4gIHJldHVybiBhcnJheXMucmVkdWNlKChlbGVtZW50cywgYXJyYXkpID0+IGVsZW1lbnRzLmNvbmNhdChhcnJheSksIFtdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGd1YXJhbnRlZShhcnJheU9yRWxlbWVudCkge1xuICBhcnJheU9yRWxlbWVudCA9IGFycmF5T3JFbGVtZW50IHx8IFtdO1xuXG4gIHJldHVybiAoYXJyYXlPckVsZW1lbnQgaW5zdGFuY2VvZiBBcnJheSkgP1xuICAgICAgICAgICAgYXJyYXlPckVsZW1lbnQgOlxuICAgICAgICAgICAgIFsgYXJyYXlPckVsZW1lbnQgXTtcbn1cbiJdLCJuYW1lcyI6WyJhZGQiLCJmaXJzdCIsImZsYXR0ZW4iLCJmb3VydGgiLCJndWFyYW50ZWUiLCJwZXJtdXRlIiwicHVzaCIsInNlY29uZCIsInNlcGFyYXRlIiwidGhpcmQiLCJhcnJheVV0aWxpdGllcyIsImFycmF5QSIsImFycmF5QiIsImZvckVhY2giLCJlbGVtZW50QiIsImFycmF5IiwicGxhY2VzIiwibGVuZ3RoIiwiY3V0IiwibGVhZGluZ0VsZW1lbnRzIiwic2xpY2UiLCJ0cmFpbGluZ0VsZW1lbnRzIiwiYXJyYXlzIiwicmVkdWNlIiwiZWxlbWVudHMiLCJjb25jYXQiLCJhcnJheU9yRWxlbWVudCIsIkFycmF5Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFNZ0JBLEdBQUc7ZUFBSEE7O0lBRkRDLEtBQUs7ZUFBTEE7O0lBbUJDQyxPQUFPO2VBQVBBOztJQW5CcUJDLE1BQU07ZUFBTkE7O0lBdUJyQkMsU0FBUztlQUFUQTs7SUFmQUMsT0FBTztlQUFQQTs7SUFSNkJDLElBQUk7ZUFBSkE7O0lBQXZCQyxNQUFNO2VBQU5BOztJQUE2QkMsUUFBUTtlQUFSQTs7SUFBckJDLEtBQUs7ZUFBTEE7Ozt5QkFGQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXhCLElBQVFSLFFBQWlEUyx5QkFBYyxDQUEvRFQsT0FBT00sU0FBMENHLHlCQUFjLENBQXhESCxRQUFRRSxRQUFrQ0MseUJBQWMsQ0FBaERELE9BQU9OLFNBQTJCTyx5QkFBYyxDQUF6Q1AsUUFBUUcsT0FBbUJJLHlCQUFjLENBQWpDSixNQUFNRSxXQUFhRSx5QkFBYyxDQUEzQkY7QUFFNUMsU0FBU1IsSUFBSVcsTUFBTSxFQUFFQyxNQUFNO0lBQ2hDQSxPQUFPQyxPQUFPLENBQUMsU0FBQ0M7UUFDZEgsT0FBT0wsSUFBSSxDQUFDUTtJQUNkO0FBQ0Y7QUFFTyxTQUFTVCxRQUFRVSxLQUFLLEVBQUVDLE1BQU07SUFDbkMsSUFBTUMsU0FBU0YsTUFBTUUsTUFBTSxFQUNyQkMsTUFBTUQsU0FBU0QsUUFDZkcsa0JBQWtCSixNQUFNSyxLQUFLLENBQUMsR0FBR0YsTUFDakNHLG1CQUFtQk4sTUFBTUssS0FBSyxDQUFDRjtJQUVyQ0gsUUFBUSxBQUFFLHFCQUFHTSx5QkFBa0IscUJBQUdGO0lBRWxDLE9BQU9KO0FBQ1Q7QUFFTyxTQUFTYixRQUFRb0IsTUFBTTtJQUM1QixPQUFPQSxPQUFPQyxNQUFNLENBQUMsU0FBQ0MsVUFBVVQ7ZUFBVVMsU0FBU0MsTUFBTSxDQUFDVjtPQUFRLEVBQUU7QUFDdEU7QUFFTyxTQUFTWCxVQUFVc0IsY0FBYztJQUN0Q0EsaUJBQWlCQSxrQkFBa0IsRUFBRTtJQUVyQyxPQUFPLEFBQUNBLEFBQWMsWUFBZEEsZ0JBQTBCQyxTQUN4QkQsaUJBQ0M7UUFBRUE7S0FBZ0I7QUFDL0IifQ==
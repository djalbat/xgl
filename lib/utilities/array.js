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
    merge: function() {
        return merge;
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
var first = _necessary.arrayUtilities.first, second = _necessary.arrayUtilities.second, third = _necessary.arrayUtilities.third, fourth = _necessary.arrayUtilities.fourth, push = _necessary.arrayUtilities.push, merge = _necessary.arrayUtilities.merge, separate = _necessary.arrayUtilities.separate;
function add(array, element) {
    array.push(element);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvYXJyYXkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5leHBvcnQgY29uc3QgeyBmaXJzdCwgc2Vjb25kLCB0aGlyZCwgZm91cnRoLCBwdXNoLCBtZXJnZSwgc2VwYXJhdGUgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkKGFycmF5LCBlbGVtZW50KSB7XG4gIGFycmF5LnB1c2goZWxlbWVudCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwZXJtdXRlKGFycmF5LCBwbGFjZXMpIHtcbiAgY29uc3QgbGVuZ3RoID0gYXJyYXkubGVuZ3RoLFxuICAgICAgICBjdXQgPSBsZW5ndGggLSBwbGFjZXMsXG4gICAgICAgIGxlYWRpbmdFbGVtZW50cyA9IGFycmF5LnNsaWNlKDAsIGN1dCksXG4gICAgICAgIHRyYWlsaW5nRWxlbWVudHMgPSBhcnJheS5zbGljZShjdXQpO1xuXG4gIGFycmF5ID0gWyAuLi50cmFpbGluZ0VsZW1lbnRzLCAuLi5sZWFkaW5nRWxlbWVudHMgXTtcblxuICByZXR1cm4gYXJyYXk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmbGF0dGVuKGFycmF5cykge1xuICByZXR1cm4gYXJyYXlzLnJlZHVjZSgoZWxlbWVudHMsIGFycmF5KSA9PiBlbGVtZW50cy5jb25jYXQoYXJyYXkpLCBbXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBndWFyYW50ZWUoYXJyYXlPckVsZW1lbnQpIHtcbiAgYXJyYXlPckVsZW1lbnQgPSBhcnJheU9yRWxlbWVudCB8fCBbXTtcblxuICByZXR1cm4gKGFycmF5T3JFbGVtZW50IGluc3RhbmNlb2YgQXJyYXkpID9cbiAgICAgICAgICAgIGFycmF5T3JFbGVtZW50IDpcbiAgICAgICAgICAgICBbIGFycmF5T3JFbGVtZW50IF07XG59XG4iXSwibmFtZXMiOlsiYWRkIiwiZmlyc3QiLCJmbGF0dGVuIiwiZm91cnRoIiwiZ3VhcmFudGVlIiwibWVyZ2UiLCJwZXJtdXRlIiwicHVzaCIsInNlY29uZCIsInNlcGFyYXRlIiwidGhpcmQiLCJhcnJheVV0aWxpdGllcyIsImFycmF5IiwiZWxlbWVudCIsInBsYWNlcyIsImxlbmd0aCIsImN1dCIsImxlYWRpbmdFbGVtZW50cyIsInNsaWNlIiwidHJhaWxpbmdFbGVtZW50cyIsImFycmF5cyIsInJlZHVjZSIsImVsZW1lbnRzIiwiY29uY2F0IiwiYXJyYXlPckVsZW1lbnQiLCJBcnJheSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBTWdCQSxHQUFHO2VBQUhBOztJQUZEQyxLQUFLO2VBQUxBOztJQWlCQ0MsT0FBTztlQUFQQTs7SUFqQnFCQyxNQUFNO2VBQU5BOztJQXFCckJDLFNBQVM7ZUFBVEE7O0lBckJtQ0MsS0FBSztlQUFMQTs7SUFNbkNDLE9BQU87ZUFBUEE7O0lBTjZCQyxJQUFJO2VBQUpBOztJQUF2QkMsTUFBTTtlQUFOQTs7SUFBb0NDLFFBQVE7ZUFBUkE7O0lBQTVCQyxLQUFLO2VBQUxBOzs7eUJBRkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV4QixJQUFRVCxRQUF3RFUseUJBQWMsQ0FBdEVWLE9BQU9PLFNBQWlERyx5QkFBYyxDQUEvREgsUUFBUUUsUUFBeUNDLHlCQUFjLENBQXZERCxPQUFPUCxTQUFrQ1EseUJBQWMsQ0FBaERSLFFBQVFJLE9BQTBCSSx5QkFBYyxDQUF4Q0osTUFBTUYsUUFBb0JNLHlCQUFjLENBQWxDTixPQUFPSSxXQUFhRSx5QkFBYyxDQUEzQkY7QUFFbkQsU0FBU1QsSUFBSVksS0FBSyxFQUFFQyxPQUFPO0lBQ2hDRCxNQUFNTCxJQUFJLENBQUNNO0FBQ2I7QUFFTyxTQUFTUCxRQUFRTSxLQUFLLEVBQUVFLE1BQU07SUFDbkMsSUFBTUMsU0FBU0gsTUFBTUcsTUFBTSxFQUNyQkMsTUFBTUQsU0FBU0QsUUFDZkcsa0JBQWtCTCxNQUFNTSxLQUFLLENBQUMsR0FBR0YsTUFDakNHLG1CQUFtQlAsTUFBTU0sS0FBSyxDQUFDRjtJQUVyQ0osUUFBUSxBQUFFLHFCQUFHTyx5QkFBa0IscUJBQUdGO0lBRWxDLE9BQU9MO0FBQ1Q7QUFFTyxTQUFTVixRQUFRa0IsTUFBTTtJQUM1QixPQUFPQSxPQUFPQyxNQUFNLENBQUMsU0FBQ0MsVUFBVVY7ZUFBVVUsU0FBU0MsTUFBTSxDQUFDWDtPQUFRLEVBQUU7QUFDdEU7QUFFTyxTQUFTUixVQUFVb0IsY0FBYztJQUN0Q0EsaUJBQWlCQSxrQkFBa0IsRUFBRTtJQUVyQyxPQUFPLEFBQUNBLEFBQWMsWUFBZEEsZ0JBQTBCQyxTQUN4QkQsaUJBQ0M7UUFBRUE7S0FBZ0I7QUFDL0IifQ==
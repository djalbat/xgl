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
        elements = elements.concat(array);
        return elements;
    }, []);
}
function guarantee(arrayOrElement) {
    arrayOrElement = arrayOrElement || [];
    return _instanceof(arrayOrElement, Array) ? arrayOrElement : [
        arrayOrElement
    ];
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvYXJyYXkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5leHBvcnQgY29uc3QgeyBmaXJzdCwgc2Vjb25kLCB0aGlyZCwgZm91cnRoLCBwdXNoLCBzZXBhcmF0ZSB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGQoYXJyYXlBLCBhcnJheUIpIHtcbiAgYXJyYXlCLmZvckVhY2goKGVsZW1lbnRCKSA9PiB7XG4gICAgYXJyYXlBLnB1c2goZWxlbWVudEIpO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBlcm11dGUoYXJyYXksIHBsYWNlcykge1xuICBjb25zdCBsZW5ndGggPSBhcnJheS5sZW5ndGgsXG4gICAgICAgIGN1dCA9IGxlbmd0aCAtIHBsYWNlcyxcbiAgICAgICAgbGVhZGluZ0VsZW1lbnRzID0gYXJyYXkuc2xpY2UoMCwgY3V0KSxcbiAgICAgICAgdHJhaWxpbmdFbGVtZW50cyA9IGFycmF5LnNsaWNlKGN1dCk7XG5cbiAgYXJyYXkgPSBbIC4uLnRyYWlsaW5nRWxlbWVudHMsIC4uLmxlYWRpbmdFbGVtZW50cyBdO1xuXG4gIHJldHVybiBhcnJheTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZsYXR0ZW4oYXJyYXlzKSB7XG4gIHJldHVybiBhcnJheXMucmVkdWNlKChlbGVtZW50cywgYXJyYXkpID0+IHtcbiAgICBlbGVtZW50cyA9IGVsZW1lbnRzLmNvbmNhdChhcnJheSk7XG5cbiAgICByZXR1cm4gZWxlbWVudHM7XG4gIH0sIFtdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGd1YXJhbnRlZShhcnJheU9yRWxlbWVudCkge1xuICBhcnJheU9yRWxlbWVudCA9IGFycmF5T3JFbGVtZW50IHx8IFtdO1xuXG4gIHJldHVybiAoYXJyYXlPckVsZW1lbnQgaW5zdGFuY2VvZiBBcnJheSkgP1xuICAgICAgICAgICAgYXJyYXlPckVsZW1lbnQgOlxuICAgICAgICAgICAgIFsgYXJyYXlPckVsZW1lbnQgXTtcbn1cbiJdLCJuYW1lcyI6WyJhZGQiLCJmaXJzdCIsImZsYXR0ZW4iLCJmb3VydGgiLCJndWFyYW50ZWUiLCJwZXJtdXRlIiwicHVzaCIsInNlY29uZCIsInNlcGFyYXRlIiwidGhpcmQiLCJhcnJheVV0aWxpdGllcyIsImFycmF5QSIsImFycmF5QiIsImZvckVhY2giLCJlbGVtZW50QiIsImFycmF5IiwicGxhY2VzIiwibGVuZ3RoIiwiY3V0IiwibGVhZGluZ0VsZW1lbnRzIiwic2xpY2UiLCJ0cmFpbGluZ0VsZW1lbnRzIiwiYXJyYXlzIiwicmVkdWNlIiwiZWxlbWVudHMiLCJjb25jYXQiLCJhcnJheU9yRWxlbWVudCIsIkFycmF5Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFNZ0JBLEdBQUc7ZUFBSEE7O0lBRkRDLEtBQUs7ZUFBTEE7O0lBbUJDQyxPQUFPO2VBQVBBOztJQW5CcUJDLE1BQU07ZUFBTkE7O0lBMkJyQkMsU0FBUztlQUFUQTs7SUFuQkFDLE9BQU87ZUFBUEE7O0lBUjZCQyxJQUFJO2VBQUpBOztJQUF2QkMsTUFBTTtlQUFOQTs7SUFBNkJDLFFBQVE7ZUFBUkE7O0lBQXJCQyxLQUFLO2VBQUxBOzs7eUJBRkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV4QixJQUFRUixRQUFpRFMseUJBQWMsQ0FBL0RULE9BQU9NLFNBQTBDRyx5QkFBYyxDQUF4REgsUUFBUUUsUUFBa0NDLHlCQUFjLENBQWhERCxPQUFPTixTQUEyQk8seUJBQWMsQ0FBekNQLFFBQVFHLE9BQW1CSSx5QkFBYyxDQUFqQ0osTUFBTUUsV0FBYUUseUJBQWMsQ0FBM0JGO0FBRTVDLFNBQVNSLElBQUlXLE1BQU0sRUFBRUMsTUFBTTtJQUNoQ0EsT0FBT0MsT0FBTyxDQUFDLFNBQUNDO1FBQ2RILE9BQU9MLElBQUksQ0FBQ1E7SUFDZDtBQUNGO0FBRU8sU0FBU1QsUUFBUVUsS0FBSyxFQUFFQyxNQUFNO0lBQ25DLElBQU1DLFNBQVNGLE1BQU1FLE1BQU0sRUFDckJDLE1BQU1ELFNBQVNELFFBQ2ZHLGtCQUFrQkosTUFBTUssS0FBSyxDQUFDLEdBQUdGLE1BQ2pDRyxtQkFBbUJOLE1BQU1LLEtBQUssQ0FBQ0Y7SUFFckNILFFBQVEsQUFBRSxxQkFBR00seUJBQWtCLHFCQUFHRjtJQUVsQyxPQUFPSjtBQUNUO0FBRU8sU0FBU2IsUUFBUW9CLE1BQU07SUFDNUIsT0FBT0EsT0FBT0MsTUFBTSxDQUFDLFNBQUNDLFVBQVVUO1FBQzlCUyxXQUFXQSxTQUFTQyxNQUFNLENBQUNWO1FBRTNCLE9BQU9TO0lBQ1QsR0FBRyxFQUFFO0FBQ1A7QUFFTyxTQUFTcEIsVUFBVXNCLGNBQWM7SUFDdENBLGlCQUFpQkEsa0JBQWtCLEVBQUU7SUFFckMsT0FBTyxBQUFDQSxBQUFjLFlBQWRBLGdCQUEwQkMsU0FDeEJELGlCQUNDO1FBQUVBO0tBQWdCO0FBQy9CIn0=
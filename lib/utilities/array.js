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
    first: function() {
        return first;
    },
    second: function() {
        return second;
    },
    third: function() {
        return third;
    },
    fourth: function() {
        return fourth;
    },
    push: function() {
        return push;
    },
    merge: function() {
        return merge;
    },
    separate: function() {
        return separate;
    },
    add: function() {
        return add;
    },
    permute: function() {
        return permute;
    },
    flatten: function() {
        return flatten;
    },
    guarantee: function() {
        return guarantee;
    }
});
var _necessary = require("necessary");
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
var first = _necessary.arrayUtilities.first, second = _necessary.arrayUtilities.second, third = _necessary.arrayUtilities.third, fourth = _necessary.arrayUtilities.fourth, push = _necessary.arrayUtilities.push, merge = _necessary.arrayUtilities.merge, separate = _necessary.arrayUtilities.separate;
function add(array, element) {
    array.push(element);
}
function permute(array, places) {
    var length = array.length, cut = length - places, leadingElements = array.slice(0, cut), trailingElements = array.slice(cut);
    array = _toConsumableArray(trailingElements).concat(_toConsumableArray(leadingElements));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvYXJyYXkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5leHBvcnQgY29uc3QgeyBmaXJzdCwgc2Vjb25kLCB0aGlyZCwgZm91cnRoLCBwdXNoLCBtZXJnZSwgc2VwYXJhdGUgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkKGFycmF5LCBlbGVtZW50KSB7XG4gIGFycmF5LnB1c2goZWxlbWVudCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwZXJtdXRlKGFycmF5LCBwbGFjZXMpIHtcbiAgY29uc3QgbGVuZ3RoID0gYXJyYXkubGVuZ3RoLFxuICAgICAgICBjdXQgPSBsZW5ndGggLSBwbGFjZXMsXG4gICAgICAgIGxlYWRpbmdFbGVtZW50cyA9IGFycmF5LnNsaWNlKDAsIGN1dCksXG4gICAgICAgIHRyYWlsaW5nRWxlbWVudHMgPSBhcnJheS5zbGljZShjdXQpO1xuXG4gIGFycmF5ID0gWyAuLi50cmFpbGluZ0VsZW1lbnRzLCAuLi5sZWFkaW5nRWxlbWVudHMgXTtcblxuICByZXR1cm4gYXJyYXk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmbGF0dGVuKGFycmF5cykge1xuICByZXR1cm4gYXJyYXlzLnJlZHVjZSgoZWxlbWVudHMsIGFycmF5KSA9PiBlbGVtZW50cy5jb25jYXQoYXJyYXkpLCBbXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBndWFyYW50ZWUoYXJyYXlPckVsZW1lbnQpIHtcbiAgYXJyYXlPckVsZW1lbnQgPSBhcnJheU9yRWxlbWVudCB8fCBbXTtcblxuICByZXR1cm4gKGFycmF5T3JFbGVtZW50IGluc3RhbmNlb2YgQXJyYXkpID9cbiAgICAgICAgICAgIGFycmF5T3JFbGVtZW50IDpcbiAgICAgICAgICAgICBbIGFycmF5T3JFbGVtZW50IF07XG59XG4iXSwibmFtZXMiOlsiZmlyc3QiLCJzZWNvbmQiLCJ0aGlyZCIsImZvdXJ0aCIsInB1c2giLCJtZXJnZSIsInNlcGFyYXRlIiwiYWRkIiwicGVybXV0ZSIsImZsYXR0ZW4iLCJndWFyYW50ZWUiLCJhcnJheVV0aWxpdGllcyIsImFycmF5IiwiZWxlbWVudCIsInBsYWNlcyIsImxlbmd0aCIsImN1dCIsImxlYWRpbmdFbGVtZW50cyIsInNsaWNlIiwidHJhaWxpbmdFbGVtZW50cyIsImFycmF5cyIsInJlZHVjZSIsImVsZW1lbnRzIiwiY29uY2F0IiwiYXJyYXlPckVsZW1lbnQiLCJBcnJheSJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7Ozs7OztJQUlFQSxLQUFLO2VBQUxBLEtBQUs7O0lBQUVDLE1BQU07ZUFBTkEsTUFBTTs7SUFBRUMsS0FBSztlQUFMQSxLQUFLOztJQUFFQyxNQUFNO2VBQU5BLE1BQU07O0lBQUVDLElBQUk7ZUFBSkEsSUFBSTs7SUFBRUMsS0FBSztlQUFMQSxLQUFLOztJQUFFQyxRQUFRO2VBQVJBLFFBQVE7O0lBRWxEQyxHQUFHO2VBQUhBLEdBQUc7O0lBSUhDLE9BQU87ZUFBUEEsT0FBTzs7SUFXUEMsT0FBTztlQUFQQSxPQUFPOztJQUlQQyxTQUFTO2VBQVRBLFNBQVM7Ozt5QkF2Qk0sV0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRW5DLElBQVFWLEtBQUssR0FBbURXLFVBQWMsZUFBQSxDQUF0RVgsS0FBSyxFQUFFQyxNQUFNLEdBQTJDVSxVQUFjLGVBQUEsQ0FBL0RWLE1BQU0sRUFBRUMsS0FBSyxHQUFvQ1MsVUFBYyxlQUFBLENBQXZEVCxLQUFLLEVBQUVDLE1BQU0sR0FBNEJRLFVBQWMsZUFBQSxDQUFoRFIsTUFBTSxFQUFFQyxJQUFJLEdBQXNCTyxVQUFjLGVBQUEsQ0FBeENQLElBQUksRUFBRUMsS0FBSyxHQUFlTSxVQUFjLGVBQUEsQ0FBbENOLEtBQUssRUFBRUMsUUFBUSxHQUFLSyxVQUFjLGVBQUEsQ0FBM0JMLFFBQVEsQUFBb0I7QUFFL0UsU0FBU0MsR0FBRyxDQUFDSyxLQUFLLEVBQUVDLE9BQU8sRUFBRTtJQUNsQ0QsS0FBSyxDQUFDUixJQUFJLENBQUNTLE9BQU8sQ0FBQyxDQUFDO0NBQ3JCO0FBRU0sU0FBU0wsT0FBTyxDQUFDSSxLQUFLLEVBQUVFLE1BQU0sRUFBRTtJQUNyQyxJQUFNQyxNQUFNLEdBQUdILEtBQUssQ0FBQ0csTUFBTSxFQUNyQkMsR0FBRyxHQUFHRCxNQUFNLEdBQUdELE1BQU0sRUFDckJHLGVBQWUsR0FBR0wsS0FBSyxDQUFDTSxLQUFLLENBQUMsQ0FBQyxFQUFFRixHQUFHLENBQUMsRUFDckNHLGdCQUFnQixHQUFHUCxLQUFLLENBQUNNLEtBQUssQ0FBQ0YsR0FBRyxDQUFDLEFBQUM7SUFFMUNKLEtBQUssR0FBRyxBQUFFLG1CQUFHTyxnQkFBZ0IsQ0FBaEJBLFFBQWtCLG1CQUFHRixlQUFlLENBQWZBLENBQWlCLENBQUM7SUFFcEQsT0FBT0wsS0FBSyxDQUFDO0NBQ2Q7QUFFTSxTQUFTSCxPQUFPLENBQUNXLE1BQU0sRUFBRTtJQUM5QixPQUFPQSxNQUFNLENBQUNDLE1BQU0sQ0FBQyxTQUFDQyxRQUFRLEVBQUVWLEtBQUs7ZUFBS1UsUUFBUSxDQUFDQyxNQUFNLENBQUNYLEtBQUssQ0FBQztLQUFBLEVBQUUsRUFBRSxDQUFDLENBQUM7Q0FDdkU7QUFFTSxTQUFTRixTQUFTLENBQUNjLGNBQWMsRUFBRTtJQUN4Q0EsY0FBYyxHQUFHQSxjQUFjLElBQUksRUFBRSxDQUFDO0lBRXRDLE9BQU8sQUFBQ0EsQUFBYyxXQUFZQyxDQUExQkQsY0FBYyxFQUFZQyxLQUFLLENBQUEsR0FDN0JELGNBQWMsR0FDYjtRQUFFQSxjQUFjO0tBQUUsQ0FBQztDQUMvQiJ9
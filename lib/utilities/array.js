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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvYXJyYXkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5leHBvcnQgY29uc3QgeyBmaXJzdCwgc2Vjb25kLCB0aGlyZCwgZm91cnRoLCBwdXNoLCBtZXJnZSwgc2VwYXJhdGUgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkKGFycmF5LCBlbGVtZW50KSB7XG4gIGFycmF5LnB1c2goZWxlbWVudCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwZXJtdXRlKGFycmF5LCBwbGFjZXMpIHtcbiAgY29uc3QgbGVuZ3RoID0gYXJyYXkubGVuZ3RoLFxuICAgICAgICBjdXQgPSBsZW5ndGggLSBwbGFjZXMsXG4gICAgICAgIGxlYWRpbmdFbGVtZW50cyA9IGFycmF5LnNsaWNlKDAsIGN1dCksXG4gICAgICAgIHRyYWlsaW5nRWxlbWVudHMgPSBhcnJheS5zbGljZShjdXQpO1xuXG4gIGFycmF5ID0gWyAuLi50cmFpbGluZ0VsZW1lbnRzLCAuLi5sZWFkaW5nRWxlbWVudHMgXTtcblxuICByZXR1cm4gYXJyYXk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmbGF0dGVuKGFycmF5cykge1xuICByZXR1cm4gYXJyYXlzLnJlZHVjZSgoZWxlbWVudHMsIGFycmF5KSA9PiBlbGVtZW50cy5jb25jYXQoYXJyYXkpLCBbXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBndWFyYW50ZWUoYXJyYXlPckVsZW1lbnQpIHtcbiAgYXJyYXlPckVsZW1lbnQgPSBhcnJheU9yRWxlbWVudCB8fCBbXTtcblxuICByZXR1cm4gKGFycmF5T3JFbGVtZW50IGluc3RhbmNlb2YgQXJyYXkpID9cbiAgICAgICAgICAgIGFycmF5T3JFbGVtZW50IDpcbiAgICAgICAgICAgICBbIGFycmF5T3JFbGVtZW50IF07XG59XG4iXSwibmFtZXMiOlsiZmlyc3QiLCJzZWNvbmQiLCJ0aGlyZCIsImZvdXJ0aCIsInB1c2giLCJtZXJnZSIsInNlcGFyYXRlIiwiYWRkIiwicGVybXV0ZSIsImZsYXR0ZW4iLCJndWFyYW50ZWUiLCJhcnJheVV0aWxpdGllcyIsImFycmF5IiwiZWxlbWVudCIsInBsYWNlcyIsImxlbmd0aCIsImN1dCIsImxlYWRpbmdFbGVtZW50cyIsInNsaWNlIiwidHJhaWxpbmdFbGVtZW50cyIsImFycmF5cyIsInJlZHVjZSIsImVsZW1lbnRzIiwiY29uY2F0IiwiYXJyYXlPckVsZW1lbnQiLCJBcnJheSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBSWVBLEtBQUs7ZUFBTEE7O0lBQU9DLE1BQU07ZUFBTkE7O0lBQVFDLEtBQUs7ZUFBTEE7O0lBQU9DLE1BQU07ZUFBTkE7O0lBQVFDLElBQUk7ZUFBSkE7O0lBQU1DLEtBQUs7ZUFBTEE7O0lBQU9DLFFBQVE7ZUFBUkE7O0lBRTFDQyxHQUFHO2VBQUhBOztJQUlBQyxPQUFPO2VBQVBBOztJQVdBQyxPQUFPO2VBQVBBOztJQUlBQyxTQUFTO2VBQVRBOzs7eUJBdkJlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFeEIsSUFBUVYsUUFBd0RXLHlCQUFjLENBQXRFWCxPQUFPQyxTQUFpRFUseUJBQWMsQ0FBL0RWLFFBQVFDLFFBQXlDUyx5QkFBYyxDQUF2RFQsT0FBT0MsU0FBa0NRLHlCQUFjLENBQWhEUixRQUFRQyxPQUEwQk8seUJBQWMsQ0FBeENQLE1BQU1DLFFBQW9CTSx5QkFBYyxDQUFsQ04sT0FBT0MsV0FBYUsseUJBQWMsQ0FBM0JMO0FBRW5ELFNBQVNDLElBQUlLLEtBQUssRUFBRUMsT0FBTyxFQUFFO0lBQ2xDRCxNQUFNUixJQUFJLENBQUNTO0FBQ2I7QUFFTyxTQUFTTCxRQUFRSSxLQUFLLEVBQUVFLE1BQU0sRUFBRTtJQUNyQyxJQUFNQyxTQUFTSCxNQUFNRyxNQUFNLEVBQ3JCQyxNQUFNRCxTQUFTRCxRQUNmRyxrQkFBa0JMLE1BQU1NLEtBQUssQ0FBQyxHQUFHRixNQUNqQ0csbUJBQW1CUCxNQUFNTSxLQUFLLENBQUNGO0lBRXJDSixRQUFRLEFBQUUsbUJBQUdPLHlCQUFrQixtQkFBR0Y7SUFFbEMsT0FBT0w7QUFDVDtBQUVPLFNBQVNILFFBQVFXLE1BQU0sRUFBRTtJQUM5QixPQUFPQSxPQUFPQyxNQUFNLENBQUMsU0FBQ0MsVUFBVVY7ZUFBVVUsU0FBU0MsTUFBTSxDQUFDWDtPQUFRLEVBQUU7QUFDdEU7QUFFTyxTQUFTRixVQUFVYyxjQUFjLEVBQUU7SUFDeENBLGlCQUFpQkEsa0JBQWtCLEVBQUU7SUFFckMsT0FBTyxBQUFDQSxBQUFjLFlBQWRBLGdCQUEwQkMsU0FDeEJELGlCQUNDO1FBQUVBO0tBQWdCO0FBQy9CIn0=
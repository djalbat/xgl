"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.add = add;
exports.permute = permute;
exports.flatten = flatten;
exports.guarantee = guarantee;
exports.separate = exports.merge = exports.push = exports.fourth = exports.third = exports.second = exports.first = void 0;
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
        return right[Symbol.hasInstance](left);
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
exports.first = first;
exports.second = second;
exports.third = third;
exports.fourth = fourth;
exports.push = push;
exports.merge = merge;
exports.separate = separate;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvYXJyYXkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5leHBvcnQgY29uc3QgeyBmaXJzdCwgc2Vjb25kLCB0aGlyZCwgZm91cnRoLCBwdXNoLCBtZXJnZSwgc2VwYXJhdGUgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkKGFycmF5LCBlbGVtZW50KSB7XG4gIGFycmF5LnB1c2goZWxlbWVudCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwZXJtdXRlKGFycmF5LCBwbGFjZXMpIHtcbiAgY29uc3QgbGVuZ3RoID0gYXJyYXkubGVuZ3RoLFxuICAgICAgICBjdXQgPSBsZW5ndGggLSBwbGFjZXMsXG4gICAgICAgIGxlYWRpbmdFbGVtZW50cyA9IGFycmF5LnNsaWNlKDAsIGN1dCksXG4gICAgICAgIHRyYWlsaW5nRWxlbWVudHMgPSBhcnJheS5zbGljZShjdXQpO1xuXG4gIGFycmF5ID0gWyAuLi50cmFpbGluZ0VsZW1lbnRzLCAuLi5sZWFkaW5nRWxlbWVudHMgXTtcblxuICByZXR1cm4gYXJyYXk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmbGF0dGVuKGFycmF5cykge1xuICByZXR1cm4gYXJyYXlzLnJlZHVjZSgoZWxlbWVudHMsIGFycmF5KSA9PiBlbGVtZW50cy5jb25jYXQoYXJyYXkpLCBbXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBndWFyYW50ZWUoYXJyYXlPckVsZW1lbnQpIHtcbiAgYXJyYXlPckVsZW1lbnQgPSBhcnJheU9yRWxlbWVudCB8fCBbXTtcblxuICByZXR1cm4gKGFycmF5T3JFbGVtZW50IGluc3RhbmNlb2YgQXJyYXkpID9cbiAgICAgICAgICAgIGFycmF5T3JFbGVtZW50IDpcbiAgICAgICAgICAgICBbIGFycmF5T3JFbGVtZW50IF07XG59XG4iXSwibmFtZXMiOlsiYWRkIiwicGVybXV0ZSIsImZsYXR0ZW4iLCJndWFyYW50ZWUiLCJmaXJzdCIsInNlY29uZCIsInRoaXJkIiwiZm91cnRoIiwicHVzaCIsIm1lcmdlIiwic2VwYXJhdGUiLCJhcnJheSIsImVsZW1lbnQiLCJwbGFjZXMiLCJsZW5ndGgiLCJjdXQiLCJsZWFkaW5nRWxlbWVudHMiLCJzbGljZSIsInRyYWlsaW5nRWxlbWVudHMiLCJhcnJheXMiLCJyZWR1Y2UiLCJlbGVtZW50cyIsImNvbmNhdCIsImFycmF5T3JFbGVtZW50IiwiQXJyYXkiXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7UUFNSUEsR0FBRyxHQUFIQSxHQUFHO1FBSUhDLE9BQU8sR0FBUEEsT0FBTztRQVdQQyxPQUFPLEdBQVBBLE9BQU87UUFJUEMsU0FBUyxHQUFUQSxTQUFTOztBQXZCTSxHQUFXLENBQVgsVUFBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRW5DLEdBQUssQ0FBR0MsS0FBSyxHQUZXLFVBQVcsZ0JBRTNCQSxLQUFLLEVBQUVDLE1BQU0sR0FGRyxVQUFXLGdCQUVwQkEsTUFBTSxFQUFFQyxLQUFLLEdBRkosVUFBVyxnQkFFWkEsS0FBSyxFQUFFQyxNQUFNLEdBRlosVUFBVyxnQkFFTEEsTUFBTSxFQUFFQyxJQUFJLEdBRmxCLFVBQVcsZ0JBRUdBLElBQUksRUFBRUMsS0FBSyxHQUZ6QixVQUFXLGdCQUVTQSxLQUFLLEVBQUVDLFFBQVEsR0FGbkMsVUFBVyxnQkFFZ0JBLFFBQVE7UUFBbkROLEtBQUssR0FBTEEsS0FBSztRQUFFQyxNQUFNLEdBQU5BLE1BQU07UUFBRUMsS0FBSyxHQUFMQSxLQUFLO1FBQUVDLE1BQU0sR0FBTkEsTUFBTTtRQUFFQyxJQUFJLEdBQUpBLElBQUk7UUFBRUMsS0FBSyxHQUFMQSxLQUFLO1FBQUVDLFFBQVEsR0FBUkEsUUFBUTtTQUVsRFYsR0FBRyxDQUFDVyxLQUFLLEVBQUVDLE9BQU8sRUFBRSxDQUFDO0lBQ25DRCxLQUFLLENBQUNILElBQUksQ0FBQ0ksT0FBTztBQUNwQixDQUFDO1NBRWVYLE9BQU8sQ0FBQ1UsS0FBSyxFQUFFRSxNQUFNLEVBQUUsQ0FBQztJQUN0QyxHQUFLLENBQUNDLE1BQU0sR0FBR0gsS0FBSyxDQUFDRyxNQUFNLEVBQ3JCQyxHQUFHLEdBQUdELE1BQU0sR0FBR0QsTUFBTSxFQUNyQkcsZUFBZSxHQUFHTCxLQUFLLENBQUNNLEtBQUssQ0FBQyxDQUFDLEVBQUVGLEdBQUcsR0FDcENHLGdCQUFnQixHQUFHUCxLQUFLLENBQUNNLEtBQUssQ0FBQ0YsR0FBRztJQUV4Q0osS0FBSyxzQkFBUU8sZ0JBQWdCLDRCQUFLRixlQUFlO0lBRWpELE1BQU0sQ0FBQ0wsS0FBSztBQUNkLENBQUM7U0FFZVQsT0FBTyxDQUFDaUIsTUFBTSxFQUFFLENBQUM7SUFDL0IsTUFBTSxDQUFDQSxNQUFNLENBQUNDLE1BQU0sQ0FBQyxRQUFRLENBQVBDLFFBQVEsRUFBRVYsS0FBSztRQUFLVSxNQUFNLENBQU5BLFFBQVEsQ0FBQ0MsTUFBTSxDQUFDWCxLQUFLO09BQUcsQ0FBQyxDQUFDO0FBQ3RFLENBQUM7U0FFZVIsU0FBUyxDQUFDb0IsY0FBYyxFQUFFLENBQUM7SUFDekNBLGNBQWMsR0FBR0EsY0FBYyxJQUFJLENBQUMsQ0FBQztJQUVyQyxNQUFNLENBQUVBLFdBQStCLENBQS9CQSxjQUFjLEVBQVlDLEtBQUssSUFDN0JELGNBQWMsR0FDYixDQUFDO1FBQUNBLGNBQWM7SUFBQyxDQUFDO0FBQy9CLENBQUMifQ==
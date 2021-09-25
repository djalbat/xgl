"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.add = add;
exports.permute = permute;
exports.flatten = flatten;
exports.guarantee = guarantee;
exports.third = exports.second = exports.push = exports.separate = exports.first = exports.merge = exports.fourth = void 0;
var _necessary = require("necessary");
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
        for(var i = 0, arr2 = new Array(arr.length); i < arr.length; i++){
            arr2[i] = arr[i];
        }
        return arr2;
    }
}
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
}
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvYXJyYXkuanMiXSwibmFtZXMiOlsiYXJyYXlVdGlsaXRpZXMiLCJmaXJzdCIsInNlY29uZCIsInRoaXJkIiwiZm91cnRoIiwicHVzaCIsIm1lcmdlIiwic2VwYXJhdGUiLCJhZGQiLCJhcnJheSIsImVsZW1lbnQiLCJwZXJtdXRlIiwicGxhY2VzIiwibGVuZ3RoIiwiY3V0IiwibGVhZGluZ0VsZW1lbnRzIiwic2xpY2UiLCJ0cmFpbGluZ0VsZW1lbnRzIiwiZmxhdHRlbiIsImFycmF5cyIsInJlZHVjZSIsImVsZW1lbnRzIiwiY29uY2F0IiwiZ3VhcmFudGVlIiwiYXJyYXlPckVsZW1lbnQiLCJBcnJheSJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7OztRQU1JLEdBQUcsR0FBSCxHQUFHO1FBSUgsT0FBTyxHQUFQLE9BQU87UUFXUCxPQUFPLEdBQVAsT0FBTztRQUlQLFNBQVMsR0FBVCxTQUFTOztBQXZCTSxHQUFXLENBQVgsVUFBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVuQyxHQUFLLENBQUcsS0FBSyxHQUZXLFVBQVcsZ0JBRTNCLEtBQUssRUFBRSxNQUFNLEdBRkcsVUFBVyxnQkFFcEIsTUFBTSxFQUFFLEtBQUssR0FGSixVQUFXLGdCQUVaLEtBQUssRUFBRSxNQUFNLEdBRlosVUFBVyxnQkFFTCxNQUFNLEVBQUUsSUFBSSxHQUZsQixVQUFXLGdCQUVHLElBQUksRUFBRSxLQUFLLEdBRnpCLFVBQVcsZ0JBRVMsS0FBSyxFQUFFLFFBQVEsR0FGbkMsVUFBVyxnQkFFZ0IsUUFBUTtRQUFuRCxLQUFLLEdBQUwsS0FBSztRQUFFLE1BQU0sR0FBTixNQUFNO1FBQUUsS0FBSyxHQUFMLEtBQUs7UUFBRSxNQUFNLEdBQU4sTUFBTTtRQUFFLElBQUksR0FBSixJQUFJO1FBQUUsS0FBSyxHQUFMLEtBQUs7UUFBRSxRQUFRLEdBQVIsUUFBUTtTQUVsRCxHQUFHLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxDQUFDO0lBQ25DLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTztBQUNwQixDQUFDO1NBRWUsT0FBTyxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsQ0FBQztJQUN0QyxHQUFLLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQ3JCLEdBQUcsR0FBRyxNQUFNLEdBQUcsTUFBTSxFQUNyQixlQUFlLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsR0FBRyxHQUNwQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUc7SUFFeEMsS0FBSyxzQkFBUSxnQkFBZ0IsNEJBQUssZUFBZTtJQUVqRCxNQUFNLENBQUMsS0FBSztBQUNkLENBQUM7U0FFZSxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDL0IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFQLFFBQVEsRUFBRSxLQUFLO1FBQUssTUFBTSxDQUFOLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSztPQUFHLENBQUMsQ0FBQztBQUN0RSxDQUFDO1NBRWUsU0FBUyxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3pDLGNBQWMsR0FBRyxjQUFjLElBQUksQ0FBQyxDQUFDO0lBRXJDLE1BQU0sQ0FBRSxXQUErQixDQUEvQixjQUFjLEVBQVksS0FBSyxJQUM3QixjQUFjLEdBQ2IsQ0FBQztRQUFDLGNBQWM7SUFBQyxDQUFDO0FBQy9CLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmV4cG9ydCBjb25zdCB7IGZpcnN0LCBzZWNvbmQsIHRoaXJkLCBmb3VydGgsIHB1c2gsIG1lcmdlLCBzZXBhcmF0ZSB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGQoYXJyYXksIGVsZW1lbnQpIHtcbiAgYXJyYXkucHVzaChlbGVtZW50KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBlcm11dGUoYXJyYXksIHBsYWNlcykge1xuICBjb25zdCBsZW5ndGggPSBhcnJheS5sZW5ndGgsXG4gICAgICAgIGN1dCA9IGxlbmd0aCAtIHBsYWNlcyxcbiAgICAgICAgbGVhZGluZ0VsZW1lbnRzID0gYXJyYXkuc2xpY2UoMCwgY3V0KSxcbiAgICAgICAgdHJhaWxpbmdFbGVtZW50cyA9IGFycmF5LnNsaWNlKGN1dCk7XG5cbiAgYXJyYXkgPSBbIC4uLnRyYWlsaW5nRWxlbWVudHMsIC4uLmxlYWRpbmdFbGVtZW50cyBdO1xuXG4gIHJldHVybiBhcnJheTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZsYXR0ZW4oYXJyYXlzKSB7XG4gIHJldHVybiBhcnJheXMucmVkdWNlKChlbGVtZW50cywgYXJyYXkpID0+IGVsZW1lbnRzLmNvbmNhdChhcnJheSksIFtdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGd1YXJhbnRlZShhcnJheU9yRWxlbWVudCkge1xuICBhcnJheU9yRWxlbWVudCA9IGFycmF5T3JFbGVtZW50IHx8IFtdO1xuXG4gIHJldHVybiAoYXJyYXlPckVsZW1lbnQgaW5zdGFuY2VvZiBBcnJheSkgP1xuICAgICAgICAgICAgYXJyYXlPckVsZW1lbnQgOlxuICAgICAgICAgICAgIFsgYXJyYXlPckVsZW1lbnQgXTtcbn1cbiJdfQ==
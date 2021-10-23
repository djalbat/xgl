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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvYXJyYXkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5leHBvcnQgY29uc3QgeyBmaXJzdCwgc2Vjb25kLCB0aGlyZCwgZm91cnRoLCBwdXNoLCBtZXJnZSwgc2VwYXJhdGUgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkKGFycmF5LCBlbGVtZW50KSB7XG4gIGFycmF5LnB1c2goZWxlbWVudCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwZXJtdXRlKGFycmF5LCBwbGFjZXMpIHtcbiAgY29uc3QgbGVuZ3RoID0gYXJyYXkubGVuZ3RoLFxuICAgICAgICBjdXQgPSBsZW5ndGggLSBwbGFjZXMsXG4gICAgICAgIGxlYWRpbmdFbGVtZW50cyA9IGFycmF5LnNsaWNlKDAsIGN1dCksXG4gICAgICAgIHRyYWlsaW5nRWxlbWVudHMgPSBhcnJheS5zbGljZShjdXQpO1xuXG4gIGFycmF5ID0gWyAuLi50cmFpbGluZ0VsZW1lbnRzLCAuLi5sZWFkaW5nRWxlbWVudHMgXTtcblxuICByZXR1cm4gYXJyYXk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmbGF0dGVuKGFycmF5cykge1xuICByZXR1cm4gYXJyYXlzLnJlZHVjZSgoZWxlbWVudHMsIGFycmF5KSA9PiBlbGVtZW50cy5jb25jYXQoYXJyYXkpLCBbXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBndWFyYW50ZWUoYXJyYXlPckVsZW1lbnQpIHtcbiAgYXJyYXlPckVsZW1lbnQgPSBhcnJheU9yRWxlbWVudCB8fCBbXTtcblxuICByZXR1cm4gKGFycmF5T3JFbGVtZW50IGluc3RhbmNlb2YgQXJyYXkpID9cbiAgICAgICAgICAgIGFycmF5T3JFbGVtZW50IDpcbiAgICAgICAgICAgICBbIGFycmF5T3JFbGVtZW50IF07XG59XG4iXSwibmFtZXMiOlsiYWRkIiwicGVybXV0ZSIsImZsYXR0ZW4iLCJndWFyYW50ZWUiLCJmaXJzdCIsInNlY29uZCIsInRoaXJkIiwiZm91cnRoIiwicHVzaCIsIm1lcmdlIiwic2VwYXJhdGUiLCJhcnJheSIsImVsZW1lbnQiLCJwbGFjZXMiLCJsZW5ndGgiLCJjdXQiLCJsZWFkaW5nRWxlbWVudHMiLCJzbGljZSIsInRyYWlsaW5nRWxlbWVudHMiLCJhcnJheXMiLCJyZWR1Y2UiLCJlbGVtZW50cyIsImNvbmNhdCIsImFycmF5T3JFbGVtZW50IiwiQXJyYXkiXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7UUFNSUEsR0FBRyxHQUFIQSxHQUFHO1FBSUhDLE9BQU8sR0FBUEEsT0FBTztRQVdQQyxPQUFPLEdBQVBBLE9BQU87UUFJUEMsU0FBUyxHQUFUQSxTQUFTOztBQXZCTSxHQUFXLENBQVgsVUFBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVuQyxHQUFLLENBQUdDLEtBQUssR0FGVyxVQUFXLGdCQUUzQkEsS0FBSyxFQUFFQyxNQUFNLEdBRkcsVUFBVyxnQkFFcEJBLE1BQU0sRUFBRUMsS0FBSyxHQUZKLFVBQVcsZ0JBRVpBLEtBQUssRUFBRUMsTUFBTSxHQUZaLFVBQVcsZ0JBRUxBLE1BQU0sRUFBRUMsSUFBSSxHQUZsQixVQUFXLGdCQUVHQSxJQUFJLEVBQUVDLEtBQUssR0FGekIsVUFBVyxnQkFFU0EsS0FBSyxFQUFFQyxRQUFRLEdBRm5DLFVBQVcsZ0JBRWdCQSxRQUFRO1FBQW5ETixLQUFLLEdBQUxBLEtBQUs7UUFBRUMsTUFBTSxHQUFOQSxNQUFNO1FBQUVDLEtBQUssR0FBTEEsS0FBSztRQUFFQyxNQUFNLEdBQU5BLE1BQU07UUFBRUMsSUFBSSxHQUFKQSxJQUFJO1FBQUVDLEtBQUssR0FBTEEsS0FBSztRQUFFQyxRQUFRLEdBQVJBLFFBQVE7U0FFbERWLEdBQUcsQ0FBQ1csS0FBSyxFQUFFQyxPQUFPLEVBQUUsQ0FBQztJQUNuQ0QsS0FBSyxDQUFDSCxJQUFJLENBQUNJLE9BQU87QUFDcEIsQ0FBQztTQUVlWCxPQUFPLENBQUNVLEtBQUssRUFBRUUsTUFBTSxFQUFFLENBQUM7SUFDdEMsR0FBSyxDQUFDQyxNQUFNLEdBQUdILEtBQUssQ0FBQ0csTUFBTSxFQUNyQkMsR0FBRyxHQUFHRCxNQUFNLEdBQUdELE1BQU0sRUFDckJHLGVBQWUsR0FBR0wsS0FBSyxDQUFDTSxLQUFLLENBQUMsQ0FBQyxFQUFFRixHQUFHLEdBQ3BDRyxnQkFBZ0IsR0FBR1AsS0FBSyxDQUFDTSxLQUFLLENBQUNGLEdBQUc7SUFFeENKLEtBQUssc0JBQVFPLGdCQUFnQiw0QkFBS0YsZUFBZTtJQUVqRCxNQUFNLENBQUNMLEtBQUs7QUFDZCxDQUFDO1NBRWVULE9BQU8sQ0FBQ2lCLE1BQU0sRUFBRSxDQUFDO0lBQy9CLE1BQU0sQ0FBQ0EsTUFBTSxDQUFDQyxNQUFNLENBQUMsUUFBUSxDQUFQQyxRQUFRLEVBQUVWLEtBQUs7UUFBS1UsTUFBTSxDQUFOQSxRQUFRLENBQUNDLE1BQU0sQ0FBQ1gsS0FBSztPQUFHLENBQUMsQ0FBQztBQUN0RSxDQUFDO1NBRWVSLFNBQVMsQ0FBQ29CLGNBQWMsRUFBRSxDQUFDO0lBQ3pDQSxjQUFjLEdBQUdBLGNBQWMsSUFBSSxDQUFDLENBQUM7SUFFckMsTUFBTSxDQUFFQSxXQUErQixDQUEvQkEsY0FBYyxFQUFZQyxLQUFLLElBQzdCRCxjQUFjLEdBQ2IsQ0FBQztRQUFDQSxjQUFjO0lBQUMsQ0FBQztBQUMvQixDQUFDIn0=
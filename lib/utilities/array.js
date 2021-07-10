"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvYXJyYXkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5leHBvcnQgY29uc3QgeyBmaXJzdCwgc2Vjb25kLCB0aGlyZCwgZm91cnRoLCBwdXNoLCBtZXJnZSwgc2VwYXJhdGUgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZnVuY3Rpb24gcGVybXV0ZShhcnJheSwgcGxhY2VzKSB7XG4gIGNvbnN0IGxlbmd0aCA9IGFycmF5Lmxlbmd0aCxcbiAgICAgICAgY3V0ID0gbGVuZ3RoIC0gcGxhY2VzLFxuICAgICAgICBsZWFkaW5nRWxlbWVudHMgPSBhcnJheS5zbGljZSgwLCBjdXQpLFxuICAgICAgICB0cmFpbGluZ0VsZW1lbnRzID0gYXJyYXkuc2xpY2UoY3V0KTtcblxuICBhcnJheSA9IFsgLi4udHJhaWxpbmdFbGVtZW50cywgLi4ubGVhZGluZ0VsZW1lbnRzIF07XG5cbiAgcmV0dXJuIGFycmF5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmxhdHRlbihhcnJheXMpIHtcbiAgcmV0dXJuIGFycmF5cy5yZWR1Y2UoKGVsZW1lbnRzLCBhcnJheSkgPT4gZWxlbWVudHMuY29uY2F0KGFycmF5KSwgW10pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ3VhcmFudGVlKGFycmF5T3JFbGVtZW50KSB7XG4gIGFycmF5T3JFbGVtZW50ID0gYXJyYXlPckVsZW1lbnQgfHwgW107XG5cbiAgcmV0dXJuIChhcnJheU9yRWxlbWVudCBpbnN0YW5jZW9mIEFycmF5KSA/XG4gICAgICAgICAgIGFycmF5T3JFbGVtZW50IDpcbiAgICAgICAgICAgIFthcnJheU9yRWxlbWVudF07XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7OztRQU1JLE9BQU8sR0FBUCxPQUFPO1FBV1AsT0FBTyxHQUFQLE9BQU87UUFJUCxTQUFTLEdBQVQsU0FBUzs7QUFuQk0sR0FBVyxDQUFYLFVBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbkMsR0FBSyxDQUFHLEtBQUssR0FGVyxVQUFXLGdCQUUzQixLQUFLLEVBQUUsTUFBTSxHQUZHLFVBQVcsZ0JBRXBCLE1BQU0sRUFBRSxLQUFLLEdBRkosVUFBVyxnQkFFWixLQUFLLEVBQUUsTUFBTSxHQUZaLFVBQVcsZ0JBRUwsTUFBTSxFQUFFLElBQUksR0FGbEIsVUFBVyxnQkFFRyxJQUFJLEVBQUUsS0FBSyxHQUZ6QixVQUFXLGdCQUVTLEtBQUssRUFBRSxRQUFRLEdBRm5DLFVBQVcsZ0JBRWdCLFFBQVE7UUFBbkQsS0FBSyxHQUFMLEtBQUs7UUFBRSxNQUFNLEdBQU4sTUFBTTtRQUFFLEtBQUssR0FBTCxLQUFLO1FBQUUsTUFBTSxHQUFOLE1BQU07UUFBRSxJQUFJLEdBQUosSUFBSTtRQUFFLEtBQUssR0FBTCxLQUFLO1FBQUUsUUFBUSxHQUFSLFFBQVE7U0FFbEQsT0FBTyxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsQ0FBQztJQUN0QyxHQUFLLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQ3JCLEdBQUcsR0FBRyxNQUFNLEdBQUcsTUFBTSxFQUNyQixlQUFlLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsR0FBRyxHQUNwQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUc7SUFFeEMsS0FBSyxzQkFBUSxnQkFBZ0IsNEJBQUssZUFBZTtXQUUxQyxLQUFLO0FBQ2QsQ0FBQztTQUVlLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztXQUN4QixNQUFNLENBQUMsTUFBTSxVQUFFLFFBQVEsRUFBRSxLQUFLO2VBQUssUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLOztBQUNqRSxDQUFDO1NBRWUsU0FBUyxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3pDLGNBQWMsR0FBRyxjQUFjO1dBRXZCLFdBQStCLENBQS9CLGNBQWMsRUFBWSxLQUFLLElBQzlCLGNBQWM7UUFDWixjQUFjOztBQUMzQixDQUFDIn0=
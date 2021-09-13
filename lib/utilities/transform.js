"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.composeTransform = composeTransform;
var _matrix = require("../maths/matrix");
var _vector = require("../maths/vector");
var _matrix1 = require("../utilities/matrix");
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
        for(var i = 0, arr2 = new Array(arr.length); i < arr.length; i++){
            arr2[i] = arr[i];
        }
        return arr2;
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
function composeTransform(scale, rotations, position) {
    var matrix = null;
    if (scale !== null) {
        var scaleMatrix = (0, _matrix1).scaleMatrixFromScale(scale);
        matrix = matrix === null ? scaleMatrix : (0, _matrix).multiply4(scaleMatrix, matrix);
    }
    if (rotations !== null) {
        var rotationsMatrix = (0, _matrix1).rotationsMatrixFromRotations(rotations);
        matrix = matrix === null ? rotationsMatrix : (0, _matrix).multiply4(rotationsMatrix, matrix);
    }
    if (position !== null) {
        var positionMatrix = (0, _matrix1).positionMatrixFromPosition(position);
        matrix = matrix === null ? positionMatrix : (0, _matrix).multiply4(positionMatrix, matrix);
    }
    var transform = matrix === null ? function(vector) {
        return vector;
    } : function(vector) {
        return (0, _vector).transform4(_toConsumableArray(vector).concat([
            1
        ]), matrix).slice(0, 3);
    };
    return transform;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvdHJhbnNmb3JtLmpzIl0sIm5hbWVzIjpbIm11bHRpcGx5NCIsInRyYW5zZm9ybTQiLCJzY2FsZU1hdHJpeEZyb21TY2FsZSIsInBvc2l0aW9uTWF0cml4RnJvbVBvc2l0aW9uIiwicm90YXRpb25zTWF0cml4RnJvbVJvdGF0aW9ucyIsImNvbXBvc2VUcmFuc2Zvcm0iLCJzY2FsZSIsInJvdGF0aW9ucyIsInBvc2l0aW9uIiwibWF0cml4Iiwic2NhbGVNYXRyaXgiLCJyb3RhdGlvbnNNYXRyaXgiLCJwb3NpdGlvbk1hdHJpeCIsInRyYW5zZm9ybSIsInZlY3RvciIsInNsaWNlIl0sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7O1FBTUksZ0JBQWdCLEdBQWhCLGdCQUFnQjtBQUpOLEdBQWlCLENBQWpCLE9BQWlCO0FBQ2hCLEdBQWlCLENBQWpCLE9BQWlCO0FBQ21ELEdBQXFCLENBQXJCLFFBQXFCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7U0FFcEcsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsQ0FBQztJQUM1RCxHQUFHLENBQUMsTUFBTSxHQUFHLElBQUk7SUFFakIsRUFBRSxFQUFFLEtBQUssS0FBSyxJQUFJLEVBQUUsQ0FBQztRQUNuQixHQUFLLENBQUMsV0FBVyxPQU4wRSxRQUFxQix1QkFNdkUsS0FBSztRQUU5QyxNQUFNLEdBQUksTUFBTSxLQUFLLElBQUksR0FDZCxXQUFXLE9BWEEsT0FBaUIsWUFZaEIsV0FBVyxFQUFFLE1BQU07SUFDNUMsQ0FBQztJQUVELEVBQUUsRUFBRSxTQUFTLEtBQUssSUFBSSxFQUFFLENBQUM7UUFDdkIsR0FBSyxDQUFDLGVBQWUsT0Fkc0UsUUFBcUIsK0JBYzNELFNBQVM7UUFFOUQsTUFBTSxHQUFJLE1BQU0sS0FBSyxJQUFJLEdBQ2QsZUFBZSxPQW5CSixPQUFpQixZQW9CaEIsZUFBZSxFQUFFLE1BQU07SUFFaEQsQ0FBQztJQUVELEVBQUUsRUFBRSxRQUFRLEtBQUssSUFBSSxFQUFFLENBQUM7UUFDdEIsR0FBSyxDQUFDLGNBQWMsT0F2QnVFLFFBQXFCLDZCQXVCOUQsUUFBUTtRQUUxRCxNQUFNLEdBQUksTUFBTSxLQUFLLElBQUksR0FDYixjQUFjLE9BNUJKLE9BQWlCLFlBNkJmLGNBQWMsRUFBRSxNQUFNO0lBQ2hELENBQUM7SUFFRCxHQUFLLENBQUMsU0FBUyxHQUFJLE1BQU0sS0FBSyxJQUFJLEdBQ2QsUUFBUSxDQUFQLE1BQU07UUFBSyxNQUFNLENBQU4sTUFBTTtRQUNoQixRQUFRLENBQVAsTUFBTTtRQUFLLE1BQU0sS0FqQ2YsT0FBaUIsZ0NBaUNRLE1BQU0sU0FBWCxDQUFDO1lBQVksQ0FBQztRQUFDLENBQUMsR0FBRSxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDOztJQUVqRixNQUFNLENBQUMsU0FBUztBQUNsQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IG11bHRpcGx5NCB9IGZyb20gXCIuLi9tYXRocy9tYXRyaXhcIjtcbmltcG9ydCB7IHRyYW5zZm9ybTQgfSBmcm9tIFwiLi4vbWF0aHMvdmVjdG9yXCI7XG5pbXBvcnQgeyBzY2FsZU1hdHJpeEZyb21TY2FsZSwgcG9zaXRpb25NYXRyaXhGcm9tUG9zaXRpb24sIHJvdGF0aW9uc01hdHJpeEZyb21Sb3RhdGlvbnMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL21hdHJpeFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gY29tcG9zZVRyYW5zZm9ybShzY2FsZSwgcm90YXRpb25zLCBwb3NpdGlvbikge1xuICBsZXQgbWF0cml4ID0gbnVsbDtcblxuICBpZiAoc2NhbGUgIT09IG51bGwpIHtcbiAgICBjb25zdCBzY2FsZU1hdHJpeCA9IHNjYWxlTWF0cml4RnJvbVNjYWxlKHNjYWxlKTtcblxuICAgIG1hdHJpeCA9IChtYXRyaXggPT09IG51bGwpID9cbiAgICAgICAgICAgICAgIHNjYWxlTWF0cml4IDpcbiAgICAgICAgICAgICAgICAgbXVsdGlwbHk0KHNjYWxlTWF0cml4LCBtYXRyaXgpO1xuICB9XG5cbiAgaWYgKHJvdGF0aW9ucyAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHJvdGF0aW9uc01hdHJpeCA9IHJvdGF0aW9uc01hdHJpeEZyb21Sb3RhdGlvbnMocm90YXRpb25zKTtcblxuICAgIG1hdHJpeCA9IChtYXRyaXggPT09IG51bGwpID9cbiAgICAgICAgICAgICAgIHJvdGF0aW9uc01hdHJpeCA6XG4gICAgICAgICAgICAgICAgIG11bHRpcGx5NChyb3RhdGlvbnNNYXRyaXgsIG1hdHJpeCk7XG5cbiAgfVxuXG4gIGlmIChwb3NpdGlvbiAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHBvc2l0aW9uTWF0cml4ID0gcG9zaXRpb25NYXRyaXhGcm9tUG9zaXRpb24ocG9zaXRpb24pO1xuXG4gICAgbWF0cml4ID0gKG1hdHJpeCA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uTWF0cml4IDpcbiAgICAgICAgICAgICAgICAgIG11bHRpcGx5NChwb3NpdGlvbk1hdHJpeCwgbWF0cml4KTtcbiAgfVxuXG4gIGNvbnN0IHRyYW5zZm9ybSA9IChtYXRyaXggPT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAodmVjdG9yKSA9PiB2ZWN0b3IgOlxuICAgICAgICAgICAgICAgICAgICAgICAgKHZlY3RvcikgPT4gdHJhbnNmb3JtNChbIC4uLnZlY3RvciwgMSBdLCBtYXRyaXgpLnNsaWNlKDAsIDMpO1xuXG4gIHJldHVybiB0cmFuc2Zvcm07XG59XG4iXX0=
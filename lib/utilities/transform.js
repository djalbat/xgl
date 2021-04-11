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
        var scaleMatrix = _matrix1.scaleMatrixFromScale(scale);
        matrix = matrix === null ? scaleMatrix : _matrix.multiply4(scaleMatrix, matrix);
    }
    if (rotations !== null) {
        var rotationsMatrix = _matrix1.rotationsMatrixFromRotations(rotations);
        matrix = matrix === null ? rotationsMatrix : _matrix.multiply4(rotationsMatrix, matrix);
    }
    if (position !== null) {
        var positionMatrix = _matrix1.positionMatrixFromPosition(position);
        matrix = matrix === null ? positionMatrix : _matrix.multiply4(positionMatrix, matrix);
    }
    var transform = matrix === null ? function(vector) {
        return vector;
    } : function(vector) {
        return _vector.transform4(_toConsumableArray(vector).concat([
            1
        ]), matrix).slice(0, 3);
    };
    return transform;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvdHJhbnNmb3JtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBtdWx0aXBseTQgfSBmcm9tIFwiLi4vbWF0aHMvbWF0cml4XCI7XG5pbXBvcnQgeyB0cmFuc2Zvcm00IH0gZnJvbSBcIi4uL21hdGhzL3ZlY3RvclwiO1xuaW1wb3J0IHsgc2NhbGVNYXRyaXhGcm9tU2NhbGUsIHBvc2l0aW9uTWF0cml4RnJvbVBvc2l0aW9uLCByb3RhdGlvbnNNYXRyaXhGcm9tUm90YXRpb25zIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9tYXRyaXhcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBvc2VUcmFuc2Zvcm0oc2NhbGUsIHJvdGF0aW9ucywgcG9zaXRpb24pIHtcbiAgbGV0IG1hdHJpeCA9IG51bGw7XG5cbiAgaWYgKHNjYWxlICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc2NhbGVNYXRyaXggPSBzY2FsZU1hdHJpeEZyb21TY2FsZShzY2FsZSk7XG5cbiAgICBtYXRyaXggPSAobWF0cml4ID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICBzY2FsZU1hdHJpeCA6XG4gICAgICAgICAgICAgICAgIG11bHRpcGx5NChzY2FsZU1hdHJpeCwgbWF0cml4KTtcbiAgfVxuXG4gIGlmIChyb3RhdGlvbnMgIT09IG51bGwpIHtcbiAgICBjb25zdCByb3RhdGlvbnNNYXRyaXggPSByb3RhdGlvbnNNYXRyaXhGcm9tUm90YXRpb25zKHJvdGF0aW9ucyk7XG5cbiAgICBtYXRyaXggPSAobWF0cml4ID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICByb3RhdGlvbnNNYXRyaXggOlxuICAgICAgICAgICAgICAgICBtdWx0aXBseTQocm90YXRpb25zTWF0cml4LCBtYXRyaXgpO1xuXG4gIH1cblxuICBpZiAocG9zaXRpb24gIT09IG51bGwpIHtcbiAgICBjb25zdCBwb3NpdGlvbk1hdHJpeCA9IHBvc2l0aW9uTWF0cml4RnJvbVBvc2l0aW9uKHBvc2l0aW9uKTtcblxuICAgIG1hdHJpeCA9IChtYXRyaXggPT09IG51bGwpID9cbiAgICAgICAgICAgICAgICBwb3NpdGlvbk1hdHJpeCA6XG4gICAgICAgICAgICAgICAgICBtdWx0aXBseTQocG9zaXRpb25NYXRyaXgsIG1hdHJpeCk7XG4gIH1cblxuICBjb25zdCB0cmFuc2Zvcm0gPSAobWF0cml4ID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgKHZlY3RvcikgPT4gdmVjdG9yIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICh2ZWN0b3IpID0+IHRyYW5zZm9ybTQoWyAuLi52ZWN0b3IsIDEgXSwgbWF0cml4KS5zbGljZSgwLCAzKTtcblxuICByZXR1cm4gdHJhbnNmb3JtO1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7UUFNSSxnQkFBZ0IsR0FBaEIsZ0JBQWdCO0lBSk4sT0FBaUI7SUFDaEIsT0FBaUI7SUFDbUQsUUFBcUI7Ozs7Ozs7Ozs7Ozs7Ozs7OztTQUVwRyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLFFBQVE7UUFDckQsTUFBTSxHQUFHLElBQUk7UUFFYixLQUFLLEtBQUssSUFBSTtZQUNWLFdBQVcsR0FOMEUsUUFBcUIsc0JBTXZFLEtBQUs7UUFFOUMsTUFBTSxHQUFJLE1BQU0sS0FBSyxJQUFJLEdBQ2QsV0FBVyxHQVhBLE9BQWlCLFdBWWhCLFdBQVcsRUFBRSxNQUFNOztRQUd4QyxTQUFTLEtBQUssSUFBSTtZQUNkLGVBQWUsR0Fkc0UsUUFBcUIsOEJBYzNELFNBQVM7UUFFOUQsTUFBTSxHQUFJLE1BQU0sS0FBSyxJQUFJLEdBQ2QsZUFBZSxHQW5CSixPQUFpQixXQW9CaEIsZUFBZSxFQUFFLE1BQU07O1FBSTVDLFFBQVEsS0FBSyxJQUFJO1lBQ2IsY0FBYyxHQXZCdUUsUUFBcUIsNEJBdUI5RCxRQUFRO1FBRTFELE1BQU0sR0FBSSxNQUFNLEtBQUssSUFBSSxHQUNiLGNBQWMsR0E1QkosT0FBaUIsV0E2QmYsY0FBYyxFQUFFLE1BQU07O1FBRzFDLFNBQVMsR0FBSSxNQUFNLEtBQUssSUFBSSxZQUNiLE1BQU07ZUFBSyxNQUFNO2lCQUNmLE1BQU07ZUFqQ0osT0FBaUIsK0JBaUNRLE1BQU07WUFBRSxDQUFDO1lBQUksTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQzs7V0FFMUUsU0FBUyJ9
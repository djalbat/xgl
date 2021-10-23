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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvdHJhbnNmb3JtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBtdWx0aXBseTQgfSBmcm9tIFwiLi4vbWF0aHMvbWF0cml4XCI7XG5pbXBvcnQgeyB0cmFuc2Zvcm00IH0gZnJvbSBcIi4uL21hdGhzL3ZlY3RvclwiO1xuaW1wb3J0IHsgc2NhbGVNYXRyaXhGcm9tU2NhbGUsIHBvc2l0aW9uTWF0cml4RnJvbVBvc2l0aW9uLCByb3RhdGlvbnNNYXRyaXhGcm9tUm90YXRpb25zIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9tYXRyaXhcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBvc2VUcmFuc2Zvcm0oc2NhbGUsIHJvdGF0aW9ucywgcG9zaXRpb24pIHtcbiAgbGV0IG1hdHJpeCA9IG51bGw7XG5cbiAgaWYgKHNjYWxlICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc2NhbGVNYXRyaXggPSBzY2FsZU1hdHJpeEZyb21TY2FsZShzY2FsZSk7XG5cbiAgICBtYXRyaXggPSAobWF0cml4ID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICBzY2FsZU1hdHJpeCA6XG4gICAgICAgICAgICAgICAgIG11bHRpcGx5NChzY2FsZU1hdHJpeCwgbWF0cml4KTtcbiAgfVxuXG4gIGlmIChyb3RhdGlvbnMgIT09IG51bGwpIHtcbiAgICBjb25zdCByb3RhdGlvbnNNYXRyaXggPSByb3RhdGlvbnNNYXRyaXhGcm9tUm90YXRpb25zKHJvdGF0aW9ucyk7XG5cbiAgICBtYXRyaXggPSAobWF0cml4ID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICByb3RhdGlvbnNNYXRyaXggOlxuICAgICAgICAgICAgICAgICBtdWx0aXBseTQocm90YXRpb25zTWF0cml4LCBtYXRyaXgpO1xuXG4gIH1cblxuICBpZiAocG9zaXRpb24gIT09IG51bGwpIHtcbiAgICBjb25zdCBwb3NpdGlvbk1hdHJpeCA9IHBvc2l0aW9uTWF0cml4RnJvbVBvc2l0aW9uKHBvc2l0aW9uKTtcblxuICAgIG1hdHJpeCA9IChtYXRyaXggPT09IG51bGwpID9cbiAgICAgICAgICAgICAgICBwb3NpdGlvbk1hdHJpeCA6XG4gICAgICAgICAgICAgICAgICBtdWx0aXBseTQocG9zaXRpb25NYXRyaXgsIG1hdHJpeCk7XG4gIH1cblxuICBjb25zdCB0cmFuc2Zvcm0gPSAobWF0cml4ID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgKHZlY3RvcikgPT4gdmVjdG9yIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICh2ZWN0b3IpID0+IHRyYW5zZm9ybTQoWyAuLi52ZWN0b3IsIDEgXSwgbWF0cml4KS5zbGljZSgwLCAzKTtcblxuICByZXR1cm4gdHJhbnNmb3JtO1xufVxuIl0sIm5hbWVzIjpbImNvbXBvc2VUcmFuc2Zvcm0iLCJzY2FsZSIsInJvdGF0aW9ucyIsInBvc2l0aW9uIiwibWF0cml4Iiwic2NhbGVNYXRyaXgiLCJyb3RhdGlvbnNNYXRyaXgiLCJwb3NpdGlvbk1hdHJpeCIsInRyYW5zZm9ybSIsInZlY3RvciIsInRyYW5zZm9ybTQiLCJzbGljZSJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7OztRQU1JQSxnQkFBZ0IsR0FBaEJBLGdCQUFnQjtBQUpOLEdBQWlCLENBQWpCLE9BQWlCO0FBQ2hCLEdBQWlCLENBQWpCLE9BQWlCO0FBQ21ELEdBQXFCLENBQXJCLFFBQXFCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7U0FFcEdBLGdCQUFnQixDQUFDQyxLQUFLLEVBQUVDLFNBQVMsRUFBRUMsUUFBUSxFQUFFLENBQUM7SUFDNUQsR0FBRyxDQUFDQyxNQUFNLEdBQUcsSUFBSTtJQUVqQixFQUFFLEVBQUVILEtBQUssS0FBSyxJQUFJLEVBQUUsQ0FBQztRQUNuQixHQUFLLENBQUNJLFdBQVcsT0FOMEUsUUFBcUIsdUJBTXZFSixLQUFLO1FBRTlDRyxNQUFNLEdBQUlBLE1BQU0sS0FBSyxJQUFJLEdBQ2RDLFdBQVcsT0FYQSxPQUFpQixZQVloQkEsV0FBVyxFQUFFRCxNQUFNO0lBQzVDLENBQUM7SUFFRCxFQUFFLEVBQUVGLFNBQVMsS0FBSyxJQUFJLEVBQUUsQ0FBQztRQUN2QixHQUFLLENBQUNJLGVBQWUsT0Fkc0UsUUFBcUIsK0JBYzNESixTQUFTO1FBRTlERSxNQUFNLEdBQUlBLE1BQU0sS0FBSyxJQUFJLEdBQ2RFLGVBQWUsT0FuQkosT0FBaUIsWUFvQmhCQSxlQUFlLEVBQUVGLE1BQU07SUFFaEQsQ0FBQztJQUVELEVBQUUsRUFBRUQsUUFBUSxLQUFLLElBQUksRUFBRSxDQUFDO1FBQ3RCLEdBQUssQ0FBQ0ksY0FBYyxPQXZCdUUsUUFBcUIsNkJBdUI5REosUUFBUTtRQUUxREMsTUFBTSxHQUFJQSxNQUFNLEtBQUssSUFBSSxHQUNiRyxjQUFjLE9BNUJKLE9BQWlCLFlBNkJmQSxjQUFjLEVBQUVILE1BQU07SUFDaEQsQ0FBQztJQUVELEdBQUssQ0FBQ0ksU0FBUyxHQUFJSixNQUFNLEtBQUssSUFBSSxHQUNkLFFBQVEsQ0FBUEssTUFBTTtRQUFLQSxNQUFNLENBQU5BLE1BQU07UUFDaEIsUUFBUSxDQUFQQSxNQUFNO1FBQUtDLE1BQU0sS0FqQ2YsT0FBaUIsZ0NBaUNRRCxNQUFNLFNBQVgsQ0FBQztZQUFZLENBQUM7UUFBQyxDQUFDLEdBQUVMLE1BQU0sRUFBRU8sS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDOztJQUVqRixNQUFNLENBQUNILFNBQVM7QUFDbEIsQ0FBQyJ9
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "composeTransform", {
    enumerable: true,
    get: function() {
        return composeTransform;
    }
});
var _matrix = require("../maths/matrix");
var _vector = require("../maths/vector");
var _matrix1 = require("../utilities/matrix");
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
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
function composeTransform(scale, position, rotations) {
    var matrix = null;
    if (scale !== null) {
        var scaleMatrix = (0, _matrix1.scaleMatrixFromScale)(scale);
        matrix = matrix === null ? scaleMatrix : (0, _matrix.multiply4)(scaleMatrix, matrix);
    }
    if (rotations !== null) {
        var rotationsMatrix = (0, _matrix1.rotationsMatrixFromRotations)(rotations);
        matrix = matrix === null ? rotationsMatrix : (0, _matrix.multiply4)(rotationsMatrix, matrix);
    }
    if (position !== null) {
        var positionMatrix = (0, _matrix1.positionMatrixFromPosition)(position);
        matrix = matrix === null ? positionMatrix : (0, _matrix.multiply4)(positionMatrix, matrix);
    }
    var transform = matrix === null ? function(vector) {
        return vector;
    } : function(vector) {
        return (0, _vector.transform4)(_toConsumableArray(vector).concat([
            1
        ]), matrix).slice(0, 3);
    };
    return transform;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvdHJhbnNmb3JtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBtdWx0aXBseTQgfSBmcm9tIFwiLi4vbWF0aHMvbWF0cml4XCI7XG5pbXBvcnQgeyB0cmFuc2Zvcm00IH0gZnJvbSBcIi4uL21hdGhzL3ZlY3RvclwiO1xuaW1wb3J0IHsgc2NhbGVNYXRyaXhGcm9tU2NhbGUsIHBvc2l0aW9uTWF0cml4RnJvbVBvc2l0aW9uLCByb3RhdGlvbnNNYXRyaXhGcm9tUm90YXRpb25zIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9tYXRyaXhcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBvc2VUcmFuc2Zvcm0oc2NhbGUsIHBvc2l0aW9uLCByb3RhdGlvbnMpIHtcbiAgbGV0IG1hdHJpeCA9IG51bGw7XG5cbiAgaWYgKHNjYWxlICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc2NhbGVNYXRyaXggPSBzY2FsZU1hdHJpeEZyb21TY2FsZShzY2FsZSk7XG5cbiAgICBtYXRyaXggPSAobWF0cml4ID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICBzY2FsZU1hdHJpeCA6XG4gICAgICAgICAgICAgICAgIG11bHRpcGx5NChzY2FsZU1hdHJpeCwgbWF0cml4KTtcbiAgfVxuXG4gIGlmIChyb3RhdGlvbnMgIT09IG51bGwpIHtcbiAgICBjb25zdCByb3RhdGlvbnNNYXRyaXggPSByb3RhdGlvbnNNYXRyaXhGcm9tUm90YXRpb25zKHJvdGF0aW9ucyk7XG5cbiAgICBtYXRyaXggPSAobWF0cml4ID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICByb3RhdGlvbnNNYXRyaXggOlxuICAgICAgICAgICAgICAgICBtdWx0aXBseTQocm90YXRpb25zTWF0cml4LCBtYXRyaXgpO1xuXG4gIH1cblxuICBpZiAocG9zaXRpb24gIT09IG51bGwpIHtcbiAgICBjb25zdCBwb3NpdGlvbk1hdHJpeCA9IHBvc2l0aW9uTWF0cml4RnJvbVBvc2l0aW9uKHBvc2l0aW9uKTtcblxuICAgIG1hdHJpeCA9IChtYXRyaXggPT09IG51bGwpID9cbiAgICAgICAgICAgICAgICBwb3NpdGlvbk1hdHJpeCA6XG4gICAgICAgICAgICAgICAgICBtdWx0aXBseTQocG9zaXRpb25NYXRyaXgsIG1hdHJpeCk7XG4gIH1cblxuICBjb25zdCB0cmFuc2Zvcm0gPSAobWF0cml4ID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgKHZlY3RvcikgPT4gdmVjdG9yIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICh2ZWN0b3IpID0+IHRyYW5zZm9ybTQoWyAuLi52ZWN0b3IsIDEgXSwgbWF0cml4KS5zbGljZSgwLCAzKTtcblxuICByZXR1cm4gdHJhbnNmb3JtO1xufVxuIl0sIm5hbWVzIjpbImNvbXBvc2VUcmFuc2Zvcm0iLCJzY2FsZSIsInBvc2l0aW9uIiwicm90YXRpb25zIiwibWF0cml4Iiwic2NhbGVNYXRyaXgiLCJzY2FsZU1hdHJpeEZyb21TY2FsZSIsIm11bHRpcGx5NCIsInJvdGF0aW9uc01hdHJpeCIsInJvdGF0aW9uc01hdHJpeEZyb21Sb3RhdGlvbnMiLCJwb3NpdGlvbk1hdHJpeCIsInBvc2l0aW9uTWF0cml4RnJvbVBvc2l0aW9uIiwidHJhbnNmb3JtIiwidmVjdG9yIiwidHJhbnNmb3JtNCIsInNsaWNlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFNZ0JBOzs7ZUFBQUE7OztzQkFKVTtzQkFDQzt1QkFDb0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXhGLFNBQVNBLGlCQUFpQkMsS0FBSyxFQUFFQyxRQUFRLEVBQUVDLFNBQVMsRUFBRTtJQUMzRCxJQUFJQyxTQUFTLElBQUk7SUFFakIsSUFBSUgsVUFBVSxJQUFJLEVBQUU7UUFDbEIsSUFBTUksY0FBY0MsSUFBQUEsNkJBQW9CLEVBQUNMO1FBRXpDRyxTQUFTLEFBQUNBLFdBQVcsSUFBSSxHQUNkQyxjQUNFRSxJQUFBQSxpQkFBUyxFQUFDRixhQUFhRCxPQUFPO0lBQzdDLENBQUM7SUFFRCxJQUFJRCxjQUFjLElBQUksRUFBRTtRQUN0QixJQUFNSyxrQkFBa0JDLElBQUFBLHFDQUE0QixFQUFDTjtRQUVyREMsU0FBUyxBQUFDQSxXQUFXLElBQUksR0FDZEksa0JBQ0VELElBQUFBLGlCQUFTLEVBQUNDLGlCQUFpQkosT0FBTztJQUVqRCxDQUFDO0lBRUQsSUFBSUYsYUFBYSxJQUFJLEVBQUU7UUFDckIsSUFBTVEsaUJBQWlCQyxJQUFBQSxtQ0FBMEIsRUFBQ1Q7UUFFbERFLFNBQVMsQUFBQ0EsV0FBVyxJQUFJLEdBQ2JNLGlCQUNFSCxJQUFBQSxpQkFBUyxFQUFDRyxnQkFBZ0JOLE9BQU87SUFDakQsQ0FBQztJQUVELElBQU1RLFlBQVksQUFBQ1IsV0FBVyxJQUFJLEdBQ2QsU0FBQ1M7ZUFBV0E7UUFDVixTQUFDQTtlQUFXQyxJQUFBQSxrQkFBVSxFQUFDLEFBQUUsbUJBQUdELGVBQUw7WUFBYTtTQUFHLEdBQUVULFFBQVFXLEtBQUssQ0FBQyxHQUFHO0tBQUU7SUFFbEYsT0FBT0g7QUFDVCJ9
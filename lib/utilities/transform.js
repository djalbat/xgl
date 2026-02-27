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
const _matrix = require("../maths/matrix");
const _vector = require("../maths/vector");
const _matrix1 = require("../utilities/matrix");
function composeTransform(scale, position, rotations) {
    let matrix = null;
    if (scale !== null) {
        const scaleMatrix = (0, _matrix1.scaleMatrixFromScale)(scale);
        matrix = matrix === null ? scaleMatrix : (0, _matrix.multiply4)(scaleMatrix, matrix);
    }
    if (rotations !== null) {
        const rotationsMatrix = (0, _matrix1.rotationsMatrixFromRotations)(rotations);
        matrix = matrix === null ? rotationsMatrix : (0, _matrix.multiply4)(rotationsMatrix, matrix);
    }
    if (position !== null) {
        const positionMatrix = (0, _matrix1.positionMatrixFromPosition)(position);
        matrix = matrix === null ? positionMatrix : (0, _matrix.multiply4)(positionMatrix, matrix);
    }
    const transform = matrix === null ? (vector)=>vector : (vector)=>(0, _vector.transform4)([
            ...vector,
            1
        ], matrix).slice(0, 3);
    return transform;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvdHJhbnNmb3JtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBtdWx0aXBseTQgfSBmcm9tIFwiLi4vbWF0aHMvbWF0cml4XCI7XG5pbXBvcnQgeyB0cmFuc2Zvcm00IH0gZnJvbSBcIi4uL21hdGhzL3ZlY3RvclwiO1xuaW1wb3J0IHsgc2NhbGVNYXRyaXhGcm9tU2NhbGUsIHBvc2l0aW9uTWF0cml4RnJvbVBvc2l0aW9uLCByb3RhdGlvbnNNYXRyaXhGcm9tUm90YXRpb25zIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9tYXRyaXhcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBvc2VUcmFuc2Zvcm0oc2NhbGUsIHBvc2l0aW9uLCByb3RhdGlvbnMpIHtcbiAgbGV0IG1hdHJpeCA9IG51bGw7XG5cbiAgaWYgKHNjYWxlICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc2NhbGVNYXRyaXggPSBzY2FsZU1hdHJpeEZyb21TY2FsZShzY2FsZSk7XG5cbiAgICBtYXRyaXggPSAobWF0cml4ID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICBzY2FsZU1hdHJpeCA6XG4gICAgICAgICAgICAgICAgIG11bHRpcGx5NChzY2FsZU1hdHJpeCwgbWF0cml4KTtcbiAgfVxuXG4gIGlmIChyb3RhdGlvbnMgIT09IG51bGwpIHtcbiAgICBjb25zdCByb3RhdGlvbnNNYXRyaXggPSByb3RhdGlvbnNNYXRyaXhGcm9tUm90YXRpb25zKHJvdGF0aW9ucyk7XG5cbiAgICBtYXRyaXggPSAobWF0cml4ID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICByb3RhdGlvbnNNYXRyaXggOlxuICAgICAgICAgICAgICAgICBtdWx0aXBseTQocm90YXRpb25zTWF0cml4LCBtYXRyaXgpO1xuXG4gIH1cblxuICBpZiAocG9zaXRpb24gIT09IG51bGwpIHtcbiAgICBjb25zdCBwb3NpdGlvbk1hdHJpeCA9IHBvc2l0aW9uTWF0cml4RnJvbVBvc2l0aW9uKHBvc2l0aW9uKTtcblxuICAgIG1hdHJpeCA9IChtYXRyaXggPT09IG51bGwpID9cbiAgICAgICAgICAgICAgICBwb3NpdGlvbk1hdHJpeCA6XG4gICAgICAgICAgICAgICAgICBtdWx0aXBseTQocG9zaXRpb25NYXRyaXgsIG1hdHJpeCk7XG4gIH1cblxuICBjb25zdCB0cmFuc2Zvcm0gPSAobWF0cml4ID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgKHZlY3RvcikgPT4gdmVjdG9yIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICh2ZWN0b3IpID0+IHRyYW5zZm9ybTQoWyAuLi52ZWN0b3IsIDEgXSwgbWF0cml4KS5zbGljZSgwLCAzKTtcblxuICByZXR1cm4gdHJhbnNmb3JtO1xufVxuIl0sIm5hbWVzIjpbImNvbXBvc2VUcmFuc2Zvcm0iLCJzY2FsZSIsInBvc2l0aW9uIiwicm90YXRpb25zIiwibWF0cml4Iiwic2NhbGVNYXRyaXgiLCJzY2FsZU1hdHJpeEZyb21TY2FsZSIsIm11bHRpcGx5NCIsInJvdGF0aW9uc01hdHJpeCIsInJvdGF0aW9uc01hdHJpeEZyb21Sb3RhdGlvbnMiLCJwb3NpdGlvbk1hdHJpeCIsInBvc2l0aW9uTWF0cml4RnJvbVBvc2l0aW9uIiwidHJhbnNmb3JtIiwidmVjdG9yIiwidHJhbnNmb3JtNCIsInNsaWNlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFNZ0JBOzs7ZUFBQUE7Ozt3QkFKVTt3QkFDQzt5QkFDb0U7QUFFeEYsU0FBU0EsaUJBQWlCQyxLQUFLLEVBQUVDLFFBQVEsRUFBRUMsU0FBUztJQUN6RCxJQUFJQyxTQUFTO0lBRWIsSUFBSUgsVUFBVSxNQUFNO1FBQ2xCLE1BQU1JLGNBQWNDLElBQUFBLDZCQUFvQixFQUFDTDtRQUV6Q0csU0FBUyxBQUFDQSxXQUFXLE9BQ1ZDLGNBQ0VFLElBQUFBLGlCQUFTLEVBQUNGLGFBQWFEO0lBQ3RDO0lBRUEsSUFBSUQsY0FBYyxNQUFNO1FBQ3RCLE1BQU1LLGtCQUFrQkMsSUFBQUEscUNBQTRCLEVBQUNOO1FBRXJEQyxTQUFTLEFBQUNBLFdBQVcsT0FDVkksa0JBQ0VELElBQUFBLGlCQUFTLEVBQUNDLGlCQUFpQko7SUFFMUM7SUFFQSxJQUFJRixhQUFhLE1BQU07UUFDckIsTUFBTVEsaUJBQWlCQyxJQUFBQSxtQ0FBMEIsRUFBQ1Q7UUFFbERFLFNBQVMsQUFBQ0EsV0FBVyxPQUNUTSxpQkFDRUgsSUFBQUEsaUJBQVMsRUFBQ0csZ0JBQWdCTjtJQUMxQztJQUVBLE1BQU1RLFlBQVksQUFBQ1IsV0FBVyxPQUNWLENBQUNTLFNBQVdBLFNBQ1YsQ0FBQ0EsU0FBV0MsSUFBQUEsa0JBQVUsRUFBQztlQUFLRDtZQUFRO1NBQUcsRUFBRVQsUUFBUVcsS0FBSyxDQUFDLEdBQUc7SUFFaEYsT0FBT0g7QUFDVCJ9
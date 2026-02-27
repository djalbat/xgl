"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
function applyMatrix(uniformLocation, matrix) {
    const transpose = false; ///
    this.context.uniformMatrix4fv(uniformLocation, transpose, matrix);
}
const matrixMixins = {
    applyMatrix
};
const _default = matrixMixins;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvbWF0cml4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBhcHBseU1hdHJpeCh1bmlmb3JtTG9jYXRpb24sIG1hdHJpeCkge1xuICBjb25zdCB0cmFuc3Bvc2UgPSBmYWxzZTsgIC8vL1xuXG4gIHRoaXMuY29udGV4dC51bmlmb3JtTWF0cml4NGZ2KHVuaWZvcm1Mb2NhdGlvbiwgdHJhbnNwb3NlLCBtYXRyaXgpO1xufVxuXG5jb25zdCBtYXRyaXhNaXhpbnMgPSB7XG4gIGFwcGx5TWF0cml4XG59O1xuXG5leHBvcnQgZGVmYXVsdCBtYXRyaXhNaXhpbnM7XG4iXSwibmFtZXMiOlsiYXBwbHlNYXRyaXgiLCJ1bmlmb3JtTG9jYXRpb24iLCJtYXRyaXgiLCJ0cmFuc3Bvc2UiLCJjb250ZXh0IiwidW5pZm9ybU1hdHJpeDRmdiIsIm1hdHJpeE1peGlucyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBWUE7OztlQUFBOzs7QUFWQSxTQUFTQSxZQUFZQyxlQUFlLEVBQUVDLE1BQU07SUFDMUMsTUFBTUMsWUFBWSxPQUFRLEdBQUc7SUFFN0IsSUFBSSxDQUFDQyxPQUFPLENBQUNDLGdCQUFnQixDQUFDSixpQkFBaUJFLFdBQVdEO0FBQzVEO0FBRUEsTUFBTUksZUFBZTtJQUNuQk47QUFDRjtNQUVBLFdBQWVNIn0=
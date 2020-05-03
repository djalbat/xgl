"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.vertexPositionAttributeName = exports.projectionMatrixName = exports.rotationsMatrixName = exports.positionMatrixName = exports.offsetsMatrixName = void 0;
var offsetsMatrixName = "uOffsetsMatrix";
exports.offsetsMatrixName = offsetsMatrixName;
var positionMatrixName = "uPositionMatrix";
exports.positionMatrixName = positionMatrixName;
var rotationsMatrixName = "uRotationsMatrix";
exports.rotationsMatrixName = rotationsMatrixName;
var projectionMatrixName = "uPerspectiveMatrix";
exports.projectionMatrixName = projectionMatrixName;
var vertexPositionAttributeName = "aVertexPosition";
exports.vertexPositionAttributeName = vertexPositionAttributeName;
var positionSource = new String("\n  \n        uniform mat4 ".concat(offsetsMatrixName, ",\n                     ").concat(rotationsMatrixName, ",\n                     ").concat(positionMatrixName, ",\n                     ").concat(projectionMatrixName, ";\n        \n        attribute vec4 ").concat(vertexPositionAttributeName, ";\n\n        vec4 calculatePosition() {\n          vec4 position = ").concat(projectionMatrixName, " * ").concat(positionMatrixName, " * ").concat(rotationsMatrixName, " * ").concat(offsetsMatrixName, " * ").concat(vertexPositionAttributeName, ";\n          \n          return position;\n        }\n        \n      "));
var _default = positionSource;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc2l0aW9uLmpzIl0sIm5hbWVzIjpbIm9mZnNldHNNYXRyaXhOYW1lIiwicG9zaXRpb25NYXRyaXhOYW1lIiwicm90YXRpb25zTWF0cml4TmFtZSIsInByb2plY3Rpb25NYXRyaXhOYW1lIiwidmVydGV4UG9zaXRpb25BdHRyaWJ1dGVOYW1lIiwicG9zaXRpb25Tb3VyY2UiLCJTdHJpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFTyxJQUFNQSxpQkFBaUIsR0FBRyxnQkFBMUI7O0FBQ0EsSUFBTUMsa0JBQWtCLEdBQUcsaUJBQTNCOztBQUNBLElBQU1DLG1CQUFtQixHQUFHLGtCQUE1Qjs7QUFDQSxJQUFNQyxvQkFBb0IsR0FBRyxvQkFBN0I7O0FBQ0EsSUFBTUMsMkJBQTJCLEdBQUcsaUJBQXBDOztBQUVQLElBQU1DLGNBQWMsR0FBRyxJQUFJQyxNQUFKLHNDQUVBTixpQkFGQSxxQ0FHQUUsbUJBSEEscUNBSUFELGtCQUpBLHFDQUtBRSxvQkFMQSxpREFPRUMsMkJBUEYsZ0ZBVUtELG9CQVZMLGdCQVUrQkYsa0JBVi9CLGdCQVV1REMsbUJBVnZELGdCQVVnRkYsaUJBVmhGLGdCQVV1R0ksMkJBVnZHLDRFQUF2QjtlQWlCZUMsYyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgY29uc3Qgb2Zmc2V0c01hdHJpeE5hbWUgPSBcInVPZmZzZXRzTWF0cml4XCI7XG5leHBvcnQgY29uc3QgcG9zaXRpb25NYXRyaXhOYW1lID0gXCJ1UG9zaXRpb25NYXRyaXhcIjtcbmV4cG9ydCBjb25zdCByb3RhdGlvbnNNYXRyaXhOYW1lID0gXCJ1Um90YXRpb25zTWF0cml4XCI7XG5leHBvcnQgY29uc3QgcHJvamVjdGlvbk1hdHJpeE5hbWUgPSBcInVQZXJzcGVjdGl2ZU1hdHJpeFwiO1xuZXhwb3J0IGNvbnN0IHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTmFtZSA9IFwiYVZlcnRleFBvc2l0aW9uXCI7XG5cbmNvbnN0IHBvc2l0aW9uU291cmNlID0gbmV3IFN0cmluZyhgXG4gIFxuICAgICAgICB1bmlmb3JtIG1hdDQgJHtvZmZzZXRzTWF0cml4TmFtZX0sXG4gICAgICAgICAgICAgICAgICAgICAke3JvdGF0aW9uc01hdHJpeE5hbWV9LFxuICAgICAgICAgICAgICAgICAgICAgJHtwb3NpdGlvbk1hdHJpeE5hbWV9LFxuICAgICAgICAgICAgICAgICAgICAgJHtwcm9qZWN0aW9uTWF0cml4TmFtZX07XG4gICAgICAgIFxuICAgICAgICBhdHRyaWJ1dGUgdmVjNCAke3ZlcnRleFBvc2l0aW9uQXR0cmlidXRlTmFtZX07XG5cbiAgICAgICAgdmVjNCBjYWxjdWxhdGVQb3NpdGlvbigpIHtcbiAgICAgICAgICB2ZWM0IHBvc2l0aW9uID0gJHtwcm9qZWN0aW9uTWF0cml4TmFtZX0gKiAke3Bvc2l0aW9uTWF0cml4TmFtZX0gKiAke3JvdGF0aW9uc01hdHJpeE5hbWV9ICogJHtvZmZzZXRzTWF0cml4TmFtZX0gKiAke3ZlcnRleFBvc2l0aW9uQXR0cmlidXRlTmFtZX07XG4gICAgICAgICAgXG4gICAgICAgICAgcmV0dXJuIHBvc2l0aW9uO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgYCk7XG5cbmV4cG9ydCBkZWZhdWx0IHBvc2l0aW9uU291cmNlO1xuIl19
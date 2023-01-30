"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    offsetsMatrixName: function() {
        return offsetsMatrixName;
    },
    positionMatrixName: function() {
        return positionMatrixName;
    },
    rotationsMatrixName: function() {
        return rotationsMatrixName;
    },
    projectionMatrixName: function() {
        return projectionMatrixName;
    },
    vertexPositionAttributeName: function() {
        return vertexPositionAttributeName;
    },
    default: function() {
        return _default;
    }
});
var offsetsMatrixName = "uOffsetsMatrix";
var positionMatrixName = "uPositionMatrix";
var rotationsMatrixName = "uRotationsMatrix";
var projectionMatrixName = "uPerspectiveMatrix";
var vertexPositionAttributeName = "aVertexPosition";
var positionSource = new String("\n  \n        uniform mat4 ".concat(offsetsMatrixName, ",\n                     ").concat(rotationsMatrixName, ",\n                     ").concat(positionMatrixName, ",\n                     ").concat(projectionMatrixName, ";\n        \n        attribute vec4 ").concat(vertexPositionAttributeName, ";\n\n        vec4 calculatePosition() {\n          vec4 position = ").concat(projectionMatrixName, " * ").concat(positionMatrixName, " * ").concat(rotationsMatrixName, " * ").concat(offsetsMatrixName, " * ").concat(vertexPositionAttributeName, ";\n          \n          return position;\n        }\n        \n      "));
var _default = positionSource;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yZW5kZXJlci9zb3VyY2UvcG9zaXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBvZmZzZXRzTWF0cml4TmFtZSA9IFwidU9mZnNldHNNYXRyaXhcIjtcbmV4cG9ydCBjb25zdCBwb3NpdGlvbk1hdHJpeE5hbWUgPSBcInVQb3NpdGlvbk1hdHJpeFwiO1xuZXhwb3J0IGNvbnN0IHJvdGF0aW9uc01hdHJpeE5hbWUgPSBcInVSb3RhdGlvbnNNYXRyaXhcIjtcbmV4cG9ydCBjb25zdCBwcm9qZWN0aW9uTWF0cml4TmFtZSA9IFwidVBlcnNwZWN0aXZlTWF0cml4XCI7XG5leHBvcnQgY29uc3QgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVOYW1lID0gXCJhVmVydGV4UG9zaXRpb25cIjtcblxuY29uc3QgcG9zaXRpb25Tb3VyY2UgPSBuZXcgU3RyaW5nKGBcbiAgXG4gICAgICAgIHVuaWZvcm0gbWF0NCAke29mZnNldHNNYXRyaXhOYW1lfSxcbiAgICAgICAgICAgICAgICAgICAgICR7cm90YXRpb25zTWF0cml4TmFtZX0sXG4gICAgICAgICAgICAgICAgICAgICAke3Bvc2l0aW9uTWF0cml4TmFtZX0sXG4gICAgICAgICAgICAgICAgICAgICAke3Byb2plY3Rpb25NYXRyaXhOYW1lfTtcbiAgICAgICAgXG4gICAgICAgIGF0dHJpYnV0ZSB2ZWM0ICR7dmVydGV4UG9zaXRpb25BdHRyaWJ1dGVOYW1lfTtcblxuICAgICAgICB2ZWM0IGNhbGN1bGF0ZVBvc2l0aW9uKCkge1xuICAgICAgICAgIHZlYzQgcG9zaXRpb24gPSAke3Byb2plY3Rpb25NYXRyaXhOYW1lfSAqICR7cG9zaXRpb25NYXRyaXhOYW1lfSAqICR7cm90YXRpb25zTWF0cml4TmFtZX0gKiAke29mZnNldHNNYXRyaXhOYW1lfSAqICR7dmVydGV4UG9zaXRpb25BdHRyaWJ1dGVOYW1lfTtcbiAgICAgICAgICBcbiAgICAgICAgICByZXR1cm4gcG9zaXRpb247XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICBgKTtcblxuZXhwb3J0IGRlZmF1bHQgcG9zaXRpb25Tb3VyY2U7XG4iXSwibmFtZXMiOlsib2Zmc2V0c01hdHJpeE5hbWUiLCJwb3NpdGlvbk1hdHJpeE5hbWUiLCJyb3RhdGlvbnNNYXRyaXhOYW1lIiwicHJvamVjdGlvbk1hdHJpeE5hbWUiLCJ2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZU5hbWUiLCJwb3NpdGlvblNvdXJjZSIsIlN0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBRWFBLGlCQUFpQjtlQUFqQkE7O0lBQ0FDLGtCQUFrQjtlQUFsQkE7O0lBQ0FDLG1CQUFtQjtlQUFuQkE7O0lBQ0FDLG9CQUFvQjtlQUFwQkE7O0lBQ0FDLDJCQUEyQjtlQUEzQkE7O0lBbUJiLE9BQThCO2VBQTlCOzs7QUF2Qk8sSUFBTUosb0JBQW9CO0FBQzFCLElBQU1DLHFCQUFxQjtBQUMzQixJQUFNQyxzQkFBc0I7QUFDNUIsSUFBTUMsdUJBQXVCO0FBQzdCLElBQU1DLDhCQUE4QjtBQUUzQyxJQUFNQyxpQkFBaUIsSUFBSUMsT0FBTyxBQUFDLDhCQUdaSixPQURBRixtQkFBa0IsNEJBRWxCQyxPQURBQyxxQkFBb0IsNEJBRXBCQyxPQURBRixvQkFBbUIsNEJBR2pCRyxPQUZGRCxzQkFBcUIsd0NBS2hCQSxPQUhIQyw2QkFBNEIsdUVBR0NILE9BQTFCRSxzQkFBcUIsT0FBNkJELE9BQXhCRCxvQkFBbUIsT0FBOEJELE9BQXpCRSxxQkFBb0IsT0FBNEJFLE9BQXZCSixtQkFBa0IsT0FBaUMsT0FBNUJJLDZCQUE0QjtJQU8xSixXQUFlQyJ9
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.positionMatrixName = exports.default = exports.vertexPositionAttributeName = exports.offsetsMatrixName = exports.rotationsMatrixName = exports.projectionMatrixName = void 0;
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
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yZW5kZXJlci9zb3VyY2UvcG9zaXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBvZmZzZXRzTWF0cml4TmFtZSA9IFwidU9mZnNldHNNYXRyaXhcIjtcbmV4cG9ydCBjb25zdCBwb3NpdGlvbk1hdHJpeE5hbWUgPSBcInVQb3NpdGlvbk1hdHJpeFwiO1xuZXhwb3J0IGNvbnN0IHJvdGF0aW9uc01hdHJpeE5hbWUgPSBcInVSb3RhdGlvbnNNYXRyaXhcIjtcbmV4cG9ydCBjb25zdCBwcm9qZWN0aW9uTWF0cml4TmFtZSA9IFwidVBlcnNwZWN0aXZlTWF0cml4XCI7XG5leHBvcnQgY29uc3QgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVOYW1lID0gXCJhVmVydGV4UG9zaXRpb25cIjtcblxuY29uc3QgcG9zaXRpb25Tb3VyY2UgPSBuZXcgU3RyaW5nKGBcbiAgXG4gICAgICAgIHVuaWZvcm0gbWF0NCAke29mZnNldHNNYXRyaXhOYW1lfSxcbiAgICAgICAgICAgICAgICAgICAgICR7cm90YXRpb25zTWF0cml4TmFtZX0sXG4gICAgICAgICAgICAgICAgICAgICAke3Bvc2l0aW9uTWF0cml4TmFtZX0sXG4gICAgICAgICAgICAgICAgICAgICAke3Byb2plY3Rpb25NYXRyaXhOYW1lfTtcbiAgICAgICAgXG4gICAgICAgIGF0dHJpYnV0ZSB2ZWM0ICR7dmVydGV4UG9zaXRpb25BdHRyaWJ1dGVOYW1lfTtcblxuICAgICAgICB2ZWM0IGNhbGN1bGF0ZVBvc2l0aW9uKCkge1xuICAgICAgICAgIHZlYzQgcG9zaXRpb24gPSAke3Byb2plY3Rpb25NYXRyaXhOYW1lfSAqICR7cG9zaXRpb25NYXRyaXhOYW1lfSAqICR7cm90YXRpb25zTWF0cml4TmFtZX0gKiAke29mZnNldHNNYXRyaXhOYW1lfSAqICR7dmVydGV4UG9zaXRpb25BdHRyaWJ1dGVOYW1lfTtcbiAgICAgICAgICBcbiAgICAgICAgICByZXR1cm4gcG9zaXRpb247XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICBgKTtcblxuZXhwb3J0IGRlZmF1bHQgcG9zaXRpb25Tb3VyY2U7XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7SUFFQyxpQkFBaUIsSUFBRyxjQUFnQjtRQUFwQyxpQkFBaUIsR0FBakIsaUJBQWlCO0lBQ2pCLGtCQUFrQixJQUFHLGVBQWlCO1FBQXRDLGtCQUFrQixHQUFsQixrQkFBa0I7SUFDbEIsbUJBQW1CLElBQUcsZ0JBQWtCO1FBQXhDLG1CQUFtQixHQUFuQixtQkFBbUI7SUFDbkIsb0JBQW9CLElBQUcsa0JBQW9CO1FBQTNDLG9CQUFvQixHQUFwQixvQkFBb0I7SUFDcEIsMkJBQTJCLElBQUcsZUFBaUI7UUFBL0MsMkJBQTJCLEdBQTNCLDJCQUEyQjtJQUVsQyxjQUFjLE9BQU8sTUFBTSxFQUFFLDJCQUVkLEVBQ0UsTUFBbUIsQ0FEbkIsaUJBQWlCLEdBQUMsd0JBQ3BCLEdBQ0UsTUFBa0IsQ0FEbEIsbUJBQW1CLEdBQUMsd0JBQ3RCLEdBQ0UsTUFBb0IsQ0FEcEIsa0JBQWtCLEdBQUMsd0JBQ3JCLEdBRUksTUFBMkIsQ0FGN0Isb0JBQW9CLEdBQUMsb0NBRXJCLEdBR0ssTUFBb0IsQ0FIdkIsMkJBQTJCLEdBQUMsbUVBRzNCLEdBQTRCLE1BQWtCLENBQTVDLG9CQUFvQixHQUFDLEdBQUcsR0FBMEIsTUFBbUIsQ0FBM0Msa0JBQWtCLEdBQUMsR0FBRyxHQUEyQixNQUFpQixDQUExQyxtQkFBbUIsR0FBQyxHQUFHLEdBQXlCLE1BQTJCLENBQWxELGlCQUFpQixHQUFDLEdBQUcsR0FBOEIsTUFLcEosQ0FMd0gsMkJBQTJCLEdBQUMsc0VBS3BKO2VBRVMsY0FBYyJ9
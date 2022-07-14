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
    normalsMatrixName: function() {
        return normalsMatrixName;
    },
    vertexNormalAttributeName: function() {
        return vertexNormalAttributeName;
    },
    default: function() {
        return _default;
    }
});
var normalsMatrixName = "uNormalsMatrix";
var vertexNormalAttributeName = "aVertexNormal";
var lightingSource = new String("\n  \n        uniform mat4 ".concat(normalsMatrixName, ";\n\n        attribute vec3 ").concat(vertexNormalAttributeName, ";\n\n        vec3 directionalLightColour = vec3(1, 1, 1),\n             directionalVector = normalize(vec3(1.0, 1.0, 1.0));\n          \n        vec3 calculateLighting() {\n          vec4 transformedNormal = ").concat(normalsMatrixName, " * vec4(").concat(vertexNormalAttributeName, ", 1.0);            \n\n          float directional = (dot(transformedNormal.xyz, directionalVector) + 1.0) / 2.0;\n          \n          vec3 lighting = (directionalLightColour * directional);\n          \n          return lighting;\n        }\n\n      "));
var _default = lightingSource;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yZW5kZXJlci9zb3VyY2UvbGlnaHRpbmcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBub3JtYWxzTWF0cml4TmFtZSA9IFwidU5vcm1hbHNNYXRyaXhcIjtcbmV4cG9ydCBjb25zdCB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVOYW1lID0gXCJhVmVydGV4Tm9ybWFsXCI7XG5cbmNvbnN0IGxpZ2h0aW5nU291cmNlID0gbmV3IFN0cmluZyhgXG4gIFxuICAgICAgICB1bmlmb3JtIG1hdDQgJHtub3JtYWxzTWF0cml4TmFtZX07XG5cbiAgICAgICAgYXR0cmlidXRlIHZlYzMgJHt2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVOYW1lfTtcblxuICAgICAgICB2ZWMzIGRpcmVjdGlvbmFsTGlnaHRDb2xvdXIgPSB2ZWMzKDEsIDEsIDEpLFxuICAgICAgICAgICAgIGRpcmVjdGlvbmFsVmVjdG9yID0gbm9ybWFsaXplKHZlYzMoMS4wLCAxLjAsIDEuMCkpO1xuICAgICAgICAgIFxuICAgICAgICB2ZWMzIGNhbGN1bGF0ZUxpZ2h0aW5nKCkge1xuICAgICAgICAgIHZlYzQgdHJhbnNmb3JtZWROb3JtYWwgPSAke25vcm1hbHNNYXRyaXhOYW1lfSAqIHZlYzQoJHt2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVOYW1lfSwgMS4wKTsgICAgICAgICAgICBcblxuICAgICAgICAgIGZsb2F0IGRpcmVjdGlvbmFsID0gKGRvdCh0cmFuc2Zvcm1lZE5vcm1hbC54eXosIGRpcmVjdGlvbmFsVmVjdG9yKSArIDEuMCkgLyAyLjA7XG4gICAgICAgICAgXG4gICAgICAgICAgdmVjMyBsaWdodGluZyA9IChkaXJlY3Rpb25hbExpZ2h0Q29sb3VyICogZGlyZWN0aW9uYWwpO1xuICAgICAgICAgIFxuICAgICAgICAgIHJldHVybiBsaWdodGluZztcbiAgICAgICAgfVxuXG4gICAgICBgKTtcblxuZXhwb3J0IGRlZmF1bHQgbGlnaHRpbmdTb3VyY2U7Il0sIm5hbWVzIjpbIm5vcm1hbHNNYXRyaXhOYW1lIiwidmVydGV4Tm9ybWFsQXR0cmlidXRlTmFtZSIsImxpZ2h0aW5nU291cmNlIiwiU3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7Ozs7O0lBRUFBLGlCQUFpQjtlQUFqQkEsaUJBQWlCOztJQUNqQkMseUJBQXlCO2VBQXpCQSx5QkFBeUI7O0lBdUJ0QyxPQUE4QjtlQUE5QixRQUE4Qjs7O0FBeEJ2QixJQUFNRCxpQkFBaUIsR0FBRyxnQkFBZ0IsQUFBQztBQUMzQyxJQUFNQyx5QkFBeUIsR0FBRyxlQUFlLEFBQUM7QUFFekQsSUFBTUMsY0FBYyxHQUFHLElBQUlDLE1BQU0sQ0FBQyxBQUFDLDZCQUVkLENBRUlGLE1BQXlCLENBRjNCRCxpQkFBaUIsRUFBQyw4QkFFbEIsQ0FBNEIsQ0FNZEEsTUFBaUIsQ0FON0JDLHlCQUF5QixFQUFDLGtOQU1oQixDQUFvQixDQUFVQSxNQUF5QixDQUFyREQsaUJBQWlCLEVBQUMsVUFBUSxDQUE0QixDQUFBLE1BU3JGLENBVDJEQyx5QkFBeUIsRUFBQywrUEFTckYsQ0FBQyxDQUFDLEFBQUM7SUFFVCxRQUE4QixHQUFmQyxjQUFjIn0=
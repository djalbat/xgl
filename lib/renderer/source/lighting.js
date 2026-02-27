"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get default () {
        return _default;
    },
    get normalsMatrixName () {
        return normalsMatrixName;
    },
    get vertexNormalAttributeName () {
        return vertexNormalAttributeName;
    }
});
const normalsMatrixName = "uNormalsMatrix";
const vertexNormalAttributeName = "aVertexNormal";
const lightingSource = new String(`
  
        uniform mat4 ${normalsMatrixName};

        attribute vec3 ${vertexNormalAttributeName};

        vec3 directionalLightColour = vec3(1, 1, 1),
             directionalVector = normalize(vec3(1.0, 1.0, 1.0));
          
        vec3 calculateLighting() {
          vec4 transformedNormal = ${normalsMatrixName} * vec4(${vertexNormalAttributeName}, 1.0);            

          float directional = (dot(transformedNormal.xyz, directionalVector) + 1.0) / 2.0;
          
          vec3 lighting = (directionalLightColour * directional);
          
          return lighting;
        }

      `);
const _default = lightingSource;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yZW5kZXJlci9zb3VyY2UvbGlnaHRpbmcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBub3JtYWxzTWF0cml4TmFtZSA9IFwidU5vcm1hbHNNYXRyaXhcIjtcbmV4cG9ydCBjb25zdCB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVOYW1lID0gXCJhVmVydGV4Tm9ybWFsXCI7XG5cbmNvbnN0IGxpZ2h0aW5nU291cmNlID0gbmV3IFN0cmluZyhgXG4gIFxuICAgICAgICB1bmlmb3JtIG1hdDQgJHtub3JtYWxzTWF0cml4TmFtZX07XG5cbiAgICAgICAgYXR0cmlidXRlIHZlYzMgJHt2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVOYW1lfTtcblxuICAgICAgICB2ZWMzIGRpcmVjdGlvbmFsTGlnaHRDb2xvdXIgPSB2ZWMzKDEsIDEsIDEpLFxuICAgICAgICAgICAgIGRpcmVjdGlvbmFsVmVjdG9yID0gbm9ybWFsaXplKHZlYzMoMS4wLCAxLjAsIDEuMCkpO1xuICAgICAgICAgIFxuICAgICAgICB2ZWMzIGNhbGN1bGF0ZUxpZ2h0aW5nKCkge1xuICAgICAgICAgIHZlYzQgdHJhbnNmb3JtZWROb3JtYWwgPSAke25vcm1hbHNNYXRyaXhOYW1lfSAqIHZlYzQoJHt2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVOYW1lfSwgMS4wKTsgICAgICAgICAgICBcblxuICAgICAgICAgIGZsb2F0IGRpcmVjdGlvbmFsID0gKGRvdCh0cmFuc2Zvcm1lZE5vcm1hbC54eXosIGRpcmVjdGlvbmFsVmVjdG9yKSArIDEuMCkgLyAyLjA7XG4gICAgICAgICAgXG4gICAgICAgICAgdmVjMyBsaWdodGluZyA9IChkaXJlY3Rpb25hbExpZ2h0Q29sb3VyICogZGlyZWN0aW9uYWwpO1xuICAgICAgICAgIFxuICAgICAgICAgIHJldHVybiBsaWdodGluZztcbiAgICAgICAgfVxuXG4gICAgICBgKTtcblxuZXhwb3J0IGRlZmF1bHQgbGlnaHRpbmdTb3VyY2U7Il0sIm5hbWVzIjpbIm5vcm1hbHNNYXRyaXhOYW1lIiwidmVydGV4Tm9ybWFsQXR0cmlidXRlTmFtZSIsImxpZ2h0aW5nU291cmNlIiwiU3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUEwQkE7ZUFBQTs7UUF4QmFBO2VBQUFBOztRQUNBQztlQUFBQTs7O0FBRE4sTUFBTUQsb0JBQW9CO0FBQzFCLE1BQU1DLDRCQUE0QjtBQUV6QyxNQUFNQyxpQkFBaUIsSUFBSUMsT0FBTyxDQUFDOztxQkFFZCxFQUFFSCxrQkFBa0I7O3VCQUVsQixFQUFFQywwQkFBMEI7Ozs7OzttQ0FNaEIsRUFBRUQsa0JBQWtCLFFBQVEsRUFBRUMsMEJBQTBCOzs7Ozs7Ozs7TUFTckYsQ0FBQztNQUVQLFdBQWVDIn0=
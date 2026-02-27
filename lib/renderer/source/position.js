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
    get offsetsMatrixName () {
        return offsetsMatrixName;
    },
    get positionMatrixName () {
        return positionMatrixName;
    },
    get projectionMatrixName () {
        return projectionMatrixName;
    },
    get rotationsMatrixName () {
        return rotationsMatrixName;
    },
    get vertexPositionAttributeName () {
        return vertexPositionAttributeName;
    }
});
const offsetsMatrixName = "uOffsetsMatrix";
const positionMatrixName = "uPositionMatrix";
const rotationsMatrixName = "uRotationsMatrix";
const projectionMatrixName = "uPerspectiveMatrix";
const vertexPositionAttributeName = "aVertexPosition";
const positionSource = new String(`
  
        uniform mat4 ${offsetsMatrixName},
                     ${rotationsMatrixName},
                     ${positionMatrixName},
                     ${projectionMatrixName};
        
        attribute vec4 ${vertexPositionAttributeName};

        vec4 calculatePosition() {
          vec4 position = ${projectionMatrixName} * ${positionMatrixName} * ${rotationsMatrixName} * ${offsetsMatrixName} * ${vertexPositionAttributeName};
          
          return position;
        }
        
      `);
const _default = positionSource;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yZW5kZXJlci9zb3VyY2UvcG9zaXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBvZmZzZXRzTWF0cml4TmFtZSA9IFwidU9mZnNldHNNYXRyaXhcIjtcbmV4cG9ydCBjb25zdCBwb3NpdGlvbk1hdHJpeE5hbWUgPSBcInVQb3NpdGlvbk1hdHJpeFwiO1xuZXhwb3J0IGNvbnN0IHJvdGF0aW9uc01hdHJpeE5hbWUgPSBcInVSb3RhdGlvbnNNYXRyaXhcIjtcbmV4cG9ydCBjb25zdCBwcm9qZWN0aW9uTWF0cml4TmFtZSA9IFwidVBlcnNwZWN0aXZlTWF0cml4XCI7XG5leHBvcnQgY29uc3QgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVOYW1lID0gXCJhVmVydGV4UG9zaXRpb25cIjtcblxuY29uc3QgcG9zaXRpb25Tb3VyY2UgPSBuZXcgU3RyaW5nKGBcbiAgXG4gICAgICAgIHVuaWZvcm0gbWF0NCAke29mZnNldHNNYXRyaXhOYW1lfSxcbiAgICAgICAgICAgICAgICAgICAgICR7cm90YXRpb25zTWF0cml4TmFtZX0sXG4gICAgICAgICAgICAgICAgICAgICAke3Bvc2l0aW9uTWF0cml4TmFtZX0sXG4gICAgICAgICAgICAgICAgICAgICAke3Byb2plY3Rpb25NYXRyaXhOYW1lfTtcbiAgICAgICAgXG4gICAgICAgIGF0dHJpYnV0ZSB2ZWM0ICR7dmVydGV4UG9zaXRpb25BdHRyaWJ1dGVOYW1lfTtcblxuICAgICAgICB2ZWM0IGNhbGN1bGF0ZVBvc2l0aW9uKCkge1xuICAgICAgICAgIHZlYzQgcG9zaXRpb24gPSAke3Byb2plY3Rpb25NYXRyaXhOYW1lfSAqICR7cG9zaXRpb25NYXRyaXhOYW1lfSAqICR7cm90YXRpb25zTWF0cml4TmFtZX0gKiAke29mZnNldHNNYXRyaXhOYW1lfSAqICR7dmVydGV4UG9zaXRpb25BdHRyaWJ1dGVOYW1lfTtcbiAgICAgICAgICBcbiAgICAgICAgICByZXR1cm4gcG9zaXRpb247XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICBgKTtcblxuZXhwb3J0IGRlZmF1bHQgcG9zaXRpb25Tb3VyY2U7XG4iXSwibmFtZXMiOlsib2Zmc2V0c01hdHJpeE5hbWUiLCJwb3NpdGlvbk1hdHJpeE5hbWUiLCJwcm9qZWN0aW9uTWF0cml4TmFtZSIsInJvdGF0aW9uc01hdHJpeE5hbWUiLCJ2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZU5hbWUiLCJwb3NpdGlvblNvdXJjZSIsIlN0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBeUJBO2VBQUE7O1FBdkJhQTtlQUFBQTs7UUFDQUM7ZUFBQUE7O1FBRUFDO2VBQUFBOztRQURBQztlQUFBQTs7UUFFQUM7ZUFBQUE7OztBQUpOLE1BQU1KLG9CQUFvQjtBQUMxQixNQUFNQyxxQkFBcUI7QUFDM0IsTUFBTUUsc0JBQXNCO0FBQzVCLE1BQU1ELHVCQUF1QjtBQUM3QixNQUFNRSw4QkFBOEI7QUFFM0MsTUFBTUMsaUJBQWlCLElBQUlDLE9BQU8sQ0FBQzs7cUJBRWQsRUFBRU4sa0JBQWtCO3FCQUNwQixFQUFFRyxvQkFBb0I7cUJBQ3RCLEVBQUVGLG1CQUFtQjtxQkFDckIsRUFBRUMscUJBQXFCOzt1QkFFckIsRUFBRUUsNEJBQTRCOzs7MEJBRzNCLEVBQUVGLHFCQUFxQixHQUFHLEVBQUVELG1CQUFtQixHQUFHLEVBQUVFLG9CQUFvQixHQUFHLEVBQUVILGtCQUFrQixHQUFHLEVBQUVJLDRCQUE0Qjs7Ozs7TUFLcEosQ0FBQztNQUVQLFdBQWVDIn0=
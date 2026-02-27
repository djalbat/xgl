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
const _texturedTriangle = /*#__PURE__*/ _interop_require_default(require("./texturedTriangle"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const Side = (properties)=>/*#__PURE__*/ React.createElement(_texturedTriangle.default, {
        scale: [
            1,
            1 / Math.sqrt(2),
            1
        ],
        position: [
            -0.5,
            0,
            0.5
        ],
        rotations: [
            -45,
            0,
            0
        ]
    });
const _default = Side;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL2VsZW1lbnQvc2lkZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFRleHR1cmVkVHJpYW5nbGUgZnJvbSBcIi4vdGV4dHVyZWRUcmlhbmdsZVwiO1xuXG5jb25zdCBTaWRlID0gKHByb3BlcnRpZXMpID0+XG5cbiAgPFRleHR1cmVkVHJpYW5nbGUgc2NhbGU9e1sgMSwgMS9NYXRoLnNxcnQoMiksIDEgXX0gcG9zaXRpb249e1sgLTAuNSwgMCwgMC41IF19IHJvdGF0aW9ucz17WyAtNDUsIDAsIDAgXX0gLz5cblxuO1xuXG5leHBvcnQgZGVmYXVsdCBTaWRlO1xuIl0sIm5hbWVzIjpbIlNpZGUiLCJwcm9wZXJ0aWVzIiwiVGV4dHVyZWRUcmlhbmdsZSIsInNjYWxlIiwiTWF0aCIsInNxcnQiLCJwb3NpdGlvbiIsInJvdGF0aW9ucyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBVUE7OztlQUFBOzs7eUVBUjZCOzs7Ozs7QUFFN0IsTUFBTUEsT0FBTyxDQUFDQywyQkFFWixvQkFBQ0MseUJBQWdCO1FBQUNDLE9BQU87WUFBRTtZQUFHLElBQUVDLEtBQUtDLElBQUksQ0FBQztZQUFJO1NBQUc7UUFBRUMsVUFBVTtZQUFFLENBQUM7WUFBSztZQUFHO1NBQUs7UUFBRUMsV0FBVztZQUFFLENBQUM7WUFBSTtZQUFHO1NBQUc7O01BSXpHLFdBQWVQIn0=
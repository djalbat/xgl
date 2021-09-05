"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _texturedTriangle = _interopRequireDefault(require("./texturedTriangle"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var Side = function(properties) {
    /*#__PURE__*/ return React.createElement(_texturedTriangle.default, {
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
};
var _default = Side;
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL2VsZW1lbnQvc2lkZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFRleHR1cmVkVHJpYW5nbGUgZnJvbSBcIi4vdGV4dHVyZWRUcmlhbmdsZVwiO1xuXG5jb25zdCBTaWRlID0gKHByb3BlcnRpZXMpID0+XG5cbiAgPFRleHR1cmVkVHJpYW5nbGUgc2NhbGU9e1sgMSwgMS9NYXRoLnNxcnQoMiksIDEgXX0gcG9zaXRpb249e1sgLTAuNSwgMCwgMC41IF19IHJvdGF0aW9ucz17WyAtNDUsIDAsIDAgXX0gLz5cblxuO1xuXG5leHBvcnQgZGVmYXVsdCBTaWRlO1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0FBRWlCLEdBQW9CLENBQXBCLGlCQUFvQjs7Ozs7O0FBRWpELEdBQUssQ0FBQyxJQUFJLFlBQUksVUFBVTs2Q0FGSyxpQkFBb0I7UUFJN0IsS0FBSztZQUFJLENBQUM7WUFBRSxDQUFDLEdBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQUcsQ0FBQzs7UUFBSSxRQUFRO2FBQUssR0FBRztZQUFFLENBQUM7WUFBRSxHQUFHOztRQUFJLFNBQVM7YUFBSyxFQUFFO1lBQUUsQ0FBQztZQUFFLENBQUM7Ozs7ZUFJeEYsSUFBSSJ9
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
var _texturedTriangle = /*#__PURE__*/ _interopRequireDefault(require("./texturedTriangle"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var Side = function(properties) {
    return /*#__PURE__*/ React.createElement(_texturedTriangle.default, {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL2VsZW1lbnQvc2lkZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFRleHR1cmVkVHJpYW5nbGUgZnJvbSBcIi4vdGV4dHVyZWRUcmlhbmdsZVwiO1xuXG5jb25zdCBTaWRlID0gKHByb3BlcnRpZXMpID0+XG5cbiAgPFRleHR1cmVkVHJpYW5nbGUgc2NhbGU9e1sgMSwgMS9NYXRoLnNxcnQoMiksIDEgXX0gcG9zaXRpb249e1sgLTAuNSwgMCwgMC41IF19IHJvdGF0aW9ucz17WyAtNDUsIDAsIDAgXX0gLz5cblxuO1xuXG5leHBvcnQgZGVmYXVsdCBTaWRlO1xuIl0sIm5hbWVzIjpbIlNpZGUiLCJwcm9wZXJ0aWVzIiwiVGV4dHVyZWRUcmlhbmdsZSIsInNjYWxlIiwiTWF0aCIsInNxcnQiLCJwb3NpdGlvbiIsInJvdGF0aW9ucyJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7OytCQVViLFNBQW9COzs7ZUFBcEIsUUFBb0I7OztxRUFSUyxvQkFBb0I7Ozs7OztBQUVqRCxJQUFNQSxJQUFJLEdBQUcsU0FBQ0MsVUFBVTt5QkFFdEIsb0JBQUNDLGlCQUFnQixRQUFBO1FBQUNDLEtBQUssRUFBRTtBQUFFLGFBQUM7QUFBRSxZQUFBLENBQUMsR0FBQ0MsSUFBSSxDQUFDQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQUUsYUFBQztTQUFFO1FBQUVDLFFBQVEsRUFBRTtZQUFFLENBQUMsR0FBRztBQUFFLGFBQUM7QUFBRSxlQUFHO1NBQUU7UUFBRUMsU0FBUyxFQUFFO1lBQUUsQ0FBQyxFQUFFO0FBQUUsYUFBQztBQUFFLGFBQUM7U0FBRTtNQUFJO0NBQUEsQUFFNUc7SUFFRCxRQUFvQixHQUFMUCxJQUFJIn0=
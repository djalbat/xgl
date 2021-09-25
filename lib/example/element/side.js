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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL2VsZW1lbnQvc2lkZS5qcyJdLCJuYW1lcyI6WyJUZXh0dXJlZFRyaWFuZ2xlIiwiU2lkZSIsInByb3BlcnRpZXMiLCJzY2FsZSIsIk1hdGgiLCJzcXJ0IiwicG9zaXRpb24iLCJyb3RhdGlvbnMiXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7O0FBRWlCLEdBQW9CLENBQXBCLGlCQUFvQjs7Ozs7O0FBRWpELEdBQUssQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFQLFVBQVU7a0JBRXRCLE1BQU0scUJBSnFCLGlCQUFvQjtRQUk3QixLQUFLLEVBQUUsQ0FBQztZQUFDLENBQUM7WUFBRSxDQUFDLEdBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQUcsQ0FBQztRQUFDLENBQUM7UUFBRSxRQUFRLEVBQUUsQ0FBQzthQUFFLEdBQUc7WUFBRSxDQUFDO1lBQUUsR0FBRztRQUFDLENBQUM7UUFBRSxTQUFTLEVBQUUsQ0FBQzthQUFFLEVBQUU7WUFBRSxDQUFDO1lBQUUsQ0FBQztRQUFDLENBQUM7OztlQUkxRixJQUFJIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBUZXh0dXJlZFRyaWFuZ2xlIGZyb20gXCIuL3RleHR1cmVkVHJpYW5nbGVcIjtcblxuY29uc3QgU2lkZSA9IChwcm9wZXJ0aWVzKSA9PlxuXG4gIDxUZXh0dXJlZFRyaWFuZ2xlIHNjYWxlPXtbIDEsIDEvTWF0aC5zcXJ0KDIpLCAxIF19IHBvc2l0aW9uPXtbIC0wLjUsIDAsIDAuNSBdfSByb3RhdGlvbnM9e1sgLTQ1LCAwLCAwIF19IC8+XG5cbjtcblxuZXhwb3J0IGRlZmF1bHQgU2lkZTtcbiJdfQ==
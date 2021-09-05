"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _colouredSquare = _interopRequireDefault(require("./colouredSquare"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var Face = function(properties) {
    var colour = properties.colour;
    return(/*#__PURE__*/ React.createElement(_colouredSquare.default, {
        colour: colour,
        position: [
            -0.5,
            -0.5,
            +0.5
        ]
    }));
};
var _default = Face;
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL2VsZW1lbnQvZmFjZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IENvbG91cmVkU3F1YXJlIGZyb20gXCIuL2NvbG91cmVkU3F1YXJlXCI7XG5cbmNvbnN0IEZhY2UgPSAocHJvcGVydGllcykgPT4ge1xuICBjb25zdCB7IGNvbG91ciB9ID0gcHJvcGVydGllcztcblxuICByZXR1cm4gKFxuXG4gICAgPENvbG91cmVkU3F1YXJlIGNvbG91cj17Y29sb3VyfSBwb3NpdGlvbj17WyAtMC41LCAtMC41LCArMC41IF19IC8+XG5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZhY2U7XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7QUFFZSxHQUFrQixDQUFsQixlQUFrQjs7Ozs7O0FBRTdDLEdBQUssQ0FBQyxJQUFJLFlBQUksVUFBVSxFQUFLLENBQUM7SUFDNUIsR0FBSyxDQUFHLE1BQU0sR0FBSyxVQUFVLENBQXJCLE1BQU07NkNBSFcsZUFBa0I7UUFPekIsTUFBTSxFQUFFLE1BQU07UUFBRSxRQUFRO2FBQUssR0FBRzthQUFHLEdBQUc7YUFBRyxHQUFHOzs7QUFHaEUsQ0FBQztlQUVjLElBQUkifQ==
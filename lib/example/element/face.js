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
var _colouredSquare = /*#__PURE__*/ _interopRequireDefault(require("./colouredSquare"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var Face = function(properties) {
    var colour = properties.colour;
    return /*#__PURE__*/ React.createElement(_colouredSquare.default, {
        colour: colour,
        position: [
            -0.5,
            -0.5,
            +0.5
        ]
    });
};
var _default = Face;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL2VsZW1lbnQvZmFjZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IENvbG91cmVkU3F1YXJlIGZyb20gXCIuL2NvbG91cmVkU3F1YXJlXCI7XG5cbmNvbnN0IEZhY2UgPSAocHJvcGVydGllcykgPT4ge1xuICBjb25zdCB7IGNvbG91ciB9ID0gcHJvcGVydGllcztcblxuICByZXR1cm4gKFxuXG4gICAgPENvbG91cmVkU3F1YXJlIGNvbG91cj17Y29sb3VyfSBwb3NpdGlvbj17WyAtMC41LCAtMC41LCArMC41IF19IC8+XG5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZhY2U7XG4iXSwibmFtZXMiOlsiRmFjZSIsInByb3BlcnRpZXMiLCJjb2xvdXIiLCJDb2xvdXJlZFNxdWFyZSIsInBvc2l0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7K0JBY2IsU0FBb0I7OztlQUFwQixRQUFvQjs7O21FQVpPLGtCQUFrQjs7Ozs7O0FBRTdDLElBQU1BLElBQUksR0FBRyxTQUFDQyxVQUFVLEVBQUs7SUFDM0IsSUFBTSxBQUFFQyxNQUFNLEdBQUtELFVBQVUsQ0FBckJDLE1BQU0sQUFBZSxBQUFDO0lBRTlCLHFCQUVFLG9CQUFDQyxlQUFjLFFBQUE7UUFBQ0QsTUFBTSxFQUFFQSxNQUFNO1FBQUVFLFFBQVEsRUFBRTtZQUFFLENBQUMsR0FBRztZQUFFLENBQUMsR0FBRztZQUFFLENBQUMsR0FBRztTQUFFO01BQUksQ0FFbEU7Q0FDSCxBQUFDO0lBRUYsUUFBb0IsR0FBTEosSUFBSSJ9
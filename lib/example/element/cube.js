"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _face = _interopRequireDefault(require("./face"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var defaultColour = [
    1,
    1,
    0
];
var Cube = function(properties) {
    var _colour = properties.colour, colour = _colour === void 0 ? defaultColour : _colour;
    return [
        /*#__PURE__*/ React.createElement(_face.default, {
            colour: colour,
            rotations: [
                0,
                0,
                0
            ]
        }),
        /*#__PURE__*/ React.createElement(_face.default, {
            colour: colour,
            rotations: [
                +90,
                0,
                0
            ]
        }),
        /*#__PURE__*/ React.createElement(_face.default, {
            colour: colour,
            rotations: [
                0,
                +90,
                0
            ]
        }),
        /*#__PURE__*/ React.createElement(_face.default, {
            colour: colour,
            rotations: [
                180,
                0,
                0
            ]
        }),
        /*#__PURE__*/ React.createElement(_face.default, {
            colour: colour,
            rotations: [
                -90,
                0,
                0
            ]
        }),
        /*#__PURE__*/ React.createElement(_face.default, {
            colour: colour,
            rotations: [
                0,
                -90,
                0
            ]
        }), 
    ];
};
var _default = Cube;
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL2VsZW1lbnQvY3ViZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEZhY2UgZnJvbSBcIi4vZmFjZVwiO1xuXG5jb25zdCBkZWZhdWx0Q29sb3VyID0gWyAxLCAxLCAwIF07XG5cbmNvbnN0IEN1YmUgPSAocHJvcGVydGllcykgPT4ge1xuICBjb25zdCB7IGNvbG91ciA9IGRlZmF1bHRDb2xvdXIgfSA9IHByb3BlcnRpZXM7XG5cbiAgcmV0dXJuIChbXG5cbiAgICA8RmFjZSBjb2xvdXI9e2NvbG91cn0gcm90YXRpb25zPXtbICAgMCwgICAwLCAwIF19IC8+LFxuICAgIDxGYWNlIGNvbG91cj17Y29sb3VyfSByb3RhdGlvbnM9e1sgKzkwLCAgIDAsIDAgXX0gLz4sXG4gICAgPEZhY2UgY29sb3VyPXtjb2xvdXJ9IHJvdGF0aW9ucz17WyAgIDAsICs5MCwgMCBdfSAvPixcblxuICAgIDxGYWNlIGNvbG91cj17Y29sb3VyfSByb3RhdGlvbnM9e1sgMTgwLCAgIDAsIDAgXX0gLz4sXG4gICAgPEZhY2UgY29sb3VyPXtjb2xvdXJ9IHJvdGF0aW9ucz17WyAtOTAsICAgMCwgMCBdfSAvPixcbiAgICA8RmFjZSBjb2xvdXI9e2NvbG91cn0gcm90YXRpb25zPXtbICAgMCwgLTkwLCAwIF19IC8+LFxuXG4gIF0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ3ViZTtcbiJdLCJuYW1lcyI6WyJkZWZhdWx0Q29sb3VyIiwiQ3ViZSIsInByb3BlcnRpZXMiLCJjb2xvdXIiLCJGYWNlIiwicm90YXRpb25zIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7OztBQUVLLEdBQVEsQ0FBUixLQUFROzs7Ozs7QUFFekIsR0FBSyxDQUFDQSxhQUFhLEdBQUcsQ0FBQztBQUFDLEtBQUM7QUFBRSxLQUFDO0FBQUUsS0FBQztBQUFDLENBQUM7QUFFakMsR0FBSyxDQUFDQyxJQUFJLEdBQUcsUUFBUSxDQUFQQyxVQUFVLEVBQUssQ0FBQztJQUM1QixHQUFLLFdBQThCQSxVQUFVLENBQXJDQyxNQUFNLEVBQU5BLE1BQU0sd0JBQUdILGFBQWE7SUFFOUIsTUFBTSxDQUFFLENBQUM7MENBRU5JLEtBQUk7WUFBQ0QsTUFBTSxFQUFFQSxNQUFNO1lBQUVFLFNBQVMsRUFBRSxDQUFDO0FBQUcsaUJBQUM7QUFBSSxpQkFBQztBQUFFLGlCQUFDO1lBQUMsQ0FBQzs7MENBQy9DRCxLQUFJO1lBQUNELE1BQU0sRUFBRUEsTUFBTTtZQUFFRSxTQUFTLEVBQUUsQ0FBQztpQkFBRSxFQUFFO0FBQUksaUJBQUM7QUFBRSxpQkFBQztZQUFDLENBQUM7OzBDQUMvQ0QsS0FBSTtZQUFDRCxNQUFNLEVBQUVBLE1BQU07WUFBRUUsU0FBUyxFQUFFLENBQUM7QUFBRyxpQkFBQztpQkFBRyxFQUFFO0FBQUUsaUJBQUM7WUFBQyxDQUFDOzswQ0FFL0NELEtBQUk7WUFBQ0QsTUFBTSxFQUFFQSxNQUFNO1lBQUVFLFNBQVMsRUFBRSxDQUFDO0FBQUMsbUJBQUc7QUFBSSxpQkFBQztBQUFFLGlCQUFDO1lBQUMsQ0FBQzs7MENBQy9DRCxLQUFJO1lBQUNELE1BQU0sRUFBRUEsTUFBTTtZQUFFRSxTQUFTLEVBQUUsQ0FBQztpQkFBRSxFQUFFO0FBQUksaUJBQUM7QUFBRSxpQkFBQztZQUFDLENBQUM7OzBDQUMvQ0QsS0FBSTtZQUFDRCxNQUFNLEVBQUVBLE1BQU07WUFBRUUsU0FBUyxFQUFFLENBQUM7QUFBRyxpQkFBQztpQkFBRyxFQUFFO0FBQUUsaUJBQUM7WUFBQyxDQUFDOztJQUVsRCxDQUFDO0FBQ0gsQ0FBQztlQUVjSixJQUFJIn0=
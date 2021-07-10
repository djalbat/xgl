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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL2VsZW1lbnQvY3ViZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEZhY2UgZnJvbSBcIi4vZmFjZVwiO1xuXG5jb25zdCBkZWZhdWx0Q29sb3VyID0gWyAxLCAxLCAwIF07XG5cbmNvbnN0IEN1YmUgPSAocHJvcGVydGllcykgPT4ge1xuICBjb25zdCB7IGNvbG91ciA9IGRlZmF1bHRDb2xvdXIgfSA9IHByb3BlcnRpZXM7XG5cbiAgcmV0dXJuIChbXG5cbiAgICA8RmFjZSBjb2xvdXI9e2NvbG91cn0gcm90YXRpb25zPXtbICAgMCwgICAwLCAwIF19IC8+LFxuICAgIDxGYWNlIGNvbG91cj17Y29sb3VyfSByb3RhdGlvbnM9e1sgKzkwLCAgIDAsIDAgXX0gLz4sXG4gICAgPEZhY2UgY29sb3VyPXtjb2xvdXJ9IHJvdGF0aW9ucz17WyAgIDAsICs5MCwgMCBdfSAvPixcblxuICAgIDxGYWNlIGNvbG91cj17Y29sb3VyfSByb3RhdGlvbnM9e1sgMTgwLCAgIDAsIDAgXX0gLz4sXG4gICAgPEZhY2UgY29sb3VyPXtjb2xvdXJ9IHJvdGF0aW9ucz17WyAtOTAsICAgMCwgMCBdfSAvPixcbiAgICA8RmFjZSBjb2xvdXI9e2NvbG91cn0gcm90YXRpb25zPXtbICAgMCwgLTkwLCAwIF19IC8+LFxuXG4gIF0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ3ViZTtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztBQUVLLEdBQVEsQ0FBUixLQUFROzs7Ozs7QUFFekIsR0FBSyxDQUFDLGFBQWE7SUFBSyxDQUFDO0lBQUUsQ0FBQztJQUFFLENBQUM7O0FBRS9CLEdBQUssQ0FBQyxJQUFJLFlBQUksVUFBVSxFQUFLLENBQUM7SUFDNUIsR0FBSyxXQUE4QixVQUFVLENBQXJDLE1BQU0sRUFBTixNQUFNLHdCQUFHLGFBQWE7OzBDQUxmLEtBQVE7WUFTZixNQUFNLEVBQUUsTUFBTTtZQUFFLFNBQVM7Z0JBQU0sQ0FBQztnQkFBSSxDQUFDO2dCQUFFLENBQUM7OzswQ0FUakMsS0FBUTtZQVVmLE1BQU0sRUFBRSxNQUFNO1lBQUUsU0FBUztpQkFBSyxFQUFFO2dCQUFJLENBQUM7Z0JBQUUsQ0FBQzs7OzBDQVZqQyxLQUFRO1lBV2YsTUFBTSxFQUFFLE1BQU07WUFBRSxTQUFTO2dCQUFNLENBQUM7aUJBQUcsRUFBRTtnQkFBRSxDQUFDOzs7MENBWGpDLEtBQVE7WUFhZixNQUFNLEVBQUUsTUFBTTtZQUFFLFNBQVM7Z0JBQUksR0FBRztnQkFBSSxDQUFDO2dCQUFFLENBQUM7OzswQ0FiakMsS0FBUTtZQWNmLE1BQU0sRUFBRSxNQUFNO1lBQUUsU0FBUztpQkFBSyxFQUFFO2dCQUFJLENBQUM7Z0JBQUUsQ0FBQzs7OzBDQWRqQyxLQUFRO1lBZWYsTUFBTSxFQUFFLE1BQU07WUFBRSxTQUFTO2dCQUFNLENBQUM7aUJBQUcsRUFBRTtnQkFBRSxDQUFDOzs7O0FBR2xELENBQUM7ZUFFYyxJQUFJIn0=
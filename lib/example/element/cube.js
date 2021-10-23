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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL2VsZW1lbnQvY3ViZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEZhY2UgZnJvbSBcIi4vZmFjZVwiO1xuXG5jb25zdCBkZWZhdWx0Q29sb3VyID0gWyAxLCAxLCAwIF07XG5cbmNvbnN0IEN1YmUgPSAocHJvcGVydGllcykgPT4ge1xuICBjb25zdCB7IGNvbG91ciA9IGRlZmF1bHRDb2xvdXIgfSA9IHByb3BlcnRpZXM7XG5cbiAgcmV0dXJuIChbXG5cbiAgICA8RmFjZSBjb2xvdXI9e2NvbG91cn0gcm90YXRpb25zPXtbICAgMCwgICAwLCAwIF19IC8+LFxuICAgIDxGYWNlIGNvbG91cj17Y29sb3VyfSByb3RhdGlvbnM9e1sgKzkwLCAgIDAsIDAgXX0gLz4sXG4gICAgPEZhY2UgY29sb3VyPXtjb2xvdXJ9IHJvdGF0aW9ucz17WyAgIDAsICs5MCwgMCBdfSAvPixcblxuICAgIDxGYWNlIGNvbG91cj17Y29sb3VyfSByb3RhdGlvbnM9e1sgMTgwLCAgIDAsIDAgXX0gLz4sXG4gICAgPEZhY2UgY29sb3VyPXtjb2xvdXJ9IHJvdGF0aW9ucz17WyAtOTAsICAgMCwgMCBdfSAvPixcbiAgICA8RmFjZSBjb2xvdXI9e2NvbG91cn0gcm90YXRpb25zPXtbICAgMCwgLTkwLCAwIF19IC8+LFxuXG4gIF0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ3ViZTtcbiJdLCJuYW1lcyI6WyJkZWZhdWx0Q29sb3VyIiwiQ3ViZSIsInByb3BlcnRpZXMiLCJjb2xvdXIiLCJyb3RhdGlvbnMiXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7O0FBRUssR0FBUSxDQUFSLEtBQVE7Ozs7OztBQUV6QixHQUFLLENBQUNBLGFBQWEsR0FBRyxDQUFDO0lBQUMsQ0FBQztJQUFFLENBQUM7SUFBRSxDQUFDO0FBQUMsQ0FBQztBQUVqQyxHQUFLLENBQUNDLElBQUksR0FBRyxRQUFRLENBQVBDLFVBQVUsRUFBSyxDQUFDO0lBQzVCLEdBQUssV0FBOEJBLFVBQVUsQ0FBckNDLE1BQU0sRUFBTkEsTUFBTSx3QkFBR0gsYUFBYTtJQUU5QixNQUFNLENBQUUsQ0FBQzswQ0FQTSxLQUFRO1lBU2ZHLE1BQU0sRUFBRUEsTUFBTTtZQUFFQyxTQUFTLEVBQUUsQ0FBQztnQkFBRyxDQUFDO2dCQUFJLENBQUM7Z0JBQUUsQ0FBQztZQUFDLENBQUM7OzBDQVRuQyxLQUFRO1lBVWZELE1BQU0sRUFBRUEsTUFBTTtZQUFFQyxTQUFTLEVBQUUsQ0FBQztpQkFBRSxFQUFFO2dCQUFJLENBQUM7Z0JBQUUsQ0FBQztZQUFDLENBQUM7OzBDQVZuQyxLQUFRO1lBV2ZELE1BQU0sRUFBRUEsTUFBTTtZQUFFQyxTQUFTLEVBQUUsQ0FBQztnQkFBRyxDQUFDO2lCQUFHLEVBQUU7Z0JBQUUsQ0FBQztZQUFDLENBQUM7OzBDQVhuQyxLQUFRO1lBYWZELE1BQU0sRUFBRUEsTUFBTTtZQUFFQyxTQUFTLEVBQUUsQ0FBQztnQkFBQyxHQUFHO2dCQUFJLENBQUM7Z0JBQUUsQ0FBQztZQUFDLENBQUM7OzBDQWJuQyxLQUFRO1lBY2ZELE1BQU0sRUFBRUEsTUFBTTtZQUFFQyxTQUFTLEVBQUUsQ0FBQztpQkFBRSxFQUFFO2dCQUFJLENBQUM7Z0JBQUUsQ0FBQztZQUFDLENBQUM7OzBDQWRuQyxLQUFRO1lBZWZELE1BQU0sRUFBRUEsTUFBTTtZQUFFQyxTQUFTLEVBQUUsQ0FBQztnQkFBRyxDQUFDO2lCQUFHLEVBQUU7Z0JBQUUsQ0FBQztZQUFDLENBQUM7O0lBRWxELENBQUM7QUFDSCxDQUFDO2VBRWNILElBQUkifQ==
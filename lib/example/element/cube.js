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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL2VsZW1lbnQvY3ViZS5qcyJdLCJuYW1lcyI6WyJGYWNlIiwiZGVmYXVsdENvbG91ciIsIkN1YmUiLCJwcm9wZXJ0aWVzIiwiY29sb3VyIiwicm90YXRpb25zIl0sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztBQUVLLEdBQVEsQ0FBUixLQUFROzs7Ozs7QUFFekIsR0FBSyxDQUFDLGFBQWEsR0FBRyxDQUFDO0lBQUMsQ0FBQztJQUFFLENBQUM7SUFBRSxDQUFDO0FBQUMsQ0FBQztBQUVqQyxHQUFLLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBUCxVQUFVLEVBQUssQ0FBQztJQUM1QixHQUFLLFdBQThCLFVBQVUsQ0FBckMsTUFBTSxFQUFOLE1BQU0sd0JBQUcsYUFBYTtJQUU5QixNQUFNLENBQUUsQ0FBQzswQ0FQTSxLQUFRO1lBU2YsTUFBTSxFQUFFLE1BQU07WUFBRSxTQUFTLEVBQUUsQ0FBQztnQkFBRyxDQUFDO2dCQUFJLENBQUM7Z0JBQUUsQ0FBQztZQUFDLENBQUM7OzBDQVRuQyxLQUFRO1lBVWYsTUFBTSxFQUFFLE1BQU07WUFBRSxTQUFTLEVBQUUsQ0FBQztpQkFBRSxFQUFFO2dCQUFJLENBQUM7Z0JBQUUsQ0FBQztZQUFDLENBQUM7OzBDQVZuQyxLQUFRO1lBV2YsTUFBTSxFQUFFLE1BQU07WUFBRSxTQUFTLEVBQUUsQ0FBQztnQkFBRyxDQUFDO2lCQUFHLEVBQUU7Z0JBQUUsQ0FBQztZQUFDLENBQUM7OzBDQVhuQyxLQUFRO1lBYWYsTUFBTSxFQUFFLE1BQU07WUFBRSxTQUFTLEVBQUUsQ0FBQztnQkFBQyxHQUFHO2dCQUFJLENBQUM7Z0JBQUUsQ0FBQztZQUFDLENBQUM7OzBDQWJuQyxLQUFRO1lBY2YsTUFBTSxFQUFFLE1BQU07WUFBRSxTQUFTLEVBQUUsQ0FBQztpQkFBRSxFQUFFO2dCQUFJLENBQUM7Z0JBQUUsQ0FBQztZQUFDLENBQUM7OzBDQWRuQyxLQUFRO1lBZWYsTUFBTSxFQUFFLE1BQU07WUFBRSxTQUFTLEVBQUUsQ0FBQztnQkFBRyxDQUFDO2lCQUFHLEVBQUU7Z0JBQUUsQ0FBQztZQUFDLENBQUM7O0lBRWxELENBQUM7QUFDSCxDQUFDO2VBRWMsSUFBSSIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRmFjZSBmcm9tIFwiLi9mYWNlXCI7XG5cbmNvbnN0IGRlZmF1bHRDb2xvdXIgPSBbIDEsIDEsIDAgXTtcblxuY29uc3QgQ3ViZSA9IChwcm9wZXJ0aWVzKSA9PiB7XG4gIGNvbnN0IHsgY29sb3VyID0gZGVmYXVsdENvbG91ciB9ID0gcHJvcGVydGllcztcblxuICByZXR1cm4gKFtcblxuICAgIDxGYWNlIGNvbG91cj17Y29sb3VyfSByb3RhdGlvbnM9e1sgICAwLCAgIDAsIDAgXX0gLz4sXG4gICAgPEZhY2UgY29sb3VyPXtjb2xvdXJ9IHJvdGF0aW9ucz17WyArOTAsICAgMCwgMCBdfSAvPixcbiAgICA8RmFjZSBjb2xvdXI9e2NvbG91cn0gcm90YXRpb25zPXtbICAgMCwgKzkwLCAwIF19IC8+LFxuXG4gICAgPEZhY2UgY29sb3VyPXtjb2xvdXJ9IHJvdGF0aW9ucz17WyAxODAsICAgMCwgMCBdfSAvPixcbiAgICA8RmFjZSBjb2xvdXI9e2NvbG91cn0gcm90YXRpb25zPXtbIC05MCwgICAwLCAwIF19IC8+LFxuICAgIDxGYWNlIGNvbG91cj17Y29sb3VyfSByb3RhdGlvbnM9e1sgICAwLCAtOTAsIDAgXX0gLz4sXG5cbiAgXSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDdWJlO1xuIl19
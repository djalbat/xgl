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
var _face = /*#__PURE__*/ _interopRequireDefault(require("./face"));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL2VsZW1lbnQvY3ViZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEZhY2UgZnJvbSBcIi4vZmFjZVwiO1xuXG5jb25zdCBkZWZhdWx0Q29sb3VyID0gWyAxLCAxLCAwIF07XG5cbmNvbnN0IEN1YmUgPSAocHJvcGVydGllcykgPT4ge1xuICBjb25zdCB7IGNvbG91ciA9IGRlZmF1bHRDb2xvdXIgfSA9IHByb3BlcnRpZXM7XG5cbiAgcmV0dXJuIChbXG5cbiAgICA8RmFjZSBjb2xvdXI9e2NvbG91cn0gcm90YXRpb25zPXtbICAgMCwgICAwLCAwIF19IC8+LFxuICAgIDxGYWNlIGNvbG91cj17Y29sb3VyfSByb3RhdGlvbnM9e1sgKzkwLCAgIDAsIDAgXX0gLz4sXG4gICAgPEZhY2UgY29sb3VyPXtjb2xvdXJ9IHJvdGF0aW9ucz17WyAgIDAsICs5MCwgMCBdfSAvPixcblxuICAgIDxGYWNlIGNvbG91cj17Y29sb3VyfSByb3RhdGlvbnM9e1sgMTgwLCAgIDAsIDAgXX0gLz4sXG4gICAgPEZhY2UgY29sb3VyPXtjb2xvdXJ9IHJvdGF0aW9ucz17WyAtOTAsICAgMCwgMCBdfSAvPixcbiAgICA8RmFjZSBjb2xvdXI9e2NvbG91cn0gcm90YXRpb25zPXtbICAgMCwgLTkwLCAwIF19IC8+LFxuXG4gIF0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ3ViZTtcbiJdLCJuYW1lcyI6WyJkZWZhdWx0Q29sb3VyIiwiQ3ViZSIsInByb3BlcnRpZXMiLCJjb2xvdXIiLCJGYWNlIiwicm90YXRpb25zIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7K0JBc0JiLFNBQW9COzs7ZUFBcEIsUUFBb0I7Ozt5REFwQkgsUUFBUTs7Ozs7O0FBRXpCLElBQU1BLGFBQWEsR0FBRztBQUFFLEtBQUM7QUFBRSxLQUFDO0FBQUUsS0FBQztDQUFFLEFBQUM7QUFFbEMsSUFBTUMsSUFBSSxHQUFHLFNBQUNDLFVBQVUsRUFBSztJQUMzQixjQUFtQ0EsVUFBVSxDQUFyQ0MsTUFBTSxFQUFOQSxNQUFNLHdCQUFHSCxhQUFhLFVBQUEsQUFBZ0I7SUFFOUMsT0FBUTtzQkFFTixvQkFBQ0ksS0FBSSxRQUFBO1lBQUNELE1BQU0sRUFBRUEsTUFBTTtZQUFFRSxTQUFTLEVBQUU7QUFBSSxpQkFBQztBQUFJLGlCQUFDO0FBQUUsaUJBQUM7YUFBRTtVQUFJO3NCQUNwRCxvQkFBQ0QsS0FBSSxRQUFBO1lBQUNELE1BQU0sRUFBRUEsTUFBTTtZQUFFRSxTQUFTLEVBQUU7Z0JBQUUsQ0FBQyxFQUFFO0FBQUksaUJBQUM7QUFBRSxpQkFBQzthQUFFO1VBQUk7c0JBQ3BELG9CQUFDRCxLQUFJLFFBQUE7WUFBQ0QsTUFBTSxFQUFFQSxNQUFNO1lBQUVFLFNBQVMsRUFBRTtBQUFJLGlCQUFDO2dCQUFFLENBQUMsRUFBRTtBQUFFLGlCQUFDO2FBQUU7VUFBSTtzQkFFcEQsb0JBQUNELEtBQUksUUFBQTtZQUFDRCxNQUFNLEVBQUVBLE1BQU07WUFBRUUsU0FBUyxFQUFFO0FBQUUsbUJBQUc7QUFBSSxpQkFBQztBQUFFLGlCQUFDO2FBQUU7VUFBSTtzQkFDcEQsb0JBQUNELEtBQUksUUFBQTtZQUFDRCxNQUFNLEVBQUVBLE1BQU07WUFBRUUsU0FBUyxFQUFFO2dCQUFFLENBQUMsRUFBRTtBQUFJLGlCQUFDO0FBQUUsaUJBQUM7YUFBRTtVQUFJO3NCQUNwRCxvQkFBQ0QsS0FBSSxRQUFBO1lBQUNELE1BQU0sRUFBRUEsTUFBTTtZQUFFRSxTQUFTLEVBQUU7QUFBSSxpQkFBQztnQkFBRSxDQUFDLEVBQUU7QUFBRSxpQkFBQzthQUFFO1VBQUk7S0FFckQsQ0FBRTtDQUNKLEFBQUM7SUFFRixRQUFvQixHQUFMSixJQUFJIn0=
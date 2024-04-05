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
var _face = /*#__PURE__*/ _interop_require_default(require("./face"));
function _interop_require_default(obj) {
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
    var _properties_colour = properties.colour, colour = _properties_colour === void 0 ? defaultColour : _properties_colour;
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
        })
    ];
};
var _default = Cube;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL2VsZW1lbnQvY3ViZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEZhY2UgZnJvbSBcIi4vZmFjZVwiO1xuXG5jb25zdCBkZWZhdWx0Q29sb3VyID0gWyAxLCAxLCAwIF07XG5cbmNvbnN0IEN1YmUgPSAocHJvcGVydGllcykgPT4ge1xuICBjb25zdCB7IGNvbG91ciA9IGRlZmF1bHRDb2xvdXIgfSA9IHByb3BlcnRpZXM7XG5cbiAgcmV0dXJuIChbXG5cbiAgICA8RmFjZSBjb2xvdXI9e2NvbG91cn0gcm90YXRpb25zPXtbICAgMCwgICAwLCAwIF19IC8+LFxuICAgIDxGYWNlIGNvbG91cj17Y29sb3VyfSByb3RhdGlvbnM9e1sgKzkwLCAgIDAsIDAgXX0gLz4sXG4gICAgPEZhY2UgY29sb3VyPXtjb2xvdXJ9IHJvdGF0aW9ucz17WyAgIDAsICs5MCwgMCBdfSAvPixcblxuICAgIDxGYWNlIGNvbG91cj17Y29sb3VyfSByb3RhdGlvbnM9e1sgMTgwLCAgIDAsIDAgXX0gLz4sXG4gICAgPEZhY2UgY29sb3VyPXtjb2xvdXJ9IHJvdGF0aW9ucz17WyAtOTAsICAgMCwgMCBdfSAvPixcbiAgICA8RmFjZSBjb2xvdXI9e2NvbG91cn0gcm90YXRpb25zPXtbICAgMCwgLTkwLCAwIF19IC8+LFxuXG4gIF0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ3ViZTtcbiJdLCJuYW1lcyI6WyJkZWZhdWx0Q29sb3VyIiwiQ3ViZSIsInByb3BlcnRpZXMiLCJjb2xvdXIiLCJGYWNlIiwicm90YXRpb25zIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFzQkE7OztlQUFBOzs7MkRBcEJpQjs7Ozs7O0FBRWpCLElBQU1BLGdCQUFnQjtJQUFFO0lBQUc7SUFBRztDQUFHO0FBRWpDLElBQU1DLE9BQU8sU0FBQ0M7SUFDWix5QkFBbUNBLFdBQTNCQyxRQUFBQSx5Q0FBU0g7SUFFakIsT0FBUTtzQkFFTixvQkFBQ0ksYUFBSTtZQUFDRCxRQUFRQTtZQUFRRSxXQUFXO2dCQUFJO2dCQUFLO2dCQUFHO2FBQUc7O3NCQUNoRCxvQkFBQ0QsYUFBSTtZQUFDRCxRQUFRQTtZQUFRRSxXQUFXO2dCQUFFLENBQUM7Z0JBQU07Z0JBQUc7YUFBRzs7c0JBQ2hELG9CQUFDRCxhQUFJO1lBQUNELFFBQVFBO1lBQVFFLFdBQVc7Z0JBQUk7Z0JBQUcsQ0FBQztnQkFBSTthQUFHOztzQkFFaEQsb0JBQUNELGFBQUk7WUFBQ0QsUUFBUUE7WUFBUUUsV0FBVztnQkFBRTtnQkFBTztnQkFBRzthQUFHOztzQkFDaEQsb0JBQUNELGFBQUk7WUFBQ0QsUUFBUUE7WUFBUUUsV0FBVztnQkFBRSxDQUFDO2dCQUFNO2dCQUFHO2FBQUc7O3NCQUNoRCxvQkFBQ0QsYUFBSTtZQUFDRCxRQUFRQTtZQUFRRSxXQUFXO2dCQUFJO2dCQUFHLENBQUM7Z0JBQUk7YUFBRzs7S0FFakQ7QUFDSDtJQUVBLFdBQWVKIn0=
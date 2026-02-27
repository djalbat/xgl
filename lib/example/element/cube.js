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
const _face = /*#__PURE__*/ _interop_require_default(require("./face"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const defaultColour = [
    1,
    1,
    0
];
const Cube = (properties)=>{
    const { colour = defaultColour } = properties;
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
const _default = Cube;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL2VsZW1lbnQvY3ViZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEZhY2UgZnJvbSBcIi4vZmFjZVwiO1xuXG5jb25zdCBkZWZhdWx0Q29sb3VyID0gWyAxLCAxLCAwIF07XG5cbmNvbnN0IEN1YmUgPSAocHJvcGVydGllcykgPT4ge1xuICBjb25zdCB7IGNvbG91ciA9IGRlZmF1bHRDb2xvdXIgfSA9IHByb3BlcnRpZXM7XG5cbiAgcmV0dXJuIChbXG5cbiAgICA8RmFjZSBjb2xvdXI9e2NvbG91cn0gcm90YXRpb25zPXtbICAgMCwgICAwLCAwIF19IC8+LFxuICAgIDxGYWNlIGNvbG91cj17Y29sb3VyfSByb3RhdGlvbnM9e1sgKzkwLCAgIDAsIDAgXX0gLz4sXG4gICAgPEZhY2UgY29sb3VyPXtjb2xvdXJ9IHJvdGF0aW9ucz17WyAgIDAsICs5MCwgMCBdfSAvPixcblxuICAgIDxGYWNlIGNvbG91cj17Y29sb3VyfSByb3RhdGlvbnM9e1sgMTgwLCAgIDAsIDAgXX0gLz4sXG4gICAgPEZhY2UgY29sb3VyPXtjb2xvdXJ9IHJvdGF0aW9ucz17WyAtOTAsICAgMCwgMCBdfSAvPixcbiAgICA8RmFjZSBjb2xvdXI9e2NvbG91cn0gcm90YXRpb25zPXtbICAgMCwgLTkwLCAwIF19IC8+LFxuXG4gIF0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ3ViZTtcbiJdLCJuYW1lcyI6WyJkZWZhdWx0Q29sb3VyIiwiQ3ViZSIsInByb3BlcnRpZXMiLCJjb2xvdXIiLCJGYWNlIiwicm90YXRpb25zIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFzQkE7OztlQUFBOzs7NkRBcEJpQjs7Ozs7O0FBRWpCLE1BQU1BLGdCQUFnQjtJQUFFO0lBQUc7SUFBRztDQUFHO0FBRWpDLE1BQU1DLE9BQU8sQ0FBQ0M7SUFDWixNQUFNLEVBQUVDLFNBQVNILGFBQWEsRUFBRSxHQUFHRTtJQUVuQyxPQUFRO3NCQUVOLG9CQUFDRSxhQUFJO1lBQUNELFFBQVFBO1lBQVFFLFdBQVc7Z0JBQUk7Z0JBQUs7Z0JBQUc7YUFBRzs7c0JBQ2hELG9CQUFDRCxhQUFJO1lBQUNELFFBQVFBO1lBQVFFLFdBQVc7Z0JBQUUsQ0FBQztnQkFBTTtnQkFBRzthQUFHOztzQkFDaEQsb0JBQUNELGFBQUk7WUFBQ0QsUUFBUUE7WUFBUUUsV0FBVztnQkFBSTtnQkFBRyxDQUFDO2dCQUFJO2FBQUc7O3NCQUVoRCxvQkFBQ0QsYUFBSTtZQUFDRCxRQUFRQTtZQUFRRSxXQUFXO2dCQUFFO2dCQUFPO2dCQUFHO2FBQUc7O3NCQUNoRCxvQkFBQ0QsYUFBSTtZQUFDRCxRQUFRQTtZQUFRRSxXQUFXO2dCQUFFLENBQUM7Z0JBQU07Z0JBQUc7YUFBRzs7c0JBQ2hELG9CQUFDRCxhQUFJO1lBQUNELFFBQVFBO1lBQVFFLFdBQVc7Z0JBQUk7Z0JBQUcsQ0FBQztnQkFBSTthQUFHOztLQUVqRDtBQUNIO01BRUEsV0FBZUoifQ==
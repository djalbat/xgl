"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _face = _interopRequireDefault(require("./face"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var defaultColour = [1, 1, 0];

var Cube = function Cube(properties) {
  var _properties$colour = properties.colour,
      colour = _properties$colour === void 0 ? defaultColour : _properties$colour;
  return [React.createElement(_face["default"], {
    colour: colour,
    rotations: [0, 0, 0]
  }), React.createElement(_face["default"], {
    colour: colour,
    rotations: [+90, 0, 0]
  }), React.createElement(_face["default"], {
    colour: colour,
    rotations: [0, +90, 0]
  }), React.createElement(_face["default"], {
    colour: colour,
    rotations: [180, 0, 0]
  }), React.createElement(_face["default"], {
    colour: colour,
    rotations: [-90, 0, 0]
  }), React.createElement(_face["default"], {
    colour: colour,
    rotations: [0, -90, 0]
  })];
};

var _default = Cube;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1YmUuanMiXSwibmFtZXMiOlsiZGVmYXVsdENvbG91ciIsIkN1YmUiLCJwcm9wZXJ0aWVzIiwiY29sb3VyIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOzs7O0FBRUEsSUFBTUEsYUFBYSxHQUFHLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLENBQXRCOztBQUVBLElBQU1DLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUNDLFVBQUQsRUFBZ0I7QUFBQSwyQkFDUUEsVUFEUixDQUNuQkMsTUFEbUI7QUFBQSxNQUNuQkEsTUFEbUIsbUNBQ1ZILGFBRFU7QUFHM0IsU0FBUSxDQUVOLG9CQUFDLGdCQUFEO0FBQU0sSUFBQSxNQUFNLEVBQUVHLE1BQWQ7QUFBc0IsSUFBQSxTQUFTLEVBQUUsQ0FBSSxDQUFKLEVBQVMsQ0FBVCxFQUFZLENBQVo7QUFBakMsSUFGTSxFQUdOLG9CQUFDLGdCQUFEO0FBQU0sSUFBQSxNQUFNLEVBQUVBLE1BQWQ7QUFBc0IsSUFBQSxTQUFTLEVBQUUsQ0FBRSxDQUFDLEVBQUgsRUFBUyxDQUFULEVBQVksQ0FBWjtBQUFqQyxJQUhNLEVBSU4sb0JBQUMsZ0JBQUQ7QUFBTSxJQUFBLE1BQU0sRUFBRUEsTUFBZDtBQUFzQixJQUFBLFNBQVMsRUFBRSxDQUFJLENBQUosRUFBTyxDQUFDLEVBQVIsRUFBWSxDQUFaO0FBQWpDLElBSk0sRUFNTixvQkFBQyxnQkFBRDtBQUFNLElBQUEsTUFBTSxFQUFFQSxNQUFkO0FBQXNCLElBQUEsU0FBUyxFQUFFLENBQUUsR0FBRixFQUFTLENBQVQsRUFBWSxDQUFaO0FBQWpDLElBTk0sRUFPTixvQkFBQyxnQkFBRDtBQUFNLElBQUEsTUFBTSxFQUFFQSxNQUFkO0FBQXNCLElBQUEsU0FBUyxFQUFFLENBQUUsQ0FBQyxFQUFILEVBQVMsQ0FBVCxFQUFZLENBQVo7QUFBakMsSUFQTSxFQVFOLG9CQUFDLGdCQUFEO0FBQU0sSUFBQSxNQUFNLEVBQUVBLE1BQWQ7QUFBc0IsSUFBQSxTQUFTLEVBQUUsQ0FBSSxDQUFKLEVBQU8sQ0FBQyxFQUFSLEVBQVksQ0FBWjtBQUFqQyxJQVJNLENBQVI7QUFXRCxDQWREOztlQWdCZUYsSSIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRmFjZSBmcm9tIFwiLi9mYWNlXCI7XG5cbmNvbnN0IGRlZmF1bHRDb2xvdXIgPSBbIDEsIDEsIDAgXTtcblxuY29uc3QgQ3ViZSA9IChwcm9wZXJ0aWVzKSA9PiB7XG4gIGNvbnN0IHsgY29sb3VyID0gZGVmYXVsdENvbG91ciB9ID0gcHJvcGVydGllcztcblxuICByZXR1cm4gKFtcblxuICAgIDxGYWNlIGNvbG91cj17Y29sb3VyfSByb3RhdGlvbnM9e1sgICAwLCAgIDAsIDAgXX0gLz4sXG4gICAgPEZhY2UgY29sb3VyPXtjb2xvdXJ9IHJvdGF0aW9ucz17WyArOTAsICAgMCwgMCBdfSAvPixcbiAgICA8RmFjZSBjb2xvdXI9e2NvbG91cn0gcm90YXRpb25zPXtbICAgMCwgKzkwLCAwIF19IC8+LFxuXG4gICAgPEZhY2UgY29sb3VyPXtjb2xvdXJ9IHJvdGF0aW9ucz17WyAxODAsICAgMCwgMCBdfSAvPixcbiAgICA8RmFjZSBjb2xvdXI9e2NvbG91cn0gcm90YXRpb25zPXtbIC05MCwgICAwLCAwIF19IC8+LFxuICAgIDxGYWNlIGNvbG91cj17Y29sb3VyfSByb3RhdGlvbnM9e1sgICAwLCAtOTAsIDAgXX0gLz4sXG5cbiAgXSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDdWJlO1xuIl19
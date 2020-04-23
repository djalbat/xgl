"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _texturedTriangle = _interopRequireDefault(require("./texturedTriangle"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Side = function Side(properties) {
  return /*#__PURE__*/React.createElement(_texturedTriangle["default"], {
    scale: [1, 1 / Math.sqrt(2), 1],
    position: [-0.5, 0, 0.5],
    rotations: [-45, 0, 0]
  });
};

var _default = Side;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGUuanMiXSwibmFtZXMiOlsiU2lkZSIsInByb3BlcnRpZXMiLCJNYXRoIiwic3FydCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7OztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUNDLFVBQUQ7QUFBQSxzQkFFWCxvQkFBQyw0QkFBRDtBQUFrQixJQUFBLEtBQUssRUFBRSxDQUFFLENBQUYsRUFBSyxJQUFFQyxJQUFJLENBQUNDLElBQUwsQ0FBVSxDQUFWLENBQVAsRUFBcUIsQ0FBckIsQ0FBekI7QUFBbUQsSUFBQSxRQUFRLEVBQUUsQ0FBRSxDQUFDLEdBQUgsRUFBUSxDQUFSLEVBQVcsR0FBWCxDQUE3RDtBQUErRSxJQUFBLFNBQVMsRUFBRSxDQUFFLENBQUMsRUFBSCxFQUFPLENBQVAsRUFBVSxDQUFWO0FBQTFGLElBRlc7QUFBQSxDQUFiOztlQU1lSCxJIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBUZXh0dXJlZFRyaWFuZ2xlIGZyb20gXCIuL3RleHR1cmVkVHJpYW5nbGVcIjtcblxuY29uc3QgU2lkZSA9IChwcm9wZXJ0aWVzKSA9PlxuXG4gIDxUZXh0dXJlZFRyaWFuZ2xlIHNjYWxlPXtbIDEsIDEvTWF0aC5zcXJ0KDIpLCAxIF19IHBvc2l0aW9uPXtbIC0wLjUsIDAsIDAuNSBdfSByb3RhdGlvbnM9e1sgLTQ1LCAwLCAwIF19IC8+XG5cbjtcblxuZXhwb3J0IGRlZmF1bHQgU2lkZTtcbiJdfQ==
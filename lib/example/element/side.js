"use strict";

var _texturedTriangle = _interopRequireDefault(require("./texturedTriangle"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Side = function Side(properties) {
  return React.createElement(_texturedTriangle["default"], {
    scale: [1, 1 / Math.sqrt(2), 1],
    position: [-0.5, 0, 0.5],
    rotations: [-45, 0, 0]
  });
};

module.exports = Side;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGUuanMiXSwibmFtZXMiOlsiU2lkZSIsInByb3BlcnRpZXMiLCJNYXRoIiwic3FydCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQ0MsVUFBRDtBQUFBLFNBRVgsb0JBQUMsNEJBQUQ7QUFBa0IsSUFBQSxLQUFLLEVBQUUsQ0FBRSxDQUFGLEVBQUssSUFBRUMsSUFBSSxDQUFDQyxJQUFMLENBQVUsQ0FBVixDQUFQLEVBQXFCLENBQXJCLENBQXpCO0FBQW1ELElBQUEsUUFBUSxFQUFFLENBQUUsQ0FBQyxHQUFILEVBQVEsQ0FBUixFQUFXLEdBQVgsQ0FBN0Q7QUFBK0UsSUFBQSxTQUFTLEVBQUUsQ0FBRSxDQUFDLEVBQUgsRUFBTyxDQUFQLEVBQVUsQ0FBVjtBQUExRixJQUZXO0FBQUEsQ0FBYjs7QUFNQUMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCTCxJQUFqQiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVGV4dHVyZWRUcmlhbmdsZSBmcm9tIFwiLi90ZXh0dXJlZFRyaWFuZ2xlXCI7XG5cbmNvbnN0IFNpZGUgPSAocHJvcGVydGllcykgPT5cblxuICA8VGV4dHVyZWRUcmlhbmdsZSBzY2FsZT17WyAxLCAxL01hdGguc3FydCgyKSwgMSBdfSBwb3NpdGlvbj17WyAtMC41LCAwLCAwLjUgXX0gcm90YXRpb25zPXtbIC00NSwgMCwgMCBdfSAvPlxuXG47XG5cbm1vZHVsZS5leHBvcnRzID0gU2lkZTtcbiJdfQ==
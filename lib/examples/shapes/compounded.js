'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CanvasElement = require('../../element/canvas'),
    ColouredCylinder = require('../common/coloured/cylinder'),
    TexturedCylinder = require('../common/textured/cylinder');

var CompoundedShapes = function (_CanvasElement) {
  _inherits(CompoundedShapes, _CanvasElement);

  function CompoundedShapes() {
    _classCallCheck(this, CompoundedShapes);

    return _possibleConstructorReturn(this, (CompoundedShapes.__proto__ || Object.getPrototypeOf(CompoundedShapes)).apply(this, arguments));
  }

  _createClass(CompoundedShapes, [{
    key: 'getChildElements',
    value: function getChildElements() {
      return [React.createElement(ColouredCylinder, { width: 1, height: 1, depth: 1, position: [3, -1, 1], rotations: [0, 0, 0], colour: [1, 0, 1, 1] }), React.createElement(TexturedCylinder, { width: 1, height: 1, depth: 1, position: [0, 1, -3], rotations: [0, 90, 90], imageName: 'gravel.jpg' })];
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return CanvasElement.fromProperties(CompoundedShapes, properties);
    }
  }]);

  return CompoundedShapes;
}(CanvasElement);

module.exports = CompoundedShapes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leGFtcGxlcy9zaGFwZXMvY29tcG91bmRlZC5qcyJdLCJuYW1lcyI6WyJDYW52YXNFbGVtZW50IiwicmVxdWlyZSIsIkNvbG91cmVkQ3lsaW5kZXIiLCJUZXh0dXJlZEN5bGluZGVyIiwiQ29tcG91bmRlZFNoYXBlcyIsInByb3BlcnRpZXMiLCJmcm9tUHJvcGVydGllcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsZ0JBQWdCQyxRQUFRLHNCQUFSLENBQXRCO0FBQUEsSUFDTUMsbUJBQW1CRCxRQUFRLDZCQUFSLENBRHpCO0FBQUEsSUFFTUUsbUJBQW1CRixRQUFRLDZCQUFSLENBRnpCOztJQUlNRyxnQjs7Ozs7Ozs7Ozs7dUNBQ2U7QUFDakIsYUFBUSxDQUVKLG9CQUFDLGdCQUFELElBQWtCLE9BQU8sQ0FBekIsRUFBNEIsUUFBUSxDQUFwQyxFQUF1QyxPQUFPLENBQTlDLEVBQWlELFVBQVUsQ0FBRSxDQUFGLEVBQUssQ0FBQyxDQUFOLEVBQVMsQ0FBVCxDQUEzRCxFQUF5RSxXQUFXLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLENBQXBGLEVBQWlHLFFBQVEsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLENBQXpHLEdBRkksRUFHSixvQkFBQyxnQkFBRCxJQUFrQixPQUFPLENBQXpCLEVBQTRCLFFBQVEsQ0FBcEMsRUFBdUMsT0FBTyxDQUE5QyxFQUFpRCxVQUFVLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFDLENBQVQsQ0FBM0QsRUFBeUUsV0FBVyxDQUFFLENBQUYsRUFBSyxFQUFMLEVBQVMsRUFBVCxDQUFwRixFQUFtRyxXQUFVLFlBQTdHLEdBSEksQ0FBUjtBQU1EOzs7bUNBRXFCQyxVLEVBQVk7QUFBRSxhQUFPTCxjQUFjTSxjQUFkLENBQTZCRixnQkFBN0IsRUFBK0NDLFVBQS9DLENBQVA7QUFBb0U7Ozs7RUFWM0VMLGE7O0FBYS9CTyxPQUFPQyxPQUFQLEdBQWlCSixnQkFBakIiLCJmaWxlIjoiY29tcG91bmRlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgQ2FudmFzRWxlbWVudCA9IHJlcXVpcmUoJy4uLy4uL2VsZW1lbnQvY2FudmFzJyksXG4gICAgICBDb2xvdXJlZEN5bGluZGVyID0gcmVxdWlyZSgnLi4vY29tbW9uL2NvbG91cmVkL2N5bGluZGVyJyksXG4gICAgICBUZXh0dXJlZEN5bGluZGVyID0gcmVxdWlyZSgnLi4vY29tbW9uL3RleHR1cmVkL2N5bGluZGVyJyk7XG5cbmNsYXNzIENvbXBvdW5kZWRTaGFwZXMgZXh0ZW5kcyBDYW52YXNFbGVtZW50IHtcbiAgZ2V0Q2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gKFtcblxuICAgICAgICA8Q29sb3VyZWRDeWxpbmRlciB3aWR0aD17MX0gaGVpZ2h0PXsxfSBkZXB0aD17MX0gcG9zaXRpb249e1sgMywgLTEsIDEgXX0gcm90YXRpb25zPXtbIDAsIDAsIDAgXX0gY29sb3VyPXtbIDEsIDAsIDEsIDEgXX0gLz4sXG4gICAgICAgIDxUZXh0dXJlZEN5bGluZGVyIHdpZHRoPXsxfSBoZWlnaHQ9ezF9IGRlcHRoPXsxfSBwb3NpdGlvbj17WyAwLCAxLCAtMyBdfSByb3RhdGlvbnM9e1sgMCwgOTAsIDkwIF19IGltYWdlTmFtZT1cImdyYXZlbC5qcGdcIiAvPixcblxuICAgIF0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHsgcmV0dXJuIENhbnZhc0VsZW1lbnQuZnJvbVByb3BlcnRpZXMoQ29tcG91bmRlZFNoYXBlcywgcHJvcGVydGllcyk7IH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb3VuZGVkU2hhcGVzO1xuIl19
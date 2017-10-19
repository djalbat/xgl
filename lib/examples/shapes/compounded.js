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
    key: 'childElements',
    value: function childElements() {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leGFtcGxlcy9zaGFwZXMvY29tcG91bmRlZC5qcyJdLCJuYW1lcyI6WyJDYW52YXNFbGVtZW50IiwicmVxdWlyZSIsIkNvbG91cmVkQ3lsaW5kZXIiLCJUZXh0dXJlZEN5bGluZGVyIiwiQ29tcG91bmRlZFNoYXBlcyIsInByb3BlcnRpZXMiLCJmcm9tUHJvcGVydGllcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsZ0JBQWdCQyxRQUFRLHNCQUFSLENBQXRCO0FBQUEsSUFDTUMsbUJBQW1CRCxRQUFRLDZCQUFSLENBRHpCO0FBQUEsSUFFTUUsbUJBQW1CRixRQUFRLDZCQUFSLENBRnpCOztJQUlNRyxnQjs7Ozs7Ozs7Ozs7b0NBQ1k7QUFDZCxhQUFRLENBRUosb0JBQUMsZ0JBQUQsSUFBa0IsT0FBTyxDQUF6QixFQUE0QixRQUFRLENBQXBDLEVBQXVDLE9BQU8sQ0FBOUMsRUFBaUQsVUFBVSxDQUFFLENBQUYsRUFBSyxDQUFDLENBQU4sRUFBUyxDQUFULENBQTNELEVBQXlFLFdBQVcsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsQ0FBcEYsRUFBaUcsUUFBUSxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVgsQ0FBekcsR0FGSSxFQUdKLG9CQUFDLGdCQUFELElBQWtCLE9BQU8sQ0FBekIsRUFBNEIsUUFBUSxDQUFwQyxFQUF1QyxPQUFPLENBQTlDLEVBQWlELFVBQVUsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQUMsQ0FBVCxDQUEzRCxFQUF5RSxXQUFXLENBQUUsQ0FBRixFQUFLLEVBQUwsRUFBUyxFQUFULENBQXBGLEVBQW1HLFdBQVUsWUFBN0csR0FISSxDQUFSO0FBTUQ7OzttQ0FFcUJDLFUsRUFBWTtBQUFFLGFBQU9MLGNBQWNNLGNBQWQsQ0FBNkJGLGdCQUE3QixFQUErQ0MsVUFBL0MsQ0FBUDtBQUFvRTs7OztFQVYzRUwsYTs7QUFhL0JPLE9BQU9DLE9BQVAsR0FBaUJKLGdCQUFqQiIsImZpbGUiOiJjb21wb3VuZGVkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBDYW52YXNFbGVtZW50ID0gcmVxdWlyZSgnLi4vLi4vZWxlbWVudC9jYW52YXMnKSxcbiAgICAgIENvbG91cmVkQ3lsaW5kZXIgPSByZXF1aXJlKCcuLi9jb21tb24vY29sb3VyZWQvY3lsaW5kZXInKSxcbiAgICAgIFRleHR1cmVkQ3lsaW5kZXIgPSByZXF1aXJlKCcuLi9jb21tb24vdGV4dHVyZWQvY3lsaW5kZXInKTtcblxuY2xhc3MgQ29tcG91bmRlZFNoYXBlcyBleHRlbmRzIENhbnZhc0VsZW1lbnQge1xuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoW1xuXG4gICAgICAgIDxDb2xvdXJlZEN5bGluZGVyIHdpZHRoPXsxfSBoZWlnaHQ9ezF9IGRlcHRoPXsxfSBwb3NpdGlvbj17WyAzLCAtMSwgMSBdfSByb3RhdGlvbnM9e1sgMCwgMCwgMCBdfSBjb2xvdXI9e1sgMSwgMCwgMSwgMSBdfSAvPixcbiAgICAgICAgPFRleHR1cmVkQ3lsaW5kZXIgd2lkdGg9ezF9IGhlaWdodD17MX0gZGVwdGg9ezF9IHBvc2l0aW9uPXtbIDAsIDEsIC0zIF19IHJvdGF0aW9ucz17WyAwLCA5MCwgOTAgXX0gaW1hZ2VOYW1lPVwiZ3JhdmVsLmpwZ1wiIC8+LFxuXG4gICAgXSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykgeyByZXR1cm4gQ2FudmFzRWxlbWVudC5mcm9tUHJvcGVydGllcyhDb21wb3VuZGVkU2hhcGVzLCBwcm9wZXJ0aWVzKTsgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvdW5kZWRTaGFwZXM7XG4iXX0=
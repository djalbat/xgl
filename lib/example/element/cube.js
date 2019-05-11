'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var jiggle = require('../../../index');

var ColouredSquare = require('./colouredSquare');

var CanvasElement = jiggle.CanvasElement;

var Cube = function (_CanvasElement) {
	_inherits(Cube, _CanvasElement);

	function Cube() {
		_classCallCheck(this, Cube);

		return _possibleConstructorReturn(this, (Cube.__proto__ || Object.getPrototypeOf(Cube)).apply(this, arguments));
	}

	_createClass(Cube, [{
		key: 'childElements',
		value: function childElements() {
			return [React.createElement(ColouredSquare, { colour: [1, 0, 0], rotations: [0, 0, 0] }), React.createElement(ColouredSquare, { colour: [0, 1, 0], rotations: [+90, 0, 0] }), React.createElement(ColouredSquare, { colour: [0, 0, 1], rotations: [0, +90, 0] }), React.createElement(ColouredSquare, { colour: [0, 1, 1], rotations: [180, 0, 0] }), React.createElement(ColouredSquare, { colour: [1, 0, 1], rotations: [-90, 0, 0] }), React.createElement(ColouredSquare, { colour: [1, 1, 0], rotations: [0, -90, 0] })];
		}
	}], [{
		key: 'fromProperties',
		value: function fromProperties(properties) {
			return CanvasElement.fromProperties(Cube, properties);
		}
	}]);

	return Cube;
}(CanvasElement);

module.exports = Cube;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leGFtcGxlL2VsZW1lbnQvY3ViZS5qcyJdLCJuYW1lcyI6WyJqaWdnbGUiLCJyZXF1aXJlIiwiQ29sb3VyZWRTcXVhcmUiLCJDYW52YXNFbGVtZW50IiwiQ3ViZSIsInByb3BlcnRpZXMiLCJmcm9tUHJvcGVydGllcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBU0MsUUFBUSxnQkFBUixDQUFmOztBQUVBLElBQU1DLGlCQUFpQkQsUUFBUSxrQkFBUixDQUF2Qjs7SUFFUUUsYSxHQUFrQkgsTSxDQUFsQkcsYTs7SUFFRkMsSTs7Ozs7Ozs7Ozs7a0NBQ1c7QUFDZixVQUFRLENBRVAsb0JBQUMsY0FBRCxJQUFnQixRQUFRLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLENBQXhCLEVBQXFDLFdBQVcsQ0FBSSxDQUFKLEVBQVMsQ0FBVCxFQUFZLENBQVosQ0FBaEQsR0FGTyxFQUdQLG9CQUFDLGNBQUQsSUFBZ0IsUUFBUSxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixDQUF4QixFQUFxQyxXQUFXLENBQUUsQ0FBQyxFQUFILEVBQVMsQ0FBVCxFQUFZLENBQVosQ0FBaEQsR0FITyxFQUlQLG9CQUFDLGNBQUQsSUFBZ0IsUUFBUSxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixDQUF4QixFQUFxQyxXQUFXLENBQUksQ0FBSixFQUFPLENBQUMsRUFBUixFQUFZLENBQVosQ0FBaEQsR0FKTyxFQU1QLG9CQUFDLGNBQUQsSUFBZ0IsUUFBUSxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixDQUF4QixFQUFxQyxXQUFXLENBQUUsR0FBRixFQUFTLENBQVQsRUFBWSxDQUFaLENBQWhELEdBTk8sRUFPUCxvQkFBQyxjQUFELElBQWdCLFFBQVEsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsQ0FBeEIsRUFBcUMsV0FBVyxDQUFFLENBQUMsRUFBSCxFQUFTLENBQVQsRUFBWSxDQUFaLENBQWhELEdBUE8sRUFRUCxvQkFBQyxjQUFELElBQWdCLFFBQVEsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsQ0FBeEIsRUFBcUMsV0FBVyxDQUFJLENBQUosRUFBTyxDQUFDLEVBQVIsRUFBWSxDQUFaLENBQWhELEdBUk8sQ0FBUjtBQVdBOzs7aUNBRXNCQyxVLEVBQVk7QUFBRSxVQUFPRixjQUFjRyxjQUFkLENBQTZCRixJQUE3QixFQUFtQ0MsVUFBbkMsQ0FBUDtBQUF3RDs7OztFQWYzRUYsYTs7QUFrQm5CSSxPQUFPQyxPQUFQLEdBQWlCSixJQUFqQiIsImZpbGUiOiJjdWJlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBqaWdnbGUgPSByZXF1aXJlKCcuLi8uLi8uLi9pbmRleCcpO1xuXG5jb25zdCBDb2xvdXJlZFNxdWFyZSA9IHJlcXVpcmUoJy4vY29sb3VyZWRTcXVhcmUnKTtcblxuY29uc3QgeyBDYW52YXNFbGVtZW50IH0gPSBqaWdnbGU7XG5cbmNsYXNzIEN1YmUgZXh0ZW5kcyBDYW52YXNFbGVtZW50IHtcblx0Y2hpbGRFbGVtZW50cygpIHtcblx0XHRyZXR1cm4gKFtcblxuXHRcdFx0PENvbG91cmVkU3F1YXJlIGNvbG91cj17WyAxLCAwLCAwIF19IHJvdGF0aW9ucz17WyAgIDAsICAgMCwgMCBdfSAvPixcblx0XHRcdDxDb2xvdXJlZFNxdWFyZSBjb2xvdXI9e1sgMCwgMSwgMCBdfSByb3RhdGlvbnM9e1sgKzkwLCAgIDAsIDAgXX0gLz4sXG5cdFx0XHQ8Q29sb3VyZWRTcXVhcmUgY29sb3VyPXtbIDAsIDAsIDEgXX0gcm90YXRpb25zPXtbICAgMCwgKzkwLCAwIF19IC8+LFxuXG5cdFx0XHQ8Q29sb3VyZWRTcXVhcmUgY29sb3VyPXtbIDAsIDEsIDEgXX0gcm90YXRpb25zPXtbIDE4MCwgICAwLCAwIF19IC8+LFxuXHRcdFx0PENvbG91cmVkU3F1YXJlIGNvbG91cj17WyAxLCAwLCAxIF19IHJvdGF0aW9ucz17WyAtOTAsICAgMCwgMCBdfSAvPixcblx0XHRcdDxDb2xvdXJlZFNxdWFyZSBjb2xvdXI9e1sgMSwgMSwgMCBdfSByb3RhdGlvbnM9e1sgICAwLCAtOTAsIDAgXX0gLz4sXG5cblx0XHRdKTtcblx0fVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7IHJldHVybiBDYW52YXNFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKEN1YmUsIHByb3BlcnRpZXMpOyB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ3ViZTtcbiJdfQ==